// app/services/facebook-instagram-ads/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import {
  Share2, Target, TrendingUp, CheckCircle,
  ArrowRight, Phone, ChevronRight, Star,
  Users, BarChart3, Zap, Eye, ShieldCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Facebook & Instagram Ads Agency India | Proshala – Meta Ads Management",
  description:
    "High-ROI Facebook and Instagram ad campaigns for lead generation, e-commerce sales, and brand growth. Expert Meta Ads management by Proshala — Delhi NCR & Pan India.",
  keywords:
    "facebook ads agency India, instagram ads agency Delhi, meta ads management India, Facebook ads for business India, instagram advertising Delhi NCR, social media ads agency Proshala",
  alternates: {
    canonical: "https://proshala.com/services/facebook-instagram-ads",
  },
  openGraph: {
    title: "Facebook & Instagram Ads Agency India | Proshala",
    description:
      "High-ROI Meta ad campaigns — lead generation, e-commerce sales, and retargeting. Free audit available.",
    url: "https://proshala.com/services/facebook-instagram-ads",
    siteName: "Proshala",
    type: "website",
  },
};

const PHONE      = "+919999774046";
const PHONE_DISP = "+91 99997 74046";

// ─── Data ─────────────────────────────────────────────────────────────────────
const services = [
  {
    icon: Target,
    title: "Lead Generation Ads",
    desc: "Instant Forms and landing page campaigns targeting high-intent audiences at the lowest possible CPL — qualified leads, not just clicks.",
  },
  {
    icon: Eye,
    title: "Brand Awareness Campaigns",
    desc: "Reach and frequency campaigns that put your brand in front of the right people, repeatedly — building recognition that converts later.",
  },
  {
    icon: Share2,
    title: "Retargeting Campaigns",
    desc: "Re-engage website visitors, video viewers, and past customers with personalised creatives that bring warm audiences back to convert.",
  },
  {
    icon: Users,
    title: "Lookalike Audiences",
    desc: "We build custom and lookalike audiences from your actual customer data — finding high-value prospects who look exactly like your best buyers.",
  },
  {
    icon: BarChart3,
    title: "Conversion Campaigns",
    desc: "Purchase and sign-up optimised campaigns with pixel tracking, CAPI integration, and A/B tested creatives for maximum ROAS.",
  },
  {
    icon: TrendingUp,
    title: "Scaling & Optimisation",
    desc: "Daily bid management, creative refresh cycles, and structured budget scaling as winning ad sets emerge — zero wasted spend.",
  },
];

const stats = [
  { value: "3.2×",  label: "Average ROAS achieved" },
  { value: "60%",   label: "Lower CPL vs Google Ads" },
  { value: "48hr",  label: "Campaign go-live time" },
  { value: "3.2B+", label: "Meta monthly active users" },
];

const process = [
  {
    step: "01",
    title: "Audience Research",
    desc: "We map your ideal customer using demographics, interests, behaviours, and purchase signals available on the Meta platform.",
  },
  {
    step: "02",
    title: "Creative Strategy",
    desc: "Ad copy, image, and video briefs tailored for Reels, Stories, Feed, and Carousel — each format has a different winning formula.",
  },
  {
    step: "03",
    title: "Launch & A/B Test",
    desc: "Multiple ad sets launched simultaneously with structured testing across audiences, placements, and creative variations.",
  },
  {
    step: "04",
    title: "Optimise & Scale",
    desc: "Winners are scaled, losers are cut fast. Weekly reports with full visibility on every rupee spent and every lead generated.",
  },
];

const adFormats = [
  { emoji: "🎬", name: "Reels Ads" },
  { emoji: "📸", name: "Feed Image Ads" },
  { emoji: "🎠", name: "Carousel Ads" },
  { emoji: "📖", name: "Stories Ads" },
  { emoji: "🛒", name: "Catalogue / DPA Ads" },
  { emoji: "📋", name: "Lead Gen Forms" },
  { emoji: "▶️", name: "In-Stream Video Ads" },
  { emoji: "💬", name: "Click-to-WhatsApp Ads" },
];

