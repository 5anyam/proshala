// app/portfolio/page.tsx
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Globe,
  ShoppingCart,
  TrendingUp,
  Users,
  Zap,
  ExternalLink,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Portfolio - Proshala | 150+ Projects Delivered Since 2020",
  description:
    "View our portfolio of 150+ successful projects: e-commerce stores, business websites, performance marketing campaigns, social media management, automation tools. Delhi NCR's trusted digital marketing agency.",
  keywords:
    "Proshala portfolio, digital marketing projects, website development portfolio, e-commerce projects Delhi, marketing campaigns, social media management",
};

// Portfolio data structure
const portfolioCategories = [
  {
    id: "ecommerce",
    icon: ShoppingCart,
    title: "E-Commerce Stores",
    description: "80+ online stores with payment integration, inventory management, SEO",
    color: "from-[#FACC15] to-[#EAB308]",
    projects: [
      {
        name: "Edaperfumes.com",
        url: "https://edaperfumes.com",
        category: "Perfumes & Fragrances",
        description: "Premium perfume e-commerce with 500+ SKUs, Razorpay integration, subscription model",
        metrics: ["500+ Products", "₹2L+ Monthly GMV", "3.2% Conversion Rate"],
        image: "https://images.unsplash.com/photo-1587017539504-67cfbddac569?w=600&q=80",
      },
      {
        name: "Amraj.in",
        url: "https://amraj.in",
        category: "Health Supplements",
        description: "Supplement brand with multi-variant products, COD integration, subscription plans",
        metrics: ["50+ Products", "₹1.5L+ Monthly Sales", "Subscription Model"],
        image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=600&q=80",
      },
      {
        name: "Caishenunited.com",
        url: "https://caishenunited.com",
        category: "Mobile Accessories",
        description: "Mobile accessories brand with bulk ordering, multi-currency support",
        metrics: ["200+ Products", "B2B & B2C", "International Shipping"],
        image: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=600&q=80",
      },
      {
        name: "Atulyamedilinkpvtltd.shop",
        url: "https://atulyamedilinkpvtltd.shop",
        category: "Cosmetics",
        description: "Cosmetic brand with shade selector, product variations, beauty guides",
        metrics: ["100+ Products", "Multi-variant", "Shade Selector"],
        image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&q=80",
      },
      {
        name: "Decorationcart.com",
        url: "https://decorationcart.com",
        category: "Event Planning",
        description: "Event decor e-commerce with custom packages, booking system",
        metrics: ["Custom Packages", "Booking System", "Vendor Integration"],
        image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&q=80",
      },
      {
        name: "Mechweld.in",
        url: "https://mechweld.in",
        category: "Industrial Equipment",
        description: "Welding machine manufacturer B2B store with technical specs, quote requests",
        metrics: ["B2B Platform", "Quote System", "Technical Specs"],
        image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&q=80",
      },
    ],
  },
  {
    id: "websites",
    icon: Globe,
    title: "Business Websites",
    description: "50+ corporate websites, landing pages, and service platforms",
    color: "from-blue-500 to-indigo-600",
    projects: [
      {
        name: "Proshala.com",
        url: "https://proshala.com",
        category: "Digital Marketing Agency",
        description: "Our own agency website built with Next.js 14, optimized for performance",
        metrics: ["Next.js 14", "90+ Lighthouse", "SEO Optimized"],
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
      },
      {
        name: "CSPKIndia.in",
        url: "https://cspkindia.in",
        category: "Company Secretary Services",
        description: "Professional CS services website with service catalog, blog, contact forms",
        metrics: ["22+ Services", "WordPress", "Lead Generation"],
        image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&q=80",
      },
      {
        name: "Education Platform",
        category: "EdTech",
        description: "Online course platform with video hosting, payment integration, student dashboard",
        metrics: ["50+ Courses", "1000+ Students", "LMS Integration"],
        image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=600&q=80",
      },
      {
        name: "Healthcare Clinic",
        category: "Healthcare",
        description: "Multi-location clinic website with appointment booking, doctor profiles",
        metrics: ["Online Booking", "Multi-location", "Patient Portal"],
        image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&q=80",
      },
    ],
  },
  {
    id: "marketing",
    icon: TrendingUp,
    title: "Marketing Campaigns",
    description: "30+ performance marketing campaigns with measurable ROI",
    color: "from-pink-500 to-rose-600",
    projects: [
      {
        name: "Fashion Brand - Meta Ads",
        category: "Apparel & Fashion",
        description: "Complete Meta Ads funnel for women's fashion brand targeting Delhi NCR",
        metrics: ["4.2x ROAS", "₹8L Ad Spend", "2500+ Orders"],
        image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&q=80",
      },
      {
        name: "Supplement Brand - Google Ads",
        category: "Health & Wellness",
        description: "Google Shopping + Search campaigns for health supplement brand",
        metrics: ["5.1x ROAS", "₹5L Ad Spend", "1800+ Conversions"],
        image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=600&q=80",
      },
      {
        name: "SaaS Product - LinkedIn Ads",
        category: "B2B SaaS",
        description: "Lead generation campaign targeting CTOs and VP Engineering in tech startups",
        metrics: ["150+ MQLs", "₹120 CPL", "3-month Campaign"],
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
      },
      {
        name: "Real Estate - Facebook Ads",
        category: "Real Estate",
        description: "Property listing ads with lead forms targeting Gurgaon buyers",
        metrics: ["300+ Leads", "₹2L Budget", "8% CTR"],
        image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=80",
      },
    ],
  },
  {
    id: "social-media",
    icon: Users,
    title: "Social Media Management",
    description: "20+ brands with consistent content strategy and community management",
    color: "from-purple-500 to-pink-600",
    projects: [
      {
        name: "Cosmetic Brand - Instagram",
        category: "Beauty & Cosmetics",
        description: "Complete Instagram strategy with UGC, influencer collabs, reels",
        metrics: ["12K to 45K Followers", "4.5% Engagement", "₹3L+ Sales/month"],
        image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&q=80",
      },
      {
        name: "Tech Startup - LinkedIn",
        category: "B2B SaaS",
        description: "Thought leadership content, founder posts, case studies on LinkedIn",
        metrics: ["5K+ Followers", "200K+ Impressions", "50+ Inbound Leads"],
        image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&q=80",
      },
      {
        name: "Restaurant Chain - Multi-Platform",
        category: "Food & Beverage",
        description: "Instagram, Facebook management with food photography, user reviews",
        metrics: ["3 Locations", "8K+ Followers", "₹2L+ Monthly Revenue"],
        image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&q=80",
      },
      {
        name: "Fitness Studio - Instagram Reels",
        category: "Fitness & Wellness",
        description: "High-engagement reels strategy with workout videos, transformations",
        metrics: ["15K+ Followers", "8% Engagement", "200+ Memberships"],
        image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&q=80",
      },
    ],
  },
  {
    id: "automation",
    icon: Zap,
    title: "Automation & Tools",
    description: "Custom automation solutions and internal SaaS tools",
    color: "from-green-500 to-teal-600",
    projects: [
      {
        name: "E-commerce Dashboard",
        category: "Internal Tool",
        description: "Real-time analytics dashboard for e-commerce clients with sales, traffic, conversions",
        metrics: ["Next.js + Supabase", "Real-time Data", "10+ Clients"],
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
      },
      {
        name: "Lead Management CRM",
        category: "Internal Tool",
        description: "Custom CRM for tracking leads from multiple channels with automated follow-ups",
        metrics: ["Node.js + React", "Email Automation", "WhatsApp Integration"],
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
      },
      {
        name: "Social Media Scheduler",
        category: "Internal Tool",
        description: "Multi-platform content scheduler with bulk upload, analytics, approval workflow",
        metrics: ["Instagram + Facebook", "20+ Clients", "Bulk Scheduling"],
        image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&q=80",
      },
    ],
  },
];

