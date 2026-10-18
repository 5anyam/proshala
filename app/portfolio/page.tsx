import { pageMetadata } from '@/lib/seo'
import { graph, webPageSchema } from '@/lib/schema'
import { JsonLd } from '@/components/json-ld'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { CtaBand } from '@/components/cta-band'
import { PortfolioGrid } from '@/components/sections/blocks'
import { Container, Eyebrow, Section } from '@/components/ui'

const TITLE = 'Portfolio: Websites, Apps & Automations | Proshala'
const DESCRIPTION =
  'Websites, online stores, web apps and AI automations built by Proshala for businesses in Rohini, Delhi NCR and across India — with stack and results.'

export const metadata = pageMetadata({ title: TITLE, description: DESCRIPTION, path: '/portfolio', kicker: 'Portfolio' })

export default function PortfolioPage() {
  return (
    <>
      <JsonLd data={graph(webPageSchema({ path: '/portfolio', name: TITLE, description: DESCRIPTION }))} />
      <section className="dot-grid border-b border-border">
        <Container className="py-12 sm:py-16">
          <Breadcrumbs items={[{ name: 'Portfolio', path: '/portfolio' }]} />
          <Eyebrow>Portfolio</Eyebrow>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">Work we have shipped</h1>
          <p className="mt-5 max-w-2xl text-lg text-muted">
            Real projects with the stack we used and results we can verify. Every project here is listed with the client’s
            permission.
          </p>
        </Container>
      </section>
      <Section bordered={false}>
        <PortfolioGrid limit={50} />
      </Section>
      <CtaBand />
    </>
  )
}
