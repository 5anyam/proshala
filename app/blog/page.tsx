import Link from 'next/link'
import { getAllPosts } from '@/lib/blog'
import { formatDate } from '@/lib/utils'
import { pageMetadata } from '@/lib/seo'
import { graph, webPageSchema } from '@/lib/schema'
import { JsonLd } from '@/components/json-ld'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { CtaBand } from '@/components/cta-band'
import { Container, Eyebrow, Pill, Section } from '@/components/ui'

const TITLE = 'Blog: Websites, AI Automation & Growth | Proshala'
const DESCRIPTION =
  'Practical guides on website costs, platforms, AI agents and WhatsApp automation for small businesses in Delhi — written by the Proshala engineering team.'

export const metadata = pageMetadata({ title: TITLE, description: DESCRIPTION, path: '/blog', kicker: 'Blog' })

export default function BlogIndex() {
  const posts = getAllPosts()
  return (
    <>
      <JsonLd data={graph(webPageSchema({ path: '/blog', name: TITLE, description: DESCRIPTION }))} />
      <section className="dot-grid border-b border-border">
        <Container className="py-12 sm:py-16">
          <Breadcrumbs items={[{ name: 'Blog', path: '/blog' }]} />
          <Eyebrow>Blog</Eyebrow>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">Guides for building and automating</h1>
          <p className="mt-5 max-w-2xl text-lg text-muted">
            Straight answers on what websites cost, which platform to pick and what AI can actually automate for a small
            business.
          </p>
        </Container>
      </section>
      <Section bordered={false}>
        <ul className="divide-y divide-border border-y border-border">
          {posts.map((p) => (
            <li key={p.slug}>
              <Link href={`/blog/${p.slug}`} className="group grid gap-2 py-6 sm:grid-cols-[10rem_1fr] sm:gap-6">
                <span className="font-mono text-xs text-muted">
                  <time dateTime={p.date}>{formatDate(p.date)}</time>
                  <span className="block">{p.readingMinutes} min read</span>
                </span>
                <span>
                  <h2 className="text-xl font-semibold tracking-tight group-hover:underline">{p.title}</h2>
                  <p className="mt-2 text-muted">{p.description}</p>
                  <span className="mt-3 flex flex-wrap gap-1.5">
                    {p.tags.map((t) => (
                      <Pill key={t}>{t}</Pill>
                    ))}
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Section>
      <CtaBand />
    </>
  )
}
