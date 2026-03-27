// app/services/business-automation/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import {
  Zap, Bot, RefreshCw, BarChart3, Mail, Workflow,
  CheckCircle, ArrowRight, Phone, ChevronRight,
  Settings, Clock, TrendingUp, Users, Target,
  DollarSign, ShieldCheck, Layers, GitBranch, Cpu,
} from "lucide-react";

// ─── SEO Metadata ─────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Business Automation Services in Delhi India | Proshala",
  description:
    "Proshala offers expert business automation services in Delhi, India. Automate sales, marketing, CRM, reporting & operations. Save 20+ hours/week. Free automation audit.",
  keywords:
    "business automation services, business automation Delhi, business process automation India, small business automation, marketing automation India, CRM automation Delhi, workflow automation agency, business automation consultant India, Proshala",
  alternates: {
    canonical: "https://proshala.com/services/business-automation",
  },
  openGraph: {
    title: "Business Automation Services in Delhi, India | Proshala",
    description:
      "Automate your sales pipeline, marketing campaigns, CRM updates, reports, and operations. Proshala builds custom business automation systems for Indian companies.",
    url: "https://proshala.com/services/business-automation",
    siteName: "Proshala",
    type: "website",
  },
};

// ─── Constants ────────────────────────────────────────────────────────────────
const PHONE      = "+919999774046";
const PHONE_DISP = "+91 99997 74046";

// ─── Data ─────────────────────────────────────────────────────────────────────
const automationTypes = [
  {
    icon: Workflow,
    title: "Sales Process Automation",
    desc: "Auto-assign leads, trigger follow-up sequences, update deal stages in CRM, and notify sales reps the moment a high-intent prospect acts.",
    tags: ["CRM", "Lead Assignment", "Follow-ups"],
  },
  {
    icon: Mail,
    title: "Marketing Automation",
    desc: "Drip campaigns, WhatsApp sequences, abandoned cart flows, and retargeting triggers — your entire marketing funnel running on autopilot.",
    tags: ["Email", "WhatsApp", "Retargeting"],
  },
  {
    icon: Bot,
    title: "AI Chatbots & Virtual Assistants",
    desc: "Deploy intelligent chatbots on your website, WhatsApp, and Instagram DMs that qualify leads, answer FAQs, and book appointments 24/7.",
    tags: ["WhatsApp Bot", "Lead Qualification", "Booking"],
  },
  {
    icon: BarChart3,
    title: "Reporting & Analytics Automation",
    desc: "Auto-generate weekly performance reports, build live dashboards, and receive instant Slack/email alerts when KPIs go off track.",
    tags: ["Dashboard", "Weekly Reports", "Alerts"],
  },
  {
    icon: RefreshCw,
    title: "Operations & HR Automation",
    desc: "Automate onboarding workflows, invoice generation, attendance tracking, task assignments, and internal approval processes.",
    tags: ["Onboarding", "Invoicing", "Approvals"],
  },
  {
    icon: GitBranch,
    title: "E-commerce Automation",
    desc: "Order confirmations, inventory alerts, review requests, loyalty rewards, and dynamic pricing rules — all triggered automatically.",
    tags: ["Orders", "Inventory", "Reviews"],
  },
  {
    icon: Layers,
    title: "Data & Integration Automation",
    desc: "Sync data between your CRM, ad platforms, spreadsheets, accounting software, and internal tools using Zapier, Make, or custom APIs.",
    tags: ["API", "Sync", "Zapier / Make"],
  },
  {
    icon: Cpu,
    title: "AI-Powered Decision Automation",
    desc: "Use GPT-4 and Gemini to auto-score leads, draft personalised replies, categorise support tickets, and generate content at scale.",
    tags: ["GPT-4", "Lead Scoring", "Content AI"],
  },
  {
    icon: DollarSign,
    title: "Finance & Billing Automation",
    desc: "Auto-generate GST invoices, send payment reminders, reconcile transactions, and push data to Tally or Zoho Books without manual entry.",
    tags: ["GST Invoices", "Reminders", "Tally"],
  },
];

const stats = [
  { value: "20+",  label: "Hours saved per week" },
  { value: "3×",   label: "Faster lead response" },
  { value: "60s",  label: "Auto follow-up speed" },
  { value: "40%",  label: "Lower operational cost" },
];

