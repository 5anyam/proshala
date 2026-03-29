// app/about/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import {
  Award, Users, TrendingUp, Shield, Target,
  CheckCircle, ArrowRight, Phone, ChevronRight,
  Zap, Globe, Heart, Star, BarChart3, Lightbulb,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Proshala | Performance Marketing & Tech Agency India",
  description:
    "Learn about Proshala — a Google certified performance marketing and tech agency based in Delhi NCR. ₹10Cr+ ad spend managed, 150+ clients scaled, and specialists in Google Ads, SEO, Automation & SaaS.",
  keywords:
    "about Proshala, performance marketing agency Delhi, Google Ads agency India, digital marketing agency Sonipat, tech agency Delhi NCR",
  alternates: {
    canonical: "https://proshala.com/about",
  },
};

const PHONE      = "+919999774046";
const PHONE_DISP = "+91 99997 74046";

// ─── Data ─────────────────────────────────────────────────────────────────────
const stats = [
  { value: "6+",     label: "Years Experience",  sub: "In performance marketing & tech" },
  { value: "150+",   label: "Clients Scaled",    sub: "Across India & internationally" },
  { value: "₹10Cr+", label: "Ad Spend Managed",  sub: "Across Google, Meta & more" },
  { value: "4×",     label: "Average ROAS",      sub: "Delivered to clients" },
];

const values = [
  {
    icon: Target,
    title: "ROI Obsessed",
    desc: "Every decision — channel, creative, bid, automation — is made with one question in mind: does this generate more return for our client?",
  },
  {
    icon: Shield,
    title: "Radical Transparency",
    desc: "You own your accounts, see every rupee spent, and get weekly reports in plain English. No smoke, no vanity metrics, no excuses.",
  },
  {
    icon: Lightbulb,
    title: "Always Testing",
    desc: "We run structured experiments across creatives, audiences, automations, and channels every week. Standing still is falling behind.",
  },
  {
    icon: Heart,
    title: "Client First",
    desc: "A named specialist on every account. No offshore handoffs, no ticket queues — real people who are genuinely invested in your growth.",
  },
  {
    icon: Globe,
    title: "Full Funnel Thinking",
    desc: "We don't just run ads — we think across traffic, automation, conversion, and retention to build growth engines that compound.",
  },
  {
    icon: TrendingUp,
    title: "Long-Term Focus",
    desc: "Quick wins matter. But we always build toward results that compound — systems, rankings, and audiences that grow your business for years.",
  },
];

const milestones = [
  {
    year: "2018",
    title: "Founded in Delhi NCR",
    desc: "Started as a boutique Google Ads consultancy serving local Delhi and Haryana businesses with performance-first campaigns.",
  },
  {
    year: "2019",
    title: "SEO & Content Practice",
    desc: "Expanded into technical SEO, content marketing, and organic growth — serving regional and national brands across India.",
  },
  {
    year: "2021",
    title: "Affiliate Marketing Launch",
    desc: "Built CPA, CPL, and CPS affiliate campaigns and crossed ₹3Cr in annual ad spend managed.",
  },
  {
    year: "2022",
    title: "Automation & SaaS Division",
    desc: "Launched business automation, AI tools, and SaaS product development as dedicated practice areas.",
  },
  {
    year: "2024",
    title: "AI Chatbots & Workflows",
    desc: "Expanded into GPT-4 chatbot development, workflow setup, and process consulting for growing businesses across India.",
  },
  {
    year: "2025",
    title: "Full-Stack Tech Agency",
    desc: "Complete digital agency — marketing, automation, AI, and full-stack web development — serving 150+ active clients.",
  },
];

const team = [
  {
    name: "Sanyam",
    role: "Founder & Head of Strategy",
    exp: "6+ years · Google Certified",
    initials: "S",
    color: "from-amber-500 to-yellow-500",
  },
  {
    name: "Vikram Sharma",
    role: "Head of SEO & Content",
    exp: "5 years · 80+ SEO Projects",
    initials: "VS",
    color: "from-orange-500 to-amber-600",
  },
  {
    name: "Priya Rawat",
    role: "Head of Paid Media",
    exp: "5 years · Google & Meta Certified",
    initials: "PR",
    color: "from-yellow-500 to-amber-500",
  },
  {
    name: "Aryan Gupta",
    role: "Head of Tech & Automation",
    exp: "4 years · Next.js & AI Tools",
    initials: "AG",
    color: "from-amber-600 to-orange-600",
  },
];

