import type { MetadataRoute } from 'next'
import { SITE_UPDATED } from '@/content/site'
import { services } from '@/content/services'
import { areaPath, readyAreas } from '@/content/areas'
import { industries } from '@/content/industries'
import { readyCaseStudies, readyProjects } from '@/content/portfolio'
import { automationPillar, websitePillar } from '@/content/pillars'
import { getAllPosts } from '@/lib/blog'
import { absoluteUrl } from '@/lib/utils'

type Entry = MetadataRoute.Sitemap[number]

const entry = (path: string, lastModified: string, priority: number, changeFrequency: Entry['changeFrequency'] = 'monthly'): Entry => ({
  url: absoluteUrl(path),
  lastModified,
  changeFrequency,
  priority,
})

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts()
  const latestPost = posts[0]?.updated ?? posts[0]?.date ?? SITE_UPDATED

  return [
    entry('/', SITE_UPDATED, 1, 'weekly'),
    entry(websitePillar.path, websitePillar.updated, 0.95, 'weekly'),
    entry(automationPillar.path, automationPillar.updated, 0.9, 'weekly'),
    entry('/services', SITE_UPDATED, 0.8),
    ...services.map((s) => entry(`/services/${s.slug}`, s.updated, s.group === 'grow' ? 0.6 : 0.8)),
    ...readyAreas().map((a) => entry(areaPath(a.slug), a.updated, a.kind === 'primary' ? 0.95 : a.kind === 'ncr' ? 0.6 : 0.8)),
    entry('/industries', SITE_UPDATED, 0.6),
    ...industries.map((i) => entry(`/industries/${i.slug}`, i.updated, 0.7)),
    entry('/pricing', SITE_UPDATED, 0.8),
    entry('/portfolio', SITE_UPDATED, 0.7),
    ...readyProjects().map((p) => entry(`/portfolio/${p.slug}`, SITE_UPDATED, 0.6)),
    entry('/case-studies', SITE_UPDATED, 0.6),
    ...readyCaseStudies().map((p) => entry(`/case-studies/${p.slug}`, SITE_UPDATED, 0.6)),
    entry('/blog', latestPost, 0.7, 'weekly'),
    ...posts.map((p) => entry(`/blog/${p.slug}`, p.updated ?? p.date, 0.6)),
    entry('/tech-stack', SITE_UPDATED, 0.5),
    entry('/about', SITE_UPDATED, 0.6),
    entry('/contact', SITE_UPDATED, 0.7),
    entry('/free-quote', SITE_UPDATED, 0.7),
    entry('/careers', SITE_UPDATED, 0.3),
    entry('/privacy-policy', '2026-10-18', 0.2, 'yearly'),
    entry('/terms-of-service', '2026-10-18', 0.2, 'yearly'),
    entry('/disclaimer', '2026-10-18', 0.2, 'yearly'),
  ]
}
