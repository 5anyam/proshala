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
  Package,
  CreditCard,
  Smartphone,
} from "lucide-react";

export const metadata: Metadata = {
  title: "E-Commerce Website Development Delhi NCR | Proshala - 80+ Stores Built Since 2020",
  description:
    "Professional e-commerce website development by Proshala. 80+ WooCommerce & Shopify stores built since 2020. Custom payment gateway integration, SEO, mobile optimization. Call 9999774046",
  keywords:
    "e-commerce development Delhi, WooCommerce developer, Shopify expert, online store development, e-commerce website Delhi NCR, Proshala",
  openGraph: {
    title: "E-Commerce Website Development | Proshala - 80+ Stores Built",
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
    image: "https://images.unsplash.com/photo-1587017539504-67cfbddac569?w=600&q=80",
  },
  {
    name: "Amraj.in",
    url: "https://amraj.in",
    category: "Health Supplements",
    description: "Health supplement e-commerce brand with subscription model and COD integration",
    image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=600&q=80",
  },
  {
    name: "Caishenunited.com",
    url: "https://caishenunited.com",
    category: "Mobile Accessories",
    description: "Mobile accessories brand with multi-variant products and bulk ordering",
    image: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=600&q=80",
  },
  {
    name: "Vyadhiharfoods.com",
    url: "https://vyadhiharfoods.com",
    category: "Health Foods",
    description: "Organic food store with subscription model and inventory management",
    image: "https://images.unsplash.com/photo-1490818387583-1baba5e638af?w=600&q=80",
  },
  {
    name: "RKBookstore.com",
    url: "https://rkbookstore.com",
    category: "Books & Education",
    description: "Online bookstore with 1000+ titles and advanced search filters",
    image: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=600&q=80",
  },
  {
    name: "Sachdevamedline.com",
    url: "https://sachdevamedline.com",
    category: "Medical Equipment",
    description: "B2B medical equipment store with quote system and bulk ordering",
    image: "https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?w=600&q=80",
  },
  {
    name: "Atulyamedilinkpvtltd.shop",
    url: "https://atulyamedilinkpvtltd.shop",
    category: "Cosmetic Brand",
    description: "Cosmetic brand store with product variations, shade selector, and beauty guides",
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&q=80",
  },
  {
    name: "Decorationcart.com",
    url: "https://decorationcart.com",
    category: "Event Planning",
    description: "Event planner e-commerce with custom packages, booking system, and vendor management",
    image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&q=80",
  },
  {
    name: "Mechweld.in",
    url: "https://mechweld.in",
    category: "Welding Equipment",
    description: "Welding machine manufacturer B2B store with technical specs and quote requests",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&q=80",
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
  {
    icon: Smartphone,
    title: "Mobile-First Design",
    description: "Responsive design optimized for mobile shopping experience",
  },
  {
    icon: Package,
    title: "Inventory Management",
    description: "Advanced stock management, low stock alerts, automated reordering",
  },
  {
    icon: CreditCard,
    title: "Multi-Currency Support",
    description: "International payment gateways and currency conversion",
  },
  {
    icon: CheckCircle,
    title: "Ongoing Support",
    description: "Post-launch maintenance, updates, and technical support",
  },
];

const process = [
  "Discovery call to understand your products, target audience, payment needs",
  "Design mockups with 2 revisions based on your brand guidelines",
  "Development with WooCommerce/Shopify + payment gateway setup",
  "Product upload, testing, and launch with training & handover",
];

const stats = [
  { number: "80+", label: "E-Commerce Stores Built" },
  { number: "500K+", label: "Monthly Orders Processed" },
  { number: "99.9%", label: "Uptime Guarantee" },
  { number: "3 Weeks", label: "Average Launch Time" },
];

export default function EcommerceDevelopmentPage() {
  return (
    <>
      {/* Hero Section with Background Image */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1920&q=80"
            alt="E-commerce development"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#FACC15] via-[#EAB308] to-[#CA8A04] opacity-95" />
        </div>

        <div className="container mx-auto max-w-6xl px-5 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-black/20 text-black text-sm font-bold mb-4 uppercase tracking-wide">
                E-Commerce Development Specialists
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-black mb-6 leading-tight">
                Launch Your Online Store in 3 Weeks
              </h1>
              <p className="text-lg md:text-xl text-gray-900 mb-8 leading-relaxed">
                Custom WooCommerce & Shopify stores with payment gateway
                integration, mobile optimization, and SEO. <strong>80+ successful
                e-commerce stores built since 2020</strong> across perfumes, supplements,
                cosmetics, books, medical equipment, and more.
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
              <div className="flex flex-wrap items-center gap-6 text-sm text-black">
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
                  <span className="font-semibold">80+ Stores Since 2020</span>
                </div>
              </div>
            </div>

            {/* Stats Card */}
            <div className="rounded-2xl bg-white/95 backdrop-blur-sm p-8 shadow-2xl">
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

      {/* Features Section with Icons */}
      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-7xl px-5">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
              Complete E-Commerce <span className="text-[#FACC15]">Solutions</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Enterprise-grade features at startup-friendly pricing—everything you need
              to sell online
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

      {/* Portfolio Section with Images */}
      <section id="portfolio" className="py-16 bg-gray-50">
        <div className="container mx-auto max-w-7xl px-5">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
              Our E-Commerce <span className="text-[#FACC15]">Portfolio</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              80+ successful e-commerce stores built since 2020 across perfumes,
              supplements, cosmetics, mobile accessories, books, medical equipment,
              event planning, and industrial machinery. Check footer of these sites for
              Proshala attribution.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {portfolioWebsites.map((site, index) => (
              <div
                key={index}
                className="group rounded-xl overflow-hidden border border-gray-200 bg-white hover:border-[#FACC15] hover:shadow-xl transition-all"
              >
                {/* Website Preview Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={site.image}
                    alt={site.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <span className="absolute top-3 right-3 inline-block px-3 py-1 rounded-full bg-[#FACC15] text-black text-xs font-bold">
                    {site.category}
                  </span>
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-bold group-hover:text-[#FACC15] transition-colors">
                      {site.name}
                    </h3>
                    <a
                      href={site.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gray-100 hover:bg-[#FACC15] transition-colors flex-shrink-0"
                      aria-label={`Visit ${site.name}`}
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>

                  <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                    {site.description}
                  </p>

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
              </div>
            ))}
          </div>

          <div className="text-center bg-white rounded-xl p-8 border border-gray-200">
            <p className="text-gray-700 mb-4 leading-relaxed">
              <strong>Verification:</strong> Visit any site above and scroll to the
              footer you will find <strong>Developed by Proshala</strong> or similar
              attribution on all our client websites.
            </p>
            <p className="text-lg font-bold text-gray-900">
              Ready to join our portfolio of 80+ successful stores?
            </p>
          </div>
        </div>
      </section>

      {/* Process Section with Visual Steps */}
      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-5xl px-5">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
              Our 4-Step Process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From discovery to launch in 3-4 weeks with transparent milestones and
              regular updates
            </p>
          </div>

          <div className="space-y-6">
            {process.map((step, index) => (
              <div
                key={index}
                className="flex items-start gap-4 rounded-xl border border-gray-200 bg-gray-50 p-6 hover:border-[#FACC15] transition-all"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#FACC15] text-black font-bold text-lg flex-shrink-0">
                  {index + 1}
                </div>
                <div>
                  <p className="text-gray-700 leading-relaxed text-lg">{step}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto max-w-7xl px-5">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative h-96 rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
                alt="E-commerce strategy"
                fill
                className="object-cover"
              />
            </div>

            <div>
              <h3 className="text-3xl font-bold mb-6">
                Why 80+ Businesses Trust Proshala
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-[#FACC15] flex-shrink-0 mt-1" />
                  <p className="text-gray-700">
                    <strong>Proven Expertise:</strong> 5 years building e-commerce
                    stores across 10+ industries
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-[#FACC15] flex-shrink-0 mt-1" />
                  <p className="text-gray-700">
                    <strong>Transparent Pricing:</strong> No hidden costs—fixed-price
                    packages with clear deliverables
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-[#FACC15] flex-shrink-0 mt-1" />
                  <p className="text-gray-700">
                    <strong>Post-Launch Support:</strong> 30-day free support, ongoing
                    maintenance packages available
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-[#FACC15] flex-shrink-0 mt-1" />
                  <p className="text-gray-700">
                    <strong>Scalable Solutions:</strong> Built to handle 10 orders/day
                    to 10,000 orders/day
                  </p>
                </div>
              </div>
            </div>
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
            audience, payment needs, and provide a detailed quote with timeline.
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
