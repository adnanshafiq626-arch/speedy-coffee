import React from 'react';
import { Link } from 'react-router-dom';
import type { Article } from '../../types/blog';

interface ArticleCardProps {
    article: Article;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
    return (
        <Link
            to={`/blog/${article.slug}`}
            className="group block bg-white dark:bg-surface-dark rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
        >
            {/* Featured Image */}
            <div className="relative aspect-[16/9] overflow-hidden bg-gray-100 dark:bg-gray-900">
                {article.featuredImage ? (
                    <img
                        src={article.featuredImage}
                        alt={article.title}
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                ) : (
                    <>
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 group-hover:scale-110 transition-transform duration-500" />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <span className="material-icons-outlined text-6xl text-gray-400 dark:text-gray-600">
                                article
                            </span>
                        </div>
                    </>
                )}
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                    <span className="bg-primary text-black px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                        {article.category}
                    </span>
                </div>
            </div>

            {/* Content */}
            <div className="p-6">
                {/* Meta Info */}
                <div className="flex items-center gap-3 text-xs text-gray-500 dark:text-gray-400 mb-3">
                    <div className="flex items-center gap-1">
                        <span className="material-icons-outlined text-sm">person</span>
                        <span>{article.author}</span>
                    </div>
                    <span>•</span>
                    <div className="flex items-center gap-1">
                        <span className="material-icons-outlined text-sm">calendar_today</span>
                        <span>{new Date(article.publishDate).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric',
                            year: 'numeric'
                        })}</span>
                    </div>
                    {article.readTime && (
                        <>
                            <span>•</span>
                            <div className="flex items-center gap-1">
                                <span className="material-icons-outlined text-sm">schedule</span>
                                <span>{article.readTime}</span>
                            </div>
                        </>
                    )}
                </div>

                {/* Title */}
                <h3 className="text-xl font-display font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {article.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-600 dark:text-gray-400 line-clamp-3 mb-4">
                    {article.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                    {article.tags.slice(0, 3).map(tag => (
                        <span
                            key={tag}
                            className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-md"
                        >
                            #{tag}
                        </span>
                    ))}
                </div>

                {/* Read More Link */}
                <div className="mt-4 flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all">
                    <span>Read Article</span>
                    <span className="material-icons-outlined text-lg">arrow_forward</span>
                </div>
            </div>
        </Link>
    );
};

export default ArticleCard;
