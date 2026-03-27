// app/services/workflow-setup/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import {
  Workflow, Settings, Zap, CheckCircle, ArrowRight,
  Phone, ChevronRight, Users, TrendingUp, Clock,
  BarChart3, GitBranch, Layers, ShieldCheck, Target,
  FileText, RefreshCw, Database, Bot, Cpu, Map,
} from "lucide-react";

// ─── SEO Metadata ─────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Business Workflow Setup Services in India | Proshala",
  description:
    "Proshala designs and sets up business workflows for sales, marketing, HR, and operations. CRM setup, SOP creation, tool onboarding & process mapping. Delhi NCR & Pan India.",
  keywords:
    "business workflow setup India, workflow setup services Delhi, CRM workflow setup India, business process setup Delhi NCR, SOP creation India, workflow design agency, sales workflow setup, operations workflow India, business process management Delhi, Proshala workflow",
  alternates: {
    canonical: "https://proshala.com/services/workflow-setup",
  },
  openGraph: {
    title: "Business Workflow Setup Services in India | Proshala",
    description:
      "From messy spreadsheets to clean, documented workflows — Proshala maps, designs, and sets up your sales, marketing, HR, and operations processes from scratch.",
    url: "https://proshala.com/services/workflow-setup",
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
    icon: Target,
    title: "Sales Workflow Setup",
    desc: "Map your entire sales process — from first touch to closed deal. Define stages, assign owners, set SLAs, and configure your CRM so every lead moves forward consistently.",
    tags: ["CRM Config", "Deal Stages", "Lead Routing", "SLAs"],
  },
  {
    icon: Zap,
    title: "Marketing Workflow Setup",
    desc: "Structure your campaign planning, content calendar, ad review, reporting, and approval processes so your marketing team operates without daily bottlenecks.",
    tags: ["Campaign Planning", "Approvals", "Reporting", "Content Calendar"],
  },
  {
    icon: Users,
    title: "HR & Onboarding Workflows",
    desc: "Build structured onboarding checklists, document collection flows, training sequences, and exit procedures so every new hire has the same consistent experience.",
    tags: ["Onboarding", "Checklists", "Training Flow", "Exit Process"],
  },
  {
    icon: BarChart3,
    title: "Operations Workflow Setup",
    desc: "Document and digitise your fulfilment, inventory, vendor management, and customer service processes — eliminating miscommunication and missed steps.",
    tags: ["Fulfilment", "Inventory", "Vendor Mgmt", "CS Process"],
  },
  {
    icon: FileText,
    title: "SOP Creation & Documentation",
    desc: "Turn tribal knowledge into clear, repeatable Standard Operating Procedures with step-by-step guides, screenshots, Loom videos, and decision trees.",
    tags: ["Written SOPs", "Loom Walkthroughs", "Decision Trees", "Notion / Docs"],
  },
  {
    icon: Database,
    title: "CRM Setup & Configuration",
    desc: "Full setup of HubSpot, Zoho, GoHighLevel, or Pipedrive — custom pipelines, deal properties, lead scoring, views, user roles, and data migration from spreadsheets.",
    tags: ["HubSpot", "Zoho CRM", "GoHighLevel", "Data Migration"],
  },
  {
    icon: GitBranch,
    title: "Project Management Setup",
    desc: "Configure Notion, Asana, ClickUp, or Monday.com with your team structure, project templates, recurring tasks, and approval workflows — ready to use from Day 1.",
    tags: ["Notion", "ClickUp", "Asana", "Monday.com"],
  },
  {
    icon: RefreshCw,
    title: "Finance & Billing Workflow",
    desc: "Set up invoice generation, payment tracking, expense approval, and GST reconciliation processes — with clear ownership and zero manual follow-up.",
    tags: ["Invoicing", "GST", "Expense Approval", "Tally / Zoho Books"],
  },
  {
    icon: Layers,
    title: "Cross-Tool Process Integration",
    desc: "When your workflows span multiple tools, we connect them — Slack notifications, CRM updates, sheet logs, and task creation — so nothing slips through the cracks.",
    tags: ["Zapier / Make", "Slack Alerts", "Sheet Sync", "Webhooks"],
  },
];

