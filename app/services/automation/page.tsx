// app/services/automation/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import {
  Zap, Bot, RefreshCw, BarChart3, Mail, Workflow,
  CheckCircle, ArrowRight, Phone, ChevronRight,
  Settings, Clock, TrendingUp, Users, Target, Code2,
} from "lucide-react";

// ─── SEO Metadata ─────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Business Automation Services in Delhi, India | Proshala",
  description:
    "Automate repetitive tasks and scale faster with Proshala's business automation services. AI workflows, CRM automation, lead nurturing, reporting & more. Serving Delhi NCR & Pan India.",
  keywords:
    "business automation services India, marketing automation agency Delhi, workflow automation, CRM automation, AI automation, lead automation, digital marketing automation Delhi NCR, Proshala automation",
  alternates: {
    canonical: "https://proshala.com/services/automation",
  },
  openGraph: {
    title: "Business Automation Services | Proshala – Delhi, India",
    description:
      "Stop doing manually what a machine can do better. Proshala builds custom automation workflows for lead gen, reporting, CRM, and marketing — so your team can focus on growth.",
    url: "https://proshala.com/services/automation",
    siteName: "Proshala",
    type: "website",
  },
};

// ─── Constants ────────────────────────────────────────────────────────────────
const PHONE      = "+919999774046";
const PHONE_DISP = "+91 99997 74046";

// ─── Data ─────────────────────────────────────────────────────────────────────
const services = [
  {
    icon: Workflow,
    title: "Marketing Workflow Automation",
    desc: "Automate your entire lead journey — from the first ad click to follow-up email to CRM entry — without a single manual step.",
  },
  {
    icon: Mail,
    title: "Email & Lead Nurturing",
    desc: "Drip sequences, trigger-based emails, and WhatsApp automations that follow up with leads at the exact right time.",
  },
  {
    icon: Bot,
    title: "AI-Powered Chatbots",
    desc: "Deploy 24/7 website and WhatsApp chatbots that qualify leads, answer queries, and book calls — even while you sleep.",
  },
  {
    icon: RefreshCw,
    title: "CRM & Pipeline Automation",
    desc: "Automatically assign leads, update deal stages, trigger tasks, and notify your sales team the moment a hot lead arrives.",
  },
  {
    icon: BarChart3,
    title: "Reporting & Dashboard Automation",
    desc: "Auto-generated weekly performance reports, live Google Data Studio dashboards, and instant alerts for campaign anomalies.",
  },
  {
    icon: Code2,
    title: "API & Tool Integrations",
    desc: "Connect your ad platforms, CRM, spreadsheets, WhatsApp, Slack, and more using Zapier, Make (Integromat), or custom APIs.",
  },
];

const stats = [
  { value: "70%",  label: "Reduction in manual work" },
  { value: "3×",   label: "Faster lead response time" },
  { value: "40%",  label: "Lower cost per lead" },
  { value: "24/7", label: "Automated follow-ups" },
];

const process = [
  {
    step: "01",
    title: "Workflow Audit",
    desc: "We map every manual task your team does daily — lead follow-up, reporting, data entry — and identify what can be automated immediately.",
  },
  {
    step: "02",
    title: "Tool & Stack Selection",
    desc: "We recommend the right automation stack (Zapier, Make, n8n, HubSpot, or custom) based on your existing tools and budget.",
  },
  {
    step: "03",
    title: "Build & Test",
    desc: "We build each workflow end-to-end, test every trigger and action, and ensure zero data loss before going live.",
  },
  {
    step: "04",
    title: "Go Live & Monitor",
    desc: "Workflows go live with full documentation. We monitor for errors, optimise logic, and add new automations as your business scales.",
  },
];

const useCases = [
  {
    industry: "Real Estate",
    example: "Auto-assign leads from 99acres / MagicBricks to agents in CRM, trigger WhatsApp follow-up in 60 seconds, update deal stage on site visit.",
  },
  {
    industry: "Education / EdTech",
    example: "Capture enquiries from ads → verify phone via OTP → enrol in email drip → alert counsellor on Slack → push to Google Sheet.",
  },
  {
    industry: "E-commerce",
    example: "Abandoned cart WhatsApp + email sequence, order confirmation automation, review request 7 days post-delivery — all zero-touch.",
  },
  {
    industry: "Healthcare / Clinics",
    example: "Appointment booking bot, reminder SMS 24 hrs before, follow-up survey post-visit, doctor availability updates on Google Business Profile.",
  },
  {
    industry: "SaaS / Tech",
    example: "Trial sign-up → onboarding email sequence → in-app event triggers → churn-risk alert to sales → upgrade offer at day 12.",
  },
  {
    industry: "D2C Brands",
    example: "Influencer campaign tracking sheet auto-updated, ad performance alerts on Slack, weekly ROAS report sent every Monday at 9 AM.",
  },
];

