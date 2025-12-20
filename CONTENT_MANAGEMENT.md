# Content Management Guide

This guide explains how to add and manage blog articles for the Speedy Coffee website.

## Overview

The blog system uses a simple content management approach with mock data stored in `utils/contentLoader.ts`. This allows for quick development and testing. In production, you can replace this with:
- MDX/Markdown files in a `/content` folder
- A headless CMS (Contentful, Sanity, Strapi)
- A database-backed solution

## Adding New Articles

### Current Setup (Mock Data)

To add a new article, edit `utils/contentLoader.ts` and add a new article object to the `mockArticles` array:

```typescript
{
  id: '7', // Unique ID
  title: 'Your Article Title',
  slug: 'your-article-slug', // URL-friendly slug
  excerpt: 'A brief summary of your article (150-160 characters for SEO)',
  author: 'Author Name',
  publishDate: '2025-12-20', // YYYY-MM-DD format
  category: 'Category Name', // e.g., "Brewing Tips", "Sustainability"
  tags: ['tag1', 'tag2', 'tag3'], // Related tags
  featuredImage: '/images/articles/your-image.jpg', // Path to featured image
  readTime: '5 min read', // Optional
  content: `
# Your Article Title

Your article content goes here. Use markdown-style formatting:

## Section Heading

Paragraph text...

### Subsection

More content...
  `
}
```

### Article Frontmatter Template

When using MDX/Markdown files, use this frontmatter structure:

```yaml
---
title: "Your Article Title"
slug: "your-article-slug"
excerpt: "A brief summary of your article (150-160 characters for SEO)"
author: "Author Name"
publishDate: "2025-12-20"
category: "Category Name"
tags: ["tag1", "tag2", "tag3"]
featuredImage: "/images/articles/your-image.jpg"
readTime: "5 min read"
---

# Your Article Title

Your article content...
```

## SEO Best Practices

### Title Tags
- Keep titles under 60 characters
- Include primary keyword
- Make it compelling and click-worthy
- Format: "Article Title | Speedy Coffee"

### Meta Descriptions (Excerpt)
- 150-160 characters optimal
- Include primary keyword
- Write compelling copy that encourages clicks
- Summarize the article's value proposition

### Headings
- Use only ONE H1 per article (the title)
- Use H2 for main sections
- Use H3 for subsections
- Maintain logical hierarchy

### Images
- Use descriptive file names (e.g., `cold-brew-guide.jpg` not `img123.jpg`)
- Optimize images for web (compress, resize)
- Recommended size: 1200x630px for featured images (good for social sharing)
- Add alt text for accessibility

### URLs (Slugs)
- Keep slugs short and descriptive
- Use hyphens, not underscores
- Include primary keyword
- Avoid stop words when possible
- Example: `perfect-pour-morning-brew`

### Categories & Tags
- Use consistent category names
- Limit to 3-5 tags per article
- Use lowercase with hyphens for multi-word tags
- Tags help with internal linking and related articles

## Updating the Sitemap

After adding new articles, update `public/sitemap.xml`:

```xml
<url>
  <loc>https://speedycoffee.com/blog/your-article-slug</loc>
  <lastmod>2025-12-20</lastmod>
  <changefreq>monthly</changefreq>
  <priority>0.8</priority>
</url>
```

**Automated Solution**: In production, create a build script to auto-generate the sitemap from your content files.

## Image Management

### Recommended Structure
```
public/
  images/
    articles/
      perfect-pour.jpg
      sustainable-sourcing.jpg
      coffee-myths.jpg
```

### Image Guidelines
- Format: JPG for photos, PNG for graphics with transparency
- Size: Max 200KB per image (compress with TinyPNG or similar)
- Dimensions: 1200x630px for featured images
- Use descriptive filenames

## Content Writing Tips

### Article Structure
1. **Introduction** (1-2 paragraphs)
   - Hook the reader
   - State the problem or topic
   - Preview what they'll learn

2. **Main Content** (3-5 sections)
   - Use clear H2 headings
   - Break up text with subheadings (H3)
   - Include examples and actionable tips
   - Use bullet points and lists

3. **Conclusion** (1 paragraph)
   - Summarize key points
   - Call to action (try a product, read another article)

### Writing Style
- Use conversational tone
- Write in second person ("you") when appropriate
- Keep paragraphs short (2-4 sentences)
- Use active voice
- Include specific examples and data

### Read Time Calculation
Estimate: 200-250 words per minute
- 1000 words ≈ 4-5 min read
- 1500 words ≈ 6-7 min read
- 2000 words ≈ 8-10 min read

## Migrating to MDX/Markdown Files

To switch from mock data to MDX files:

1. **Install MDX dependencies**:
   ```bash
   npm install @mdx-js/rollup remark-gfm rehype-slug rehype-autolink-headings gray-matter
   ```

2. **Update vite.config.ts** to include MDX plugin

3. **Create content structure**:
   ```
   content/
     articles/
       perfect-pour-morning-brew.mdx
       sustainable-sourcing.mdx
   ```

4. **Update contentLoader.ts** to read from MDX files instead of mock data

## Connecting a Headless CMS

### Recommended CMS Options
- **Contentful**: Great UI, generous free tier
- **Sanity**: Flexible, real-time collaboration
- **Strapi**: Open-source, self-hosted option

### Integration Steps
1. Create CMS account and set up content model
2. Install CMS SDK: `npm install @contentful/rich-text-react-renderer` (for Contentful)
3. Update `contentLoader.ts` to fetch from CMS API
4. Add environment variables for API keys

## Deployment Checklist

Before deploying new articles:
- [ ] Proofread content
- [ ] Check SEO title and description
- [ ] Optimize and compress images
- [ ] Test article page locally
- [ ] Update sitemap.xml
- [ ] Verify structured data with Google Rich Results Test
- [ ] Check mobile responsiveness
- [ ] Test all internal links

## Analytics & Monitoring

### Recommended Tools
- **Google Search Console**: Monitor search performance
- **Google Analytics**: Track page views and user behavior
- **Ahrefs/SEMrush**: Keyword research and SEO monitoring

### Key Metrics to Track
- Page views per article
- Average time on page
- Bounce rate
- Social shares
- Organic search traffic
- Keyword rankings

## Support

For questions or issues with the blog system, refer to:
- React Router documentation: https://reactrouter.com
- React Helmet Async: https://github.com/staylor/react-helmet-async
- Schema.org structured data: https://schema.org
