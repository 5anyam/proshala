import { site } from '@/content/site'
import { pageMetadata } from '@/lib/seo'
import { graph, webPageSchema } from '@/lib/schema'
import { leadServiceOptions } from '@/lib/lead-options'
import { JsonLd } from '@/components/json-ld'
import { PageHero } from '@/components/page-hero'
import { LeadForm } from '@/components/lead-form'
import { NapBlock } from '@/components/layout/footer'
import { AreasBlock } from '@/components/sections/blocks'
import { Card, Section, Todo } from '@/components/ui'

const TITLE = 'Contact Proshala — Rohini, Delhi | Call or WhatsApp'
const DESCRIPTION =
  'Contact Proshala in Rohini, Delhi. Call or WhatsApp +91 99997 74046, email contact@proshala.com, or send your project details. Mon–Sat, 10 AM – 7 PM.'

export const metadata = pageMetadata({ title: TITLE, description: DESCRIPTION, path: '/contact', kicker: 'Contact' })

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={graph({ ...webPageSchema({ path: '/contact', name: TITLE, description: DESCRIPTION }), '@type': 'ContactPage' })}
      />
      <PageHero
        crumb="Contact"
        path="/contact"
        eyebrow="Contact · Rohini, Delhi"
        title="Talk to the people who will build it"
        intro={`Call or WhatsApp ${site.phoneDisplay}, email ${site.email}, or send your details below. We reply within one working day, Monday to Saturday.`}
      />
      <Section bordered={false}>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.3fr]">
          <div className="space-y-6">
            <Card>
              <h2 className="font-mono text-xs uppercase tracking-wider text-accent-ink">Office</h2>
              <NapBlock className="mt-4" />
            </Card>
            {site.mapEmbedUrl ? (
              <iframe
                src={site.mapEmbedUrl}
                title="Proshala office on Google Maps"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-72 w-full rounded-xl border border-border"
              />
            ) : (
              <Todo>Google Maps embed — set mapEmbedUrl and mapUrl in content/site.ts</Todo>
            )}
          </div>
          <Card className="p-6 sm:p-8">
            <h2 className="text-xl font-semibold">Send us your project details</h2>
            <div className="mt-6">
              <LeadForm services={leadServiceOptions} submitLabel="Send message" />
            </div>
          </Card>
        </div>
      </Section>
      <Section>
        <AreasBlock />
      </Section>
    </>
  )
}
