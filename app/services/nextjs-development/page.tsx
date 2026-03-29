// app/services/nextjs-development/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import {
  Zap, Code2, Globe, Shield, TrendingUp, CheckCircle,
  ArrowRight, Phone, ChevronRight,
  BarChart3, Layers, RefreshCw, Database, Smartphone, Lock,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Next.js Development Agency India | React Web Apps | Proshala",
  description:
    "Custom Next.js web applications — blazing fast, SEO-optimised, and built to scale. Full-stack Next.js development for SaaS, e-commerce, and business websites. Delhi NCR & Pan India.",
  keywords: [
    "nextjs development India",
    "next.js developer Delhi",
    "react web app agency India",
    "nextjs agency Delhi NCR",
    "full stack nextjs development",
    "nextjs SEO website India",
    "SaaS development Next.js India",
    "Next.js App Router developer",
  ],
  alternates: { canonical: "https://proshala.com/services/nextjs-development" },
  openGraph: {
    title: "Next.js Development Agency India | Proshala",
    description:
      "Custom Next.js apps — SaaS platforms, marketing sites, and PWAs. Built with App Router, TypeScript, and Tailwind CSS.",
    url: "https://proshala.com/services/nextjs-development",
    siteName: "Proshala",
    type: "website",
  },
};

const PHONE      = "+919999774046";
const PHONE_DISP = "+91 99997 74046";

// ─── Data ─────────────────────────────────────────────────────────────────────
const services = [
  {
    icon: Globe,
    title: "Business Websites",
    desc: "Fast, SEO-ready marketing sites with perfect Core Web Vitals — built to rank on Google and convert visitors from day one.",
  },
  {
    icon: Layers,
    title: "SaaS Platforms",
    desc: "Full-stack Next.js SaaS apps with auth, billing, dashboards, and multi-tenancy — production-ready architecture that scales.",
  },
  {
    icon: Database,
    title: "Headless CMS",
    desc: "Next.js frontend connected to Sanity, Strapi, or Contentful — full editorial control without ever touching the codebase.",
  },
  {
    icon: RefreshCw,
    title: "App Migration",
    desc: "Migrate slow WordPress or legacy sites to Next.js for 10× speed improvement and dramatically better Core Web Vitals scores.",
  },
  {
    icon: Smartphone,
    title: "PWA Development",
    desc: "Progressive Web Apps that work offline, install like native apps, and load instantly on any device or connection speed.",
  },
  {
    icon: Lock,
    title: "API & Integrations",
    desc: "REST and GraphQL API routes, third-party integrations — Razorpay, Stripe, CRMs, WhatsApp, and custom backends.",
  },
];

const stats = [
  { value: "100",       label: "Lighthouse score target" },
  { value: "<1s",       label: "Target page load time" },
  { value: "3×",        label: "Faster than avg WordPress" },
  { value: "App Router", label: "Next.js 14 / 15 ready" },
];

const techStack = [
  { label: "Framework",  value: "Next.js 14 / 15 (App Router)" },
  { label: "Styling",    value: "Tailwind CSS + shadcn/ui" },
  { label: "Database",   value: "PostgreSQL / MongoDB / Supabase" },
  { label: "Auth",       value: "NextAuth.js / Clerk" },
  { label: "Deployment", value: "Vercel / Railway / Render" },
  { label: "CMS",        value: "Sanity / Strapi / Contentful" },
];

const process = [
  {
    step: "01",
    title: "Scoping & Architecture",
    desc: "We map your requirements, define the tech stack, and plan the component and data architecture before writing a single line of code.",
  },
  {
    step: "02",
    title: "Design & Prototype",
    desc: "Figma wireframes or Tailwind prototypes reviewed and approved by you before full development begins — no surprises mid-build.",
  },
  {
    step: "03",
    title: "Development & Review",
    desc: "Iterative sprints with staging deployments — you see real progress every week and give feedback continuously throughout.",
  },
  {
    step: "04",
    title: "Launch & Handover",
    desc: "Production deployment on Vercel/Railway, full documentation, and knowledge transfer so your team can own the codebase confidently.",
  },
];

