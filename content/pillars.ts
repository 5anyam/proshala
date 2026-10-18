import type { Faq } from './types'

export type Pillar = {
  path: string
  metaTitle: string
  metaDescription: string
  eyebrow: string
  h1: string
  intro: string
  primaryKeyword: string
  secondaryKeywords: string[]
  group: 'build' | 'automate'
  /** Answer-first sections with question-style H2s (AEO) */
  answers: { h2: string; body: string; bullets?: string[] }[]
  table?: { caption: string; h2: string; head: string[]; rows: string[][]; note?: string }
  included: string[]
  process: { title: string; desc: string }[]
  faqs: Faq[]
  updated: string
}

export const websitePillar: Pillar = {
  path: '/website-development',
  metaTitle: 'Website Development Company in Delhi | Proshala',
  metaDescription:
    'Website development company in Rohini, Delhi. Business websites, e-commerce, WordPress, Next.js and web apps — fast, SEO-ready and fully owned by you. Free quote.',
  eyebrow: 'Build · Website & web app development',
  h1: 'Website Development Company in Delhi',
  intro:
    'Proshala is a website development company in Rohini, Delhi. We design and build business websites, online stores and custom web apps that load in under two seconds on a phone, rank on Google, and turn visitors into calls and WhatsApp enquiries. You get a fixed written quote, and you own the domain, code and content.',
  primaryKeyword: 'website development company Delhi',
  secondaryKeywords: ['web design company Delhi', 'website developer near me', 'website development company in Rohini', 'business website cost Delhi'],
  group: 'build',
  answers: [
    {
      h2: 'What does a website development company actually do?',
      body:
        'A website development company plans, designs, builds and launches your website, then keeps it running. A good one also handles the parts that decide whether the site makes money: page structure based on what customers search, fast loading on mobile networks, technical SEO, analytics and conversion tracking, and a content system your team can update.',
    },
    {
      h2: 'How much does a website cost in Delhi?',
      body:
        'In Delhi, website prices range from a few thousand rupees for a template to several lakhs for a custom web app. The price is driven by four things: number of unique page designs, who writes the content, integrations (booking, payments, CRM, WhatsApp) and the platform. Compare quotes by what is included, not just the number — and always check who owns the domain and code.',
      bullets: [
        'Small business website (5–10 pages): the most affordable starting point',
        'E-commerce store: more, because of catalogue, payments, shipping and testing',
        'Custom web app or portal: priced per first version (MVP), then by feature',
      ],
    },
    {
      h2: 'Should you choose WordPress, Next.js or Shopify?',
      body:
        'Choose WordPress when a non-technical team will publish a lot of content and the budget is moderate. Choose Next.js when speed, custom features or integrations matter most. Choose Shopify when you are selling products and want a reliable store with minimal maintenance. We build on all three and recommend based on your goals, not our preference.',
    },
    {
      h2: 'How long does it take to build a website?',
      body:
        'A landing page takes about a week, a business website 2–4 weeks, an online store 3–8 weeks and a custom web app 6–14 weeks for the first version. The biggest variable is content: when text and photos are ready on time, projects finish on time.',
    },
    {
      h2: 'What makes a website rank and convert in 2026?',
      body:
        'Google rewards pages that load fast, answer the searcher’s question clearly and come from a business with real signals of trust — reviews, a consistent address and genuine expertise. Visitors convert when they immediately see what you do, where you are, what it roughly costs and how to contact you in one tap. We design every page around both.',
    },
  ],
  table: {
    h2: 'Which type of website do you need?',
    caption: 'Website types, typical timelines and starting prices',
    head: ['Type', 'Best for', 'Typical timeline', 'Starting from'],
    rows: [
      ['Landing page', 'Google / Meta ad campaigns, single offer', '5–10 days', 'TODO'],
      ['Business website', 'Clinics, CA firms, coaching, service businesses', '2–4 weeks', 'TODO'],
      ['WordPress website', 'Content-heavy sites, frequent updates', '2–5 weeks', 'TODO'],
      ['E-commerce store', 'Selling products online with UPI / COD', '3–8 weeks', 'TODO'],
      ['Next.js website', 'Speed, custom features, integrations', '3–8 weeks', 'TODO'],
      ['Custom web app', 'Portals, CRMs, booking systems, dashboards', '6–14 weeks', 'TODO'],
    ],
    note: 'Final price is fixed in a written quote after a short call. See the pricing page for package details.',
  },
  included: [
    'Custom design approved before build — no recycled templates',
    'Mobile-first build tested on real Android and iOS phones',
    'Under 2-second Largest Contentful Paint target',
    'On-page SEO: titles, meta, headings, schema, sitemap, clean URLs',
    'Google Business Profile and Search Console connected',
    'GA4 + conversion tracking for calls, forms and WhatsApp',
    'Click-to-call and WhatsApp buttons on every page',
    'A content system your team can edit, plus a training session',
    'Domain, hosting, code and content in your name',
    '30 days of free fixes after launch',
  ],
  process: [
    { title: 'Discovery', desc: 'Call or visit; goals, pages and competitors agreed.' },
    { title: 'Scope & quote', desc: 'Written sitemap, features, timeline and fixed price.' },
    { title: 'Design', desc: 'Homepage and key page designed, reviewed, approved.' },
    { title: 'Build & test', desc: 'Development with weekly preview links; speed and SEO checks.' },
    { title: 'Launch', desc: 'Go-live, redirects, tracking verified and team trained.' },
  ],
  faqs: [
    { q: 'Do you build websites for small businesses in Delhi?', a: 'Yes — most of our clients are local businesses: clinics, coaching institutes, CA and law firms, retailers, restaurants and manufacturers in and around Rohini and across Delhi NCR.' },
    { q: 'Can I see websites you have built?', a: 'Yes. Our portfolio lists published projects, and on a call we can share live sites similar to what you need.' },
    { q: 'Will I own my website?', a: 'Yes. The domain, hosting, code repository and content are in your name. You can move to another developer at any time.' },
    { q: 'Do you provide website maintenance?', a: 'Yes. Monthly plans cover updates, backups, security, uptime monitoring and small content changes.' },
    { q: 'Can you redesign my existing website without losing rankings?', a: 'Yes. We map old URLs to new ones, set up 301 redirects, keep ranking content and monitor Search Console after launch.' },
    { q: 'Do you build websites in Hindi?', a: 'Yes — Hindi, English or bilingual, with correct language tags so each version ranks for the right searches.' },
    { q: 'Do you also do SEO?', a: 'Every site we build includes technical and on-page SEO. We do not sell monthly link-building retainers; for ongoing growth we focus on content, Google Business Profile guidance and, where it fits, Google Ads.' },
    { q: 'Do you work with businesses outside Delhi?', a: 'Yes. We work with businesses across India over video calls, WhatsApp and preview links.' },
  ],
  updated: '2026-10-18',
}

