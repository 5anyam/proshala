import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'CSPKIndia - Trusted CS & Compliance Partner for Growing Businesses',
    template: '%s | CSPKIndia'
  },
  description: 'Leading Company Secretary (CS) firm in India providing comprehensive compliance, registration, NCLT, and legal services for businesses. Expert guidance for ROC filings, trademark registration, and corporate law matters.',
  keywords: 'Company Secretary, CS services, compliance, company registration, NCLT, trademark, ROC filing, corporate law, India',
  authors: [{ name: 'CSPKIndia' }],
  creator: 'CSPKIndia',
  publisher: 'CSPKIndia',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://cspkindia.in',
    siteName: 'CSPKIndia',
    title: 'CSPKIndia - Trusted CS & Compliance Partner',
    description: 'Leading Company Secretary firm providing comprehensive compliance and legal services for Indian businesses.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'CSPKIndia - Company Secretary Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CSPKIndia - CS & Compliance Services',
    description: 'Leading Company Secretary firm providing comprehensive compliance and legal services.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://cspkindia.in',
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'CSPKIndia',
  url: 'https://cspkindia.in',
  logo: 'https://cspkindia.in/logo.png',
  description: 'Leading Company Secretary firm providing comprehensive compliance and legal services for Indian businesses.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Mumbai',
    addressRegion: 'Maharashtra',
    addressCountry: 'IN',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+91-9876543210',
    contactType: 'customer service',
    email: 'contact@cspkindia.in',
  },
  sameAs: [
    'https://www.facebook.com/cspkindia',
    'https://www.twitter.com/cspkindia',
    'https://www.linkedin.com/company/cspkindia',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}