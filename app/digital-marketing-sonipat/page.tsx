// app/digital-marketing-sonipat/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import {
  MapPin, Phone, CheckCircle, ArrowRight,
  ChevronRight, TrendingUp, Users, Star,
  BarChart3, Search, Zap, Target, Globe,
  MessageSquare, ShieldCheck, Clock,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Marketing Agency in Sonipat, Haryana | Proshala – Best Digital Marketing Company",
  description:
    "Proshala is a trusted marketing agency in Sonipat, Haryana. Google Ads, SEO, social media marketing & website development for Sonipat businesses. Get a free audit today.",
  keywords:
    "marketing agency in Sonipat, digital marketing Sonipat, best marketing company in Sonipat, digital marketing agency Sonipat Haryana, SEO company Sonipat, Google Ads Sonipat, social media marketing Sonipat, online marketing Sonipat, website development Sonipat, performance marketing Sonipat Haryana",
  alternates: {
    canonical: "https://proshala.com/digital-marketing-sonipat",
  },
  openGraph: {
    title: "Marketing Agency in Sonipat, Haryana | Proshala",
    description:
      "Google Ads, SEO, and social media marketing for businesses in Sonipat, Haryana. Book a free audit today.",
    url: "https://proshala.com/digital-marketing-sonipat",
    siteName: "Proshala",
    type: "website",
  },
};

const PHONE      = "+919999774046";
const PHONE_DISP = "+91 99997 74046";

const services = [
  {
    icon: Search,
    title: "SEO – Search Engine Optimisation",
    desc: "Get your business to the top of Google — for searches in Sonipat, Delhi NCR, or anywhere in India. Local SEO, national organic rankings, and everything in between.",
    result: "Page 1 ranking in 3–6 months",
  },
  {
    icon: Target,
    title: "Google Ads (PPC)",
    desc: "Show ads only to people actively searching for your product or service right now. Zero wasted budget, maximum qualified leads from day one.",
    result: "Leads from Day 1",
  },
  {
    icon: MessageSquare,
    title: "Social Media Marketing",
    desc: "Targeted Facebook, Instagram, and YouTube campaigns reaching Sonipat's local audience — and beyond. Brand awareness and direct conversions, both.",
    result: "2× engagement in 60 days",
  },
  {
    icon: Globe,
    title: "Website Development",
    desc: "Fast, mobile-first websites that rank on Google and convert visitors into paying customers. WordPress, Next.js, or custom builds — your choice.",
    result: "Live in 7–14 days",
  },
  {
    icon: BarChart3,
    title: "Performance Marketing",
    desc: "Every rupee tracked and justified. CPL, CPS, and ROAS-focused campaigns that scale your business without wasting ad spend on the wrong audience.",
    result: "Average 4× ROAS",
  },
  {
    icon: Zap,
    title: "WhatsApp & Lead Automation",
    desc: "Auto-respond to leads in 60 seconds, qualify via WhatsApp chatbot, and push directly into your CRM — your team focuses on closing, not chasing.",
    result: "3× faster response time",
  },
];

const areas = [
  "Atlas Road", "Civil Lines", "Sector 14", "Sector 15",
  "Model Town", "Murthal Road", "HSIIDC Industrial Area",
  "Kundli", "Bahalgarh Road", "Subhash Chowk",
  "Sabzi Mandi", "GT Road (NH-44)",
];

const industries = [
  { emoji: "🏭", name: "Manufacturing & Factory" },
  { emoji: "🛒", name: "Retail & Trading" },
  { emoji: "🏠", name: "Real Estate" },
  { emoji: "🎓", name: "Coaching & Education" },
  { emoji: "🏥", name: "Clinic & Hospital" },
  { emoji: "🍽️", name: "Restaurant & Dhaba" },
  { emoji: "🏗️", name: "Construction & Hardware" },
  { emoji: "👗", name: "Textile & Garments" },
  { emoji: "🚗", name: "Automobile Dealership" },
  { emoji: "💊", name: "Pharma & Medical" },
  { emoji: "🏦", name: "Finance & NBFC" },
  { emoji: "⚙️", name: "Engineering & B2B" },
];

