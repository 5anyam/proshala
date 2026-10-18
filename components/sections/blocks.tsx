import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import type { Industry, Service } from '@/content/types'
import { getService } from '@/content/services'
import { industries as allIndustries } from '@/content/industries'
import { areaGroups, areaPath } from '@/content/areas'
import { projects, readyProjects, readyTestimonials, testimonials } from '@/content/portfolio'
import { stackStrip } from '@/content/tech-stack'
import { SHOW_TODOS } from '@/content/site'
import { cn } from '@/lib/utils'
import { Icon } from '../icon'
import { ButtonLink, Card, Pill, Section, SectionHeading, Todo } from '../ui'

export function ServiceCard({ service, className }: { service: Service; className?: string }) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className={cn(
        'group flex flex-col rounded-xl border border-border bg-surface p-5 transition-colors hover:border-border-strong hover:bg-surface-2',
        className,
      )}
    >
      <div className="flex items-start justify-between">
        <span className="inline-flex size-10 items-center justify-center rounded-lg border border-border bg-surface-2 text-accent-ink">
          <Icon name={service.icon} className="size-5" />
        </span>
        <ArrowUpRight aria-hidden="true" className="size-4 text-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-fg" />
      </div>
      <h3 className="mt-4 font-medium">{service.name}</h3>
      <p className="mt-1.5 text-sm leading-relaxed text-muted">{service.summary}</p>
    </Link>
  )
}

export function ServiceGrid({ slugs, className }: { slugs: string[]; className?: string }) {
  const list = slugs.map(getService).filter(Boolean) as Service[]
  return (
    <div className={cn('grid gap-3 sm:grid-cols-2 lg:grid-cols-3', className)}>
      {list.map((s) => (
        <ServiceCard key={s.slug} service={s} />
      ))}
    </div>
  )
}

export function ProcessSteps({ steps }: { steps: { title: string; desc: string }[] }) {
  return (
    <ol className="grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-5">
      {steps.map((s, i) => (
        <li key={s.title} className="bg-surface p-5">
          <span className="font-mono text-xs text-accent-ink">step 0{i + 1}</span>
          <h3 className="mt-2 font-medium">{s.title}</h3>
          <p className="mt-1.5 text-sm leading-relaxed text-muted">{s.desc}</p>
        </li>
      ))}
    </ol>
  )
}

export function IndustriesGrid({ items = allIndustries }: { items?: Industry[] }) {
  return (
    <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((ind) => (
        <li key={ind.slug}>
          <Link
            href={`/industries/${ind.slug}`}
            className="group flex h-full items-start gap-4 rounded-xl border border-border bg-surface p-5 hover:border-border-strong"
          >
            <Icon name={ind.icon} className="mt-0.5 size-5 shrink-0 text-accent-ink" />
            <span>
              <span className="block font-medium group-hover:underline">{ind.name}</span>
              <span className="mt-1 block text-sm text-muted">{ind.automations.slice(0, 3).join(' · ')}</span>
            </span>
          </Link>
        </li>
      ))}
    </ul>
  )
}

export function StackStrip() {
  return (
    <ul className="flex flex-wrap gap-2">
      {stackStrip.map((t) => (
        <li key={t}>
          <Pill className="px-3 py-1.5 text-sm text-fg">{t}</Pill>
        </li>
      ))}
    </ul>
  )
}

