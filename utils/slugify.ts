/**
 * Convert a string to a URL-friendly slug
 * @param text - The text to convert to a slug
 * @returns URL-friendly slug
 */
export function slugify(text: string): string {
    return text
        .toString()
        .toLowerCase()
        .trim()
        .replace(/\s+/g, '-')           // Replace spaces with -
        .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
        .replace(/\-\-+/g, '-')         // Replace multiple - with single -
        .replace(/^-+/, '')             // Trim - from start of text
        .replace(/-+$/, '');            // Trim - from end of text
}

/**
 * Generate a slug from a title if slug is not provided
 * @param title - Article title
 * @param customSlug - Optional custom slug
 * @returns Final slug
 */
export function generateSlug(title: string, customSlug?: string): string {
    return customSlug || slugify(title);
}
