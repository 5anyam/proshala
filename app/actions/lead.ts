'use server'

import { headers } from 'next/headers'
import { redirect } from 'next/navigation'
import { Resend } from 'resend'
import { z } from 'zod'
import { site } from '@/content/site'
import { getService } from '@/content/services'
import { rateLimit } from '@/lib/rate-limit'

export type LeadState = {
  ok: boolean
  error?: string
  fieldErrors?: Partial<Record<string, string>>
  /** Echoed back so React 19's automatic form reset doesn't wipe what the visitor typed */
  values?: Record<string, string>
}

const LeadSchema = z.object({
  name: z.string().trim().min(2, 'Please enter your name').max(80),
  phone: z
    .string()
    .trim()
    .transform((v) => v.replace(/[\s-]/g, ''))
    .pipe(z.string().regex(/^(\+?91)?[6-9]\d{9}$|^\+\d{8,15}$/, 'Please enter a valid mobile number')),
  email: z.union([z.literal(''), z.email('Please enter a valid email')]).optional(),
  service: z.string().max(80).optional(),
  budget: z.string().max(40).optional(),
  message: z.string().trim().max(2000).optional(),
  page: z.string().max(200).optional(),
})

const escape = (s = '') =>
  s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!)

export async function submitLead(_prev: LeadState, formData: FormData): Promise<LeadState> {
  // Honeypot: real users never see or fill this field. Pretend success.
  if (formData.get('company_website')) redirect('/thank-you')

  const h = await headers()
  const ip = h.get('x-forwarded-for')?.split(',')[0]?.trim() || h.get('x-real-ip') || 'unknown'
  const raw = Object.fromEntries(formData)
  const values = Object.fromEntries(
    ['name', 'phone', 'email', 'service', 'budget', 'message'].map((k) => [k, String(raw[k] ?? '')]),
  )
  const parsed = LeadSchema.safeParse(raw)
  if (!parsed.success) {
    const fieldErrors: Record<string, string> = {}
    for (const issue of parsed.error.issues) fieldErrors[String(issue.path[0])] ??= issue.message
    return { ok: false, error: 'Please check the highlighted fields.', fieldErrors, values }
  }

  // Count only valid submissions, so people fixing typos are never locked out.
  if (!rateLimit(`lead:${ip}`)) {
    return { ok: false, error: `Too many submissions. Please WhatsApp or call us on ${site.phoneDisplay}.`, values }
  }

  const lead = {
    id: crypto.randomUUID().slice(0, 8),
    ...parsed.data,
    serviceName: parsed.data.service ? (getService(parsed.data.service)?.name ?? parsed.data.service) : '',
    submittedAt: new Date().toISOString(),
    ip,
    userAgent: h.get('user-agent') ?? '',
  }

  const tasks: Promise<unknown>[] = []

  if (process.env.RESEND_API_KEY) {
    const resend = new Resend(process.env.RESEND_API_KEY)
    const rows = [
      ['Lead ID', lead.id],
      ['Name', lead.name],
      ['Phone', lead.phone],
      ['Email', lead.email || '—'],
      ['Service', lead.serviceName || '—'],
      ['Budget', lead.budget || '—'],
      ['Page', lead.page || '—'],
      ['Message', lead.message || '—'],
    ]
    tasks.push(
      resend.emails
        .send({
          from: process.env.LEAD_EMAIL_FROM || 'Proshala Website <leads@proshala.com>',
          to: (process.env.LEAD_EMAIL_TO || site.email).split(',').map((s) => s.trim()),
          ...(lead.email ? { replyTo: lead.email } : {}),
          subject: `New enquiry: ${lead.name}${lead.serviceName ? ` — ${lead.serviceName}` : ''}`,
          html: `<table style="font-family:system-ui,sans-serif;font-size:14px;border-collapse:collapse">${rows
            .map(
              ([k, v]) =>
                `<tr><td style="padding:6px 12px 6px 0;color:#666;vertical-align:top">${k}</td><td style="padding:6px 0">${escape(v)}</td></tr>`,
            )
            .join('')}</table>`,
        })
        .then((r) => {
          if (r.error) throw new Error(r.error.message)
        }),
    )
  }

  if (process.env.LEAD_WEBHOOK_URL) {
    tasks.push(
      fetch(process.env.LEAD_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(lead),
        signal: AbortSignal.timeout(8000),
      }).then((r) => {
        if (!r.ok) throw new Error(`Webhook ${r.status}`)
      }),
    )
  }

  if (!tasks.length) {
    if (process.env.NODE_ENV !== 'production') {
      console.info('[lead] no RESEND_API_KEY / LEAD_WEBHOOK_URL set — lead not delivered:', lead)
    } else {
      console.error('[lead] no delivery channel configured')
      return { ok: false, error: `Sorry, the form is not working right now. Please WhatsApp or call ${site.phoneDisplay}.`, values }
    }
  } else {
    const results = await Promise.allSettled(tasks)
    const failed = results.filter((r) => r.status === 'rejected')
    failed.forEach((f) => console.error('[lead] delivery failed:', (f as PromiseRejectedResult).reason))
    if (failed.length === results.length) {
      return { ok: false, error: `Sorry, something went wrong. Please WhatsApp or call ${site.phoneDisplay}.`, values }
    }
  }

  const qs = new URLSearchParams({ lid: lead.id })
  if (lead.service) qs.set('service', lead.service)
  redirect(`/thank-you?${qs.toString()}`)
}