const stats = [
  { value: "5–10",  label: "Days to first workflow live" },
  { value: "70%",   label: "Reduction in missed steps" },
  { value: "3×",    label: "Faster team onboarding" },
  { value: "100%",  label: "Documented & repeatable" },
];

const process = [
  {
    step: "01",
    title: "Process Discovery",
    desc: "We spend 2–3 sessions interviewing your team leads to map exactly how work currently flows — including the unofficial workarounds, repeated firefighting, and steps that only one person knows.",
  },
  {
    step: "02",
    title: "Gap & Bottleneck Analysis",
    desc: "We analyse the current state against best practices for your industry and team size, and identify the top 5–10 points where work slows down, gets dropped, or requires constant hand-holding.",
  },
  {
    step: "03",
    title: "Workflow Design",
    desc: "We design the ideal future-state workflow — clear stages, defined owners, documented decision points, escalation paths, and measurable SLAs — presented as a visual process map.",
  },
  {
    step: "04",
    title: "Tool Configuration",
    desc: "We configure your chosen tools (CRM, project management, communication) to reflect the designed workflow — custom fields, views, automations, templates, and user permissions all set up.",
  },
  {
    step: "05",
    title: "SOP Documentation",
    desc: "Every workflow is documented with written SOPs, annotated screenshots, and Loom video walkthroughs — stored in your team's Notion, Google Drive, or chosen wiki.",
  },
  {
    step: "06",
    title: "Team Training & Handover",
    desc: "We run live training sessions with your team, answer questions, refine based on feedback, and provide 30 days of post-launch support before a clean handover.",
  },
];

const painPoints = [
  {
    problem: "New employees take 3–4 weeks to become productive because nothing is documented",
    solution: "Structured onboarding workflow with SOPs, training sequences, and checklists — new hires productive in 5–7 days",
  },
  {
    problem: "Leads fall through the cracks because follow-ups depend on individual memory",
    solution: "CRM pipeline with defined stages, SLA alerts, and automated reminders — every lead has a next action and an owner",
  },
  {
    problem: "Weekly reporting takes 3 hours manually pulling data from 5 different tools",
    solution: "Automated data pulls into a single dashboard — weekly report ready by 9 AM Monday with zero manual work",
  },
  {
    problem: "The same task is done differently by every team member, leading to inconsistent output",
    solution: "Documented SOPs with step-by-step guides and decision trees — same quality output regardless of who executes",
  },
];

const tools = [
  { category: "CRM",                items: ["HubSpot", "Zoho CRM", "GoHighLevel", "Pipedrive", "Salesforce"] },
  { category: "Project Management", items: ["Notion", "ClickUp", "Asana", "Monday.com", "Trello"] },
  { category: "Communication",      items: ["Slack", "Microsoft Teams", "Google Workspace", "WhatsApp Business"] },
  { category: "Finance",            items: ["Zoho Books", "Tally Prime", "Razorpay", "QuickBooks"] },
  { category: "Automation",         items: ["Zapier", "Make (Integromat)", "n8n", "Pabbly Connect"] },
  { category: "Documentation",      items: ["Notion", "Google Docs", "Confluence", "Loom", "Scribe"] },
];

const industries = [
  { emoji: "🏢", name: "Digital Agencies" },
  { emoji: "🏠", name: "Real Estate" },
  { emoji: "🎓", name: "EdTech / Coaching" },
  { emoji: "🛒", name: "E-commerce / D2C" },
  { emoji: "🏥", name: "Healthcare / Clinics" },
  { emoji: "💻", name: "SaaS / Tech Startups" },
  { emoji: "💰", name: "Finance / NBFC" },
  { emoji: "⚖️", name: "Legal / Consulting" },
  { emoji: "🏭", name: "Manufacturing / Trading" },
];

