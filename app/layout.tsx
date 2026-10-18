import './globals.css'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { site } from '@/content/site'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { MobileCtaBar } from '@/components/layout/mobile-cta'
import { themeScript } from '@/components/layout/theme-toggle'
import { Analytics } from '@/components/analytics'
import { JsonLd } from '@/components/json-ld'
import { graph, localBusinessSchema, organizationSchema, websiteSchema } from '@/lib/schema'
import { ogImageUrl } from '@/lib/seo'

// Self-hosted at build time by next/font (no request to Google at runtime).
// Latin subset keeps the files small; mono is only used for small labels, so it
// is not preloaded and never competes with the LCP text.
const geistSans = Geist({ subsets: ['latin'], variable: '--font-geist-sans', display: 'swap' })
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono', display: 'swap', preload: false })

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: 'Website Development & AI Automation in Delhi | Proshala',
    template: '%s | Proshala',
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.name,
  // Favicon / app icon references are intentionally unchanged from the previous site.
  icons: {
    icon: [
      { url: '/proshala-logo.jpg', type: 'image/jpeg' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    apple: '/proshala-logo.jpg',
    shortcut: '/proshala-logo.jpg',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  openGraph: {
    type: 'website',
    siteName: site.name,
    locale: site.locale,
    url: site.url,
    images: [{ url: ogImageUrl('We build the tech that runs your business.', 'proshala.com'), width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', site: '@proshala' },
  verification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION }
    : undefined,
  category: 'technology',
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#0A0B0D' },
    { media: '(prefers-color-scheme: light)', color: '#FAFAF9' },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en-IN"
      data-theme="dark"
      className={`${geistSans.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Favicon / app icon references kept exactly as on the previous site. */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <JsonLd data={graph(organizationSchema(), websiteSchema(), localBusinessSchema())} />
      </head>
      <body>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <MobileCtaBar />
        <Analytics />
      </body>
    </html>
  )
}
