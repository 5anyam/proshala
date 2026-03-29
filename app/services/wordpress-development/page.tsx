// app/services/wordpress-development/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import {
  ChevronRight, ArrowRight, Phone, CheckCircle,
  Zap, Globe, Shield, BarChart3, Settings,
  Layers, TrendingUp, Palette, Database,
  ShoppingCart, Clock, Star, Code2, Smartphone,
} from "lucide-react";

export const metadata: Metadata = {
  title: "WordPress Development Services India | Custom Themes, WooCommerce & Speed | Proshala",
  description:
    "Expert WordPress development in India — custom themes, WooCommerce stores, speed optimisation, security hardening and ongoing maintenance. Delhi NCR & Pan India.",
  keywords: [
    "WordPress development services India",
    "custom WordPress theme development India",
    "WooCommerce development India",
    "WordPress speed optimisation India",
    "WordPress security hardening",
    "WordPress agency Delhi NCR",
    "WordPress maintenance India",
    "WordPress SEO optimisation India",
    "WordPress website design India",
    "WordPress plugin development India",
  ],
  alternates: { canonical: "https://proshala.com/services/wordpress-development" },
  openGraph: {
    title: "WordPress Development Services India | Proshala",
    description:
      "Custom WordPress websites, WooCommerce stores and landing pages — fast, secure, SEO-optimised. Built by Proshala, Delhi NCR's performance marketing agency.",
    url: "https://proshala.com/services/wordpress-development",
    siteName: "Proshala",
    type: "website",
  },
};

const PHONE      = "+919999774046";
const PHONE_DISP = "+91 99997 74046";

// ─── Data ─────────────────────────────────────────────────────────────────────
const services = [
  {
    icon: Palette,
    title: "Custom WordPress Theme",
    tag: "Most Popular",
    tagClass: "bg-amber-500/10 border-amber-500/20 text-amber-400",
    desc: "Pixel-perfect custom themes built from scratch — no bloated page builders, pure clean code that loads in under 2 seconds.",
    points: [
      "Figma → WordPress pixel-perfect build",
      "No unnecessary plugins or bloat",
      "Custom Gutenberg blocks",
      "Child theme architecture",
    ],
  },
  {
    icon: ShoppingCart,
    title: "WooCommerce Development",
    tag: "E-Commerce",
    tagClass: "bg-emerald-500/10 border-emerald-500/20 text-emerald-400",
    desc: "Full-featured WooCommerce stores with payment gateways, inventory management, and conversion-optimised product pages.",
    points: [
      "Razorpay, PayU, Stripe setup",
      "Custom product filters & catalogues",
      "Cart abandonment recovery",
      "Order management & invoicing",
    ],
  },
  {
    icon: Zap,
    title: "WordPress Speed Optimisation",
    tag: "90+ PageSpeed",
    tagClass: "bg-orange-500/10 border-orange-500/20 text-orange-400",
    desc: "Transform a slow, clunky WordPress site into a lightning-fast experience — we target 90+ PageSpeed on mobile and desktop.",
    points: [
      "Image compression & WebP conversion",
      "Caching (Redis / WP Rocket / LiteSpeed)",
      "CSS/JS minification & deferral",
      "CDN setup & TTFB optimisation",
    ],
  },
  {
    icon: Shield,
    title: "WordPress Security & Hardening",
    tag: "Enterprise Grade",
    tagClass: "bg-sky-500/10 border-sky-500/20 text-sky-400",
    desc: "Protect your WordPress site from malware, brute-force attacks, and vulnerabilities with a comprehensive security audit and hardening.",
    points: [
      "Malware scan & removal",
      "Login protection & 2FA",
      "File permission hardening",
      "WAF & Cloudflare integration",
    ],
  },
  {
    icon: Settings,
    title: "Plugin Development",
    tag: "Custom Functionality",
    tagClass: "bg-pink-500/10 border-pink-500/20 text-pink-400",
    desc: "Can't find a plugin that does exactly what you need? We build custom WordPress plugins tailored to your business logic.",
    points: [
      "Custom post types & taxonomies",
      "REST API integrations",
      "Payment & CRM plugin hooks",
      "Admin dashboard customisation",
    ],
  },
  {
    icon: Globe,
    title: "WordPress Maintenance",
    tag: "Ongoing Support",
    tagClass: "bg-white/5 border-white/10 text-white/50",
    desc: "Monthly maintenance plans so your WordPress site stays updated, secure, backed up, and running at peak performance.",
    points: [
      "Core, theme & plugin updates",
      "Daily automated backups",
      "Uptime monitoring (99.9% SLA)",
      "Priority bug fix support",
    ],
  },
];

