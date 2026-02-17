/**
 * Site slug configuration and validation utility
 * Ensures the slug meets platform requirements: 5-50 characters, only letters, numbers, and hyphens
 */

const SITE_SLUG = 'AryaTatainsurance';

/**
 * Validates a slug against platform requirements
 * @param slug - The slug to validate
 * @returns true if valid, false otherwise
 */
export function isValidSlug(slug: string): boolean {
  if (!slug || slug.length < 5 || slug.length > 50) {
    return false;
  }
  // Only letters, numbers, and hyphens allowed
  return /^[a-zA-Z0-9-]+$/.test(slug);
}

/**
 * Returns the configured site slug
 * @returns The site slug
 */
export function getSiteSlug(): string {
  return SITE_SLUG;
}

/**
 * Returns a validated site slug, ensuring it meets platform requirements
 * @returns A valid site slug
 */
export function getValidatedSiteSlug(): string {
  if (!isValidSlug(SITE_SLUG)) {
    console.error(`Invalid site slug: ${SITE_SLUG}. Must be 5-50 characters and contain only letters, numbers, and hyphens.`);
    // Fallback to a safe default if validation fails
    return 'secure-health-kerala';
  }
  return SITE_SLUG;
}
