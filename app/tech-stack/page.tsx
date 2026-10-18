import { techStack } from '@/content/tech-stack'
import { pageMetadata } from '@/lib/seo'
import { graph, webPageSchema } from '@/lib/schema'
import { JsonLd } from '@/components/json-ld'
import { PageHero } from '@/components/page-hero'
import { CtaBand } from '@/components/cta-band'
import { Section } from '@/components/ui'

const TITLE = 'Our Tech Stack: Next.js, WordPress, n8n & AI | Proshala'
const DESCRIPTION =
  'The tools Proshala uses to build websites, web apps and AI automations — Next.js, React, WordPress, Shopify, Node.js, PostgreSQL, n8n and AI APIs.'

export const metadata = pageMetadata({ title: TITLE, description: DESCRIPTION, path: '/tech-stack', kicker: 'Tech stack' })

export default function TechStackPage() {
  return (
    <>
      <JsonLd data={graph(webPageSchema({ path: '/tech-stack', name: TITLE, description: DESCRIPTION }))} />
      <PageHero
        crumb="Tech stack"
        path="/tech-stack"
        eyebrow="Tech stack"
        title="The tools we build with"
        intro="We choose proven, well-supported technology so your project is fast, secure and easy for any good developer to maintain — including one who is not us."
      />
      <Section bordered={false}>
        <div className="grid gap-x-10 gap-y-12 md:grid-cols-2">
          {techStack.map((g) => (
            <div key={g.title}>
              <h2 className="font-mono text-xs uppercase tracking-[0.14em] text-accent-ink">{g.title}</h2>
              <dl className="mt-4 divide-y divide-border border-y border-border">
                {g.items.map((it) => (
                  <div key={it.name} className="grid grid-cols-[9rem_1fr] gap-4 py-3 text-sm">
                    <dt className="font-medium">{it.name}</dt>
                    <dd className="text-muted">{it.use}</dd>
                  </div>
                ))}
              </dl>
            </div>
          ))}
        </div>
      </Section>
      <CtaBand />
    </>
  )
}
