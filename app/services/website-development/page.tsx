// app/services/website-development/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import {
  ChevronRight, ArrowRight, Phone, CheckCircle,
  Zap, Code2, Globe, Smartphone, BarChart3,
  Shield, Layers, TrendingUp, Palette, Database,
  ShoppingCart, Clock, Star, Settings,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Website Development Services India | Next.js, WordPress & Landing Pages | Proshala",
  description:
    "Professional website development in India — Next.js, WordPress, WooCommerce, Landing Pages. Fast, SEO-optimised, mobile-first websites that generate real leads. Delhi NCR & Pan India.",
  keywords: [
    "website development services India",
    "Next.js development agency India",
    "WordPress development India",
    "WooCommerce development India",
    "landing page development India",
    "website development Delhi NCR",
    "business website design India",
    "SEO-friendly website development",
    "mobile-first website design India",
    "lead generation website India",
  ],
  alternates: { canonical: "https://proshala.com/services/website-development" },
  openGraph: {
    title: "Website Development Services India | Proshala",
    description:
      "Fast, SEO-optimised, mobile-first websites built on Next.js and WordPress. Proshala builds websites that rank and convert.",
    url: "https://proshala.com/services/website-development",
    siteName: "Proshala",
    type: "website",
  },
};

const PHONE      = "+919999774046";
const PHONE_DISP = "+91 99997 74046";

// ─── Data ─────────────────────────────────────────────────────────────────────
const services = [
  {
    icon: Code2,
    title: "Next.js Development",
    tag: "Most Popular",
    tagClass: "bg-amber-500/10 border-amber-500/20 text-amber-400",
    desc: "Blazing-fast, SEO-friendly websites and web apps built on Next.js 14 with App Router, TypeScript, and Tailwind CSS.",
    points: [
      "Server-side rendering (SSR) & Static Generation",
      "90+ PageSpeed score guaranteed",
      "TypeScript + Tailwind CSS",
      "API integrations & headless CMS",
    ],
  },
  {
    icon: Globe,
    title: "WordPress Development",
    tag: "Best for Content Sites",
    tagClass: "bg-sky-500/10 border-sky-500/20 text-sky-400",
    desc: "Custom WordPress sites with premium themes, page builders, and full SEO optimisation — easy for your team to manage.",
    points: [
      "Custom theme development",
      "Elementor / Gutenberg blocks",
      "WooCommerce integration",
      "Speed & security hardening",
    ],
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Development",
    tag: "High Converting",
    tagClass: "bg-emerald-500/10 border-emerald-500/20 text-emerald-400",
    desc: "Conversion-optimised online stores on WooCommerce or custom Next.js with payment gateway integration and inventory management.",
    points: [
      "WooCommerce / Shopify setup",
      "Razorpay, PayU, Stripe integration",
      "Product catalogue & filters",
      "Abandoned cart & upsell flows",
    ],
  },
  {
    icon: Zap,
    title: "Landing Page Development",
    tag: "Highest ROI",
    tagClass: "bg-orange-500/10 border-orange-500/20 text-orange-400",
    desc: "High-converting, ad-specific landing pages designed to maximise Quality Score and lower your Google Ads CPA.",
    points: [
      "A/B test ready structure",
      "Ultra-fast load (<2s)",
      "Lead form with CRM integration",
      "Google Ads Quality Score optimised",
    ],
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    tag: "Design First",
    tagClass: "bg-pink-500/10 border-pink-500/20 text-pink-400",
    desc: "Figma-first design process — wireframes, prototypes, and pixel-perfect handoff before a single line of code is written.",
    points: [
      "Wireframes & prototypes in Figma",
      "Mobile-first responsive design",
      "Brand-consistent UI system",
      "User journey mapping",
    ],
  },
  {
    icon: Settings,
    title: "Website Maintenance",
    tag: "Ongoing Support",
    tagClass: "bg-white/5 border-white/10 text-white/50",
    desc: "Monthly maintenance plans — updates, backups, speed checks, uptime monitoring, and priority support.",
    points: [
      "WordPress core & plugin updates",
      "Daily automated backups",
      "Uptime monitoring (99.9% SLA)",
      "Priority bug fixes",
    ],
  },
];

