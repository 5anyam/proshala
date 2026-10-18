import type { MetadataRoute } from 'next'
import { site } from '@/content/site'

// Search and AI crawlers are explicitly welcome (AEO). Only API routes and
// the post-submit thank-you page are excluded.
const aiAndSearchBots = [
  'Googlebot',
  'Bingbot',
  'GPTBot',
  'OAI-SearchBot',
  'ChatGPT-User',
  'PerplexityBot',
  'ClaudeBot',
  'Claude-SearchBot',
  'Google-Extended',
  'Applebot',
]

export default function robots(): MetadataRoute.Robots {
  const disallow = ['/api/', '/thank-you']
  return {
    rules: [
      ...aiAndSearchBots.map((userAgent) => ({ userAgent, allow: '/', disallow })),
      { userAgent: '*', allow: '/', disallow },
    ],
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  }
}
