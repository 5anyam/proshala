import type { ReactNode } from 'react'
import type { Pillar } from '@/content/pillars'
import { servicesByGroup } from '@/content/services'
import { whatsappLink } from '@/content/site'
import { graph, webPageSchema } from '@/lib/schema'
import { Breadcrumbs } from './breadcrumbs'
import { CtaBand } from './cta-band'
import { FaqList } from './faq'
import { BrandIcon } from './icon'
import { JsonLd } from './json-ld'
import { Price } from './price'
import { CheckList, IndustriesGrid, PortfolioGrid, ProcessSteps, ServiceCard } from './sections/blocks'
import { ButtonA, ButtonLink, Card, Container, Eyebrow, Section, SectionHeading, UpdatedDate } from './ui'

export function PillarPage({ pillar, crumb, children }: { pillar: Pillar; crumb: string; children?: ReactNode }) {
  const services = servicesByGroup(pillar.group)
  const [firstAnswers, laterAnswers] = [pillar.answers.slice(0, 2), pillar.answers.slice(2)]
  return (
    <>
      <JsonLd
        data={graph(
          webPageSchema({ path: pillar.path, name: pillar.metaTitle, description: pillar.metaDescription, updated: pillar.updated }),
        )}
      />

      <section className="dot-grid border-b border-border">
        <Container className="grid gap-10 py-12 sm:py-16 lg:grid-cols-[1.4fr_1fr] lg:items-start">
          <div>
            <Breadcrumbs items={[{ name: crumb, path: pillar.path }]} />
            <Eyebrow>{pillar.eyebrow}</Eyebrow>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">{pillar.h1}</h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">{pillar.intro}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/free-quote" size="lg" arrow>
                {pillar.group === 'build' ? 'Get a free website quote' : 'Book a free tech consultation'}
              </ButtonLink>
              <ButtonA href={whatsappLink()} target="_blank" rel="noopener" size="lg" variant="secondary" data-track="whatsapp_click">
                <BrandIcon name="whatsapp" className="size-4" />
                WhatsApp us
              </ButtonA>
            </div>
            <div className="mt-6">
              <UpdatedDate date={pillar.updated} />
            </div>
          </div>
          <Card>
            <p className="font-mono text-xs uppercase tracking-wider text-accent-ink">Included as standard</p>
            <CheckList items={pillar.included.slice(0, 7)} className="mt-4 text-sm" />
          </Card>
        </Container>
      </section>

      <Section bordered={false}>
        <SectionHeading
          eyebrow="// services"
          title={pillar.group === 'build' ? 'What we build' : 'What we automate'}
        />
        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <ServiceCard key={s.slug} service={s} />
          ))}
        </div>
      </Section>

      <Section>
        <div className="mx-auto max-w-3xl space-y-12">
          {firstAnswers.map((a) => (
            <Answer key={a.h2} {...a} />
          ))}
        </div>
      </Section>

      {children}

      {pillar.table && (
        <Section>
          <SectionHeading eyebrow="// compare" title={pillar.table.h2} />
          <div className="mt-8 overflow-x-auto rounded-xl border border-border">
            <table className="w-full min-w-[640px] text-left text-sm">
              <caption className="sr-only">{pillar.table.caption}</caption>
              <thead className="bg-surface-2 font-mono text-xs uppercase tracking-wider text-muted">
                <tr>
                  {pillar.table.head.map((h) => (
                    <th key={h} scope="col" className="px-4 py-3 font-medium">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-border bg-surface">
                {pillar.table.rows.map((row) => (
                  <tr key={row[0]}>
                    {row.map((cell, i) =>
                      i === 0 ? (
                        <th key={i} scope="row" className="px-4 py-3 font-medium">
                          {cell}
                        </th>
                      ) : (
                        <td key={i} className="px-4 py-3 text-muted">
                          {pillar.table!.head[i] === 'Starting from' ? <Price value={cell} /> : cell}
                        </td>
                      ),
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {pillar.table.note && <p className="mt-3 text-sm text-muted">{pillar.table.note}</p>}
        </Section>
      )}

      <Section>
        <div className="mx-auto max-w-3xl space-y-12">
          {laterAnswers.map((a) => (
            <Answer key={a.h2} {...a} />
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="// process" title="How we work" />
        <div className="mt-10">
          <ProcessSteps steps={pillar.process} />
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="// work" title="Recent projects" />
        <div className="mt-10">
          <PortfolioGrid />
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="// industries" title="Industries we work with" />
        <div className="mt-10">
          <IndustriesGrid />
        </div>
      </Section>

      <Section>
        <FaqList faqs={pillar.faqs} />
      </Section>

      <CtaBand />
    </>
  )
}

function Answer({ h2, body, bullets }: { h2: string; body: string; bullets?: string[] }) {
  return (
    <div>
      <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">{h2}</h2>
      <p className="mt-4 leading-relaxed text-muted sm:text-lg">{body}</p>
      {bullets && <CheckList items={bullets} className="mt-5" />}
    </div>
  )
}
