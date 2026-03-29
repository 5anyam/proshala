// app/services/technical-seo/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import {
  ChevronRight, ArrowRight, Phone, CheckCircle,
  Zap, Search, Shield, BarChart3, Globe, Code2,
  TrendingUp, AlertTriangle, Settings, FileSearch,
  Layers, Lock, Smartphone, Clock,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Technical SEO Services India | Site Audit, Core Web Vitals & Speed | Proshala",
  description:
    "Expert Technical SEO services in India — site audits, Core Web Vitals optimisation, crawl error fixes, schema markup, page speed & structured data. Delhi NCR & Pan India.",
  keywords: [
    "technical SEO services India",
    "site audit SEO India",
    "core web vitals optimisation",
    "page speed optimisation India",
    "crawl error fix SEO",
    "schema markup service India",
    "technical SEO agency Delhi",
    "structured data SEO India",
    "Google Search Console errors fix",
    "technical SEO audit Delhi NCR",
  ],
  alternates: { canonical: "https://proshala.com/services/technical-seo" },
  openGraph: {
    title: "Technical SEO Services India | Proshala",
    description:
      "Fix crawl errors, boost Core Web Vitals, and rank higher with expert Technical SEO from Proshala — Delhi NCR's performance-first digital marketing agency.",
    url: "https://proshala.com/services/technical-seo",
    siteName: "Proshala",
    type: "website",
  },
};

const PHONE      = "+919999774046";
const PHONE_DISP = "+91 99997 74046";

// ─── Data ─────────────────────────────────────────────────────────────────────
const issues = [
  { icon: AlertTriangle, title: "Crawl Errors",            desc: "Google can't crawl or index your pages — you're invisible in search results no matter how good the content is." },
  { icon: Clock,         title: "Slow Page Speed",         desc: "Pages taking 4s+ to load lose 80% of mobile visitors before they even see your content or offer." },
  { icon: Smartphone,    title: "Poor Mobile UX",          desc: "Non-mobile-friendly sites are penalised by Google's mobile-first indexing algorithm across all rankings." },
  { icon: Code2,         title: "Missing Structured Data", desc: "No schema = no rich snippets = lower CTR even when you rank on Page 1 for your target keywords." },
  { icon: Lock,          title: "HTTPS / Security Issues", desc: "HTTP sites lose trust signals and Google ranking factors simultaneously — and users notice the warning." },
  { icon: Layers,        title: "Duplicate Content",       desc: "Competing pages split your ranking authority and confuse search engine crawlers about which page to rank." },
];

const services = [
  {
    icon: FileSearch,
    title: "Full Technical SEO Audit",
    desc: "200+ point audit covering crawlability, indexation, site architecture, internal linking, canonicals, redirects, and more.",
    points: [
      "Google Search Console deep-dive",
      "Screaming Frog crawl analysis",
      "Log file analysis",
      "Competitor benchmark",
    ],
  },
  {
    icon: Zap,
    title: "Core Web Vitals & Page Speed",
    desc: "LCP, FID, CLS fixes across your entire site — we target 90+ PageSpeed scores on both mobile and desktop.",
    points: [
      "Image optimisation & WebP conversion",
      "CSS/JS minification & deferral",
      "Server response time (TTFB)",
      "CDN setup & caching strategy",
    ],
  },
  {
    icon: Globe,
    title: "Crawl & Index Optimisation",
    desc: "Ensure Google crawls the right pages, skips the thin ones, and indexes your money pages fast.",
    points: [
      "Robots.txt & sitemap fix",
      "Crawl budget optimisation",
      "Noindex/canonical strategy",
      "Orphan page resolution",
    ],
  },
  {
    icon: Code2,
    title: "Schema & Structured Data",
    desc: "Implement the right schema to earn rich snippets — FAQ, Review, Product, Article, LocalBusiness and more.",
    points: [
      "JSON-LD implementation",
      "Google Rich Results testing",
      "Organisation & LocalBusiness schema",
      "BreadcrumbList schema",
    ],
  },
  {
    icon: Shield,
    title: "HTTPS & Security",
    desc: "Migrate to HTTPS correctly, fix mixed-content errors, and protect your site's Google trust signals entirely.",
    points: [
      "SSL certificate setup",
      "HTTP → HTTPS migration",
      "Mixed content error fix",
      "Security header implementation",
    ],
  },
  {
    icon: Layers,
    title: "Site Architecture & Internal Linking",
    desc: "Build a logical site structure that distributes PageRank efficiently and helps Google discover all important content.",
    points: [
      "URL structure optimisation",
      "Silo architecture setup",
      "Internal link audit & fix",
      "Pagination & canonicalisation",
    ],
  },
  {
    icon: Smartphone,
    title: "Mobile-First Optimisation",
    desc: "Pass Google's mobile-first indexing with responsive design, touch-friendly UX, and fast mobile load times.",
    points: [
      "Viewport & responsive fixes",
      "Tap target optimisation",
      "Mobile Core Web Vitals",
      "AMP review & implementation",
    ],
  },
  {
    icon: BarChart3,
    title: "Technical Reporting & Monitoring",
    desc: "Monthly technical health reports so you always know what's been fixed and what's being actively monitored.",
    points: [
      "Google Search Console reporting",
      "Weekly crawl monitoring",
      "Ranking impact tracking",
      "Monthly health scorecard",
    ],
  },
];

