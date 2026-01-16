import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Camera,
  X,
  ChevronLeft,
  ChevronRight,
  Calendar,
  ArrowRight
} from 'lucide-react';
import './Gallery.css';

const Gallery = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const galleryContext = require.context(
    '../assets/gallery',
    false,
    /\.(png|jpe?g|webp)$/i
  );

  const pinnedFirst = ['inau.jpg', 'first.jpg', '3 001.jpg'];
  const collator = new Intl.Collator(undefined, { numeric: true, sensitivity: 'base' });

  const galleryImages = galleryContext
    .keys()
    .map((key) => {
      const fileName = key.replace(/^\.\//, '');
      const fileNameLower = fileName.toLowerCase();
      const baseName = fileName.replace(/\.[^.]+$/, '');
      let title = baseName.replace(/[_-]+/g, ' ').replace(/\s+/g, ' ').trim();
      let description = '';

      const captionsByFile = {
        'eyecamp3.jpg': 'Free eye camp conducted in Chatigadha tribal colony, Wayanad',
        'cataract.jpg': 'A view of Cataract IOL Surgery in Eye hospital AC operation theatre',
        'diodelaser.jpg': 'Installation ceremony of Diode Laser conducted by H.G. Dr. Abraham Mar Epiphanios Thirumeni',
        'gallery-02.jpeg': 'A view of 1000 free spectacle frames distribution in connection with Silver Jubilee Celebration of MOSC Medical Mission',
        'skmj.jpg': 'Students free eye screening camp at SKMJ LP & UP School, Kalpetta',
        'skmj2.jpg': 'Students free eye screening camp at SKMJ LP & UP School, Kalpetta',
        'skmj3.jpg': 'Students free eye screening camp at SKMJ LP & UP School, Kalpetta',
        'mobileclininc.jpg': "State Bank of India donated fully equipped Mobile Eye Clinic unit. Inauguration ceremony — SBI General Manager Mr. Antonio Jose D'zoza handed over the key.",
        'mobileclinic.jpg': "State Bank of India donated fully equipped Mobile Eye Clinic unit. Inauguration ceremony — SBI General Manager Mr. Antonio Jose D'zoza handed over the key.",
        'nethra.jpg': 'Nethrapakshacharana Samapana Sammelanam in the presence of Wayanad District Collector Mr. S. Suhas, I.A.S. Welcome speech — Secretary',
        'nethra1.jpg': 'Participants of Nethrapakshacharana Samapana Sammelanam',
        'kalpetta.jpg': 'District Collector Mr. V. Kesevendrakumar, I.A.S. inaugurated the evening clinic at District Headquarters, Kalpetta',
        'specs.jpg': 'A view of 1000 free spectacle frames distribution in connection with Silver Jubilee Celebration of MOSC Medical Mission',
        'laser.jpg': 'YAG laser switch-on ceremony by His Excellency Abraham Mar Epiphanios (Bishop of Sultan Bathery Diocese), in the presence of Kalpetta MLA Shri. T. Siddique',
        'inau.jpg': 'Rain water harvesting project inauguration',
        'first.jpg': 'A cherished old memory — early eye testing at our hospital',
        '3 001.jpg': 'A legacy of care — eye treatment provided for 22 people (old photo)'
      };

      if (captionsByFile[fileNameLower]) {
        title = captionsByFile[fileNameLower];
        description = captionsByFile[fileNameLower];
      }

      if (!description) {
        if (fileNameLower.startsWith('eyecamp')) {
          title = 'Chettiyamparambu free eye camp';
          description = 'Chettiyamparambu free eye camp';
        }

        if (fileNameLower.startsWith('visit')) {
          title = 'Our Patron & President H.H. Bava Thirumeni visit — Kalpetta Evening Clinic';
          description = 'Our Patron & President H.H. Bava Thirumeni with Vice President Epiphanios Thirumeni visit Kalpetta Evening Clinic near Civil Station, Kalpetta.';
        }

        if (fileNameLower.startsWith("bava's visit")) {
          title = "Bava's Visit";
          description = "Bava's Visit";
        }
      }

      return {
        fileName,
        src: galleryContext(key),
        title: title || baseName,
        description
      };
    })
    .sort((a, b) => {
      const aLower = a.fileName.toLowerCase();
      const bLower = b.fileName.toLowerCase();

      const aPinnedIndex = pinnedFirst.indexOf(aLower);
      const bPinnedIndex = pinnedFirst.indexOf(bLower);

      if (aPinnedIndex !== -1 || bPinnedIndex !== -1) {
        if (aPinnedIndex === -1) return 1;
        if (bPinnedIndex === -1) return -1;
        return aPinnedIndex - bPinnedIndex;
      }

      const aIsDiode = aLower === 'diodelaser.jpg';
      const bIsDiode = bLower === 'diodelaser.jpg';

      const aIsVisit = aLower.startsWith('visit') || aLower.startsWith("bava's visit");
      const bIsVisit = bLower.startsWith('visit') || bLower.startsWith("bava's visit");

      // Place visit photos immediately after diode laser
      if (aIsDiode !== bIsDiode) return aIsDiode ? -1 : 1;
      if (aIsVisit !== bIsVisit) {
        // Visit group should come right after diode laser, before other images.
        return aIsVisit ? -1 : 1;
      }

      return collator.compare(a.fileName, b.fileName);
    })
    .map((img, idx) => ({
      id: idx + 1,
      src: img.src,
      thumb: img.src,
      title: img.title,
      description: img.description,
      category: 'all'
    }));

  const categories = [{ id: 'all', name: 'All Photos' }];

  const filteredImages = galleryImages;

  const openLightbox = (index) => {
    setCurrentImage(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'auto';
  };

  const navigateImage = (direction) => {
    if (direction === 'prev') {
      setCurrentImage(prev => (prev === 0 ? filteredImages.length - 1 : prev - 1));
    } else {
      setCurrentImage(prev => (prev === filteredImages.length - 1 ? 0 : prev + 1));
    }
  };

  return (
    <div className="gallery-page">
      {/* Page Header */}
      <section className="page-header">
        <div className="page-header__overlay"></div>
        <div className="container">
          <div className="page-header__content">
            <h1>Gallery</h1>
            <p>Explore images of our facility, services, and community outreach programs</p>
            <nav className="breadcrumb">
              <Link to="/">Home</Link>
              <span>/</span>
              <span>Gallery</span>
            </nav>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="gallery-section section">
        <div className="container">
          <div className="section-header">
            <span className="gallery-label">Our Photo Gallery</span>
            <h2 className="section-title">Glimpses of Our Work</h2>
            <p className="section-subtitle">
              Browse through photos of our hospital facilities, community eye camps, 
              surgeries, and outreach programs that showcase our commitment to 
              eye care for all.
            </p>
          </div>

          {/* Category Filter */}
          {categories.length > 1 && (
            <div className="gallery-filter">
              {categories.map(category => (
                <button
                  key={category.id}
                  className={`gallery-filter__btn ${activeCategory === category.id ? 'gallery-filter__btn--active' : ''}`}
                  onClick={() => setActiveCategory(category.id)}
                >
                  {category.name}
                </button>
              ))}
            </div>
          )}

          {/* Gallery Grid */}
          <div className="gallery-grid">
            {filteredImages.map((image, index) => (
              <div 
                key={image.id} 
                className="gallery-item"
                onClick={() => openLightbox(index)}
              >
                <img src={image.thumb} alt={image.title} />
                <div className="gallery-item__overlay">
                  <Camera size={24} />
                  <span>{image.title}</span>
                </div>
              </div>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="gallery-empty">
              <p>No images found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="lightbox" onClick={closeLightbox}>
          <button className="lightbox__close" onClick={closeLightbox}>
            <X size={24} />
          </button>
          <button 
            className="lightbox__nav lightbox__nav--prev" 
            onClick={(e) => { e.stopPropagation(); navigateImage('prev'); }}
          >
            <ChevronLeft size={32} />
          </button>
          <div className="lightbox__content" onClick={(e) => e.stopPropagation()}>
            <img src={filteredImages[currentImage].src} alt={filteredImages[currentImage].title} />
            <div className="lightbox__caption">
              <h3>{filteredImages[currentImage].title}</h3>
              <p>{filteredImages[currentImage].description}</p>
            </div>
          </div>
          <button 
            className="lightbox__nav lightbox__nav--next" 
            onClick={(e) => { e.stopPropagation(); navigateImage('next'); }}
          >
            <ChevronRight size={32} />
          </button>
          <div className="lightbox__counter">
            {currentImage + 1} / {filteredImages.length}
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="gallery-cta">
        <div className="container">
          <div className="gallery-cta__content">
            <h2>Visit Our Hospital</h2>
            <p>
              Experience our world-class eye care services firsthand. 
              Schedule a visit or book an appointment today.
            </p>
            <div className="gallery-cta__buttons">
              <Link to="/patient-info" className="btn btn-primary btn-lg">
                <Calendar size={20} />
                Book Appointment
              </Link>
              <Link to="/contact" className="btn btn-outline btn-lg">
                Get Directions
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
