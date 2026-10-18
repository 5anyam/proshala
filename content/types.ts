import type { IconName } from '@/components/icon'

export type Faq = { q: string; a: string }

export type ServiceGroup = 'build' | 'automate' | 'grow'

export type Service = {
  slug: string
  group: ServiceGroup
  /** Short label for menus and cards */
  name: string
  icon: IconName
  /** ≤60 chars, unique */
  metaTitle: string
  /** ≤155 chars, unique */
  metaDescription: string
  h1: string
  primaryKeyword: string
  secondaryKeywords: string[]
  /** 40–60 word answer-first intro, shown right under the H1 */
  intro: string
  /** One sentence for cards */
  summary: string
  whoFor: string[]
  deliverables: { title: string; desc: string }[]
  stack: string[]
  process: { title: string; desc: string }[]
  /** Typical timeline — REVIEW before launch */
  timeline: string
  /** "₹xx,xxx" — leave as TODO until you set prices */
  priceFrom: string
  priceNote?: string
  faqs: Faq[]
  related: string[]
  updated: string
}

export type AreaKind = 'primary' | 'north-west' | 'city' | 'ncr'

export type Area = {
  slug: string
  name: string
  /** e.g. "North West Delhi" or "Haryana" */
  region: string
  kind: AreaKind
  /** Only 'ready' pages are built, linked and listed in the sitemap */
  status: 'ready' | 'todo'
  metaTitle: string
  metaDescription: string
  h1: string
  primaryKeyword: string
  secondaryKeywords: string[]
  intro: string
  /** Who does business here — 1 paragraph, specific to the area */
  businessMix: string
  landmarks: string[]
  neighbourhoods: string[]
  /** How we work with clients here (travel/meeting/remote) */
  travel: string
  /** 2–3 genuinely local sections */
  sections: { h2: string; body: string }[]
  industries: string[]
  services: string[]
  /** TODO until there is a real local project to cite */
  localProject?: string
  faqs: Faq[]
  nearby: string[]
  geo: { lat: number; lng: number }
  updated: string
}

export type Industry = {
  slug: string
  name: string
  icon: IconName
  metaTitle: string
  metaDescription: string
  h1: string
  intro: string
  problems: string[]
  builds: { title: string; desc: string }[]
  automations: string[]
  services: string[]
  faqs: Faq[]
  updated: string
}

export type Project = {
  slug: string
  status: 'ready' | 'todo'
  client: string
  title: string
  industry: string
  area?: string
  summary: string
  services: string[]
  stack: string[]
  results: string[]
  url?: string
  image?: string
  year?: string
  body?: string
}

export type Testimonial = {
  status: 'ready' | 'todo'
  name: string
  role: string
  company: string
  quote: string
  /** Link to the public Google review, for verification */
  sourceUrl?: string
  photo?: string
  rating?: number
}
