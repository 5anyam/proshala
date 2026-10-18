import type { MetadataRoute } from 'next'
import { site } from '@/content/site'

// Temporary — replaced with the full data-driven sitemap in the SEO stage.
export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: site.url, lastModified: new Date() }]
}
