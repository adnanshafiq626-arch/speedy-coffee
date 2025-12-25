import React, { useEffect, useState } from 'react';

interface TOCItem {
    id: string;
    text: string;
    level: number;
}

interface TableOfContentsProps {
    content: string;
}

const TableOfContents: React.FC<TableOfContentsProps> = ({ content }) => {
    const [tocItems, setTocItems] = useState<TOCItem[]>([]);
    const [activeId, setActiveId] = useState<string>('');

    useEffect(() => {
        // Parse headings from content
        const headingRegex = /^(#{2,3})\s+(.+)$/gm;
        const items: TOCItem[] = [];
        let match;

        while ((match = headingRegex.exec(content)) !== null) {
            const level = match[1].length;
            const text = match[2];
            const id = text.toLowerCase().replace(/[^\w]+/g, '-');
            items.push({ id, text, level });
        }

        setTocItems(items);
    }, [content]);

    useEffect(() => {
        // Track active heading on scroll
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id);
                    }
                });
            },
            { rootMargin: '-100px 0px -80% 0px' }
        );

        tocItems.forEach(({ id }) => {
            const element = document.getElementById(id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, [tocItems]);

    if (tocItems.length === 0) return null;

    return (
        <nav className="sticky top-24 bg-white dark:bg-surface-dark rounded-2xl border border-gray-200 dark:border-gray-800 p-6">
            <h3 className="text-sm font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-4 flex items-center gap-2">
                <span className="material-icons-outlined text-lg">list</span>
                Table of Contents
            </h3>
            <ul className="space-y-2">
                {tocItems.map((item) => (
                    <li
                        key={item.id}
                        style={{ paddingLeft: `${(item.level - 2) * 1}rem` }}
                    >
                        <a
                            href={`#${item.id}`}
                            className={`block text-sm py-1 transition-colors ${activeId === item.id
                                    ? 'text-primary font-medium'
                                    : 'text-gray-600 dark:text-gray-400 hover:text-primary'
                                }`}
                        >
                            {item.text}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default TableOfContents;
