export type TechItem = { name: string; use: string }
export type TechGroup = { title: string; items: TechItem[] }

export const techStack: TechGroup[] = [
  {
    title: 'Frontend',
    items: [
      { name: 'Next.js', use: 'Server-rendered websites and web apps' },
      { name: 'React', use: 'Interactive interfaces and dashboards' },
      { name: 'TypeScript', use: 'Typed code that catches bugs before users do' },
      { name: 'Tailwind CSS', use: 'Consistent, lightweight styling' },
    ],
  },
  {
    title: 'CMS & e-commerce',
    items: [
      { name: 'WordPress', use: 'Content-heavy sites managed by non-technical teams' },
      { name: 'Sanity', use: 'Headless CMS for Next.js sites' },
      { name: 'Shopify', use: 'Reliable online stores' },
      { name: 'WooCommerce', use: 'Stores that live inside WordPress' },
    ],
  },
  {
    title: 'Backend & data',
    items: [
      { name: 'Node.js', use: 'APIs, integrations and background jobs' },
      { name: 'PostgreSQL', use: 'Reliable relational data for apps' },
      { name: 'Supabase', use: 'Auth, database and storage for fast app builds' },
      { name: 'Redis', use: 'Queues, caching and rate limiting' },
    ],
  },
  {
    title: 'AI & automation',
    items: [
      { name: 'Claude API', use: 'Reasoning-heavy agents and document work' },
      { name: 'OpenAI API', use: 'Chat, extraction and voice' },
      { name: 'n8n', use: 'Self-hostable workflow automation and AI agents' },
      { name: 'Make / Zapier', use: 'No-code workflows for simpler flows' },
      { name: 'WhatsApp Cloud API', use: 'Official WhatsApp messaging and bots' },
      { name: 'Vapi / Retell', use: 'AI voice agents over phone lines' },
    ],
  },
  {
    title: 'Infrastructure',
    items: [
      { name: 'Vercel', use: 'Hosting for Next.js with preview deployments' },
      { name: 'Cloudflare', use: 'DNS, CDN and security' },
      { name: 'AWS', use: 'Apps with specific compliance or scale needs' },
      { name: 'GitHub', use: 'Version control and CI' },
    ],
  },
  {
    title: 'Payments & India stack',
    items: [
      { name: 'Razorpay', use: 'UPI, cards, net banking and subscriptions' },
      { name: 'Cashfree', use: 'Payments and payouts' },
      { name: 'Shiprocket', use: 'Shipping and courier aggregation' },
      { name: 'Exotel', use: 'Indian virtual numbers and IVR' },
    ],
  },
  {
    title: 'Analytics & ads',
    items: [
      { name: 'GA4', use: 'Website and app analytics' },
      { name: 'Google Tag Manager', use: 'Tracking without code changes' },
      { name: 'Google Ads', use: 'Search, Performance Max and YouTube' },
      { name: 'Meta Ads + CAPI', use: 'Facebook and Instagram with server-side tracking' },
    ],
  },
]

/** Short list for the home-page logo strip */
export const stackStrip = [
  'Next.js',
  'React',
  'TypeScript',
  'WordPress',
  'Shopify',
  'Node.js',
  'PostgreSQL',
  'n8n',
  'Claude API',
  'OpenAI API',
  'WhatsApp API',
  'Vercel',
]