const techStack = [
  { category: "Frontend",   items: ["Next.js 14", "React 18", "TypeScript", "Tailwind CSS", "Framer Motion"] },
  { category: "CMS",        items: ["WordPress", "Strapi", "Contentful", "Sanity", "Payload CMS"] },
  { category: "E-Commerce", items: ["WooCommerce", "Shopify", "Custom Cart", "Razorpay", "Stripe"] },
  { category: "Backend",    items: ["Node.js", "Next.js API", "PHP", "REST APIs", "Webhooks"] },
  { category: "Database",   items: ["MySQL", "PostgreSQL", "MongoDB", "Firebase", "Supabase"] },
  { category: "DevOps",     items: ["Vercel", "Railway", "AWS", "Cloudflare", "Git CI/CD"] },
];

const process = [
  { step: "01", title: "Discovery & Scope",    desc: "We understand your business, goals, competitors, and define exact deliverables, timeline, and cost upfront." },
  { step: "02", title: "Design in Figma",      desc: "Wireframes → UI design → prototype. You approve every screen before development starts." },
  { step: "03", title: "Dev & Testing",        desc: "Clean code, mobile-first, cross-browser tested. You get a staging URL to review before go-live." },
  { step: "04", title: "Launch & Handover",    desc: "Live deployment, Google Search Console setup, speed audit, and full training for your team." },
];

const results = [
  { metric: "3×",     label: "Average lead increase", sub: "vs old website" },
  { metric: "<2s",    label: "Page load time",         sub: "Mobile & Desktop" },
  { metric: "90+",    label: "PageSpeed score",        sub: "Google guaranteed" },
  { metric: "7 days", label: "Average delivery",       sub: "Landing pages" },
];

const whyUs = [
  { icon: Zap,        title: "90+ PageSpeed",    desc: "Every website we build scores 90+ on Google PageSpeed — mobile and desktop." },
  { icon: Shield,     title: "SEO From Day 1",   desc: "Schema, meta tags, sitemaps, and Core Web Vitals baked in — not an afterthought." },
  { icon: Smartphone, title: "Mobile-First",     desc: "Designed for mobile first, then scaled up — not desktop shrunk down." },
  { icon: Star,       title: "30-Day Support",   desc: "Free bug fixes and changes for 30 days after every project launch." },
  { icon: Clock,      title: "On-Time Delivery", desc: "We set realistic timelines and stick to them — always." },
  { icon: TrendingUp, title: "Built to Convert", desc: "Every design decision is backed by CRO best practices and A/B data." },
];

