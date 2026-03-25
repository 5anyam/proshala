"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import {
  Menu, X, Phone, Mail, ChevronDown,
  ArrowRight, Zap, MoreHorizontal
} from "lucide-react";
import { cn } from "@/lib/utils";

const PHONE      = "+919999774046";
const PHONE_DISP = "+91 99997 74046";
const EMAIL      = "contact@proshala.com";

type DropdownItem = { name: string; href: string; };
type NavItem = {
  name: string; href: string;
  hasDropdown?: boolean; dropdownItems?: DropdownItem[];
};

// ─── Logo ──────────────────────────────────────────────────────
function Logo({ size = "md" }: { size?: "sm" | "md" }) {
  return (
    <div className="flex items-center gap-2.5 select-none group cursor-pointer">
      <div className={cn(
        "relative rounded-lg overflow-hidden border border-amber-500/20 shadow-lg shadow-amber-500/10 group-hover:scale-105 transition-transform duration-300",
        size === "md" ? "h-9 w-9" : "h-7 w-7"
      )}>
        <img
          src="/proshala-logo.jpg"
          alt="Proshala Icon"
          className="w-full h-full object-cover"
        />
      </div>
      <span className={cn(
        "font-semibold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500",
        size === "sm" ? "text-[22px]" : "text-[18px]"
      )}>
        PROSHALA
      </span>
    </div>
  );
}

// ─── Nav Data ──────────────────────────────────────────────────
// ─── Nav Data ──────────────────────────────────────────────────
const mainNav: NavItem[] = [
  {
    name: "AI & Automation", href: "/services/automation", hasDropdown: true,
    dropdownItems: [
      { name: "Business Automation", href: "/services/business-automation" },
      { name: "SaaS Tools",          href: "/services/saas-tools" },
      { name: "AI Chatbots",         href: "/services/ai-chatbots" },
      { name: "Workflow Setup",      href: "/services/workflow-setup" },
    ],
  },
  {
    name: "Google Ads", href: "/services/google-ads", hasDropdown: true,
    dropdownItems: [
      { name: "Search Ads",   href: "/services/google-search-ads" },
      { name: "Display Ads",  href: "/services/google-display-ads" },
      { name: "YouTube Ads",  href: "/services/youtube-ads" },
      { name: "Shopping Ads", href: "/services/shopping-ads" },
    ],
  },
  {
    name: "Web Dev", href: "/services/website-development", hasDropdown: true,
    dropdownItems: [
      { name: "Next.js",       href: "/services/nextjs-development" },
      { name: "WordPress",     href: "/services/wordpress-development" },
      { name: "Landing Pages", href: "/services/landing-pages" },
    ],
  },
  {
    name: "SEO", href: "/services/seo", hasDropdown: true,
    dropdownItems: [
      { name: "Local SEO",         href: "/services/local-seo" },
      { name: "Technical SEO",     href: "/services/technical-seo" },
      { name: "Content Marketing", href: "/services/content-marketing" },
    ],
  },
  {
    name: "Social Media", href: "/services/social-media-ads", hasDropdown: true,
    dropdownItems: [
      { name: "Facebook & Insta", href: "/services/facebook-instagram-ads" },
      { name: "LinkedIn Ads",     href: "/services/linkedin-ads" },
    ],
  },
  { name: "Blogs",   href: "/blogs" },
  { name: "Contact", href: "/contact" },
];

const moreNav: NavItem[] = [
  { name: "About Us",          href: "/about" },
  { name: "Case Studies",      href: "/case-studies" },
  { name: "Affiliate Network", href: "/services/affiliate-marketing" },
];


const mobileNav: NavItem[] = [{ name: "Home", href: "/" }, ...mainNav, ...moreNav];

// ─── Dropdown Panel ────────────────────────────────────────────
function DropdownPanel({ item, isOpen, align = "left", onClose }: {
  item: NavItem; isOpen: boolean; align?: "left" | "right"; onClose: () => void;
}) {
  return (
    <div className={cn(
      "absolute top-[calc(100%+8px)] min-w-[190px] z-50",
      align === "right" ? "right-0" : "left-0",
      "bg-[#0A0A0A]",
      "border border-white/10",
      "rounded-xl shadow-xl shadow-black",
      "overflow-hidden transition-all duration-200",
      align === "right" ? "origin-top-right" : "origin-top-left",
      isOpen
        ? "opacity-100 scale-100 pointer-events-auto translate-y-0"
        : "opacity-0 scale-[0.96] pointer-events-none -translate-y-1"
    )}>
      {/* Amber → Yellow top accent bar */}
      <div className="h-0.5 bg-gradient-to-r from-amber-500 to-yellow-400" />
      {item.href && (
        <Link href={item.href} onClick={onClose}
          className="flex items-center gap-2 px-4 py-2.5 text-[12px] font-bold text-amber-400 hover:bg-amber-500/10 transition-colors border-b border-white/[0.06]">
          <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
          View All {item.name}
          <ArrowRight className="w-3 h-3 ml-auto" />
        </Link>
      )}
      {item.dropdownItems?.map((sub, si) => (
        <Link key={si} href={sub.href} onClick={onClose}
          className="flex items-center gap-2 px-4 py-2.5 text-[13px] text-white/70 hover:text-white hover:bg-white/5 transition-all group">
          <span className="w-1 h-1 bg-white/30 rounded-full group-hover:bg-amber-500 transition-colors flex-shrink-0" />
          {sub.name}
        </Link>
      ))}
    </div>
  );
}