const stats = [
  { number: "150+", label: "Projects Delivered" },
  { number: "80+", label: "Happy Clients" },
  { number: "₹50L+", label: "Ad Spend Managed" },
  { number: "4.5x", label: "Average ROAS" },
];

export default function PortfolioPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at center, #FACC15 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        <div className="container mx-auto max-w-7xl px-5 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#FACC15]/20 text-[#FACC15] text-sm font-semibold mb-4 uppercase tracking-wide">
              Our Work
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
              150+ Projects Delivered{" "}
              <span className="text-[#FACC15]">Since 2020</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              From e-commerce stores to marketing campaigns—real results for real
              businesses across Delhi NCR and beyond.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-[#FACC15] mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Categories */}
      {portfolioCategories.map((category, catIndex) => (
        <section
          key={category.id}
          className={catIndex % 2 === 0 ? "py-20 bg-white" : "py-20 bg-gray-50"}
        >
          <div className="container mx-auto max-w-7xl px-5">
            {/* Category Header */}
            <div className="text-center mb-12">
              <div
                className={`inline-flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r ${category.color} text-white mb-4`}
              >
                <category.icon className="h-8 w-8" />
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
                {category.title}
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                {category.description}
              </p>
            </div>

            {/* Projects Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.projects.map((project, index) => (
                <div
                  key={index}
                  className="group rounded-xl overflow-hidden border border-gray-200 bg-white hover:border-[#FACC15] hover:shadow-xl transition-all"
                >
                  {/* Project Image */}
                  <div className="relative h-48 overflow-hidden bg-gray-100">
                    <Image
                      src={project.image}
                      alt={project.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <span className="absolute top-3 right-3 inline-block px-3 py-1 rounded-full bg-white/90 text-black text-xs font-bold">
                      {project.category}
                    </span>
                  </div>

                  {/* Project Details */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-lg font-bold group-hover:text-[#FACC15] transition-colors">
                        {project.name}
                      </h3>
                      {project.url && (
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gray-100 hover:bg-[#FACC15] transition-colors flex-shrink-0"
                          aria-label={`Visit ${project.name}`}
                        >
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      )}
                    </div>

                    <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Metrics */}
                    <div className="flex flex-wrap gap-2">
                      {project.metrics.map((metric, i) => (
                        <span
                          key={i}
                          className="inline-flex items-center gap-1 text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-700"
                        >
                          <CheckCircle className="h-3 w-3 text-green-500" />
                          {metric}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#FACC15] to-[#EAB308]">
        <div className="container mx-auto max-w-4xl px-5 text-center">
          <h3 className="text-3xl md:text-4xl font-extrabold text-black mb-6">
            Ready to Build Something Great?
          </h3>
          <p className="text-lg text-gray-900 mb-8 max-w-2xl mx-auto">
            Let us discuss your project and see how we can help you achieve your goals
            with proven strategies and execution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-black px-8 py-4 font-bold text-white hover:bg-gray-900 transition-all hover:scale-105"
            >
              Get in Touch
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-full border-2 border-black px-8 py-4 font-bold text-black hover:bg-black hover:text-white transition-all"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