const industries = [
  { emoji: "🏠", name: "Real Estate" },
  { emoji: "🎓", name: "EdTech / Coaching" },
  { emoji: "🛒", name: "E-commerce / D2C" },
  { emoji: "🏥", name: "Healthcare / Clinic" },
  { emoji: "🍽️", name: "Restaurant & F&B" },
  { emoji: "💰", name: "Finance & Insurance" },
  { emoji: "✈️", name: "Travel & Hospitality" },
  { emoji: "👗", name: "Fashion & Lifestyle" },
];

const faqs = [
  {
    q: "What is the minimum budget to start Facebook and Instagram Ads in India?",
    a: "We recommend a minimum ad spend of ₹15,000–₹20,000 per month to collect enough data for meaningful optimisation. Our management fee is charged separately. For local businesses with tight geo-targeting — such as a single-city clinic or coaching centre — smaller budgets of ₹8,000–₹12,000/month can still produce results.",
  },
  {
    q: "Facebook Ads vs Google Ads — which is better for my business?",
    a: "They serve different purposes and work best together. Google Ads captures existing demand — people actively searching for your product or service right now. Meta Ads creates demand — showing your product to people who match your ideal customer profile but haven't searched yet. For most businesses, running both channels together delivers the best overall cost per lead and ROAS.",
  },
  {
    q: "How long before I see results from Meta Ads?",
    a: "Most campaigns enter the learning phase in the first 7–14 days as Meta's algorithm collects data. You will see initial performance signals within the first week and meaningful, optimised results by week 3–4. Retargeting campaigns typically deliver results faster — within 5–7 days — since the audience is already familiar with your brand.",
  },
  {
    q: "Do you create the ad creatives or does my team need to provide them?",
    a: "We provide the full creative strategy — copy, hooks, format recommendations, and design briefs. For static image and carousel ads, we design them in-house. For video and Reels ads, we work with your existing footage or guide you with a simple shoot brief that produces high-performing content without expensive production.",
  },
  {
    q: "What is Click-to-WhatsApp advertising and should I use it?",
    a: "Click-to-WhatsApp is a Meta ad format where the call-to-action opens a WhatsApp chat directly with your business instead of going to a landing page. For Indian businesses this is extremely effective — India has 500M+ WhatsApp users and response rates on WhatsApp are 5–10× higher than email or form submissions. We strongly recommend this format for service businesses, real estate, clinics, and coaching institutes.",
  },
  {
    q: "Do you handle the Meta Business Manager and pixel setup?",
    a: "Yes — complete account setup is included. We set up or audit your Meta Business Manager, Ads Manager, pixel, Conversions API (CAPI) for server-side tracking, custom events, and audience lists. Proper tracking is the foundation of profitable Meta Ads — we never skip this step.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Facebook & Instagram Ads Management",
  alternateName: [
    "Meta Ads Agency India",
    "Facebook Ads Agency Delhi",
    "Instagram Advertising India",
  ],
  description:
    "Proshala manages high-ROI Facebook and Instagram ad campaigns for businesses across India — covering lead generation, e-commerce sales, retargeting, and brand awareness on Meta.",
  provider: {
    "@type": "Organization",
    name: "Proshala",
    url: "https://proshala.com",
    telephone: PHONE,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Delhi",
      addressRegion: "Delhi NCR",
      addressCountry: "IN",
    },
  },
  areaServed: [
    { "@type": "Country", name: "India" },
    { "@type": "City",    name: "Delhi" },
    { "@type": "City",    name: "Sonipat" },
  ],
  serviceType: "Social Media Advertising",
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: "INR",
    lowPrice: "8000",
  },
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
    { "@type": "ListItem", position: 1, name: "Home",                        item: "https://proshala.com" },
    { "@type": "ListItem", position: 2, name: "Services",                    item: "https://proshala.com/services" },
    { "@type": "ListItem", position: 3, name: "Facebook & Instagram Ads",    item: "https://proshala.com/services/facebook-instagram-ads" },
  ],
};

