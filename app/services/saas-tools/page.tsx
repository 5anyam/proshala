// app/services/saas-tools/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import {
  Layers, Code2, Zap, Bot, BarChart3, ShieldCheck,
  CheckCircle, ArrowRight, Phone, ChevronRight,
  Globe, Settings, TrendingUp, Users, RefreshCw,
  Database, CreditCard, Cpu, Lock, Rocket,
} from "lucide-react";

// ─── SEO Metadata ─────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "SaaS Product Development Services in India | Proshala",
  description:
    "Build, launch, and grow your SaaS product with Proshala. Custom SaaS development, AI-powered tools, white-label software, and SaaS growth marketing — Delhi NCR & Pan India.",
  keywords:
    "SaaS development India, SaaS product development company Delhi, custom SaaS tools India, AI SaaS development, white label SaaS India, SaaS startup development, SaaS MVP development India, SaaS growth marketing, Proshala SaaS",
  alternates: {
    canonical: "https://proshala.com/services/saas-tools",
  },
  openGraph: {
    title: "SaaS Product Development & Growth Services | Proshala India",
    description:
      "From MVP to scale — Proshala builds custom SaaS products, AI-powered tools, and white-label software for startups and businesses across India.",
    url: "https://proshala.com/services/saas-tools",
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
    icon: Rocket,
    title: "SaaS MVP Development",
    desc: "Go from idea to a working, deployable SaaS product in 4–8 weeks. We build lean MVPs with just enough features to validate your market and start acquiring users.",
    tags: ["Next.js", "React", "Node.js", "PostgreSQL"],
  },
  {
    icon: Bot,
    title: "AI-Powered SaaS Tools",
    desc: "Build SaaS products that leverage GPT-4, Gemini, Claude, and open-source LLMs — content generators, AI assistants, data extraction tools, and more.",
    tags: ["OpenAI API", "Gemini", "LangChain", "Vercel AI"],
  },
  {
    icon: Layers,
    title: "White-Label SaaS",
    desc: "Rebrandable, multi-tenant SaaS platforms you can resell under your own brand. Custom domains, custom colour schemes, isolated data per client.",
    tags: ["Multi-tenant", "Custom Domain", "Reseller"],
  },
  {
    icon: Globe,
    title: "SaaS Web App Development",
    desc: "Full-stack SaaS applications built on Next.js, React, TypeScript, and modern cloud infrastructure — fast, scalable, and SEO-friendly from day one.",
    tags: ["Next.js", "TypeScript", "AWS / GCP", "Vercel"],
  },
  {
    icon: CreditCard,
    title: "Subscription & Billing Systems",
    desc: "Stripe or Razorpay-powered subscription flows — free trials, tiered plans, usage-based billing, promo codes, and automatic dunning built in.",
    tags: ["Stripe", "Razorpay", "Billing Portals", "Webhooks"],
  },
  {
    icon: BarChart3,
    title: "SaaS Analytics & Dashboards",
    desc: "Custom in-app analytics, usage dashboards, and admin panels that give you — and your customers — real-time visibility into product performance.",
    tags: ["Mixpanel", "Posthog", "Custom Charts", "Admin Panel"],
  },
  {
    icon: Database,
    title: "API & Integration Development",
    desc: "Build robust REST or GraphQL APIs, third-party integrations (Zapier, Slack, CRMs), and webhook systems that make your SaaS plug into any ecosystem.",
    tags: ["REST API", "GraphQL", "Zapier", "Webhooks"],
  },
  {
    icon: TrendingUp,
    title: "SaaS Growth Marketing",
    desc: "Google Ads, SEO, product-led growth strategies, and conversion rate optimisation specifically designed for SaaS — free trial to paid conversion is our KPI.",
    tags: ["Google Ads", "SEO", "PLG", "CRO"],
  },
  {
    icon: RefreshCw,
    title: "SaaS Maintenance & Scaling",
    desc: "Ongoing development retainers for feature shipping, bug fixes, performance tuning, and infrastructure scaling as your user base grows.",
    tags: ["Retainer", "CI/CD", "Performance", "DevOps"],
  },
];

