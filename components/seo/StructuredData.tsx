import React from 'react';
import { Helmet } from 'react-helmet-async';
import type { StructuredDataProps } from '../../types/blog';

const StructuredData: React.FC<StructuredDataProps> = ({ type, data }) => {
    let schema: any = {};

    switch (type) {
        case 'Organization':
            schema = {
                '@context': 'https://schema.org',
                '@type': 'Organization',
                name: data.name || 'Speedy Coffee',
                url: data.url || 'https://speedycoffee.com',
                logo: data.logo || 'https://speedycoffee.com/logo.png',
                description: data.description || 'Premium caffeine delivered at the speed of light',
                sameAs: data.socialLinks || [
                    'https://twitter.com/speedycoffee',
                    'https://facebook.com/speedycoffee',
                    'https://instagram.com/speedycoffee'
                ],
                contactPoint: {
                    '@type': 'ContactPoint',
                    contactType: 'Customer Service',
                    email: data.email || 'hello@speedycoffee.com'
                }
            };
            break;

        case 'WebSite':
            schema = {
                '@context': 'https://schema.org',
                '@type': 'WebSite',
                name: data.name || 'Speedy Coffee',
                url: data.url || 'https://speedycoffee.com',
                description: data.description || 'Premium caffeine delivered at the speed of light',
                potentialAction: {
                    '@type': 'SearchAction',
                    target: {
                        '@type': 'EntryPoint',
                        urlTemplate: `${data.url || 'https://speedycoffee.com'}/search?q={search_term_string}`
                    },
                    'query-input': 'required name=search_term_string'
                }
            };
            break;

        case 'Article':
            schema = {
                '@context': 'https://schema.org',
                '@type': 'Article',
                headline: data.title,
                description: data.description,
                image: data.image,
                datePublished: data.publishDate,
                dateModified: data.modifiedDate || data.publishDate,
                author: {
                    '@type': 'Person',
                    name: data.author
                },
                publisher: {
                    '@type': 'Organization',
                    name: 'Speedy Coffee',
                    logo: {
                        '@type': 'ImageObject',
                        url: 'https://speedycoffee.com/logo.png'
                    }
                },
                mainEntityOfPage: {
                    '@type': 'WebPage',
                    '@id': data.url
                },
                keywords: data.tags?.join(', ')
            };
            break;

        case 'BreadcrumbList':
            schema = {
                '@context': 'https://schema.org',
                '@type': 'BreadcrumbList',
                itemListElement: data.items.map((item: any, index: number) => ({
                    '@type': 'ListItem',
                    position: index + 1,
                    name: item.label,
                    item: item.href
                }))
            };
            break;

        case 'FAQPage':
            schema = {
                '@context': 'https://schema.org',
                '@type': 'FAQPage',
                mainEntity: data.questions.map((faq: any) => ({
                    '@type': 'Question',
                    name: faq.question,
                    acceptedAnswer: {
                        '@type': 'Answer',
                        text: faq.answer
                    }
                }))
            };
            break;

        default:
            return null;
    }

    return (
        <Helmet>
            <script type="application/ld+json">
                {JSON.stringify(schema)}
            </script>
        </Helmet>
    );
};

export default StructuredData;
