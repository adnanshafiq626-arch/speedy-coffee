import React from 'react';
import { Link } from 'react-router-dom';
import type { BreadcrumbItem } from '../../types/blog';

interface BreadcrumbsProps {
    items: BreadcrumbItem[];
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
    return (
        <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                {items.map((item, index) => (
                    <li key={item.href} className="flex items-center gap-2">
                        {index > 0 && (
                            <span className="material-icons-outlined text-xs">
                                chevron_right
                            </span>
                        )}
                        {index === items.length - 1 ? (
                            <span className="text-gray-900 dark:text-gray-100 font-medium">
                                {item.label}
                            </span>
                        ) : (
                            <Link
                                to={item.href}
                                className="hover:text-primary transition-colors"
                            >
                                {item.label}
                            </Link>
                        )}
                    </li>
                ))}
            </ol>
        </nav>
    );
};

export default Breadcrumbs;