const faqs = [
  {
    q: "What is business automation and how can it help my company?",
    a: "Business automation uses software to perform repetitive tasks automatically — like sending follow-up emails, updating CRM records, generating reports, or qualifying leads. It reduces manual effort, speeds up response times, and lets your team focus on high-value work. Most businesses that implement automation see 40–70% reduction in manual admin work within the first month.",
  },
  {
    q: "Which automation tools do you work with?",
    a: "We work with the full automation stack — Zapier, Make (formerly Integromat), n8n, Pabbly Connect, HubSpot, GoHighLevel, ActiveCampaign, Manychat (WhatsApp/Facebook), and custom REST API integrations. We recommend the right tool based on your existing software, budget, and complexity of workflows required.",
  },
  {
    q: "Do I need a technical team to maintain automation workflows?",
    a: "No. We build automation workflows to be self-maintaining and document everything with clear SOPs. We also provide a 30-day post-launch support period and can set up error-alert notifications so you know immediately if something needs attention — no technical knowledge required on your side.",
  },
  {
    q: "How long does it take to set up automation for my business?",
    a: "Simple workflows (lead capture → CRM → WhatsApp) take 3–5 business days. Complex multi-tool integrations with conditional logic typically take 2–4 weeks. We always begin with a high-impact, quick-win automation so you see results fast while the full system is being built.",
  },
  {
    q: "What is the minimum budget for automation services?",
    a: "Our automation projects start at ₹15,000 for simple single-workflow setups. Full marketing automation systems with CRM integration, chatbots, and reporting dashboards typically range from ₹40,000 to ₹1,50,000 depending on complexity. Monthly retainers for ongoing automation management start at ₹12,000/month.",
  },
  {
    q: "Can you automate WhatsApp marketing for my business?",
    a: "Yes — WhatsApp automation is one of the highest-ROI services we offer. We set up official WhatsApp Business API (via approved providers), build chatbot flows for lead qualification, automate order/appointment confirmations, run broadcast campaigns, and integrate everything with your CRM — all compliant with Meta's policies.",
  },
];

const tools = [
  "Zapier", "Make (Integromat)", "n8n", "HubSpot", "GoHighLevel",
  "Pabbly", "ActiveCampaign", "Manychat", "WhatsApp API",
  "Google Sheets API", "Slack", "Airtable",
];