const process = [
  { step: "01", title: "Discovery Call",     desc: "30-min call to understand your site, goals, history, and any known technical issues before we begin." },
  { step: "02", title: "200-Point Audit",    desc: "Full crawl + manual review. We document every issue with severity and fix priority clearly labelled." },
  { step: "03", title: "Fix Implementation", desc: "Our dev team fixes issues directly or provides developers with ready-to-implement, precise code." },
  { step: "04", title: "Monitor & Report",   desc: "Monthly reports track ranking improvement, Core Web Vitals scores, and ongoing crawl health." },
];

const results = [
  { metric: "40%",  label: "Avg. crawl error reduction", sub: "Within 30 days of audit" },
  { metric: "90+",  label: "PageSpeed score achieved",   sub: "Mobile & Desktop" },
  { metric: "2.3×", label: "Organic traffic increase",   sub: "Average 6-month result" },
  { metric: "48h",  label: "First fixes delivered",      sub: "After audit sign-off" },
];

const faqs = [
  {
    q: "What is Technical SEO and why does it matter?",
    a: "Technical SEO covers the behind-the-scenes factors that affect how Google crawls, indexes, and ranks your site — page speed, mobile-friendliness, structured data, site architecture, and more. Without a solid technical foundation, even great content will not rank.",
  },
  {
    q: "How long does a Technical SEO audit take?",
    a: "Our full 200-point audit typically takes 5–7 business days depending on site size. You receive a detailed report with every issue categorised by priority (critical, high, medium, low) along with precise fix recommendations.",
  },
  {
    q: "Do you fix the issues or just report them?",
    a: "Both. For WordPress and common CMS sites, our team implements fixes directly. For custom-built sites, we provide your developer with precise, implementation-ready instructions. We stay involved until every critical issue is fully resolved.",
  },
  {
    q: "Will fixing Technical SEO issues immediately improve rankings?",
    a: "Critical fixes like crawl errors and mobile issues can show results within 2–4 weeks. Core Web Vitals improvements typically show ranking impact within 4–8 weeks. Technical SEO is a foundational investment — results compound steadily over time.",
  },
  {
    q: "How is this different from regular SEO?",
    a: "Regular SEO focuses on keywords, content, and backlinks. Technical SEO ensures the infrastructure supports all of that. Think of it as fixing the road before racing — without it, even the best content strategy stalls before gaining momentum.",
  },
];

