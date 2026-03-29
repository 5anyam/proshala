// app/services/youtube-ads/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import {
  ChevronRight, ArrowRight, Phone, CheckCircle,
  Zap, BarChart3, Shield, TrendingUp,
  Target, Play, Eye, Users, Clock,
  Star, Settings, Video, Tv,
} from "lucide-react";

export const metadata: Metadata = {
  title: "YouTube Ads Services India | Video Advertising & YouTube Marketing | Proshala",
  description:
    "Expert YouTube Ads management in India — In-Stream, Discovery, Bumper & Shorts ads. Google-certified team managing YouTube video campaigns that drive brand awareness, leads and sales.",
  keywords: [
    "YouTube ads services India",
    "YouTube advertising agency India",
    "YouTube video ads management India",
    "YouTube in-stream ads India",
    "YouTube bumper ads India",
    "YouTube ads agency Delhi NCR",
    "YouTube marketing India",
    "video advertising India",
    "YouTube lead generation India",
    "YouTube Shorts ads India",
  ],
  alternates: { canonical: "https://proshala.com/services/youtube-ads" },
  openGraph: {
    title: "YouTube Ads Services India | Proshala",
    description:
      "Google-certified YouTube Ads management — In-Stream, Discovery, Bumper & Shorts. Drive brand awareness and leads with video advertising from Proshala.",
    url: "https://proshala.com/services/youtube-ads",
    siteName: "Proshala",
    type: "website",
  },
};

const PHONE      = "+919999774046";
const PHONE_DISP = "+91 99997 74046";

// ─── Data ─────────────────────────────────────────────────────────────────────
const adFormats = [
  {
    icon: Play,
    title: "Skippable In-Stream Ads",
    tag: "Most Popular",
    tagClass: "bg-amber-500/10 border-amber-500/20 text-amber-400",
    desc: "Ads that play before or during YouTube videos. Viewers can skip after 5 seconds — you only pay when they watch 30s or interact.",
    points: [
      "Pay only for engaged views",
      "Full targeting — demographics, interests, keywords",
      "Ideal for brand storytelling & product demos",
      "Works with all budgets",
    ],
  },
  {
    icon: Tv,
    title: "Non-Skippable In-Stream Ads",
    tag: "Max Visibility",
    tagClass: "bg-orange-500/10 border-orange-500/20 text-orange-400",
    desc: "15-second ads viewers must watch completely — guaranteed 100% view-through for your message. Perfect for launches and brand awareness.",
    points: [
      "100% message delivery guaranteed",
      "CPM-based pricing",
      "Ideal for product launches",
      "Strong brand recall impact",
    ],
  },
  {
    icon: Video,
    title: "YouTube Shorts Ads",
    tag: "Trending",
    tagClass: "bg-violet-500/10 border-violet-500/20 text-violet-400",
    desc: "Vertical video ads in the YouTube Shorts feed — reach India's fastest-growing video audience with mobile-first creative.",
    points: [
      "Vertical 9:16 format",
      "Massive reach among 18–34 age group",
      "Lower CPM vs standard in-stream",
      "Ideal for product awareness & offers",
    ],
  },
  {
    icon: Eye,
    title: "In-Feed Video Ads",
    tag: "High Engagement",
    tagClass: "bg-sky-500/10 border-sky-500/20 text-sky-400",
    desc: "Ads that appear in YouTube search results and the homepage feed — viewers choose to click and watch, signalling high purchase intent.",
    points: [
      "Pay only when viewer clicks to watch",
      "Appears in YouTube search results",
      "Ideal for tutorials & comparisons",
      "High-intent audience targeting",
    ],
  },
  {
    icon: Zap,
    title: "Bumper Ads",
    tag: "Brand Recall",
    tagClass: "bg-emerald-500/10 border-emerald-500/20 text-emerald-400",
    desc: "Non-skippable 6-second ads — short, punchy messages designed to maximise brand recall at the lowest CPM on YouTube.",
    points: [
      "6 seconds — perfect for retargeting",
      "Lowest CPM format on YouTube",
      "Best for brand recall campaigns",
      "Pairs well with in-stream campaigns",
    ],
  },
  {
    icon: Target,
    title: "YouTube Remarketing",
    tag: "Highest ROI",
    tagClass: "bg-pink-500/10 border-pink-500/20 text-pink-400",
    desc: "Re-engage viewers who watched your videos, visited your website, or interacted with your channel — convert warm audiences.",
    points: [
      "Retarget website visitors via YouTube",
      "Audience from Google Ads lists",
      "Sequential ad storytelling",
      "Higher conversion vs cold audience",
    ],
  },
];

