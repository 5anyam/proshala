// app/services/social-media-ads/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import {
  Share2, Target, TrendingUp, CheckCircle,
  ArrowRight, Phone, ChevronRight,
  BarChart3, Users, Zap, Play, Briefcase, Eye, DollarSign,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Social Media Ads Agency India | Paid Social | Proshala",
  description:
    "High-ROI social media advertising across Facebook, Instagram, LinkedIn, and YouTube. Expert paid social campaigns for lead generation, brand awareness, and e-commerce sales. Delhi NCR & Pan India.",
  keywords: [
    "social media ads agency India",
    "paid social agency Delhi",
    "Facebook ads agency India",
    "Instagram ads management India",
    "LinkedIn ads agency Delhi NCR",
    "YouTube ads management India",
    "social media advertising agency India",
    "paid social ROI Delhi",
  ],
  alternates: { canonical: "https://proshala.com/services/social-media-ads" },
  openGraph: {
    title: "Social Media Ads Agency India | Proshala",
    description:
      "Paid campaigns across Facebook, Instagram, LinkedIn, and YouTube — creative strategy, precise targeting, and weekly ROI reporting.",
    url: "https://proshala.com/services/social-media-ads",
    siteName: "Proshala",
    type: "website",
  },
};

const PHONE      = "+919999774046";
const PHONE_DISP = "+91 99997 74046";

// ─── Data ─────────────────────────────────────────────────────────────────────
const platforms = [
  {
    icon: Share2,
    title: "Facebook & Instagram",
    href: "/services/facebook-instagram-ads",
    desc: "Reach 500M+ Indian users with feed, Reels, Stories, and retargeting campaigns. Best for B2C lead gen and e-commerce brands.",
    badge: "Most Popular",
    iconColor: "text-pink-400",
    iconBg: "bg-pink-500/10 border-pink-500/15 group-hover:bg-pink-500/20",
    hoverBorder: "hover:border-pink-500/35",
    hoverText: "group-hover:text-pink-400",
    badgeClass: "bg-pink-500/10 border-pink-500/20 text-pink-400",
  },
  {
    icon: Briefcase,
    title: "LinkedIn Ads",
    href: "/services/linkedin-ads",
    desc: "Target C-suite, managers, and decision-makers by job title, industry, and company size. The best channel for B2B pipeline.",
    badge: "Best for B2B",
    iconColor: "text-sky-400",
    iconBg: "bg-sky-500/10 border-sky-500/15 group-hover:bg-sky-500/20",
    hoverBorder: "hover:border-sky-500/35",
    hoverText: "group-hover:text-sky-400",
    badgeClass: "bg-sky-500/10 border-sky-500/20 text-sky-400",
  },
  {
    icon: Play,
    title: "YouTube Ads",
    href: "/services/youtube-ads",
    desc: "Skippable, non-skippable, and Shorts ads to build brand awareness and retarget high-intent audiences at the lowest CPV.",
    badge: "Lowest CPV",
    iconColor: "text-red-400",
    iconBg: "bg-red-500/10 border-red-500/15 group-hover:bg-red-500/20",
    hoverBorder: "hover:border-red-500/35",
    hoverText: "group-hover:text-red-400",
    badgeClass: "bg-red-500/10 border-red-500/20 text-red-400",
  },
];

const services = [
  {
    icon: Target,
    title: "Audience Research",
    desc: "Custom, lookalike, and in-market audiences built from your CRM data and competitor research across every platform.",
  },
  {
    icon: Zap,
    title: "Creative Strategy",
    desc: "Ad copy, image, and video briefs designed for each platform's format — Reels, Stories, Carousels, and LinkedIn InMail.",
  },
  {
    icon: Users,
    title: "Lead Generation",
    desc: "Native lead forms on Meta and LinkedIn with CRM integration — zero friction, maximum volume at the lowest CPL.",
  },
  {
    icon: Share2,
    title: "Multi-Platform Retargeting",
    desc: "Cross-platform retargeting sequences that follow your warmest prospects across every social channel they use.",
  },
  {
    icon: BarChart3,
    title: "Unified Reporting",
    desc: "One dashboard covering all platforms — spend, CPL, ROAS, and conversions — every week, no spreadsheet digging.",
  },
  {
    icon: TrendingUp,
    title: "Budget Scaling",
    desc: "We identify winning ad sets early and scale budgets methodically — doubling down on what works, fast.",
  },
];

