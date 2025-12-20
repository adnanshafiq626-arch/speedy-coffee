import React from 'react';
import { Link } from 'react-router-dom';
import ArticleCard from './blog/ArticleCard';
import { getLatestArticles } from '../utils/contentLoader';

const LatestArticles: React.FC = () => {
    const latestArticles = getLatestArticles(3);

    return (
        <section className="bg-white dark:bg-[#18181b] py-24 px-6 border-t border-gray-100 dark:border-gray-800">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="flex items-end justify-between mb-12">
                    <div>
                        <span className="text-primary font-mono text-xs font-bold tracking-widest uppercase mb-4 block">
                            From Our Blog
                        </span>
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 dark:text-white">
                            Latest Articles
                        </h2>
                    </div>
                    <Link
                        to="/blog"
                        className="group hidden md:flex items-center gap-2 text-gray-900 dark:text-white font-bold hover:text-primary transition-colors"
                    >
                        <span className="border-b-2 border-primary/50 group-hover:border-primary pb-0.5">
                            View All Articles
                        </span>
                        <span className="material-icons-outlined group-hover:translate-x-1 transition-transform">
                            arrow_forward
                        </span>
                    </Link>
                </div>

                {/* Articles Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {latestArticles.map((article) => (
                        <ArticleCard key={article.id} article={article} />
                    ))}
                </div>

                {/* Mobile View All Link */}
                <div className="mt-8 text-center md:hidden">
                    <Link
                        to="/blog"
                        className="inline-flex items-center gap-2 text-gray-900 dark:text-white font-bold hover:text-primary transition-colors"
                    >
                        <span className="border-b-2 border-primary/50 pb-0.5">
                            View All Articles
                        </span>
                        <span className="material-icons-outlined">arrow_forward</span>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default LatestArticles;