const process = [
  {
    step: "01",
    title: "Free Workflow Audit",
    desc: "We spend 60 minutes mapping every manual task your team performs — lead handling, reporting, data entry, follow-ups — and score each by automation potential and ROI impact.",
  },
  {
    step: "02",
    title: "Automation Roadmap",
    desc: "We deliver a prioritised automation roadmap: quick wins (live in 3–5 days) and strategic builds (2–4 weeks). You see exactly what gets built, in what order, and at what cost.",
  },
  {
    step: "03",
    title: "Build & Integrate",
    desc: "We build each workflow inside your existing stack — no forced tool migrations. Every trigger, condition, and action is tested with real data before go-live.",
  },
  {
    step: "04",
    title: "Train & Hand Over",
    desc: "We document every workflow with SOPs and Loom walkthroughs, train your team, and set up error-alert notifications so you are always in control.",
  },
  {
    step: "05",
    title: "Maintain & Scale",
    desc: "On retainer, we monitor workflows monthly, fix breakages within 24 hours, and continuously add new automations as your business grows.",
  },
];

const painPoints = [
  {
    before: "Sales team manually copying leads from Facebook Ads into spreadsheets",
    after: "Leads auto-pushed to CRM with source tag, rep assigned, and WhatsApp sent — in 30 seconds",
  },
  {
    before: "Marketing manager spending 3 hours every Monday building campaign reports",
    after: "Auto-generated report delivered to WhatsApp at 9 AM every Monday — zero manual work",
  },
  {
    before: "Follow-up emails sent whenever someone remembers — losing deals to faster competitors",
    after: "Automated follow-up sequence: WhatsApp at 5 min, email at 1 hr, call reminder at 24 hr",
  },
  {
    before: "Finance team manually creating and sending GST invoices for every order",
    after: "Invoice auto-generated on payment confirmation and emailed to customer in 10 seconds",
  },
];

const tools = [
  "Zapier", "Make (Integromat)", "n8n", "Pabbly Connect",
  "HubSpot", "GoHighLevel", "Zoho CRM", "ActiveCampaign",
  "WhatsApp Business API", "Manychat", "Google Sheets API",
  "Slack", "Airtable", "Notion API", "OpenAI / GPT-4",
  "Tally / Zoho Books", "Shopify", "WooCommerce",
];

const industries = [
  { name: "Real Estate",         icon: "🏠" },
  { name: "Education / EdTech",  icon: "🎓" },
  { name: "E-commerce / D2C",    icon: "🛒" },
  { name: "Healthcare",          icon: "🏥" },
  { name: "SaaS / Tech",         icon: "💻" },
  { name: "Finance / NBFC",      icon: "💰" },
  { name: "Hospitality",         icon: "🏨" },
  { name: "Manufacturing",       icon: "🏭" },
  { name: "Legal / Consulting",  icon: "⚖️" },
];

const faqs = [
  {
    q: "What is business automation and how does it work?",
    a: "Business automation is the use of software to perform rule-based, repetitive tasks automatically — without human intervention. When a trigger occurs (e.g. a form submission, a payment, a new CRM record), the automation runs a predefined sequence of actions (send email, update spreadsheet, notify on Slack, assign to sales rep). Tools like Zapier, Make, and n8n connect your existing apps and define these trigger-action rules without needing custom code. For complex logic, we write custom scripts or use AI models like GPT-4.",
  },
  {
    q: "How much do business automation services cost in India?",
    a: "Automation project costs in India range from ₹12,000 for a single-workflow setup (e.g. lead capture → CRM → WhatsApp) to ₹1,50,000+ for a full end-to-end marketing and operations automation system. At Proshala, projects start at ₹15,000. Monthly automation management retainers start at ₹12,000/month. We always begin with a free audit so you know exactly what you are paying for before committing.",
  },
  {
    q: "Which businesses benefit most from automation?",
    a: "Any business receiving more than 50 leads/month, sending more than 100 emails/week, or having a team spending more than 2 hours/day on repetitive admin work is an ideal automation candidate. We have built automation systems for real estate agencies, EdTech platforms, D2C brands, SaaS companies, clinics, and B2B consultancies — all of whom saw measurable ROI within the first 30 days.",
  },
  {
    q: "Do I need to change my existing software or tools?",
    a: "No — we are tool-agnostic and work with whatever you already use. Whether you are on Google Workspace, Zoho, HubSpot, Shopify, WordPress, or a custom-built system, we build automations that integrate with your existing stack. No forced migrations, no new subscriptions unless absolutely necessary.",
  },
  {
    q: "How long does it take to set up business automation?",
    a: "Simple, single-workflow automations (lead → CRM → WhatsApp alert) go live in 3–5 business days. Medium complexity projects (multi-step marketing automation with conditional logic) take 2–3 weeks. Full business automation systems covering sales, marketing, and operations typically take 4–8 weeks. We always prioritise a high-ROI quick win in the first week so you see value immediately.",
  },
  {
    q: "Can you automate WhatsApp for my business?",
    a: "Yes. WhatsApp automation is one of the highest-ROI services we offer. We set up the official WhatsApp Business API through Meta-approved providers, build chatbot flows for lead qualification and FAQ handling, automate order/appointment confirmations, run compliant broadcast campaigns, and integrate the entire system with your CRM — all within Meta's policies.",
  },
  {
    q: "What happens if an automation breaks or stops working?",
    a: "All automation systems require maintenance — apps update their APIs, conditions change, new edge cases emerge. For retainer clients, we monitor all workflows with error alerts and fix any breakages within 24 hours. For project clients, we provide 30 days of free post-launch support. We also set up email/Slack notifications on every workflow so you are alerted immediately if something fails.",
  },
  {
    q: "Is my business data safe when using automation tools?",
    a: "Yes. We use only established, enterprise-grade platforms (Zapier, Make, HubSpot, official Meta API) that are SOC 2 and GDPR compliant. We never store your customer data on our servers. For sensitive data workflows, we recommend self-hosted tools like n8n running on your own cloud instance (AWS/GCP/Azure) for complete data sovereignty.",
  },
];