export const automationPillar: Pillar = {
  path: '/ai-automation',
  metaTitle: 'AI Automation & AI Agents Company in Delhi | Proshala',
  metaDescription:
    'AI automation company in Delhi: AI agents, WhatsApp automation, chatbots, CRM workflows and voice agents that take repetitive work off your team. Book a free consultation.',
  eyebrow: 'Automate · AI automations & AI agents',
  h1: 'AI Automation & AI Agents for Businesses',
  intro:
    'Proshala builds AI automations and AI agents for businesses in Delhi and across India. We connect your website, WhatsApp, CRM and accounts so that enquiries are answered in seconds, leads are qualified and followed up automatically, and routine admin — reminders, invoices, reports — runs without anyone copying data by hand.',
  primaryKeyword: 'AI automation company Delhi',
  secondaryKeywords: ['AI agents for business India', 'n8n automation agency', 'business automation Delhi', 'WhatsApp automation company'],
  group: 'automate',
  answers: [
    {
      h2: 'What is AI automation for a business?',
      body:
        'AI automation means letting software handle repetitive tasks that used to need a person — including tasks that need some reading or judgement. Classic automation moves data between tools on fixed rules; AI adds the ability to understand a message, extract details from a document or decide the next step. Together they remove hours of manual work each week.',
    },
    {
      h2: 'What can an AI agent automate for a small business?',
      body:
        'An AI agent works best on frequent, well-defined jobs with clear rules. For small businesses in Delhi, the most valuable first agents are:',
      bullets: [
        'Replying to new WhatsApp and website enquiries and qualifying them',
        'Booking appointments or consultation calls into your calendar',
        'Answering questions about fees, timings and services from your own documents',
        'Following up on quotes and overdue payments politely',
        'Summarising calls and updating the CRM',
      ],
    },
    {
      h2: 'How is an AI agent different from a chatbot?',
      body:
        'A chatbot answers questions. An AI agent can also act: create a lead in your CRM, check a calendar and book a slot, send a payment link or update an order. Agents decide which step to take next, within limits and approval rules you set.',
    },
    {
      h2: 'Is AI automation safe for customer data?',
      body:
        'It can be, if it is designed carefully. We use business API plans that exclude your data from model training by default, keep accounts and logs in your name, send only the data each step needs, and self-host tools like n8n when data is sensitive. Agents get human hand-off for refunds, complaints and anything medical, legal or financial.',
    },
    {
      h2: 'How much does AI automation cost?',
      body:
        'There are two parts: a one-time build cost, and a running cost for AI, WhatsApp and tool usage that depends on volume. We start with one high-impact workflow, estimate the hours it saves and the monthly running cost, and only expand once it pays for itself.',
    },
  ],
  table: {
    h2: 'Which automation fits which problem?',
    caption: 'Common problems and the automation we usually build',
    head: ['Problem', 'What we build', 'Tools'],
    rows: [
      ['Leads wait hours for a reply', 'Instant WhatsApp reply + AI qualification + CRM assignment', 'WhatsApp API, n8n, Claude / OpenAI'],
      ['No-shows and missed follow-ups', 'Automatic reminders with confirm / reschedule buttons', 'WhatsApp API, Google Calendar'],
      ['Same questions all day', 'AI chatbot on website and WhatsApp with human hand-off', 'Claude / OpenAI, vector search'],
      ['Leads scattered across portals', 'One CRM with source tracking and routing', 'Zoho / HubSpot, IndiaMART API'],
      ['Missed calls after hours', 'AI voice agent that answers, qualifies and books', 'Vapi / Retell, Exotel'],
      ['Manual invoices and reports', 'Generated invoices, payment links and daily summaries', 'n8n, Razorpay, Google Sheets'],
    ],
  },
  included: [
    'Process audit with estimated hours saved per workflow',
    'Automations built in your accounts — you own them',
    'Error alerts, retries and a log of every run',
    'Human hand-off and approval rules for AI agents',
    'Accuracy testing on your real conversations or documents',
    'Plain-English documentation and a workflow diagram',
    'Monthly running-cost estimate before you commit',
    'Training for the person who will own it internally',
  ],
  process: [
    { title: 'Map', desc: 'We sit with your team and map the work as it happens today.' },
    { title: 'Prioritise', desc: 'Pick the workflow with the best time saved for the effort.' },
    { title: 'Prototype', desc: 'A working version on your real data within days.' },
    { title: 'Pilot', desc: 'Runs alongside the manual process; every output reviewed.' },
    { title: 'Scale', desc: 'Go fully live, monitor, then add the next workflow.' },
  ],
  faqs: [
    { q: 'Which tools do you use for automation?', a: 'n8n, Make and Zapier for workflows; Claude and OpenAI APIs for AI steps; the WhatsApp Cloud API for messaging; and custom Node.js or Python code when no-code tools are not enough.' },
    { q: 'Do I need to change my existing software?', a: 'Usually not. We connect the tools you already use — Google Workspace, Zoho, Tally, Shopify, your website — through their APIs.' },
    { q: 'Can AI reply to customers in Hindi?', a: 'Yes. Modern models handle Hindi, English and Hinglish well, and we test tone with your real customer messages.' },
    { q: 'What if the AI makes a mistake?', a: 'Agents are limited to your approved information and actions, tested against real past cases, and hand over to a person when unsure. Sensitive actions need human approval.' },
    { q: 'How long until the first automation is live?', a: 'Simple workflows go live in one to two weeks; AI agents typically take two to six weeks including a supervised pilot.' },
    { q: 'Do you offer ongoing support?', a: 'Yes. Support plans cover monitoring, fixes when connected apps change, and monthly improvements.' },
    { q: 'Is this only for big companies?', a: 'No. Most of our automation work is for small and mid-sized businesses where a few hours saved every day makes a visible difference.' },
  ],
  updated: '2026-10-18',
}
