import type { Metadata } from 'next'
import { site } from '@/content/site'
import { absoluteUrl } from './utils'

type PageMetaInput = {
  /** Full <title>, ≤60 chars, unique. Used as-is (no template). */
  title: string
  /** ≤155 chars, unique */
  description: string
  /** Path starting with "/" — becomes the canonical URL */
  path: string
  /** Short label shown above the title on the OG image */
  kicker?: string
  /** Title on the OG image if different from <title> */
  ogTitle?: string
  type?: 'website' | 'article'
  publishedTime?: string
  modifiedTime?: string
  authors?: string[]
  noindex?: boolean
}

export function ogImageUrl(title: string, kicker?: string) {
  const params = new URLSearchParams({ title })
  if (kicker) params.set('kicker', kicker)
  return `/og?${params.toString()}`
}

export function pageMetadata(input: PageMetaInput): Metadata {
  const url = absoluteUrl(input.path)
  const ogTitle = input.ogTitle ?? input.title.replace(/\s*\|\s*Proshala$/, '')
  const image = {
    url: ogImageUrl(ogTitle, input.kicker),
    width: 1200,
    height: 630,
    alt: ogTitle,
  }
  return {
    title: { absolute: input.title },
    description: input.description,
    alternates: { canonical: url },
    robots: input.noindex ? { index: false, follow: true } : undefined,
    openGraph: {
      type: input.type ?? 'website',
      url,
      siteName: site.name,
      locale: site.locale,
      title: ogTitle,
      description: input.description,
      images: [image],
      ...(input.type === 'article'
        ? {
            publishedTime: input.publishedTime,
            modifiedTime: input.modifiedTime,
            authors: input.authors,
          }
        : {}),
    },
    twitter: {
      card: 'summary_large_image',
      site: '@proshalatech',
      title: ogTitle,
      description: input.description,
      images: [image.url],
    },
  }
}
