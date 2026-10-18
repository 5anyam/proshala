import Link from 'next/link'
import { pricingFaqs, pricingGroups } from '@/content/pricing'
import { SHOW_TODOS, SITE_UPDATED } from '@/content/site'
import { pageMetadata } from '@/lib/seo'
import { graph, webPageSchema } from '@/lib/schema'
import { cn, isTodo } from '@/lib/utils'
import { JsonLd } from '@/components/json-ld'
import { PageHero } from '@/components/page-hero'
import { FaqList } from '@/components/faq'
import { CtaBand } from '@/components/cta-band'
import { Price } from '@/components/price'
import { CheckList } from '@/components/sections/blocks'
import { Section } from '@/components/ui'

const TITLE = 'Website & Automation Pricing in Delhi | Proshala'
const DESCRIPTION =
  'Website, e-commerce, web app and AI automation pricing from Proshala, Rohini. Starting packages, what is included, and how our fixed written quotes work.'

export const metadata = pageMetadata({ title: TITLE, description: DESCRIPTION, path: '/pricing', kicker: 'Pricing' })

export default function PricingPage() {
  // Hide the GST answer until it is filled in.
  const faqs = pricingFaqs.filter((f) => SHOW_TODOS || !isTodo(f.a))
  return (
    <>
      <JsonLd data={graph(webPageSchema({ path: '/pricing', name: TITLE, description: DESCRIPTION, updated: SITE_UPDATED }))} />
      <PageHero
        crumb="Pricing"
        path="/pricing"
        eyebrow="Pricing"
        title="Simple packages. Fixed, written quotes."
        intro="Every project gets a written quote listing pages, features, timeline and price before we start. These packages show where most projects begin."
        updated={SITE_UPDATED}
      />
      {pricingGroups.map((g, gi) => (
        <Section key={g.key} id={g.key} bordered={gi > 0}>
          <h2 className="text-3xl font-semibold tracking-tight">{g.title}</h2>
          <p className="mt-2 text-muted">{g.intro}</p>
          <div className={cn('mt-8 grid gap-4 sm:grid-cols-2', g.packages.length === 4 && 'lg:grid-cols-4', g.packages.length === 3 && 'lg:grid-cols-3')}>
            {g.packages.map((p) => (
              <div
                key={p.name}
                className={cn(
                  'flex flex-col rounded-xl border bg-surface p-6',
                  p.featured ? 'border-accent shadow-[0_0_0_1px_var(--accent)]' : 'border-border',
                )}
              >
                <h3 className="font-medium">{p.name}</h3>
                <p className="mt-1 text-sm text-muted">{p.bestFor}</p>
                <p className="mt-5 font-mono text-sm text-muted">Starting from</p>
                <p className="text-2xl font-semibold">
                  <Price value={p.price} />
                  {p.unit && !isTodo(p.price) && <span className="text-base font-normal text-muted">{p.unit}</span>}
                </p>
                <CheckList items={p.includes} className="mt-5 flex-1 text-sm" />
                <Link
                  href={`/free-quote${p.cta.service ? `?service=${p.cta.service}` : ''}`}
                  className={cn(
                    'mt-6 inline-flex min-h-11 items-center justify-center rounded-lg px-4 text-sm font-medium',
                    p.featured ? 'bg-accent text-accent-fg' : 'border border-border-strong hover:bg-surface-2',
                  )}
                >
                  {p.cta.label}
                </Link>
              </div>
            ))}
          </div>
        </Section>
      ))}
      <Section>
        <FaqList faqs={faqs} title="Pricing questions" />
      </Section>
      <CtaBand />
    </>
  )
}
