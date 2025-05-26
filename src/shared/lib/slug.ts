/**
 * Creates a URL-friendly slug from a given title string.
 * Converts the title to lowercase, removes special characters, and replaces spaces with hyphens.
 * Supports both Korean and English characters.
 *
 * @param title - The title string to convert into a slug
 * @returns A URL-friendly slug string
 *
 * @example
 * createSlug("Jenkins를 이용한 CI/CD Pipeline 구축")
 * // Returns: "jenkins를-이용한-cicd-pipeline-구축"
 *
 * createSlug("Hello World! How are you?")
 * // Returns: "hello-world-how-are-you"
 */
export function createSlug(title: string): string {
  return title
    .toLowerCase() // Convert to lowercase
    .replace(/[^\w\s가-힣-]/g, '') // Remove special characters (keep only Korean, English, numbers, spaces, hyphens)
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace consecutive hyphens with single hyphen
    .trim() // Remove leading and trailing whitespace
}
