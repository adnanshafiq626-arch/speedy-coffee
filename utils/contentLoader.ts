import type { Article, ArticleFrontmatter } from '../types/blog';

// Mock article data - In production, this would load from MDX files
const mockArticles: Article[] = [
    {
        id: '1',
        title: 'The Perfect Pour: Mastering Your Morning Brew',
        slug: 'perfect-pour-morning-brew',
        excerpt: 'Discover the science and art behind brewing the perfect cup of coffee every single morning.',
        author: 'Sarah Chen',
        publishDate: '2025-12-15',
        category: 'Brewing Tips',
        tags: ['brewing', 'coffee-science', 'morning-routine'],
        featuredImage: '/images/articles/perfect-pour.jpg',
        readTime: '5 min read',
        content: `
# The Perfect Pour: Mastering Your Morning Brew

Coffee is more than just a beverage—it's a ritual, a science, and an art form all rolled into one steaming cup.

## Understanding Coffee Extraction

The key to a perfect brew lies in understanding extraction...

## Water Temperature Matters

Most coffee experts agree that water temperature should be between 195°F and 205°F...

## The Golden Ratio

For the perfect cup, use a ratio of 1:16 - that's 1 gram of coffee for every 16 grams of water...
    `
    },
    {
        id: '2',
        title: 'From Bean to Cup: Our Sustainable Sourcing Journey',
        slug: 'bean-to-cup-sustainable-sourcing',
        excerpt: 'Learn how we partner with farmers around the world to bring you ethically sourced, premium coffee beans.',
        author: 'Marcus Rodriguez',
        publishDate: '2025-12-10',
        category: 'Sustainability',
        tags: ['sustainability', 'sourcing', 'ethics'],
        featuredImage: '/images/articles/sustainable-sourcing.jpg',
        readTime: '7 min read',
        content: `
# From Bean to Cup: Our Sustainable Sourcing Journey

At Speedy Coffee, we believe great taste starts with great relationships...
    `
    },
    {
        id: '3',
        title: '5 Coffee Myths Debunked by Science',
        slug: 'coffee-myths-debunked',
        excerpt: 'Separating fact from fiction in the world of coffee. What does science really say about your daily cup?',
        author: 'Dr. Emily Watson',
        publishDate: '2025-12-05',
        category: 'Coffee Science',
        tags: ['science', 'myths', 'health'],
        featuredImage: '/images/articles/coffee-myths.jpg',
        readTime: '6 min read',
        content: `
# 5 Coffee Myths Debunked by Science

Let's separate the coffee facts from the coffee fiction...
    `
    },
    {
        id: '4',
        title: 'The Rise of Cold Brew: Why It\'s Here to Stay',
        slug: 'rise-of-cold-brew',
        excerpt: 'Cold brew has taken the coffee world by storm. Discover why this smooth, low-acid brewing method is more than just a trend.',
        author: 'Jake Morrison',
        publishDate: '2025-11-28',
        category: 'Brewing Methods',
        tags: ['cold-brew', 'brewing', 'trends'],
        featuredImage: '/images/articles/cold-brew.jpg',
        readTime: '4 min read',
        content: `
# The Rise of Cold Brew: Why It's Here to Stay

Cold brew coffee has transformed from a niche product to a mainstream favorite...
    `
    },
    {
        id: '5',
        title: 'Coffee Tasting 101: Developing Your Palate',
        slug: 'coffee-tasting-101',
        excerpt: 'Learn how to taste coffee like a professional and discover the complex flavors hiding in your cup.',
        author: 'Sarah Chen',
        publishDate: '2025-11-20',
        category: 'Coffee Education',
        tags: ['tasting', 'education', 'flavor-profiles'],
        featuredImage: '/images/articles/coffee-tasting.jpg',
        readTime: '8 min read',
        content: `
# Coffee Tasting 101: Developing Your Palate

Professional coffee tasters can identify hundreds of distinct flavors...
    `
    },
    {
        id: '6',
        title: 'The Ultimate Guide to Coffee Grind Sizes',
        slug: 'guide-to-grind-sizes',
        excerpt: 'From espresso to French press, learn which grind size works best for every brewing method.',
        author: 'Marcus Rodriguez',
        publishDate: '2025-11-15',
        category: 'Brewing Tips',
        tags: ['grinding', 'brewing', 'techniques'],
        featuredImage: '/images/articles/grind-sizes.jpg',
        readTime: '5 min read',
        content: `
# The Ultimate Guide to Coffee Grind Sizes

Grind size is one of the most important variables in coffee brewing...
    `
    }
];

/**
 * Get all articles
 */
export function getAllArticles(): Article[] {
    return mockArticles.sort((a, b) =>
        new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
    );
}

/**
 * Get article by slug
 */
export function getArticleBySlug(slug: string): Article | undefined {
    return mockArticles.find(article => article.slug === slug);
}

/**
 * Get articles by category
 */
export function getArticlesByCategory(category: string): Article[] {
    return mockArticles.filter(article => article.category === category);
}

/**
 * Get articles by tag
 */
export function getArticlesByTag(tag: string): Article[] {
    return mockArticles.filter(article => article.tags.includes(tag));
}

/**
 * Get latest articles
 */
export function getLatestArticles(limit: number = 6): Article[] {
    return getAllArticles().slice(0, limit);
}

/**
 * Get related articles based on category and tags
 */
export function getRelatedArticles(currentArticle: Article, limit: number = 3): Article[] {
    const related = mockArticles
        .filter(article => article.id !== currentArticle.id)
        .map(article => {
            let score = 0;
            // Same category gets higher score
            if (article.category === currentArticle.category) score += 3;
            // Shared tags get points
            const sharedTags = article.tags.filter(tag => currentArticle.tags.includes(tag));
            score += sharedTags.length;
            return { article, score };
        })
        .sort((a, b) => b.score - a.score)
        .slice(0, limit)
        .map(item => item.article);

    return related;
}

/**
 * Get all unique categories
 */
export function getAllCategories(): string[] {
    const categories = new Set(mockArticles.map(article => article.category));
    return Array.from(categories).sort();
}

/**
 * Get all unique tags
 */
export function getAllTags(): string[] {
    const tags = new Set(mockArticles.flatMap(article => article.tags));
    return Array.from(tags).sort();
}
