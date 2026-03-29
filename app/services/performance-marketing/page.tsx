// app/services/performance-marketing/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import {
  TrendingUp, Target, BarChart3, Zap, CheckCircle,
  ArrowRight, Phone, ChevronRight,
  DollarSign, Eye, RefreshCw, Users, Filter, LineChart,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Performance Marketing Agency India | ROI-Driven Campaigns | Proshala",
  description:
    "Full-funnel performance marketing — paid search, social, display, and retargeting campaigns optimised for measurable ROI. Every rupee tracked, every conversion attributed. Delhi NCR & Pan India.",
  keywords: [
    "performance marketing agency India",
    "ROI marketing agency Delhi",
    "paid marketing agency India",
    "full funnel marketing India",
    "performance marketing Delhi NCR",
    "CPA marketing agency India",
    "ROAS optimisation agency",
    "multi-channel paid advertising India",
  ],
  alternates: { canonical: "https://proshala.com/services/performance-marketing" },
  openGraph: {
    title: "Performance Marketing Agency India | Proshala",
    description:
      "Multi-channel paid campaigns — Search, Social, Display, and Retargeting — with one obsession: measurable ROI. Free audit available.",
    url: "https://proshala.com/services/performance-marketing",
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
    title: "Paid Search (PPC)",
    desc: "Google and Bing Search campaigns targeting high-intent buyers at every stage of the purchase funnel — zero wasted impressions.",
  },
  {
    icon: Users,
    title: "Paid Social",
    desc: "Facebook, Instagram, and LinkedIn campaigns built for lead generation, app installs, and direct sales with ROAS-first bidding.",
  },
  {
    icon: Eye,
    title: "Programmatic Display",
    desc: "Data-driven banner and native ads served to in-market audiences across premium publisher networks at the lowest possible CPM.",
  },
  {
    icon: RefreshCw,
    title: "Retargeting",
    desc: "Multi-channel retargeting sequences that re-engage visitors across Google, Meta, and display networks to recover lost conversions.",
  },
  {
    icon: Filter,
    title: "Conversion Rate Optimisation",
    desc: "Landing page testing, funnel analysis, and form optimisation to squeeze more conversions from your existing traffic and budget.",
  },
  {
    icon: LineChart,
    title: "Attribution & Reporting",
    desc: "Multi-touch attribution models, GA4 setup, and unified dashboards so you always see the true ROI of every channel and campaign.",
  },
];

const stats = [
  { value: "4×",     label: "Average ROAS delivered" },
  { value: "↓40%",   label: "Avg. CPA reduction in 90 days" },
  { value: "6+",     label: "Years managing ad budgets" },
  { value: "₹10Cr+", label: "Ad spend managed" },
];

const channels = [
  { name: "Google Search",    best: "High-intent buyers",       cost: "Medium CPC" },
  { name: "Google Display",   best: "Brand awareness",          cost: "Low CPM" },
  { name: "Meta (FB + IG)",   best: "Demand generation",        cost: "Low–Medium CPC" },
  { name: "LinkedIn Ads",     best: "B2B decision-makers",      cost: "High CPC, High Quality" },
  { name: "YouTube Ads",      best: "Video storytelling",       cost: "Low CPV" },
  { name: "Retargeting",      best: "Warm audience recovery",   cost: "Lowest CPA" },
];

const process = [
  {
    step: "01",
    title: "Audit & Strategy",
    desc: "Full audit of existing campaigns, funnel, and attribution. We identify wasted spend and map a multi-channel strategy aligned to your revenue goals.",
  },
  {
    step: "02",
    title: "Funnel Architecture",
    desc: "Awareness → consideration → conversion campaigns built across the right channels with dedicated budgets and clear KPIs at each stage.",
  },
  {
    step: "03",
    title: "Launch & Track",
    desc: "All campaigns launched with full conversion tracking, UTM parameters, and attribution configured from day one — no guesswork.",
  },
  {
    step: "04",
    title: "Optimise & Scale",
    desc: "Weekly optimisation cycles — cut losers, scale winners, test new creatives. Monthly strategy reviews with full P&L transparency.",
  },
];

const whyPerformance = [
  {
    icon: DollarSign,
    title: "Pay Only for Results",
    desc: "Every rupee in performance marketing is tied to a measurable outcome — click, lead, or sale. No pay-and-pray branding budgets.",
  },
  {
    icon: BarChart3,
    title: "Full Cost Transparency",
    desc: "You see exact cost per lead, cost per sale, and ROAS for every campaign, channel, and ad — updated in real time.",
  },
  {
    icon: TrendingUp,
    title: "Compounding Returns",
    desc: "As data accumulates, algorithms improve and creative learnings compound — campaigns get cheaper and more effective over time.",
  },
  {
    icon: Zap,
    title: "Rapid Iteration",
    desc: "Unlike SEO, performance campaigns can be pivoted in 24 hours. New product? New market? We launch and learn fast.",
  },
];

