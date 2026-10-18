'use client'

import { useActionState, useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import { Loader2 } from 'lucide-react'
import { submitLead, type LeadState } from '@/app/actions/lead'
import { cn } from '@/lib/utils'

type Option = { value: string; label: string; group: string }

const field =
  'mt-1.5 block w-full min-h-11 rounded-lg border border-border-strong bg-bg px-3 text-base text-fg placeholder:text-muted/70 focus:border-accent-ink focus:outline-none aria-[invalid=true]:border-red-500'

export function LeadForm({
  services,
  defaultService,
  submitLabel = 'Get my free quote',
  compact = false,
}: {
  services: Option[]
  defaultService?: string
  submitLabel?: string
  compact?: boolean
}) {
  const pathname = usePathname()
  const [state, action, pending] = useActionState<LeadState, FormData>(submitLead, { ok: false })
  const err = state.fieldErrors ?? {}
  const groups = [...new Set(services.map((s) => s.group))]
  const serviceRef = useRef<HTMLSelectElement>(null)

  // Pre-select a service from ?service=slug without making the page dynamic.
  useEffect(() => {
    const fromUrl = new URLSearchParams(window.location.search).get('service')
    const el = serviceRef.current
    if (el && !defaultService && fromUrl && services.some((s) => s.value === fromUrl)) el.value = fromUrl
  }, [defaultService, services])

  return (
    <form action={action} className="space-y-4" noValidate>
      <input type="hidden" name="page" value={pathname} />
      {/* Honeypot — hidden from people and assistive tech */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label>
          Company website
          <input type="text" name="company_website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className={cn('grid gap-4', !compact && 'sm:grid-cols-2')}>
        <div>
          <label htmlFor="lead-name" className="text-sm font-medium">
            Your name <span className="text-muted">*</span>
          </label>
          <input id="lead-name" name="name" required autoComplete="name" className={field} aria-invalid={!!err.name} aria-describedby={err.name ? 'e-name' : undefined} />
          {err.name && <p id="e-name" className="mt-1 text-sm text-red-500">{err.name}</p>}
        </div>
        <div>
          <label htmlFor="lead-phone" className="text-sm font-medium">
            Mobile / WhatsApp <span className="text-muted">*</span>
          </label>
          <input
            id="lead-phone"
            name="phone"
            type="tel"
            inputMode="tel"
            required
            autoComplete="tel"
            placeholder="98xxxxxxxx"
            className={field}
            aria-invalid={!!err.phone}
            aria-describedby={err.phone ? 'e-phone' : undefined}
          />
          {err.phone && <p id="e-phone" className="mt-1 text-sm text-red-500">{err.phone}</p>}
        </div>
      </div>

      <div className={cn('grid gap-4', !compact && 'sm:grid-cols-2')}>
        <div>
          <label htmlFor="lead-email" className="text-sm font-medium">
            Email <span className="text-muted">(optional)</span>
          </label>
          <input id="lead-email" name="email" type="email" autoComplete="email" className={field} aria-invalid={!!err.email} aria-describedby={err.email ? 'e-email' : undefined} />
          {err.email && <p id="e-email" className="mt-1 text-sm text-red-500">{err.email}</p>}
        </div>
        <div>
          <label htmlFor="lead-service" className="text-sm font-medium">
            What do you need?
          </label>
          <select ref={serviceRef} id="lead-service" name="service" defaultValue={defaultService ?? ''} className={field}>
            <option value="">Not sure yet</option>
            {groups.map((g) => (
              <optgroup key={g} label={g}>
                {services
                  .filter((s) => s.group === g)
                  .map((s) => (
                    <option key={s.value} value={s.value}>
                      {s.label}
                    </option>
                  ))}
              </optgroup>
            ))}
          </select>
        </div>
      </div>

      {!compact && (
        <div>
          <label htmlFor="lead-budget" className="text-sm font-medium">
            Approximate budget <span className="text-muted">(optional)</span>
          </label>
          <select id="lead-budget" name="budget" defaultValue="" className={field}>
            <option value="">Prefer to discuss</option>
            <option>Under ₹25,000</option>
            <option>₹25,000 – ₹75,000</option>
            <option>₹75,000 – ₹2,00,000</option>
            <option>₹2,00,000+</option>
          </select>
        </div>
      )}

      <div>
        <label htmlFor="lead-message" className="text-sm font-medium">
          Tell us a little about your business <span className="text-muted">(optional)</span>
        </label>
        <textarea id="lead-message" name="message" rows={compact ? 3 : 4} className={cn(field, 'py-2')} />
      </div>

      {state.error && (
        <p role="alert" className="rounded-lg border border-red-500/40 bg-red-500/10 p-3 text-sm text-red-500">
          {state.error}
        </p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-lg bg-accent px-5 font-medium text-accent-fg hover:brightness-95 disabled:opacity-70"
      >
        {pending && <Loader2 aria-hidden="true" className="size-4 animate-spin" />}
        {pending ? 'Sending…' : submitLabel}
      </button>
      <p className="text-xs text-muted">We reply within one working day. No spam — your details are only used to respond to you.</p>
    </form>
  )
}