const stats = [
  { value: "4.9B",  label: "Social media users worldwide" },
  { value: "2.5hr", label: "Avg. time spent on social daily" },
  { value: "73%",   label: "Marketers say social ads are effective" },
  { value: "3×",    label: "Higher engagement vs organic posts" },
];

const whySocial = [
  {
    icon: Eye,
    title: "Where Attention Is",
    desc: "People spend 2.5 hours daily on social media — more than any other digital channel. Your brand needs to be there.",
  },
  {
    icon: Target,
    title: "Precision Targeting",
    desc: "Target by age, interest, job title, behaviour, or lookalike — no other medium lets you reach this precisely at this cost.",
  },
  {
    icon: DollarSign,
    title: "Lowest CPL Available",
    desc: "Native lead forms on Meta and LinkedIn remove landing page friction, cutting cost-per-lead by up to 60% vs website campaigns.",
  },
  {
    icon: TrendingUp,
    title: "Scalable on Demand",
    desc: "Unlike SEO, social ad results scale directly with budget. Find a winning audience today, 10× the spend next week.",
  },
];

const platformComparison = [
  { platform: "Facebook & Instagram", audience: "B2C, All ages",     strength: "Volume & retargeting",   cost: "Low–Medium" },
  { platform: "LinkedIn",             audience: "B2B professionals",  strength: "Decision-maker reach",   cost: "High CPC" },
  { platform: "YouTube",              audience: "All demographics",   strength: "Video storytelling",     cost: "Very Low CPV" },
];

const process = [
  {
    step: "01",
    title: "Platform Selection",
    desc: "We match your audience and offer to the right platform mix — not every business needs every channel from day one.",
  },
  {
    step: "02",
    title: "Creative & Copy",
    desc: "Platform-native creatives built for each format — what works on LinkedIn InMail is very different from Instagram Reels.",
  },
  {
    step: "03",
    title: "Launch & Test",
    desc: "Multiple audiences and creatives tested simultaneously. Data drives every decision from the very first week.",
  },
  {
    step: "04",
    title: "Optimise & Scale",
    desc: "Weekly optimisation, monthly budget reallocation across platforms based on where your cost per result is consistently lowest.",
  },
];

const faqs = [
  {
    q: "Which social media platform should I advertise on?",
    a: "It depends on your business type and target customer. B2C businesses selling to consumers benefit most from Facebook and Instagram. B2B companies targeting professionals should prioritise LinkedIn. Businesses with strong video content or looking for the lowest CPM should add YouTube. We recommend a platform mix after understanding your audience and margins.",
  },
  {
    q: "Can I run ads on multiple platforms simultaneously?",
    a: "Yes — and for most businesses, a multi-platform approach delivers better results than concentrating all budget in one place. We manage cross-platform campaigns with unified strategy and reporting so you always know the combined impact and per-platform ROI.",
  },
  {
    q: "How much should I spend on social media ads?",
    a: "We recommend starting with ₹20,000–₹30,000/month per platform to gather meaningful data. For multi-platform campaigns, ₹60,000–₹80,000/month total is a solid starting point. Budget scales up as we identify winning audiences and creatives across each channel.",
  },
  {
    q: "Do you create video ads and creatives?",
    a: "We provide creative strategy, scripts, ad copy, and static image design. For video ads, we work with your existing footage or provide a detailed brief for simple, high-performing videos you can shoot on a smartphone. Full video production is available as an add-on service.",
  },
  {
    q: "How quickly can I expect results from social media ads?",
    a: "Initial data and CPL benchmarks come within the first 7–14 days. Meaningful optimisation happens from week 3 onwards once the algorithms have gathered sufficient conversion data. Most accounts see their best performance at the 60–90 day mark when audiences, creatives, and bids are fully dialled in.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Social Media Ads",
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
    "Paid social media advertising across Facebook, Instagram, LinkedIn, and YouTube — audience research, creative strategy, lead generation, and unified ROAS reporting.",
  areaServed: [
    { "@type": "Country", name: "India" },
    { "@type": "City",    name: "Delhi" },
    { "@type": "City",    name: "Sonipat" },
    { "@type": "Country", name: "United States" },
    { "@type": "Country", name: "United Kingdom" },
  ],
  serviceType: "Digital Marketing",
  url: "https://proshala.com/services/social-media-ads",
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
    { "@type": "ListItem", position: 1, name: "Home",              item: "https://proshala.com" },
    { "@type": "ListItem", position: 2, name: "Services",          item: "https://proshala.com/services" },
    { "@type": "ListItem", position: 3, name: "Social Media Ads",  item: "https://proshala.com/services/social-media-ads" },
  ],
};

