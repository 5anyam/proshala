"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  CheckCircle,
  Calendar,
  TrendingUp,
  Users,
  Code,
  Megaphone,
  Globe,
  Sparkles,
  Mail,
  ChevronRight,
  ChevronLeft,
  Play,
  Award,
  Target,
  Zap,
} from "lucide-react";

const WP_API_URL = "https://cms.proshala.com/wp-json/wp/v2";

interface WordPressPost {
  id: number;
  date: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  slug: string;
  _embedded?: {
    "wp:featuredmedia"?: Array<{
      source_url: string;
      alt_text: string;
    }>;
    author?: Array<{ name: string }>;
  };
}

// Hero carousel slides with real business context [web:261][web:267]
const heroSlides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&q=80",
    title: "Data-Driven Digital Marketing",
    subtitle: "Transform your business with performance marketing strategies that deliver measurable ROI.",
    cta: "View Our Services",
    ctaLink: "/services",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80",
    title: "Build Websites That Convert",
    subtitle: "Lightning-fast, SEO-optimized websites built on Next.js, React, and WordPress for maximum impact.",
    cta: "See Portfolio",
    ctaLink: "/portfolio",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1920&q=80",
    title: "Scale with Performance Marketing",
    subtitle: "Google Ads, Meta Ads, LinkedIn campaigns optimized for ROAS—backed by transparent reporting.",
    cta: "Get Started",
    ctaLink: "/contact",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1920&q=80",
    title: "From Startup to Enterprise",
    subtitle: "Trusted by 80+ brands across Delhi NCR since 2020—helping businesses grow with full-funnel marketing.",
    cta: "Our Story",
    ctaLink: "/about",
  },
];

// Services data
const services = [
  {
    icon: Globe,
    title: "Website Development",
    description: "Conversion-first builds on Next.js, WordPress, React with Core Web Vitals optimization.",
    href: "/services/website-development",
  },
  {
    icon: TrendingUp,
    title: "Performance Marketing",
    description: "ROI-driven PPC, Meta Ads, Google Ads with measurable ROAS and funnel tracking.",
    href: "/services/performance-marketing",
  },
  {
    icon: Users,
    title: "Social Media Management",
    description: "Strategy, content calendars, community management across Instagram, LinkedIn, Twitter.",
    href: "/services/social-media-management",
  },
  {
    icon: Megaphone,
    title: "Influencer Marketing",
    description: "Creator partnerships with transparent KPIs and performance-driven campaigns.",
    href: "/services/influencer-marketing",
  },
  {
    icon: CheckCircle,
    title: "SEO & Content",
    description: "Technical SEO, topical authority, content depth that ranks and converts.",
    href: "/services/seo",
  },
  {
    icon: Sparkles,
    title: "Branding & Creatives",
    description: "Design systems, brand identity, motion graphics and visual storytelling.",
    href: "/services/branding",
  },
];

// Stats
const stats = [
  { label: "Years in Business", value: 6, suffix: "+" },
  { label: "Projects Delivered", value: 150, suffix: "+" },
  { label: "Happy Clients", value: 80, suffix: "+" },
  { label: "Team Members", value: 10, suffix: "" },
];

// Why Choose Us
const whyChoose = [
  {
    icon: Target,
    title: "Data-First Approach",
    description: "Every campaign is backed by analytics, A/B testing and clear performance metrics.",
  },
  {
    icon: Zap,
    title: "Speed to Market",
    description: "Rapid prototyping and agile execution from concept to launch in weeks, not months.",
  },
  {
    icon: Award,
    title: "Proven Track Record",
    description: "6 years of consistent results across 150+ projects in education, e-commerce, SaaS.",
  },
  {
    icon: Users,
    title: "Transparent Reporting",
    description: "Weekly dashboards, monthly reviews, and real-time access to campaign performance.",
  },
];

// Animated counter hook
function useCounter(end: number, isInView: boolean, duration = 2000) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, end, duration]);

  return count;
}

function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, "").substring(0, 150) + "...";
}
function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function HomePage() {
  const [latestBlogPosts, setLatestBlogPosts] = useState<WordPressPost[]>([]);
  const [isLoadingBlogs, setIsLoadingBlogs] = useState(true);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const res = await fetch(`${WP_API_URL}/posts?_embed&per_page=3`);
        if (res.ok) {
          const posts = await res.json();
          setLatestBlogPosts(posts);
        }
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setIsLoadingBlogs(false);
      }
    }
    fetchPosts();
  }, []);

  return (
    <>
      <HeroCarousel />
      <TrustedBySection />
      <ServicesSection />
      <WhyChooseSection />
      <StatsSection />
      <TestimonialsSection />
      <BlogSection posts={latestBlogPosts} isLoading={isLoadingBlogs} />
      <CTASection />
    </>
  );
}

