// app/not-found.tsx
import Link from "next/link";
import { Home, Search, Phone, ArrowRight, Zap } from "lucide-react";

const PHONE      = "+919999774046";
const PHONE_DISP = "+91 99997 74046";

const quickLinks = [
  { name: "Google Ads",            href: "/services/google-ads" },
  { name: "SEO",                   href: "/services/seo" },
  { name: "Social Media Ads",      href: "/services/social-media-ads" },
  { name: "Automation",         href: "/services/automation" },
  { name: "Performance Marketing", href: "/services/performance-marketing" },
  { name: "Website Development",   href: "/services/website-development" },
];

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white flex flex-col">

      {/* ── BG Glows ──────────────────────────────────────────────────── */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute -top-32 -right-20 w-[500px] h-[500px] rounded-full blur-[120px]"
          style={{ background: "radial-gradient(circle, rgba(245,158,11,0.08) 0%, transparent 70%)" }}
        />
        <div
          className="absolute bottom-0 -left-10 w-[400px] h-[400px] rounded-full blur-[100px]"
          style={{ background: "radial-gradient(circle, rgba(251,146,60,0.05) 0%, transparent 70%)" }}
        />
        {/* Line grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      {/* ── Main ──────────────────────────────────────────────────────── */}
      <div className="flex-1 flex items-center justify-center px-5 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="max-w-2xl w-full text-center">

          {/* 404 big number */}
          <div className="relative mb-6">
            <span className="text-[130px] sm:text-[180px] font-black leading-none text-transparent bg-clip-text bg-gradient-to-b from-amber-500/25 to-amber-500/0 select-none">
              404
            </span>
            {/* Centered badge */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/25 rounded-full px-4 py-2">
                <span className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" />
                <span className="text-amber-400 text-xs sm:text-sm font-bold uppercase tracking-wide">
                  Page Not Found
                </span>
              </div>
            </div>
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-4 text-white">
            Oops! Wrong Turn
          </h1>

          {/* Description */}
          <p className="text-white/50 text-base sm:text-lg leading-relaxed mb-10 max-w-md mx-auto">
            The page you are looking for does not exist or has been moved.
            Let us get you back to growing your business.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-12">
            <Link href="/"
              className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-gray-950 font-black px-7 py-4 rounded-2xl hover:-translate-y-0.5 active:scale-95 transition-all shadow-2xl shadow-amber-500/25 text-sm group">
              <Home className="w-4 h-4" />
              Go to Home
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link href="/services/google-ads"
              className="inline-flex items-center justify-center gap-2 border border-white/10 text-white/80 font-semibold px-7 py-4 rounded-2xl hover:bg-white/5 hover:border-white/20 hover:-translate-y-0.5 transition-all text-sm">
              <Search className="w-4 h-4 text-amber-400" />
              Browse Services
            </Link>

            <a href={`tel:${PHONE}`}
              className="inline-flex items-center justify-center gap-2 border border-white/10 text-white/80 font-semibold px-7 py-4 rounded-2xl hover:bg-white/5 hover:border-white/20 hover:-translate-y-0.5 transition-all text-sm">
              <Phone className="w-4 h-4 text-green-400" />
              {PHONE_DISP}
            </a>
          </div>

          {/* Divider */}
          <div className="relative mb-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/[0.07]" />
            </div>
            <div className="relative flex justify-center">
              <span className="bg-[#0A0A0A] px-4 text-xs font-bold text-white/30 uppercase tracking-widest">
                Our Services
              </span>
            </div>
          </div>

          {/* Quick service links */}
          <div className="flex flex-wrap justify-center gap-2">
            {quickLinks.map(({ name, href }) => (
              <Link key={name} href={href}
                className="inline-flex items-center gap-1.5 bg-white/[0.04] hover:bg-amber-500/10 border border-white/[0.08] hover:border-amber-500/30 text-white/55 hover:text-amber-400 text-xs font-semibold px-4 py-2 rounded-full transition-all">
                <Zap className="w-3 h-3 text-amber-500" />
                {name}
              </Link>
            ))}
          </div>

        </div>
      </div>

      {/* ── Bottom CTA strip ──────────────────────────────────────────── */}
      <div className="border-t border-white/[0.06] bg-[#0D0D0D] py-5 px-5 sm:px-6 relative z-10 overflow-hidden">
        {/* Subtle glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 50% 100% at 50% 50%, rgba(245,158,11,0.04) 0%, transparent 70%)" }}
        />
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-amber-500/25 to-transparent" />

        <div className="max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left relative z-10">
          <div>
            <p className="font-bold text-white text-sm">
              Looking for a digital marketing agency?
            </p>
            <p className="text-white/40 text-xs mt-0.5">
              Proshala — Google Certified Partner · Performance Marketing · 150+ Campaigns
            </p>
          </div>
          <Link href="/contact"
            className="flex-shrink-0 inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-gray-950 font-black px-5 py-2.5 rounded-xl transition-all shadow-lg shadow-amber-500/20 text-sm group">
            <Zap className="w-3.5 h-3.5" />
            Get Free Audit
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

    </div>
  );
}