const whyUs = [
  {
    icon: MapPin,
    title: "We Know the Sonipat Market",
    desc: "We actively work with businesses in Sonipat and across Delhi NCR — understanding local audience behaviour, buying patterns, and what actually works in Haryana.",
  },
  {
    icon: TrendingUp,
    title: "Results You Can See",
    desc: "Every campaign comes with a live performance dashboard. You always know exactly where your money is going and what return it is generating.",
  },
  {
    icon: Users,
    title: "Dedicated Account Manager",
    desc: "No call centres, no middlemen. One dedicated person manages your account and is reachable directly on phone or WhatsApp — always.",
  },
  {
    icon: ShieldCheck,
    title: "Google Certified Team",
    desc: "Our Google Ads specialists are certified and stay current with every algorithm change, policy update, and platform feature that affects your campaigns.",
  },
  {
    icon: Clock,
    title: "Fast Onboarding — 5 Days",
    desc: "From audit to campaign live in just 5–7 working days. Every day without digital marketing is a day your competitors are capturing your potential customers.",
  },
  {
    icon: Star,
    title: "Transparent Pricing",
    desc: "No hidden charges, no surprise bills. Scope defined upfront, price agreed upfront — everything documented before we start a single task.",
  },
];

const faqs = [
  {
    q: "Is Proshala based in or near Sonipat?",
    a: "Proshala is based in Delhi NCR and actively works with businesses in Sonipat, Kundli, Murthal, and across Haryana. We can arrange in-person meetings in Sonipat and are familiar with the local market, competition, and audience behaviour specific to this region.",
  },
  {
    q: "What is the minimum budget for digital marketing in Sonipat?",
    a: "For Google Ads targeting Sonipat and surrounding areas, we recommend a minimum ad spend of ₹10,000–₹15,000 per month. SEO services start at ₹8,000/month and social media management from ₹7,000/month. We provide exact budget recommendations after the free audit — based on your specific business, competition level, and goals.",
  },
  {
    q: "How long does SEO take to show results in Sonipat?",
    a: "For local searches like 'marketing agency in Sonipat' or 'clinic near Sonipat', results typically show within 2–4 months. More competitive national keywords take 6–12 months. Google Ads delivers leads from Day 1, which is why we often recommend running both simultaneously — Ads for immediate results while SEO builds for the long term.",
  },
  {
    q: "Do you work with manufacturing and industrial businesses in Sonipat?",
    a: "Yes — and this is one of our stronger areas. Sonipat has a significant industrial base across HSIIDC and Kundli. We run B2B campaigns using Google Ads, LinkedIn, and industry directories to reach bulk buyers, distributors, and procurement teams — both within Haryana and in Delhi, Rajasthan, and other states.",
  },
  {
    q: "Can you build a new website for my Sonipat business?",
    a: "Absolutely. We build fast, mobile-friendly, SEO-ready websites that are designed to convert visitors — not just look good. Many Sonipat businesses have slow or outdated websites that hurt their Google rankings. We redesign or build from scratch depending on your situation, using WordPress for simpler sites and Next.js for more advanced projects.",
  },
  {
    q: "Do you only work with Sonipat businesses?",
    a: "No — we work with businesses across Sonipat, Panipat, Rohtak, Bahadurgarh, Gurgaon, Delhi, and all of India. But for Sonipat and Haryana region clients, we apply locally relevant strategies — from geo-targeted Google Ads to local SEO optimised for Haryana-based search behaviour — that generalist agencies based in Mumbai or Bangalore simply do not understand.",
  },
];