const faqs = [
  {
    q: "What is a business workflow setup and why does my business need it?",
    a: "A business workflow setup is the process of defining, documenting, and configuring how work moves through your organisation — from the first customer touchpoint to the final delivery. Without structured workflows, businesses rely on individual memory, WhatsApp messages, and verbal instructions. This leads to inconsistency, missed steps, slow onboarding, and a business that cannot scale without the founder being involved in every decision. A properly set up workflow system means any team member can execute any process correctly — every time.",
  },
  {
    q: "How is workflow setup different from automation?",
    a: "Workflow setup focuses on designing and documenting the process — defining who does what, in what order, using which tools, with what deliverables and SLAs. Automation is the next step — using software to perform specific steps in that workflow without human intervention. We recommend getting the workflow right first (clear, documented, consistently followed) before automating it. Automating a broken process just makes it break faster. Our workflow setup service often precedes or runs alongside our automation service.",
  },
  {
    q: "Which tools do you configure as part of workflow setup?",
    a: "We configure whichever tools your team already uses or chooses to adopt — we never force migrations. For CRM: HubSpot, Zoho, GoHighLevel, Pipedrive. For project management: Notion, ClickUp, Asana, Monday.com. For communication: Slack, Google Workspace. For finance: Zoho Books, Tally. We also connect tools via Zapier or Make when workflows span multiple platforms. If you do not have tools yet, we recommend the best fit based on your team size, budget, and use case.",
  },
  {
    q: "How long does a workflow setup project take?",
    a: "A single-department workflow setup (e.g. sales pipeline in CRM only) takes 1–2 weeks. A full business workflow setup covering sales, marketing, HR, and operations typically takes 4–8 weeks depending on team size and complexity. We always start with the highest-impact workflow first — usually the sales pipeline — so you see immediate value while we continue building out the rest of the system.",
  },
  {
    q: "Do you create SOPs as part of the service?",
    a: "Yes — SOP documentation is a core deliverable of every workflow setup project. We create written step-by-step guides, annotated screenshots for tool-specific tasks, decision trees for processes with conditional logic, and Loom video walkthroughs for complex multi-step procedures. All documentation is stored in your team's chosen wiki — Notion, Google Drive, Confluence, or SharePoint — in a structure your team can actually navigate and maintain.",
  },
  {
    q: "What if our processes change after the workflow is set up?",
    a: "Business processes evolve — that is normal and healthy. All SOPs and tool configurations we create are designed to be editable by your team without needing our involvement. We also provide a 30-day post-launch support window where we make adjustments as you get real-world feedback. For clients on our monthly retainer, we review and update workflows quarterly and make changes as your business grows — adding new stages, updating SOPs, reconfiguring tools — as part of the retainer scope.",
  },
  {
    q: "Can you set up workflows for a remote or hybrid team?",
    a: "Yes — in fact, remote and hybrid teams benefit most from structured workflows because there is no office hallway where informal knowledge transfer happens. We build workflows with remote-first tools (Notion, Slack, ClickUp), asynchronous-friendly SOPs (written + Loom videos), and clear ownership matrices so team members in different cities or time zones always know what to do next without waiting for someone to be online.",
  },
  {
    q: "How much does a workflow setup project cost?",
    a: "Workflow setup projects at Proshala are scoped based on the number of departments and tools involved. A single-department setup (e.g. sales CRM workflow) starts at ₹20,000. A full business workflow setup covering 3–5 departments with SOP documentation and tool configuration typically ranges from ₹60,000–₹1,50,000. Ongoing workflow management retainers (quarterly reviews, SOP updates, new process design) start at ₹15,000/month.",
  },
];

