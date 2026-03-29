// app/services/seo/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import {
  Search, TrendingUp, MapPin, Settings, PenTool,
  CheckCircle, ArrowRight, Phone, ChevronRight,
  BarChart3, Globe, Zap, Link2, FileText, Clock,
} from "lucide-react";

export const metadata: Metadata = {
  title: "SEO Services India | Search Engine Optimisation Agency | Proshala",
  description:
    "Data-driven SEO services — Local SEO, Technical SEO, and Content Marketing — that grow organic traffic, build authority, and generate leads on autopilot. Delhi NCR & Pan India.",
  keywords: [
    "SEO services India",
    "search engine optimisation agency Delhi",
    "organic traffic growth India",
    "local SEO agency Delhi NCR",
    "technical SEO India",
    "content marketing SEO",
    "Google ranking agency India",
    "SEO audit Delhi",
  ],
  alternates: { canonical: "https://proshala.com/services/seo" },
  openGraph: {
    title: "SEO Services India | Proshala",
    description:
      "Page 1 rankings with white-hat SEO — Local SEO, Technical SEO, and Content Marketing. Free SEO audit available.",
    url: "https://proshala.com/services/seo",
    siteName: "Proshala",
    type: "website",
  },
};

const PHONE      = "+919999774046";
const PHONE_DISP = "+91 99997 74046";

// ─── Data ─────────────────────────────────────────────────────────────────────
const subServices = [
  {
    icon: MapPin,
    title: "Local SEO",
    href: "/services/local-seo",
    desc: "Rank in Google Maps and local search. Dominate 'near me' searches and drive foot traffic and calls from your city.",
    iconColor: "text-emerald-400",
    iconBg: "bg-emerald-500/10 border-emerald-500/15 group-hover:bg-emerald-500/20",
    hoverBorder: "hover:border-emerald-500/35",
    hoverText: "group-hover:text-emerald-400",
  },
  {
    icon: Settings,
    title: "Technical SEO",
    href: "/services/technical-seo",
    desc: "Fix crawl errors, Core Web Vitals, site speed, and structured data — the foundation every high-ranking site is built on.",
    iconColor: "text-blue-400",
    iconBg: "bg-blue-500/10 border-blue-500/15 group-hover:bg-blue-500/20",
    hoverBorder: "hover:border-blue-500/35",
    hoverText: "group-hover:text-blue-400",
  },
  {
    icon: PenTool,
    title: "Content Marketing",
    href: "/services/content-marketing",
    desc: "SEO-optimised blog posts, landing pages, and content strategy that ranks on Page 1 and converts visitors into leads.",
    iconColor: "text-amber-400",
    iconBg: "bg-amber-500/10 border-amber-500/15 group-hover:bg-amber-500/20",
    hoverBorder: "hover:border-amber-500/35",
    hoverText: "group-hover:text-amber-400",
  },
];

const services = [
  {
    icon: Search,
    title: "Keyword Research",
    desc: "Intent-mapped keyword strategy targeting buyer, informational, and navigational terms across your full funnel.",
  },
  {
    icon: Globe,
    title: "On-Page Optimisation",
    desc: "Title tags, meta descriptions, H-tags, internal linking, and schema markup optimised on every page of your site.",
  },
  {
    icon: Link2,
    title: "Link Building",
    desc: "White-hat backlink acquisition from high-DA industry publications, directories, and editorial placements.",
  },
  {
    icon: BarChart3,
    title: "Rank Tracking",
    desc: "Weekly keyword ranking reports with competitor benchmarking so you always know exactly where you stand.",
  },
  {
    icon: FileText,
    title: "SEO Audits",
    desc: "Full technical and content audit with a prioritised action plan — delivered within 5 business days.",
  },
  {
    icon: Zap,
    title: "Core Web Vitals",
    desc: "LCP, CLS, and INP optimised to meet Google's page experience thresholds and protect your hard-earned rankings.",
  },
];

const stats = [
  { value: "68%",  label: "Of online experiences start with search" },
  { value: "53%",  label: "Of all website traffic is organic" },
  { value: "14×",  label: "Higher close rate vs outbound leads" },
  { value: "∞",    label: "Traffic doesn't stop when you pause" },
];