const techStack = [
  { category: "Core",          items: ["WordPress 6.x", "PHP 8.2", "MySQL 8", "REST API", "WP CLI"] },
  { category: "Page Builders", items: ["Gutenberg", "Elementor Pro", "Bricks Builder", "Oxygen Builder"] },
  { category: "E-Commerce",    items: ["WooCommerce", "Razorpay", "PayU", "Stripe", "YITH Plugins"] },
  { category: "Performance",   items: ["WP Rocket", "LiteSpeed Cache", "Cloudflare", "Redis", "WebP Express"] },
  { category: "SEO",           items: ["Rank Math", "Yoast SEO", "Schema Pro", "Google Search Console"] },
  { category: "Hosting",       items: ["Hostinger", "SiteGround", "Cloudways", "Kinsta", "AWS Lightsail"] },
];

const process = [
  { step: "01", title: "Discovery & Audit",   desc: "We review your existing site (or brief), define scope, and recommend the right stack — theme, plugins, hosting." },
  { step: "02", title: "Design in Figma",     desc: "Every page designed in Figma first. You approve the complete UI before a single line of code is written." },
  { step: "03", title: "Development & QA",    desc: "Built on a staging server, tested across browsers and devices. Speed and security audit before go-live." },
  { step: "04", title: "Launch & Training",   desc: "We deploy, configure backups, set up Google Search Console, and train your team to manage content independently." },
];

const results = [
  { metric: "<2s",    label: "Average page load time", sub: "After our speed optimisation" },
  { metric: "90+",    label: "PageSpeed score",         sub: "Mobile & Desktop" },
  { metric: "3×",     label: "Lead increase",           sub: "vs old website average" },
  { metric: "14 days", label: "Average delivery",       sub: "Business websites" },
];

const whyUs = [
  { icon: Zap,        title: "90+ PageSpeed",     desc: "Mobile and desktop speed optimised before every single handover." },
  { icon: Shield,     title: "Security Hardened", desc: "WAF, 2FA, Cloudflare and file-level hardening on every site." },
  { icon: Smartphone, title: "Mobile-First",      desc: "Designed for mobile, responsive across all screen sizes." },
  { icon: BarChart3,  title: "SEO From Day 1",    desc: "Rank Math, schema, sitemap and GSC setup included." },
  { icon: Star,       title: "30-Day Support",    desc: "Free fixes and changes for 30 days post-launch." },
  { icon: Clock,      title: "14-Day Delivery",   desc: "Business website delivered in 14 days — guaranteed." },
];

const compareRows: [string, string, string][] = [
  ["Self-manage content", "✅ Easy",                "⚠️ Needs CMS"],
  ["Page speed",          "⚠️ Needs optimisation", "✅ Blazing fast"],
  ["E-commerce",          "✅ WooCommerce",         "✅ Custom"],
  ["Blog / CMS",          "✅ Native",              "✅ Headless CMS"],
  ["Developer needed",    "❌ Not required",        "✅ Required"],
  ["SEO",                 "✅ With Rank Math",      "✅ Built-in"],
  ["Best for",            "Content sites, SMBs",    "Apps, SaaS, High-perf"],
];