const stats = [
  { value: "4–8W",  label: "MVP to launch timeline" },
  { value: "3×",    label: "Faster than in-house build" },
  { value: "99.9%", label: "Uptime SLA on hosted apps" },
  { value: "₹0",    label: "Cost for initial audit" },
];

const process = [
  {
    step: "01",
    title: "Discovery & Scope",
    desc: "We spend 2–3 sessions understanding your target users, core value proposition, competitive landscape, and must-have vs nice-to-have features for your MVP.",
  },
  {
    step: "02",
    title: "Architecture & Design",
    desc: "Database schema, API architecture, tech stack selection, and UI/UX wireframes — all designed to scale from Day 1 without expensive rewrites later.",
  },
  {
    step: "03",
    title: "Agile Development",
    desc: "2-week sprint cycles with live demos after each sprint. You see progress weekly, provide feedback, and stay in complete control of what gets built.",
  },
  {
    step: "04",
    title: "Launch & Onboarding",
    desc: "CI/CD pipeline setup, production deployment on your cloud, monitoring alerts, and a live walkthrough with your team before the first user signs up.",
  },
  {
    step: "05",
    title: "Grow & Iterate",
    desc: "Post-launch, we run growth marketing, analyse user behaviour, ship new features based on churn signals, and optimise trial-to-paid conversion.",
  },
];