const whyNextjs = [
  {
    icon: Zap,
    title: "3–10× Faster than WordPress",
    desc: "Server components, static generation, and edge caching combine for sub-second load times that improve both UX and SEO rankings.",
  },
  {
    icon: TrendingUp,
    title: "Perfect Core Web Vitals",
    desc: "Built-in image optimisation, font loading, and code splitting make hitting 95+ Lighthouse scores the default, not the exception.",
  },
  {
    icon: Shield,
    title: "Production-Grade Security",
    desc: "Server-side rendering keeps secrets server-side. No exposed API keys, no client-side vulnerabilities from legacy frameworks.",
  },
  {
    icon: Code2,
    title: "One Codebase, Full Stack",
    desc: "Frontend, backend API routes, and middleware — all in one Next.js project. Fewer moving parts, faster development, simpler deployments.",
  },
];

const faqs = [
  {
    q: "Why Next.js over WordPress or plain React?",
    a: "Next.js gives you the best of both worlds — React's component-based UI with server-side rendering and static generation for SEO. It is 3–10× faster than WordPress, consistently scores 95+ on Core Web Vitals, and scales effortlessly from 100 to 10 million users without infrastructure headaches.",
  },
  {
    q: "Can you build a full SaaS product with Next.js?",
    a: "Yes — we have built production SaaS platforms with Next.js including auth (NextAuth / Clerk), subscription billing (Stripe / Razorpay), role-based dashboards, and full API layers. Next.js App Router handles both frontend and backend in one codebase, reducing complexity and deployment overhead significantly.",
  },
  {
    q: "How long does a Next.js project typically take?",
    a: "A marketing website takes 2–3 weeks. A mid-complexity web app with auth and dashboards takes 6–10 weeks. A full SaaS platform with payments and multi-tenancy takes 12–20 weeks. We provide an accurate estimate after a scoping call — never a vague range.",
  },
  {
    q: "Do you provide source code and post-launch support?",
    a: "Yes — you own 100% of the code. We push to your GitHub repository throughout development with clear commit history. Post-launch support packages (bug fixes, feature additions, hosting management) are available as monthly retainers.",
  },
  {
    q: "Can you migrate my existing WordPress site to Next.js?",
    a: "Absolutely — WordPress-to-Next.js migration is one of our most common projects. We preserve all your content (posts, pages, media), redirect all URLs correctly to protect SEO rankings, and typically deliver a 5–10× improvement in page load speed and Core Web Vitals scores.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Next.js Development",
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
    "Custom Next.js web application development — business websites, SaaS platforms, PWAs, and headless CMS integrations. Built with App Router, TypeScript, and Tailwind CSS.",
  areaServed: [
    { "@type": "Country", name: "India" },
    { "@type": "City",    name: "Delhi" },
    { "@type": "City",    name: "Sonipat" },
    { "@type": "Country", name: "United States" },
    { "@type": "Country", name: "United Kingdom" },
  ],
  serviceType: "Web Development",
  url: "https://proshala.com/services/nextjs-development",
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
    { "@type": "ListItem", position: 1, name: "Home",                item: "https://proshala.com" },
    { "@type": "ListItem", position: 2, name: "Services",            item: "https://proshala.com/services" },
    { "@type": "ListItem", position: 3, name: "Next.js Development", item: "https://proshala.com/services/nextjs-development" },
  ],
};

