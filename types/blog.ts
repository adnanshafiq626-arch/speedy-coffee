export interface ArticleFrontmatter {
    title: string;
    slug: string;
    excerpt: string;
    author: string;
    publishDate: string;
    category: string;
    tags: string[];
    featuredImage: string;
    readTime?: string;
}

export interface Article extends ArticleFrontmatter {
    content: string;
    id: string;
}

export interface SEOProps {
    title: string;
    description: string;
    canonical?: string;
    ogImage?: string;
    ogType?: 'website' | 'article';
    twitterCard?: 'summary' | 'summary_large_image';
    publishDate?: string;
    author?: string;
    tags?: string[];
}

export interface StructuredDataProps {
    type: 'Organization' | 'WebSite' | 'Article' | 'BreadcrumbList' | 'FAQPage';
    data: any;
}

export interface BreadcrumbItem {
    label: string;
    href: string;
}

export interface RelatedArticle {
    title: string;
    slug: string;
    excerpt: string;
    featuredImage: string;
    category: string;
}