// ─── JSON-LD ──────────────────────────────────────────────────────────────────
const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://proshala.com/digital-marketing-sonipat",
  name: "Proshala – Marketing Agency in Sonipat",
  alternateName: [
    "Best Marketing Company Sonipat",
    "Digital Marketing Agency Sonipat Haryana",
    "Proshala Sonipat",
  ],
  description:
    "Proshala is a top-rated digital marketing agency serving Sonipat, Haryana. We offer Google Ads, SEO, social media marketing, website development, and performance marketing for businesses in Sonipat and Delhi NCR.",
  url: "https://proshala.com/digital-marketing-sonipat",
  telephone: PHONE,
  email: "hello@proshala.com",
  image: "https://proshala.com/og-image.jpg",
  priceRange: "₹₹",
  currenciesAccepted: "INR",
  paymentAccepted: "Cash, UPI, Bank Transfer",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Atlas Road",
    addressLocality: "Sonipat",
    addressRegion: "Haryana",
    postalCode: "131001",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "28.9931",
    longitude: "77.0151",
  },
  areaServed: [
    { "@type": "City",  name: "Sonipat" },
    { "@type": "City",  name: "Kundli" },
    { "@type": "City",  name: "Murthal" },
    { "@type": "City",  name: "Bahalgarh" },
    { "@type": "City",  name: "Gohana" },
    { "@type": "State", name: "Haryana" },
    { "@type": "City",  name: "Delhi" },
  ],
  serviceArea: {
    "@type": "GeoCircle",
    geoMidpoint: {
      "@type": "GeoCoordinates",
      latitude: "28.9931",
      longitude: "77.0151",
    },
    geoRadius: "50000",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Digital Marketing Services Sonipat",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "SEO Services Sonipat" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Google Ads Sonipat" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Social Media Marketing Sonipat" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Website Development Sonipat" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Performance Marketing Sonipat Haryana" } },
    ],
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:30",
      closes: "19:00",
    },
  ],
  sameAs: [
    "https://www.facebook.com/proshala",
    "https://www.instagram.com/proshala",
    "https://www.linkedin.com/company/proshala",
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home",                      item: "https://proshala.com" },
    { "@type": "ListItem", position: 2, name: "Digital Marketing Sonipat", item: "https://proshala.com/digital-marketing-sonipat" },
  ],
};

