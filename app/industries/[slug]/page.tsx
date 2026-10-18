import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getIndustry, industries } from '@/content/industries'
import { pageMetadata } from '@/lib/seo'
import { graph, webPageSchema } from '@/lib/schema'
import { JsonLd } from '@/components/json-ld'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { Icon } from '@/components/icon'
import { FaqList } from '@/components/faq'
import { CtaBand } from '@/components/cta-band'
import { AreasBlock, CheckList, PortfolioGrid, ServiceGrid } from '@/components/sections/blocks'
import { ButtonLink, Card, Container, Eyebrow, Pill, Section, SectionHeading, UpdatedDate } from '@/components/ui'

type Props = { params: Promise<{ slug: string }> }

export const dynamicParams = false

export function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const i = getIndustry((await params).slug)
  if (!i) return {}
  return pageMetadata({
    title: i.metaTitle,
    description: i.metaDescription,
    path: `/industries/${i.slug}`,
    ogTitle: i.h1,
    kicker: `Industries · ${i.name}`,
  })
}

export default async function IndustryPage({ params }: Props) {
  const i = getIndustry((await params).slug)
  if (!i) notFound()
  const path = `/industries/${i.slug}`
  return (
    <>
      <JsonLd data={graph(webPageSchema({ path, name: i.metaTitle, description: i.metaDescription, updated: i.updated }))} />
      <section className="dot-grid border-b border-border">
        <Container className="grid gap-10 py-12 sm:py-16 lg:grid-cols-[1.4fr_1fr] lg:items-start">
          <div>
            <Breadcrumbs
              items={[
                { name: 'Industries', path: '/industries' },
                { name: i.name, path },
              ]}
            />
            <Eyebrow>
              <Icon name={i.icon} className="mr-1 inline size-3.5 -translate-y-px" />
              {i.name}
            </Eyebrow>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">{i.h1}</h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">{i.intro}</p>
            <div className="mt-8">
              <ButtonLink href="/free-quote" size="lg" arrow>
                Get a free quote
              </ButtonLink>
            </div>
            <div className="mt-6">
              <UpdatedDate date={i.updated} />
            </div>
          </div>
          <Card>
            <p className="font-mono text-xs uppercase tracking-wider text-accent-ink">Common problems we fix</p>
            <CheckList items={i.problems} className="mt-4 text-sm" />
          </Card>
        </Container>
      </section>

      <Section bordered={false}>
        <SectionHeading eyebrow="// what we build" title={`What we build for ${i.name.toLowerCase()}`} />
        <ul className="mt-10 grid gap-3 sm:grid-cols-2">
          {i.builds.map((b) => (
            <li key={b.title} className="rounded-xl border border-border bg-surface p-5">
              <h3 className="font-medium">{b.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted">{b.desc}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.6fr]">
          <SectionHeading eyebrow="// automate" title="Automations that pay off fastest" />
          <ul className="flex flex-wrap content-start gap-2">
            {i.automations.map((a) => (
              <li key={a}>
                <Pill className="px-3 py-1.5 text-sm text-fg">{a}</Pill>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="// services" title="Relevant services" />
        <ServiceGrid slugs={i.services} className="mt-10" />
      </Section>

      <Section>
        <SectionHeading eyebrow="// work" title="Related projects" />
        <div className="mt-10">
          <PortfolioGrid filter={(p) => p.industry === i.slug} />
        </div>
      </Section>

      <Section>
        <FaqList faqs={i.faqs} title={`${i.name}: common questions`} />
      </Section>

      <Section>
        <AreasBlock />
      </Section>

      <CtaBand />
    </>
  )
}