export default function NextjsDevelopmentPage() {
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
            <span className="text-white/55">Next.js Development</span>
          </nav>

          <div className="max-w-3xl pb-16 lg:pb-20" style={{ animation: "heroFadeIn 0.7s ease both" }}>
            <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 rounded-full px-4 py-1.5 mb-6">
              <Code2 className="w-3.5 h-3.5 text-amber-400" />
              <span className="text-amber-400 text-xs font-bold tracking-wide uppercase">
                Next.js 14 / 15 · React · Full-Stack · TypeScript
              </span>
            </div>

            <h1 className="text-[36px] sm:text-5xl lg:text-[56px] font-black leading-[1.05] tracking-tight mb-5">
              <span className="text-white">Blazing Fast </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500">
                Next.js Apps
              </span>
              <br />
              <span className="text-white">Built to Scale</span>
            </h1>

            <p className="text-white/55 text-base sm:text-lg leading-relaxed mb-4 max-w-xl">
              From marketing websites to full SaaS platforms — Proshala builds with
              Next.js App Router, Tailwind CSS, and modern tooling for{" "}
              <strong className="text-white">
                perfect performance, clean code, and an exceptional developer experience.
              </strong>
            </p>
            <p className="text-white/35 text-sm leading-relaxed mb-8 max-w-xl">
              Every project ships production-ready — TypeScript, CI/CD, 100 Lighthouse
              score, and full source ownership. No vendor lock-in, ever.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-gray-950 font-black px-7 py-4 rounded-2xl hover:-translate-y-0.5 transition-all shadow-2xl shadow-amber-500/25 text-sm group"
              >
                Start Your Project
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
                "App Router",
                "TypeScript",
                "100 Lighthouse Score",
                "You Own the Code",
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
                <div className="text-xl sm:text-2xl font-black text-white mb-1 group-hover:text-amber-400 transition-colors">
                  {value}
                </div>
                <div className="text-xs text-white/35 font-medium">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT WE BUILD ─────────────────────────────────────────────── */}
      <section className="py-16 lg:py-20 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
              <span className="text-amber-500 font-semibold text-xs uppercase tracking-[0.16em]">What We Build</span>
              <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-3">
              Every Project Ships{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-400">
                Production-Ready
              </span>
            </h2>
            <p className="text-white/40 text-sm max-w-md mx-auto">
              TypeScript, Tailwind, clean architecture — and code you can actually maintain.
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

      {/* ── WHY NEXT.JS ───────────────────────────────────────────────── */}
      <section className="py-14 bg-[#0D0D0D] border-y border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
              <span className="text-amber-500 font-semibold text-xs uppercase tracking-[0.16em]">Why Next.js</span>
              <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-3">
              Why We Build Everything{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-400">
                in Next.js
              </span>
            </h2>
            <p className="text-white/40 text-sm max-w-md mx-auto">
              Not just a trend — Next.js is genuinely the best framework for performance, SEO, and scalability.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {whyNextjs.map(({ icon: Icon, title, desc }, i) => (
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

      {/* ── TECH STACK ────────────────────────────────────────────────── */}
      <section className="py-14 bg-[#0A0A0A]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
              <span className="text-amber-500 font-semibold text-xs uppercase tracking-[0.16em]">Tech Stack</span>
              <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              Our Default{" "}
              <span className="text-amber-400">Stack</span>
            </h2>
          </div>

          <div
            className="bg-white/[0.025] border border-white/[0.07] rounded-2xl overflow-hidden hover:border-amber-500/20 transition-colors"
            style={{ animation: "fadeSlideUp 0.6s ease 0.1s both" }}
          >
            {techStack.map(({ label, value }, i) => (
              <div
                key={i}
                className={`flex items-center justify-between px-5 py-4 hover:bg-white/[0.03] transition-colors group ${
                  i < techStack.length - 1 ? "border-b border-white/[0.05]" : ""
                }`}
              >
                <span className="text-xs font-bold text-white/25 uppercase tracking-widest w-28 flex-shrink-0">
                  {label}
                </span>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-amber-500 rounded-full flex-shrink-0 group-hover:scale-125 transition-transform" />
                  <span className="text-sm font-semibold text-white/80 group-hover:text-amber-400 transition-colors">
                    {value}
                  </span>
                </div>
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
              From Brief to{" "}
              <span className="text-amber-400">Production</span>
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
              Next.js —{" "}
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
            Let us Build Something{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-300">
              Blazing Fast
            </span>
          </h2>
          <p className="text-white/50 text-sm sm:text-base mb-8 max-w-md mx-auto leading-relaxed">
            Share your project idea — we will scope it, estimate a timeline, and
            recommend the right architecture before you commit to anything.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-5">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-gray-950 font-black px-8 py-4 rounded-2xl hover:-translate-y-0.5 transition-all shadow-2xl shadow-amber-500/20 text-sm group"
            >
              <Code2 className="w-4 h-4" />
              Discuss My Project
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
            Free scoping call · No commitment · Estimate within 24 hours
          </p>
        </div>
      </section>
    </>
  );
}