const whyUs = [
  { icon: Search,     title: "200+ Point Audit",    desc: "Every technical factor checked, documented, and prioritised." },
  { icon: Zap,        title: "90+ PageSpeed Score", desc: "Mobile and desktop speed optimised to meet Google's thresholds." },
  { icon: TrendingUp, title: "Ranking Impact",      desc: "Average 2.3× organic traffic growth in the first 6 months." },
  { icon: Shield,     title: "Ongoing Monitoring",  desc: "Weekly crawl health checks maintained post-implementation." },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Technical SEO Services",
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
    "Expert Technical SEO services including site audits, Core Web Vitals optimisation, page speed fixes, schema markup, crawl error resolution, and mobile-first optimisation.",
  areaServed: [
    { "@type": "Country", name: "India" },
    { "@type": "City",    name: "Delhi" },
    { "@type": "City",    name: "Sonipat" },
    { "@type": "Country", name: "United States" },
    { "@type": "Country", name: "United Kingdom" },
  ],
  serviceType: "Digital Marketing",
  url: "https://proshala.com/services/technical-seo",
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
    { "@type": "ListItem", position: 1, name: "Home",          item: "https://proshala.com" },
    { "@type": "ListItem", position: 2, name: "Services",      item: "https://proshala.com/services" },
    { "@type": "ListItem", position: 3, name: "SEO",           item: "https://proshala.com/services/seo" },
    { "@type": "ListItem", position: 4, name: "Technical SEO", item: "https://proshala.com/services/technical-seo" },
  ],
};

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function TechnicalSEOPage() {
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
              <Link href="/services/seo" className="hover:text-amber-400 transition-colors">SEO</Link>
              <ChevronRight className="w-3 h-3" />
              <span className="text-white/55">Technical SEO</span>
            </nav>

            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 rounded-full px-4 py-1.5 mb-6">
                <Settings className="w-3.5 h-3.5 text-amber-400" />
                <span className="text-amber-400 text-xs font-bold tracking-wide uppercase">
                  Technical SEO · 200-Point Audit · Core Web Vitals
                </span>
              </div>

              <h1 className="text-[38px] sm:text-5xl lg:text-[58px] font-black leading-[1.05] tracking-tight mb-5">
                <span className="text-white">Technical SEO That</span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500">
                  Makes Google Love
                </span>
                <br />
                <span className="text-white">Your Website</span>
              </h1>

              <p className="text-white/55 text-base sm:text-lg leading-relaxed mb-4 max-w-xl">
                A perfectly written page means nothing if Google cannot crawl it. Proshala fixes the
                technical foundation of your website — speed, indexation, schema, mobile UX —
                so your SEO efforts actually deliver rankings.
              </p>
              <p className="text-white/35 text-sm leading-relaxed mb-8 max-w-xl">
                We implement fixes directly — not just hand you a PDF report —
                and monitor your site{" "}
                <strong className="text-amber-400">every week after we are done.</strong>
              </p>

              <div className="flex flex-col sm:flex-row gap-3 mb-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-gray-950 font-black px-7 py-4 rounded-2xl hover:-translate-y-0.5 transition-all shadow-2xl shadow-amber-500/25 text-sm group"
                >
                  Get Free Technical Audit
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
                {["200-Point Audit", "Core Web Vitals Fix", "Schema Markup", "No Lock-in Contract"].map((b) => (
                  <div key={b} className="flex items-center gap-1.5 text-xs text-white/40 font-medium">
                    <CheckCircle className="w-3.5 h-3.5 text-amber-500 flex-shrink-0" />
                    {b}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ══ RESULTS STATS ═════════════════════════════════════════════ */}
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

        {/* ══ PROBLEMS WE SOLVE ═════════════════════════════════════════ */}
        <section className="py-16 lg:py-20 bg-[#0A0A0A]">
          <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
                <span className="text-amber-500 font-semibold text-xs uppercase tracking-[0.16em]">Common Problems</span>
                <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-3">
                Is Your Site Silently{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-400">
                  Losing Rankings?
                </span>
              </h2>
              <p className="text-white/40 text-sm max-w-xl mx-auto">
                Most websites have critical technical issues they are completely unaware of. These are the most common ones we fix.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {issues.map(({ icon: Icon, title, desc }, i) => (
                <div
                  key={i}
                  className="bg-white/[0.025] border border-white/[0.07] rounded-2xl p-5 hover:border-red-500/35 hover:-translate-y-1 transition-all group"
                  style={{ animation: `fadeSlideUp 0.6s ease ${i * 0.07}s both` }}
                >
                  <div className="w-9 h-9 bg-red-500/10 border border-red-500/15 group-hover:bg-red-500/20 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-all">
                    <Icon className="w-4 h-4 text-red-400" />
                  </div>
                  <h3 className="font-bold text-white text-sm mb-1.5 group-hover:text-red-400 transition-colors">
                    {title}
                  </h3>
                  <p className="text-white/40 text-xs leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ SERVICES ══════════════════════════════════════════════════ */}
        <section className="py-16 lg:py-20 bg-[#0D0D0D] border-y border-white/[0.06]">
          <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
                <span className="text-amber-500 font-semibold text-xs uppercase tracking-[0.16em]">What We Fix</span>
                <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-3">
                Our Technical SEO{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-400">
                  Services
                </span>
              </h2>
              <p className="text-white/40 text-sm max-w-xl mx-auto">
                End-to-end technical SEO — from audit to implementation to ongoing monitoring.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {services.map(({ icon: Icon, title, desc, points }, i) => (
                <div
                  key={i}
                  className="bg-white/[0.025] border border-white/[0.07] rounded-2xl p-5 hover:border-amber-500/35 hover:-translate-y-1 hover:shadow-xl hover:shadow-amber-500/5 transition-all group flex flex-col"
                  style={{ animation: `fadeSlideUp 0.6s ease ${i * 0.06}s both` }}
                >
                  <div className="w-9 h-9 bg-amber-500/10 border border-amber-500/15 group-hover:bg-amber-500/20 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-all">
                    <Icon className="w-4 h-4 text-amber-400" />
                  </div>
                  <h3 className="font-bold text-white text-sm mb-2 group-hover:text-amber-400 transition-colors">
                    {title}
                  </h3>
                  <p className="text-white/40 text-xs leading-relaxed mb-3 flex-1">{desc}</p>
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
                Our 4-Step Technical SEO{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-400">
                  Process
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
                  Technical SEO Done{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-400">
                    Right — Not Just Reported
                  </span>
                </h2>
                <p className="text-white/45 text-sm leading-relaxed mb-6">
                  Most SEO agencies hand you a PDF report and disappear. Proshala stays until every
                  critical issue is resolved — our team implements fixes directly, not just
                  recommendations on a slide deck.
                </p>
                <div className="space-y-3">
                  {[
                    "Google Search Console certified specialists",
                    "200+ point audit — not a template checklist",
                    "We fix issues directly, not just report them",
                    "Weekly monitoring after implementation",
                    "Transparent before/after impact reporting",
                    "Works alongside your existing SEO strategy",
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
                    className="bg-white/[0.025] border border-white/[0.07] rounded-2xl p-5 hover:border-amber-500/35 hover:-translate-y-1 transition-all group"
                    style={{ animation: `fadeSlideUp 0.5s ease ${i * 0.08}s both` }}
                  >
                    <div className="w-9 h-9 bg-amber-500/10 border border-amber-500/15 group-hover:bg-amber-500/20 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-all">
                      <Icon className="w-4 h-4 text-amber-400" />
                    </div>
                    <h3 className="font-bold text-white text-sm mb-1 group-hover:text-amber-400 transition-colors">
                      {title}
                    </h3>
                    <p className="text-white/40 text-xs leading-relaxed">{desc}</p>
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
                Technical SEO —{" "}
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
              Ready to Fix Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-300">
                Technical SEO?
              </span>
            </h2>
            <p className="text-white/50 text-sm sm:text-base mb-8 max-w-md mx-auto leading-relaxed">
              Free technical audit — we will identify your top 10 critical issues
              within 48 hours, with a prioritised fix plan. No obligation.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center mb-5">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-gray-950 font-black px-8 py-4 rounded-2xl hover:-translate-y-0.5 transition-all shadow-2xl shadow-amber-500/20 text-sm group"
              >
                <Settings className="w-4 h-4" />
                Get Free Technical Audit
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
              Free audit · No commitment · Top 10 issues identified within 48 hours
            </p>
          </div>
        </section>

      </div>
    </>
  );
}