const faqs = [
  {
    q: "What is performance marketing and how is it different from branding?",
    a: "Performance marketing refers to any paid advertising where you only pay for measurable results — clicks, leads, or sales. Unlike branding campaigns focused on awareness, every performance campaign has a clear KPI (CPA, ROAS, CPL) and budget is optimised toward that metric. You get full visibility into what each rupee generates.",
  },
  {
    q: "Which channels do you recommend for my business?",
    a: "It depends on your funnel stage and audience. B2B businesses with long sales cycles benefit from LinkedIn and Google Search. E-commerce brands typically see the best ROAS from Google Shopping and Meta retargeting. We recommend a channel mix after auditing your current traffic, competition, and margin structure.",
  },
  {
    q: "What budget do I need for performance marketing?",
    a: "We recommend a minimum of ₹30,000–₹50,000/month in total ad spend across channels to run meaningful multi-channel campaigns. Smaller budgets are better focused on one channel (typically Google Search) before expanding. Our management fee is separate and scales with your spend level.",
  },
  {
    q: "How do you measure and report performance?",
    a: "We set up GA4, Google Ads conversion tracking, Meta Pixel and CAPI, and UTM parameters across all channels. You receive a weekly performance snapshot and a detailed monthly report covering spend, impressions, clicks, conversions, CPA, and ROAS — broken down per channel and campaign.",
  },
  {
    q: "Do you manage all channels together or separately?",
    a: "Together — with a unified strategy. Most agencies manage each channel in isolation, leading to budget duplication and attribution confusion. We build one cross-channel funnel where each platform plays a distinct role (awareness, consideration, conversion) and optimise the whole system, not just individual campaigns.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Performance Marketing",
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
  description:
    "Full-funnel performance marketing agency in Delhi NCR — paid search, social, display, and retargeting campaigns optimised for measurable ROI across India and international markets.",
  areaServed: [
    { "@type": "Country", name: "India" },
    { "@type": "City",    name: "Delhi" },
    { "@type": "City",    name: "Sonipat" },
    { "@type": "Country", name: "United States" },
    { "@type": "Country", name: "United Kingdom" },
  ],
  serviceType: "Digital Marketing",
  url: "https://proshala.com/services/performance-marketing",
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
    { "@type": "ListItem", position: 1, name: "Home",                    item: "https://proshala.com" },
    { "@type": "ListItem", position: 2, name: "Services",                item: "https://proshala.com/services" },
    { "@type": "ListItem", position: 3, name: "Performance Marketing",   item: "https://proshala.com/services/performance-marketing" },
  ],
};

