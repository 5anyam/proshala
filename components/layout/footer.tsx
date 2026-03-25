import Link from "next/link";
import {
  Phone, Mail, MapPin, MessageSquare,
  Facebook, Twitter, Linkedin, Instagram,
  ArrowUpRight, Zap
} from "lucide-react";

// ─── Constants ────────────────────────────────────────────────────────────────
const PHONE      = "+919999774046";
const PHONE_DISP = "+91 99997 74046";
const EMAIL      = "contact@proshala.com";

// ─── Logo — matches Navbar ─────────────────────────────────────────────────────
function Logo() {
  return (
    <div className="flex items-center gap-2.5 select-none">
      <div className="h-9 w-9 rounded-lg overflow-hidden border border-amber-500/20 shadow-lg shadow-amber-500/10 flex-shrink-0">
        <img
          src="/proshala-logo.jpg"
          alt="Proshala Icon"
          className="w-full h-full object-cover"
        />
      </div>
      <span className="font-black tracking-widest text-[22px] text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500">
        PROSHALA
      </span>
    </div>
  );
}

// ─── Data ─────────────────────────────────────────────────────────────────────
const quickLinks = [
  { label: "About Us",        href: "/about" },
  { label: "Our Services",    href: "/services" },
  { label: "Case Studies",    href: "/case-studies" },
  { label: "Blog & Insights", href: "/blogs" },
  { label: "Careers",         href: "/career" },
  { label: "Contact Us",      href: "/contact" },
];

const services = [
  { label: "AI Tools & Automation",    href: "/services/automation" },
  { label: "Business Automation",      href: "/services/business-automation" },
  { label: "Performance Marketing",    href: "/services/performance-marketing" },
  { label: "Affiliate Marketing",      href: "/services/affiliate-marketing" },
  { label: "Google Ads (PPC)",         href: "/services/google-ads" },
  { label: "Web & App Development",    href: "/services/website-development" },
  { label: "SEO & Organic Growth",     href: "/services/seo" },
  { label: "Ecommerce Marketing",      href: "/services/ecommerce-marketing" },
];

const usefulLinks = [
  { label: "Google Ads Manager",     href: "https://ads.google.com" },
  { label: "Google Analytics",       href: "https://analytics.google.com" },
  { label: "Google Search Console",  href: "https://search.google.com/search-console" },
  { label: "Meta Ads Manager",       href: "https://www.facebook.com/adsmanager" },
  { label: "Google Merchant Center", href: "https://merchants.google.com" },
  { label: "Disclaimer",             href: "/disclaimer", internal: true },
];

const socialLinks = [
  { icon: Facebook,  href: "https://www.facebook.com/proshala",         label: "Facebook" },
  { icon: Instagram, href: "https://www.instagram.com/proshala",        label: "Instagram" },
  { icon: Linkedin,  href: "https://www.linkedin.com/company/proshala", label: "LinkedIn" },
  { icon: Twitter,   href: "https://twitter.com/proshala",              label: "X (Twitter)" },
];

