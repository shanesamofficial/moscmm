import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, keywords, url, image, fullTitleOverride }) => {
    const siteTitle = 'MOSCMM Kariambadi Eye Hospital';
    const fullTitle = fullTitleOverride ? title : (title ? `${title} | ${siteTitle}` : siteTitle);
    const siteUrl = 'https://www.kariambadieyehospital.com';
    const fullUrl = url ? `${siteUrl}${url}` : siteUrl;
    const defaultImage = `${siteUrl}/og-image.jpg`;

    return (
        <Helmet>
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta name="application-name" content={siteTitle} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:site_name" content={siteTitle} />
            <meta property="og:url" content={fullUrl} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image || defaultImage} />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={fullUrl} />
            <meta property="twitter:title" content={fullTitle} />
            <meta property="twitter:description" content={description} />
            <meta property="twitter:image" content={image || defaultImage} />

            <link rel="canonical" href={fullUrl} />
        </Helmet>
    );
};

export default SEO;