export function PortfolioGrid({ limit = 3, filter }: { limit?: number; filter?: (p: (typeof projects)[number]) => boolean }) {
  const ready = readyProjects().filter(filter ?? (() => true)).slice(0, limit)
  if (ready.length) {
    return (
      <div className="grid gap-4 md:grid-cols-3">
        {ready.map((p) => (
          <Link key={p.slug} href={`/portfolio/${p.slug}`} className="group overflow-hidden rounded-xl border border-border bg-surface">
            {p.image && (
              <Image src={p.image} alt={`${p.title} — screenshot`} width={800} height={500} className="aspect-[16/10] w-full object-cover" />
            )}
            <div className="p-5">
              <p className="font-mono text-xs text-muted">{p.client}</p>
              <h3 className="mt-1 font-medium group-hover:underline">{p.title}</h3>
              <p className="mt-2 text-sm text-muted">{p.summary}</p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {p.stack.slice(0, 4).map((s) => (
                  <Pill key={s}>{s}</Pill>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    )
  }
  // No published projects yet
  if (SHOW_TODOS) {
    return (
      <div className="grid gap-4 md:grid-cols-3">
        {projects.slice(0, limit).map((p) => (
          <Card key={p.slug} className="border-dashed">
            <div className="aspect-[16/10] rounded-lg bg-surface-2" />
            <Todo className="mt-4">
              Portfolio item: {p.title.replace('TODO: ', '')}. Add screenshot, client name (with permission), stack and a verifiable result in content/portfolio.ts
            </Todo>
          </Card>
        ))}
      </div>
    )
  }
  return (
    <Card className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
      <p className="text-muted">
        We are adding detailed case studies here. Ask us on a call and we will walk you through live projects similar to
        yours.
      </p>
      <ButtonLink href="/contact" variant="secondary">
        Ask for examples
      </ButtonLink>
    </Card>
  )
}

export function Testimonials() {
  const ready = readyTestimonials()
  if (!ready.length && !SHOW_TODOS) return null
  const list = ready.length ? ready : testimonials
  return (
    <div>
      <SectionHeading eyebrow="// clients" title="What clients say" />
      <ul className="mt-10 grid gap-4 md:grid-cols-3">
        {list.map((t, i) =>
          t.status === 'ready' ? (
            <li key={i}>
              <figure className="h-full rounded-xl border border-border bg-surface p-6">
                <blockquote className="leading-relaxed">“{t.quote}”</blockquote>
                <figcaption className="mt-5 text-sm">
                  <span className="font-medium">{t.name}</span>
                  <span className="block text-muted">
                    {t.role}, {t.company}
                  </span>
                  {t.sourceUrl && (
                    <a href={t.sourceUrl} target="_blank" rel="noopener" className="mt-2 inline-block font-mono text-xs text-accent-ink">
                      View on Google →
                    </a>
                  )}
                </figcaption>
              </figure>
            </li>
          ) : (
            <li key={i}>
              <Todo className="h-full">
                Real testimonial: client name, role, company and their exact words (with permission). Link the Google review if
                possible. content/portfolio.ts
              </Todo>
            </li>
          ),
        )}
      </ul>
    </div>
  )
}

/** Testimonials wrapped in a page section; renders nothing when there is nothing honest to show. */
export function TestimonialsSection() {
  if (!readyTestimonials().length && !SHOW_TODOS) return null
  return (
    <Section>
      <Testimonials />
    </Section>
  )
}

export function AreasBlock({ exclude }: { exclude?: string }) {
  const { local, ncr } = areaGroups()
  const chip = 'inline-flex min-h-10 items-center gap-1.5 rounded-lg border border-border bg-surface px-3 text-sm hover:border-border-strong'
  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_1.6fr]">
      <SectionHeading
        eyebrow="// areas we serve"
        title="Based in Rohini. Working across Delhi NCR."
        intro="We meet clients in person across North and West Delhi and work remotely with businesses across NCR and India."
      />
      <div className="space-y-6">
        <div>
          <p className="mb-3 font-mono text-xs uppercase tracking-wider text-muted">North &amp; West Delhi</p>
          <ul className="flex flex-wrap gap-2">
            {local
              .filter((a) => a.slug !== exclude)
              .map((a) => (
                <li key={a.slug}>
                  <Link href={areaPath(a.slug)} className={chip}>
                    <Icon name="MapPin" className="size-3.5 text-accent-ink" />
                    {a.name}
                  </Link>
                </li>
              ))}
          </ul>
        </div>
        <div>
          <p className="mb-3 font-mono text-xs uppercase tracking-wider text-muted">Delhi NCR &amp; Haryana</p>
          <ul className="flex flex-wrap gap-2">
            {ncr
              .filter((a) => a.slug !== exclude)
              .map((a) => (
                <li key={a.slug}>
                  <Link href={areaPath(a.slug)} className={chip}>
                    {a.name}
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export function CheckList({ items, className }: { items: string[]; className?: string }) {
  return (
    <ul className={cn('space-y-3', className)}>
      {items.map((it) => (
        <li key={it} className="flex gap-3">
          <Icon name="Check" className="mt-0.5 size-5 shrink-0 text-accent-ink" />
          <span className="leading-relaxed">{it}</span>
        </li>
      ))}
    </ul>
  )
}
