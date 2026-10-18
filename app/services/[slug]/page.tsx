import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getService, serviceGroups, services } from '@/content/services'
import { industries } from '@/content/industries'
import { readyAreas, areaPath } from '@/content/areas'
import { whatsappLink } from '@/content/site'
import { pageMetadata } from '@/lib/seo'
import { graph, serviceSchema, webPageSchema } from '@/lib/schema'
import { JsonLd } from '@/components/json-ld'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { BrandIcon, Icon } from '@/components/icon'
import { Price } from '@/components/price'
import { FaqList } from '@/components/faq'
import { CtaBand } from '@/components/cta-band'
import { CheckList, PortfolioGrid, ProcessSteps, ServiceGrid } from '@/components/sections/blocks'
import { ButtonA, ButtonLink, Card, Container, Eyebrow, Pill, Section, SectionHeading, UpdatedDate } from '@/components/ui'

type Props = { params: Promise<{ slug: string }> }

export const dynamicParams = false

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const s = getService((await params).slug)
  if (!s) return {}
  return pageMetadata({
    title: s.metaTitle,
    description: s.metaDescription,
    path: `/services/${s.slug}`,
    ogTitle: s.h1,
    kicker: `${serviceGroups[s.group].label} · ${s.name}`,
  })
}

export default async function ServicePage({ params }: Props) {
  const s = getService((await params).slug)
  if (!s) notFound()
  const path = `/services/${s.slug}`
  const group = serviceGroups[s.group]
  const relatedIndustries = industries.filter((i) => i.services.includes(s.slug))
  const localLinks = s.group === 'build' ? readyAreas().filter((a) => a.kind !== 'ncr').slice(0, 5) : []

  return (
    <>
      <JsonLd
        data={graph(
          webPageSchema({ path, name: s.metaTitle, description: s.metaDescription, updated: s.updated }),
          serviceSchema(s, path),
        )}
      />

      {/* Hero */}
      <section className="dot-grid border-b border-border">
        <Container className="grid gap-10 py-12 sm:py-16 lg:grid-cols-[1.4fr_1fr] lg:items-start">
          <div>
            <Breadcrumbs
              items={[
                { name: 'Services', path: '/services' },
                ...(group.crumb ? [{ name: group.crumb, path: group.href }] : []),
                { name: s.name, path },
              ]}
            />
            <Eyebrow>
              {group.label} · {s.name}
            </Eyebrow>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">{s.h1}</h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">{s.intro}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={`/free-quote?service=${s.slug}`} size="lg" arrow>
                Get a free quote
              </ButtonLink>
              <ButtonA
                href={whatsappLink(`Hi Proshala, I'm interested in ${s.name}.`)}
                target="_blank"
                rel="noopener"
                size="lg"
                variant="secondary"
                data-track="whatsapp_click"
              >
                <BrandIcon name="whatsapp" className="size-4" />
                WhatsApp us
              </ButtonA>
            </div>
            <div className="mt-6">
              <UpdatedDate date={s.updated} />
            </div>
          </div>

          <Card>
            <dl className="divide-y divide-border text-sm">
              <div className="flex items-center justify-between gap-4 pb-4">
                <dt className="inline-flex items-center gap-2 text-muted">
                  <Icon name="Timer" className="size-4" /> Typical timeline
                </dt>
                <dd className="text-right font-medium">{s.timeline}</dd>
              </div>
              <div className="flex items-center justify-between gap-4 py-4">
                <dt className="inline-flex items-center gap-2 text-muted">
                  <Icon name="FileText" className="size-4" /> Starting from
                </dt>
                <dd className="text-right font-medium">
                  <Price value={s.priceFrom} />
                  {s.priceNote && <span className="block text-xs font-normal text-muted">{s.priceNote}</span>}
                </dd>
              </div>
              <div className="pt-4">
                <dt className="mb-3 inline-flex items-center gap-2 text-muted">
                  <Icon name="Layers" className="size-4" /> Tech stack
                </dt>
                <dd className="flex flex-wrap gap-1.5">
                  {s.stack.map((t) => (
                    <Pill key={t}>{t}</Pill>
                  ))}
                </dd>
              </div>
            </dl>
          </Card>
        </Container>
      </section>

      {/* Who it's for */}
      <Section bordered={false}>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.6fr]">
          <SectionHeading eyebrow="// who it's for" title={`Who is ${s.name.toLowerCase()} for?`} />
          <CheckList items={s.whoFor} className="text-base" />
        </div>
      </Section>

      {/* Deliverables */}
      <Section>
        <SectionHeading eyebrow="// deliverables" title="What you get" />
        <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {s.deliverables.map((d) => (
            <li key={d.title} className="rounded-xl border border-border bg-surface p-5">
              <h3 className="font-medium">{d.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted">{d.desc}</p>
            </li>
          ))}
        </ul>
      </Section>

      {/* Process */}
      <Section>
        <SectionHeading eyebrow="// process" title="How the project runs" intro={`Typical timeline: ${s.timeline}.`} />
        <div className="mt-10">
          <ProcessSteps steps={s.process} />
        </div>
      </Section>

      {/* Portfolio */}
      <Section>
        <SectionHeading eyebrow="// work" title="Related projects" />
        <div className="mt-10">
          <PortfolioGrid filter={(p) => p.services.includes(s.slug)} />
        </div>
      </Section>

      {/* FAQ */}
      <Section>
        <FaqList faqs={s.faqs} title={`${s.name}: common questions`} />
      </Section>

      {/* Internal links */}
      <Section>
        <SectionHeading eyebrow="// related" title="Related services" />
        <ServiceGrid slugs={s.related} className="mt-10" />
        {(relatedIndustries.length > 0 || localLinks.length > 0) && (
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            {relatedIndustries.length > 0 && (
              <div>
                <p className="font-mono text-xs uppercase tracking-wider text-muted">Industries</p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {relatedIndustries.map((i) => (
                    <li key={i.slug}>
                      <Link href={`/industries/${i.slug}`} className="inline-flex min-h-10 items-center rounded-lg border border-border px-3 text-sm hover:border-border-strong">
                        {i.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {localLinks.length > 0 && (
              <div>
                <p className="font-mono text-xs uppercase tracking-wider text-muted">Near you</p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {localLinks.map((a) => (
                    <li key={a.slug}>
                      <Link href={areaPath(a.slug)} className="inline-flex min-h-10 items-center rounded-lg border border-border px-3 text-sm hover:border-border-strong">
                        Website development in {a.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
      </Section>

      <CtaBand title={`Planning ${s.name.toLowerCase()}? Let's scope it.`} />
    </>
  )
}