const faqs = [
  {
    q: "How long does it take to build a website?",
    a: "Landing pages: 5–7 days. Business websites: 2–3 weeks. E-commerce stores: 3–5 weeks. Next.js custom apps: 4–8 weeks depending on complexity. We give you a fixed timeline before starting.",
  },
  {
    q: "Do you work on fixed price or hourly?",
    a: "We work on fixed project pricing only. No hourly billing surprises. You get a detailed scope document with every deliverable, milestone, and cost before we start.",
  },
  {
    q: "Will my website rank on Google?",
    a: "Yes — every website we build follows on-page SEO best practices from day one: proper heading structure, meta tags, schema markup, Core Web Vitals, sitemap, and Google Search Console setup. We also offer ongoing SEO services if you need them.",
  },
  {
    q: "Can I edit the website myself after launch?",
    a: "Absolutely. WordPress sites are 100% self-manageable. For Next.js sites, we set up a CMS (like Strapi or Contentful) so you can edit content without touching code. We also provide a walkthrough training session at handover.",
  },
  {
    q: "Do you provide hosting?",
    a: "We recommend and configure the best hosting for your site — Vercel for Next.js, managed WordPress hosting, or AWS/Cloudflare for high-traffic sites. We handle the entire setup and handover.",
  },
  {
    q: "What if I need changes after launch?",
    a: "We include a 30-day post-launch support period with every project. After that, we offer affordable monthly maintenance plans or per-change billing — whatever suits you best.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Website Development Services",
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
    "Professional website development services in India — Next.js, WordPress, WooCommerce, and Landing Pages. Fast, SEO-optimised, mobile-first websites that generate real leads.",
  areaServed: [
    { "@type": "Country", name: "India" },
    { "@type": "City",    name: "Delhi" },
    { "@type": "City",    name: "Sonipat" },
    { "@type": "Country", name: "United States" },
    { "@type": "Country", name: "United Kingdom" },
  ],
  serviceType: "Website Development",
  url: "https://proshala.com/services/website-development",
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
    { "@type": "ListItem", position: 3, name: "Website Development",     item: "https://proshala.com/services/website-development" },
  ],
};

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function WebsiteDevelopmentPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <div className="bg-[#0A0A0A] text-white overflow-x-hidden">

        {/* ══ HERO ══════════════════════════════════════════════════════ */}
        <section className="relative pt-28 pb-16 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div
              className="absolute -top-24 right-0 w-[540px] h-[540px] rounded-full blur-[130px]"
              style={{ background: "radial-gradient(circle, rgba(245,158,11,0.09) 0%, transparent 70%)" }}
            />
            <div
              className="absolute bottom-0 -left-10 w-[350px] h-[350px] rounded-full blur-[100px]"
              style={{ background: "radial-gradient(circle, rgba(234,179,8,0.05) 0%, transparent 70%)" }}
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

          <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-white/30 mb-8 flex-wrap">
              <Link href="/" className="hover:text-amber-400 transition-colors">Home</Link>
              <ChevronRight className="w-3 h-3" />
              <Link href="/services" className="hover:text-amber-400 transition-colors">Services</Link>
              <ChevronRight className="w-3 h-3" />
              <span className="text-white/55">Website Development</span>
            </nav>

            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 rounded-full px-4 py-1.5 mb-6">
                <Code2 className="w-3.5 h-3.5 text-amber-400" />
                <span className="text-amber-400 text-xs font-bold tracking-wide uppercase">
                  Next.js · WordPress · E-Commerce · Landing Pages
                </span>
              </div>

              <h1 className="text-[38px] sm:text-5xl lg:text-[58px] font-black leading-[1.05] tracking-tight mb-5">
                <span className="text-white">Websites That</span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500">
                  Rank, Load Fast
                </span>
                <br />
                <span className="text-white">& Convert Visitors</span>
              </h1>

              <p className="text-white/55 text-base sm:text-lg leading-relaxed mb-4 max-w-xl">
                We do not just build websites — we build growth engines. Every site Proshala delivers
                is SEO-optimised, mobile-first, and engineered to turn visitors into paying customers.
              </p>
              <p className="text-white/35 text-sm leading-relaxed mb-8 max-w-xl">
                Fixed price, fixed timeline, full code ownership —{" "}
                <strong className="text-amber-400">no lock-in, no scope creep, no surprises.</strong>
              </p>

              <div className="flex flex-col sm:flex-row gap-3 mb-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-gray-950 font-black px-7 py-4 rounded-2xl hover:-translate-y-0.5 transition-all shadow-2xl shadow-amber-500/25 text-sm group"
                >
                  Get Free Website Consultation
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
                {["90+ PageSpeed Score", "Mobile-First", "30-Day Support", "Fixed Price — No Surprises"].map((b) => (
                  <div key={b} className="flex items-center gap-1.5 text-xs text-white/40 font-medium">
                    <CheckCircle className="w-3.5 h-3.5 text-amber-500 flex-shrink-0" />
                    {b}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ══ STATS ═════════════════════════════════════════════════════ */}
        <section className="py-10 bg-[#0D0D0D] border-y border-white/[0.06]">
          <div className="max-w-5xl mx-auto px-5 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {results.map(({ metric, label, sub }, i) => (
                <div
                  key={i}
                  className="bg-white/[0.03] border border-white/[0.07] rounded-2xl p-5 text-center hover:border-amber-500/30 hover:-translate-y-0.5 transition-all group"
                  style={{ animation: `fadeSlideUp 0.5s ease ${i * 0.07}s both` }}
                >
                  <div className="text-2xl sm:text-3xl font-black text-white mb-1 group-hover:text-amber-400 transition-colors">
                    {metric}
                  </div>
                  <div className="text-xs font-bold text-white/70">{label}</div>
                  <div className="text-[11px] text-white/35 mt-0.5">{sub}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ SERVICES ══════════════════════════════════════════════════ */}
        <section className="py-16 lg:py-20 bg-[#0A0A0A]">
          <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
                <span className="text-amber-500 font-semibold text-xs uppercase tracking-[0.16em]">What We Build</span>
                <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-3">
                Website Development{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-400">
                  Services
                </span>
              </h2>
              <p className="text-white/40 text-sm max-w-xl mx-auto">
                From single landing pages to full-scale e-commerce platforms — we build it all, fast and clean.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {services.map(({ icon: Icon, title, tag, tagClass, desc, points }, i) => (
                <div
                  key={i}
                  className="bg-white/[0.025] border border-white/[0.07] rounded-2xl p-6 hover:border-amber-500/35 hover:-translate-y-1 hover:shadow-xl hover:shadow-amber-500/5 transition-all group flex flex-col"
                  style={{ animation: `fadeSlideUp 0.6s ease ${i * 0.08}s both` }}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="w-9 h-9 bg-amber-500/10 border border-amber-500/15 group-hover:bg-amber-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-all">
                      <Icon className="w-4 h-4 text-amber-400" />
                    </div>
                    <span className={`inline-flex items-center border text-[10px] font-bold px-2.5 py-0.5 rounded-full ${tagClass}`}>
                      {tag}
                    </span>
                  </div>
                  <h3 className="font-bold text-white text-sm mb-2 group-hover:text-amber-400 transition-colors">
                    {title}
                  </h3>
                  <p className="text-white/40 text-xs leading-relaxed mb-4 flex-1">{desc}</p>
                  <ul className="space-y-1.5">
                    {points.map((pt, pi) => (
                      <li key={pi} className="flex items-start gap-1.5 text-xs text-white/40">
                        <CheckCircle className="w-3 h-3 text-amber-500 flex-shrink-0 mt-0.5" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ TECH STACK ════════════════════════════════════════════════ */}
        <section className="py-16 bg-[#0D0D0D] border-y border-white/[0.06]">
          <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
                <span className="text-amber-500 font-semibold text-xs uppercase tracking-[0.16em]">Tech Stack</span>
                <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-white mb-3">
                Built With{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-400">
                  Modern Technology
                </span>
              </h2>
              <p className="text-white/40 text-sm max-w-md mx-auto">
                The same tech stack that powers the fastest websites worldwide.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {techStack.map(({ category, items }, i) => (
                <div
                  key={i}
                  className="bg-white/[0.025] border border-white/[0.07] rounded-2xl p-5 hover:border-amber-500/35 transition-all group"
                  style={{ animation: `fadeSlideUp 0.5s ease ${i * 0.07}s both` }}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <Database className="w-4 h-4 text-amber-400" />
                    <span className="font-bold text-white text-sm group-hover:text-amber-400 transition-colors">
                      {category}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {items.map((item) => (
                      <span
                        key={item}
                        className="bg-white/[0.04] border border-white/[0.08] text-white/60 text-[11px] font-semibold px-2.5 py-1 rounded-lg hover:border-amber-500/30 hover:text-amber-400 transition-colors"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ PROCESS ═══════════════════════════════════════════════════ */}
        <section className="py-16 lg:py-20 bg-[#0A0A0A]">
          <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
                <span className="text-amber-500 font-semibold text-xs uppercase tracking-[0.16em]">How It Works</span>
                <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white">
                Our{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-400">
                  Development Process
                </span>
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {process.map(({ step, title, desc }, i) => (
                <div
                  key={i}
                  className="relative bg-white/[0.025] border border-white/[0.07] rounded-2xl p-6 hover:border-amber-500/35 hover:-translate-y-1 transition-all group"
                  style={{ animation: `fadeSlideUp 0.5s ease ${i * 0.08}s both` }}
                >
                  <div className="text-5xl font-black text-amber-500/15 group-hover:text-amber-500/30 transition-colors mb-3 leading-none">
                    {step}
                  </div>
                  <h3 className="font-bold text-white text-sm mb-2 group-hover:text-amber-400 transition-colors">
                    {title}
                  </h3>
                  <p className="text-white/40 text-xs leading-relaxed">{desc}</p>
                  {i < 3 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full h-px z-10">
                      <div className="h-full bg-gradient-to-r from-amber-500/30 to-transparent" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ WHY US ════════════════════════════════════════════════════ */}
        <section className="py-16 lg:py-20 bg-[#0D0D0D] border-y border-white/[0.06]">
          <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 mb-4">
                  <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
                  <span className="text-amber-500 font-semibold text-xs uppercase tracking-[0.16em]">Why Proshala</span>
                  <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-5">
                  We Build Websites{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-400">
                    That Actually Work
                  </span>
                </h2>
                <p className="text-white/45 text-sm leading-relaxed mb-6">
                  Most web agencies focus on making sites look pretty. Proshala focuses on making them
                  perform — faster load times, higher rankings, and more conversions. Because
                  a beautiful website that does not rank or convert is just an expensive brochure.
                </p>
                <div className="space-y-3">
                  {[
                    "Marketing-first approach — built to rank and convert",
                    "Fixed price, fixed timeline — no scope creep surprises",
                    "SEO, ads, and dev handled by one team — no silos",
                    "30-day post-launch support included in every project",
                    "Staging environment — you approve before we go live",
                    "Full code ownership and handover — no lock-in ever",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-amber-500 flex-shrink-0" />
                      <span className="text-white/70 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {whyUs.map(({ icon: Icon, title, desc }, i) => (
                  <div
                    key={i}
                    className="bg-white/[0.025] border border-white/[0.07] rounded-2xl p-4 hover:border-amber-500/35 hover:-translate-y-1 transition-all group"
                    style={{ animation: `fadeSlideUp 0.5s ease ${i * 0.07}s both` }}
                  >
                    <div className="w-8 h-8 bg-amber-500/10 border border-amber-500/15 group-hover:bg-amber-500/20 rounded-xl flex items-center justify-center mb-2 group-hover:scale-110 transition-all">
                      <Icon className="w-3.5 h-3.5 text-amber-400" />
                    </div>
                    <h3 className="font-bold text-white text-xs mb-1 group-hover:text-amber-400 transition-colors">
                      {title}
                    </h3>
                    <p className="text-white/40 text-[11px] leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ══ FAQs ══════════════════════════════════════════════════════ */}
        <section className="py-16 lg:py-20 bg-[#0A0A0A]">
          <div className="max-w-3xl mx-auto px-5 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
                <span className="text-amber-500 font-semibold text-xs uppercase tracking-[0.16em]">FAQs</span>
                <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-white">
                Website Development —{" "}
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

        {/* ══ CTA ═══════════════════════════════════════════════════════ */}
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
            className="max-w-2xl mx-auto px-5 sm:px-6 text-center relative z-10"
            style={{ animation: "fadeSlideUp 0.6s ease both" }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4 leading-tight">
              Let Us Build Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-300">
                Next Website
              </span>
            </h2>
            <p className="text-white/50 text-sm sm:text-base mb-8 max-w-md mx-auto leading-relaxed">
              Free consultation — tell us what you need and we will send you a
              detailed scope, timeline, and fixed price within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center mb-5">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-gray-950 font-black px-8 py-4 rounded-2xl hover:-translate-y-0.5 transition-all shadow-2xl shadow-amber-500/20 text-sm group"
              >
                <Code2 className="w-4 h-4" />
                Start Your Project
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
              Free consultation · Fixed price · Scope + quote within 24 hours
            </p>
          </div>
        </section>

      </div>
    </>
  );
}