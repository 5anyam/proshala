// app/contact/page.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Phone, Mail, MapPin, Clock, Send, CheckCircle,
  ArrowRight, ChevronRight, Zap, MessageSquare,
  Building2, Calendar, AlertCircle,
} from "lucide-react";
import { cn } from "@/lib/utils";

const PHONE      = "+919999774046";
const PHONE_DISP = "+91 99997 74046";
const EMAIL      = "contact@proshala.com";

// ─── Data ──────────────────────────────────────────────────────
const contactInfo = [
  {
    icon: Phone,
    label: "Call Us",
    value: PHONE_DISP,
    sub: "Mon–Sat, 10 AM – 7 PM",
    href: `tel:${PHONE}`,
  },
  {
    icon: Mail,
    label: "Email Us",
    value: EMAIL,
    sub: "Reply within 4 hours",
    href: `mailto:${EMAIL}`,
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Delhi, India",
    sub: "Serving clients Pan India",
    href: "https://maps.google.com",
  },
  {
    icon: Clock,
    label: "Working Hours",
    value: "Mon – Sat",
    sub: "10:00 AM – 7:00 PM IST",
    href: null,
  },
];

const services = [
  "AI Tools & Automation (SaaS / Chatbots / Workflows)",
  "Google Ads (Search / Display / YouTube / Shopping)",
  "SEO (Local / Technical / Content Marketing)",
  "Social Media Ads (Meta / LinkedIn / YouTube)",
  "Performance Marketing & Affiliate Campaigns",
  "Web Development (Next.js / WordPress / Landing Pages)",
  "Ecommerce Marketing & CRO",
  "Multiple Services",
  "Not Sure — Need Guidance",
];

const budgets = [
  "Under ₹20,000/month",
  "₹20,000 – ₹50,000/month",
  "₹50,000 – ₹1,00,000/month",
  "₹1,00,000 – ₹3,00,000/month",
  "₹3,00,000+/month",
];

const steps = [
  { step: "01", title: "Submit Form",      desc: "Fill out the form and we'll receive your details instantly." },
  { step: "02", title: "Discovery Call",   desc: "A 30-min call to understand your goals, competition, and current setup." },
  { step: "03", title: "Free Audit",       desc: "We audit your current digital presence and identify growth opportunities." },
  { step: "04", title: "Strategy & Quote", desc: "You receive a clear strategy and transparent pricing — no obligation." },
];

const faqs = [
  {
    q: "How quickly will you respond to my enquiry?",
    a: "We respond to all enquiries within 4 business hours on weekdays. For urgent matters, call us directly — our team is available Mon–Sat, 10 AM–7 PM IST.",
  },
  {
    q: "Is the initial consultation really free?",
    a: "Yes, completely free. The discovery call and audit involve no charges or obligations. We share our findings and recommendations regardless of whether you decide to work with us.",
  },
  {
    q: "Do you work with startups and small businesses?",
    a: "Absolutely. We work with businesses at every stage — from early-stage startups with ₹20,000/month budgets to established brands spending ₹50L+/month. Our recommendations are always calibrated to your budget and stage.",
  },
  {
    q: "Can I meet in person at your Delhi office?",
    a: "Yes — we welcome in-person meetings at our Delhi office. Schedule via the form or call us to book a time. We also serve clients remotely across India and internationally.",
  },
];

type FormData = {
  name: string; email: string; phone: string; company: string;
  service: string; budget: string; message: string;
};
type FormStatus = "idle" | "loading" | "success" | "error";

// ─── Shared input class ─────────────────────────────────────────
const inputCls =
  "w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/25 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/10 transition-all";

const labelCls = "block text-xs font-bold text-white/60 mb-1.5";

