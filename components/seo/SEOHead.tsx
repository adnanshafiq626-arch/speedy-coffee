import React from 'react';
import { Helmet } from 'react-helmet-async';
import type { SEOProps } from '../../types/blog';

interface SEOHeadProps extends SEOProps {
    siteName?: string;
}

const SEOHead: React.FC<SEOHeadProps> = ({
    title,
    description,
    canonical,
    ogImage,
    ogType = 'website',
    twitterCard = 'summary_large_image',
    publishDate,
    author,
    tags,
    siteName = 'Speedy Coffee'
}) => {
    const fullTitle = title.includes(siteName) ? title : `${title} | ${siteName}`;
    const siteUrl = typeof window !== 'undefined' ? window.location.origin : 'https://speedycoffee.com';
    const canonicalUrl = canonical || (typeof window !== 'undefined' ? window.location.href : '');
    const defaultImage = `${siteUrl}/images/og-default.jpg`;
    const imageUrl = ogImage ? (ogImage.startsWith('http') ? ogImage : `${siteUrl}${ogImage}`) : defaultImage;

    return (
        <Helmet>
            {/* Primary Meta Tags */}
            <title>{fullTitle}</title>
            <meta name="title" content={fullTitle} />
            <meta name="description" content={description} />
            {canonical && <link rel="canonical" href={canonicalUrl} />}

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={ogType} />
            <meta property="og:url" content={canonicalUrl} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={imageUrl} />
            <meta property="og:site_name" content={siteName} />

            {/* Article specific OG tags */}
            {ogType === 'article' && publishDate && (
                <>
                    <meta property="article:published_time" content={publishDate} />
                    {author && <meta property="article:author" content={author} />}
                    {tags && tags.map(tag => (
                        <meta key={tag} property="article:tag" content={tag} />
                    ))}
                </>
            )}

            {/* Twitter */}
            <meta property="twitter:card" content={twitterCard} />
            <meta property="twitter:url" content={canonicalUrl} />
            <meta property="twitter:title" content={fullTitle} />
            <meta property="twitter:description" content={description} />
            <meta property="twitter:image" content={imageUrl} />

            {/* Additional SEO */}
            <meta name="robots" content="index, follow" />
            <meta name="language" content="English" />
            <meta name="revisit-after" content="7 days" />
        </Helmet>
    );
};

export default SEOHead;
