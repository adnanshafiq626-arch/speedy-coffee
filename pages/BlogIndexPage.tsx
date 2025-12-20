import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ArticleCard from '../components/blog/ArticleCard';
import SEOHead from '../components/seo/SEOHead';
import Breadcrumbs from '../components/blog/Breadcrumbs';
import { getAllArticles, getAllCategories } from '../utils/contentLoader';

const BlogIndexPage: React.FC = () => {
    const allArticles = getAllArticles();
    const categories = getAllCategories();
    const [selectedCategory, setSelectedCategory] = useState<string>('All');
    const [currentPage, setCurrentPage] = useState(1);
    const articlesPerPage = 6;

    // Filter articles by category
    const filteredArticles = selectedCategory === 'All'
        ? allArticles
        : allArticles.filter(article => article.category === selectedCategory);

    // Pagination
    const indexOfLastArticle = currentPage * articlesPerPage;
    const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
    const currentArticles = filteredArticles.slice(indexOfFirstArticle, indexOfLastArticle);
    const totalPages = Math.ceil(filteredArticles.length / articlesPerPage);

    const breadcrumbItems = [
        { label: 'Home', href: '/' },
        { label: 'Blog', href: '/blog' }
    ];

    return (
        <>
            <SEOHead
                title="Coffee Blog - Tips, Stories & Brewing Guides"
                description="Explore our coffee blog for brewing tips, sustainability stories, coffee science, and expert guides to help you make the perfect cup."
                ogType="website"
            />

            <div className="min-h-screen bg-bg-hero dark:bg-bg-hero-dark">
                {/* Hero Section */}
                <section className="relative bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 pt-32 pb-20 px-6">
                    <div className="max-w-7xl mx-auto">
                        <Breadcrumbs items={breadcrumbItems} />

                        <div className="text-center max-w-3xl mx-auto">
                            <span className="text-primary font-mono text-xs font-bold tracking-widest uppercase mb-4 block">
                                The Speedy Coffee Blog
                            </span>
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
                                Coffee Stories & <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                                    Brewing Wisdom
                                </span>
                            </h1>
                            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
                                Dive into the world of coffee with expert tips, sustainability stories,
                                and the science behind your perfect cup.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Category Filter */}
                <section className="bg-white dark:bg-surface-dark border-y border-gray-200 dark:border-gray-800 sticky top-0 z-10">
                    <div className="max-w-7xl mx-auto px-6 py-4">
                        <div className="flex items-center gap-3 overflow-x-auto scrollbar-hide">
                            <button
                                onClick={() => {
                                    setSelectedCategory('All');
                                    setCurrentPage(1);
                                }}
                                className={`px-4 py-2 rounded-full font-medium text-sm whitespace-nowrap transition-all ${selectedCategory === 'All'
                                        ? 'bg-primary text-black'
                                        : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                                    }`}
                            >
                                All Articles ({allArticles.length})
                            </button>
                            {categories.map(category => {
                                const count = allArticles.filter(a => a.category === category).length;
                                return (
                                    <button
                                        key={category}
                                        onClick={() => {
                                            setSelectedCategory(category);
                                            setCurrentPage(1);
                                        }}
                                        className={`px-4 py-2 rounded-full font-medium text-sm whitespace-nowrap transition-all ${selectedCategory === category
                                                ? 'bg-primary text-black'
                                                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                                            }`}
                                    >
                                        {category} ({count})
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* Articles Grid */}
                <section className="py-16 px-6">
                    <div className="max-w-7xl mx-auto">
                        {currentArticles.length > 0 ? (
                            <>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                    {currentArticles.map(article => (
                                        <ArticleCard key={article.id} article={article} />
                                    ))}
                                </div>

                                {/* Pagination */}
                                {totalPages > 1 && (
                                    <div className="mt-12 flex items-center justify-center gap-2">
                                        <button
                                            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                                            disabled={currentPage === 1}
                                            className="px-4 py-2 rounded-lg bg-white dark:bg-surface-dark border border-gray-200 dark:border-gray-800 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                                        >
                                            <span className="material-icons-outlined">chevron_left</span>
                                        </button>

                                        {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                                            <button
                                                key={page}
                                                onClick={() => setCurrentPage(page)}
                                                className={`px-4 py-2 rounded-lg font-medium transition-all ${currentPage === page
                                                        ? 'bg-primary text-black'
                                                        : 'bg-white dark:bg-surface-dark border border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800'
                                                    }`}
                                            >
                                                {page}
                                            </button>
                                        ))}

                                        <button
                                            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                                            disabled={currentPage === totalPages}
                                            className="px-4 py-2 rounded-lg bg-white dark:bg-surface-dark border border-gray-200 dark:border-gray-800 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                                        >
                                            <span className="material-icons-outlined">chevron_right</span>
                                        </button>
                                    </div>
                                )}
                            </>
                        ) : (
                            <div className="text-center py-20">
                                <span className="material-icons-outlined text-6xl text-gray-300 dark:text-gray-700 mb-4">
                                    article
                                </span>
                                <p className="text-xl text-gray-600 dark:text-gray-400">
                                    No articles found in this category.
                                </p>
                            </div>
                        )}
                    </div>
                </section>

                {/* CTA Section */}
                <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-16 px-6 border-t border-gray-200 dark:border-gray-800">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 dark:text-white mb-4">
                            Never Miss a Story
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 mb-8">
                            Subscribe to get the latest coffee tips, brewing guides, and exclusive content delivered to your inbox.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 px-4 py-3 rounded-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-surface-dark focus:outline-none focus:ring-2 focus:ring-primary"
                            />
                            <button className="bg-gray-900 dark:bg-white text-white dark:text-black px-8 py-3 rounded-full font-bold hover:shadow-xl transition-all">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default BlogIndexPage;
