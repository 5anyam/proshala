'use client'

import Script from 'next/script'
import Link from 'next/link'
import { useEffect, useSyncExternalStore } from 'react'
import { track } from '@/lib/track'

const GA_ID = process.env.NEXT_PUBLIC_GA_ID
const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID
const PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID
const CONSENT_KEY = 'proshala-consent'

type Consent = 'granted' | 'denied' | null

function readConsent(): Consent {
  try {
    const v = localStorage.getItem(CONSENT_KEY)
    return v === 'granted' || v === 'denied' ? v : null
  } catch {
    return null
  }
}

const listeners = new Set<() => void>()
function subscribe(cb: () => void) {
  listeners.add(cb)
  return () => listeners.delete(cb)
}
function setConsent(value: 'granted' | 'denied') {
  try {
    localStorage.setItem(CONSENT_KEY, value)
  } catch {}
  window.gtag?.('consent', 'update', {
    analytics_storage: value,
    ad_storage: value,
    ad_user_data: value,
    ad_personalization: value,
  })
  listeners.forEach((l) => l())
}

// Google Consent Mode v2: everything denied until the visitor accepts.
const consentDefaults = `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}window.gtag=gtag;
gtag('consent','default',{analytics_storage:'denied',ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',wait_for_update:500});
try{if(localStorage.getItem('${CONSENT_KEY}')==='granted'){gtag('consent','update',{analytics_storage:'granted',ad_storage:'granted',ad_user_data:'granted',ad_personalization:'granted'})}}catch(e){}
gtag('js',new Date());${GA_ID ? `gtag('config','${GA_ID}');` : ''}`

export function Analytics() {
  const consent = useSyncExternalStore(subscribe, readConsent, () => 'denied' as Consent)
  const enabled = Boolean(GA_ID || GTM_ID || PIXEL_ID)

  // Track clicks on any element with data-track="event_name"
  useEffect(() => {
    function onClick(e: MouseEvent) {
      const el = (e.target as HTMLElement | null)?.closest<HTMLElement>('[data-track]')
      if (el?.dataset.track) track(el.dataset.track, { location: window.location.pathname })
    }
    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [])

  if (!enabled) return null

  return (
    <>
      <Script id="consent-defaults" strategy="afterInteractive">
        {consentDefaults}
      </Script>
      {GA_ID && (
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
      )}
      {GTM_ID && (
        <Script id="gtm" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTM_ID}');`}
        </Script>
      )}
      {PIXEL_ID && consent === 'granted' && (
        <Script id="meta-pixel" strategy="afterInteractive">
          {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','${PIXEL_ID}');fbq('track','PageView');`}
        </Script>
      )}
      <ConsentBanner consent={consent} />
    </>
  )
}

function ConsentBanner({ consent }: { consent: Consent }) {
  // Server snapshot is 'denied', so the banner never renders in the HTML;
  // useSyncExternalStore re-renders with the real value after hydration.
  if (consent !== null) return null
  return (
    <div
      role="region"
      aria-label="Cookie consent"
      className="fixed inset-x-3 bottom-24 z-50 mx-auto max-w-lg rounded-xl border border-border-strong bg-surface p-4 text-sm shadow-card lg:bottom-6 lg:left-6 lg:right-auto"
    >
      <p className="text-muted">
        We use cookies for analytics and to measure our ads. You can accept or decline — the site works either way.{' '}
        <Link href="/privacy-policy" className="underline hover:text-fg">
          Privacy policy
        </Link>
      </p>
      <div className="mt-3 flex gap-2">
        <button
          type="button"
          onClick={() => setConsent('granted')}
          className="min-h-10 rounded-lg bg-accent px-4 font-medium text-accent-fg"
        >
          Accept
        </button>
        <button
          type="button"
          onClick={() => setConsent('denied')}
          className="min-h-10 rounded-lg border border-border-strong px-4"
        >
          Decline
        </button>
      </div>
    </div>
  )
}
