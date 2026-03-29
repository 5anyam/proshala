// app/services/shopping-ads/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import {
  ShoppingBag, Tag, TrendingUp, BarChart3, CheckCircle,
  ArrowRight, Phone, ChevronRight,
  Star, RefreshCw, Target, Zap, Package, Filter, DollarSign,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Google Shopping Ads Agency India | Product Listing Ads | Proshala",
  description:
    "Drive e-commerce sales with Google Shopping Ads. Product listing campaigns with price, image, and ratings shown directly in search results — managed by Proshala, Delhi NCR.",
  keywords: [
    "Google Shopping Ads India",
    "product listing ads agency India",
    "PLA ads management Delhi",
    "Shopping campaign management India",
    "ecommerce Google Ads Delhi NCR",
    "Merchant Centre management India",
    "Google Shopping ROAS optimisation",
    "feed optimisation agency India",
  ],
  alternates: { canonical: "https://proshala.com/services/shopping-ads" },
  openGraph: {
    title: "Google Shopping Ads Agency India | Proshala",
    description:
      "Product listing campaigns with feed optimisation, Merchant Centre management, and ROAS-first bidding. Free Shopping Ads audit available.",
    url: "https://proshala.com/services/shopping-ads",
    siteName: "Proshala",
    type: "website",
  },
};

const PHONE      = "+919999774046";
const PHONE_DISP = "+91 99997 74046";

// ─── Data ─────────────────────────────────────────────────────────────────────
const services = [
  {
    icon: Package,
    title: "Product Feed Optimisation",
    desc: "Title, description, category, and GTIN optimised in your Merchant Center feed — the #1 factor in Shopping ad performance.",
  },
  {
    icon: Target,
    title: "Smart Shopping Campaigns",
    desc: "Google's AI-powered campaigns that automatically optimise bids and placements across Search, Display, YouTube, and Gmail.",
  },
  {
    icon: Filter,
    title: "Standard Shopping Setup",
    desc: "Manual campaign structure with product group segmentation for full control over bids by category, brand, or margin.",
  },
  {
    icon: RefreshCw,
    title: "Remarketing Lists (RLSA)",
    desc: "Higher bids for past visitors and cart abandoners — the highest-converting audience segment in any Shopping account.",
  },
  {
    icon: BarChart3,
    title: "Competitor Price Tracking",
    desc: "Benchmark your product prices against competitors in real time and adjust bids to consistently win the Shopping Box.",
  },
  {
    icon: Star,
    title: "Merchant Centre Management",
    desc: "Feed error resolution, product disapprovals, and rating management to keep every product eligible and visible.",
  },
];

const stats = [
  { value: "76%",  label: "Of retail search clicks go to Shopping" },
  { value: "30%",  label: "Higher CTR vs text ads for products" },
  { value: "2×",   label: "Higher purchase intent than Search" },
  { value: "↑25%", label: "Avg. ROAS improvement in 60 days" },
];

const whyShopping = [
  {
    icon: ShoppingBag,
    title: "Visuals Before the Click",
    desc: "Product image, price, brand, and ratings all shown in the search result — buyers pre-qualify themselves before they land on your site.",
  },
  {
    icon: DollarSign,
    title: "Lowest CPA in E-commerce",
    desc: "Shopping Ads consistently deliver lower cost-per-acquisition than branded Search campaigns for most product categories.",
  },
  {
    icon: TrendingUp,
    title: "Intent at Its Peak",
    desc: "Shoppers searching product terms are at the bottom of the funnel — ready to buy, not just browsing. Shopping captures them first.",
  },
  {
    icon: Zap,
    title: "Feed Powers Everything",
    desc: "A well-optimised product feed improves both Shopping Ads and free product listings in Google Search — double the visibility.",
  },
];

const process = [
  {
    step: "01",
    title: "Merchant Centre Audit",
    desc: "We audit your product feed, fix all disapprovals, and ensure every product is eligible and correctly categorised before spending a rupee.",
  },
  {
    step: "02",
    title: "Feed Optimisation",
    desc: "Product titles, descriptions, and categories rewritten with high-intent keywords shoppers actually search — the biggest ROAS lever.",
  },
  {
    step: "03",
    title: "Campaign Launch",
    desc: "Campaigns structured by product category with separate ad groups for top sellers, high-margin items, and clearance inventory.",
  },
  {
    step: "04",
    title: "Bid & Feed Optimisation",
    desc: "Weekly bid adjustments per product group, negative keyword additions, and feed updates as your inventory and pricing changes.",
  },
];