// ─── JSON-LD Structured Data ──────────────────────────────────────────────────
const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Business Automation Services",
  alternateName: ["Marketing Automation", "Workflow Automation", "CRM Automation"],
  description:
    "Proshala provides end-to-end business automation services including marketing automation, CRM automation, AI chatbots, reporting automation, and operations workflow automation for businesses across Delhi NCR and India.",
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
    { "@type": "City",    name: "Delhi" },
    { "@type": "City",    name: "Noida" },
    { "@type": "City",    name: "Gurgaon" },
    { "@type": "Country", name: "India" },
  ],
  serviceType: "Business Process Automation",
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: "INR",
    lowPrice: "15000",
    offerCount: "9",
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
    { "@type": "ListItem", position: 1, name: "Home",     item: "https://proshala.com" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://proshala.com/services" },
    { "@type": "ListItem", position: 3, name: "Business Automation", item: "https://proshala.com/services/business-automation" },
  ],
};

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function BusinessAutomationPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* ── HERO ──────────────────────────────────────────────────────── */}
      <section className="relative bg-[#0A0A0A] pt-28 pb-0 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-24 right-0 w-[550px] h-[550px] rounded-full blur-[130px]"
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
            <Link href="/services" className="hover:text-amber-400 transition-colors">Services</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-white/55">Business Automation</span>
          </nav>

          <div className="max-w-3xl pb-16 lg:pb-20" style={{ animation: "heroFadeIn 0.7s ease both" }}>
            <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 rounded-full px-4 py-1.5 mb-6">
              <Zap className="w-3.5 h-3.5 text-amber-400" />
              <span className="text-amber-400 text-xs font-bold tracking-wide uppercase">
                Business Automation · Delhi NCR · Pan India
              </span>
            </div>

            {/* H1 */}
            <h1 className="text-[38px] sm:text-5xl lg:text-[58px] font-black leading-[1.04] tracking-tight mb-5">
              <span className="text-white">Business Automation</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500">
                Services in India
              </span>
            </h1>

            <p className="text-white/55 text-base sm:text-lg leading-relaxed mb-4 max-w-xl">
              Proshala helps Indian businesses save{" "}
              <strong className="text-white font-bold">20+ hours per week</strong> by automating
              sales pipelines, marketing workflows, CRM updates, reports, and day-to-day
              operations — using tools like Zapier, Make, n8n, and AI.
            </p>
            <p className="text-white/40 text-sm leading-relaxed mb-8 max-w-xl">
              Based in <strong className="text-white/60">Delhi NCR</strong>, we serve businesses
              across India — from early-stage startups to established enterprises running
              ₹10Cr+ annual revenue. Every automation is custom-built to fit your exact process.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <Link href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-gray-950 font-black px-7 py-4 rounded-2xl hover:-translate-y-0.5 transition-all shadow-2xl shadow-amber-500/25 text-sm group">
                Book Free Automation Audit
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a href={`tel:${PHONE}`}
                className="inline-flex items-center justify-center gap-2 border border-white/10 text-white/80 font-semibold px-7 py-4 rounded-2xl hover:bg-white/5 hover:border-white/20 transition-all text-sm">
                <Phone className="w-4 h-4 text-amber-400 flex-shrink-0" /> {PHONE_DISP}
              </a>
            </div>

            <div className="flex flex-wrap gap-5">
              {["Free Audit — No Obligation", "30-Day Post-Launch Support", "Tool-Agnostic Approach", "Delhi NCR & Pan India"].map((b) => (
                <div key={b} className="flex items-center gap-1.5 text-xs text-white/40 font-medium">
                  <CheckCircle className="w-3.5 h-3.5 text-amber-500 flex-shrink-0" /> {b}
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
              <div key={i}
                className="bg-white/[0.03] border border-white/[0.07] rounded-2xl p-5 text-center hover:border-amber-500/30 hover:-translate-y-0.5 transition-all group"
                style={{ animation: `fadeSlideUp 0.5s ease ${i * 0.07}s both` }}>
                <div className="text-2xl sm:text-3xl font-black text-white mb-1 group-hover:text-amber-400 transition-colors">
                  {value}
                </div>
                <div className="text-xs text-white/35 font-medium">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BEFORE / AFTER — conversion section ───────────────────────── */}
      <section className="py-16 lg:py-20 bg-[#0A0A0A]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
              <span className="text-amber-500 font-semibold text-xs uppercase tracking-[0.16em]">Before vs After</span>
              <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-3">
              What Automation Actually{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-400">
                Changes
              </span>
            </h2>
            <p className="text-white/40 text-sm max-w-md mx-auto">
              Real workflows we replaced with automation for our clients.
            </p>
          </div>

          <div className="space-y-3">
            {painPoints.map(({ before, after }, i) => (
              <div key={i}
                className="grid md:grid-cols-2 gap-0 rounded-2xl overflow-hidden border border-white/[0.07] hover:border-amber-500/25 transition-colors"
                style={{ animation: `fadeSlideUp 0.5s ease ${i * 0.08}s both` }}>
                {/* Before */}
                <div className="bg-white/[0.02] px-5 py-4 flex gap-3 items-start border-b md:border-b-0 md:border-r border-white/[0.06]">
                  <span className="mt-0.5 w-5 h-5 flex-shrink-0 rounded-full bg-red-500/15 border border-red-500/20 flex items-center justify-center text-red-400 text-[10px] font-black">✕</span>
                  <div>
                    <span className="text-[10px] font-bold text-red-400/70 uppercase tracking-wider block mb-1">Before</span>
                    <p className="text-white/45 text-xs sm:text-sm leading-relaxed">{before}</p>
                  </div>
                </div>
                {/* After */}
                <div className="bg-amber-500/[0.03] px-5 py-4 flex gap-3 items-start">
                  <span className="mt-0.5 w-5 h-5 flex-shrink-0 rounded-full bg-amber-500/15 border border-amber-500/20 flex items-center justify-center text-amber-400 text-[10px] font-black">✓</span>
                  <div>
                    <span className="text-[10px] font-bold text-amber-400/70 uppercase tracking-wider block mb-1">After Automation</span>
                    <p className="text-white/70 text-xs sm:text-sm leading-relaxed">{after}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ──────────────────────────────────────────────────── */}
      <section className="py-16 lg:py-24 bg-[#0D0D0D] border-y border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
              <span className="text-amber-500 font-semibold text-xs uppercase tracking-[0.16em]">What We Automate</span>
              <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-3">
              9 Types of Business{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-400">
                Automation
              </span>
            </h2>
            <p className="text-white/40 text-sm max-w-lg mx-auto">
              From your first lead capture to your final invoice — every step of your
              business can be automated.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {automationTypes.map(({ icon: Icon, title, desc, tags }, i) => (
              <div key={i}
                className="bg-white/[0.025] border border-white/[0.07] rounded-2xl p-6 hover:border-amber-500/35 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-amber-500/5 transition-all duration-300 group"
                style={{ animation: `fadeSlideUp 0.6s ease ${i * 0.06}s both` }}>
                <div className="w-10 h-10 bg-amber-500/10 border border-amber-500/15 rounded-xl flex items-center justify-center mb-4 group-hover:bg-amber-500/20 group-hover:scale-110 transition-all">
                  <Icon className="w-4.5 h-4.5 text-amber-400" />
                </div>
                <h3 className="font-bold text-white text-sm mb-2 group-hover:text-amber-400 transition-colors">
                  {title}
                </h3>
                <p className="text-white/40 text-xs leading-relaxed mb-3">{desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {tags.map((tag) => (
                    <span key={tag} className="text-[10px] font-semibold bg-amber-500/8 border border-amber-500/15 text-amber-400/70 px-2 py-0.5 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
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
              <span className="text-amber-500 font-semibold text-xs uppercase tracking-[0.16em]">Our Process</span>
              <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white">
              Audit to Automation —{" "}
              <span className="text-amber-400">5 Steps</span>
            </h2>
          </div>

          <div className="space-y-3">
            {process.map(({ step, title, desc }, i) => (
              <div key={i}
                className="flex gap-5 bg-white/[0.025] border border-white/[0.07] rounded-2xl p-5 hover:border-amber-500/30 transition-all group"
                style={{ animation: `fadeSlideUp 0.5s ease ${i * 0.08}s both` }}>
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

      {/* ── INDUSTRIES ────────────────────────────────────────────────── */}
      <section className="py-14 bg-[#0D0D0D] border-y border-white/[0.06]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
              <span className="text-amber-500 font-semibold text-xs uppercase tracking-[0.16em]">Industries We Serve</span>
              <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              Automation for Every Industry
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {industries.map(({ name, icon }) => (
              <div key={name}
                className="inline-flex items-center gap-2 bg-white/[0.03] border border-white/[0.07] hover:border-amber-500/30 hover:bg-amber-500/5 text-white/60 hover:text-amber-400 text-xs font-semibold px-4 py-2.5 rounded-full transition-all cursor-default">
                <span>{icon}</span> {name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TOOLS ─────────────────────────────────────────────────────── */}
      <section className="py-10 bg-[#0A0A0A] border-b border-white/[0.06]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-[11px] text-white/25 font-bold uppercase tracking-[0.2em] mb-6">
            Automation Stack We Work With
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {tools.map((tool) => (
              <span key={tool}
                className="bg-white/[0.04] border border-white/[0.07] text-white/45 text-xs font-semibold px-3.5 py-1.5 rounded-full hover:border-amber-500/30 hover:text-amber-400 transition-all">
                {tool}
              </span>
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
              Why 150+ Businesses Choose{" "}
              <span className="text-amber-400">Proshala</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { icon: Target,     title: "Revenue-First Mindset",     desc: "Every automation we build is designed to directly impact revenue — leads, conversions, or cost saved. We never automate for the sake of it." },
              { icon: Clock,      title: "Quick Wins in Week 1",       desc: "We ship a high-ROI automation in the first 3–5 days so you see real value before the full project is complete." },
              { icon: ShieldCheck,title: "Data Security First",        desc: "We use only enterprise-grade, SOC 2-compliant platforms. For sensitive data, we recommend self-hosted n8n on your own cloud." },
              { icon: Users,      title: "Full Team Training",         desc: "We do not just build and disappear. Every client gets SOPs, Loom walkthroughs, and a live training session before handover." },
              { icon: TrendingUp, title: "Scales With You",            desc: "Your automation system grows as your business does. Retainer clients get new workflows added every month as their needs evolve." },
              { icon: Settings,   title: "No Vendor Lock-in",          desc: "We are tool-agnostic. We recommend what's best for your business — not what pays us the highest affiliate commission." },
            ].map(({ icon: Icon, title, desc }, i) => (
              <div key={i}
                className="bg-white/[0.025] border border-white/[0.07] rounded-2xl p-5 hover:border-amber-500/30 hover:-translate-y-1 transition-all group"
                style={{ animation: `fadeSlideUp 0.5s ease ${i * 0.07}s both` }}>
                <div className="w-9 h-9 bg-amber-500/10 border border-amber-500/15 rounded-xl flex items-center justify-center mb-3 group-hover:bg-amber-500/20 group-hover:scale-110 transition-all">
                  <Icon className="w-4 h-4 text-amber-400" />
                </div>
                <h3 className="font-bold text-white text-sm mb-1.5 group-hover:text-amber-400 transition-colors">{title}</h3>
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
              Business Automation — <br className="sm:hidden" />Common Questions
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
      <section className="py-16 lg:py-24 relative overflow-hidden bg-[#0A0A0A]">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0"
            style={{ background: "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(245,158,11,0.07) 0%, transparent 70%)" }} />
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-amber-500/40 to-transparent" />
          <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-amber-500/40 to-transparent" />
        </div>

        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
          style={{ animation: "fadeSlideUp 0.6s ease both" }}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4 leading-tight">
            Save 20+ Hours a Week —{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-300">
              Starting This Month
            </span>
          </h2>
          <p className="text-white/50 text-sm sm:text-base mb-8 max-w-md mx-auto leading-relaxed">
            Book a free 60-minute automation audit. We will map your workflows, identify
            the 3 highest-ROI automations for your business, and give you a clear
            implementation plan — completely free, no strings attached.
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
              <Phone className="w-4 h-4 text-amber-400 flex-shrink-0" /> {PHONE_DISP}
            </a>
          </div>
          <p className="text-white/25 text-xs">
            No credit card. No commitment. Just clarity on what to automate first.
          </p>
        </div>
      </section>
    </>
  );
}