const services = [
  {
    icon: Settings,
    title: "Campaign Strategy & Setup",
    desc: "Full campaign architecture — ad formats, bidding strategy, targeting layers, and budget allocation built for your specific goal.",
    points: ["Goal-based campaign structure", "Audience research & segmentation", "Competitor ad analysis", "Budget & bid strategy planning"],
  },
  {
    icon: Users,
    title: "Advanced Audience Targeting",
    desc: "Reach the exact right people — custom intent, affinity, life events, remarketing, and customer match targeting.",
    points: ["Custom intent audiences", "In-market & affinity segments", "Customer match (email lists)", "YouTube channel remarketing"],
  },
  {
    icon: Video,
    title: "Video Creative Guidance",
    desc: "We brief, script, and guide your video creative for maximum ad performance — or work with your existing videos.",
    points: ["Hook script writing (0–5s)", "CTA placement guidance", "Thumbnail & title optimisation", "A/B creative testing"],
  },
  {
    icon: BarChart3,
    title: "Performance Optimisation",
    desc: "Weekly optimisation — placement exclusions, audience refinement, bid adjustments, and creative rotation.",
    points: ["Placement & site exclusions", "View-through conversion tracking", "Weekly performance review", "Monthly strategy report"],
  },
];

const process = [
  { step: "01", title: "Goal & Audience Discovery", desc: "We define your campaign goal (awareness, leads, sales), identify your target audience, and research competitor creatives." },
  { step: "02", title: "Campaign Architecture",     desc: "Build campaign structure — ad groups, formats, targeting layers, and bidding strategy. Full setup before a single rupee is spent." },
  { step: "03", title: "Launch & Optimise",         desc: "Campaigns go live. First 7 days are intensive — we monitor hourly, exclude bad placements, and adjust bids daily." },
  { step: "04", title: "Scale & Report",            desc: "Monthly performance reports with CPV, view rate, conversions, and recommendations. Scale what works, cut what doesn't." },
];

const results = [
  { metric: "₹0.15", label: "Average CPV",        sub: "Cost per view achieved" },
  { metric: "35%",   label: "Average view rate",  sub: "Industry avg is 25%" },
  { metric: "4×",    label: "ROAS on remarketing", sub: "Warm audience campaigns" },
  { metric: "2.8×",  label: "Brand recall lift",  sub: "vs no video ads" },
];

const whyUs = [
  { icon: Play,       title: "All Ad Formats",      desc: "In-Stream, Shorts, Bumper, In-Feed — we run and optimise all formats." },
  { icon: Target,     title: "Precision Targeting", desc: "Demographics, interests, custom intent, remarketing — pinpoint accuracy." },
  { icon: TrendingUp, title: "₹0.15 Avg CPV",       desc: "Industry-leading cost-per-view through smart bidding and targeting." },
  { icon: BarChart3,  title: "Monthly Reports",     desc: "Clear CPV, view rate, and conversion reports every month." },
  { icon: Shield,     title: "Brand Safety",        desc: "Exclusion lists to ensure your ads never appear on unsafe content." },
  { icon: Star,       title: "No Lock-in",          desc: "Month-to-month management — stay because of results, not contracts." },
];

const compareRows: [string, string, string, string][] = [
  ["Avg CPM India",       "₹40–80",    "₹200–500",   "₹60–150"],
  ["Brand awareness",     "✅ Best",   "⚠️ Limited",  "✅ Good"],
  ["Purchase intent",     "⚠️ Medium", "✅ Highest",  "⚠️ Medium"],
  ["Visual storytelling", "✅ Video",  "❌ Text only", "✅ Image/Video"],
  ["Remarketing",         "✅ Strong", "✅ Strong",   "✅ Strong"],
  ["Audience size",       "462M India","High intent", "500M+ India"],
];

