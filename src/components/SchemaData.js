import React from 'react';
import { Helmet } from 'react-helmet-async';

const SchemaData = ({ data }) => (
    <Helmet>
        <script type="application/ld+json">{JSON.stringify(data)}</script>
    </Helmet>
);

export const OrganizationSchema = {
    "@context": "https://schema.org",
    "@type": "Hospital",
    "name": "MOSCMM Kariambadi Eye Hospital",
    "alternateName": "Kariambadi Eye Hospital",
    "url": "https://www.kariambadieyehospital.com",
    "logo": "https://www.kariambadieyehospital.com/logo.png"
};

export const WebsiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "MOSCMM Kariambadi Eye Hospital",
    "alternateName": "Kariambadi Eye Hospital",
    "url": "https://www.kariambadieyehospital.com"
};

export const ArticleSchema = ({ title, description, author, date, image, url }) => {
    const data = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": url
        },
        "headline": title,
        "image": image,
        "author": {
            "@type": "Person",
            "name": author || "MOSCMM Admin"
        },
        "publisher": {
            "@type": "Organization",
            "name": "MOSCMM Kariambady Eye Hospital",
            "logo": {
                "@type": "ImageObject",
                "url": "https://www.kariambadieyehospital.com/logo.png"
            }
        },
        "datePublished": date, // Ensure format is ISO 8601 if possible, or simple string
        "description": description
    };

    return <SchemaData data={data} />;
};
