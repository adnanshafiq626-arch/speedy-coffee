import React from 'react';
import { Link } from 'react-router-dom';
import type { RelatedArticle } from '../../types/blog';

interface RelatedArticlesProps {
    articles: RelatedArticle[];
}

const RelatedArticles: React.FC<RelatedArticlesProps> = ({ articles }) => {
    if (articles.length === 0) return null;

    return (
        <section className="mt-16 pt-16 border-t border-gray-200 dark:border-gray-800">
            <h2 className="text-3xl font-display font-bold text-gray-900 dark:text-white mb-8">
                Related Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {articles.map((article) => (
                    <Link
                        key={article.slug}
                        to={`/blog/${article.slug}`}
                        className="group block bg-white dark:bg-surface-dark rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 hover:shadow-lg transition-all duration-300"
                    >
                        {/* Featured Image */}
                        <div className="relative aspect-[16/9] bg-gray-100 dark:bg-gray-900 overflow-hidden">
                            {article.featuredImage ? (
                                <img
                                    src={article.featuredImage}
                                    alt={article.title}
                                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                            ) : (
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                                    <span className="material-icons-outlined text-4xl text-gray-400 dark:text-gray-600">
                                        article
                                    </span>
                                </div>
                            )}
                            <div className="absolute top-3 left-3">
                                <span className="bg-primary text-black px-2 py-1 rounded-full text-xs font-bold uppercase">
                                    {article.category}
                                </span>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="p-4">
                            <h3 className="font-display font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary transition-colors line-clamp-2">
                                {article.title}
                            </h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                                {article.excerpt}
                            </p>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
};

export default RelatedArticles;
