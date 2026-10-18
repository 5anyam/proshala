import Link from 'next/link'
import { serviceGroups, servicesByGroup } from '@/content/services'
import { pageMetadata } from '@/lib/seo'
import { graph, webPageSchema } from '@/lib/schema'
import { JsonLd } from '@/components/json-ld'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { CtaBand } from '@/components/cta-band'
import { ServiceCard } from '@/components/sections/blocks'
import { Container, Eyebrow, Section } from '@/components/ui'

const TITLE = 'Services: Websites, AI Automation & Ads | Proshala'
const DESCRIPTION =
  'Everything Proshala builds and runs: websites and web apps, AI automations and agents, and Google & Meta ads for businesses in Delhi and India.'

export const metadata = pageMetadata({ title: TITLE, description: DESCRIPTION, path: '/services', kicker: 'Build · Automate · Grow' })

export default function ServicesPage() {
  const groups = (['build', 'automate', 'grow'] as const).map((k) => ({ key: k, ...serviceGroups[k], items: servicesByGroup(k) }))
  return (
    <>
      <JsonLd data={graph(webPageSchema({ path: '/services', name: TITLE, description: DESCRIPTION }))} />
      <section className="dot-grid border-b border-border">
        <Container className="py-12 sm:py-16">
          <Breadcrumbs items={[{ name: 'Services', path: '/services' }]} />
          <Eyebrow>Build · Automate · Grow</Eyebrow>
          <h1 className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
            Services that build, automate and grow your business
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
            We do three things. We build websites and web apps. We automate the repetitive work around them with AI. And,
            when you need more customers, we run Google and Meta ads to what we built — measured on leads and sales.
          </p>
        </Container>
      </section>
      {groups.map((g, i) => (
        <Section key={g.key} id={g.key} bordered={i > 0}>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <Eyebrow>
                {'// 0'}
                {i + 1} — {g.label}
              </Eyebrow>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight">{g.title}</h2>
              <p className="mt-2 text-muted">{g.blurb}</p>
            </div>
            {g.key !== 'grow' && (
              <Link href={g.href} className="font-mono text-sm text-accent-ink hover:underline">
                Overview →
              </Link>
            )}
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {g.items.map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
        </Section>
      ))}
      <CtaBand />
    </>
  )
}