const moreNavItem: NavItem = {
  name: "More", href: "",
  dropdownItems: moreNav.map((i) => ({ name: i.name, href: i.href })),
};

// ─── Navbar ────────────────────────────────────────────────────
export function Navbar() {
  const [isOpen, setIsOpen]                 = useState(false);
  const [isScrolled, setIsScrolled]         = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const leaveTimer  = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node))
        setActiveDropdown(null);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const handleMouseEnter = (name: string) => {
    if (leaveTimer.current) clearTimeout(leaveTimer.current);
    setActiveDropdown(name);
  };
  const handleMouseLeave = () => {
    leaveTimer.current = setTimeout(() => setActiveDropdown(null), 150);
  };
  const closeAll = () => {
    setActiveDropdown(null);
    setIsOpen(false);
    setMobileExpanded(null);
  };

  return (
    <>
      {/* ── Top bar ─────────────────────────────────────────── */}
      <div className="bg-black border-b border-white/[0.06] py-1.5 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center gap-5">
            <a href={`tel:${PHONE}`}
              className="flex items-center gap-1.5 text-white/60 hover:text-amber-400 transition-colors text-[11px] font-medium">
              <Phone className="w-3 h-3 flex-shrink-0 text-amber-500/70" /> {PHONE_DISP}
            </a>
            <span className="w-px h-3 bg-white/20" />
            <a href={`mailto:${EMAIL}`}
              className="flex items-center gap-1.5 text-white/60 hover:text-amber-400 transition-colors text-[11px] font-medium">
              <Mail className="w-3 h-3 flex-shrink-0 text-amber-500/70" /> {EMAIL}
            </a>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
            <span className="text-white/60 text-[11px] font-medium tracking-wide">
              Meta & Google Certified · Tech & Performance Marketing
            </span>
          </div>
        </div>
      </div>

      {/* ── Main Navbar ─────────────────────────────────────── */}
      <nav ref={dropdownRef} className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-black/80 backdrop-blur-xl border-b border-white/10 shadow-xl shadow-black/60"
          : "bg-black border-b border-white/[0.06]"
      )}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 gap-4">

            <Link href="/" onClick={closeAll} className="flex-shrink-0">
              <Logo size="md" />
            </Link>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-1 flex-1 justify-center">
              {mainNav.map((item) => (
                <div key={item.name} className="relative"
                  onMouseEnter={() => item.hasDropdown && handleMouseEnter(item.name)}
                  onMouseLeave={() => item.hasDropdown && handleMouseLeave()}>
                  <Link href={item.href}
                    onClick={() => !item.hasDropdown && closeAll()}
                    className={cn(
                      "inline-flex items-center gap-1 px-3 py-2 rounded-lg text-[13px] font-medium transition-all duration-200 whitespace-nowrap",
                      activeDropdown === item.name
                        ? "text-white bg-white/10"
                        : "text-white/70 hover:text-white hover:bg-white/5"
                    )}>
                    {item.name}
                    {item.hasDropdown && (
                      <ChevronDown className={cn(
                        "w-3 h-3 transition-transform duration-200",
                        activeDropdown === item.name
                          ? "rotate-180 text-amber-400"
                          : "text-white/40"
                      )} />
                    )}
                  </Link>
                  {item.hasDropdown && (
                    <DropdownPanel item={item} isOpen={activeDropdown === item.name} align="left" onClose={closeAll} />
                  )}
                </div>
              ))}

              {/* More dropdown */}
              <div className="relative"
                onMouseEnter={() => handleMouseEnter("__more__")}
                onMouseLeave={handleMouseLeave}>
                <button aria-label="More pages"
                  className={cn(
                    "inline-flex items-center gap-1 px-2.5 py-2 rounded-lg text-[13px] font-medium transition-all duration-200",
                    activeDropdown === "__more__"
                      ? "text-white bg-white/10"
                      : "text-white/70 hover:text-white hover:bg-white/5"
                  )}>
                  <MoreHorizontal className="w-4 h-4" />
                </button>
                <DropdownPanel item={moreNavItem} isOpen={activeDropdown === "__more__"} align="right" onClose={closeAll} />
              </div>
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
              <Link href="/contact"
                className="inline-flex items-center gap-1.5 bg-gradient-to-r from-amber-500 to-yellow-500 text-gray-950 text-[13px] font-bold px-5 py-2.5 rounded-xl hover:opacity-90 hover:-translate-y-0.5 transition-all shadow-md shadow-amber-500/20 whitespace-nowrap">
                <Zap className="w-3.5 h-3.5" /> Free Strategy
              </Link>
            </div>

            {/* Mobile toggle */}
            <div className="flex items-center gap-2 lg:hidden">
              <button onClick={() => setIsOpen(!isOpen)}
                className="w-9 h-9 flex items-center justify-center rounded-lg border border-white/10 text-white/80 hover:bg-white/5 transition-all"
                aria-label={isOpen ? "Close menu" : "Open menu"}>
                {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* ══════════════════════════════════════════════════════
          MOBILE DRAWER
      ══════════════════════════════════════════════════════ */}
      <div className={cn(
        "fixed inset-0 z-40 lg:hidden",
        isOpen ? "pointer-events-auto" : "pointer-events-none"
      )}>
        {/* Backdrop */}
        <div
          className={cn(
            "absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity duration-300",
            isOpen ? "opacity-100" : "opacity-0"
          )}
          onClick={closeAll}
        />

        {/* Drawer panel */}
        <div className={cn(
          "absolute top-0 right-0 h-full w-full max-w-[320px] flex flex-col",
          "bg-[#0A0A0A]",
          "border-l border-white/10",
          "shadow-2xl",
          "transition-transform duration-300 ease-out",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}>

          {/* Header */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-white/10 flex-shrink-0 bg-[#0A0A0A]">
            <Link href="/" onClick={closeAll}>
              <Logo size="sm" />
            </Link>
            <button onClick={closeAll}
              className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors">
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Nav list */}
          <div className="flex-1 overflow-y-auto bg-[#0A0A0A]">
            {mobileNav.map((item) => (
              <div key={item.name} className="border-b border-white/[0.06] last:border-0">
                {item.hasDropdown ? (
                  <>
                    <button
                      onClick={() => setMobileExpanded(mobileExpanded === item.name ? null : item.name)}
                      className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-white/[0.04] transition-colors">
                      <span className="text-[15px] font-semibold text-white">
                        {item.name}
                      </span>
                      <span className={cn(
                        "w-6 h-6 flex items-center justify-center rounded-full border text-base font-bold leading-none flex-shrink-0 transition-all duration-200",
                        mobileExpanded === item.name
                          ? "border-amber-500 text-amber-500 bg-amber-500/10 rotate-45"
                          : "border-white/20 text-white/60"
                      )}>+</span>
                    </button>

                    <div className={cn(
                      "overflow-hidden transition-all duration-300",
                      "bg-black",
                      mobileExpanded === item.name ? "max-h-[400px]" : "max-h-0"
                    )}>
                      <Link href={item.href} onClick={closeAll}
                        className="flex items-center gap-3 px-6 py-3 border-b border-white/[0.05] hover:bg-white/[0.05] transition-colors">
                        <span className="w-1.5 h-1.5 bg-amber-500 rounded-full flex-shrink-0" />
                        <span className="text-[13px] font-semibold text-amber-400">
                          View All {item.name}
                        </span>
                        <ArrowRight className="w-3 h-3 ml-auto text-amber-500" />
                      </Link>

                      {item.dropdownItems?.map((sub, si) => (
                        <Link key={si} href={sub.href} onClick={closeAll}
                          className={cn(
                            "flex items-center gap-3 px-6 py-3 hover:bg-white/[0.05] transition-colors",
                            si < (item.dropdownItems?.length ?? 0) - 1
                              ? "border-b border-white/[0.05]" : ""
                          )}>
                          <span className="w-1 h-1 bg-white/20 rounded-full flex-shrink-0" />
                          <span className="text-[13px] text-white/70">
                            {sub.name}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link href={item.href} onClick={closeAll}
                    className="flex items-center justify-between px-5 py-4 hover:bg-white/[0.04] transition-colors">
                    <span className="text-[15px] font-semibold text-white">
                      {item.name}
                    </span>
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Contact strip */}
          <div className="px-5 py-3 border-t border-white/10 flex items-center gap-4 bg-black flex-shrink-0">
            <a href={`tel:${PHONE}`}
              className="flex items-center gap-1.5 text-white/70 text-[11px] font-medium hover:text-amber-400 transition-colors">
              <Phone className="w-3 h-3 text-amber-500" /> {PHONE_DISP}
            </a>
            <span className="w-px h-3 bg-white/20" />
            <a href={`mailto:${EMAIL}`}
              className="flex items-center gap-1.5 text-white/70 text-[11px] font-medium truncate hover:text-amber-400 transition-colors">
              <Mail className="w-3 h-3 text-amber-500 flex-shrink-0" /> {EMAIL}
            </a>
          </div>

          {/* Footer CTAs */}
          <div className="flex-shrink-0">
            <Link href="/contact" onClick={closeAll}
              className="flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-yellow-500 text-gray-950 font-bold py-4 text-sm hover:opacity-90 active:scale-[0.99] transition-all w-full">
              <Zap className="w-4 h-4" /> GET FREE AUDIT NOW
            </Link>
            <a href={`tel:${PHONE}`}
              className="flex items-center justify-center gap-2 bg-[#1A1A1A] border-t border-white/5 hover:bg-[#252525] text-white py-3.5 text-sm font-bold transition-colors w-full">
              <Phone className="w-4 h-4" /> CALL US NOW
            </a>
          </div>

        </div>
      </div>
    </>
  );
}
