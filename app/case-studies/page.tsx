import Link from 'next/link'
import { readyCaseStudies } from '@/content/portfolio'
import { SHOW_TODOS } from '@/content/site'
import { pageMetadata } from '@/lib/seo'
import { graph, webPageSchema } from '@/lib/schema'
import { JsonLd } from '@/components/json-ld'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { CtaBand } from '@/components/cta-band'
import { ButtonLink, Card, Container, Eyebrow, Section, Todo } from '@/components/ui'

const TITLE = 'Case Studies: Websites & AI Automation Results | Proshala'
const DESCRIPTION =
  'Detailed case studies of websites, web apps and AI automations Proshala built — the problem, what we built, the stack and verifiable results.'

export const metadata = pageMetadata({ title: TITLE, description: DESCRIPTION, path: '/case-studies', kicker: 'Case studies' })

export default function CaseStudiesPage() {
  const list = readyCaseStudies()
  return (
    <>
      <JsonLd data={graph(webPageSchema({ path: '/case-studies', name: TITLE, description: DESCRIPTION }))} />
      <section className="dot-grid border-b border-border">
        <Container className="py-12 sm:py-16">
          <Breadcrumbs items={[{ name: 'Case studies', path: '/case-studies' }]} />
          <Eyebrow>Case studies</Eyebrow>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">Case studies</h1>
          <p className="mt-5 max-w-2xl text-lg text-muted">
            The problem, what we built and what changed — with numbers the client has agreed we can share.
          </p>
        </Container>
      </section>
      <Section bordered={false}>
        {list.length > 0 ? (
          <ul className="grid gap-4 md:grid-cols-2">
            {list.map((c) => (
              <li key={c.slug}>
                <Link href={`/case-studies/${c.slug}`} className="block rounded-xl border border-border bg-surface p-6 hover:border-border-strong">
                  <p className="font-mono text-xs text-muted">{c.client}</p>
                  <h2 className="mt-1 text-xl font-semibold">{c.title}</h2>
                  <p className="mt-2 text-muted">{c.summary}</p>
                </Link>
              </li>
            ))}
          </ul>
        ) : SHOW_TODOS ? (
          <Todo>Add case studies to `caseStudies` in content/portfolio.ts (status: &apos;ready&apos;, real client, verifiable results).</Todo>
        ) : (
          <Card className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-muted">Detailed case studies are being written up. Ask us for relevant examples on a call.</p>
            <ButtonLink href="/contact" variant="secondary">
              Ask for examples
            </ButtonLink>
          </Card>
        )}
      </Section>
      <CtaBand />
    </>
  )
}
