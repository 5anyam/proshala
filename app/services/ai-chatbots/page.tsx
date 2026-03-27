// app/services/ai-chatbots/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import {
  Bot, MessageSquare, Zap, Brain, Globe, ShieldCheck,
  CheckCircle, ArrowRight, Phone, ChevronRight,
  Clock, TrendingUp, Users, Settings, BarChart3,
  Workflow, Layers, Star, RefreshCw, Target,
} from "lucide-react";

// ─── SEO Metadata ─────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "AI Chatbot Development Services in India | Proshala",
  description:
    "Build AI chatbots for WhatsApp, website, and Instagram with Proshala. GPT-4 powered chatbots for lead generation, customer support & sales automation. Delhi NCR & Pan India.",
  keywords:
    "AI chatbot development India, WhatsApp chatbot India, AI chatbot agency Delhi, GPT-4 chatbot development, website chatbot India, chatbot for business India, WhatsApp bot development Delhi, AI customer support bot, lead generation chatbot India, Proshala chatbot",
  alternates: {
    canonical: "https://proshala.com/services/ai-chatbots",
  },
  openGraph: {
    title: "AI Chatbot Development Services in India | Proshala",
    description:
      "GPT-4 powered AI chatbots for WhatsApp, website, and Instagram. Qualify leads, automate support, and book appointments 24/7 — built for Indian businesses.",
    url: "https://proshala.com/services/ai-chatbots",
    siteName: "Proshala",
    type: "website",
  },
};

// ─── Constants ────────────────────────────────────────────────────────────────
const PHONE      = "+919999774046";
const PHONE_DISP = "+91 99997 74046";

// ─── Data ─────────────────────────────────────────────────────────────────────
const services = [
  {
    icon: MessageSquare,
    title: "WhatsApp AI Chatbot",
    desc: "Deploy a GPT-4 powered bot on your official WhatsApp Business number. Qualify leads, send catalogues, book appointments, take orders, and handle support — all on WhatsApp.",
    tags: ["WhatsApp API", "GPT-4", "Lead Qualification", "Order Taking"],
    popular: true,
  },
  {
    icon: Globe,
    title: "Website AI Chatbot",
    desc: "An intelligent chat widget on your website that understands visitor intent, answers questions from your knowledge base, and captures lead details before handing off to your team.",
    tags: ["Live Chat Widget", "Lead Capture", "Knowledge Base", "CRM Sync"],
    popular: false,
  },
  {
    icon: Bot,
    title: "Instagram & Facebook DM Bot",
    desc: "Auto-reply to DMs and story replies on Instagram and Facebook with context-aware responses — turn every comment and DM into a qualified lead automatically.",
    tags: ["Meta API", "DM Automation", "Story Replies", "Manychat"],
    popular: false,
  },
  {
    icon: Brain,
    title: "Custom AI Trained Chatbot",
    desc: "A chatbot trained exclusively on your business data — product catalogue, FAQs, pricing, policies, and past conversations — using RAG (Retrieval-Augmented Generation).",
    tags: ["RAG", "Custom Training", "PDF / URL Ingestion", "Embeddings"],
    popular: false,
  },
  {
    icon: Workflow,
    title: "Lead Generation Bot",
    desc: "Conversational lead forms that feel like a real chat — collect name, phone, budget, requirements, and intent score before routing to the right sales rep.",
    tags: ["Lead Scoring", "CRM Push", "Routing Logic", "Follow-up"],
    popular: false,
  },
  {
    icon: BarChart3,
    title: "Customer Support Bot",
    desc: "Deflect 60–80% of repetitive support tickets with an AI bot that handles order status, refunds, FAQs, and escalates complex issues to your team with full context.",
    tags: ["Ticket Deflection", "Escalation", "Order Status", "Helpdesk"],
    popular: false,
  },
  {
    icon: RefreshCw,
    title: "Appointment Booking Bot",
    desc: "Let customers book, reschedule, and cancel appointments via chat on WhatsApp or your website — synced live with Google Calendar or Calendly.",
    tags: ["Google Calendar", "Calendly", "Reminders", "Rescheduling"],
    popular: false,
  },
  {
    icon: Layers,
    title: "E-commerce Sales Bot",
    desc: "Guide shoppers from product discovery to checkout inside WhatsApp or your site — product recommendations, cart recovery, COD confirmation, and post-order updates.",
    tags: ["Product Reco", "Cart Recovery", "COD Confirm", "Shopify"],
    popular: false,
  },
  {
    icon: Settings,
    title: "CRM-Integrated Chatbot",
    desc: "Every lead captured, conversation logged, and follow-up triggered — automatically synced to HubSpot, Zoho, GoHighLevel, or your custom CRM in real time.",
    tags: ["HubSpot", "Zoho CRM", "GoHighLevel", "Webhooks"],
    popular: false,
  },
];