const services = [
  { name: "Google Ads",           href: "/services/google-ads" },
  { name: "SEO",                  href: "/services/seo" },
  { name: "Affiliate Marketing",  href: "/services/affiliate-marketing" },
  { name: "SaaS Tools",           href: "/services/saas-tools" },
  { name: "AI Chatbots",          href: "/services/ai-chatbots" },
  { name: "Business Automation",  href: "/services/business-automation" },
];

const certifications = [
  "Google Ads Certified Partner",
  "Google Analytics 4 Certified",
  "Meta Blueprint Certified",
  "HubSpot Inbound Marketing",
  "Semrush SEO Certified",
  "Google Cloud Fundamentals",
];

const faqs = [
  {
    q: "Where is Proshala based and do you work with clients outside Delhi NCR?",
    a: "Proshala is headquartered in Delhi NCR and actively works with clients in Sonipat, Gurgaon, Noida, and across India. We operate as a remote-first agency — all engagements are managed with weekly calls, live dashboards, and real-time reporting, regardless of where you are located.",
  },
  {
    q: "How is Proshala different from other digital marketing agencies?",
    a: "Three things set us apart. First, we combine marketing and technology — meaning we do not just run ads, we also build automations, AI tools, and SaaS products that compound your results. Second, every client gets a named senior specialist, not a rotating junior. Third, we have no lock-in contracts — we earn your business every single month.",
  },
  {
    q: "Do you work with early-stage startups or only established businesses?",
    a: "Both. We have worked with bootstrapped businesses on ₹15,000/month budgets and growth-stage companies spending ₹10L+/month. Our recommendations are always calibrated to your stage, budget, and goals — never a one-size-fits-all playbook.",
  },
  {
    q: "Can I see results or speak to existing clients before signing up?",
    a: "Absolutely. During our free audit call we share relevant case studies for your industry and budget range. For larger engagements, we can arrange client reference calls. We believe full transparency before any commitment is the only right way to start a relationship.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Proshala",
  url: "https://proshala.com",
  foundingDate: "2018",
  description:
    "Google certified performance marketing and technology agency based in Delhi NCR, India. Specialists in Google Ads, SEO, Affiliate Marketing, Business Automation, AI Tools, and SaaS Development.",
  areaServed: ["India", "UK", "UAE", "USA"],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Delhi",
    addressRegion: "Delhi NCR",
    addressCountry: "IN",
  },
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

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
            <span className="text-white/55">About Us</span>
          </nav>

          <div className="max-w-3xl pb-16 lg:pb-20" style={{ animation: "heroFadeIn 0.7s ease both" }}>
            <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 rounded-full px-4 py-1.5 mb-6">
              <Zap className="w-3.5 h-3.5 text-amber-400" />
              <span className="text-amber-400 text-xs font-bold tracking-wide">
                Founded 2018 · Delhi NCR · Google Certified Partner
              </span>
            </div>

            <h1 className="text-[36px] sm:text-5xl lg:text-[56px] font-black leading-[1.05] tracking-tight mb-5">
              <span className="text-white">We Are a Team That</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500">
                Lives for Your Growth
              </span>
            </h1>

            <p className="text-white/55 text-base sm:text-lg leading-relaxed mb-4 max-w-xl">
              Proshala is a performance marketing and technology agency founded in
              Delhi NCR in 2018. We have managed{" "}
              <strong className="text-white">₹10Cr+ in ad spend</strong>, scaled{" "}
              <strong className="text-white">150+ clients</strong>, and built a
              reputation for one thing: measurable results with zero fluff.
            </p>
            <p className="text-white/35 text-sm leading-relaxed mb-8 max-w-xl">
              From Google Ads and SEO to AI chatbots, SaaS tools, and business
              automation — we are the team businesses call when they want
              marketing and technology working together.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-gray-950 font-black px-7 py-4 rounded-2xl hover:-translate-y-0.5 transition-all shadow-2xl shadow-amber-500/25 text-sm group"
              >
                Work With Us
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
                "No Lock-in Contracts",
                "Dedicated Specialist",
                "Full Account Ownership",
                "Weekly Reporting",
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
            {stats.map(({ value, label, sub }, i) => (
              <div
                key={i}
                className="bg-white/[0.03] border border-white/[0.07] rounded-2xl p-5 text-center hover:border-amber-500/30 hover:-translate-y-0.5 transition-all group"
                style={{ animation: `fadeSlideUp 0.5s ease ${i * 0.07}s both` }}
              >
                <div className="text-2xl sm:text-3xl font-black text-white mb-1 group-hover:text-amber-400 transition-colors">
                  {value}
                </div>
                <div className="text-sm font-bold text-white/80">{label}</div>
                <div className="text-xs text-white/30 mt-0.5">{sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STORY ─────────────────────────────────────────────────────── */}
      <section className="py-14 lg:py-20 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            <div style={{ animation: "fadeSlideUp 0.6s ease both" }}>
              <div className="inline-flex items-center gap-2 mb-5">
                <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
                <span className="text-amber-500 font-semibold text-xs uppercase tracking-[0.16em]">Our Story</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-5">
                Built on a Simple{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-400">
                  Belief
                </span>
              </h2>
              <div className="space-y-4 text-white/50 text-sm sm:text-base leading-relaxed">
                <p>
                  Proshala was founded in 2018 by a team frustrated with one
                  thing: digital marketing agencies that chased impressions
                  instead of impact. We built this agency around the opposite
                  belief — that every rupee spent should be traceable to revenue.
                </p>
                <p>
                  We started with Google Ads for Delhi NCR and Haryana businesses.
                  Over six years, we grew into a full-service performance and
                  technology agency — covering SEO, Affiliate Marketing, AI Tools,
                  Business Automation, and SaaS Development — while staying
                  obsessed with the same core question:{" "}
                  <strong className="text-white">what actually moves the needle?</strong>
                </p>
                <p>
                  Today we work with 150+ clients across India and internationally.
                  We count ourselves as genuine growth partners — not vendors who
                  disappear after the invoice is paid.
                </p>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {services.map(({ name, href }) => (
                  <Link
                    key={name}
                    href={href}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-amber-400 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/20 px-3 py-1.5 rounded-full transition-colors"
                  >
                    {name}
                    <ChevronRight className="w-3 h-3" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Certifications card */}
            <div
              className="bg-white/[0.025] border border-white/[0.07] rounded-2xl p-6 sm:p-8 hover:border-amber-500/25 transition-colors"
              style={{ animation: "fadeSlideUp 0.6s ease 0.1s both" }}
            >
              <h3 className="font-black text-white text-base mb-5 flex items-center gap-2">
                <Award className="w-5 h-5 text-amber-400" />
                Certifications & Credentials
              </h3>
              <div className="space-y-3 mb-6">
                {certifications.map((cert, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-7 h-7 bg-amber-500/15 border border-amber-500/25 rounded-lg flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-3.5 h-3.5 text-amber-400" />
                    </div>
                    <span className="text-sm text-white/70 font-medium">{cert}</span>
                  </div>
                ))}
              </div>
              <div className="pt-5 border-t border-white/[0.06]">
                <div className="flex items-center gap-2 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                  ))}
                  <span className="text-xs font-black text-white ml-1">5.0</span>
                  <span className="text-xs text-white/35">· 80+ Google Reviews</span>
                </div>
                <p className="text-xs text-white/35 italic">
                  &quot;Proshala doubled our qualified leads in under 60 days without increasing our budget.&quot; — D2C Brand, Delhi
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── VALUES ────────────────────────────────────────────────────── */}
      <section className="py-14 bg-[#0D0D0D] border-y border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
              <span className="text-amber-500 font-semibold text-xs uppercase tracking-[0.16em]">Our Values</span>
              <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-2">
              What We{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-400">
                Stand For
              </span>
            </h2>
            <p className="text-white/35 text-sm max-w-md mx-auto">
              Six principles that shape every campaign, every report, and every client conversation.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {values.map(({ icon: Icon, title, desc }, i) => (
              <div
                key={i}
                className="bg-white/[0.025] border border-white/[0.07] rounded-2xl p-5 hover:border-amber-500/35 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-amber-500/5 transition-all duration-300 group"
                style={{ animation: `fadeSlideUp 0.6s ease ${i * 0.07}s both` }}
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

      {/* ── TIMELINE ──────────────────────────────────────────────────── */}
      <section className="py-14 lg:py-20 bg-[#0A0A0A]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
              <span className="text-amber-500 font-semibold text-xs uppercase tracking-[0.16em]">Since 2018</span>
              <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-400">
                Journey
              </span>
            </h2>
          </div>
          <div className="space-y-3">
            {milestones.map(({ year, title, desc }, i) => (
              <div
                key={i}
                className="flex gap-5 bg-white/[0.025] border border-white/[0.07] rounded-2xl p-5 hover:border-amber-500/30 transition-all group"
                style={{ animation: `fadeSlideUp 0.5s ease ${i * 0.08}s both` }}
              >
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className="w-14 h-9 bg-amber-500 text-gray-950 rounded-xl flex items-center justify-center font-black text-sm shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform">
                    {year}
                  </div>
                  {i < milestones.length - 1 && (
                    <div className="w-px flex-1 bg-gradient-to-b from-amber-500/30 to-transparent mt-2 min-h-[16px]" />
                  )}
                </div>
                <div className="pt-1">
                  <h3 className="font-bold text-white text-sm mb-1 group-hover:text-amber-400 transition-colors">
                    {title}
                  </h3>
                  <p className="text-white/45 text-xs sm:text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TEAM ──────────────────────────────────────────────────────── */}
      <section className="py-14 bg-[#0D0D0D] border-y border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
              <span className="text-amber-500 font-semibold text-xs uppercase tracking-[0.16em]">The Team</span>
              <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white mb-2">
              Senior Specialists —{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-400">
                On Every Account
              </span>
            </h2>
            <p className="text-white/35 text-sm max-w-md mx-auto">
              You will never be handed to a junior. The person who pitches is the person who executes.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {team.map(({ name, role, exp, initials, color }, i) => (
              <div
                key={i}
                className="bg-white/[0.025] border border-white/[0.07] rounded-2xl p-5 hover:border-amber-500/30 hover:-translate-y-1.5 transition-all duration-300 group text-center"
                style={{ animation: `fadeSlideUp 0.6s ease ${i * 0.08}s both` }}
              >
                <div
                  className={`w-14 h-14 bg-gradient-to-br ${color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-amber-500/15 group-hover:scale-110 transition-transform`}
                >
                  <span className="text-gray-950 font-black text-lg">{initials}</span>
                </div>
                <h3 className="font-black text-white text-sm mb-0.5 group-hover:text-amber-400 transition-colors">
                  {name}
                </h3>
                <p className="text-white/45 text-xs mb-3">{role}</p>
                <div className="inline-flex items-center gap-1 bg-white/[0.05] border border-white/[0.07] px-2.5 py-1 rounded-full">
                  <BarChart3 className="w-3 h-3 text-amber-400" />
                  <span className="text-[11px] font-medium text-white/40">{exp}</span>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-white/25 mt-6">
            + 8 more specialists across PPC, SEO, Content, Social, Automation, and Development
          </p>
        </div>
      </section>

      {/* ── FAQs ──────────────────────────────────────────────────────── */}
      <section className="py-14 bg-[#0A0A0A]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
              <span className="text-amber-500 font-semibold text-xs uppercase tracking-[0.16em]">FAQs</span>
              <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              Common{" "}
              <span className="text-amber-400">Questions</span>
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
            Ready to Work With a{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-300">
              Team That Delivers?
            </span>
          </h2>
          <p className="text-white/50 text-sm sm:text-base mb-8 max-w-md mx-auto leading-relaxed">
            Free audit — no obligation. We will review your current marketing and
            tech setup and show you exactly where you are leaving growth on the table.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-5">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-gray-950 font-black px-8 py-4 rounded-2xl hover:-translate-y-0.5 transition-all shadow-2xl shadow-amber-500/20 text-sm group"
            >
              <Zap className="w-4 h-4" />
              Get Free Audit
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
            No commitment · No charges · Just honest recommendations
          </p>
        </div>
      </section>
    </>
  );
}