export default function ContactPage() {
  const [form, setForm] = useState<FormData>({
    name: "", email: "", phone: "", company: "",
    service: "", budget: "", message: "",
  });
  const [status, setStatus] = useState<FormStatus>("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────── */}
      <section className="relative bg-[#0A0A0A] pt-28 pb-0 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-24 right-0 w-[500px] h-[500px] rounded-full blur-[120px]"
            style={{ background: "radial-gradient(circle, rgba(245,158,11,0.08) 0%, transparent 70%)" }} />
          <div className="absolute bottom-0 -left-10 w-[350px] h-[350px] rounded-full blur-[100px]"
            style={{ background: "radial-gradient(circle, rgba(251,146,60,0.05) 0%, transparent 70%)" }} />
          <div className="absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage: "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
              backgroundSize: "64px 64px",
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-1.5 text-xs text-white/30 mb-8 flex-wrap">
            <Link href="/" className="hover:text-amber-400 transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-white/55">Contact</span>
          </nav>

          <div className="max-w-3xl pb-16 lg:pb-20" style={{ animation: "heroFadeIn 0.7s ease both" }}>
            <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 rounded-full px-4 py-1.5 mb-6">
              <MessageSquare className="w-3.5 h-3.5 text-amber-400" />
              <span className="text-amber-400 text-xs font-bold tracking-wide uppercase">
                Free Audit · No Obligation · Reply in 4 Hours
              </span>
            </div>

            <h1 className="text-[38px] sm:text-5xl lg:text-[58px] font-black leading-[1.04] tracking-tight mb-5">
              <span className="text-white">Let us Grow Your</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500">
                Business Together
              </span>
            </h1>

            <p className="text-white/50 text-base sm:text-lg leading-relaxed mb-8 max-w-xl">
              Tell us about your business and goals. We will audit your current
              digital presence and give you a{" "}
              <strong className="text-white font-bold">clear, actionable strategy — completely free.</strong>
            </p>

            <div className="flex flex-wrap gap-5">
              {["Free Audit Included", "No Lock-in Contracts", "Response in 4 Hours", "Pan India + International"].map((b) => (
                <div key={b} className="flex items-center gap-1.5 text-xs text-white/40 font-medium">
                  <CheckCircle className="w-3.5 h-3.5 text-amber-500 flex-shrink-0" /> {b}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Wave divider */}
        <div className="w-full overflow-hidden leading-none">
          <svg viewBox="0 0 1440 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-7">
            <path d="M0,18 C360,36 1080,0 1440,18 L1440,36 L0,36 Z" fill="#0D0D0D" />
          </svg>
        </div>
      </section>

      {/* ── CONTACT INFO CARDS ────────────────────────────────── */}
      <section className="bg-[#0D0D0D] py-10 border-b border-white/[0.06]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {contactInfo.map(({ icon: Icon, label, value, sub, href }, i) => {
              const Wrapper = href ? "a" : "div";
              return (
                <Wrapper
                  key={i}
                  {...(href
                    ? { href, target: href.startsWith("http") ? "_blank" : undefined, rel: href.startsWith("http") ? "noopener noreferrer" : undefined }
                    : {})}
                  className="bg-white/[0.03] border border-white/[0.07] rounded-2xl p-5 hover:border-amber-500/30 hover:-translate-y-0.5 transition-all group cursor-default"
                  style={{ animation: `fadeSlideUp 0.5s ease ${i * 0.07}s both` }}
                >
                  <div className="w-9 h-9 bg-amber-500/10 border border-amber-500/15 rounded-xl flex items-center justify-center mb-3 group-hover:bg-amber-500/20 group-hover:scale-110 transition-all">
                    <Icon className="w-4 h-4 text-amber-400" />
                  </div>
                  <div className="text-[11px] text-white/30 font-medium mb-0.5">{label}</div>
                  <div className="font-bold text-white text-xs sm:text-sm leading-snug group-hover:text-amber-400 transition-colors">{value}</div>
                  <div className="text-[11px] text-white/30 mt-0.5">{sub}</div>
                </Wrapper>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── FORM + SIDEBAR ────────────────────────────────────── */}
      <section className="py-16 lg:py-24 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_360px] gap-10 items-start">

            {/* ── FORM ────────────────────────────────────────── */}
            <div>
              <div className="mb-8">
                <div className="inline-flex items-center gap-2 mb-4">
                  <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
                  <span className="text-amber-500 font-semibold text-xs uppercase tracking-[0.16em]">Get In Touch</span>
                  <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-black text-white mb-1">
                  Get Your Free{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-400">
                    Digital Audit
                  </span>
                </h2>
                <p className="text-white/40 text-sm">
                  Fill in your details — we will review and get back within 4 hours.
                </p>
              </div>

              {status === "success" ? (
                /* ── Success State ── */
                <div className="bg-green-500/5 border border-green-500/20 rounded-2xl p-8 text-center">
                  <div className="w-14 h-14 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-7 h-7 text-green-400" />
                  </div>
                  <h3 className="text-lg font-black text-white mb-2">Message Sent Successfully!</h3>
                  <p className="text-white/50 text-sm mb-5 max-w-sm mx-auto">
                    Thank you for reaching out. Our team will review your details
                    and contact you within 4 business hours.
                  </p>
                  <button
                    onClick={() => {
                      setStatus("idle");
                      setForm({ name: "", email: "", phone: "", company: "", service: "", budget: "", message: "" });
                    }}
                    className="inline-flex items-center gap-2 text-sm font-bold text-amber-400 hover:text-amber-300 transition-colors"
                  >
                    <ArrowRight className="w-4 h-4" /> Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">

                  {/* Row 1 */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className={labelCls}>Full Name <span className="text-red-500">*</span></label>
                      <input type="text" name="name" required value={form.name} onChange={handleChange}
                        placeholder="Your full name" className={inputCls} />
                    </div>
                    <div>
                      <label className={labelCls}>Phone Number <span className="text-red-500">*</span></label>
                      <input type="tel" name="phone" required value={form.phone} onChange={handleChange}
                        placeholder="+91 98765 43210" className={inputCls} />
                    </div>
                  </div>

                  {/* Row 2 */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className={labelCls}>Email Address <span className="text-red-500">*</span></label>
                      <input type="email" name="email" required value={form.email} onChange={handleChange}
                        placeholder="you@company.com" className={inputCls} />
                    </div>
                    <div>
                      <label className={labelCls}>Company / Website</label>
                      <input type="text" name="company" value={form.company} onChange={handleChange}
                        placeholder="yourcompany.com" className={inputCls} />
                    </div>
                  </div>

                  {/* Service */}
                  <div>
                    <label className={labelCls}>Service Interested In <span className="text-red-500">*</span></label>
                    <select name="service" required value={form.service} onChange={handleChange}
                      className={cn(inputCls, "appearance-none cursor-pointer")}>
                      <option value="" disabled className="bg-[#0A0A0A]">Select a service...</option>
                      {services.map((s, i) => (
                        <option key={i} value={s} className="bg-[#0A0A0A]">{s}</option>
                      ))}
                    </select>
                  </div>

                  {/* Budget */}
                  <div>
                    <label className={labelCls}>Monthly Marketing Budget</label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2">
                      {budgets.map((b, i) => (
                        <button key={i} type="button"
                          onClick={() => setForm((prev) => ({ ...prev, budget: b }))}
                          className={cn(
                            "px-3 py-2.5 rounded-xl text-[11px] font-semibold border transition-all text-center",
                            form.budget === b
                              ? "bg-amber-500 border-amber-500 text-gray-950 shadow-lg shadow-amber-500/20"
                              : "bg-white/[0.03] border-white/[0.08] text-white/50 hover:border-amber-500/40 hover:text-amber-400"
                          )}>
                          {b}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className={labelCls}>Tell Us About Your Goals</label>
                    <textarea name="message" value={form.message} onChange={handleChange} rows={4}
                      placeholder="What are you trying to achieve? E.g. increase leads, grow e-commerce revenue, improve rankings..."
                      className={cn(inputCls, "resize-none")} />
                  </div>

                  {/* Error */}
                  {status === "error" && (
                    <div className="flex items-center gap-2 text-red-400 text-sm bg-red-500/5 border border-red-500/20 rounded-xl px-4 py-3">
                      <AlertCircle className="w-4 h-4 flex-shrink-0" />
                      Something went wrong. Please try again or call us directly.
                    </div>
                  )}

                  {/* Submit */}
                  <button type="submit" disabled={status === "loading"}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-gray-950 font-black px-8 py-4 rounded-2xl hover:-translate-y-0.5 transition-all shadow-2xl shadow-amber-500/25 text-sm disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0 group">
                    {status === "loading" ? (
                      <>
                        <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Message & Get Free Audit
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-white/25">
                    By submitting this form, you agree to be contacted by our team.
                    We never share your data with third parties.
                  </p>
                </form>
              )}
            </div>

            {/* ── SIDEBAR ─────────────────────────────────────── */}
            <div className="lg:sticky lg:top-24 space-y-4">

              {/* What Happens Next */}
              <div className="bg-white/[0.025] border border-white/[0.07] rounded-2xl overflow-hidden">
                <div className="px-5 py-4 border-b border-white/[0.06]">
                  <h3 className="font-black text-white text-sm">What Happens Next?</h3>
                </div>
                <div className="p-5 space-y-4">
                  {steps.map(({ step, title, desc }, i) => (
                    <div key={i} className="flex gap-3">
                      <div className="flex flex-col items-center flex-shrink-0">
                        <div className="w-7 h-7 bg-amber-500 text-gray-950 rounded-lg flex items-center justify-center font-black text-[11px] shadow-sm shadow-amber-500/20">
                          {step}
                        </div>
                        {i < steps.length - 1 && (
                          <div className="w-px flex-1 bg-gradient-to-b from-amber-500/30 to-transparent mt-1.5 min-h-[12px]" />
                        )}
                      </div>
                      <div className="pt-0.5">
                        <div className="font-bold text-white text-xs mb-0.5">{title}</div>
                        <p className="text-white/40 text-[11px] leading-relaxed">{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Direct Contact */}
              <div className="bg-amber-500 rounded-2xl p-5 shadow-2xl shadow-amber-500/20">
                <h3 className="font-black text-gray-950 text-sm mb-1">Prefer to Talk Directly?</h3>
                <p className="text-gray-900/60 text-xs leading-relaxed mb-4">
                  Skip the form — call or WhatsApp us right now.
                </p>
                <div className="space-y-2.5">
                  <a href={`tel:${PHONE}`}
                    className="flex items-center gap-2.5 bg-gray-950/10 hover:bg-gray-950/20 transition-colors rounded-xl px-4 py-3 text-xs font-bold text-gray-950">
                    <Phone className="w-3.5 h-3.5 flex-shrink-0" /> {PHONE_DISP}
                  </a>
                  <a href={`https://wa.me/${PHONE}`} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-2.5 bg-green-600 hover:bg-green-700 transition-colors rounded-xl px-4 py-3 text-xs font-bold text-white">
                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    WhatsApp Us
                  </a>
                  <a href={`mailto:${EMAIL}`}
                    className="flex items-center gap-2.5 bg-gray-950/10 hover:bg-gray-950/20 transition-colors rounded-xl px-4 py-3 text-xs font-bold text-gray-950">
                    <Mail className="w-3.5 h-3.5 flex-shrink-0" /> {EMAIL}
                  </a>
                </div>
              </div>

              {/* Office Hours */}
              <div className="bg-white/[0.025] border border-white/[0.07] rounded-2xl p-5">
                <h3 className="font-black text-white text-sm mb-3 flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-amber-400" /> Office Hours
                </h3>
                <div className="space-y-2">
                  {[
                    { day: "Monday – Friday", hours: "10:00 AM – 7:00 PM", active: true },
                    { day: "Saturday",        hours: "10:00 AM – 5:00 PM", active: true },
                    { day: "Sunday",          hours: "Closed",             active: false },
                  ].map(({ day, hours, active }, i) => (
                    <div key={i} className="flex items-center justify-between text-xs">
                      <span className="text-white/50">{day}</span>
                      <span className={cn("font-bold", active ? "text-white" : "text-white/25")}>
                        {hours}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mt-3 pt-3 border-t border-white/[0.05] flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse flex-shrink-0" />
                  <span className="text-[11px] text-white/30">Currently available</span>
                </div>
              </div>

              {/* Location */}
              <div className="bg-white/[0.025] border border-white/[0.07] rounded-2xl p-5">
                <h3 className="font-black text-white text-sm mb-3 flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-amber-400" /> Location
                </h3>
                <p className="text-xs text-white/45 leading-relaxed mb-3">
                  Based in Delhi, India. Serving clients across India and internationally with remote-first delivery.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Delhi NCR", "Mumbai", "Bangalore", "Pan India", "UK / UAE"].map((loc) => (
                    <span key={loc}
                      className="text-[11px] font-medium bg-white/[0.04] border border-white/[0.07] text-white/40 px-2.5 py-1 rounded-full">
                      {loc}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ── FAQs ──────────────────────────────────────────────── */}
      <section className="py-16 bg-[#0D0D0D] border-t border-white/[0.06]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
              <span className="text-amber-500 font-semibold text-xs uppercase tracking-[0.16em]">FAQs</span>
              <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white">Common Questions</h2>
          </div>

          <div className="space-y-3">
            {faqs.map(({ q, a }, i) => (
              <details key={i}
                className="group bg-white/[0.025] border border-white/[0.07] rounded-2xl overflow-hidden hover:border-amber-500/25 transition-colors">
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

      {/* ── CTA ───────────────────────────────────────────────── */}
      <section className="py-16 lg:py-24 relative overflow-hidden bg-[#0A0A0A]">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0"
            style={{ background: "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(245,158,11,0.07) 0%, transparent 70%)" }} />
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-amber-500/40 to-transparent" />
          <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-amber-500/40 to-transparent" />
        </div>

        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4 leading-tight">
            Ready to See{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-300">
              Real Growth?
            </span>
          </h2>
          <p className="text-white/50 text-sm sm:text-base mb-8 max-w-md mx-auto leading-relaxed">
            Join 150+ businesses that trust Proshala to manage their digital
            marketing and deliver measurable ROI every month.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="#"
              onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
              className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-gray-950 font-black px-8 py-4 rounded-2xl hover:-translate-y-0.5 transition-all shadow-2xl shadow-amber-500/20 text-sm group">
              <Zap className="w-4 h-4" />
              Get Free Audit Now
            </a>
            <a href={`tel:${PHONE}`}
              className="inline-flex items-center justify-center gap-2 border border-white/10 text-white/80 font-semibold px-8 py-4 rounded-2xl hover:bg-white/5 hover:border-white/20 transition-all text-sm">
              <Phone className="w-4 h-4 text-amber-400 flex-shrink-0" /> {PHONE_DISP}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