// Full-width Hero Carousel [web:265][web:267]
function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === heroSlides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1));
    setIsAutoPlaying(false);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev === heroSlides.length - 1 ? 0 : prev + 1));
    setIsAutoPlaying(false);
  };

  return (
    <section className="relative h-[80vh] lg:h-[85vh] overflow-hidden">
      {/* Slides */}
      <div
        className="flex transition-transform duration-1000 ease-in-out h-full"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {heroSlides.map((slide) => (
          <div key={slide.id} className="w-full h-full flex-shrink-0 relative">
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-cover"
              priority={slide.id === 1}
              quality={90}
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />

            {/* Content */}
            <div className="absolute inset-0 flex items-center">
              <div className="container mx-auto max-w-7xl px-5">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="max-w-2xl"
                >
                  <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight">
                    {slide.title}
                  </h1>
                  <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
                    {slide.subtitle}
                  </p>
                  <Link
                    href={slide.ctaLink}
                    className="inline-flex items-center rounded-full bg-[#FACC15] px-8 py-4 font-bold text-black hover:bg-[#EAB308] transition-all hover:scale-105"
                  >
                    {slide.cta}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation arrows */}
      <button
        onClick={goToPrevious}
        className="absolute top-1/2 left-6 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-3 rounded-full transition-all z-10"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={goToNext}
        className="absolute top-1/2 right-6 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-3 rounded-full transition-all z-10"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentSlide(index);
              setIsAutoPlaying(false);
            }}
            className={[
              "w-3 h-3 rounded-full transition-all",
              index === currentSlide
                ? "bg-[#FACC15] scale-125"
                : "bg-white/50 hover:bg-white/80",
            ].join(" ")}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

// Trusted by section
function TrustedBySection() {
  return (
    <section className="py-12 bg-white dark:bg-black border-b border-gray-200 dark:border-gray-900">
      <div className="container mx-auto max-w-7xl px-5">
        <p className="text-center text-sm text-gray-600 dark:text-gray-400 mb-6 uppercase tracking-wide">
          Trusted by Leading Brands Across Delhi NCR
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 opacity-60">
          {/* Replace with actual client logos */}
          <div className="h-12 w-32 bg-gray-200 dark:bg-gray-800 rounded"></div>
          <div className="h-12 w-32 bg-gray-200 dark:bg-gray-800 rounded"></div>
          <div className="h-12 w-32 bg-gray-200 dark:bg-gray-800 rounded"></div>
          <div className="h-12 w-32 bg-gray-200 dark:bg-gray-800 rounded"></div>
          <div className="h-12 w-32 bg-gray-200 dark:bg-gray-800 rounded"></div>
        </div>
      </div>
    </section>
  );
}

// Services grid
function ServicesSection() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto max-w-7xl px-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            What We <span className="text-[#FACC15]">Do Best</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Full-funnel digital marketing services—from strategy to execution.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.a
              key={service.title}
              href={service.href}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-2xl bg-white dark:bg-black p-6 border border-gray-200 dark:border-gray-800 hover:border-[#FACC15] transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex items-start gap-4 mb-4">
                <span className="inline-flex size-12 items-center justify-center rounded-lg bg-[#FACC15]/20 text-[#FACC15]">
                  <service.icon className="h-6 w-6" />
                </span>
                <h3 className="text-xl font-bold group-hover:text-[#FACC15] transition-colors">
                  {service.title}
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                {service.description}
              </p>
              <ChevronRight className="absolute bottom-4 right-4 h-5 w-5 text-[#FACC15] opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

// Why choose us
function WhyChooseSection() {
  return (
    <section className="py-20 bg-white dark:bg-black">
      <div className="container mx-auto max-w-7xl px-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Why Choose <span className="text-[#FACC15]">Proshala</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Results-driven approach backed by proven systems and transparent reporting.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyChoose.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-[#FACC15]/20 text-[#FACC15] mb-4">
                <item.icon className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-bold mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Stats section
function StatsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-[#FACC15] to-[#EAB308]">
      <div className="container mx-auto max-w-6xl px-5">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-black mb-2">
                <CounterDisplay end={stat.value} isInView={isInView} />
                <span>{stat.suffix}</span>
              </div>
              <p className="text-gray-900">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CounterDisplay({ end, isInView }: { end: number; isInView: boolean }) {
  const count = useCounter(end, isInView);
  return <span>{count}</span>;
}

// Testimonials placeholder
function TestimonialsSection() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto max-w-7xl px-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Client <span className="text-[#FACC15]">Success Stories</span>
          </h2>
        </motion.div>
        <div className="text-center text-gray-500 dark:text-gray-400">
          Testimonials coming soon
        </div>
      </div>
    </section>
  );
}

// Blog section
function BlogSection({
  posts,
  isLoading,
}: {
  posts: WordPressPost[];
  isLoading: boolean;
}) {
  return (
    <section className="py-20 bg-white dark:bg-black">
      <div className="container mx-auto max-w-7xl px-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Latest <span className="text-[#FACC15]">Insights</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Marketing strategies, case studies, and industry updates.
          </p>
        </motion.div>

        {isLoading ? (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-[#FACC15]"></div>
          </div>
        ) : posts.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post, i) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group rounded-2xl overflow-hidden bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:border-[#FACC15] transition-all"
              >
                <Link href={`/${post.slug}`}>
                  <div className="aspect-video overflow-hidden bg-gray-200 dark:bg-gray-800">
                    {post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ? (
                      <img
                        src={post._embedded["wp:featuredmedia"][0].source_url}
                        alt={post.title.rendered}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <Calendar className="h-12 w-12 text-[#FACC15]" />
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                      <Calendar className="h-4 w-4 mr-2" />
                      {formatDate(post.date)}
                    </div>
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-[#FACC15] transition-colors line-clamp-2">
                      {post.title.rendered}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-3">
                      {stripHtml(post.excerpt.rendered)}
                    </p>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}

// CTA Section
function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-black to-gray-900">
      <div className="container mx-auto max-w-4xl px-5 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            Ready to <span className="text-[#FACC15]">Scale Your Business</span>?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Book a free strategy call and see how we can help you grow.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center rounded-full bg-[#FACC15] px-8 py-4 font-bold text-black hover:bg-[#EAB308] transition-all hover:scale-105"
          >
            <Mail className="mr-2 h-5 w-5" />
            Get in Touch
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