const whySeo = [
  {
    icon: TrendingUp,
    title: "Compounding Returns",
    desc: "Unlike paid ads, SEO compounds. Rankings and authority built today continue delivering traffic and leads for years.",
  },
  {
    icon: Clock,
    title: "Always On",
    desc: "Organic traffic never sleeps. Your site generates leads at 3 AM on Sunday the same as 9 AM on Monday.",
  },
  {
    icon: Search,
    title: "Intent-Based Reach",
    desc: "You reach people at the exact moment they are searching for what you offer — the highest-quality acquisition channel.",
  },
  {
    icon: BarChart3,
    title: "Measurable & Attributable",
    desc: "GA4, GSC, and rank tracking give you full visibility into impressions, clicks, and revenue from every keyword.",
  },
];

const process = [
  {
    step: "01",
    title: "SEO Audit",
    desc: "Technical audit + keyword gap analysis + competitor backlink research. You get a full picture of where you stand and what to fix first.",
  },
  {
    step: "02",
    title: "Strategy & Roadmap",
    desc: "Prioritised 6-month SEO roadmap — technical fixes, content plan, and link building targets — mapped to your revenue goals.",
  },
  {
    step: "03",
    title: "On-Page & Technical",
    desc: "We fix every on-page issue, implement schema, improve site speed, and align all content to target keywords precisely.",
  },
  {
    step: "04",
    title: "Content & Links",
    desc: "Regular content publishing and backlink acquisition build authority month over month. Rankings compound over time.",
  },
];