const stats = [
  { value: "24/7",  label: "Bot availability" },
  { value: "60s",   label: "Avg. lead response time" },
  { value: "80%",   label: "Support tickets deflected" },
  { value: "3×",    label: "More leads from same traffic" },
];

const process = [
  {
    step: "01",
    title: "Conversation Design",
    desc: "We map every scenario your bot needs to handle — lead qualification, FAQs, objections, handoff triggers — and design the conversation flow before writing a single line of code.",
  },
  {
    step: "02",
    title: "AI Training & Knowledge Base",
    desc: "We ingest your product catalogue, FAQs, pricing documents, and website content into a vector database so the bot answers accurately from your actual business data.",
  },
  {
    step: "03",
    title: "Platform Integration",
    desc: "We connect the bot to your chosen channels — WhatsApp Business API, website widget, Instagram DMs — and integrate with your CRM, calendar, and helpdesk tools.",
  },
  {
    step: "04",
    title: "Test & Tune",
    desc: "We run 100+ test conversations covering edge cases, off-topic queries, and fallback scenarios. The bot is tuned until it handles your real customer conversations accurately.",
  },
  {
    step: "05",
    title: "Launch & Monitor",
    desc: "Go live with a full analytics dashboard tracking conversation volume, lead capture rate, handoff rate, and bot accuracy — with monthly reviews and continuous improvement.",
  },
];

const useCases = [
  {
    industry: "Real Estate",
    emoji: "🏠",
    scenario: "A visitor lands on your site at 11 PM. The bot qualifies budget, location, and BHK preference, adds them to your CRM as a hot lead, and books a site visit — all before your agent wakes up.",
  },
  {
    industry: "Education / Coaching",
    emoji: "🎓",
    scenario: "A student WhatsApps asking about your course. The bot shares the brochure, answers fee and batch queries, collects details, and schedules a counsellor call — zero manual effort.",
  },
  {
    industry: "Healthcare / Clinics",
    emoji: "🏥",
    scenario: "Patients book appointments on WhatsApp, receive confirmation and reminder at 24 hrs, get pre-appointment instructions, and share feedback post-visit — fully automated.",
  },
  {
    industry: "E-commerce / D2C",
    emoji: "🛒",
    scenario: "Customers track orders, raise return requests, and get product recommendations via WhatsApp — deflecting 75% of support tickets without involving your team.",
  },
  {
    industry: "Finance / Insurance",
    emoji: "💰",
    scenario: "A prospect asks about home loan eligibility. The bot collects income, existing EMIs, and property value, calculates rough eligibility, and books a callback from your advisor.",
  },
  {
    industry: "Hospitality / Travel",
    emoji: "✈️",
    scenario: "Guests check room availability, get package details, make tentative bookings, and receive itinerary confirmations — all on WhatsApp without calling your front desk.",
  },
];

const platforms = [
  { name: "WhatsApp Business API", icon: "💬" },
  { name: "Website Live Chat",     icon: "🌐" },
  { name: "Instagram DMs",         icon: "📸" },
  { name: "Facebook Messenger",    icon: "📘" },
  { name: "Telegram Bot",          icon: "✈️" },
  { name: "SMS / IVR",             icon: "📱" },
];

const aiModels = [
  "GPT-4o (OpenAI)", "Gemini 1.5 Pro", "Claude 3.5 Sonnet",
  "Llama 3 (Open Source)", "Mistral AI", "Custom Fine-tuned Models",
];

const integrations = [
  "HubSpot CRM", "Zoho CRM", "GoHighLevel", "Salesforce",
  "Google Calendar", "Calendly", "Razorpay", "Shopify",
  "WooCommerce", "Freshdesk", "Intercom", "Google Sheets",
];

