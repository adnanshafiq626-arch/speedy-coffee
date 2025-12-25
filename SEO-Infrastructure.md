I need you to set up complete SEO infrastructure for my website. Analyze my existing homepage design and codebase first, then implement the following:

 1. ANALYZE EXISTING DESIGN
- Review my homepage/existing pages
- Note the design system: colors, fonts, spacing, component styles
- Identify the tech stack (Next.js, React, plain HTML, etc.)

## 2. CREATE ARTICLE/BLOG PAGE TEMPLATE
Create a reusable article page template that:
- Matches my existing design aesthetic exactly
- Has proper semantic HTML structure (article, header, main, footer)
- Includes these SEO elements:
  - Dynamic <title> tag (format: "Article Title | Site Name")
  - Meta description (pulled from article excerpt/summary)
  - Open Graph tags (og:title, og:description, og:image, og:type)
  - Twitter Card tags
  - Canonical URL
  - JSON-LD structured data for Article schema
- Has proper heading hierarchy (single H1, logical H2/H3 structure)
- Includes author info and publish date (visible + in schema)
- Has a table of contents component (auto-generated from headings)
- Includes related articles section at bottom
- Is fully responsive and fast-loading

## 3. CREATE ARTICLE INDEX/BLOG PAGE
Build a page at /blog or /articles that:
- Lists all articles with:
  - Featured image thumbnail
  - Title (linked)
  - Excerpt/summary
  - Date published
  - Category/tags
- Has pagination or infinite scroll
- Includes category/tag filtering
- Has its own SEO meta tags optimized for the blog section
- Matches the site design

## 4. SET UP DYNAMIC ROUTING
Configure routing so that:
- Articles live at /blog/[slug] or /articles/[slug]
- Slugs are auto-generated from titles (URL-friendly)
- 404 handling for non-existent articles

## 5. IMPLEMENT SITEMAP
Create an auto-generating sitemap.xml that:
- Includes all static pages
- Includes all article pages
- Updates automatically when new content is added
- Includes lastmod dates
- Includes priority hints
- Lives at /sitemap.xml

## 6. SET UP ROBOTS.TXT
Create a robots.txt that:
- Allows all legitimate crawlers
- Points to the sitemap
- Blocks any admin/private routes if applicable
- Lives at /robots.txt

## 7. ADD STRUCTURED DATA (JSON-LD)
Implement schema markup for:
- Organization (on homepage)
- WebSite (with search action if applicable)
- Article (on each article page)
- BreadcrumbList (for navigation context)
- FAQPage (template ready for FAQ content)

## 8. INTERNAL LINKING SETUP
- Add breadcrumb navigation component
- Ensure homepage links to /blog
- Add "Latest Articles" section to homepage (3-6 recent posts)
- Include footer links to key pages

## 9. CONTENT MANAGEMENT SETUP
Set up a simple system for adding new articles:
- Option A: MDX/Markdown files in /content folder
- Option B: Headless CMS ready (explain how to connect)
- Include frontmatter template for articles: