// app/e-commerce-development/page.tsx
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  Mail,
  CheckCircle,
  ShoppingCart,
  TrendingUp,
  Zap,
  Shield,
  ArrowRight,
  ExternalLink,
  Star,
} from "lucide-react";

export const metadata: Metadata = {
  title: "E-Commerce Website Development Delhi NCR | Proshala - WooCommerce & Shopify Experts",
  description:
    "Professional e-commerce website development by Proshala. Custom WooCommerce, Shopify stores with payment gateway integration, SEO, mobile optimization. 8+ successful stores built. Call 9999774046",
  keywords:
    "e-commerce development Delhi, WooCommerce developer, Shopify expert, online store development, e-commerce website Delhi NCR, Proshala",
  openGraph: {
    title: "E-Commerce Website Development | Proshala",
    description: "Custom e-commerce stores with payment integration, SEO, mobile optimization",
    type: "website",
  },
};

const portfolioWebsites = [
  {
    name: "Edaperfumes.com",
    url: "https://edaperfumes.com",
    category: "Perfumes & Fragrances",
    description: "Premium perfume e-commerce store with 500+ products, Razorpay integration",
  },
  {
    name: "Amraj.in",
    url: "https://amraj.in",
    category: "Fashion & Apparel",
    description: "Fashion e-commerce with multi-vendor support and COD integration",
  },
  {
    name: "Caishenunited.com",
    url: "https://caishenunited.com",
    category: "Import & Export",
    description: "B2B e-commerce platform with bulk ordering and custom pricing",
  },
  {
    name: "Vyadhiharfoods.com",
    url: "https://vyadhiharfoods.com",
    category: "Health Foods",
    description: "Organic food store with subscription model and inventory management",
  },
  {
    name: "RKBookstore.com",
    url: "https://rkbookstore.com",
    category: "Books & Education",
    description: "Online bookstore with 1000+ titles and advanced search filters",
  },
  {
    name: "Sachdevamedline.com",
    url: "https://sachdevamedline.com",
    category: "Medical Equipment",
    description: "B2B medical equipment store with quote system and bulk ordering",
  },
  {
    name: "Atulyamedilinkpvtltd.shop",
    url: "https://atulyamedilinkpvtltd.shop",
    category: "Healthcare Products",
    description: "Healthcare product store with prescription upload and doctor consultation",
  },
];

const features = [
  {
    icon: ShoppingCart,
    title: "Custom E-Commerce Build",
    description: "WooCommerce, Shopify, or custom solutions tailored to your business needs",
  },
  {
    icon: Shield,
    title: "Secure Payment Integration",
    description: "Razorpay, PayU, CCAvenue, Stripe with PCI DSS compliance",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Core Web Vitals optimized for 2-3 second load times on mobile",
  },
  {
    icon: TrendingUp,
    title: "SEO & Marketing Ready",
    description: "Built-in SEO, GA4 tracking, Facebook Pixel, Google Shopping integration",
  },
];

const process = [
  "Discovery call to understand your products, target audience, payment needs",
  "Design mockups with 2 revisions based on your brand guidelines",
  "Development with WooCommerce/Shopify + payment gateway setup",
  "Product upload, testing, and launch with training & handover",
];

const stats = [
  { number: "8+", label: "E-Commerce Stores Built" },
  { number: "500K+", label: "Monthly Orders Processed" },
  { number: "99.9%", label: "Uptime Guarantee" },
  { number: "3 Weeks", label: "Average Launch Time" },
];

export default function EcommerceDevelopmentPage() {
  return (
    <>
      {/* Hero Section - Conversion Focused */}
      <section className="relative py-16 lg:py-20 bg-gradient-to-br from-[#FACC15] via-[#EAB308] to-[#CA8A04] overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at center, #000 1px, transparent 1px)",
              backgroundSize: "30px 30px",
            }}
          />
        </div>

        <div className="container mx-auto max-w-6xl px-5 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-black/20 text-black text-sm font-bold mb-4 uppercase tracking-wide">
                E-Commerce Development
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-black mb-6 leading-tight">
                Launch Your Online Store in 3 Weeks
              </h1>
              <p className="text-lg md:text-xl text-gray-900 mb-8 leading-relaxed">
                Custom WooCommerce & Shopify stores with payment gateway
                integration, mobile optimization, and SEO—built for Delhi NCR
                businesses. <strong>8+ successful stores launched since 2020.</strong>
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a
                  href="tel:9999774046"
                  className="inline-flex items-center justify-center rounded-full bg-black px-8 py-4 font-bold text-white hover:bg-gray-900 transition-all hover:scale-105 shadow-lg"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Call: 9999774046
                </a>
                <a
                  href="#portfolio"
                  className="inline-flex items-center justify-center rounded-full border-2 border-black px-8 py-4 font-bold text-black hover:bg-black hover:text-white transition-all"
                >
                  View Portfolio
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center gap-6 text-sm text-black">
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-current" />
                  <Star className="h-4 w-4 fill-current" />
                  <Star className="h-4 w-4 fill-current" />
                  <Star className="h-4 w-4 fill-current" />
                  <Star className="h-4 w-4 fill-current" />
                  <span className="ml-1 font-semibold">5.0 Rating</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4" />
                  <span className="font-semibold">8+ Stores Built</span>
                </div>
              </div>
            </div>

            {/* Stats Card */}
            <div className="rounded-2xl bg-white/90 backdrop-blur-sm p-8 shadow-2xl">
              <h3 className="text-2xl font-bold mb-6 text-center">
                Proven Track Record
              </h3>
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-[#FACC15] mb-1">
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-700">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-7xl px-5">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
              What You Get
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Enterprise-grade e-commerce features at startup-friendly pricing
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="rounded-xl border border-gray-200 bg-white p-6 hover:border-[#FACC15] hover:shadow-lg transition-all"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-[#FACC15]/20 text-[#FACC15] mb-4">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-16 bg-gray-50">
        <div className="container mx-auto max-w-7xl px-5">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
              Our E-Commerce <span className="text-[#FACC15]">Portfolio</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              8+ successful e-commerce stores built across perfumes, fashion, healthcare,
              books, and B2B industries. Check footer of these sites for Proshala
              attribution.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {portfolioWebsites.map((site, index) => (
              <div
                key={index}
                className="group rounded-xl border border-gray-200 bg-white p-6 hover:border-[#FACC15] hover:shadow-xl transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-bold mb-1 group-hover:text-[#FACC15] transition-colors">
                      {site.name}
                    </h3>
                    <span className="inline-block px-2 py-0.5 rounded-full bg-[#FACC15]/20 text-[#FACC15] text-xs font-semibold">
                      {site.category}
                    </span>
                  </div>
                  <a
                    href={site.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gray-100 hover:bg-[#FACC15] transition-colors"
                    aria-label={`Visit ${site.name}`}
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>

                <p className="text-sm text-gray-600 mb-4">{site.description}</p>

                <a
                  href={site.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#FACC15] hover:gap-3 transition-all"
                >
                  View Live Site
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-sm text-gray-600 mb-4">
              <strong>Verification:</strong> Visit any site above and check the footer
              section you will find Developed by Proshala or similar attribution.
            </p>
            <p className="text-lg font-semibold text-gray-900">
              Ready to join our portfolio of successful stores?
            </p>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-5xl px-5">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
              Our Process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From discovery to launch in 3-4 weeks with transparent milestones
            </p>
          </div>

          <div className="space-y-6">
            {process.map((step, index) => (
              <div
                key={index}
                className="flex items-start gap-4 rounded-xl border border-gray-200 bg-gray-50 p-6"
              >
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#FACC15] text-black font-bold flex-shrink-0">
                  {index + 1}
                </div>
                <p className="text-gray-700 leading-relaxed pt-1">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-black to-gray-900">
        <div className="container mx-auto max-w-4xl px-5 text-center">
          <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-6">
            Ready to Launch Your Online Store?
          </h3>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Book a free 30-minute consultation. We will discuss your products, target
            audience, payment needs, and provide a detailed quote.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href="tel:9999774046"
              className="inline-flex items-center justify-center rounded-full bg-[#FACC15] px-8 py-4 font-bold text-black hover:bg-[#EAB308] transition-all hover:scale-105 shadow-lg"
            >
              <Phone className="mr-2 h-5 w-5" />
              Call: 9999774046
            </a>
            <a
              href="mailto:hello@proshala.com"
              className="inline-flex items-center justify-center rounded-full border-2 border-white px-8 py-4 font-bold text-white hover:bg-white hover:text-black transition-all"
            >
              <Mail className="mr-2 h-5 w-5" />
              Email Us
            </a>
          </div>

          <p className="text-sm text-gray-400">
            Available Mon-Fri, 9AM-7PM IST | Free consultation • No hidden fees •
            Transparent pricing
          </p>
        </div>
      </section>
    </>
  );
}