const faqs = [
  {
    q: "What is an AI chatbot and how is it different from a regular chatbot?",
    a: "A traditional rule-based chatbot follows a fixed decision tree — it can only respond to pre-programmed options and fails the moment a user types something unexpected. An AI chatbot uses large language models (LLMs) like GPT-4 or Gemini to understand natural language, handle open-ended questions, maintain conversation context, and generate human-like responses. It learns from your business data and improves over time — making it far more effective for lead generation, support, and sales conversations.",
  },
  {
    q: "How much does an AI chatbot cost to build in India?",
    a: "AI chatbot development costs in India range from ₹18,000 for a simple FAQ or lead capture bot to ₹1,50,000+ for a fully custom, multi-channel AI bot with CRM integration, custom training on your data, and analytics dashboards. At Proshala, simple WhatsApp bots start at ₹20,000. Custom GPT-4 trained bots with RAG architecture and full CRM integration typically range from ₹60,000–₹1,20,000. There are also ongoing costs for the WhatsApp Business API provider (₹2,000–₹8,000/month) and AI API usage (pay-per-use, typically ₹3,000–₹15,000/month depending on volume).",
  },
  {
    q: "Can the chatbot be trained on my specific business data?",
    a: "Yes — this is one of our core specialisations. We use RAG (Retrieval-Augmented Generation) to train your bot on your exact business content: product catalogues, FAQs, pricing documents, policy PDFs, website pages, and even past customer conversations. This means the bot answers from your actual data — not from generic internet knowledge — resulting in far more accurate, brand-consistent responses. The knowledge base can be updated any time without retraining the entire model.",
  },
  {
    q: "Is WhatsApp chatbot legal and compliant in India?",
    a: "Yes — as long as you use the official WhatsApp Business API through a Meta-approved Business Solution Provider (BSP). We handle the entire API setup through approved providers (like Interakt, AiSensy, or Wati), ensure all message templates are submitted for Meta approval, and build your bot to comply with Meta's messaging policies. This includes proper opt-in collection, message frequency limits, and opt-out handling — keeping you fully compliant.",
  },
  {
    q: "How long does it take to build and deploy an AI chatbot?",
    a: "A simple FAQ or lead capture chatbot can go live in 5–7 business days. A full-featured WhatsApp bot with custom AI training, CRM integration, and multi-scenario flows typically takes 3–4 weeks. Custom enterprise bots with RAG, analytics dashboards, and multiple channel integrations take 6–10 weeks. We always aim to get a working version live quickly and iterate based on real conversation data.",
  },
  {
    q: "Can the bot hand off to a human agent when needed?",
    a: "Yes — human handoff is a core feature we build into every chatbot. You define the exact triggers: when a user explicitly asks for a human, when the bot's confidence drops below a threshold, when a high-value lead is identified, or when a specific keyword is detected. The bot transfers the full conversation history to your agent on WhatsApp, your CRM, or your helpdesk — so the agent has complete context and the customer does not have to repeat themselves.",
  },
  {
    q: "Will the chatbot work in Hindi and regional languages?",
    a: "Yes. GPT-4 and Gemini are highly capable in Hindi, Hinglish (mixed Hindi-English), and most major Indian languages including Marathi, Tamil, Telugu, Bengali, and Kannada. We configure the bot to detect the user's language and respond accordingly. For heavily regional-language businesses, we fine-tune prompts with local vocabulary and cultural context to ensure natural, comfortable conversations.",
  },
  {
    q: "Do you provide analytics on chatbot performance?",
    a: "Yes — every chatbot we deploy includes a performance dashboard tracking: total conversations, unique users, lead capture rate, goal completion rate (bookings, enquiries), handoff rate, most common user queries, and bot accuracy score. For WhatsApp bots, we also track message delivery, read rates, and template performance. Monthly review calls are included in all retainer plans to analyse data and improve bot logic.",
  },
];

