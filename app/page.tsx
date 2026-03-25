"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import {
  ArrowRight, Phone, CheckCircle2, Star, Code2, Globe,
  ChevronRight, Calendar, BookOpen, Quote, Cpu,
  Target, Search, TrendingUp, Building2,
} from "lucide-react";
import WaveCanvas from "../components/Wavecanvas";

// ─── Types ────────────────────────────────────────────────────────────────────
interface WordPressPost {
  id: number; date: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  slug: string;
  _embedded?: { 'wp:featuredmedia'?: Array<{ source_url: string; alt_text: string }> };
}
const WP_API_URL = 'https://cms.proshala.com/wp-json/wp/v2';

// ─── Hooks ────────────────────────────────────────────────────────────────────
function useCountUp(end: number, duration = 2200, trigger = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!trigger) return;
    let s: number | null = null;
    const step = (ts: number) => {
      if (!s) s = ts;
      const p = Math.min((ts - s) / duration, 1);
      setCount(Math.floor((1 - Math.pow(1 - p, 3)) * end));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [end, duration, trigger]);
  return count;
}

function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

// ─── Animations ───────────────────────────────────────────────────────────────
function FadeUp({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const { ref, inView } = useInView(0.06);
  return (
    <div ref={ref} className={className} style={{
      opacity: inView ? 1 : 0,
      transform: inView ? "translateY(0)" : "translateY(40px)",
      transition: `opacity 0.9s cubic-bezier(0.22,1,0.36,1) ${delay}ms, transform 0.9s cubic-bezier(0.22,1,0.36,1) ${delay}ms`,
    }}>{children}</div>
  );
}

function FadeLeft({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const { ref, inView } = useInView(0.06);
  return (
    <div ref={ref} className={className} style={{
      opacity: inView ? 1 : 0,
      transform: inView ? "translateX(0)" : "translateX(-56px)",
      transition: `opacity 0.9s cubic-bezier(0.22,1,0.36,1) ${delay}ms, transform 0.9s cubic-bezier(0.22,1,0.36,1) ${delay}ms`,
    }}>{children}</div>
  );
}

function FadeRight({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const { ref, inView } = useInView(0.06);
  return (
    <div ref={ref} className={className} style={{
      opacity: inView ? 1 : 0,
      transform: inView ? "translateX(0)" : "translateX(56px)",
      transition: `opacity 0.9s cubic-bezier(0.22,1,0.36,1) ${delay}ms, transform 0.9s cubic-bezier(0.22,1,0.36,1) ${delay}ms`,
    }}>{children}</div>
  );
}

function ScaleIn({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const { ref, inView } = useInView(0.06);
  return (
    <div ref={ref} className={className} style={{
      opacity: inView ? 1 : 0,
      transform: inView ? "scale(1)" : "scale(0.9)",
      transition: `opacity 0.65s cubic-bezier(0.34,1.56,0.64,1) ${delay}ms, transform 0.65s cubic-bezier(0.34,1.56,0.64,1) ${delay}ms`,
    }}>{children}</div>
  );
}

// ─── Data ─────────────────────────────────────────────────────────────────────
const PHONE      = "+919999774046";
const PHONE_DISP = "+91 99997 74046";

const featureServices = [
  {
    icon: Cpu,
    tag: "AI & Automation",
    title: "Build Smarter Systems, Not Just Campaigns",
    desc: "We engineer AI-powered SaaS tools, chatbots, and marketing automation workflows that replace manual effort with intelligent systems — letting your business scale while you focus on growth.",
    points: ["Custom AI SaaS Development", "Marketing Workflow Automation", "AI Chatbot Integration", "Data Pipeline & API Setup"],
    href: "/services/automation",
    visual: "🤖",
  },
  {
    icon: Target,
    tag: "Performance Marketing",
    title: "Every Rupee Spent Must Return More",
    desc: "From CPA affiliate networks to Google Ads and global performance campaigns — we build revenue machines backed by real data, aggressive optimisation, and zero guesswork.",
    points: ["Affiliate Marketing (CPA/CPL/CPS)", "Google Ads & Brand Bidding", "Facebook & Instagram Ads", "International Campaign Execution"],
    href: "/services/performance-marketing",
    visual: "📈",
  },
  {
    icon: Code2,
    tag: "Web & App Development",
    title: "Fast, Scalable Tech That Converts",
    desc: "Our engineering team builds blazing-fast Next.js applications, WordPress sites, and custom SaaS platforms — all architected for performance, SEO, and conversion from day one.",
    points: ["Next.js & React Applications", "WordPress & WooCommerce", "Landing Page Development", "API Integrations & Backend"],
    href: "/services/website-development",
    visual: "⚡",
  },
];

const stats = [
  { value: 500, suffix: "+", label: "Campaigns Delivered" },
  { value: 150, suffix: "+", label: "Clients Scaled" },
  { value: 8,   suffix: "+", label: "Years of Expertise" },
  { value: 350, suffix: "%", label: "Average ROI" },
];

const testimonials = [
  { name: "Vikram Mehta",   role: "Founder, D2C Brand — Delhi",      rating: 5, text: "Proshala completely flipped our digital performance. Within 45 days, leads tripled and cost-per-acquisition dropped by half. Genuinely the best investment we made." },
  { name: "Divya Joshi",    role: "CEO, E-commerce Startup",         rating: 5, text: "Their affiliate strategies and brand bidding stopped competitors from stealing our traffic. ROAS jumped from 2x to over 6x in just a few weeks." },
  { name: "Manish Agarwal", role: "MD, Real Estate Group — Sonipat", rating: 5, text: "We scaled to UAE with their international campaigns and AI automation. 350% ROI in under 90 days — exceeded every expectation we had." },
  { name: "Kavya Reddy",    role: "Co-Founder, HealthTech SaaS",     rating: 5, text: "Best tech & performance team we have worked with. Deep product understanding, flawless Next.js builds, and reporting that is fully transparent." },
];

const techStack = [
  "Next.js", "React", "TypeScript", "WordPress", "Node.js",
  "OpenAI API", "Google Ads API", "Meta Ads API",
  "WooCommerce", "Tailwind CSS", "Vercel", "Railway",
];

const ticker = [
  "Performance Marketing", "Affiliate Marketing", "Ecommerce Growth", "AI SaaS Tools",
  "Business Automation", "Google Ads", "SEO", "Next.js Development",
  "CPA/CPL Campaigns", "D2C Scaling", "Brand Bidding", "WordPress",
];

const avatars = [
  "https://randomuser.me/api/portraits/men/32.jpg",
  "https://randomuser.me/api/portraits/women/44.jpg",
  "https://randomuser.me/api/portraits/men/68.jpg",
  "https://randomuser.me/api/portraits/women/17.jpg",
];

// ─── Sub-components ───────────────────────────────────────────────────────────
const Pill = ({ text }: { text: string }) => (
  <div className="inline-flex items-center gap-2 mb-5">
    <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
    <span className="text-amber-500 font-semibold text-xs uppercase tracking-[0.16em]">{text}</span>
    <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
  </div>
);

const StatItem = ({ value, suffix, label, trigger, delay = 0 }: {
  value: number; suffix: string; label: string; trigger: boolean; delay?: number;
}) => {
  const count = useCountUp(value, 2000, trigger);
  return (
    <div className="text-center group cursor-default">
      <div className="text-5xl sm:text-6xl lg:text-7xl font-black text-white tabular-nums group-hover:scale-105 transition-transform duration-300 leading-none">
        {count}<span className="text-amber-400">{suffix}</span>
      </div>
      <div className="text-white/40 text-xs uppercase tracking-widest font-semibold mt-3">{label}</div>
    </div>
  );
};

const Marquee = () => {
  const items = [...ticker, ...ticker, ...ticker, ...ticker];
  return (
    <div className="border-y border-white/[0.06] bg-[#0D0D0D] py-3.5 overflow-hidden select-none">
      <div className="flex gap-10 animate-marquee whitespace-nowrap w-max">
        {items.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-2.5 text-white/30 text-[10px] font-bold uppercase tracking-widest flex-shrink-0 hover:text-amber-400 transition-colors duration-200 cursor-default">
            <span className="w-1 h-1 bg-amber-500/50 rounded-full flex-shrink-0" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

function stripHtml(html: string) { return html.replace(/<[^>]*>/g, '').substring(0, 120) + '...'; }
function fmtDate(d: string) {
  return new Date(d).toLocaleDateString('en-IN', { year: 'numeric', month: 'short', day: 'numeric' });
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function HomePage() {
  const [posts, setPosts] = useState<WordPressPost[]>([]);
  const statsSection      = useInView(0.2);

  useEffect(() => {
    fetch(`${WP_API_URL}/posts?_embed&per_page=4`)
      .then(r => r.ok ? r.json() : []).then(setPosts).catch(() => {});
  }, []);

  return (
    <div className="bg-[#0A0A0A] text-white overflow-x-hidden">

      {/* ══════════════════════════════ HERO ══════════════════════════════ */}
      {/*
        FIX 1 — Removed min-h-[100svh] + items-center (caused massive top gap).
                 Now uses pt for navbar offset + natural content height.
        FIX 2 — Social proof card moved INSIDE the main card (not absolute).
        FIX 3 — Removed p-2 from gradient span (was adding weird extra height).
      */}
      <section className="relative flex items-center overflow-hidden bg-[#0A0A0A]
                           pt-24 pb-12 sm:pt-28 sm:pb-16 lg:pt-32 lg:pb-20">

        <WaveCanvas />

        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 85% 75% at 50% 55%, rgba(10,10,10,0.65) 0%, transparent 100%)' }} />
        <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-[#0A0A0A] to-transparent pointer-events-none z-10" />

        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 w-full relative z-10">
          <div className="grid lg:grid-cols-[1fr_400px] gap-10 lg:gap-14 items-center">

            {/* ── Left: Copy ── */}
            <div>
              <div style={{ animation: "heroFadeIn 0.5s ease 0.05s both" }}>
                <div className="inline-flex items-center gap-2.5 border border-amber-500/20 bg-amber-500/8 rounded-full px-4 py-2 mb-7">
                  <span className="w-1.5 h-1.5 bg-amber-400 rounded-full animate-pulse" />
                  <span className="text-amber-400 text-xs font-bold tracking-wide uppercase">
                    Tech · AI · Performance Marketing
                  </span>
                </div>
              </div>

              <div style={{ animation: "heroFadeIn 0.7s ease 0.12s both" }}>
                {/* FIX: removed p-2 from gradient span — was adding extra vertical space */}
                <h1 className="font-black leading-[1.02] tracking-tight mb-6">
                  <span className="block text-[46px] sm:text-[60px] lg:text-[72px] text-white">
                    We Engineer
                  </span>
                  <span className="pb-2 block text-[46px] sm:text-[60px] lg:text-[72px] text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500">
                    Digital Growth
                  </span>
                  <span className="block text-[46px] sm:text-[60px] lg:text-[72px] text-white">
                    At Scale.
                  </span>
                </h1>
              </div>

              <div style={{ animation: "heroFadeIn 0.7s ease 0.2s both" }}>
                <p className="text-white/55 text-base sm:text-lg leading-relaxed mb-8 max-w-xl">
                  Proshala blends deep tech engineering with high-performance marketing —
                  building AI tools, automating workflows, and running campaigns that
                  drive measurable revenue across every platform.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 mb-8"
                style={{ animation: "heroFadeIn 0.7s ease 0.28s both" }}>
                <Link href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-gray-950 font-black px-8 py-4 rounded-2xl transition-all duration-200 hover:-translate-y-1 shadow-2xl shadow-amber-500/25 text-sm sm:text-base group">
                  Get Free Strategy Call
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a href={`tel:${PHONE}`}
                  className="inline-flex items-center justify-center gap-2 border border-white/10 text-white/80 font-semibold px-8 py-4 rounded-2xl hover:bg-white/5 hover:border-white/20 transition-all duration-200 text-sm sm:text-base">
                  <Phone className="w-4 h-4 text-amber-400 flex-shrink-0" />
                  {PHONE_DISP}
                </a>
              </div>

              <div className="flex flex-wrap items-center gap-4 text-xs text-white/35 font-medium"
                style={{ animation: "heroFadeIn 0.7s ease 0.35s both" }}>
                {[
                  { dot: "bg-green-500 animate-pulse", text: "Google & Meta Certified" },
                  { dot: "bg-amber-500", text: "8+ Years Experience" },
                  { dot: "bg-amber-500", text: "150+ Brands Scaled" },
                  { dot: "bg-amber-500", text: "Avg 350% ROI" },
                ].map(({ dot, text }, i) => (
                  <span key={i} className="flex items-center gap-1.5">
                    <span className={`w-1.5 h-1.5 ${dot} rounded-full`} />
                    {text}
                  </span>
                ))}
              </div>
            </div>

            {/* ── Right: Card — FIX: social proof now inside card, not absolute ── */}
            <div className="hidden lg:block" style={{ animation: "heroFadeIn 0.9s ease 0.25s both" }}>
              <div className="bg-white/[0.04] border border-white/10 rounded-3xl overflow-hidden backdrop-blur-sm relative">

                {/* Social proof row — top of card, properly inline */}
                <div className="flex items-center gap-3 px-6 py-4 border-b border-white/[0.07] bg-white/[0.02]">
                  <div className="flex -space-x-2.5 flex-shrink-0">
                    {avatars.map((src, i) => (
                      <img key={i} src={src} alt=""
                        className="w-7 h-7 rounded-full object-cover border-2 border-[#161616]" />
                    ))}
                  </div>
                  <div className="flex items-center gap-2 min-w-0">
                    <div className="flex gap-0.5 flex-shrink-0">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-2.5 h-2.5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <p className="text-white/50 text-[11px] truncate">
                      <span className="text-white font-bold">150+</span> clients growing
                    </p>
                  </div>
                  {/* Live indicator */}
                  <div className="ml-auto flex items-center gap-1.5 flex-shrink-0">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-green-400 text-[10px] font-semibold">Adding More</span>
                  </div>
                </div>

                {/* Services list */}
                <div className="p-6">
                  <p className="text-white/25 text-[10px] uppercase tracking-widest font-bold mb-4">
                    What We Deliver
                  </p>
                  <div className="space-y-2.5">
                    {[
                      { icon: Cpu,        label: "AI Tools & Automation",  sub: "Custom SaaS · Chatbots · Workflows" },
                      { icon: Target,     label: "Performance Marketing",  sub: "Google Ads · Affiliates · Meta" },
                      { icon: Code2,      label: "Web & App Development",  sub: "Next.js · WordPress · APIs" },
                      { icon: Search,     label: "SEO & Organic Growth",   sub: "Technical · Content · Local" },
                      { icon: TrendingUp, label: "Ecommerce Scaling",      sub: "D2C · CRO · Feed Management" },
                    ].map(({ icon: Icon, label, sub }, i) => (
                      <div key={i} className="flex items-center gap-3 group cursor-default">
                        <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/15 flex items-center justify-center flex-shrink-0 group-hover:bg-amber-500/20 transition-colors">
                          <Icon className="w-3.5 h-3.5 text-amber-400" />
                        </div>
                        <div className="min-w-0">
                          <div className="text-white font-semibold text-[12px] group-hover:text-amber-400 transition-colors leading-tight">
                            {label}
                          </div>
                          <div className="text-white/35 text-[10px] truncate">{sub}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* ROI strip — bottom of card */}
                <div className="bg-amber-500 px-6 py-3 flex items-center justify-between">
                  <span className="text-gray-950 text-xs font-bold">Average Client ROI</span>
                  <span className="text-gray-950 text-2xl font-black leading-none">350%</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════ MARQUEE ══════════════════════════════ */}
      <Marquee />

      {/* ════════════════════ THREE PILLARS ══════════════════════════════ */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <FadeUp className="text-center mb-14">
            <Pill text="What We Do" />
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight">
              <span className="text-white">Three Pillars of </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-300">
                Proshala
              </span>
            </h2>
            <p className="text-white/40 text-sm max-w-lg mx-auto mt-4 leading-relaxed">
              We combine advanced engineering with aggressive marketing to build systems that scale revenue on every channel.
            </p>
          </FadeUp>

          <div className="space-y-5">
            {featureServices.map(({ icon: Icon, tag, title, desc, points, href, visual }, i) => (
              <FadeUp key={i} delay={i * 70}>
                <div className="grid lg:grid-cols-2 rounded-3xl overflow-hidden border border-white/[0.07] hover:border-amber-500/30 transition-all duration-300 group">
                  <div className={`p-8 sm:p-10 bg-white/[0.02] group-hover:bg-white/[0.03] transition-colors ${i % 2 !== 0 ? 'lg:order-2' : ''}`}>
                    <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 rounded-full px-3 py-1.5 mb-5">
                      <Icon className="w-3.5 h-3.5 text-amber-400" />
                      <span className="text-amber-400 text-[11px] font-bold uppercase tracking-wider">{tag}</span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-black text-white mb-4 leading-snug">{title}</h3>
                    <p className="text-white/50 text-sm leading-relaxed mb-6">{desc}</p>
                    <div className="grid grid-cols-2 gap-2.5 mb-7">
                      {points.map((pt, j) => (
                        <div key={j} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 flex-shrink-0 mt-0.5" />
                          <span className="text-white/65 text-xs leading-relaxed">{pt}</span>
                        </div>
                      ))}
                    </div>
                    <Link href={href}
                      className="inline-flex items-center gap-2 text-amber-400 font-bold text-sm hover:text-amber-300 transition-colors group/link">
                      Explore Service
                      <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                  <div className={`relative flex items-center justify-center bg-white/[0.015] min-h-[200px] lg:min-h-0 border-t lg:border-t-0 ${i % 2 !== 0 ? 'lg:order-1 lg:border-r' : 'lg:border-l'} border-white/[0.06] overflow-hidden`}>
                    <div className="absolute inset-0 opacity-[0.035]" style={{
                      backgroundImage: 'radial-gradient(circle at center, #F59E0B 1px, transparent 1px)',
                      backgroundSize: '28px 28px',
                    }} />
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="w-48 h-48 rounded-full bg-amber-500/5 blur-3xl" />
                    </div>
                    <div className="relative z-10 text-center px-8">
                      <div className="text-[90px] lg:text-[110px] leading-none mb-3">{visual}</div>
                      <div className="text-white/15 text-[10px] uppercase tracking-[0.2em] font-bold">{tag}</div>
                    </div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ═════════════════════ STATS ══════════════════════════════════════ */}
      <section ref={statsSection.ref} className="py-20 lg:py-28 bg-[#0D0D0D] border-y border-white/[0.06] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 50%, rgba(245,158,11,0.05) 0%, transparent 70%)' }} />
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-10">
            <span className="text-[10px] text-white/20 font-bold uppercase tracking-[0.3em]">Numbers That Define Us</span>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-white/[0.06]">
            {stats.map((s, i) => (
              <ScaleIn key={i} delay={i * 100}>
                <StatItem {...s} trigger={statsSection.inView} delay={i * 100} />
              </ScaleIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════ PROCESS ══════════════════════════════════ */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <FadeUp className="text-center mb-14">
            <Pill text="How We Work" />
            <h2 className="text-4xl sm:text-5xl font-black">
              <span className="text-white">From Audit to </span>
              <span className="text-amber-400">Results</span>
            </h2>
          </FadeUp>
          <div className="relative">
            <div className="hidden lg:block absolute top-9 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-amber-500/25 to-transparent" />
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { step: "01", title: "Free Audit",        desc: "We map your tech stack, campaigns, and competition — zero cost, zero obligation.",                 emoji: "🔍" },
                { step: "02", title: "Custom Blueprint",  desc: "A tailored growth strategy using AI, automation, and the exact channels your audience lives on.", emoji: "🗺️" },
                { step: "03", title: "Launch & Automate", desc: "We go live with smart workflows, daily bid management, A/B testing, and real-time monitoring.",    emoji: "🚀" },
                { step: "04", title: "Scale & Report",    desc: "We scale winning channels, integrate affiliate networks, and deliver transparent weekly reports.", emoji: "📊" },
              ].map(({ step, title, desc, emoji }, i) => (
                <FadeUp key={i} delay={i * 90}>
                  <div className="group relative text-center lg:text-left">
                    <div className="inline-flex lg:flex w-16 h-16 rounded-2xl bg-[#161616] border border-white/10 items-center justify-center mb-5 group-hover:border-amber-500/40 group-hover:bg-amber-500/8 transition-all duration-300 text-2xl mx-auto lg:mx-0">
                      {emoji}
                    </div>
                    <div className="text-5xl font-black text-amber-500/8 group-hover:text-amber-500/15 transition-colors leading-none tabular-nums mb-2">
                      {step}
                    </div>
                    <h3 className="font-bold text-white mb-2 text-sm sm:text-base group-hover:text-amber-400 transition-colors">{title}</h3>
                    <p className="text-white/40 text-xs sm:text-sm leading-relaxed">{desc}</p>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════ TECH STACK ══════════════════════════════ */}
      <section className="py-16 bg-[#0D0D0D] border-y border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <FadeUp className="text-center mb-8">
            <span className="text-[10px] text-white/20 font-bold uppercase tracking-[0.25em]">Technologies We Master</span>
          </FadeUp>
          <FadeUp delay={80}>
            <div className="flex flex-wrap justify-center gap-2.5">
              {techStack.map((tech, i) => (
                <span key={i}
                  className="text-xs font-semibold text-white/50 border border-white/[0.08] hover:border-amber-500/40 hover:text-amber-400 hover:bg-amber-500/5 rounded-full px-4 py-2 transition-all duration-200 cursor-default">
                  {tech}
                </span>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ════════════════════ TESTIMONIALS ════════════════════════════════ */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <FadeUp className="mb-12 lg:mb-14 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5">
            <div>
              <Pill text="Partner Stories" />
              <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight">
                Real Results,<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-400">
                  Real Clients
                </span>
              </h2>
            </div>
            <div className="flex items-center gap-2.5 flex-shrink-0">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />)}
              </div>
              <span className="text-white/35 text-xs">4.9 avg · 150+ reviews</span>
            </div>
          </FadeUp>
          <div className="grid sm:grid-cols-2 gap-4">
            {testimonials.map((t, i) => (
              <ScaleIn key={i} delay={i * 70}>
                <div className="bg-white/[0.025] border border-white/[0.07] hover:border-amber-500/25 rounded-2xl p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1 relative overflow-hidden group h-full">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-amber-500/3 rounded-full blur-2xl pointer-events-none group-hover:bg-amber-500/6 transition-colors" />
                  <Quote className="w-6 h-6 text-amber-500/10 mb-4" />
                  <div className="flex gap-0.5 mb-4">
                    {[...Array(t.rating)].map((_, j) => <Star key={j} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />)}
                  </div>
                  <p className="text-white/70 text-sm leading-relaxed mb-5 italic">{t.text}</p>
                  <div>
                    <div className="font-bold text-white text-sm">{t.name}</div>
                    <div className="text-amber-400 text-xs mt-0.5">{t.role}</div>
                  </div>
                </div>
              </ScaleIn>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════ BLOG ══════════════════════════════════ */}
      {posts.length > 0 && (
        <section className="py-20 lg:py-24 bg-[#0D0D0D] border-t border-white/[0.06]">
          <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
            <FadeUp>
              <div className="flex items-end justify-between mb-10 lg:mb-12">
                <div>
                  <Pill text="Insights" />
                  <h2 className="text-3xl sm:text-4xl font-black text-white">Proshala Knowledge Base</h2>
                </div>
                <Link href="/blogs"
                  className="hidden sm:inline-flex items-center gap-1.5 text-amber-400 font-semibold hover:text-amber-300 transition-colors text-sm group flex-shrink-0">
                  All Articles <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </FadeUp>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {posts.map((post, i) => (
                <FadeUp key={post.id} delay={i * 80}>
                  <Link href={`/${post.slug}`}
                    className="group block bg-white/[0.03] border border-white/[0.07] rounded-2xl overflow-hidden hover:border-amber-500/30 hover:-translate-y-1.5 transition-all duration-300 h-full flex flex-col">
                    <div className="aspect-video overflow-hidden flex-shrink-0 bg-white/[0.02]">
                      {post._embedded?.['wp:featuredmedia']?.[0]?.source_url ? (
                        <img src={post._embedded['wp:featuredmedia'][0].source_url}
                          alt={post.title.rendered}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <BookOpen className="w-8 h-8 text-amber-500/20" />
                        </div>
                      )}
                    </div>
                    <div className="p-5 flex flex-col flex-1">
                      <div className="text-white/35 text-[11px] mb-2.5 flex items-center gap-1.5">
                        <Calendar className="w-3 h-3 text-amber-500/60 flex-shrink-0" />
                        {fmtDate(post.date)}
                      </div>
                      <h3 className="font-bold text-white mb-2 group-hover:text-amber-400 transition-colors line-clamp-2 text-sm flex-1">
                        {post.title.rendered}
                      </h3>
                      <p className="text-white/35 text-xs line-clamp-2 mb-3 leading-relaxed">
                        {stripHtml(post.excerpt.rendered)}
                      </p>
                      <span className="text-amber-400 text-xs font-semibold inline-flex items-center">
                        Read More <ChevronRight className="w-3.5 h-3.5 ml-0.5 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </Link>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ════════════════ BOTTOM CTA ══════════════════════════════════════ */}
      <section className="border-t border-white/[0.06]">
        <div className="grid lg:grid-cols-2 min-h-[400px]">
          <FadeLeft>
            <div className="p-10 sm:p-14 flex flex-col justify-center relative overflow-hidden bg-[#0A0A0A]">
              <div className="absolute inset-0 pointer-events-none"
                style={{ background: 'radial-gradient(ellipse 80% 80% at 0% 50%, rgba(245,158,11,0.07) 0%, transparent 70%)' }} />
              <div className="relative z-10">
                <Pill text="Get Started" />
                <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-4">
                  Ready to Build Your<br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-400">
                    Growth Engine?
                  </span>
                </h2>
                <p className="text-white/50 text-sm sm:text-base mb-8 max-w-md leading-relaxed">
                  From AI-powered SaaS to global affiliate campaigns and high-converting websites — we engineer the full stack of your digital success.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link href="/contact"
                    className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-gray-950 font-bold px-8 py-4 rounded-2xl transition-all duration-200 hover:-translate-y-1 shadow-xl shadow-amber-500/20 text-sm group w-fit">
                    Start Your Project
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <a href={`tel:${PHONE}`}
                    className="inline-flex items-center justify-center gap-2 border border-white/10 text-white/80 px-8 py-4 rounded-2xl hover:bg-white/5 transition-all text-sm font-semibold">
                    <Phone className="w-4 h-4 text-amber-400" /> {PHONE_DISP}
                  </a>
                </div>
              </div>
            </div>
          </FadeLeft>

          <FadeRight delay={100}>
            <div className="p-10 sm:p-14 flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-white/[0.06] bg-[#0D0D0D] relative overflow-hidden">
              <div className="absolute inset-0 pointer-events-none"
                style={{ background: 'radial-gradient(ellipse 80% 80% at 100% 50%, rgba(245,158,11,0.04) 0%, transparent 70%)' }} />
              <div className="relative z-10 space-y-6">
                {[
                  { icon: Phone,     label: "Call Us",  value: PHONE_DISP,                   href: `tel:${PHONE}` },
                  { icon: Globe,     label: "Email",    value: "contact@proshala.com",        href: "mailto:contact@proshala.com" },
                  { icon: Building2, label: "Location", value: "Delhi, India · Global Reach", href: "#" },
                ].map(({ icon: Icon, label, value, href }, i) => (
                  <a key={i} href={href} className="flex items-center gap-4 group">
                    <div className="w-11 h-11 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-amber-500/20 transition-colors">
                      <Icon className="w-4 h-4 text-amber-400" />
                    </div>
                    <div>
                      <div className="text-white/25 text-[10px] uppercase tracking-widest font-bold">{label}</div>
                      <div className="text-white font-semibold text-sm group-hover:text-amber-400 transition-colors">{value}</div>
                    </div>
                  </a>
                ))}
                <div className="flex flex-wrap gap-2 pt-2">
                  {["Mon–Sat: 10am–7pm IST", "24hr Response SLA", "Free First Consultation"].map((tag, i) => (
                    <span key={i} className="text-[11px] text-white/30 border border-white/[0.07] rounded-full px-3 py-1">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </FadeRight>
        </div>
      </section>

    </div>
  );
}
