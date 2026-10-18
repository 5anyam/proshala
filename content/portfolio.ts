import type { Project, Testimonial } from './types'

// ─── PORTFOLIO ──────────────────────────────────────────────────
// Only `status: 'ready'` items are published. Add real projects with the
// client's permission: name, live URL, screenshot (put in /public/portfolio/),
// stack and VERIFIABLE results. Never invent numbers.

export const projects: Project[] = [
  {
    slug: 'todo-project-1',
    status: 'todo',
    client: 'TODO: Client name',
    title: 'TODO: Website for a Rohini clinic',
    industry: 'clinics',
    area: 'rohini',
    summary: 'TODO: One-line description of what was built and why.',
    services: ['business-website-development', 'whatsapp-automation'],
    stack: ['Next.js', 'WhatsApp Cloud API'],
    results: ['TODO: a verifiable result, e.g. “Online bookings went from 0 to N per week”'],
  },
  {
    slug: 'todo-project-2',
    status: 'todo',
    client: 'TODO: Client name',
    title: 'TODO: E-commerce store',
    industry: 'retail',
    summary: 'TODO',
    services: ['ecommerce-website-development'],
    stack: ['Shopify', 'Razorpay', 'Shiprocket'],
    results: ['TODO'],
  },
  {
    slug: 'todo-project-3',
    status: 'todo',
    client: 'TODO: Client name',
    title: 'TODO: Lead automation for a coaching institute',
    industry: 'schools-coaching-institutes',
    summary: 'TODO',
    services: ['crm-automation', 'whatsapp-automation'],
    stack: ['n8n', 'Zoho CRM', 'WhatsApp Cloud API'],
    results: ['TODO'],
  },
]

// ─── CASE STUDIES ───────────────────────────────────────────────
// Long-form write-ups of portfolio projects. Same rules: real, permitted, verifiable.
export const caseStudies: (Project & { status: 'ready' | 'todo' })[] = []

// ─── TESTIMONIALS ───────────────────────────────────────────────
// Use ONLY genuine testimonials from real clients, with permission.
// Add `sourceUrl` (link to the Google review) wherever possible — reviews
// with a source are also the only ones eligible for Review schema.
export const testimonials: Testimonial[] = [
  { status: 'todo', name: 'TODO: Client name', role: 'TODO: Role', company: 'TODO: Company, Area', quote: 'TODO: Paste the client’s exact words (with permission).' },
  { status: 'todo', name: 'TODO: Client name', role: 'TODO: Role', company: 'TODO: Company, Area', quote: 'TODO: Paste the client’s exact words (with permission).' },
  { status: 'todo', name: 'TODO: Client name', role: 'TODO: Role', company: 'TODO: Company, Area', quote: 'TODO: Paste the client’s exact words (with permission).' },
]

// TODO: Only fill if you can verify it (e.g. Google Business Profile rating).
export const verifiedRating: null | { ratingValue: number; reviewCount: number; sourceUrl: string } = null

export const readyProjects = () => projects.filter((p) => p.status === 'ready')
export const readyCaseStudies = () => caseStudies.filter((p) => p.status === 'ready')
export const readyTestimonials = () => testimonials.filter((t) => t.status === 'ready')
