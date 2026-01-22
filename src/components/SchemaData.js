import React from 'react';
import { Helmet } from 'react-helmet-async';

const SchemaData = ({ type, data }) => {
    const jsonLd = JSON.stringify(data);

    return (
        <Helmet>
            <script type="application/ld+json">{jsonLd}</script>
        </Helmet>
    );
};

export const OrganizationSchema = () => {
    const data = {
        "@context": "https://schema.org",
        "@type": "MedicalOrganization",
        "name": "MOSCMM Kariambady Eye Hospital",
        "url": "https://kariambadieyehospital.com",
        "logo": "https://kariambadieyehospital.com/logo.png",
        "description": "Charitable eye hospital in Wayanad providing affordable and high-quality eye care.",
        "telephone": "+914936247274",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Kenichira Karimbadi Rd, Kariampady",
            "addressLocality": "Meenangadi",
            "addressRegion": "Kerala",
            "postalCode": "673591",
            "addressCountry": "IN"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "11.6666",
            "longitude": "76.1666"
        },
        "medicalSpecialty": ["Ophthalmology"],
        "sameAs": [
            "https://www.facebook.com/moscmm.kariambady"
        ]
    };

    return <SchemaData type="Organization" data={data} />;
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
                "url": "https://kariambadieyehospital.com/logo.png"
            }
        },
        "datePublished": date, // Ensure format is ISO 8601 if possible, or simple string
        "description": description
    };

    return <SchemaData type="Article" data={data} />;
};
