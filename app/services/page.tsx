// app/services/page.tsx
import { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Globe,
  TrendingUp,
  Users,
  Megaphone,
  CheckCircle,
  Sparkles,
  Mail,
  BarChart,
  Target,
  Zap,
  Shield,
  Award,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Digital Marketing Services - Proshala | Performance Marketing & Web Development",
  description:
    "Comprehensive digital marketing services by Proshala: Website development, performance marketing, SEO, social media management, branding. Serving Delhi NCR since 2020.",
  keywords:
    "digital marketing services Delhi, performance marketing, web development, SEO services, social media management, PPC agency, branding agency Delhi NCR",
};

const services = [
  {
    icon: Globe,
    title: "Website Development",
    description:
      "Conversion-first websites built on Next.js, React, WordPress with Core Web Vitals optimization. Lightning-fast, SEO-ready, mobile-responsive.",
    href: "/services/website-development",
    features: ["Next.js & React", "Core Web Vitals", "SEO Optimized", "Mobile First"],
  },
  {
    icon: TrendingUp,
    title: "Performance Marketing",
    description:
      "ROI-driven Google Ads, Meta Ads, LinkedIn campaigns with measurable ROAS. Transparent reporting, disciplined budgets, data-backed optimization.",
    href: "/services/performance-marketing",
    features: ["Google Ads", "Meta Ads", "ROAS Focused", "Transparent Reporting"],
  },
  {
    icon: Users,
    title: "Social Media Management",
    description:
      "Channel strategy, content calendars, community management across Instagram, LinkedIn, Twitter. Build engaged audiences that convert.",
    href: "/services/social-media-management",
    features: ["Content Strategy", "Community Mgmt", "Multi-Platform", "Analytics"],
  },
  {
    icon: Megaphone,
    title: "Influencer Marketing",
    description:
      "Creator partnerships tied to pipeline with transparent KPIs. Influencer discovery, negotiation, campaign execution, performance tracking.",
    href: "/services/influencer-marketing",
    features: ["Creator Network", "Campaign Mgmt", "Performance KPIs", "Authentic Reach"],
  },
  {
    icon: CheckCircle,
    title: "SEO & Content",
    description:
      "Technical SEO, topical authority, content depth that ranks and converts. Link building, on-page optimization, content strategy.",
    href: "/services/seo",
    features: ["Technical SEO", "Content Strategy", "Link Building", "Keyword Research"],
  },
  {
    icon: Sparkles,
    title: "Branding & Creatives",
    description:
      "Design systems, brand identity, motion graphics, visual storytelling. Logo design, brand guidelines, marketing collateral.",
    href: "/services/branding",
    features: ["Brand Identity", "Design Systems", "Motion Graphics", "Collateral Design"],
  },
  {
    icon: Mail,
    title: "Email & Automation",
    description:
      "Lifecycle journeys, CRM integrations, experimentation for sustained growth. Drip campaigns, segmentation, A/B testing.",
    href: "/services/automation",
    features: ["Lifecycle Emails", "CRM Integration", "Segmentation", "A/B Testing"],
  },
  {
    icon: BarChart,
    title: "Analytics & Reporting",
    description:
      "Attribution, dashboards, decision-ready insights. Google Analytics 4, Data Studio, custom tracking, conversion optimization.",
    href: "/services/analytics",
    features: ["GA4 Setup", "Custom Dashboards", "Attribution", "Conversion Tracking"],
  },
  {
    icon: Target,
    title: "CRO & Landing Pages",
    description:
      "Experiment-led landing pages and UX flows that lift conversion rates. Heatmaps, session recordings, multivariate testing.",
    href: "/services/cro",
    features: ["Landing Pages", "A/B Testing", "Heatmap Analysis", "UX Optimization"],
  },
];

const whyChoose = [
  {
    icon: Zap,
    title: "Speed to Market",
    description:
      "From brief to launch in weeks, not months. Agile sprints, rapid prototyping, fast iteration cycles.",
  },
  {
    icon: Shield,
    title: "Data-First Approach",
    description:
      "Every decision backed by analytics. A/B testing, cohort analysis, attribution modeling, performance metrics.",
  },
  {
    icon: Award,
    title: "Proven Results",
    description:
      "150+ successful campaigns since 2020. Average ROAS: 4.5x. Client retention: 2+ years.",
  },
  {
    icon: Users,
    title: "Transparent Reporting",
    description:
      "Weekly dashboards, monthly reviews, real-time campaign access. You own your data, always.",
  },
];

const industries = [
  "E-Commerce & Retail",
  "SaaS & Technology",
  "Education & EdTech",
  "Healthcare & Wellness",
  "Fintech & BFSI",
  "Real Estate",
  "Food & Beverage",
  "Professional Services",
];

const stats = [
  { number: "150+", label: "Projects Delivered" },
  { number: "80+", label: "Happy Clients" },
  { number: "6+", label: "Years in Business" },
  { number: "4.5x", label: "Avg. ROAS" },
];

export default function ServicesPage() {
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
              Our Services
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
              Full-Funnel{" "}
              <span className="text-[#FACC15]">Digital Marketing</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              From strategy to execution—performance marketing, web development,
              SEO, social media, and creative services that drive measurable growth
              for startups and enterprises.
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

      {/* Services Grid */}
      <section className="py-20 bg-white dark:bg-black">
        <div className="container mx-auto max-w-7xl px-5">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <article
                key={index}
                className="group rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 hover:border-[#FACC15] transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-[#FACC15]/20 text-[#FACC15] mb-4">
                  <service.icon className="h-6 w-6" />
                </div>

                <h3 className="text-xl font-bold mb-3 group-hover:text-[#FACC15] transition-colors">
                  {service.title}
                </h3>

                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                  {service.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {service.features.map((feature, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center text-xs px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                <Link
                  href={service.href}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#FACC15] hover:gap-3 transition-all"
                >
                  Learn More
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Proshala */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto max-w-7xl px-5">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
              Why Choose <span className="text-[#FACC15]">Proshala</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Results-driven approach backed by proven systems and transparent
              reporting.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChoose.map((item, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-[#FACC15]/20 text-[#FACC15] mb-4">
                  <item.icon className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 bg-white dark:bg-black">
        <div className="container mx-auto max-w-7xl px-5">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
              Industries We <span className="text-[#FACC15]">Serve</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              From funded startups to established enterprises across verticals.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-4 text-center hover:border-[#FACC15] transition-all"
              >
                <div className="h-2 w-2 rounded-full bg-[#FACC15] mx-auto mb-3" />
                <span className="text-sm font-medium">{industry}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#FACC15] to-[#EAB308]">
        <div className="container mx-auto max-w-4xl px-5 text-center">
          <h3 className="text-3xl md:text-4xl font-extrabold text-black mb-6">
            Ready to Scale Your Business?
          </h3>
          <p className="text-lg text-gray-900 mb-8 max-w-2xl mx-auto">
            Book a free 30-minute strategy call. No fluff—just honest recommendations
            on how we can help you grow.
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
              href="/portfolio"
              className="inline-flex items-center justify-center rounded-full border-2 border-black px-8 py-4 font-bold text-black hover:bg-black hover:text-white transition-all"
            >
              View Portfolio
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
