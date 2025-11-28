// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import Navbar from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "next-themes";
import { FloatingActions } from "@/components/FloatingActions";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

// SEO-optimized metadata for Proshala - Delhi NCR focused
export const metadata: Metadata = {
  metadataBase: new URL("https://www.proshala.com"),
  title: {
    default:
      "Proshala - Top Digital Marketing Agency in Delhi NCR | Performance Marketing & Web Development",
    template: "%s | Proshala - Digital Marketing Agency Delhi NCR",
  },
  description:
    "Proshala is a leading digital marketing agency in Delhi NCR specializing in performance marketing, website development, SEO, social media management, and branding. Serving businesses across Noida, Gurgaon, Ghaziabad since 2020. Get measurable results with data-driven strategies.",
  keywords: [
    "digital marketing agency Delhi",
    "digital marketing company Delhi NCR",
    "performance marketing agency Delhi",
    "website development Delhi NCR",
    "SEO services Delhi",
    "social media marketing Delhi",
    "PPC agency Delhi NCR",
    "Google Ads expert Delhi",
    "web design company Noida",
    "digital marketing Gurgaon",
    "branding agency Delhi",
    "influencer marketing Delhi NCR",
    "e-commerce marketing Delhi",
    "startup marketing Delhi",
    "best digital marketing agency NCR",
  ],
  authors: [{ name: "Proshala Digital Marketing Agency", url: "https://www.proshala.com" }],
  creator: "Proshala",
  publisher: "Proshala Digital Marketing Agency",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.proshala.com",
    siteName: "Proshala - Digital Marketing Agency Delhi NCR",
    title:
      "Proshala - Top Digital Marketing Agency in Delhi NCR | Performance Marketing Experts",
    description:
      "Award-winning digital marketing agency in Delhi NCR. Expert in performance marketing, website development, SEO, social media & branding. Trusted by 80+ businesses since 2020.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Proshala - Digital Marketing Agency Delhi NCR",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@proshala",
    creator: "@proshala",
    title: "Proshala - Digital Marketing Agency Delhi NCR | Performance Marketing",
    description:
      "Leading digital marketing agency in Delhi NCR. Performance marketing, web dev, SEO & branding for growth-focused businesses.",
    images: ["/twitter-image.jpg"],
  },
  alternates: {
    canonical: "https://www.proshala.com",
    languages: {
      "en-IN": "https://www.proshala.com",
      "hi-IN": "https://www.proshala.com/hi",
    },
  },
  verification: {
    google: "your-google-site-verification-code", // Replace with actual code from Google Search Console
  },
  category: "Digital Marketing",
  classification: "Business Services",
  other: {
    "geo.region": "IN-DL",
    "geo.placename": "Delhi NCR",
    "geo.position": "28.7041;77.1025", // Delhi coordinates
  },
};

// Enhanced JSON-LD structured data for Local Business - Delhi NCR
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://www.proshala.com/#organization",
  name: "Proshala - Digital Marketing Agency",
  legalName: "Proshala Digital Marketing Services",
  url: "https://www.proshala.com",
  logo: {
    "@type": "ImageObject",
    url: "https://www.proshala.com/Proshala-logo.png",
    width: 500,
    height: 500,
    caption: "Proshala Logo",
  },
  image: [
    "https://www.proshala.com/og-image.jpg",
    "https://www.proshala.com/office-photo.jpg",
  ],
  description:
    "Proshala is a leading digital marketing agency in Delhi NCR providing performance marketing, website development, SEO, social media management, branding, and influencer marketing services since 2020.",
  foundingDate: "2020-01-15",
  founder: {
    "@type": "Person",
    name: "Your Name", // Replace with founder's name
    jobTitle: "Founder & CEO",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "Your Office Address", // Replace with actual address
    addressLocality: "Delhi",
    addressRegion: "DL",
    postalCode: "110001", // Replace with actual postal code
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 28.7041,
    longitude: 77.1025,
  },
  areaServed: [
    {
      "@type": "City",
      name: "Delhi",
    },
    {
      "@type": "City",
      name: "Noida",
    },
    {
      "@type": "City",
      name: "Gurgaon",
    },
    {
      "@type": "City",
      name: "Ghaziabad",
    },
    {
      "@type": "City",
      name: "Faridabad",
    },
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+91-9999774046",
      contactType: "customer service",
      email: "hello@proshala.com",
      areaServed: "IN",
      availableLanguage: ["English", "Hindi"],
      contactOption: "TollFree",
    },
  ],
  sameAs: [
    "https://www.facebook.com/proshala",
    "https://www.instagram.com/proshala",
    "https://www.linkedin.com/company/proshala",
    "https://twitter.com/proshala",
  ],
  priceRange: "$$",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "80",
    bestRating: "5",
    worstRating: "1",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "10:00",
      closes: "16:00",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Digital Marketing Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Performance Marketing",
          description: "ROI-driven PPC and paid social campaigns with measurable ROAS",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Website Development",
          description: "Conversion-first websites on Next.js, React, WordPress",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "SEO Services",
          description: "Technical SEO, content strategy, and authority building",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Social Media Management",
          description: "Channel strategy, content systems, and community management",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Influencer Marketing",
          description: "Creator partnerships with transparent performance KPIs",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Branding & Design",
          description: "Brand identity, design systems, and visual storytelling",
        },
      },
    ],
  },
};

// Website schema for sitelinks search box
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://www.proshala.com/#website",
  url: "https://www.proshala.com",
  name: "Proshala Digital Marketing Agency",
  description: "Leading digital marketing agency in Delhi NCR",
  publisher: {
    "@id": "https://www.proshala.com/#organization",
  },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://www.proshala.com/search?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
  inLanguage: "en-IN",
};

// Breadcrumb schema
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.proshala.com",
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        {/* Favicons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Structured Data - JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />

        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://cms.proshala.com" />
        <link rel="dns-prefetch" href="https://cms.proshala.com" />
      </head>
      <body className={inter.className}>
        {/* Google Tag (gtag.js) - Conversion Tracking */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17763121352"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17763121352');
          `}
        </Script>

        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <FloatingActions phoneNumber="9999774046" whatsappNumber="919999774046" />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
