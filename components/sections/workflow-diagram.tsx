'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'
import { Icon, type IconName } from '../icon'

type Node = { icon: IconName; label: string; detail: string }
type Flow = { id: string; name: string; summary: string; nodes: Node[] }

const flows: Flow[] = [
  {
    id: 'lead',
    name: 'New lead',
    summary: 'A website or ad enquiry is answered, qualified and booked in under a minute.',
    nodes: [
      { icon: 'Globe', label: 'Form or ad lead', detail: 'Someone fills your website form, a Google lead form or a Meta lead ad.' },
      { icon: 'MessageCircle', label: 'Instant WhatsApp', detail: 'They get a WhatsApp reply within seconds, with your brochure or price list.' },
      { icon: 'Bot', label: 'AI qualifies', detail: 'An AI agent asks two or three questions — service, budget, area — and scores the lead.' },
      { icon: 'Database', label: 'CRM + owner', detail: 'The lead lands in your CRM with source and score, assigned to the right person.' },
      { icon: 'Calendar', label: 'Call booked', detail: 'Hot leads pick a call slot; your salesperson gets an alert with the full context.' },
    ],
  },
  {
    id: 'appointments',
    name: 'Appointments',
    summary: 'Clinics and service businesses cut no-shows without anyone making reminder calls.',
    nodes: [
      { icon: 'Calendar', label: 'Slot booked', detail: 'Patient or customer books online or at the front desk.' },
      { icon: 'MessageCircle', label: 'Confirmation', detail: 'Instant WhatsApp confirmation with location pin and preparation notes.' },
      { icon: 'Clock', label: 'Reminders', detail: 'Automatic reminders 24 hours and 2 hours before, with reschedule buttons.' },
      { icon: 'CircleCheck', label: 'Visit done', detail: 'After the visit, a thank-you message and follow-up date are sent.' },
      { icon: 'BadgeCheck', label: 'Review request', detail: 'Happy customers are asked politely for a Google review.' },
    ],
  },
  {
    id: 'invoices',
    name: 'Invoices',
    summary: 'Invoices go out and payments come in without chasing by phone.',
    nodes: [
      { icon: 'FileText', label: 'Order or job done', detail: 'A deal is marked won or a job is completed in your system.' },
      { icon: 'Sparkles', label: 'Invoice created', detail: 'A GST invoice is generated with the right items and tax.' },
      { icon: 'MessageCircle', label: 'Sent with UPI link', detail: 'Invoice and a payment link go out on WhatsApp and email.' },
      { icon: 'Timer', label: 'Polite follow-ups', detail: 'Reminders go out on a schedule until it is paid — and stop when it is.' },
      { icon: 'Database', label: 'Books updated', detail: 'Payment is recorded and your accounts or sheet are updated.' },
    ],
  },
]

/** Interactive automation diagram. Every flow and step is rendered in the
 *  HTML (crawlable, works without JS); JS only switches the highlighted flow. */
export function WorkflowDiagram() {
  const [active, setActive] = useState(flows[0].id)
  const [step, setStep] = useState(0)

  return (
    <div className="rounded-2xl border border-border bg-surface p-4 sm:p-6">
      <div role="tablist" aria-label="Automation examples" className="flex flex-wrap gap-2">
        {flows.map((f) => (
          <button
            key={f.id}
            role="tab"
            type="button"
            id={`tab-${f.id}`}
            aria-selected={active === f.id}
            aria-controls={`panel-${f.id}`}
            onClick={() => {
              setActive(f.id)
              setStep(0)
            }}
            className={cn(
              'min-h-10 rounded-lg border px-3 font-mono text-xs uppercase tracking-wider transition-colors',
              active === f.id
                ? 'border-accent bg-accent text-accent-fg'
                : 'border-border text-muted hover:text-fg',
            )}
          >
            {f.name}
          </button>
        ))}
      </div>

      {flows.map((f) => (
        <div
          key={f.id}
          id={`panel-${f.id}`}
          role="tabpanel"
          aria-labelledby={`tab-${f.id}`}
          hidden={active !== f.id}
          className="mt-6"
        >
          <p className="text-sm text-muted">{f.summary}</p>
          <ol className="mt-6 grid gap-3 md:grid-cols-5 md:gap-0">
            {f.nodes.map((n, i) => (
              <li key={n.label} className="relative flex md:flex-col md:items-center">
                {/* connector */}
                {i < f.nodes.length - 1 && (
                  <svg
                    aria-hidden="true"
                    className="absolute left-5 top-11 h-[calc(100%-1.5rem)] w-px md:left-[calc(50%+1.75rem)] md:top-5 md:h-px md:w-[calc(100%-3.5rem)]"
                    preserveAspectRatio="none"
                    viewBox="0 0 100 100"
                  >
                    <line
                      x1="0"
                      y1="0"
                      x2="100"
                      y2="100"
                      className={cn('flow-line', i < step ? 'stroke-[var(--accent-ink)]' : 'stroke-[var(--border-strong)]')}
                      strokeWidth="3"
                      vectorEffect="non-scaling-stroke"
                    />
                  </svg>
                )}
                <button
                  type="button"
                  onClick={() => setStep(i)}
                  aria-pressed={step === i}
                  className="group flex w-full items-start gap-3 rounded-lg p-1 text-left md:flex-col md:items-center md:text-center"
                >
                  <span
                    className={cn(
                      'relative z-10 inline-flex size-10 shrink-0 items-center justify-center rounded-lg border transition-colors',
                      i <= step
                        ? 'border-accent bg-accent-soft text-accent-ink'
                        : 'border-border-strong bg-surface-2 text-muted group-hover:text-fg',
                    )}
                  >
                    <Icon name={n.icon} className="size-5" />
                  </span>
                  <span className="min-w-0 md:mt-3 md:px-2">
                    <span className="block font-mono text-[10px] text-muted">0{i + 1}</span>
                    <span className="block text-sm font-medium">{n.label}</span>
                    <span className={cn('mt-1 block text-xs leading-relaxed text-muted md:hidden')}>{n.detail}</span>
                  </span>
                </button>
              </li>
            ))}
          </ol>
          <p className="mt-6 hidden min-h-12 rounded-lg border border-border bg-surface-2 p-4 text-sm md:block" aria-live="polite">
            <span className="font-mono text-xs text-accent-ink">step 0{step + 1} → </span>
            {f.nodes[step].detail}
          </p>
        </div>
      ))}
    </div>
  )
}
