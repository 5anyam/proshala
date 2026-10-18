// Local landing pages: /website-development-{area}
// Only areas with status 'ready' in content/areas.ts are generated; every other
// root-level slug returns 404.
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { AREA_PREFIX, areaPath, getArea, readyAreas } from '@/content/areas'
import { getIndustry } from '@/content/industries'
import { site, whatsappLink } from '@/content/site'
import { pageMetadata } from '@/lib/seo'
import { areaServiceSchema, graph, webPageSchema } from '@/lib/schema'
import { JsonLd } from '@/components/json-ld'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { BrandIcon, Icon } from '@/components/icon'
import { FaqList } from '@/components/faq'
import { CtaBand } from '@/components/cta-band'
import { NapBlock } from '@/components/layout/footer'
import { IndustriesGrid, PortfolioGrid, ServiceGrid } from '@/components/sections/blocks'
import { ButtonA, ButtonLink, Card, Container, Eyebrow, Pill, Section, SectionHeading, Todo, UpdatedDate } from '@/components/ui'
import type { Industry } from '@/content/types'

type Props = { params: Promise<{ slug: string }> }

export const dynamicParams = false

export function generateStaticParams() {
  return readyAreas().map((a) => ({ slug: `${AREA_PREFIX}${a.slug}` }))
}

function areaFromParam(param: string) {
  if (!param.startsWith(AREA_PREFIX)) return undefined
  return getArea(param.slice(AREA_PREFIX.length))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const a = areaFromParam((await params).slug)
  if (!a) return {}
  return pageMetadata({
    title: a.metaTitle,
    description: a.metaDescription,
    path: areaPath(a.slug),
    ogTitle: a.h1,
    kicker: `${a.name} · ${a.region}`,
  })
}

export default async function AreaPage({ params }: Props) {
  const a = areaFromParam((await params).slug)
  if (!a) notFound()
  const path = areaPath(a.slug)
  const nearby = a.nearby.map(getArea).filter(Boolean)
  const inds = a.industries.map(getIndustry).filter(Boolean) as Industry[]
  const isHome = a.kind === 'primary'

  return (
    <>
      <JsonLd
        data={graph(
          webPageSchema({ path, name: a.metaTitle, description: a.metaDescription, updated: a.updated }),
          areaServiceSchema(a, path),
        )}
      />

      <section className="dot-grid border-b border-border">
        <Container className="grid gap-10 py-12 sm:py-16 lg:grid-cols-[1.4fr_1fr] lg:items-start">
          <div>
            <Breadcrumbs
              items={[
                { name: 'Website development', path: '/website-development' },
                { name: a.name, path },
              ]}
            />
            <Eyebrow>
              <Icon name="MapPin" className="mr-1 inline size-3.5 -translate-y-px" />
              {a.name} · {a.region}
            </Eyebrow>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">{a.h1}</h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">{a.intro}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/free-quote" size="lg" arrow>
                Get a free website quote
              </ButtonLink>
              <ButtonA
                href={whatsappLink(`Hi Proshala, I'm in ${a.name} and need a website.`)}
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
              <UpdatedDate date={a.updated} />
            </div>
          </div>
          <Card>
            <p className="font-mono text-xs uppercase tracking-wider text-accent-ink">
              {isHome ? 'Our office' : 'Meet the team'}
            </p>
            <NapBlock className="mt-4 text-sm" />
            <p className="mt-4 border-t border-border pt-4 text-sm leading-relaxed text-muted">{a.travel}</p>
          </Card>
        </Container>
      </section>

      {/* Local business context */}
      <Section bordered={false}>
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <SectionHeading eyebrow="// local context" title={`Who we build for in ${a.name}`} />
            <p className="mt-5 leading-relaxed text-muted sm:text-lg">{a.businessMix}</p>
          </div>
          <div className="space-y-6">
            {a.landmarks.length > 0 && (
              <div>
                <p className="font-mono text-xs uppercase tracking-wider text-muted">Landmarks &amp; hubs</p>
                <ul className="mt-3 flex flex-wrap gap-1.5">
                  {a.landmarks.map((l) => (
                    <li key={l}>
                      <Pill className="text-fg">{l}</Pill>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {a.neighbourhoods.length > 0 && (
              <div>
                <p className="font-mono text-xs uppercase tracking-wider text-muted">Neighbourhoods we serve</p>
                <ul className="mt-3 flex flex-wrap gap-1.5">
                  {a.neighbourhoods.map((n) => (
                    <li key={n}>
                      <Pill>{n}</Pill>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </Section>

      {/* Area-specific sections */}
      <Section>
        <div className="mx-auto max-w-3xl space-y-12">
          {a.sections.map((sec) => (
            <div key={sec.h2}>
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">{sec.h2}</h2>
              <p className="mt-4 leading-relaxed text-muted sm:text-lg">{sec.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Services */}
      <Section>
        <SectionHeading eyebrow="// services" title={`Services for ${a.name} businesses`} />
        <ServiceGrid slugs={a.services} className="mt-10" />
      </Section>

      {/* Local work */}
      <Section>
        <SectionHeading eyebrow="// local work" title={`Projects in and around ${a.name}`} />
        <div className="mt-10 space-y-4">
          {a.localProject && a.localProject.startsWith('TODO') ? <Todo>{a.localProject.replace('TODO: ', '')}</Todo> : a.localProject && <p>{a.localProject}</p>}
          <PortfolioGrid filter={(p) => p.area === a.slug} />
        </div>
      </Section>

      {inds.length > 0 && (
        <Section>
          <SectionHeading eyebrow="// industries" title={`Industries we work with in ${a.name}`} />
          <div className="mt-10">
            <IndustriesGrid items={inds} />
          </div>
        </Section>
      )}

      {isHome && site.mapEmbedUrl && (
        <Section>
          <SectionHeading eyebrow="// find us" title="Visit us in Rohini" />
          <iframe
            src={site.mapEmbedUrl}
            title="Proshala office location on Google Maps"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="mt-8 h-80 w-full rounded-xl border border-border"
          />
        </Section>
      )}
      {isHome && !site.mapEmbedUrl && (
        <Section>
          <Todo>Google Maps embed — set mapEmbedUrl in content/site.ts</Todo>
        </Section>
      )}

      <Section>
        <FaqList faqs={a.faqs} title={`Website development in ${a.name}: FAQs`} />
      </Section>

      {nearby.length > 0 && (
        <Section>
          <SectionHeading eyebrow="// nearby" title="Nearby areas we serve" />
          <ul className="mt-8 flex flex-wrap gap-2">
            {nearby.map((n) => (
              <li key={n!.slug}>
                <Link
                  href={areaPath(n!.slug)}
                  className="inline-flex min-h-11 items-center gap-1.5 rounded-lg border border-border bg-surface px-4 text-sm hover:border-border-strong"
                >
                  <Icon name="MapPin" className="size-3.5 text-accent-ink" />
                  Website development in {n!.name}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/website-development"
                className="inline-flex min-h-11 items-center rounded-lg border border-border bg-surface px-4 text-sm hover:border-border-strong"
              >
                All website development services →
              </Link>
            </li>
          </ul>
        </Section>
      )}

      <CtaBand title={`Building something for your ${a.name} business?`} />
    </>
  )
}
