// Single source of truth for business details (NAP), used by the header,
// footer, contact page, JSON-LD and llms.txt. Keep this IDENTICAL to the
// Google Business Profile — any mismatch hurts local ranking.

export const TODO = 'TODO' as const

export const site = {
  name: 'Proshala',
  legalName: 'Proshala Tech',
  url: 'https://www.proshala.com',
  tagline: 'We build the tech that runs your business.',
  description:
    'Proshala is a Delhi-based tech company in Rohini that builds fast websites, web apps and AI automations, and runs Google and Meta ads to bring them customers.',
  phone: '+919999774046',
  phoneDisplay: '+91 99997 74046',
  whatsapp: '919999774046',
  whatsappText: 'Hi Proshala, I want a quote for a website / automation project.',
  email: 'contact@proshala.com',
  hours: {
    days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    opens: '10:00',
    closes: '19:00',
    display: 'Mon–Sat, 10 AM – 7 PM',
  },
  address: {
    // TODO: full street address exactly as on Google Business Profile
    street: '' as string,
    locality: 'Rohini',
    city: 'Delhi',
    region: 'Delhi',
    // TODO: PIN code of the office (Rohini PINs are 110085 / 110086 / 110089)
    postalCode: '' as string,
    country: 'IN',
  },
  // TODO: exact office coordinates from Google Maps (right-click the pin → copy)
  geo: null as null | { lat: number; lng: number },
  // TODO: Google Maps share link of the Business Profile (used for hasMap + "Get directions")
  mapUrl: '' as string,
  // TODO: Google Maps embed URL (Share → Embed a map → copy the src="" value)
  mapEmbedUrl: '' as string,
  socials: {
    facebook: 'https://www.facebook.com/proshala',
    instagram: 'https://www.instagram.com/proshala',
    linkedin: 'https://www.linkedin.com/company/proshala',
    twitter: 'https://twitter.com/proshala',
  },
  logo: '/proshala-logo.jpg',
  locale: 'en_IN',
  languages: ['English', 'Hindi'],
} as const

export const whatsappLink = (text: string = site.whatsappText) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`

export const telLink = `tel:${site.phone}`
export const mailLink = `mailto:${site.email}`

/** One-line address. Falls back to locality while the street address is a TODO. */
export function addressLine() {
  const a = site.address
  return [a.street, a.locality, a.city, a.postalCode].filter(Boolean).join(', ')
}

/** Shown in dev, hidden in production unless NEXT_PUBLIC_SHOW_TODOS=true. */
export const SHOW_TODOS =
  process.env.NODE_ENV !== 'production' || process.env.NEXT_PUBLIC_SHOW_TODOS === 'true'

/** Date shown as "Last updated" on pages whose data has no own date. */
export const SITE_UPDATED = '2026-10-18'