const faqs = [
  {
    q: "How much does YouTube advertising cost in India?",
    a: "You can start YouTube Ads with as little as ₹500/day. CPV (cost per view) in India typically ranges from ₹0.10 to ₹0.50 depending on targeting and ad format. Our management fee is separate and based on your monthly ad spend.",
  },
  {
    q: "Do I need to produce a video before starting?",
    a: "Yes — YouTube Ads require video creative. We can guide you on exactly what to shoot (script, hook, CTA placement) and work with your existing videos if you have them. We also partner with video production agencies if you need end-to-end production.",
  },
  {
    q: "How is YouTube Ads different from Google Search Ads?",
    a: "Google Search Ads target people actively searching for your product — high intent, higher cost. YouTube Ads target people based on interests and behaviours — great for awareness, remarketing, and reaching audiences before they search. Both work best together.",
  },
  {
    q: "What video length works best for YouTube Ads?",
    a: "For skippable in-stream: deliver your key message in the first 5 seconds, keep total length 30–90 seconds. For bumper ads: 6 seconds max. For in-feed: 2–3 minutes works well. We guide you on the right length for each format.",
  },
  {
    q: "Can YouTube Ads generate leads directly?",
    a: "Yes. We use YouTube Ads with lead form extensions, send traffic to optimised landing pages, and set up view-through conversion tracking so you can see exactly how many leads came from your video ads.",
  },
  {
    q: "How long before I see results from YouTube Ads?",
    a: "Brand awareness results (views, impressions) are immediate. Lead and sales results typically take 2–4 weeks as the algorithm learns and we optimise placements and audiences. Remarketing campaigns usually show results faster.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "YouTube Ads Services",
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
    "Expert YouTube Ads management in India — In-Stream, Discovery, Bumper & Shorts ads. Google-certified team driving brand awareness, leads and sales through video advertising.",
  areaServed: [
    { "@type": "Country", name: "India" },
    { "@type": "City",    name: "Delhi" },
    { "@type": "City",    name: "Sonipat" },
    { "@type": "Country", name: "United States" },
    { "@type": "Country", name: "United Kingdom" },
  ],
  serviceType: "YouTube Advertising",
  url: "https://proshala.com/services/youtube-ads",
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
    { "@type": "ListItem", position: 1, name: "Home",        item: "https://proshala.com" },
    { "@type": "ListItem", position: 2, name: "Services",    item: "https://proshala.com/services" },
    { "@type": "ListItem", position: 3, name: "Google Ads",  item: "https://proshala.com/services/google-ads" },
    { "@type": "ListItem", position: 4, name: "YouTube Ads", item: "https://proshala.com/services/youtube-ads" },
  ],
};

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function YouTubeAdsPage() {
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
              <Link href="/services/google-ads" className="hover:text-amber-400 transition-colors">Google Ads</Link>
              <ChevronRight className="w-3 h-3" />
              <span className="text-white/55">YouTube Ads</span>
            </nav>

            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 rounded-full px-4 py-1.5 mb-6">
                <Play className="w-3.5 h-3.5 text-amber-400" />
                <span className="text-amber-400 text-xs font-bold tracking-wide uppercase">
                  YouTube Ads · In-Stream · Shorts · Bumper · Remarketing
                </span>
              </div>

              <h1 className="text-[38px] sm:text-5xl lg:text-[58px] font-black leading-[1.05] tracking-tight mb-5">
                <span className="text-white">YouTube Ads That</span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500">
                  Build Your Brand
                </span>
                <br />
                <span className="text-white">& Drive Real Leads</span>
              </h1>

              <p className="text-white/55 text-base sm:text-lg leading-relaxed mb-4 max-w-xl">
                India has 462 million YouTube users. Proshala helps your business reach the right ones —
                with the right video, at the right moment — through expertly managed YouTube Ads
                campaigns that build awareness and generate measurable ROI.
              </p>
              <p className="text-white/35 text-sm leading-relaxed mb-8 max-w-xl">
                Google-certified specialists. No lock-in contract.{" "}
                <strong className="text-amber-400">₹0.15 average CPV — we make every rupee count.</strong>
              </p>

              <div className="flex flex-col sm:flex-row gap-3 mb-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-gray-950 font-black px-7 py-4 rounded-2xl hover:-translate-y-0.5 transition-all shadow-2xl shadow-amber-500/25 text-sm group"
                >
                  Start YouTube Ads Campaign
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
                {["Google Certified", "₹0.15 Avg CPV", "All Ad Formats", "No Lock-in Contract"].map((b) => (
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

        {/* ══ AD FORMATS ════════════════════════════════════════════════ */}
        <section className="py-16 lg:py-20 bg-[#0A0A0A]">
          <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
                <span className="text-amber-500 font-semibold text-xs uppercase tracking-[0.16em]">Ad Formats</span>
                <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-3">
                Every YouTube Ad Format,{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-400">
                  Expertly Managed
                </span>
              </h2>
              <p className="text-white/40 text-sm max-w-xl mx-auto">
                We run all YouTube ad formats — and recommend the right mix based on your goal and budget.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {adFormats.map(({ icon: Icon, title, tag, tagClass, desc, points }, i) => (
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

        {/* ══ WHAT WE DO ════════════════════════════════════════════════ */}
        <section className="py-16 bg-[#0D0D0D] border-y border-white/[0.06]">
          <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
                <span className="text-amber-500 font-semibold text-xs uppercase tracking-[0.16em]">Our Services</span>
                <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-3">
                What is Included in Our{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-400">
                  YouTube Ads Management
                </span>
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {services.map(({ icon: Icon, title, desc, points }, i) => (
                <div
                  key={i}
                  className="bg-white/[0.025] border border-white/[0.07] rounded-2xl p-5 hover:border-amber-500/35 hover:-translate-y-1 transition-all group flex flex-col"
                  style={{ animation: `fadeSlideUp 0.5s ease ${i * 0.08}s both` }}
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
                Our YouTube Ads{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-400">
                  Launch Process
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
                  YouTube Ads Managed by{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-400">
                    Google-Certified Specialists
                  </span>
                </h2>
                <p className="text-white/45 text-sm leading-relaxed mb-6">
                  YouTube Ads are more than just uploading a video and pressing go. Targeting
                  the wrong audience, poor creative hooks, and bad bidding strategies waste
                  thousands of rupees. We have a certified team that manages every detail so your
                  budget goes to viewers most likely to convert.
                </p>
                <div className="space-y-3">
                  {[
                    "Google-certified YouTube Ads specialists",
                    "View-through conversion tracking setup",
                    "Creative hook scripting (first 5 seconds)",
                    "Placement exclusion to avoid wasted spend",
                    "Integrated with Google Search & Display",
                    "Transparent CPV, view rate & ROI reporting",
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
                <span className="text-amber-500 font-semibold text-xs uppercase tracking-[0.16em]">Channel Guide</span>
                <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-white">
                YouTube Ads vs{" "}
                <span className="text-amber-400">Other Ad Channels</span>
              </h2>
              <p className="text-white/40 text-sm mt-3">
                How YouTube stacks up against other paid advertising options.
              </p>
            </div>

            <div
              className="bg-white/[0.025] border border-white/[0.07] rounded-2xl overflow-hidden hover:border-amber-500/20 transition-colors"
              style={{ animation: "fadeSlideUp 0.6s ease 0.1s both" }}
            >
              <div className="grid grid-cols-4 bg-white/[0.03] border-b border-white/[0.07]">
                <div className="px-3 py-3 text-xs font-bold text-white/25 uppercase tracking-widest">Feature</div>
                <div className="px-3 py-3 text-xs font-bold text-amber-400 text-center uppercase tracking-widest">YouTube</div>
                <div className="px-3 py-3 text-xs font-bold text-white/40 text-center uppercase tracking-widest">Search</div>
                <div className="px-3 py-3 text-xs font-bold text-white/40 text-center uppercase tracking-widest">Meta Ads</div>
              </div>
              {compareRows.map(([feature, yt, gs, meta], i) => (
                <div
                  key={i}
                  className={`grid grid-cols-4 border-b border-white/[0.05] last:border-0 hover:bg-white/[0.02] transition-colors ${
                    i % 2 === 0 ? "" : "bg-white/[0.01]"
                  }`}
                >
                  <div className="px-3 py-3 text-xs font-medium text-white/60">{feature}</div>
                  <div className="px-3 py-3 text-xs text-white/55 text-center">{yt}</div>
                  <div className="px-3 py-3 text-xs text-white/55 text-center">{gs}</div>
                  <div className="px-3 py-3 text-xs text-white/55 text-center">{meta}</div>
                </div>
              ))}
            </div>
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
                YouTube Ads —{" "}
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
              Ready to Reach{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-300">
                462 Million YouTube Users?
              </span>
            </h2>
            <p className="text-white/50 text-sm sm:text-base mb-8 max-w-md mx-auto leading-relaxed">
              Free consultation — we will audit your existing campaigns or build a fresh
              YouTube Ads strategy tailored to your business and budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center mb-5">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-gray-950 font-black px-8 py-4 rounded-2xl hover:-translate-y-0.5 transition-all shadow-2xl shadow-amber-500/20 text-sm group"
              >
                <Play className="w-4 h-4" />
                Start YouTube Ads Campaign
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
              Free consultation · No lock-in · Strategy + quote within 24 hours
            </p>
          </div>
        </section>

      </div>
    </>
  );
}