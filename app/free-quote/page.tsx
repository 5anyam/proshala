import { site, telLink, whatsappLink } from '@/content/site'
import { pageMetadata } from '@/lib/seo'
import { graph, webPageSchema } from '@/lib/schema'
import { leadServiceOptions } from '@/lib/lead-options'
import { JsonLd } from '@/components/json-ld'
import { PageHero } from '@/components/page-hero'
import { LeadForm } from '@/components/lead-form'
import { BrandIcon, Icon } from '@/components/icon'
import { Card, Section } from '@/components/ui'

const TITLE = 'Get a Free Website or Automation Quote | Proshala'
const DESCRIPTION =
  'Tell us what you want to build — website, online store, web app or AI automation — and get a fixed, written quote within one working day. No obligation.'

export const metadata = pageMetadata({ title: TITLE, description: DESCRIPTION, path: '/free-quote', kicker: 'Free quote' })

const next = [
  { title: 'We read your brief', desc: 'Someone from the engineering team — not a call centre — reviews it the same day.' },
  { title: 'A short call or visit', desc: '20–30 minutes to understand your business and goals. In person if you are near Rohini.' },
  { title: 'Fixed written quote', desc: 'Pages, features, timeline and price in writing within one working day of the call.' },
]

export default function FreeQuotePage() {
  return (
    <>
      <JsonLd data={graph(webPageSchema({ path: '/free-quote', name: TITLE, description: DESCRIPTION }))} />
      <PageHero
        crumb="Free quote"
        path="/free-quote"
        eyebrow="Free quote · Free tech consultation"
        title="Get a free website or automation quote"
        intro="Share a few details and we will come back with questions, a short call, and a fixed written quote. Prefer to talk? WhatsApp or call us."
      />
      <Section bordered={false}>
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <Card className="p-6 sm:p-8">
            <LeadForm services={leadServiceOptions} />
          </Card>
          <div className="space-y-6">
            <div>
              <h2 className="text-lg font-semibold">What happens next</h2>
              <ol className="mt-4 space-y-4">
                {next.map((n, i) => (
                  <li key={n.title} className="flex gap-4">
                    <span className="font-mono text-sm text-accent-ink">0{i + 1}</span>
                    <span>
                      <span className="block font-medium">{n.title}</span>
                      <span className="text-sm text-muted">{n.desc}</span>
                    </span>
                  </li>
                ))}
              </ol>
            </div>
            <Card>
              <h2 className="font-semibold">Rather talk now?</h2>
              <ul className="mt-4 space-y-3 text-sm">
                <li>
                  <a href={whatsappLink()} target="_blank" rel="noopener" className="inline-flex min-h-10 items-center gap-2 hover:text-accent-ink" data-track="whatsapp_click">
                    <BrandIcon name="whatsapp" className="size-4" /> WhatsApp {site.phoneDisplay}
                  </a>
                </li>
                <li>
                  <a href={telLink} className="inline-flex min-h-10 items-center gap-2 hover:text-accent-ink" data-track="phone_click">
                    <Icon name="Phone" className="size-4" /> Call {site.phoneDisplay}
                  </a>
                </li>
                <li className="inline-flex items-center gap-2 text-muted">
                  <Icon name="Clock" className="size-4" /> {site.hours.display}
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </Section>
    </>
  )
}