const faqs = [
  {
    q: "Do I need a website to run Shopping Ads?",
    a: "Yes — Google Shopping Ads require a live e-commerce website with individual product pages, a return policy page, and secure checkout. We help you ensure your site meets all Merchant Centre requirements before campaign launch so nothing holds up your ads.",
  },
  {
    q: "What's the difference between Smart Shopping and Standard Shopping?",
    a: "Smart Shopping uses Google's machine learning to automatically optimise bids and placements across all Google networks. Standard Shopping gives you manual control over bids by product group. We typically start with Standard Shopping to gather data, then layer in Smart Shopping for scaling top-performing products.",
  },
  {
    q: "My products keep getting disapproved — can you fix it?",
    a: "Yes. Product disapprovals are one of the most common Shopping Ads issues and almost always fixable. Common causes include missing GTINs, mismatched prices, landing page issues, or restricted categories. We audit your full feed, identify every disapproval reason, and resolve them within 3–5 business days.",
  },
  {
    q: "Can Shopping Ads work for Indian e-commerce brands?",
    a: "Absolutely. Google Shopping is fully available in India and works excellently for fashion, electronics, home goods, health, and most product categories. We have managed Shopping campaigns for Indian D2C brands with significant ROAS improvements over brand-bidding and general Search campaigns.",
  },
  {
    q: "How much ad spend do I need for Shopping Ads to work?",
    a: "We recommend a minimum of ₹20,000–₹30,000/month in Shopping ad spend to gather enough data for meaningful optimisation. Smaller catalogues with focused product selection can work at lower budgets. We help you prioritise which products to run first based on margin, competition, and search volume.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Google Shopping Ads",
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
    "Google Shopping Ads management including product feed optimisation, Merchant Centre management, Smart and Standard Shopping campaigns, and ROAS-first bidding strategy.",
  areaServed: [
    { "@type": "Country", name: "India" },
    { "@type": "City",    name: "Delhi" },
    { "@type": "City",    name: "Sonipat" },
    { "@type": "Country", name: "United States" },
    { "@type": "Country", name: "United Kingdom" },
  ],
  serviceType: "Digital Marketing",
  url: "https://proshala.com/services/shopping-ads",
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
    { "@type": "ListItem", position: 1, name: "Home",         item: "https://proshala.com" },
    { "@type": "ListItem", position: 2, name: "Services",     item: "https://proshala.com/services" },
    { "@type": "ListItem", position: 3, name: "Google Ads",   item: "https://proshala.com/services/google-ads" },
    { "@type": "ListItem", position: 4, name: "Shopping Ads", item: "https://proshala.com/services/shopping-ads" },
  ],
};

export default function ShoppingAdsPage() {
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
            <Link href="/services/google-ads" className="hover:text-amber-400 transition-colors">Google Ads</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-white/55">Shopping Ads</span>
          </nav>

          <div className="max-w-3xl pb-16 lg:pb-20" style={{ animation: "heroFadeIn 0.7s ease both" }}>
            <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 rounded-full px-4 py-1.5 mb-6">
              <ShoppingBag className="w-3.5 h-3.5 text-amber-400" />
              <span className="text-amber-400 text-xs font-bold tracking-wide uppercase">
                Google Shopping · Product Listing Ads · E-commerce
              </span>
            </div>

            <h1 className="text-[36px] sm:text-5xl lg:text-[56px] font-black leading-[1.05] tracking-tight mb-5">
              <span className="text-white">Show Your Products</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500">
                Before Competitors
              </span>
            </h1>

            <p className="text-white/55 text-base sm:text-lg leading-relaxed mb-4 max-w-xl">
              Google Shopping Ads show your product image, price, and brand
              directly in search results — before the buyer even clicks. Proshala
              manages your feed and campaigns to{" "}
              <strong className="text-white">
                maximise ROAS and product visibility.
              </strong>
            </p>
            <p className="text-white/35 text-sm leading-relaxed mb-8 max-w-xl">
              Feed optimisation, Merchant Centre management, and bid strategy —
              everything needed to win the{" "}
              <strong className="text-amber-400">Shopping Box consistently.</strong>
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-gray-950 font-black px-7 py-4 rounded-2xl hover:-translate-y-0.5 transition-all shadow-2xl shadow-amber-500/25 text-sm group"
              >
                Start Shopping Ads
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
                "Feed Optimisation Included",
                "Merchant Centre Setup",
                "Disapproval Fixes",
                "Weekly Reports",
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
                <div className="text-2xl sm:text-3xl font-black text-white mb-1 group-hover:text-amber-400 transition-colors">
                  {value}
                </div>
                <div className="text-xs text-white/35 font-medium leading-relaxed">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ──────────────────────────────────────────────────── */}
      <section className="py-16 lg:py-20 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
              <span className="text-amber-500 font-semibold text-xs uppercase tracking-[0.16em]">What is Included</span>
              <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-3">
              Feed, Campaigns &{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-400">
                Everything In Between
              </span>
            </h2>
            <p className="text-white/40 text-sm max-w-md mx-auto">
              Feed management, campaign setup, and ongoing optimisation — all in one package.
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

      {/* ── WHY SHOPPING ADS ──────────────────────────────────────────── */}
      <section className="py-14 bg-[#0D0D0D] border-y border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
              <span className="text-amber-500 font-semibold text-xs uppercase tracking-[0.16em]">Why Shopping Ads</span>
              <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-3">
              The Best Channel for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-400">
                E-commerce Growth
              </span>
            </h2>
            <p className="text-white/40 text-sm max-w-md mx-auto">
              No other format shows product, price, and brand before the click — Shopping Ads are uniquely powerful.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {whyShopping.map(({ icon: Icon, title, desc }, i) => (
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
              From Feed Audit to{" "}
              <span className="text-amber-400">Maximum ROAS</span>
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
              Shopping Ads —{" "}
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
            Put Your Products{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-300">
              in Front of Buyers
            </span>
          </h2>
          <p className="text-white/50 text-sm sm:text-base mb-8 max-w-md mx-auto leading-relaxed">
            Free Shopping Ads audit — we will check your Merchant Centre feed
            health, identify disapprovals, and show you exactly where your ROAS
            is leaking.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-5">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-gray-950 font-black px-8 py-4 rounded-2xl hover:-translate-y-0.5 transition-all shadow-2xl shadow-amber-500/20 text-sm group"
            >
              <ShoppingBag className="w-4 h-4" />
              Get Free Shopping Audit
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
            Free audit · No commitment · Feed health report within 48 hours
          </p>
        </div>
      </section>
    </>
  );
}