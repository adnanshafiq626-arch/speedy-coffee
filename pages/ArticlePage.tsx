import React, { useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import SEOHead from '../components/seo/SEOHead';
import StructuredData from '../components/seo/StructuredData';
import Breadcrumbs from '../components/blog/Breadcrumbs';
import TableOfContents from '../components/blog/TableOfContents';
import RelatedArticles from '../components/blog/RelatedArticles';
import { getArticleBySlug, getRelatedArticles } from '../utils/contentLoader';

const ArticlePage: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const article = slug ? getArticleBySlug(slug) : undefined;

    useEffect(() => {
        // Add IDs to headings for TOC navigation
        if (article) {
            const headings = document.querySelectorAll('.article-content h2, .article-content h3');
            headings.forEach((heading) => {
                const id = heading.textContent?.toLowerCase().replace(/[^\w]+/g, '-') || '';
                heading.id = id;
            });
        }
    }, [article]);

    if (!article) {
        return <Navigate to="/blog" replace />;
    }

    const relatedArticles = getRelatedArticles(article, 3);
    const breadcrumbItems = [
        { label: 'Home', href: '/' },
        { label: 'Blog', href: '/blog' },
        { label: article.title, href: `/blog/${article.slug}` }
    ];

    const structuredDataItems = [
        { label: 'Home', href: 'https://speedycoffee.com' },
        { label: 'Blog', href: 'https://speedycoffee.com/blog' },
        { label: article.title, href: `https://speedycoffee.com/blog/${article.slug}` }
    ];

    return (
        <>
            <SEOHead
                title={article.title}
                description={article.excerpt}
                ogType="article"
                ogImage={article.featuredImage}
                publishDate={article.publishDate}
                author={article.author}
                tags={article.tags}
                canonical={`https://speedycoffee.com/blog/${article.slug}`}
            />

            <StructuredData
                type="Article"
                data={{
                    title: article.title,
                    description: article.excerpt,
                    image: article.featuredImage,
                    publishDate: article.publishDate,
                    author: article.author,
                    tags: article.tags,
                    url: `https://speedycoffee.com/blog/${article.slug}`
                }}
            />

            <StructuredData
                type="BreadcrumbList"
                data={{ items: structuredDataItems }}
            />

            <div className="min-h-screen bg-bg-hero dark:bg-bg-hero-dark">
                {/* Article Header */}
                <article className="pt-32 pb-16">
                    <div className="max-w-7xl mx-auto px-6">
                        <Breadcrumbs items={breadcrumbItems} />

                        {/* Article Meta */}
                        <div className="max-w-4xl mx-auto mb-8">
                            <div className="mb-6">
                                <span className="inline-block bg-primary text-black px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider">
                                    {article.category}
                                </span>
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                                {article.title}
                            </h1>

                            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                                {article.excerpt}
                            </p>

                            {/* Author & Date Info */}
                            <div className="flex items-center gap-6 pb-8 border-b border-gray-200 dark:border-gray-800">
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                                        <span className="material-icons-outlined text-white">person</span>
                                    </div>
                                    <div>
                                        <div className="font-bold text-gray-900 dark:text-white">
                                            {article.author}
                                        </div>
                                        <div className="text-sm text-gray-500 dark:text-gray-400">
                                            Author
                                        </div>
                                    </div>
                                </div>

                                <div className="h-12 w-px bg-gray-200 dark:bg-gray-800" />

                                <div>
                                    <div className="flex items-center gap-2 text-gray-900 dark:text-white">
                                        <span className="material-icons-outlined text-lg">calendar_today</span>
                                        <span className="font-medium">
                                            {new Date(article.publishDate).toLocaleDateString('en-US', {
                                                month: 'long',
                                                day: 'numeric',
                                                year: 'numeric'
                                            })}
                                        </span>
                                    </div>
                                    {article.readTime && (
                                        <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                                            {article.readTime}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Article Content with TOC */}
                        <div className="max-w-7xl mx-auto">
                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                                {/* Main Content */}
                                <div className="lg:col-span-8">
                                    {/* Featured Image */}
                                    <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-gray-100 dark:bg-gray-900 mb-12">
                                        <img
                                            src={article.featuredImage}
                                            alt={article.title}
                                            className="absolute inset-0 w-full h-full object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                                    </div>

                                    {/* Article Body */}
                                    <div className="article-content prose prose-lg dark:prose-invert max-w-none">
                                        <div className="text-gray-700 dark:text-gray-300 leading-relaxed space-y-6">
                                            {article.content.split('\n\n').map((paragraph, index) => {
                                                // Simple markdown-like parsing
                                                if (paragraph.startsWith('# ')) {
                                                    return (
                                                        <h1 key={index} className="text-4xl font-display font-bold text-gray-900 dark:text-white mt-8 mb-4">
                                                            {paragraph.replace('# ', '')}
                                                        </h1>
                                                    );
                                                } else if (paragraph.startsWith('## ')) {
                                                    return (
                                                        <h2 key={index} className="text-3xl font-display font-bold text-gray-900 dark:text-white mt-8 mb-4">
                                                            {paragraph.replace('## ', '')}
                                                        </h2>
                                                    );
                                                } else if (paragraph.startsWith('### ')) {
                                                    return (
                                                        <h3 key={index} className="text-2xl font-display font-bold text-gray-900 dark:text-white mt-6 mb-3">
                                                            {paragraph.replace('### ', '')}
                                                        </h3>
                                                    );
                                                } else if (paragraph.trim()) {
                                                    return (
                                                        <p key={index} className="text-lg leading-relaxed">
                                                            {paragraph}
                                                        </p>
                                                    );
                                                }
                                                return null;
                                            })}
                                        </div>
                                    </div>

                                    {/* Tags */}
                                    <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
                                        <div className="flex flex-wrap gap-2">
                                            {article.tags.map(tag => (
                                                <span
                                                    key={tag}
                                                    className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium hover:bg-primary hover:text-black transition-colors cursor-pointer"
                                                >
                                                    #{tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Share Section */}
                                    <div className="mt-8 p-6 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl border border-gray-200 dark:border-gray-800">
                                        <h3 className="font-display font-bold text-gray-900 dark:text-white mb-4">
                                            Share this article
                                        </h3>
                                        <div className="flex gap-3">
                                            <button className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-white dark:bg-surface-dark rounded-lg border border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                                                <span className="material-icons-outlined">link</span>
                                                <span className="font-medium">Copy Link</span>
                                            </button>
                                            <button className="px-4 py-3 bg-white dark:bg-surface-dark rounded-lg border border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                                                <span className="material-icons-outlined">share</span>
                                            </button>
                                        </div>
                                    </div>

                                    {/* Related Articles */}
                                    <RelatedArticles articles={relatedArticles} />
                                </div>

                                {/* Sidebar - Table of Contents */}
                                <aside className="lg:col-span-4">
                                    <TableOfContents content={article.content} />
                                </aside>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        </>
    );
};

export default ArticlePage;
