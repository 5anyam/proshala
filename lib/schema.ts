// JSON-LD builders. All structured data is generated from content/ files,
// so schema never drifts from what the page shows.
import { site } from '@/content/site'
import { areas } from '@/content/areas'
import { serviceGroups } from '@/content/services'
import { verifiedRating } from '@/content/portfolio'
import type { Area, Faq, Service } from '@/content/types'
import { absoluteUrl } from './utils'

type Json = Record<string, unknown>

export const ORG_ID = `${site.url}/#organization`
export const BUSINESS_ID = `${site.url}/#localbusiness`
export const WEBSITE_ID = `${site.url}/#website`

function postalAddress() {
  const a = site.address
  return {
    '@type': 'PostalAddress',
    ...(a.street ? { streetAddress: a.street } : {}),
    addressLocality: `${a.locality}, ${a.city}`,
    addressRegion: a.region,
    ...(a.postalCode ? { postalCode: a.postalCode } : {}),
    addressCountry: a.country,
  }
}

export function organizationSchema(): Json {
  return {
    '@type': 'Organization',
    '@id': ORG_ID,
    name: site.name,
    legalName: site.legalName,
    url: site.url,
    logo: { '@type': 'ImageObject', url: absoluteUrl(site.logo) },
    description: site.description,
    email: site.email,
    telephone: site.phone,
    address: postalAddress(),
    sameAs: Object.values(site.socials),
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: site.phone,
      email: site.email,
      contactType: 'sales',
      areaServed: 'IN',
      availableLanguage: [...site.languages],
    },
  }
}

export function localBusinessSchema(): Json {
  const areaNames = areas.map((a) => a.name)
  return {
    '@type': ['LocalBusiness', 'ProfessionalService'],
    '@id': BUSINESS_ID,
    name: site.name,
    url: site.url,
    image: absoluteUrl(site.logo),
    logo: absoluteUrl(site.logo),
    description: site.description,
    telephone: site.phone,
    email: site.email,
    address: postalAddress(),
    ...(site.geo
      ? { geo: { '@type': 'GeoCoordinates', latitude: site.geo.lat, longitude: site.geo.lng } }
      : {}),
    ...(site.mapUrl ? { hasMap: site.mapUrl } : {}),
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: site.hours.days,
      opens: site.hours.opens,
      closes: site.hours.closes,
    },
    areaServed: [...new Set(areaNames)].map((name) => ({ '@type': 'Place', name })),
    knowsAbout: Object.values(serviceGroups).map((g) => g.title),
    parentOrganization: { '@id': ORG_ID },
    sameAs: Object.values(site.socials),
    ...(verifiedRating
      ? {
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: verifiedRating.ratingValue,
            reviewCount: verifiedRating.reviewCount,
          },
        }
      : {}),
  }
}

export function websiteSchema(): Json {
  return {
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    url: site.url,
    name: site.name,
    inLanguage: 'en-IN',
    publisher: { '@id': ORG_ID },
  }
}

export function breadcrumbSchema(items: { name: string; path: string }[]): Json {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: absoluteUrl(it.path),
    })),
  }
}

export function faqSchema(faqs: Faq[]): Json {
  return {
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }
}

export function serviceSchema(s: Service, path: string): Json {
  return {
    '@type': 'Service',
    '@id': `${absoluteUrl(path)}#service`,
    name: s.h1,
    serviceType: s.name,
    description: s.intro,
    url: absoluteUrl(path),
    provider: { '@id': BUSINESS_ID },
    areaServed: [
      { '@type': 'City', name: 'Delhi' },
      { '@type': 'Country', name: 'India' },
    ],
    category: serviceGroups[s.group].title,
  }
}

export function areaServiceSchema(a: Area, path: string): Json {
  return {
    '@type': 'Service',
    '@id': `${absoluteUrl(path)}#service`,
    name: a.h1,
    serviceType: 'Website development',
    description: a.intro,
    url: absoluteUrl(path),
    provider: { '@id': BUSINESS_ID },
    areaServed: {
      '@type': 'Place',
      name: `${a.name}, ${a.region}`,
      geo: { '@type': 'GeoCoordinates', latitude: a.geo.lat, longitude: a.geo.lng },
    },
  }
}

export function webPageSchema(opts: { path: string; name: string; description: string; updated?: string }): Json {
  return {
    '@type': 'WebPage',
    '@id': `${absoluteUrl(opts.path)}#webpage`,
    url: absoluteUrl(opts.path),
    name: opts.name,
    description: opts.description,
    isPartOf: { '@id': WEBSITE_ID },
    inLanguage: 'en-IN',
    ...(opts.updated ? { dateModified: opts.updated } : {}),
  }
}

export function graph(...nodes: (Json | null | undefined | false)[]) {
  return { '@context': 'https://schema.org', '@graph': nodes.filter(Boolean) }
}