const techStack = [
  { category: "Frontend",     tools: ["Next.js 15", "React", "TypeScript", "Tailwind CSS", "shadcn/ui"] },
  { category: "Backend",      tools: ["Node.js", "Express", "tRPC", "Prisma ORM", "Python (FastAPI)"] },
  { category: "Database",     tools: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Supabase"] },
  { category: "AI / ML",      tools: ["OpenAI API", "Google Gemini", "Anthropic Claude", "LangChain", "Hugging Face"] },
  { category: "Payments",     tools: ["Stripe", "Razorpay", "Cashfree", "Lemon Squeezy"] },
  { category: "Cloud / DevOps", tools: ["Vercel", "Railway", "AWS", "GCP", "Docker", "GitHub Actions"] },
];

const saasTypes = [
  { emoji: "✍️", name: "Content & AI Writing Tools" },
  { emoji: "📊", name: "Analytics & Reporting SaaS" },
  { emoji: "🤖", name: "AI Automation Platforms" },
  { emoji: "💬", name: "Customer Communication Tools" },
  { emoji: "🏢", name: "B2B Workflow SaaS" },
  { emoji: "🛒", name: "E-commerce SaaS Plugins" },
  { emoji: "📚", name: "EdTech & LMS Platforms" },
  { emoji: "🏥", name: "Healthcare Management SaaS" },
  { emoji: "💰", name: "Fintech & Billing Tools" },
  { emoji: "📈", name: "Marketing & SEO SaaS" },
  { emoji: "🔗", name: "API & Integration Tools" },
  { emoji: "🏠", name: "Real Estate SaaS" },
];

const faqs = [
  {
    q: "How much does it cost to build a SaaS product in India?",
    a: "SaaS development costs in India vary significantly by complexity. A lean MVP with core features typically costs ₹2,00,000–₹8,00,000 and takes 4–8 weeks. A full-featured SaaS product with custom billing, admin panels, and API integrations ranges from ₹8,00,000–₹30,00,000+. At Proshala, we always start with a scoped MVP to validate your market before investing in full development. Our hourly rate starts at ₹2,500/hour for development.",
  },
  {
    q: "What is the difference between a SaaS MVP and a full product?",
    a: "An MVP (Minimum Viable Product) includes only the core features needed to deliver your primary value proposition to early users — typically 3–5 key features. The goal is to launch fast, get real user feedback, and validate whether people will pay for your solution before investing in the full build. A full product adds secondary features, advanced integrations, enterprise-grade security, and polish based on what your actual users request after launch.",
  },
  {
    q: "Do you build AI-powered SaaS products?",
    a: "Yes — AI SaaS is one of our primary specialisations. We have built AI writing tools, content generation platforms, automated data extraction tools, and AI-powered analytics dashboards using OpenAI GPT-4, Google Gemini, Anthropic Claude, and open-source models via Hugging Face. We handle API integration, prompt engineering, cost optimisation (caching, model selection), and building the user-facing product on top of AI backends.",
  },
  {
    q: "Which tech stack do you use for SaaS development?",
    a: "We primarily build on Next.js 15 (App Router) + TypeScript + Tailwind CSS for the frontend, with Node.js / Python backends and PostgreSQL or Supabase for the database. Payments via Stripe or Razorpay, cloud hosting on Vercel + Railway or AWS, and CI/CD via GitHub Actions. We choose the stack based on your specific requirements — not a one-size-fits-all template.",
  },
  {
    q: "Can you build a white-label SaaS product I can resell?",
    a: "Yes — white-label SaaS is a core offering. We build multi-tenant architectures where each of your clients gets their own subdomain or custom domain, branded interface, isolated data, and separate admin access. You manage all clients from a central super-admin panel. This model works well for agencies, consultants, and businesses that want to productise their service offering.",
  },
  {
    q: "Do you also help with SaaS marketing and user acquisition?",
    a: "Yes — this is what sets Proshala apart from a pure development agency. We are a digital marketing agency first. After building your SaaS, we can run Google Ads targeting high-intent SaaS keywords, build SEO content that ranks for problem-aware queries, set up product-led growth mechanics (free trial flows, in-app upsells, referral programs), and optimise your trial-to-paid conversion rate. You get one team for build and growth.",
  },
  {
    q: "How do you handle SaaS user authentication and security?",
    a: "We implement industry-standard authentication using NextAuth.js, Clerk, or Auth0 — covering email/password, Google OAuth, magic links, and 2FA. For security: all data encrypted at rest and in transit (AES-256, TLS 1.3), environment secrets via AWS Secrets Manager or Vercel, rate limiting on all APIs, OWASP top-10 vulnerability checks, and regular dependency audits. Enterprise clients can get SOC 2 compliance guidance.",
  },
  {
    q: "What ongoing support do you provide after launch?",
    a: "We offer monthly maintenance retainers starting at ₹25,000/month that include: bug fixes (resolved within 48 hours), security patches, dependency updates, minor feature additions, performance monitoring, and monthly strategy calls. For high-growth SaaS products, we also offer dedicated engineering retainers (20–40 hrs/month) for continuous feature development at a predictable monthly cost.",
  },
];

// ─── JSON-LD ──────────────────────────────────────────────────────────────────
const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "SaaS Product Development Services",
  alternateName: ["SaaS Development India", "Custom SaaS Tools", "AI SaaS Development"],
  description:
    "Proshala builds custom SaaS products, AI-powered tools, and white-label software for startups and businesses across Delhi NCR and India — from MVP to scale.",
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
  serviceType: "SaaS Product Development",
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: "INR",
    lowPrice: "200000",
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
    { "@type": "ListItem", position: 1, name: "Home",      item: "https://proshala.com" },
    { "@type": "ListItem", position: 2, name: "Services",  item: "https://proshala.com/services" },
    { "@type": "ListItem", position: 3, name: "SaaS Tools", item: "https://proshala.com/services/saas-tools" },
  ],
};

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function SaasToolsPage() {
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
            <span className="text-white/55">SaaS Tools</span>
          </nav>

          <div className="max-w-3xl pb-16 lg:pb-20" style={{ animation: "heroFadeIn 0.7s ease both" }}>
            <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 rounded-full px-4 py-1.5 mb-6">
              <Layers className="w-3.5 h-3.5 text-amber-400" />
              <span className="text-amber-400 text-xs font-bold tracking-wide uppercase">
                SaaS Development · AI Tools · Delhi, India
              </span>
            </div>

            {/* H1 — exact keyword in first 3 words */}
            <h1 className="text-[38px] sm:text-5xl lg:text-[58px] font-black leading-[1.04] tracking-tight mb-5">
              <span className="text-white">SaaS Tools &amp; Product</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500">
                Development in India
              </span>
            </h1>

            <p className="text-white/55 text-base sm:text-lg leading-relaxed mb-4 max-w-xl">
              Proshala builds <strong className="text-white font-bold">custom SaaS products</strong> —
              from lean MVPs that validate your idea in 4 weeks to fully scaled AI-powered platforms
              handling thousands of users. We combine engineering expertise with
              <strong className="text-white font-bold"> growth marketing</strong> to take your
              SaaS from zero to revenue.
            </p>
            <p className="text-white/40 text-sm leading-relaxed mb-8 max-w-xl">
              Serving <strong className="text-white/60">SaaS founders, agencies, and enterprises</strong> across
              Delhi NCR and India — with a tech stack built for speed, scale, and profitability.
              We have shipped tools in content AI, marketing automation, e-commerce analytics,
              and B2B workflow management.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <Link href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-gray-950 font-black px-7 py-4 rounded-2xl hover:-translate-y-0.5 transition-all shadow-2xl shadow-amber-500/25 text-sm group">
                Discuss Your SaaS Idea
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a href={`tel:${PHONE}`}
                className="inline-flex items-center justify-center gap-2 border border-white/10 text-white/80 font-semibold px-7 py-4 rounded-2xl hover:bg-white/5 hover:border-white/20 transition-all text-sm">
                <Phone className="w-4 h-4 text-amber-400 flex-shrink-0" /> {PHONE_DISP}
              </a>
            </div>

            <div className="flex flex-wrap gap-5">
              {["MVP in 4–8 Weeks", "AI Integration Ready", "Stripe / Razorpay Built-in", "Growth Marketing Included"].map((b) => (
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

      {/* ── WHAT WE BUILD — SEO depth section ────────────────────────── */}
      <section className="py-16 lg:py-20 bg-[#0A0A0A]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
              <span className="text-amber-500 font-semibold text-xs uppercase tracking-[0.16em]">What We Build</span>
              <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-5">
              Build Your SaaS the{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-400">
                Right Way, First Time
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 text-white/55 text-sm leading-relaxed">
            <div className="space-y-4">
              <p>
                India&apos;s SaaS market is projected to reach{" "}
                <strong className="text-white">$50 billion by 2030</strong>, and the window to build
                category-defining tools is open right now. But most SaaS products fail not because
                of bad ideas — they fail because of slow builds, bloated features, and no clear
                path to paid users.
              </p>
              <p>
                At Proshala, we approach every{" "}
                <strong className="text-white">SaaS development project</strong> as a business problem
                first and an engineering problem second. Before writing a single line of code, we
                validate your core assumption, scope the smallest version that delivers real value,
                and define the exact metrics that will tell you if the product is working.
              </p>
            </div>
            <div className="space-y-4">
              <p>
                We have direct experience building and operating SaaS products —
                including <strong className="text-amber-400">Wordmatic</strong>, our own
                AI-powered business name and content generation tool. That means we
                understand the challenges of SaaS from the inside: user activation, churn,
                pricing strategy, infrastructure costs, and trial-to-paid conversion.
              </p>
              <p>
                This operator mindset is what separates us from agencies that just
                execute a brief. We will push back on unnecessary features, suggest
                <strong className="text-white"> revenue-accelerating additions</strong> you have not
                thought of, and help you grow after launch — not just hand you a codebase
                and disappear.
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
              <span className="text-amber-500 font-semibold text-xs uppercase tracking-[0.16em]">Services</span>
              <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-3">
              Everything You Need to{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-400">
                Build &amp; Grow
              </span>
            </h2>
            <p className="text-white/40 text-sm max-w-lg mx-auto">
              From first line of code to first paying customer — and beyond.
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

      {/* ── TECH STACK ────────────────────────────────────────────────── */}
      <section className="py-14 bg-[#0A0A0A]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
              <span className="text-amber-500 font-semibold text-xs uppercase tracking-[0.16em]">Tech Stack</span>
              <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              Built on Modern,{" "}
              <span className="text-amber-400">Scalable Technology</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {techStack.map(({ category, tools }) => (
              <div key={category}
                className="bg-white/[0.025] border border-white/[0.07] rounded-2xl p-5 hover:border-amber-500/25 transition-colors">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
                  <span className="text-amber-400 text-xs font-bold uppercase tracking-wide">{category}</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {tools.map((tool) => (
                    <span key={tool}
                      className="text-[11px] font-medium bg-white/[0.04] border border-white/[0.07] text-white/55 px-2.5 py-1 rounded-full">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ───────────────────────────────────────────────────── */}
      <section className="py-16 lg:py-24 bg-[#0D0D0D] border-y border-white/[0.06]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
              <span className="text-amber-500 font-semibold text-xs uppercase tracking-[0.16em]">Our Process</span>
              <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white">
              Idea to Revenue —{" "}
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

      {/* ── SAAS TYPES ────────────────────────────────────────────────── */}
      <section className="py-14 bg-[#0A0A0A]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
              <span className="text-amber-500 font-semibold text-xs uppercase tracking-[0.16em]">SaaS Categories</span>
              <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              Types of SaaS Products We Build
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {saasTypes.map(({ emoji, name }) => (
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
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-2">
              Builders Who Also{" "}
              <span className="text-amber-400">Grow Products</span>
            </h2>
            <p className="text-white/40 text-sm max-w-md mx-auto">
              Most dev agencies stop at launch. We are with you from idea to ₹1Cr ARR.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { icon: Cpu,        title: "Operator Experience",       desc: "We have built and operated our own SaaS products (Wordmatic). We know the real challenges of activation, churn, and unit economics." },
              { icon: Rocket,     title: "Ship Fast, Learn Faster",   desc: "2-week sprints, working demos after every sprint. You see your product taking shape in real time — no 3-month blackout periods." },
              { icon: TrendingUp, title: "Built-in Growth Playbook",  desc: "After launch, we run Google Ads, SEO, and PLG mechanics designed specifically for SaaS trial-to-paid conversion." },
              { icon: Lock,       title: "Security by Default",       desc: "Auth, rate limiting, encrypted storage, OWASP checks, and 2FA built into every project — not bolted on after an incident." },
              { icon: Database,   title: "Scalable Architecture",     desc: "We design databases and APIs to handle 1 user or 1 million users without a rewrite. Scale-ready from the first line of code." },
              { icon: Users,      title: "Transparent Collaboration", desc: "You have direct access to your developers in a shared Slack channel. No account managers, no telephone game — just your team and ours." },
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
              SaaS Development — <br className="sm:hidden" />Common Questions
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
            Let&apos;s Build Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-300">
              SaaS Product
            </span>
          </h2>
          <p className="text-white/50 text-sm sm:text-base mb-8 max-w-md mx-auto leading-relaxed">
            Share your idea — we will scope your MVP, estimate the cost and timeline,
            and walk you through exactly how we will build and grow it. Free, no obligation.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-5">
            <Link href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-gray-950 font-black px-8 py-4 rounded-2xl hover:-translate-y-0.5 transition-all shadow-2xl shadow-amber-500/20 text-sm group">
              <Zap className="w-4 h-4" />
              Discuss Your SaaS Idea
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a href={`tel:${PHONE}`}
              className="inline-flex items-center justify-center gap-2 border border-white/10 text-white/80 font-semibold px-8 py-4 rounded-2xl hover:bg-white/5 hover:border-white/20 transition-all text-sm">
              <Phone className="w-4 h-4 text-amber-400 flex-shrink-0" /> {PHONE_DISP}
            </a>
          </div>
          <p className="text-white/25 text-xs">
            Free scoping call · No commitment · Response within 4 hours
          </p>
        </div>
      </section>
    </>
  );
}