// ─── JSON-LD ──────────────────────────────────────────────────────────────────
const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Business Workflow Setup Services",
  alternateName: [
    "Workflow Design India",
    "CRM Workflow Setup Delhi",
    "SOP Creation Services India",
    "Business Process Setup",
  ],
  description:
    "Proshala designs and sets up business workflows for sales, marketing, HR, and operations — including CRM configuration, SOP documentation, and process mapping for businesses across Delhi NCR and India.",
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
  serviceType: "Business Workflow Setup",
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: "INR",
    lowPrice: "20000",
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
    { "@type": "ListItem", position: 1, name: "Home",             item: "https://proshala.com" },
    { "@type": "ListItem", position: 2, name: "Services",         item: "https://proshala.com/services" },
    { "@type": "ListItem", position: 3, name: "Workflow Setup",   item: "https://proshala.com/services/workflow-setup" },
  ],
};

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function WorkflowSetupPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* ── HERO ──────────────────────────────────────────────────────── */}
      <section className="relative bg-[#0A0A0A] pt-28 pb-0 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-24 right-0 w-[560px] h-[560px] rounded-full blur-[130px]"
            style={{ background: "radial-gradient(circle, rgba(245,158,11,0.09) 0%, transparent 70%)" }} />
          <div className="absolute bottom-0 -left-10 w-[360px] h-[360px] rounded-full blur-[100px]"
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
            <span className="text-white/55">Workflow Setup</span>
          </nav>

          <div className="max-w-3xl pb-16 lg:pb-20" style={{ animation: "heroFadeIn 0.7s ease both" }}>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 rounded-full px-4 py-1.5 mb-6">
              <Workflow className="w-3.5 h-3.5 text-amber-400" />
              <span className="text-amber-400 text-xs font-bold tracking-wide uppercase">
                Workflow Setup · SOPs · CRM Config · Delhi, India
              </span>
            </div>

            {/* H1 */}
            <h1 className="text-[38px] sm:text-5xl lg:text-[58px] font-black leading-[1.04] tracking-tight mb-5">
              <span className="text-white">Business Workflow</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500">
                Setup Services in India
              </span>
            </h1>

            <p className="text-white/55 text-base sm:text-lg leading-relaxed mb-4 max-w-xl">
              Proshala maps, designs, and configures{" "}
              <strong className="text-white font-bold">business workflows</strong> for your
              sales, marketing, HR, and operations teams — turning scattered WhatsApp
              messages and tribal knowledge into{" "}
              <strong className="text-white font-bold">clean, documented, repeatable processes</strong>{" "}
              your team actually follows.
            </p>
            <p className="text-white/40 text-sm leading-relaxed mb-8 max-w-xl">
              Serving <strong className="text-white/60">startups, agencies, and growing
              businesses</strong> across Delhi NCR and Pan India — we set up your CRM,
              project management tools, SOPs, and cross-team processes so your business
              can scale without the founder being in every conversation.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <Link href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-gray-950 font-black px-7 py-4 rounded-2xl hover:-translate-y-0.5 transition-all shadow-2xl shadow-amber-500/25 text-sm group">
                Get a Free Process Audit
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a href={`tel:${PHONE}`}
                className="inline-flex items-center justify-center gap-2 border border-white/10 text-white/80 font-semibold px-7 py-4 rounded-2xl hover:bg-white/5 hover:border-white/20 transition-all text-sm">
                <Phone className="w-4 h-4 text-amber-400 flex-shrink-0" /> {PHONE_DISP}
              </a>
            </div>

            <div className="flex flex-wrap gap-5">
              {[
                "Free Process Audit",
                "SOPs Included",
                "Tool-Agnostic Setup",
                "Remote Team Ready",
              ].map((b) => (
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

      {/* ── WHY WORKFLOWS — SEO depth ─────────────────────────────────── */}
      <section className="py-16 lg:py-20 bg-[#0A0A0A]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
              <span className="text-amber-500 font-semibold text-xs uppercase tracking-[0.16em]">
                The Real Cost of No Workflows
              </span>
              <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-5">
              A Business That Runs on{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-400">
                Documented Processes
              </span>{" "}
              Scales.
              <br className="hidden sm:block" /> One That Runs on Memory Does Not.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 text-white/55 text-sm leading-relaxed mb-10">
            <div className="space-y-4">
              <p>
                Most Indian businesses under ₹5 crore annual revenue operate almost
                entirely on <strong className="text-white">verbal instructions, WhatsApp
                forwards, and founder memory</strong>. This works — until it does not.
                The moment you try to hire your third salesperson, expand to a second
                city, or take a week off, cracks appear everywhere.
              </p>
              <p>
                <strong className="text-white">Business workflow setup</strong> is the
                foundation that every other growth initiative — automation, delegation,
                franchising, fundraising — depends on. Investors will not fund a business
                where everything is in one person&apos;s head. Acquirers will not buy
                one. And great employees will not stay in one.
              </p>
            </div>
            <div className="space-y-4">
              <p>
                At Proshala, we have seen the same pattern across 150+ client engagements:
                businesses that document their workflows before scaling grow{" "}
                <strong className="text-amber-400">2–3× faster</strong> than those that
                try to hire their way out of chaos. When every team member knows exactly
                what to do and how to do it — without asking — execution speed compounds.
              </p>
              <p>
                Our <strong className="text-white">workflow setup service</strong> does
                not produce a 200-page process manual that nobody reads. We design
                lean, visual, tool-integrated workflows that live where your team
                already works — in your CRM, your Notion, your Slack — and become the
                default way things get done within weeks of launch.
              </p>
            </div>
          </div>

          {/* Before / After */}
          <div className="space-y-3">
            {painPoints.map(({ problem, solution }, i) => (
              <div key={i}
                className="grid md:grid-cols-2 gap-0 rounded-2xl overflow-hidden border border-white/[0.07] hover:border-amber-500/25 transition-colors"
                style={{ animation: `fadeSlideUp 0.5s ease ${i * 0.08}s both` }}>
                <div className="bg-white/[0.02] px-5 py-4 flex gap-3 items-start border-b md:border-b-0 md:border-r border-white/[0.06]">
                  <span className="mt-0.5 w-5 h-5 flex-shrink-0 rounded-full bg-red-500/15 border border-red-500/20 flex items-center justify-center text-red-400 text-[10px] font-black">✕</span>
                  <div>
                    <span className="text-[10px] font-bold text-red-400/70 uppercase tracking-wider block mb-1">The Problem</span>
                    <p className="text-white/45 text-xs sm:text-sm leading-relaxed">{problem}</p>
                  </div>
                </div>
                <div className="bg-amber-500/[0.03] px-5 py-4 flex gap-3 items-start">
                  <span className="mt-0.5 w-5 h-5 flex-shrink-0 rounded-full bg-amber-500/15 border border-amber-500/20 flex items-center justify-center text-amber-400 text-[10px] font-black">✓</span>
                  <div>
                    <span className="text-[10px] font-bold text-amber-400/70 uppercase tracking-wider block mb-1">After Workflow Setup</span>
                    <p className="text-white/70 text-xs sm:text-sm leading-relaxed">{solution}</p>
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
              <span className="text-amber-500 font-semibold text-xs uppercase tracking-[0.16em]">What We Set Up</span>
              <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-3">
              9 Workflow Categories{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-400">
                We Cover
              </span>
            </h2>
            <p className="text-white/40 text-sm max-w-lg mx-auto">
              Every department, every tool, every handoff — designed, documented,
              and configured to run without constant oversight.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map(({ icon: Icon, title, desc, tags }, i) => (
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
                    <span key={tag}
                      className="text-[10px] font-semibold bg-amber-500/8 border border-amber-500/15 text-amber-400/70 px-2 py-0.5 rounded-full">
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
              <span className="text-amber-500 font-semibold text-xs uppercase tracking-[0.16em]">How We Work</span>
              <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white">
              Chaos to Clarity —{" "}
              <span className="text-amber-400">6 Steps</span>
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

      {/* ── TOOLS ─────────────────────────────────────────────────────── */}
      <section className="py-14 bg-[#0D0D0D] border-y border-white/[0.06]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
              <span className="text-amber-500 font-semibold text-xs uppercase tracking-[0.16em]">Tools We Configure</span>
              <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              Your Stack, Our Expertise
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {tools.map(({ category, items }) => (
              <div key={category}
                className="bg-white/[0.025] border border-white/[0.07] rounded-2xl p-5 hover:border-amber-500/25 transition-colors">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
                  <span className="text-amber-400 text-xs font-bold uppercase tracking-wide">{category}</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {items.map((item) => (
                    <span key={item}
                      className="text-[11px] font-medium bg-white/[0.04] border border-white/[0.07] text-white/50 px-2.5 py-1 rounded-full hover:text-amber-400 hover:border-amber-500/25 transition-colors">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES ────────────────────────────────────────────────── */}
      <section className="py-12 bg-[#0A0A0A]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-7">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
              <span className="text-amber-500 font-semibold text-xs uppercase tracking-[0.16em]">Industries We Serve</span>
              <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
            </div>
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

      {/* ── WHY PROSHALA ──────────────────────────────────────────────── */}
      <section className="py-16 bg-[#0D0D0D] border-y border-white/[0.06]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
              <span className="text-amber-500 font-semibold text-xs uppercase tracking-[0.16em]">Why Proshala</span>
              <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white">
              We Build Workflows That Get{" "}
              <span className="text-amber-400">Used</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                icon: Map,
                title: "Process-First Thinking",
                desc: "We design the workflow before configuring any tool. Most agencies skip this — and produce CRMs that nobody uses because the underlying process was never thought through.",
              },
              {
                icon: Users,
                title: "Team Adoption Focus",
                desc: "A workflow only works if the team follows it. We design for adoption — keeping processes simple, training properly, and building in feedback loops so teams embrace rather than avoid.",
              },
              {
                icon: Cpu,
                title: "Automation-Ready Design",
                desc: "Every workflow we design is built with future automation in mind. When you are ready to automate, no redesign is needed — we just add triggers to the structured process already in place.",
              },
              {
                icon: FileText,
                title: "SOPs That Last",
                desc: "We document workflows in formats that stay relevant — version-controlled Notion pages with screenshots, Loom walkthroughs that show not just what to do but why.",
              },
              {
                icon: ShieldCheck,
                title: "No Bloated Deliverables",
                desc: "We do not produce 100-slide decks that gather dust. Deliverables are lean, practical, and immediately usable — process maps, configured tools, and written SOPs. Nothing more.",
              },
              {
                icon: TrendingUp,
                title: "Scales As You Grow",
                desc: "Workflows built for a 5-person team break at 20. We design for your 2-year target state — so the system you implement today still works when you triple in size.",
              },
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
      <section className="py-16 bg-[#0A0A0A]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
              <span className="text-amber-500 font-semibold text-xs uppercase tracking-[0.16em]">FAQs</span>
              <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white">
              Workflow Setup —{" "}
              <br className="sm:hidden" />Common Questions
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
            Stop Running on{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-300">
              Memory &amp; Luck
            </span>
          </h2>
          <p className="text-white/50 text-sm sm:text-base mb-8 max-w-md mx-auto leading-relaxed">
            Book a free 60-minute process audit. We will map your current workflows,
            identify the top 3 bottlenecks costing you time and money, and give you
            a clear plan to fix them — completely free.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-5">
            <Link href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-gray-950 font-black px-8 py-4 rounded-2xl hover:-translate-y-0.5 transition-all shadow-2xl shadow-amber-500/20 text-sm group">
              <Zap className="w-4 h-4" />
              Get Free Process Audit
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a href={`tel:${PHONE}`}
              className="inline-flex items-center justify-center gap-2 border border-white/10 text-white/80 font-semibold px-8 py-4 rounded-2xl hover:bg-white/5 hover:border-white/20 transition-all text-sm">
              <Phone className="w-4 h-4 text-amber-400 flex-shrink-0" /> {PHONE_DISP}
            </a>
          </div>
          <p className="text-white/25 text-xs">
            Free audit · No commitment · SOPs included in every project
          </p>
        </div>
      </section>
    </>
  );
}