export default function SonipatPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* ── HERO ──────────────────────────────────────────────────────── */}
      <section className="relative bg-[#0A0A0A] pt-28 pb-0 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-24 right-0 w-[540px] h-[540px] rounded-full blur-[120px]"
            style={{ background: "radial-gradient(circle, rgba(245,158,11,0.09) 0%, transparent 70%)" }} />
          <div className="absolute bottom-0 -left-10 w-[350px] h-[350px] rounded-full blur-[100px]"
            style={{ background: "radial-gradient(circle, rgba(251,146,60,0.05) 0%, transparent 70%)" }} />
          <div className="absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.4) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.4) 1px,transparent 1px)",
              backgroundSize: "64px 64px",
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-white/30 mb-8 flex-wrap">
            <Link href="/" className="hover:text-amber-400 transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-white/55">Digital Marketing Sonipat</span>
          </nav>

          <div className="max-w-3xl pb-16 lg:pb-20">
            {/* Location badge */}
            <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 rounded-full px-4 py-1.5 mb-6">
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              <span className="text-amber-400 text-xs font-bold tracking-wide">
                Sonipat, Haryana — Delhi NCR
              </span>
            </div>

            {/* H1 */}
            <h1 className="text-[36px] sm:text-5xl lg:text-[56px] font-black leading-[1.05] tracking-tight mb-5">
              <span className="text-white">Marketing Agency</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500">
                in Sonipat, Haryana
              </span>
            </h1>

            <p className="text-white/60 text-base sm:text-lg leading-relaxed mb-4 max-w-xl">
              Competition in Sonipat is growing fast — whether you are on Atlas Road,
              in the HSIIDC industrial area, near Murthal on NH-44, or running a
              coaching centre in Sector 14. The business that shows up first on Google
              gets the customer. <strong className="text-white">Proshala</strong> puts
              you there.
            </p>
            <p className="text-white/40 text-sm leading-relaxed mb-8 max-w-xl">
              Google Ads, SEO, social media, and website development — handled from
              one place. We have worked with Sonipat manufacturers, retailers, clinics,
              coaching institutes, and real estate businesses, and we understand exactly
              how this market works.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <Link href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-gray-950 font-black px-7 py-4 rounded-2xl hover:-translate-y-0.5 transition-all shadow-2xl shadow-amber-500/25 text-sm group">
                Get a Free Audit Today
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a href={`tel:${PHONE}`}
                className="inline-flex items-center justify-center gap-2 border border-white/10 text-white/80 font-semibold px-7 py-4 rounded-2xl hover:bg-white/5 hover:border-white/20 transition-all text-sm">
                <Phone className="w-4 h-4 text-amber-400 flex-shrink-0" />
                {PHONE_DISP}
              </a>
            </div>

            <div className="flex flex-wrap gap-5">
              {[
                "Active in Sonipat",
                "Free Audit Included",
                "No Lock-in Contract",
                "Google Certified",
              ].map((b) => (
                <div key={b} className="flex items-center gap-1.5 text-xs text-white/40 font-medium">
                  <CheckCircle className="w-3.5 h-3.5 text-amber-500 flex-shrink-0" />
                  {b}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="w-full overflow-hidden leading-none">
          <svg viewBox="0 0 1440 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-7">
            <path d="M0,18 C360,36 1080,0 1440,18 L1440,36 L0,36 Z" fill="#0D0D0D" />
          </svg>
        </div>
      </section>

      {/* ── LOCAL CONTEXT ─────────────────────────────────────────────── */}
      <section className="bg-[#0D0D0D] py-14 border-b border-white/[0.06]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">

            <div>
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
                <span className="text-amber-500 font-semibold text-xs uppercase tracking-[0.16em]">
                  Sonipat&apos;s Digital Opportunity
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-white mb-4 leading-snug">
                Sonipat Is Growing Fast.
                Most Businesses Here Are Still{" "}
                <span className="text-amber-400">Invisible Online.</span>
              </h2>
              <div className="space-y-3 text-white/50 text-sm leading-relaxed">
                <p>
                  Sonipat is one of Haryana&apos;s most active commercial districts —
                  with a strong industrial base across HSIIDC and Kundli, heavy
                  trade on NH-44, a growing student population, and thousands
                  of local businesses ranging from Atlas Road retailers to
                  Bahalgarh Road manufacturers.
                </p>
                <p>
                  Yet the vast majority of Sonipat businesses still rely entirely
                  on word-of-mouth, JustDial listings, and roadside banners. When
                  someone searches{" "}
                  <strong className="text-white">&quot;best clinic in Sonipat&quot;</strong>{" "}
                  or{" "}
                  <strong className="text-white">&quot;coaching centre near Sector 14&quot;</strong>,
                  the top 3 Google results get over 80% of clicks. If your business
                  is not there — it does not exist for that customer.
                </p>
                <p>
                  That gap is exactly the opportunity Proshala helps you capture —
                  before your competitor does.
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { value: "2.5L+",  label: "Monthly Google searches in Sonipat" },
                { value: "Top 3",  label: "Results capture 80% of all clicks" },
                { value: "60 sec", label: "Ideal lead response time" },
                { value: "5–7D",   label: "From audit to campaign live" },
              ].map(({ value, label }, i) => (
                <div key={i}
                  className="bg-white/[0.03] border border-white/[0.07] rounded-2xl p-5 hover:border-amber-500/30 hover:-translate-y-0.5 transition-all group">
                  <div className="text-xl sm:text-2xl font-black text-white mb-1.5 group-hover:text-amber-400 transition-colors">
                    {value}
                  </div>
                  <div className="text-xs text-white/35 leading-snug">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ──────────────────────────────────────────────────── */}
      <section className="py-16 lg:py-20 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
              <span className="text-amber-500 font-semibold text-xs uppercase tracking-[0.16em]">
                Our Services
              </span>
              <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-3">
              Digital Marketing Services for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-400">
                Sonipat Businesses
              </span>
            </h2>
            <p className="text-white/40 text-sm max-w-lg mx-auto">
              One service or a full package — whichever your business needs right now.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map(({ icon: Icon, title, desc, result }, i) => (
              <div key={i}
                className="bg-white/[0.025] border border-white/[0.07] rounded-2xl p-6 hover:border-amber-500/35 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-amber-500/5 transition-all duration-300 group"
                style={{ animation: `fadeSlideUp 0.6s ease ${i * 0.06}s both` }}>
                <div className="w-10 h-10 bg-amber-500/10 border border-amber-500/15 rounded-xl flex items-center justify-center mb-4 group-hover:bg-amber-500/20 group-hover:scale-110 transition-all">
                  <Icon className="w-4.5 h-4.5 text-amber-400" />
                </div>
                <h3 className="font-bold text-white text-sm mb-2 group-hover:text-amber-400 transition-colors">
                  {title}
                </h3>
                <p className="text-white/40 text-xs leading-relaxed mb-4">{desc}</p>
                <div className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-amber-500 rounded-full flex-shrink-0" />
                  <span className="text-amber-400/80 text-[11px] font-semibold">{result}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── AREAS — hyperlocal keyword density ────────────────────────── */}
      <section className="py-12 bg-[#0D0D0D] border-y border-white/[0.06]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-7">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
              <span className="text-amber-500 font-semibold text-xs uppercase tracking-[0.16em]">
                Areas We Cover in Sonipat
              </span>
              <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              We Work Across Every Part of Sonipat
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-2.5">
            {areas.map((area) => (
              <div key={area}
                className="inline-flex items-center gap-1.5 bg-white/[0.03] border border-white/[0.07] text-white/55 text-xs font-semibold px-4 py-2 rounded-full hover:border-amber-500/30 hover:text-amber-400 transition-all cursor-default">
                <MapPin className="w-3 h-3 text-amber-500/60 flex-shrink-0" />
                {area}
              </div>
            ))}
          </div>
          <p className="text-center text-white/25 text-xs mt-5">
            Also serving — Panipat · Rohtak · Bahadurgarh · Gurgaon · Delhi NCR
          </p>
        </div>
      </section>

      {/* ── INDUSTRIES ────────────────────────────────────────────────── */}
      <section className="py-14 bg-[#0A0A0A]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
              <span className="text-amber-500 font-semibold text-xs uppercase tracking-[0.16em]">
                Which Business?
              </span>
              <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              We Work With Every Type of{" "}
              <span className="text-amber-400">Sonipat Business</span>
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {industries.map(({ emoji, name }) => (
              <div key={name}
                className="inline-flex items-center gap-2 bg-white/[0.03] border border-white/[0.07] hover:border-amber-500/30 hover:bg-amber-500/5 text-white/55 hover:text-amber-400 text-xs font-semibold px-4 py-2.5 rounded-full transition-all cursor-default">
                <span>{emoji}</span> {name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY US ────────────────────────────────────────────────────── */}
      <section className="py-16 bg-[#0D0D0D] border-y border-white/[0.06]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
              <span className="text-amber-500 font-semibold text-xs uppercase tracking-[0.16em]">
                Why Proshala
              </span>
              <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white">
              We Do Not Just Run Campaigns —{" "}
              <span className="text-amber-400">We Deliver Results</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {whyUs.map(({ icon: Icon, title, desc }, i) => (
              <div key={i}
                className="bg-white/[0.025] border border-white/[0.07] rounded-2xl p-5 hover:border-amber-500/30 hover:-translate-y-1 transition-all group"
                style={{ animation: `fadeSlideUp 0.5s ease ${i * 0.07}s both` }}>
                <div className="w-9 h-9 bg-amber-500/10 border border-amber-500/15 rounded-xl flex items-center justify-center mb-3 group-hover:bg-amber-500/20 group-hover:scale-110 transition-all">
                  <Icon className="w-4 h-4 text-amber-400" />
                </div>
                <h3 className="font-bold text-white text-sm mb-1.5 group-hover:text-amber-400 transition-colors">
                  {title}
                </h3>
                <p className="text-white/40 text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQs ──────────────────────────────────────────────────────── */}
      <section className="py-16 bg-[#0A0A0A]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
              <span className="text-amber-500 font-semibold text-xs uppercase tracking-[0.16em]">FAQs</span>
              <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white">
              Questions About{" "}
              <span className="text-amber-400">Sonipat Marketing</span>
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map(({ q, a }, i) => (
              <details key={i}
                className="group bg-white/[0.025] border border-white/[0.07] rounded-2xl overflow-hidden hover:border-amber-500/25 transition-colors"
                style={{ animation: `fadeSlideUp 0.5s ease ${i * 0.06}s both` }}>
                <summary className="flex items-center justify-between px-5 py-4 cursor-pointer hover:bg-white/[0.03] transition-colors list-none">
                  <span className="text-sm font-semibold text-white/90 pr-4">{q}</span>
                  <span className="w-6 h-6 flex-shrink-0 flex items-center justify-center rounded-full border border-white/[0.1] text-white/40 group-open:border-amber-500 group-open:text-amber-400 group-open:bg-amber-500/10 transition-all font-bold text-base">
                    <span className="group-open:hidden">+</span>
                    <span className="hidden group-open:block">−</span>
                  </span>
                </summary>
                <div className="px-5 pb-5 pt-1 text-white/45 text-sm leading-relaxed border-t border-white/[0.05]">
                  {a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────── */}
      <section className="py-16 lg:py-20 relative overflow-hidden bg-[#0A0A0A]">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0"
            style={{ background: "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(245,158,11,0.07) 0%, transparent 70%)" }} />
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-amber-500/40 to-transparent" />
          <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-amber-500/40 to-transparent" />
        </div>

        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4 leading-tight">
            Ready to Be Number One{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-300">
              in Sonipat?
            </span>
          </h2>
          <p className="text-white/50 text-sm sm:text-base mb-2 max-w-md mx-auto leading-relaxed">
            Book a free audit. We will analyse your website, map your competition in
            Sonipat, and give you a clear, honest plan — exactly what to fix and in
            what order.
          </p>
          <p className="text-white/25 text-xs mb-8 max-w-sm mx-auto">
            No charges. No commitment. Just an honest recommendation.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
            <Link href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-gray-950 font-black px-8 py-4 rounded-2xl hover:-translate-y-0.5 transition-all shadow-2xl shadow-amber-500/20 text-sm group">
              <Zap className="w-4 h-4" />
              Book Free Audit
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a href={`tel:${PHONE}`}
              className="inline-flex items-center justify-center gap-2 border border-white/10 text-white/80 font-semibold px-8 py-4 rounded-2xl hover:bg-white/5 hover:border-white/20 transition-all text-sm">
              <Phone className="w-4 h-4 text-amber-400 flex-shrink-0" />
              {PHONE_DISP}
            </a>
          </div>

          <div className="flex items-center justify-center gap-2 text-white/25 text-xs">
            <MapPin className="w-3 h-3 text-amber-500/40 flex-shrink-0" />
            <span>
              Serving Sonipat · Kundli · Murthal · Panipat · Rohtak · Delhi NCR
            </span>
          </div>
        </div>
      </section>
    </>
  );
}