import type { Faq } from './types'

// Pricing packages. Replace every 'TODO' price with a real "starting from"
// figure (e.g. '₹24,999'). Until then the site shows "On quote" in production.

export type Package = {
  name: string
  price: string
  unit?: string
  bestFor: string
  includes: string[]
  cta: { label: string; service?: string }
  featured?: boolean
}

export const pricingGroups: { key: string; title: string; intro: string; packages: Package[] }[] = [
  {
    key: 'websites',
    title: 'Websites',
    intro: 'One-time project price. Domain and hosting are billed by the provider in your name.',
    packages: [
      {
        name: 'Starter',
        price: 'TODO',
        bestFor: 'New businesses and simple service sites',
        includes: ['Up to 5 pages', 'Mobile-first custom design', 'On-page SEO + schema', 'WhatsApp & call buttons', 'GA4 + Search Console', '30 days of fixes'],
        cta: { label: 'Get a quote', service: 'business-website-development' },
      },
      {
        name: 'Business',
        price: 'TODO',
        bestFor: 'Clinics, coaching, CA/law firms, B2B',
        includes: ['Up to 12 pages', 'Content writing for key pages', 'Service & location pages', 'Booking or enquiry automation', 'Conversion tracking', 'CMS + training'],
        cta: { label: 'Get a quote', service: 'business-website-development' },
        featured: true,
      },
      {
        name: 'E-commerce',
        price: 'TODO',
        bestFor: 'Retailers and D2C brands',
        includes: ['Shopify or WooCommerce', 'UPI, cards & COD', 'Shipping integration', 'GST invoices', 'Up to 50 products loaded', 'WhatsApp order updates'],
        cta: { label: 'Get a quote', service: 'ecommerce-website-development' },
      },
      {
        name: 'Custom web app',
        price: 'TODO',
        bestFor: 'Portals, CRMs, booking systems',
        includes: ['Discovery workshop', 'Clickable prototype', 'MVP in 2-week sprints', 'Role-based access', 'Integrations', 'Code ownership'],
        cta: { label: 'Book a consultation', service: 'custom-web-applications' },
      },
    ],
  },
  {
    key: 'automation',
    title: 'AI & automation',
    intro: 'Build price plus usage costs (AI, WhatsApp, tools) billed by providers. We estimate usage before you start.',
    packages: [
      {
        name: 'First workflow',
        price: 'TODO',
        bestFor: 'One high-impact automation',
        includes: ['Process audit', '1 workflow (e.g. lead → WhatsApp → CRM)', 'Error alerts & logs', 'Documentation', 'Training'],
        cta: { label: 'Get a quote', service: 'business-process-automation' },
      },
      {
        name: 'AI agent',
        price: 'TODO',
        bestFor: 'Lead qualification, support or booking',
        includes: ['Use-case design & guardrails', 'Knowledge base from your docs', 'CRM / calendar / WhatsApp connections', 'Supervised pilot', 'Accuracy testing'],
        cta: { label: 'Book a consultation', service: 'ai-agents' },
        featured: true,
      },
      {
        name: 'Automation retainer',
        price: 'TODO',
        unit: '/month',
        bestFor: 'Ongoing automation and support',
        includes: ['Monitoring & fixes', 'New workflows each month', 'Monthly report', 'Priority WhatsApp support'],
        cta: { label: 'Get a quote', service: 'business-process-automation' },
      },
    ],
  },
  {
    key: 'ongoing',
    title: 'Ongoing',
    intro: 'Monthly plans. Ad spend is paid directly to Google or Meta from your own account.',
    packages: [
      {
        name: 'Website maintenance',
        price: 'TODO',
        unit: '/month',
        bestFor: 'Keeping your site safe and current',
        includes: ['Updates on staging first', 'Daily backups', 'Uptime monitoring', 'Small content changes', 'Monthly report'],
        cta: { label: 'Get a quote', service: 'website-maintenance' },
      },
      {
        name: 'Google or Meta ads',
        price: 'TODO',
        unit: '/month',
        bestFor: 'Leads from search or social',
        includes: ['Tracking set up first', 'Campaign build & weekly optimisation', 'Landing page advice', 'Lead routing to WhatsApp/CRM', 'Plain-English reports'],
        cta: { label: 'Get a quote', service: 'google-ads' },
      },
    ],
  },
]

export const pricingFaqs: Faq[] = [
  { q: 'How much does a website cost in Delhi?', a: 'It depends on pages, content, features and platform. Our packages above show where projects usually start; your final price is fixed in a written quote after a short call. Our blog post on website costs in Delhi explains typical market ranges.' },
  { q: 'Are these prices fixed?', a: 'Starting prices are for the scope listed. After a call we send a fixed quote for your exact pages and features. If you add scope later, we quote the change before doing it.' },
  { q: 'What are the payment terms?', a: 'Typically an advance to start, a payment at design approval and the balance at launch. For larger builds we split payments by milestone.' },
  { q: 'Is GST included?', a: 'TODO: confirm GST registration and whether prices are shown inclusive or exclusive of GST.' },
  { q: 'Are there ongoing costs?', a: 'Domain and hosting (billed by the provider), optional maintenance, and for automations, usage costs for AI and WhatsApp. We list all of them before you start.' },
]
