import { site } from '@/content/site'
import { pageMetadata } from '@/lib/seo'
import { graph, webPageSchema } from '@/lib/schema'
import { JsonLd } from '@/components/json-ld'
import { PageHero } from '@/components/page-hero'
import { CheckList } from '@/components/sections/blocks'
import { Card, Section, SectionHeading, Todo } from '@/components/ui'

const TITLE = 'Careers at Proshala — Developers & Automation, Delhi'
const DESCRIPTION =
  'Work at Proshala in Rohini, Delhi: build websites, web apps and AI automations for real businesses. See open roles or send us your work.'

export const metadata = pageMetadata({ title: TITLE, description: DESCRIPTION, path: '/careers', kicker: 'Careers' })

// TODO: add real openings here. Each one can get its own page and JobPosting schema later.
const openings: { title: string; type: string; location: string; summary: string }[] = []

export default function CareersPage() {
  return (
    <>
      <JsonLd data={graph(webPageSchema({ path: '/careers', name: TITLE, description: DESCRIPTION }))} />
      <PageHero
        crumb="Careers"
        path="/careers"
        eyebrow="Careers · Rohini, Delhi"
        title="Build things businesses actually use"
        intro="We are a small engineering team. You will ship real websites, apps and AI automations for clinics, schools, stores and manufacturers — and see the results."
      />
      <Section bordered={false}>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading eyebrow="// open roles" title="Open roles" />
          <div>
            {openings.length ? (
              <ul className="space-y-3">
                {openings.map((o) => (
                  <li key={o.title}>
                    <Card>
                      <h3 className="font-medium">{o.title}</h3>
                      <p className="mt-1 font-mono text-xs text-muted">
                        {o.type} · {o.location}
                      </p>
                      <p className="mt-2 text-sm text-muted">{o.summary}</p>
                    </Card>
                  </li>
                ))}
              </ul>
            ) : (
              <>
                <p className="text-muted">
                  There are no open roles listed right now. If you are a developer, designer or automation builder, we still
                  want to see your work — email{' '}
                  <a href={`mailto:${site.email}?subject=Careers`} className="text-accent-ink hover:underline">
                    {site.email}
                  </a>{' '}
                  with links to things you have built.
                </p>
                <Todo className="mt-4">Add current openings to the `openings` array in app/careers/page.tsx</Todo>
              </>
            )}
          </div>
        </div>
      </Section>
      <Section>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading eyebrow="// what we value" title="What we look for" />
          <CheckList
            items={[
              'You can show something you built — a site, an app, an automation',
              'You care about speed, accessibility and clean code',
              'You can explain technical things to a business owner simply',
              'You finish things and tell people when you are stuck',
            ]}
          />
        </div>
      </Section>
    </>
  )
}