export default function SocialMediaAdsPage() {
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
            style={{ background: "radial-gradient(circle, rgba(236,72,153,0.05) 0%, transparent 70%)" }}
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
            <span className="text-white/55">Social Media Ads</span>
          </nav>

          <div className="max-w-3xl pb-16 lg:pb-20" style={{ animation: "heroFadeIn 0.7s ease both" }}>
            <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 rounded-full px-4 py-1.5 mb-6">
              <Share2 className="w-3.5 h-3.5 text-amber-400" />
              <span className="text-amber-400 text-xs font-bold tracking-wide uppercase">
                Facebook · Instagram · LinkedIn · YouTube
              </span>
            </div>

            <h1 className="text-[36px] sm:text-5xl lg:text-[56px] font-black leading-[1.05] tracking-tight mb-5">
              <span className="text-white">Social Ads That </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500">
                Fill Your Funnel
              </span>
            </h1>

            <p className="text-white/55 text-base sm:text-lg leading-relaxed mb-4 max-w-xl">
              4.9 billion people use social media. Proshala runs paid campaigns
              across the right platforms for your business — with creative
              strategy, precise targeting, and{" "}
              <strong className="text-white">ROI you can measure every week.</strong>
            </p>
            <p className="text-white/35 text-sm leading-relaxed mb-8 max-w-xl">
              One team. All platforms. Unified strategy and reporting — no more
              siloed agencies for{" "}
              <strong className="text-amber-400">each social channel.</strong>
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-gray-950 font-black px-7 py-4 rounded-2xl hover:-translate-y-0.5 transition-all shadow-2xl shadow-amber-500/25 text-sm group"
              >
                Get Free Strategy Call
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
              {["All Major Platforms", "Creative Strategy", "Weekly Reports", "No Lock-in"].map((b) => (
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

      {/* ── PLATFORMS ─────────────────────────────────────────────────── */}
      <section className="py-16 lg:py-20 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
              <span className="text-amber-500 font-semibold text-xs uppercase tracking-[0.16em]">Platforms We Manage</span>
              <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-3">
              Three Platforms,{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-400">
                One Strategy
              </span>
            </h2>
            <p className="text-white/40 text-sm max-w-md mx-auto">
              Each platform requires a distinct approach. We specialise in all three — not just Meta.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-5">
            {platforms.map(({ icon: Icon, title, href, desc, badge, iconColor, iconBg, hoverBorder, hoverText, badgeClass }, i) => (
              <Link
                key={i}
                href={href}
                className={`bg-white/[0.025] border border-white/[0.07] ${hoverBorder} rounded-2xl p-6 hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300 group block relative`}
                style={{ animation: `fadeSlideUp 0.6s ease ${i * 0.1}s both` }}
              >
                <div className={`absolute top-4 right-4 text-[10px] font-bold px-2.5 py-1 rounded-full border ${badgeClass}`}>
                  {badge}
                </div>
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

      {/* ── WHY SOCIAL ADS ────────────────────────────────────────────── */}
      <section className="py-14 bg-[#0D0D0D] border-y border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
              <span className="text-amber-500 font-semibold text-xs uppercase tracking-[0.16em]">Why Social Ads</span>
              <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-3">
              The Fastest Way to{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-400">
                Reach Your Audience
              </span>
            </h2>
            <p className="text-white/40 text-sm max-w-md mx-auto">
              Unmatched reach, precision targeting, and results that scale with your budget.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {whySocial.map(({ icon: Icon, title, desc }, i) => (
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

      {/* ── PLATFORM COMPARISON ───────────────────────────────────────── */}
      <section className="py-14 bg-[#0A0A0A]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
              <span className="text-amber-500 font-semibold text-xs uppercase tracking-[0.16em]">Platform Guide</span>
              <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              Which Platform Is{" "}
              <span className="text-amber-400">Right For You?</span>
            </h2>
          </div>

          <div
            className="bg-white/[0.025] border border-white/[0.07] rounded-2xl overflow-hidden hover:border-amber-500/20 transition-colors"
            style={{ animation: "fadeSlideUp 0.6s ease 0.1s both" }}
          >
            <div className="grid grid-cols-4 px-5 py-3 bg-white/[0.03] border-b border-white/[0.07]">
              {["Platform", "Audience", "Best Strength", "Cost"].map((h) => (
                <span key={h} className="text-[11px] font-bold text-white/25 uppercase tracking-widest">{h}</span>
              ))}
            </div>
            {platformComparison.map(({ platform, audience, strength, cost }, i) => (
              <div
                key={i}
                className={`grid grid-cols-4 px-5 py-4 items-center hover:bg-white/[0.02] transition-colors group ${
                  i < platformComparison.length - 1 ? "border-b border-white/[0.05]" : ""
                }`}
              >
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-amber-500 rounded-full flex-shrink-0 group-hover:scale-125 transition-transform" />
                  <span className="text-sm font-semibold text-white/80 group-hover:text-amber-400 transition-colors">
                    {platform}
                  </span>
                </div>
                <span className="text-xs text-white/45">{audience}</span>
                <span className="text-xs text-white/45">{strength}</span>
                <span className="text-xs text-amber-500 font-medium">{cost}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ──────────────────────────────────────────────────── */}
      <section className="py-14 lg:py-20 bg-[#0D0D0D] border-y border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
              <span className="text-amber-500 font-semibold text-xs uppercase tracking-[0.16em]">What is Included</span>
              <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white mb-3">
              One Team,{" "}
              <span className="text-amber-400">All Platforms</span>
            </h2>
            <p className="text-white/40 text-sm max-w-md mx-auto">
              Across all social platforms — unified strategy, unified reporting, unified results.
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
      <section className="py-14 lg:py-20 bg-[#0A0A0A]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
              <span className="text-amber-500 font-semibold text-xs uppercase tracking-[0.16em]">How We Work</span>
              <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              From Strategy to{" "}
              <span className="text-amber-400">Scaled Results</span>
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
      <section className="py-14 lg:py-20 bg-[#0D0D0D] border-y border-white/[0.06]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
              <span className="text-amber-500 font-semibold text-xs uppercase tracking-[0.16em]">FAQs</span>
              <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              Social Ads —{" "}
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
            Grow on Social —{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-300">
              With Results to Show
            </span>
          </h2>
          <p className="text-white/50 text-sm sm:text-base mb-8 max-w-md mx-auto leading-relaxed">
            Free social ads strategy call — we will identify the best platform
            mix for your business and estimate your potential CPL before you
            spend a single rupee.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-5">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-gray-950 font-black px-8 py-4 rounded-2xl hover:-translate-y-0.5 transition-all shadow-2xl shadow-amber-500/20 text-sm group"
            >
              <Share2 className="w-4 h-4" />
              Get Free Strategy Call
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
            Free strategy call · No commitment · Platform recommendation within 24 hours
          </p>
        </div>
      </section>
    </>
  );
}