export default function PerformanceMarketingPage() {
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
            <span className="text-white/55">Performance Marketing</span>
          </nav>

          <div className="max-w-3xl pb-16 lg:pb-20" style={{ animation: "heroFadeIn 0.7s ease both" }}>
            <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 rounded-full px-4 py-1.5 mb-6">
              <TrendingUp className="w-3.5 h-3.5 text-amber-400" />
              <span className="text-amber-400 text-xs font-bold tracking-wide uppercase">
                Performance Marketing · Full-Funnel · ROI-Driven
              </span>
            </div>

            <h1 className="text-[36px] sm:text-5xl lg:text-[56px] font-black leading-[1.05] tracking-tight mb-5">
              <span className="text-white">Every Rupee </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500">
                Tracked.
              </span>
              <br />
              <span className="text-white">Every Conversion </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500">
                Counted.
              </span>
            </h1>

            <p className="text-white/55 text-base sm:text-lg leading-relaxed mb-4 max-w-xl">
              Proshala runs multi-channel paid campaigns — Search, Social, Display,
              and Retargeting — with one obsession:{" "}
              <strong className="text-white">measurable ROI.</strong> No vanity metrics.
              No wasted budget. Just growth you can see in your revenue.
            </p>
            <p className="text-white/35 text-sm leading-relaxed mb-8 max-w-xl">
              We build the full system — attribution, creatives, landing pages, and
              cross-channel optimisation — not just individual ad campaigns.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-gray-950 font-black px-7 py-4 rounded-2xl hover:-translate-y-0.5 transition-all shadow-2xl shadow-amber-500/25 text-sm group"
              >
                Get Free Audit
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
              {["Multi-Channel", "Full Attribution", "Weekly Reports", "No Lock-in"].map((b) => (
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
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-3">
              One Team,{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-400">
                All Your Channels
              </span>
            </h2>
            <p className="text-white/40 text-sm max-w-md mx-auto">
              Unified strategy and reporting across every paid channel — no more siloed agencies.
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

      {/* ── WHY PERFORMANCE ───────────────────────────────────────────── */}
      <section className="py-14 bg-[#0D0D0D] border-y border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
              <span className="text-amber-500 font-semibold text-xs uppercase tracking-[0.16em]">Why Performance Marketing</span>
              <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-3">
              Marketing That{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-400">
                Proves Itself
              </span>
            </h2>
            <p className="text-white/40 text-sm max-w-md mx-auto">
              Every rupee justified. Every campaign attributable. No black boxes.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {whyPerformance.map(({ icon: Icon, title, desc }, i) => (
              <div
                key={i}
                className="bg-white/[0.025] border border-white/[0.07] rounded-2xl p-5 hover:border-amber-500/35 hover:-translate-y-1 transition-all group text-center"
                style={{ animation: `fadeSlideUp 0.5s ease ${i * 0.07}s both` }}
              >
                <div className="w-10 h-10 bg-amber-500/10 border border-amber-500/15 rounded-xl flex items-center justify-center mb-3 mx-auto group-hover:bg-amber-500/20 group-hover:scale-110 transition-all">
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

      {/* ── CHANNEL MIX TABLE ─────────────────────────────────────────── */}
      <section className="py-14 bg-[#0A0A0A]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
              <span className="text-amber-500 font-semibold text-xs uppercase tracking-[0.16em]">Channel Mix</span>
              <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              Channels We{" "}
              <span className="text-amber-400">Manage</span>
            </h2>
          </div>

          <div
            className="bg-white/[0.025] border border-white/[0.07] rounded-2xl overflow-hidden hover:border-amber-500/20 transition-colors"
            style={{ animation: "fadeSlideUp 0.6s ease 0.1s both" }}
          >
            <div className="grid grid-cols-3 px-5 py-3 bg-white/[0.03] border-b border-white/[0.07]">
              <span className="text-[11px] font-bold text-white/25 uppercase tracking-widest">Channel</span>
              <span className="text-[11px] font-bold text-white/25 uppercase tracking-widest">Best For</span>
              <span className="text-[11px] font-bold text-white/25 uppercase tracking-widest">Cost Profile</span>
            </div>
            {channels.map(({ name, best, cost }, i) => (
              <div
                key={i}
                className={`grid grid-cols-3 px-5 py-4 items-center hover:bg-white/[0.02] transition-colors group ${
                  i < channels.length - 1 ? "border-b border-white/[0.05]" : ""
                }`}
              >
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-amber-500 rounded-full flex-shrink-0 group-hover:scale-125 transition-transform" />
                  <span className="text-sm font-semibold text-white/80 group-hover:text-amber-400 transition-colors">
                    {name}
                  </span>
                </div>
                <span className="text-xs text-white/45">{best}</span>
                <span className="text-xs text-amber-500 font-medium">{cost}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ───────────────────────────────────────────────────── */}
      <section className="py-14 lg:py-20 bg-[#0D0D0D] border-y border-white/[0.06]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
              <span className="text-amber-500 font-semibold text-xs uppercase tracking-[0.16em]">How We Work</span>
              <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              From Audit to{" "}
              <span className="text-amber-400">Revenue</span>
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

      {/* ── FAQs ──────────────────────────────────────────────────────── */}
      <section className="py-14 lg:py-20 bg-[#0A0A0A]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
              <span className="text-amber-500 font-semibold text-xs uppercase tracking-[0.16em]">FAQs</span>
              <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              Performance Marketing —{" "}
              <span className="text-amber-400">Common Questions</span>
            </h2>
          </div>
          <div className="space-y-3">
            {faqs.map(({ q, a }, i) => (
              <details
                key={i}
                className="group bg-white/[0.025] border border-white/[0.07] rounded-2xl overflow-hidden hover:border-amber-500/25 transition-colors"
                style={{ animation: `fadeSlideUp 0.5s ease ${i * 0.07}s both` }}
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
            Turn Ad Spend into{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-300">
              Revenue
            </span>
          </h2>
          <p className="text-white/50 text-sm sm:text-base mb-8 max-w-md mx-auto leading-relaxed">
            Free performance audit — we will review your current campaigns, identify
            wasted spend, and show you a clear path to better ROI within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-5">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-gray-950 font-black px-8 py-4 rounded-2xl hover:-translate-y-0.5 transition-all shadow-2xl shadow-amber-500/20 text-sm group"
            >
              <Zap className="w-4 h-4" />
              Get Free Performance Audit
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
            Free audit · No commitment · Recommendations within 24 hours
          </p>
        </div>
      </section>
    </>
  );
}