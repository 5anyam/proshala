// Tiny client-side event helper. Sends to GTM's dataLayer, GA4 (gtag) and
// the Meta Pixel when they are loaded. Safe to call when none are configured.

type Params = Record<string, string | number | undefined>

declare global {
  interface Window {
    dataLayer?: unknown[]
    gtag?: (...args: unknown[]) => void
    fbq?: (...args: unknown[]) => void
  }
}

const META_EVENTS: Record<string, string> = {
  generate_lead: 'Lead',
  whatsapp_click: 'Contact',
  phone_click: 'Contact',
  email_click: 'Contact',
}

export function track(event: string, params: Params = {}) {
  if (typeof window === 'undefined') return
  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({ event, ...params })
  window.gtag?.('event', event, params)
  const metaEvent = META_EVENTS[event]
  if (metaEvent) window.fbq?.('track', metaEvent, params)
}