const faqs = [
  {
    q: "Do you build on existing WordPress sites or only new ones?",
    a: "Both. We rebuild existing WordPress sites (redesign, speed fix, security hardening) and build new ones from scratch. For existing sites, we start with a full audit before recommending what to fix vs rebuild.",
  },
  {
    q: "Will I be able to manage my WordPress site myself?",
    a: "Yes — that is the whole point. We build a clean, easy-to-manage WordPress site and provide a hands-on training session covering how to add pages, posts, products, and images. No technical knowledge needed.",
  },
  {
    q: "Which is better — WordPress or Next.js for my business?",
    a: "WordPress is ideal if you need a content-heavy site, blog, e-commerce store, or want to manage content without a developer. Next.js is better for performance-critical apps, complex functionality, or when you have a developer team. We will recommend the right one for your specific needs — free of charge.",
  },
  {
    q: "Do you work with Elementor?",
    a: "Yes, we work with Elementor Pro, Bricks Builder, and Oxygen Builder — but we recommend custom Gutenberg builds for speed-critical projects since page builders add code weight. We will guide you on the best approach for your goals.",
  },
  {
    q: "How do you handle WordPress security?",
    a: "Every site we deliver includes: HTTPS setup, login URL change, 2FA, file permission hardening, and a WAF via Cloudflare. For existing sites, we do a full malware scan and security audit before hardening.",
  },
  {
    q: "What's included in your WordPress maintenance plan?",
    a: "Monthly plans include: core + plugin + theme updates, daily automated backups, uptime monitoring, monthly speed check, and priority support for bug fixes. Plans start from ₹3,999/month.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "WordPress Development Services",
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
    "Expert WordPress development in India — custom themes, WooCommerce stores, speed optimisation, security hardening, and ongoing maintenance.",
  areaServed: [
    { "@type": "Country", name: "India" },
    { "@type": "City",    name: "Delhi" },
    { "@type": "City",    name: "Sonipat" },
    { "@type": "Country", name: "United States" },
    { "@type": "Country", name: "United Kingdom" },
  ],
  serviceType: "Website Development",
  url: "https://proshala.com/services/wordpress-development",
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
    { "@type": "ListItem", position: 4, name: "WordPress Development",   item: "https://proshala.com/services/wordpress-development" },
  ],
};

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function WordPressDevelopmentPage() {
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
              <Link href="/services/website-development" className="hover:text-amber-400 transition-colors">Website Development</Link>
              <ChevronRight className="w-3 h-3" />
              <span className="text-white/55">WordPress Development</span>
            </nav>

            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 rounded-full px-4 py-1.5 mb-6">
                <Globe className="w-3.5 h-3.5 text-amber-400" />
                <span className="text-amber-400 text-xs font-bold tracking-wide uppercase">
                  WordPress · WooCommerce · Custom Themes · Speed & Security
                </span>
              </div>

              <h1 className="text-[38px] sm:text-5xl lg:text-[58px] font-black leading-[1.05] tracking-tight mb-5">
                <span className="text-white">WordPress Sites</span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500">
                  Fast, Secure & Built
                </span>
                <br />
                <span className="text-white">to Rank on Google</span>
              </h1>

              <p className="text-white/55 text-base sm:text-lg leading-relaxed mb-4 max-w-xl">
                Proshala builds clean, fast, and secure WordPress websites — from custom themes to
                full WooCommerce stores. No bloated page builders. No unnecessary plugins. Just a
                site that loads fast, ranks well, and converts visitors into customers.
              </p>
              <p className="text-white/35 text-sm leading-relaxed mb-8 max-w-xl">
                Fixed price, full code ownership, 30-day support —{" "}
                <strong className="text-amber-400">delivered in 14 days, guaranteed.</strong>
              </p>

              <div className="flex flex-col sm:flex-row gap-3 mb-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-gray-950 font-black px-7 py-4 rounded-2xl hover:-translate-y-0.5 transition-all shadow-2xl shadow-amber-500/25 text-sm group"
                >
                  Get Free WordPress Consultation
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
                {["90+ PageSpeed Score", "SEO-Optimised", "30-Day Support", "Full Code Ownership"].map((b) => (
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
                Our WordPress{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-400">
                  Services
                </span>
              </h2>
              <p className="text-white/40 text-sm max-w-xl mx-auto">
                From custom themes to WooCommerce stores — every WordPress project delivered fast, clean, and secure.
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
                Tools &{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-400">
                  Technologies We Use
                </span>
              </h2>
              <p className="text-white/40 text-sm max-w-md mx-auto">
                Industry-standard tools chosen for performance, security, and ease of management.
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
                Our WordPress{" "}
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
                  WordPress Done{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-400">
                    Right — Clean, Fast & Secure
                  </span>
                </h2>
                <p className="text-white/45 text-sm leading-relaxed mb-6">
                  Most WordPress agencies install a premium theme, add 30 plugins, and call it
                  done. Proshala takes a different approach — custom-built, lean code, security-first,
                  and optimised for both speed and search rankings from day one.
                </p>
                <div className="space-y-3">
                  {[
                    "Custom code — no bloated themes or unnecessary plugins",
                    "SEO baked in — Rank Math, schema, GSC setup included",
                    "Speed-first — we target 90+ PageSpeed before handover",
                    "Security hardened — WAF, 2FA, file permissions, SSL",
                    "You own everything — full code and admin handover",
                    "30-day post-launch support on every project",
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

        {/* ══ COMPARE ═══════════════════════════════════════════════════ */}
        <section className="py-16 lg:py-20 bg-[#0A0A0A]">
          <div className="max-w-3xl mx-auto px-5 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
                <span className="text-amber-500 font-semibold text-xs uppercase tracking-[0.16em]">Platform Guide</span>
                <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-white">
                WordPress vs{" "}
                <span className="text-amber-400">Next.js</span>
                {" "}— Which is Right for You?
              </h2>
              <p className="text-white/40 text-sm mt-3">
                Not sure which platform to choose? Here is our honest comparison.
              </p>
            </div>

            <div
              className="bg-white/[0.025] border border-white/[0.07] rounded-2xl overflow-hidden hover:border-amber-500/20 transition-colors"
              style={{ animation: "fadeSlideUp 0.6s ease 0.1s both" }}
            >
              <div className="grid grid-cols-3 bg-white/[0.03] border-b border-white/[0.07]">
                <div className="px-4 py-3 text-xs font-bold text-white/25 uppercase tracking-widest">Feature</div>
                <div className="px-4 py-3 text-xs font-bold text-amber-400 text-center uppercase tracking-widest">WordPress</div>
                <div className="px-4 py-3 text-xs font-bold text-white/40 text-center uppercase tracking-widest">Next.js</div>
              </div>
              {compareRows.map(([feature, wp, next], i) => (
                <div
                  key={i}
                  className={`grid grid-cols-3 border-b border-white/[0.05] last:border-0 hover:bg-white/[0.02] transition-colors ${
                    i % 2 === 0 ? "" : "bg-white/[0.01]"
                  }`}
                >
                  <div className="px-4 py-3 text-xs font-medium text-white/60">{feature}</div>
                  <div className="px-4 py-3 text-xs text-white/55 text-center">{wp}</div>
                  <div className="px-4 py-3 text-xs text-white/55 text-center">{next}</div>
                </div>
              ))}
            </div>

            <p className="text-center text-xs text-white/30 mt-4">
              Not sure?{" "}
              <Link href="/contact" className="text-amber-400 font-semibold hover:text-amber-300 transition-colors hover:underline">
                Talk to us — we will recommend the right one for free.
              </Link>
            </p>
          </div>
        </section>

        {/* ══ FAQs ══════════════════════════════════════════════════════ */}
        <section className="py-16 lg:py-20 bg-[#0D0D0D] border-y border-white/[0.06]">
          <div className="max-w-3xl mx-auto px-5 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
                <span className="text-amber-500 font-semibold text-xs uppercase tracking-[0.16em]">FAQs</span>
                <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-white">
                WordPress Development —{" "}
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
              Ready to Build Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-300">
                WordPress Site?
              </span>
            </h2>
            <p className="text-white/50 text-sm sm:text-base mb-8 max-w-md mx-auto leading-relaxed">
              Free consultation — tell us your requirements and we will send you a
              detailed scope, timeline, and fixed price within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center mb-5">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-gray-950 font-black px-8 py-4 rounded-2xl hover:-translate-y-0.5 transition-all shadow-2xl shadow-amber-500/20 text-sm group"
              >
                <Globe className="w-4 h-4" />
                Start Your WordPress Project
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