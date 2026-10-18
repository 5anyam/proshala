import { site } from '@/content/site'
import { pageMetadata } from '@/lib/seo'
import { graph, webPageSchema, ORG_ID } from '@/lib/schema'
import { JsonLd } from '@/components/json-ld'
import { PageHero } from '@/components/page-hero'
import { CtaBand } from '@/components/cta-band'
import { AreasBlock, CheckList, StackStrip } from '@/components/sections/blocks'
import { Card, Section, SectionHeading, Todo } from '@/components/ui'

const TITLE = 'About Proshala — Tech Company in Rohini, Delhi'
const DESCRIPTION =
  'Proshala is an engineering-first tech company in Rohini, Delhi, building websites, web apps and AI automations for local businesses, startups and SMEs.'

export const metadata = pageMetadata({ title: TITLE, description: DESCRIPTION, path: '/about', kicker: 'About' })

const principles = [
  {
    title: 'Engineering first',
    body: 'We are builders. The people you talk to are the people who design, code and ship your project — not account managers passing messages along.',
  },
  {
    title: 'You own everything',
    body: 'Domains, hosting, code repositories, ad accounts and automation tools are set up in your name from day one.',
  },
  {
    title: 'Written, fixed quotes',
    body: 'Every project starts with a written scope: pages, features, timeline and price. Changes are agreed before they are made.',
  },
  {
    title: 'Honest numbers',
    body: 'We do not promise rankings, “10x ROI” or results we cannot control. We set measurable targets — speed, tracking, response time — and report on them.',
  },
]

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={graph({
          ...webPageSchema({ path: '/about', name: TITLE, description: DESCRIPTION }),
          '@type': 'AboutPage',
          about: { '@id': ORG_ID },
        })}
      />
      <PageHero
        crumb="About"
        path="/about"
        eyebrow="About · Rohini, Delhi"
        title="We build the tech that runs your business."
        intro={`${site.legalName} is a tech company based in Rohini, North West Delhi. We design and build websites and web apps, add AI automations that take repetitive work off your team, and run Google and Meta ads to bring people to what we build.`}
      />

      <Section bordered={false}>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading eyebrow="// why we exist" title="Why an engineering company, not an agency?" />
          <div className="space-y-5 leading-relaxed text-muted sm:text-lg">
            <p>
              Most small businesses in Delhi are sold websites by marketing agencies that subcontract the build, and
              marketing by people who cannot touch the website. The result is slow sites, broken tracking and leads that wait
              hours for a reply.
            </p>
            <p>
              We built Proshala the other way round. The same team builds the website, connects it to WhatsApp and your CRM,
              automates follow-ups with AI and — only when it makes sense — runs ads to it. Because one team owns the whole
              path from click to customer, problems get fixed instead of passed around.
            </p>
            <Todo>
              Add the founding story: when Proshala started, who founded it, and one or two real milestones (verifiable).
            </Todo>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="// principles" title="How we work" />
        <div className="mt-10 grid gap-3 sm:grid-cols-2">
          {principles.map((p) => (
            <Card key={p.title}>
              <h3 className="font-medium">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{p.body}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading eyebrow="// team" title="The team" />
          <div>
            <Todo>
              Add real team members: name, role, photo (with permission), one-line bio and LinkedIn. Real people here are a
              strong trust and E-E-A-T signal.
            </Todo>
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading eyebrow="// what we do" title="What we do" />
          <CheckList
            items={[
              'Business websites, e-commerce stores, WordPress and Next.js sites',
              'Custom web apps: portals, CRMs, booking systems, dashboards',
              'AI agents, chatbots, WhatsApp automation and voice agents',
              'Workflow automation with n8n, Make and Zapier',
              'Google Ads and Meta Ads, measured on leads and sales',
            ]}
          />
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="// stack" title="Tools we use" />
        <div className="mt-8">
          <StackStrip />
        </div>
      </Section>

      <Section>
        <AreasBlock />
      </Section>

      <CtaBand />
    </>
  )
}