export default function FacebookInstagramAdsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* ── HERO ──────────────────────────────────────────────────────── */}
      <section className="relative bg-[#0A0A0A] pt-28 pb-0 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute -top-24 right-0 w-[540px] h-[540px] rounded-full blur-[130px]"
            style={{ background: "radial-gradient(circle, rgba(245,158,11,0.09) 0%, transparent 70%)" }}
          />
          <div
            className="absolute bottom-0 -left-10 w-[350px] h-[350px] rounded-full blur-[100px]"
            style={{ background: "radial-gradient(circle, rgba(251,146,60,0.05) 0%, transparent 70%)" }}
          />
          <div
            className="absolute inset-0 opacity-[0.025]"
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
            <Link href="/services" className="hover:text-amber-400 transition-colors">Services</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-white/55">Facebook & Instagram Ads</span>
          </nav>

          <div className="max-w-3xl pb-16 lg:pb-20" style={{ animation: "heroFadeIn 0.7s ease both" }}>
            <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 rounded-full px-4 py-1.5 mb-6">
              <Share2 className="w-3.5 h-3.5 text-amber-400" />
              <span className="text-amber-400 text-xs font-bold tracking-wide uppercase">
                Meta Ads · Facebook · Instagram · India
              </span>
            </div>

            <h1 className="text-[36px] sm:text-5xl lg:text-[56px] font-black leading-[1.05] tracking-tight mb-5">
              <span className="text-white">Facebook & Instagram</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500">
                Ads That Actually Sell
              </span>
            </h1>

            <p className="text-white/55 text-base sm:text-lg leading-relaxed mb-4 max-w-xl">
              Proshala runs high-ROI Meta ad campaigns — from lead generation and
              e-commerce sales to brand awareness and retargeting — with{" "}
              <strong className="text-white">creative strategy, precise targeting,
              and weekly performance reports</strong> you can actually read.
            </p>
            <p className="text-white/35 text-sm leading-relaxed mb-8 max-w-xl">
              Whether you are a D2C brand, a coaching institute, a real estate developer,
              or a local service business — if your customers are on Facebook or Instagram,
              we will put your brand in front of them profitably.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-gray-950 font-black px-7 py-4 rounded-2xl hover:-translate-y-0.5 transition-all shadow-2xl shadow-amber-500/25 text-sm group"
              >
                Start Meta Ads Today
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href={`tel:${PHONE}`}
                className="inline-flex items-center justify-center gap-2 border border-white/10 text-white/80 font-semibold px-7 py-4 rounded-2xl hover:bg-white/5 hover:border-white/20 transition-all text-sm"
              >
                <Phone className="w-4 h-4 text-amber-400 flex-shrink-0" />
                {PHONE_DISP}
              </a>
            </div>

            <div className="flex flex-wrap gap-5">
              {[
                "Meta Business Partner",
                "Pixel & CAPI Setup",
                "A/B Tested Creatives",
                "No Lock-in Contract",
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

      {/* ── STATS ─────────────────────────────────────────────────────── */}
      <section className="bg-[#0D0D0D] py-10 border-b border-white/[0.06]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map(({ value, label }, i) => (
              <div
                key={i}
                className="bg-white/[0.03] border border-white/[0.07] rounded-2xl p-5 text-center hover:border-amber-500/30 hover:-translate-y-0.5 transition-all group"
                style={{ animation: `fadeSlideUp 0.5s ease ${i * 0.07}s both` }}
              >
                <div className="text-2xl sm:text-3xl font-black text-white mb-1 group-hover:text-amber-400 transition-colors">
                  {value}
                </div>
                <div className="text-xs text-white/35 font-medium">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ──────────────────────────────────────────────────── */}
      <section className="py-16 lg:py-20 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
              <span className="text-amber-500 font-semibold text-xs uppercase tracking-[0.16em]">What is Included</span>
              <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-3">
              Full-Service{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-400">
                Meta Ads Management
              </span>
            </h2>
            <p className="text-white/40 text-sm max-w-md mx-auto">
              Strategy, creatives, targeting, pixel setup, and reporting — all handled from one place.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map(({ icon: Icon, title, desc }, i) => (
              <div
                key={i}
                className="bg-white/[0.025] border border-white/[0.07] rounded-2xl p-6 hover:border-amber-500/35 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-amber-500/5 transition-all duration-300 group"
                style={{ animation: `fadeSlideUp 0.6s ease ${i * 0.07}s both` }}
              >
                <div className="w-10 h-10 bg-amber-500/10 border border-amber-500/15 rounded-xl flex items-center justify-center mb-4 group-hover:bg-amber-500/20 group-hover:scale-110 transition-all">
                  <Icon className="w-4.5 h-4.5 text-amber-400" />
                </div>
                <h3 className="font-bold text-white text-sm mb-2 group-hover:text-amber-400 transition-colors">
                  {title}
                </h3>
                <p className="text-white/40 text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── AD FORMATS ────────────────────────────────────────────────── */}
      <section className="py-12 bg-[#0D0D0D] border-y border-white/[0.06]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-7">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
              <span className="text-amber-500 font-semibold text-xs uppercase tracking-[0.16em]">Ad Formats We Run</span>
              <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {adFormats.map(({ emoji, name }) => (
              <div
                key={name}
                className="inline-flex items-center gap-2 bg-white/[0.03] border border-white/[0.07] text-white/55 text-xs font-semibold px-4 py-2.5 rounded-full hover:border-amber-500/30 hover:text-amber-400 transition-all cursor-default"
              >
                <span>{emoji}</span> {name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ───────────────────────────────────────────────────── */}
      <section className="py-16 lg:py-20 bg-[#0A0A0A]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
              <span className="text-amber-500 font-semibold text-xs uppercase tracking-[0.16em]">How We Work</span>
              <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white">
              How We Run{" "}
              <span className="text-amber-400">Your Campaigns</span>
            </h2>
          </div>
          <div className="space-y-3">
            {process.map(({ step, title, desc }, i) => (
              <div
                key={i}
                className="flex gap-5 bg-white/[0.025] border border-white/[0.07] rounded-2xl p-5 hover:border-amber-500/30 transition-all group"
                style={{ animation: `fadeSlideUp 0.5s ease ${i * 0.08}s both` }}
              >
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className="w-9 h-9 bg-amber-500 text-gray-950 rounded-xl flex items-center justify-center font-black text-sm shadow-lg shadow-amber-500/20 group-hover:scale-110 transition-transform">
                    {step}
                  </div>
                  {i < process.length - 1 && (
                    <div className="w-px flex-1 bg-gradient-to-b from-amber-500/30 to-transparent mt-2 min-h-[16px]" />
                  )}
                </div>
                <div className="pt-1">
                  <h3 className="font-bold text-white text-sm mb-1.5 group-hover:text-amber-400 transition-colors">
                    {title}
                  </h3>
                  <p className="text-white/45 text-xs sm:text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES ────────────────────────────────────────────────── */}
      <section className="py-12 bg-[#0D0D0D] border-y border-white/[0.06]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-7">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
              <span className="text-amber-500 font-semibold text-xs uppercase tracking-[0.16em]">Industries We Serve</span>
              <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              Meta Ads Work for{" "}
              <span className="text-amber-400">Every Industry</span>
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {industries.map(({ emoji, name }) => (
              <div
                key={name}
                className="inline-flex items-center gap-2 bg-white/[0.03] border border-white/[0.07] hover:border-amber-500/30 hover:bg-amber-500/5 text-white/55 hover:text-amber-400 text-xs font-semibold px-4 py-2.5 rounded-full transition-all cursor-default"
              >
                <span>{emoji}</span> {name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY PROSHALA ──────────────────────────────────────────────── */}
      <section className="py-16 bg-[#0A0A0A]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
              <span className="text-amber-500 font-semibold text-xs uppercase tracking-[0.16em]">Why Proshala</span>
              <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white">
              Not Just Reach —{" "}
              <span className="text-amber-400">Revenue</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                icon: Target,
                title: "ROAS-First Approach",
                desc: "We never optimise for reach or impressions alone. Every campaign is structured around a cost-per-result goal — CPL, ROAS, or CAC — agreed upfront.",
              },
              {
                icon: ShieldCheck,
                title: "Proper Tracking Setup",
                desc: "Meta pixel, Conversions API (CAPI), custom events, and attribution windows configured correctly. Without accurate data, optimisation is just guesswork.",
              },
              {
                icon: Zap,
                title: "Click-to-WhatsApp Specialists",
                desc: "We are experienced in WhatsApp-integrated Meta campaigns — the highest-converting ad format for service businesses in India.",
              },
              {
                icon: BarChart3,
                title: "Weekly Transparent Reports",
                desc: "Plain-English reports every week — spend, leads, CPL, ROAS, top creatives. You always know what is working and why.",
              },
              {
                icon: Users,
                title: "Creative Strategy Included",
                desc: "We handle copy, hooks, design briefs, and format recommendations — not just campaign management. Creative is what wins on Meta.",
              },
              {
                icon: TrendingUp,
                title: "Scaling Methodology",
                desc: "We use a structured scaling framework — horizontal and vertical — so winning campaigns grow without efficiency dropping.",
              },
            ].map(({ icon: Icon, title, desc }, i) => (
              <div
                key={i}
                className="bg-white/[0.025] border border-white/[0.07] rounded-2xl p-5 hover:border-amber-500/30 hover:-translate-y-1 transition-all group"
                style={{ animation: `fadeSlideUp 0.5s ease ${i * 0.07}s both` }}
              >
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
      <section className="py-16 bg-[#0D0D0D] border-t border-white/[0.06]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
              <span className="text-amber-500 font-semibold text-xs uppercase tracking-[0.16em]">FAQs</span>
              <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white">
              Meta Ads —{" "}
              <span className="text-amber-400">Common Questions</span>
            </h2>
          </div>
          <div className="space-y-3">
            {faqs.map(({ q, a }, i) => (
              <details
                key={i}
                className="group bg-white/[0.025] border border-white/[0.07] rounded-2xl overflow-hidden hover:border-amber-500/25 transition-colors"
                style={{ animation: `fadeSlideUp 0.5s ease ${i * 0.06}s both` }}
              >
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
      <section className="py-16 lg:py-24 relative overflow-hidden bg-[#0A0A0A]">
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute inset-0"
            style={{ background: "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(245,158,11,0.07) 0%, transparent 70%)" }}
          />
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-amber-500/40 to-transparent" />
          <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-amber-500/40 to-transparent" />
        </div>

        <div
          className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
          style={{ animation: "fadeSlideUp 0.6s ease both" }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4 leading-tight">
            Ready to Run{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-300">
              Profitable Meta Ads?
            </span>
          </h2>
          <p className="text-white/50 text-sm sm:text-base mb-8 max-w-md mx-auto leading-relaxed">
            Get a free Meta Ads audit. We will review your current account — or build
            your strategy from scratch — and show you exactly how to reach your target
            audience profitably.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-5">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-gray-950 font-black px-8 py-4 rounded-2xl hover:-translate-y-0.5 transition-all shadow-2xl shadow-amber-500/20 text-sm group"
            >
              <Zap className="w-4 h-4" />
              Get Free Meta Audit
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href={`tel:${PHONE}`}
              className="inline-flex items-center justify-center gap-2 border border-white/10 text-white/80 font-semibold px-8 py-4 rounded-2xl hover:bg-white/5 hover:border-white/20 transition-all text-sm"
            >
              <Phone className="w-4 h-4 text-amber-400 flex-shrink-0" />
              {PHONE_DISP}
            </a>
          </div>
          <p className="text-white/25 text-xs">
            Free audit · No commitment · Campaign live in 48 hours
          </p>
        </div>
      </section>
    </>
  );
}