const faqs = [
  {
    q: "How long does SEO take to show results?",
    a: "Technical fixes and on-page optimisation can show improvements in 4–8 weeks. Meaningful ranking gains for competitive keywords typically take 3–6 months. SEO is a compounding investment — results grow consistently over time and do not stop when you pause spending, unlike paid ads.",
  },
  {
    q: "Do I need all three SEO services — Local, Technical, and Content?",
    a: "It depends on your goals. Local businesses benefit most from Local SEO and Technical SEO. Content-heavy sites or those targeting national/global audiences need Content Marketing and Technical SEO. We recommend a combination after auditing your current site and competitive landscape.",
  },
  {
    q: "How do you build backlinks without risking a Google penalty?",
    a: "We use only white-hat link building — editorial outreach, guest posts on relevant publications, digital PR, and niche directory submissions. We never buy links or use private blog networks. Every link we build is one you would be happy showing Google directly.",
  },
  {
    q: "Can you recover a site hit by a Google algorithm update?",
    a: "Yes. We conduct a full penalty audit — identifying thin content, toxic backlinks, or technical issues that triggered the drop. Recovery typically involves content improvements, backlink disavow, and technical fixes. Most sites we have worked with recovered rankings within 2–4 months.",
  },
  {
    q: "How is your SEO reporting structured?",
    a: "Every client receives a Google Search Console and GA4 setup (if not already done), a weekly keyword ranking snapshot, and a comprehensive monthly report covering organic traffic, impressions, clicks, top-ranking pages, new backlinks acquired, and a clear action plan for the following month.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "SEO Services",
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
    "Data-driven SEO services including Local SEO, Technical SEO, and Content Marketing — growing organic traffic and Page 1 rankings for businesses across India and globally.",
  areaServed: [
    { "@type": "Country", name: "India" },
    { "@type": "City",    name: "Delhi" },
    { "@type": "City",    name: "Sonipat" },
    { "@type": "Country", name: "United States" },
    { "@type": "Country", name: "United Kingdom" },
  ],
  serviceType: "Digital Marketing",
  url: "https://proshala.com/services/seo",
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
    { "@type": "ListItem", position: 1, name: "Home",     item: "https://proshala.com" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://proshala.com/services" },
    { "@type": "ListItem", position: 3, name: "SEO",      item: "https://proshala.com/services/seo" },
  ],
};

export default function SEOPage() {
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
            style={{ background: "radial-gradient(circle, rgba(16,185,129,0.05) 0%, transparent 70%)" }}
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
            <span className="text-white/55">SEO</span>
          </nav>

          <div className="max-w-3xl pb-16 lg:pb-20" style={{ animation: "heroFadeIn 0.7s ease both" }}>
            <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 rounded-full px-4 py-1.5 mb-6">
              <Search className="w-3.5 h-3.5 text-amber-400" />
              <span className="text-amber-400 text-xs font-bold tracking-wide uppercase">
                SEO · Organic Growth · Page 1 Rankings
              </span>
            </div>

            <h1 className="text-[36px] sm:text-5xl lg:text-[56px] font-black leading-[1.05] tracking-tight mb-5">
              <span className="text-white">Rank Higher. </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500">
                Get Found.
              </span>
              <br />
              <span className="text-white">Grow Without Ads.</span>
            </h1>

            <p className="text-white/55 text-base sm:text-lg leading-relaxed mb-4 max-w-xl">
              53% of all web traffic comes from organic search. Proshala builds
              data-driven SEO strategies that put you on Page 1 and keep you there —{" "}
              <strong className="text-white">
                generating leads 24/7 without paying per click.
              </strong>
            </p>
            <p className="text-white/35 text-sm leading-relaxed mb-8 max-w-xl">
              White-hat only. No shortcuts. No penalties. Just compounding organic
              growth that{" "}
              <strong className="text-amber-400">continues working while you sleep.</strong>
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-gray-950 font-black px-7 py-4 rounded-2xl hover:-translate-y-0.5 transition-all shadow-2xl shadow-amber-500/25 text-sm group"
              >
                Get Free SEO Audit
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
              {["White-hat Only", "Monthly Reports", "No Lock-in", "Penalty Recovery"].map((b) => (
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
                <div className="text-xs text-white/35 font-medium leading-relaxed">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SUB SERVICES ──────────────────────────────────────────────── */}
      <section className="py-16 lg:py-20 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
              <span className="text-amber-500 font-semibold text-xs uppercase tracking-[0.16em]">SEO Services</span>
              <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-3">
              Three Services,{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-400">
                One SEO Strategy
              </span>
            </h2>
            <p className="text-white/40 text-sm max-w-md mx-auto">
              Each service covers a distinct dimension of search rankings — together they compound.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-5">
            {subServices.map(({ icon: Icon, title, href, desc, iconColor, iconBg, hoverBorder, hoverText }, i) => (
              <Link
                key={i}
                href={href}
                className={`bg-white/[0.025] border border-white/[0.07] ${hoverBorder} rounded-2xl p-6 hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300 group block`}
                style={{ animation: `fadeSlideUp 0.6s ease ${i * 0.1}s both` }}
              >
                <div className={`w-10 h-10 ${iconBg} border rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-all`}>
                  <Icon className={`w-5 h-5 ${iconColor}`} />
                </div>
                <h3 className={`font-bold text-white text-sm mb-2 flex items-center gap-1 ${hoverText} transition-colors`}>
                  {title}
                  <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <p className="text-white/40 text-sm leading-relaxed">{desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY SEO ───────────────────────────────────────────────────── */}
      <section className="py-14 bg-[#0D0D0D] border-y border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
              <span className="text-amber-500 font-semibold text-xs uppercase tracking-[0.16em]">Why SEO</span>
              <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-3">
              The Channel That{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-400">
                Pays Forever
              </span>
            </h2>
            <p className="text-white/40 text-sm max-w-md mx-auto">
              Every other channel stops the moment you stop paying. SEO compounds.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {whySeo.map(({ icon: Icon, title, desc }, i) => (
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

      {/* ── WHAT'S INCLUDED ───────────────────────────────────────────── */}
      <section className="py-14 lg:py-20 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
              <span className="text-amber-500 font-semibold text-xs uppercase tracking-[0.16em]">What is Included</span>
              <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white mb-3">
              Everything{" "}
              <span className="text-amber-400">Covered</span>
            </h2>
            <p className="text-white/40 text-sm">
              Across all SEO engagements, every client gets the full package.
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
              <span className="text-amber-400">Page 1</span>
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
              SEO —{" "}
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
            Start Ranking on{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-300">
              Page 1
            </span>
          </h2>
          <p className="text-white/50 text-sm sm:text-base mb-8 max-w-md mx-auto leading-relaxed">
            Free SEO audit — we will show you your current rankings, traffic gaps,
            and a prioritised action plan to climb Google within 90 days.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-5">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-gray-950 font-black px-8 py-4 rounded-2xl hover:-translate-y-0.5 transition-all shadow-2xl shadow-amber-500/20 text-sm group"
            >
              <Search className="w-4 h-4" />
              Get Free SEO Audit
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
            Free audit · No commitment · Action plan within 5 business days
          </p>
        </div>
      </section>
    </>
  );
}