// ─── JSON-LD Structured Data ──────────────────────────────────────────────────
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Business Automation Services",
  alternateName: "Marketing Automation Services Delhi",
  description:
    "Proshala provides business automation services including marketing workflow automation, CRM automation, AI chatbots, lead nurturing, and reporting dashboards for businesses in Delhi NCR and Pan India.",
  provider: {
    "@type": "Organization",
    name: "Proshala",
    url: "https://proshala.com",
    logo: "https://proshala.com/logo.png",
    telephone: PHONE,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Delhi",
      addressRegion: "Delhi",
      addressCountry: "IN",
    },
  },
  areaServed: [
    { "@type": "City", name: "Delhi" },
    { "@type": "State", name: "Delhi NCR" },
    { "@type": "Country", name: "India" },
  ],
  serviceType: "Business Automation",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Automation Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Marketing Workflow Automation" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "CRM Automation" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "AI Chatbot Setup" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "WhatsApp Automation" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Reporting Dashboard Automation" } },
    ],
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

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function AutomationPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* ── HERO ──────────────────────────────────────────────────────── */}
      <section className="relative bg-[#0A0A0A] pt-28 pb-0 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute -top-24 right-0 w-[500px] h-[500px] rounded-full blur-[120px]"
            style={{ background: "radial-gradient(circle, rgba(245,158,11,0.08) 0%, transparent 70%)" }}
          />
          <div
            className="absolute bottom-0 -left-10 w-[350px] h-[350px] rounded-full blur-[100px]"
            style={{ background: "radial-gradient(circle, rgba(251,146,60,0.05) 0%, transparent 70%)" }}
          />
          <div
            className="absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
              backgroundSize: "64px 64px",
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb — helps Google understand page hierarchy */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-white/30 mb-8 flex-wrap">
            <Link href="/" className="hover:text-amber-400 transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/services" className="hover:text-amber-400 transition-colors">Services</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-white/55">Automation</span>
          </nav>

          <div className="max-w-3xl pb-16 lg:pb-20" style={{ animation: "heroFadeIn 0.7s ease both" }}>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 rounded-full px-4 py-1.5 mb-6">
              <Zap className="w-3.5 h-3.5 text-amber-400" />
              <span className="text-amber-400 text-xs font-bold tracking-wide uppercase">
                Business Automation · AI Workflows · Delhi, India
              </span>
            </div>

            {/* H1 — primary keyword in first 3 words */}
            <h1 className="text-[38px] sm:text-5xl lg:text-[58px] font-black leading-[1.04] tracking-tight mb-5">
              <span className="text-white">Automation Services</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500">
                That Work While You Don&apos;t
              </span>
            </h1>

            {/* Intro paragraph — primary + secondary keywords natural density */}
            <p className="text-white/50 text-base sm:text-lg leading-relaxed mb-4 max-w-xl">
              Proshala&apos;s <strong className="text-white font-bold">business automation services</strong> eliminate
              repetitive manual work from your marketing, sales, and operations. We build
              custom AI workflows, CRM automations, WhatsApp bots, and reporting systems
              for businesses across{" "}
              <strong className="text-white font-bold">Delhi NCR and Pan India</strong> — so
              your team focuses on growth, not admin.
            </p>
            <p className="text-white/40 text-sm leading-relaxed mb-8 max-w-xl">
              From a single Zapier workflow to a fully integrated marketing automation stack —
              we design, build, and maintain automation systems that scale with your business.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-gray-950 font-black px-7 py-4 rounded-2xl hover:-translate-y-0.5 transition-all shadow-2xl shadow-amber-500/25 text-sm group"
              >
                Get Free Automation Audit
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href={`tel:${PHONE}`}
                className="inline-flex items-center justify-center gap-2 border border-white/10 text-white/80 font-semibold px-7 py-4 rounded-2xl hover:bg-white/5 hover:border-white/20 transition-all text-sm"
              >
                <Phone className="w-4 h-4 text-amber-400 flex-shrink-0" /> {PHONE_DISP}
              </a>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-5">
              {[
                "Free Workflow Audit",
                "No Lock-in Contract",
                "30-Day Support Included",
                "Delhi NCR & Pan India",
              ].map((b) => (
                <div key={b} className="flex items-center gap-1.5 text-xs text-white/40 font-medium">
                  <CheckCircle className="w-3.5 h-3.5 text-amber-500 flex-shrink-0" /> {b}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Wave divider */}
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

      {/* ── WHAT IS BUSINESS AUTOMATION — for SEO depth ───────────────── */}
      <section className="py-16 lg:py-20 bg-[#0A0A0A]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
              <span className="text-amber-500 font-semibold text-xs uppercase tracking-[0.16em]">What is Business Automation?</span>
              <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-5">
              Stop Doing Manually What a{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-400">
                Machine Can Do Better
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 text-white/55 text-sm leading-relaxed">
            <div className="space-y-4">
              <p>
                <strong className="text-white">Business automation</strong> is the use of software and AI to
                perform repetitive, rule-based tasks without human intervention. Every time a lead fills
                a form, a sale is made, or a campaign runs — dozens of micro-tasks happen behind the scenes.
                Automation handles all of them instantly and error-free.
              </p>
              <p>
                Indian businesses lose an average of <strong className="text-amber-400">3–5 hours per employee per day</strong> to
                tasks that could be fully automated — data entry, follow-up emails, CRM updates,
                report generation, and lead assignment. Our automation agency in Delhi helps you
                reclaim that time and redirect it toward actual revenue-generating work.
              </p>
            </div>
            <div className="space-y-4">
              <p>
                <strong className="text-white">Marketing automation</strong> specifically focuses on
                automating your customer acquisition and retention processes — from the first ad impression
                to post-sale follow-ups. When combined with your CRM and ad platforms, a well-built
                automation system becomes your most reliable salesperson: working 24/7, never forgetting
                to follow up, and always responding in under 60 seconds.
              </p>
              <p>
                Proshala has built automation systems for real estate agencies, EdTech platforms,
                e-commerce brands, D2C startups, and B2B SaaS companies across Delhi NCR and India —
                each tailored to the specific tools, team size, and sales process of the business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ──────────────────────────────────────────────────── */}
      <section className="py-16 lg:py-24 bg-[#0D0D0D] border-y border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
              <span className="text-amber-500 font-semibold text-xs uppercase tracking-[0.16em]">What is Included</span>
              <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-3">
              Our Automation{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-400">
                Services
              </span>
            </h2>
            <p className="text-white/40 text-sm max-w-lg mx-auto">
              End-to-end automation for every part of your marketing, sales, and operations funnel.
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

      {/* ── USE CASES — boosts topical authority ──────────────────────── */}
      <section className="py-16 lg:py-24 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
              <span className="text-amber-500 font-semibold text-xs uppercase tracking-[0.16em]">Industry Use Cases</span>
              <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-3">
              Automation for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-400">
                Every Industry
              </span>
            </h2>
            <p className="text-white/40 text-sm max-w-lg mx-auto">
              Real-world automation workflows we have built for Indian businesses — from startups to enterprises.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {useCases.map(({ industry, example }, i) => (
              <div
                key={i}
                className="bg-white/[0.025] border border-white/[0.07] rounded-2xl p-5 hover:border-amber-500/30 transition-all group"
                style={{ animation: `fadeSlideUp 0.5s ease ${i * 0.07}s both` }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
                  <span className="text-amber-400 font-black text-xs uppercase tracking-wide">
                    {industry}
                  </span>
                </div>
                <p className="text-white/45 text-xs leading-relaxed">{example}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TOOLS ─────────────────────────────────────────────────────── */}
      <section className="py-10 bg-[#0D0D0D] border-y border-white/[0.06]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs text-white/30 font-bold uppercase tracking-[0.2em] mb-6">
            Tools & Platforms We Work With
          </p>
          <div className="flex flex-wrap justify-center gap-2.5">
            {tools.map((tool) => (
              <span
                key={tool}
                className="bg-white/[0.04] border border-white/[0.08] text-white/50 text-xs font-semibold px-4 py-2 rounded-full hover:border-amber-500/30 hover:text-amber-400 transition-all"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ───────────────────────────────────────────────────── */}
      <section className="py-16 lg:py-24 bg-[#0A0A0A]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
              <span className="text-amber-500 font-semibold text-xs uppercase tracking-[0.16em]">How We Work</span>
              <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white">
              Audit to Live —{" "}
              <span className="text-amber-400">4 Steps</span>
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
                  <p className="text-white/40 text-xs sm:text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY PROSHALA — E-E-A-T signals ────────────────────────────── */}
      <section className="py-16 bg-[#0D0D0D] border-y border-white/[0.06]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
              <span className="text-amber-500 font-semibold text-xs uppercase tracking-[0.16em]">Why Proshala</span>
              <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-3">
              Why Choose Proshala for{" "}
              <span className="text-amber-400">Automation?</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                icon: Target,
                title: "Marketing-First Thinking",
                desc: "We are a digital marketing agency first. Every automation we build is designed to increase leads and revenue — not just save time.",
              },
              {
                icon: Clock,
                title: "Fast Turnaround",
                desc: "Simple workflows live in 3–5 days. We prioritise quick wins so you see ROI before the full system is complete.",
              },
              {
                icon: Settings,
                title: "Tool-Agnostic",
                desc: "We work with whatever stack you already have. No forced migrations, no vendor lock-in — just automations that fit your workflow.",
              },
              {
                icon: Users,
                title: "Full Documentation",
                desc: "Every workflow is documented with step-by-step SOPs and Loom walkthroughs so your team can manage it independently.",
              },
              {
                icon: TrendingUp,
                title: "Ongoing Optimisation",
                desc: "Automation needs maintenance as your business evolves. Our retainer clients get monthly workflow reviews and improvements.",
              },
              {
                icon: Bot,
                title: "AI-Integrated Workflows",
                desc: "We integrate GPT, Gemini, and Claude into your automations — for intelligent lead scoring, smart replies, and content generation.",
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

      {/* ── FAQs — FAQ schema ─────────────────────────────────────────── */}
      <section className="py-16 bg-[#0A0A0A]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
              <span className="text-amber-500 font-semibold text-xs uppercase tracking-[0.16em]">FAQs</span>
              <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white">
              Automation Services — Common Questions
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
            Ready to Automate{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-300">
              Your Business?
            </span>
          </h2>
          <p className="text-white/50 text-sm sm:text-base mb-8 max-w-md mx-auto leading-relaxed">
            Book a free automation audit — we will map your current workflows, identify
            the top 3 highest-impact automations, and give you a clear implementation plan
            at no cost.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-gray-950 font-black px-8 py-4 rounded-2xl hover:-translate-y-0.5 transition-all shadow-2xl shadow-amber-500/20 text-sm group"
            >
              <Zap className="w-4 h-4" />
              Get Free Automation Audit
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href={`tel:${PHONE}`}
              className="inline-flex items-center justify-center gap-2 border border-white/10 text-white/80 font-semibold px-8 py-4 rounded-2xl hover:bg-white/5 hover:border-white/20 transition-all text-sm"
            >
              <Phone className="w-4 h-4 text-amber-400 flex-shrink-0" /> {PHONE_DISP}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}