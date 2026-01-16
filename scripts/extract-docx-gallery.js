/*
  Extracts images and nearby captions from an expanded .docx folder and generates:
  - Copied images into src/assets/gallery/
  - A JS module at src/data/galleryDoc.js exporting categories + images

  Usage (PowerShell):
    $tmp = "./.tmp/photos_docx";
    Remove-Item -Recurse -Force $tmp -ErrorAction SilentlyContinue
    New-Item -ItemType Directory -Force -Path $tmp | Out-Null
    Expand-Archive -Force "./src/assets/photos.docx" $tmp
    node ./scripts/extract-docx-gallery.js $tmp
*/

const fs = require('fs');
const path = require('path');

function readUtf8(filePath) {
  return fs.readFileSync(filePath, 'utf8');
}

function ensureDir(dirPath) {
  fs.mkdirSync(dirPath, { recursive: true });
}

function decodeXmlEntities(text) {
  return text
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'");
}

function toTitleAndDescription(caption, fallbackIndex) {
  const cleaned = caption.replace(/\s+/g, ' ').trim();
  if (!cleaned) {
    return { title: `Photo ${String(fallbackIndex).padStart(2, '0')}`, description: '' };
  }

  // Try split formats like "Title - Description" or "Title: Description"
  const dashParts = cleaned.split(/\s+-\s+/);
  if (dashParts.length >= 2) {
    const title = dashParts[0].trim();
    const description = dashParts.slice(1).join(' - ').trim();
    return { title: title || `Photo ${String(fallbackIndex).padStart(2, '0')}`, description };
  }

  const colonParts = cleaned.split(/:\s+/);
  if (colonParts.length >= 2) {
    const title = colonParts[0].trim();
    const description = colonParts.slice(1).join(': ').trim();
    return { title: title || `Photo ${String(fallbackIndex).padStart(2, '0')}`, description };
  }

  return { title: cleaned, description: '' };
}

function guessCategory(text) {
  const t = (text || '').toLowerCase();
  if (/(camp|screening|outreach)/.test(t)) return 'camps';
  if (/(surgery|operation|ot|theatre)/.test(t)) return 'surgeries';
  if (/(event|inaugur|celebrat|anniversary|meeting)/.test(t)) return 'events';
  return 'facility';
}

function parseRels(relsXml) {
  const map = new Map();
  // <Relationship Id="rId5" Type=".../image" Target="media/image1.jpeg"/>
  const relRegex = /<Relationship\s+[^>]*Id="([^"]+)"[^>]*Target="([^"]+)"[^>]*\/>/g;
  let match;
  while ((match = relRegex.exec(relsXml)) !== null) {
    const id = match[1];
    const target = match[2];
    map.set(id, target);
  }
  return map;
}

function extractParagraphs(documentXml) {
  const paragraphs = documentXml.match(/<w:p[\s\S]*?<\/w:p>/g) || [];
  return paragraphs.map((pXml) => {
    const textMatches = [...pXml.matchAll(/<w:t[^>]*>([\s\S]*?)<\/w:t>/g)].map(m => decodeXmlEntities(m[1]));
    const text = textMatches.join('').replace(/\s+/g, ' ').trim();
    const rIds = [...pXml.matchAll(/r:embed="(rId\d+)"/g)].map(m => m[1]);
    return { text, rIds, raw: pXml };
  });
}

function main() {
  const expandedRoot = process.argv[2];
  if (!expandedRoot) {
    console.error('Usage: node ./scripts/extract-docx-gallery.js <expanded-docx-folder>');
    process.exit(1);
  }

  const repoRoot = path.resolve(__dirname, '..');
  const relsPath = path.join(expandedRoot, 'word', '_rels', 'document.xml.rels');
  const docPath = path.join(expandedRoot, 'word', 'document.xml');
  const mediaDir = path.join(expandedRoot, 'word', 'media');

  if (!fs.existsSync(relsPath) || !fs.existsSync(docPath) || !fs.existsSync(mediaDir)) {
    console.error('Expanded docx folder missing expected files:', { relsPath, docPath, mediaDir });
    process.exit(1);
  }

  const relsMap = parseRels(readUtf8(relsPath));
  const paragraphs = extractParagraphs(readUtf8(docPath));

  // Find images in reading order
  const items = [];
  for (let i = 0; i < paragraphs.length; i++) {
    const p = paragraphs[i];
    if (!p.rIds || p.rIds.length === 0) continue;

    for (const rId of p.rIds) {
      // Caption strategy: prefer same paragraph text; otherwise next non-empty text paragraph.
      let caption = p.text;
      if (!caption) {
        for (let j = i + 1; j < Math.min(paragraphs.length, i + 4); j++) {
          if (paragraphs[j].rIds.length === 0 && paragraphs[j].text) {
            caption = paragraphs[j].text;
            break;
          }
        }
      }

      items.push({ rId, caption });
    }
  }

  if (items.length === 0) {
    console.error('No images found in document.xml. Is photos.docx containing embedded images?');
    process.exit(1);
  }

  const outAssetsDir = path.join(repoRoot, 'src', 'assets', 'gallery');
  ensureDir(outAssetsDir);

  const imports = [];
  const images = [];

  let index = 1;
  for (const item of items) {
    const target = relsMap.get(item.rId);
    if (!target || !target.startsWith('media/')) {
      continue;
    }

    const srcFile = path.join(mediaDir, path.basename(target));
    if (!fs.existsSync(srcFile)) {
      continue;
    }

    const ext = path.extname(srcFile).toLowerCase() || '.jpg';
    const fileName = `gallery-${String(index).padStart(2, '0')}${ext}`;
    const destFile = path.join(outAssetsDir, fileName);

    fs.copyFileSync(srcFile, destFile);

    const varName = `img${String(index).padStart(2, '0')}`;
    imports.push(`import ${varName} from '../assets/gallery/${fileName}';`);

    const { title, description } = toTitleAndDescription(item.caption, index);
    const category = guessCategory(item.caption || title);

    images.push({
      id: index,
      varName,
      title,
      description,
      category
    });

    index++;
  }

  if (images.length === 0) {
    console.error('No images were copied.');
    process.exit(1);
  }

  const usedCategories = Array.from(new Set(images.map(i => i.category)));
  const categoryNames = {
    all: 'All Photos',
    facility: 'Hospital Facility',
    camps: 'Eye Camps',
    surgeries: 'Surgeries',
    outreach: 'Community Outreach',
    events: 'Events'
  };

  const categories = ['all', ...usedCategories].map((id) => ({ id, name: categoryNames[id] || id }));

  const outModulePath = path.join(repoRoot, 'src', 'data', 'galleryDoc.js');
  const moduleContent = `${imports.join('\n')}

export const galleryCategories = ${JSON.stringify(categories, null, 2)};

export const galleryImages = [
${images
  .map((img) => {
    const title = JSON.stringify(img.title);
    const description = JSON.stringify(img.description);
    const category = JSON.stringify(img.category);
    return `  {\n    id: ${img.id},\n    src: ${img.varName},\n    thumb: ${img.varName},\n    title: ${title},\n    description: ${description},\n    category: ${category}\n  }`;
  })
  .join(',\n')}
];
`;

  fs.writeFileSync(outModulePath, moduleContent, 'utf8');

  console.log(`Extracted ${images.length} images.`);
  console.log(`Wrote module: ${path.relative(repoRoot, outModulePath)}`);
  console.log(`Copied images to: ${path.relative(repoRoot, outAssetsDir)}`);
}

main();