// ─── JSON-LD ──────────────────────────────────────────────────────────────────
const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "AI Chatbot Development Services",
  alternateName: [
    "WhatsApp Chatbot Development India",
    "AI Chatbot Agency Delhi",
    "GPT-4 Chatbot Development",
  ],
  description:
    "Proshala builds GPT-4 powered AI chatbots for WhatsApp, websites, and Instagram — for lead generation, customer support, and sales automation. Serving Delhi NCR and Pan India.",
  provider: {
    "@type": "Organization",
    name: "Proshala",
    url: "https://proshala.com",
    telephone: PHONE,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Delhi",
      addressRegion: "Delhi NCR",
      addressCountry: "IN",
    },
  },
  areaServed: [
    { "@type": "City",    name: "Delhi" },
    { "@type": "City",    name: "Noida" },
    { "@type": "City",    name: "Gurgaon" },
    { "@type": "Country", name: "India" },
  ],
  serviceType: "AI Chatbot Development",
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: "INR",
    lowPrice: "20000",
    offerCount: "9",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home",         item: "https://proshala.com" },
    { "@type": "ListItem", position: 2, name: "Services",     item: "https://proshala.com/services" },
    { "@type": "ListItem", position: 3, name: "AI Chatbots",  item: "https://proshala.com/services/ai-chatbots" },
  ],
};

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function AiChatbotsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* ── HERO ──────────────────────────────────────────────────────── */}
      <section className="relative bg-[#0A0A0A] pt-28 pb-0 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-24 right-0 w-[560px] h-[560px] rounded-full blur-[130px]"
            style={{ background: "radial-gradient(circle, rgba(245,158,11,0.09) 0%, transparent 70%)" }} />
          <div className="absolute bottom-0 -left-10 w-[360px] h-[360px] rounded-full blur-[100px]"
            style={{ background: "radial-gradient(circle, rgba(251,146,60,0.05) 0%, transparent 70%)" }} />
          <div className="absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.4) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.4) 1px,transparent 1px)",
              backgroundSize: "64px 64px",
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-white/30 mb-8 flex-wrap">
            <Link href="/" className="hover:text-amber-400 transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/services" className="hover:text-amber-400 transition-colors">Services</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-white/55">AI Chatbots</span>
          </nav>

          <div className="max-w-3xl pb-16 lg:pb-20" style={{ animation: "heroFadeIn 0.7s ease both" }}>
            <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 rounded-full px-4 py-1.5 mb-6">
              <Bot className="w-3.5 h-3.5 text-amber-400" />
              <span className="text-amber-400 text-xs font-bold tracking-wide uppercase">
                AI Chatbots · WhatsApp · Website · Instagram · India
              </span>
            </div>

            {/* H1 */}
            <h1 className="text-[38px] sm:text-5xl lg:text-[58px] font-black leading-[1.04] tracking-tight mb-5">
              <span className="text-white">AI Chatbot Development</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500">
                Services in India
              </span>
            </h1>

            <p className="text-white/55 text-base sm:text-lg leading-relaxed mb-4 max-w-xl">
              Proshala builds <strong className="text-white font-bold">GPT-4 powered AI chatbots</strong>{" "}
              for WhatsApp, your website, and Instagram — that qualify leads, automate
              customer support, book appointments, and close sales{" "}
              <strong className="text-white font-bold">24 hours a day</strong>, without
              adding a single person to your team.
            </p>
            <p className="text-white/40 text-sm leading-relaxed mb-8 max-w-xl">
              From a simple FAQ bot to a fully custom AI assistant trained on your product
              catalogue and CRM data — we design, build, integrate, and monitor chatbots for
              businesses across <strong className="text-white/60">Delhi NCR and Pan India</strong>.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <Link href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-gray-950 font-black px-7 py-4 rounded-2xl hover:-translate-y-0.5 transition-all shadow-2xl shadow-amber-500/25 text-sm group">
                Build My AI Chatbot
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a href={`tel:${PHONE}`}
                className="inline-flex items-center justify-center gap-2 border border-white/10 text-white/80 font-semibold px-7 py-4 rounded-2xl hover:bg-white/5 hover:border-white/20 transition-all text-sm">
                <Phone className="w-4 h-4 text-amber-400 flex-shrink-0" /> {PHONE_DISP}
              </a>
            </div>

            <div className="flex flex-wrap gap-5">
              {[
                "Live in 5–7 Days",
                "Trained on Your Data",
                "Hindi & Hinglish Support",
                "Meta-Compliant WhatsApp API",
              ].map((b) => (
                <div key={b} className="flex items-center gap-1.5 text-xs text-white/40 font-medium">
                  <CheckCircle className="w-3.5 h-3.5 text-amber-500 flex-shrink-0" /> {b}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="w-full overflow-hidden leading-none">
          <svg viewBox="0 0 1440 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-7">
            <path d="M0,18 C360,36 1080,0 1440,18 L1440,36 L0,36 Z" fill="#0D0D0D" />
          </svg>
        </div>
      </section>

      {/* ── STATS ─────────────────────────────────────────────────────── */}
      <section className="bg-[#0D0D0D] py-10 border-b border-white/[0.06]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map(({ value, label }, i) => (
              <div key={i}
                className="bg-white/[0.03] border border-white/[0.07] rounded-2xl p-5 text-center hover:border-amber-500/30 hover:-translate-y-0.5 transition-all group"
                style={{ animation: `fadeSlideUp 0.5s ease ${i * 0.07}s both` }}>
                <div className="text-2xl sm:text-3xl font-black text-white mb-1 group-hover:text-amber-400 transition-colors">
                  {value}
                </div>
                <div className="text-xs text-white/35 font-medium">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT IS AI CHATBOT — SEO depth ────────────────────────────── */}
      <section className="py-16 lg:py-20 bg-[#0A0A0A]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
              <span className="text-amber-500 font-semibold text-xs uppercase tracking-[0.16em]">
                Why AI Chatbots in 2026?
              </span>
              <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-5">
              Your Customers Are on WhatsApp.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-400">
                Is Your Business?
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 text-white/55 text-sm leading-relaxed mb-10">
            <div className="space-y-4">
              <p>
                India has <strong className="text-white">500 million+ active WhatsApp users</strong> —
                the highest of any country in the world. When a potential customer wants to
                enquire about your product or service, their first instinct is to send a
                WhatsApp message, not fill a form. If your business takes 4 hours to respond,
                that lead has already gone to a competitor who replied in 30 seconds.
              </p>
              <p>
                An <strong className="text-white">AI chatbot</strong> is not just a fancy
                auto-reply. It understands what the customer is asking, responds naturally,
                asks qualifying questions, shares relevant information, and routes the
                conversation to the right person at the right time — all without any human
                involvement until it is actually needed.
              </p>
            </div>
            <div className="space-y-4">
              <p>
                The difference between a{" "}
                <strong className="text-white">rule-based bot and an AI chatbot</strong> is
                the difference between a phone menu and a knowledgeable customer service
                agent. Rule-based bots break the moment someone types something off-script.
                AI bots handle messy, real-world conversations — Hinglish, typos,
                multi-topic queries — with the fluency of a trained human.
              </p>
              <p>
                Businesses that deploy AI chatbots for WhatsApp and their website
                typically see a <strong className="text-amber-400">3× increase in lead
                capture</strong> from the same traffic, because no visitor leaves unanswered —
                even at 2 AM on a Sunday. Combined with CRM integration, every
                conversation becomes a structured, trackable sales interaction.
              </p>
            </div>
          </div>

          {/* Platforms */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {platforms.map(({ name, icon }) => (
              <div key={name}
                className="flex items-center gap-3 bg-white/[0.025] border border-white/[0.07] rounded-xl p-4 hover:border-amber-500/30 transition-colors group">
                <span className="text-xl">{icon}</span>
                <span className="text-white/65 text-xs font-semibold group-hover:text-amber-400 transition-colors">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ──────────────────────────────────────────────────── */}
      <section className="py-16 lg:py-24 bg-[#0D0D0D] border-y border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
              <span className="text-amber-500 font-semibold text-xs uppercase tracking-[0.16em]">What We Build</span>
              <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-3">
              9 Types of{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-400">
                AI Chatbots
              </span>
            </h2>
            <p className="text-white/40 text-sm max-w-lg mx-auto">
              Every bot is custom-built for your specific use case — not a template
              dropped on your website and forgotten.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map(({ icon: Icon, title, desc, tags, popular }, i) => (
              <div key={i}
                className={`relative bg-white/[0.025] border rounded-2xl p-6 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-amber-500/5 transition-all duration-300 group ${popular ? "border-amber-500/40 hover:border-amber-500/60" : "border-white/[0.07] hover:border-amber-500/35"}`}
                style={{ animation: `fadeSlideUp 0.6s ease ${i * 0.06}s both` }}>
                {popular && (
                  <div className="absolute -top-3 left-5">
                    <span className="inline-flex items-center gap-1 bg-amber-500 text-gray-950 text-[10px] font-black px-3 py-1 rounded-full shadow-lg shadow-amber-500/30">
                      <Star className="w-2.5 h-2.5" /> Most Popular
                    </span>
                  </div>
                )}
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-all ${popular ? "bg-amber-500/20 border border-amber-500/30" : "bg-amber-500/10 border border-amber-500/15"}`}>
                  <Icon className="w-4.5 h-4.5 text-amber-400" />
                </div>
                <h3 className="font-bold text-white text-sm mb-2 group-hover:text-amber-400 transition-colors">
                  {title}
                </h3>
                <p className="text-white/40 text-xs leading-relaxed mb-3">{desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {tags.map((tag) => (
                    <span key={tag}
                      className="text-[10px] font-semibold bg-amber-500/8 border border-amber-500/15 text-amber-400/70 px-2 py-0.5 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── USE CASES ─────────────────────────────────────────────────── */}
      <section className="py-16 lg:py-20 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
              <span className="text-amber-500 font-semibold text-xs uppercase tracking-[0.16em]">Use Cases</span>
              <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-3">
              Real Scenarios,{" "}
              <span className="text-amber-400">Real Results</span>
            </h2>
            <p className="text-white/40 text-sm max-w-lg mx-auto">
              How AI chatbots actually work in the field — across Indian industries.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {useCases.map(({ industry, emoji, scenario }, i) => (
              <div key={i}
                className="bg-white/[0.025] border border-white/[0.07] rounded-2xl p-5 hover:border-amber-500/30 transition-all group"
                style={{ animation: `fadeSlideUp 0.5s ease ${i * 0.08}s both` }}>
                <div className="flex items-center gap-2.5 mb-3">
                  <span className="text-xl">{emoji}</span>
                  <span className="text-amber-400 font-black text-xs uppercase tracking-wide">
                    {industry}
                  </span>
                </div>
                <p className="text-white/45 text-xs sm:text-sm leading-relaxed">{scenario}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ───────────────────────────────────────────────────── */}
      <section className="py-16 lg:py-24 bg-[#0D0D0D] border-y border-white/[0.06]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
              <span className="text-amber-500 font-semibold text-xs uppercase tracking-[0.16em]">How We Build It</span>
              <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white">
              Brief to Bot Live —{" "}
              <span className="text-amber-400">5 Steps</span>
            </h2>
          </div>

          <div className="space-y-3">
            {process.map(({ step, title, desc }, i) => (
              <div key={i}
                className="flex gap-5 bg-white/[0.025] border border-white/[0.07] rounded-2xl p-5 hover:border-amber-500/30 transition-all group"
                style={{ animation: `fadeSlideUp 0.5s ease ${i * 0.08}s both` }}>
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className="w-9 h-9 bg-amber-500 text-gray-950 rounded-xl flex items-center justify-center font-black text-sm shadow-lg shadow-amber-500/20 group-hover:scale-110 transition-transform">
                    {step}
                  </div>
                  {i < process.length - 1 && (
                    <div className="w-px flex-1 bg-gradient-to-b from-amber-500/30 to-transparent mt-2 min-h-[16px]" />
                  )}
                </div>
                <div className="pt-1">
                  <h3 className="font-bold text-white text-sm mb-1.5 group-hover:text-amber-400 transition-colors">
                    {title}
                  </h3>
                  <p className="text-white/40 text-xs sm:text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── AI MODELS + INTEGRATIONS ──────────────────────────────────── */}
      <section className="py-12 bg-[#0A0A0A]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div>
            <p className="text-center text-[11px] text-white/25 font-bold uppercase tracking-[0.2em] mb-5">
              AI Models We Work With
            </p>
            <div className="flex flex-wrap justify-center gap-2.5">
              {aiModels.map((m) => (
                <span key={m}
                  className="bg-white/[0.04] border border-white/[0.08] text-white/50 text-xs font-semibold px-4 py-2 rounded-full hover:border-amber-500/30 hover:text-amber-400 transition-all">
                  {m}
                </span>
              ))}
            </div>
          </div>
          <div>
            <p className="text-center text-[11px] text-white/25 font-bold uppercase tracking-[0.2em] mb-5">
              Tools &amp; Integrations
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {integrations.map((t) => (
                <span key={t}
                  className="bg-white/[0.04] border border-white/[0.08] text-white/45 text-xs font-semibold px-3.5 py-1.5 rounded-full hover:border-amber-500/30 hover:text-amber-400 transition-all">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY PROSHALA ──────────────────────────────────────────────── */}
      <section className="py-16 bg-[#0D0D0D] border-y border-white/[0.06]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
              <span className="text-amber-500 font-semibold text-xs uppercase tracking-[0.16em]">Why Proshala</span>
              <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white">
              Not Just a Bot — a{" "}
              <span className="text-amber-400">Revenue System</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                icon: Brain,
                title: "Real AI, Not Button Flows",
                desc: "We build LLM-powered bots that understand natural language — not click-path bots that break when a user types something unexpected.",
              },
              {
                icon: Target,
                title: "Trained on Your Data",
                desc: "Your bot knows your products, pricing, FAQs, and policies — because we train it on your actual content, not generic internet data.",
              },
              {
                icon: Clock,
                title: "Live in Days, Not Months",
                desc: "Simple bots go live in 5–7 days. We ship fast, iterate on real conversation data, and improve the bot continuously after launch.",
              },
              {
                icon: ShieldCheck,
                title: "Meta-Compliant by Default",
                desc: "Every WhatsApp bot is built through an approved BSP with proper opt-ins, template approvals, and frequency policies — zero compliance risk.",
              },
              {
                icon: TrendingUp,
                title: "Tied to Revenue Metrics",
                desc: "We measure bots by leads captured, appointments booked, and conversions — not just conversation volume. ROI is the only KPI that matters.",
              },
              {
                icon: Users,
                title: "Human Handoff Built In",
                desc: "Your bot knows when to step aside. Smooth handoffs to your team — with full conversation context transferred — so no lead ever feels ignored.",
              },
            ].map(({ icon: Icon, title, desc }, i) => (
              <div key={i}
                className="bg-white/[0.025] border border-white/[0.07] rounded-2xl p-5 hover:border-amber-500/30 hover:-translate-y-1 transition-all group"
                style={{ animation: `fadeSlideUp 0.5s ease ${i * 0.07}s both` }}>
                <div className="w-9 h-9 bg-amber-500/10 border border-amber-500/15 rounded-xl flex items-center justify-center mb-3 group-hover:bg-amber-500/20 group-hover:scale-110 transition-all">
                  <Icon className="w-4 h-4 text-amber-400" />
                </div>
                <h3 className="font-bold text-white text-sm mb-1.5 group-hover:text-amber-400 transition-colors">{title}</h3>
                <p className="text-white/40 text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQs ──────────────────────────────────────────────────────── */}
      <section className="py-16 bg-[#0A0A0A]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
              <span className="text-amber-500 font-semibold text-xs uppercase tracking-[0.16em]">FAQs</span>
              <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white">
              AI Chatbot — <br className="sm:hidden" />Common Questions
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map(({ q, a }, i) => (
              <details key={i}
                className="group bg-white/[0.025] border border-white/[0.07] rounded-2xl overflow-hidden hover:border-amber-500/25 transition-colors"
                style={{ animation: `fadeSlideUp 0.5s ease ${i * 0.06}s both` }}>
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

      {/* ── CTA ───────────────────────────────────────────────────────── */}
      <section className="py-16 lg:py-24 relative overflow-hidden bg-[#0A0A0A]">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0"
            style={{ background: "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(245,158,11,0.07) 0%, transparent 70%)" }} />
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-amber-500/40 to-transparent" />
          <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-amber-500/40 to-transparent" />
        </div>

        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
          style={{ animation: "fadeSlideUp 0.6s ease both" }}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4 leading-tight">
            Your Leads Shouldn&apos;t{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-300">
              Wait Till Morning
            </span>
          </h2>
          <p className="text-white/50 text-sm sm:text-base mb-8 max-w-md mx-auto leading-relaxed">
            Tell us your use case — WhatsApp lead bot, website support bot, or booking
            assistant. We will design a conversation flow and give you a live demo prototype
            within 48 hours. Free, no commitment.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-5">
            <Link href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-gray-950 font-black px-8 py-4 rounded-2xl hover:-translate-y-0.5 transition-all shadow-2xl shadow-amber-500/20 text-sm group">
              <Bot className="w-4 h-4" />
              Get a Free Bot Demo
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a href={`tel:${PHONE}`}
              className="inline-flex items-center justify-center gap-2 border border-white/10 text-white/80 font-semibold px-8 py-4 rounded-2xl hover:bg-white/5 hover:border-white/20 transition-all text-sm">
              <Phone className="w-4 h-4 text-amber-400 flex-shrink-0" /> {PHONE_DISP}
            </a>
          </div>
          <p className="text-white/25 text-xs">
            Free prototype · Live in 5–7 days · Hindi &amp; Hinglish supported
          </p>
        </div>
      </section>
    </>
  );
}