// ─── Footer ───────────────────────────────────────────────────────────────────
export function Footer() {
  return (
    <footer className="bg-[#0A0A0A] text-white relative overflow-hidden">

      {/* Top glow border — amber */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />

      {/* Background ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[280px] bg-amber-500/[0.04] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="pt-16 pb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

            {/* ── Company Info ─────────────────────────────────────────── */}
            <div className="lg:col-span-1">
              <Link href="/" className="inline-block mb-6">
                <Logo />
              </Link>

              <p className="text-white/40 mb-7 leading-relaxed text-sm">
                Proshala is a full-stack tech & performance agency. We build AI tools,
                automate workflows, run affiliate campaigns, and develop high-converting
                digital products — all engineered for measurable ROI.
              </p>

              <div className="space-y-3.5">
                <div className="flex items-start gap-3">
                  <MapPin className="h-4 w-4 text-amber-400 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-white/45 leading-snug">Delhi, India · Serving Global Clients</span>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="h-4 w-4 text-amber-400 mt-0.5 flex-shrink-0" />
                  <a href={`tel:${PHONE}`}
                    className="text-sm text-white/45 hover:text-amber-400 transition-colors duration-200">
                    {PHONE_DISP}
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <MessageSquare className="h-4 w-4 text-amber-400 flex-shrink-0" />
                  <a href={`https://wa.me/${PHONE}`} target="_blank" rel="noopener noreferrer"
                    className="text-sm text-white/45 hover:text-amber-400 transition-colors duration-200">
                    {PHONE_DISP} (WhatsApp)
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-amber-400 flex-shrink-0" />
                  <a href={`mailto:${EMAIL}`}
                    className="text-sm text-white/45 hover:text-amber-400 transition-colors duration-200">
                    {EMAIL}
                  </a>
                </div>
              </div>
            </div>

            {/* ── Quick Links ──────────────────────────────────────────── */}
            <div>
              <h3 className="text-xs font-bold text-white/30 uppercase tracking-[0.18em] mb-6">
                Quick Links
              </h3>
              <div className="space-y-3">
                {quickLinks.map(({ label, href }) => (
                  <Link key={href} href={href}
                    className="flex items-center gap-1.5 text-white/45 hover:text-amber-400 text-sm transition-colors duration-200 group">
                    <span className="w-1 h-1 bg-amber-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                    {label}
                  </Link>
                ))}
              </div>
            </div>

            {/* ── Services ─────────────────────────────────────────────── */}
            <div>
              <h3 className="text-xs font-bold text-white/30 uppercase tracking-[0.18em] mb-6">
                Our Services
              </h3>
              <div className="space-y-3">
                {services.map(({ label, href }) => (
                  <Link key={href} href={href}
                    className="flex items-center gap-1.5 text-white/45 hover:text-amber-400 text-sm transition-colors duration-200 group">
                    <span className="w-1 h-1 bg-amber-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                    {label}
                  </Link>
                ))}
              </div>
            </div>

            {/* ── Useful Links ─────────────────────────────────────────── */}
            <div>
              <h3 className="text-xs font-bold text-white/30 uppercase tracking-[0.18em] mb-6">
                Useful Links
              </h3>
              <div className="space-y-3">
                {usefulLinks.map(({ label, href, internal }) =>
                  internal ? (
                    <Link key={href} href={href}
                      className="flex items-center gap-1.5 text-white/45 hover:text-amber-400 text-sm transition-colors duration-200 group">
                      <span className="w-1 h-1 bg-amber-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                      {label}
                    </Link>
                  ) : (
                    <a key={href} href={href} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-white/45 hover:text-amber-400 text-sm transition-colors duration-200 group">
                      <span className="w-1 h-1 bg-amber-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                      {label}
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-60 transition-opacity ml-auto" />
                    </a>
                  )
                )}
              </div>
            </div>

            {/* ── Agency Info + Social ──────────────────────────────────── */}
            <div>
              <h3 className="text-xs font-bold text-white/30 uppercase tracking-[0.18em] mb-6">
                Agency Info
              </h3>

              {/* Working Hours */}
              <div className="mb-5 bg-white/[0.03] border border-white/[0.07] rounded-xl p-4">
                <p className="text-[10px] font-bold text-white/25 uppercase tracking-widest mb-3">
                  Working Hours
                </p>
                <div className="space-y-1.5 text-xs text-white/45">
                  <div className="flex justify-between">
                    <span>Mon – Sat</span>
                    <span className="text-white/65">10:00 AM – 7:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="text-red-400/60">Closed</span>
                  </div>
                </div>
              </div>

              {/* Why Us */}
              <div className="mb-6 bg-white/[0.03] border border-white/[0.07] rounded-xl p-4">
                <p className="text-[10px] font-bold text-white/25 uppercase tracking-widest mb-3">
                  Why Proshala
                </p>
                <div className="space-y-2">
                  {[
                    "Google & Meta Certified",
                    "8+ Years of Experience",
                    "500+ Campaigns Delivered",
                    "AI-First Agency Approach",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <Zap className="w-3 h-3 text-amber-400 flex-shrink-0" />
                      <span className="text-xs text-white/45">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social */}
              <p className="text-[10px] font-bold text-white/25 uppercase tracking-widest mb-3">
                Follow Us
              </p>
              <div className="flex gap-2.5">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <a key={href} href={href} target="_blank" rel="noopener noreferrer"
                    aria-label={label}
                    className="w-9 h-9 bg-white/[0.04] border border-white/[0.08] rounded-xl flex items-center justify-center text-white/35 hover:text-amber-400 hover:bg-amber-500/10 hover:border-amber-500/30 transition-all duration-200">
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* ── Bottom Bar ───────────────────────────────────────────────── */}
        <div className="border-t border-white/[0.06] py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/20 text-xs text-center md:text-left">
              © {new Date().getFullYear()} Proshala Tech. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center md:justify-end gap-x-6 gap-y-2">
              {[
                { label: "Privacy Policy",   href: "/privacy-policy" },
                { label: "Terms of Service", href: "/terms-of-service" },
                { label: "Disclaimer",       href: "/disclaimer" },
              ].map(({ label, href }) => (
                <Link key={href} href={href}
                  className="text-white/20 hover:text-amber-400 text-xs transition-colors duration-200">
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
