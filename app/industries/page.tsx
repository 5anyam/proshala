import { pageMetadata } from '@/lib/seo'
import { graph, webPageSchema } from '@/lib/schema'
import { JsonLd } from '@/components/json-ld'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { CtaBand } from '@/components/cta-band'
import { IndustriesGrid } from '@/components/sections/blocks'
import { Container, Eyebrow, Section } from '@/components/ui'

const TITLE = 'Industries: Websites & Automation by Sector | Proshala'
const DESCRIPTION =
  'Websites, web apps and AI automation for clinics, schools and coaching institutes, real estate, restaurants, retailers and manufacturers in Delhi NCR.'

export const metadata = pageMetadata({ title: TITLE, description: DESCRIPTION, path: '/industries', kicker: 'Industries' })

export default function IndustriesPage() {
  return (
    <>
      <JsonLd data={graph(webPageSchema({ path: '/industries', name: TITLE, description: DESCRIPTION }))} />
      <section className="dot-grid border-b border-border">
        <Container className="py-12 sm:py-16">
          <Breadcrumbs items={[{ name: 'Industries', path: '/industries' }]} />
          <Eyebrow>Industries</Eyebrow>
          <h1 className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
            Websites and automation, by industry
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
            Every industry gets enquiries differently. A clinic needs bookings and reminders; a coaching institute needs to
            handle admission season; a manufacturer needs RFQs and dealer orders. Pick yours to see what we build.
          </p>
        </Container>
      </section>
      <Section bordered={false}>
        <IndustriesGrid />
      </Section>
      <CtaBand />
    </>
  )
}
