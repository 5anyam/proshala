import Image from 'next/image'
import type { Project } from '@/content/types'
import { getService } from '@/content/services'
import { getIndustry } from '@/content/industries'
import { Breadcrumbs, type Crumb } from './breadcrumbs'
import { CtaBand } from './cta-band'
import { CheckList, ServiceGrid } from './sections/blocks'
import { ButtonA, Container, Eyebrow, Pill, Section, SectionHeading } from './ui'

/** Shared detail view for portfolio items and case studies. */
export function ProjectDetail({ p, crumbs }: { p: Project; crumbs: Crumb[] }) {
  const industry = getIndustry(p.industry)
  return (
    <>
      <section className="dot-grid border-b border-border">
        <Container className="py-12 sm:py-16">
          <Breadcrumbs items={crumbs} />
          <Eyebrow>
            {p.client}
            {industry ? ` · ${industry.name}` : ''}
            {p.year ? ` · ${p.year}` : ''}
          </Eyebrow>
          <h1 className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">{p.title}</h1>
          <p className="mt-5 max-w-2xl text-lg text-muted">{p.summary}</p>
          {p.url && (
            <ButtonA href={p.url} target="_blank" rel="noopener" variant="secondary" className="mt-8">
              Visit live site ↗
            </ButtonA>
          )}
        </Container>
      </section>
      {p.image && (
        <Container className="pt-12">
          <Image src={p.image} alt={`${p.title} — screenshot`} width={1600} height={1000} className="rounded-xl border border-border" priority />
        </Container>
      )}
      <Section bordered={false}>
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="// results" title="Results" />
            <CheckList items={p.results} className="mt-6" />
          </div>
          <div>
            <SectionHeading eyebrow="// stack" title="Tech stack" />
            <ul className="mt-6 flex flex-wrap gap-2">
              {p.stack.map((s) => (
                <li key={s}>
                  <Pill className="px-3 py-1.5 text-sm text-fg">{s}</Pill>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {p.body && <div className="prose prose-proshala mt-12 max-w-3xl">{p.body}</div>}
      </Section>
      <Section>
        <SectionHeading eyebrow="// services used" title="Services in this project" />
        <ServiceGrid slugs={p.services.filter((s) => getService(s))} className="mt-10" />
      </Section>
      <CtaBand title="Want something similar?" />
    </>
  )
}
