// app/layout.tsx
import './globals.css';
import type { Metadata } from 'next';
import { Inter, Syne } from 'next/font/google';
import { ThemeProvider } from 'next-themes';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { Toaster } from "@/components/ui/sonner";
import { FloatingActions } from '@/components/FloatingActions';
import Script from 'next/script'; // ← ADD THIS

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  fallback: ['system-ui', 'arial'],
  preload: false,
});

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
  fallback: ['system-ui', 'arial'],
  preload: false,
});

export const metadata: Metadata = {
  title: {
    default: 'Proshala - Tech, Automation & Performance Marketing Agency India',
    template: '%s | Proshala',
  },
  icons: {
    icon: [
      { url: '/proshala-logo.jpg', type: 'image/jpeg' },
      { url: '/favicon.ico',       sizes: 'any' },
    ],
    apple: '/proshala-logo.jpg',
    shortcut: '/proshala-logo.jpg',
  },
  description:
    'Proshala is a premium performance marketing and tech agency in India. We specialise in Affiliate Marketing, Business Automation, AI Tools, Next.js Development, and Google Ads that deliver scalable ROI.',
  keywords: [
    'Performance marketing agency India',
    'Affiliate marketing agency',
    'Business automation solutions',
    'AI SaaS tools development',
    'Next.js development agency',
    'Google Ads agency India',
    'PPC management Delhi',
    'SEO services India',
    'Digital marketing agency Delhi',
    'Proshala',
  ],
  authors: [{ name: 'Proshala', url: 'https://proshala.com' }],
  creator: 'Proshala',
  publisher: 'Proshala',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://proshala.com',
    siteName: 'Proshala',
    title: 'Proshala — Tech, Automation & Performance Marketing Agency',
    description:
      'Full-stack digital agency delivering data-driven Affiliate Marketing, AI Automation, Web Development and Performance Marketing campaigns with proven ROI across India and international markets.',
    images: [
      {
        url: 'https://proshala.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Proshala — Performance Marketing & Tech Agency India',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@proshala',
    creator: '@proshala',
    title: 'Proshala — Tech, Automation & Performance Marketing Agency',
    description:
      'Full-stack agency delivering data-driven Affiliate Marketing, Web Development and Performance Marketing with proven ROI.',
    images: ['https://proshala.com/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://proshala.com',
  },
  verification: {
    google: 'your-google-verification-code',
  },
  themeColor: [
    { media: '(prefers-color-scheme: dark)',  color: '#0A0A0A' },
    { media: '(prefers-color-scheme: light)', color: '#FFFFFF' },
  ],
  category: 'Technology & Digital Marketing',
  metadataBase: new URL('https://proshala.com'),
};

const GA_ID = 'G-FCHC0XD63Q'; // ← YOUR GA4 MEASUREMENT ID

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://proshala.com/#organization',
      name: 'Proshala',
      url: 'https://proshala.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://proshala.com/proshala-logo.jpg',
        width: 200,
        height: 200,
      },
      description:
        'Premium performance marketing and tech agency providing Affiliate Marketing, AI Automation, Web Development and PPC campaigns for businesses across India and globally.',
      foundingDate: '2018',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Delhi',
        addressRegion: 'Delhi',
        addressCountry: 'IN',
      },
      contactPoint: [
        {
          '@type': 'ContactPoint',
          telephone: '+91-9999774046',
          contactType: 'customer service',
          email: 'contact@proshala.com',
          availableLanguage: ['English', 'Hindi'],
          areaServed: ['IN', 'US', 'GB', 'AE'],
        },
      ],
      sameAs: [
        'https://www.facebook.com/proshala',
        'https://www.instagram.com/proshala',
        'https://www.linkedin.com/company/proshala',
        'https://twitter.com/proshala',
      ],
    },
    {
      '@type': 'LocalBusiness',
      '@id': 'https://proshala.com/#localbusiness',
      name: 'Proshala',
      url: 'https://proshala.com',
      image: 'https://proshala.com/og-image.jpg',
      priceRange: '₹₹₹',
      telephone: '+91-9999774046',
      email: 'contact@proshala.com',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Delhi',
        addressRegion: 'Delhi',
        addressCountry: 'IN',
      },
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '10:00',
        closes: '19:00',
      },
    },
    {
      '@type': 'ProfessionalService',
      '@id': 'https://proshala.com/#service',
      name: 'Tech & Performance Marketing',
      provider: { '@id': 'https://proshala.com/#organization' },
      serviceType: 'Technology & Digital Marketing Agency',
      areaServed: [
        { '@type': 'Country', name: 'India' },
        { '@type': 'Country', name: 'United States' },
        { '@type': 'Country', name: 'United Kingdom' },
        { '@type': 'Country', name: 'United Arab Emirates' },
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Tech & Marketing Services',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Performance Marketing' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Affiliate Marketing (CPA/CPL)' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Business Automation & AI Tools' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Next.js & WordPress Development' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Google Ads (PPC) Management' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Search Engine Optimisation (SEO)' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Ecommerce Growth Strategies' } },
        ],
      },
    },
    {
      '@type': 'WebSite',
      '@id': 'https://proshala.com/#website',
      url: 'https://proshala.com',
      name: 'Proshala',
      publisher: { '@id': 'https://proshala.com/#organization' },
      potentialAction: {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: 'https://proshala.com/search?q={search_term_string}',
        },
        'query-input': 'required name=search_term_string',
      },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${syne.variable}`}
      suppressHydrationWarning
    >
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var stored = localStorage.getItem('proshala-theme');
                  var theme = stored || 'dark';
                  if (theme === 'system') {
                    theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                  }
                  document.documentElement.classList.add(theme);
                  document.documentElement.setAttribute('data-theme', theme);
                } catch(e) {}
              })();
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`
          ${inter.variable} ${syne.variable} font-sans antialiased
          bg-white dark:bg-[#0A0A0A]
          text-gray-900 dark:text-white
        `}
      >
        {/* ── GOOGLE ANALYTICS 4 ──────────────────────────────────────── */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
        {/* ────────────────────────────────────────────────────────────── */}

        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          storageKey="proshala-theme"
          disableTransitionOnChange={false}
        >
          <Navbar />
          <main>{children}</main>
          <FloatingActions />
          <Footer />
          <Toaster
            theme="system"
            toastOptions={{
              classNames: {
                toast:
                  "dark:bg-[#1A1A1A] dark:border-white/10 dark:text-white bg-white border-black/10 text-gray-900",
              },
            }}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}