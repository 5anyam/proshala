import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import type { ComponentProps } from 'react'
import { MDXRemote } from 'next-mdx-remote/rsc'
import remarkGfm from 'remark-gfm'
import { getAllPosts, getPost } from '@/lib/blog'
import { getAuthor } from '@/content/authors'
import { site } from '@/content/site'
import { areaPath, getArea } from '@/content/areas'
import { formatDate, absoluteUrl } from '@/lib/utils'
import { pageMetadata, ogImageUrl } from '@/lib/seo'
import { graph, ORG_ID, webPageSchema } from '@/lib/schema'
import { JsonLd } from '@/components/json-ld'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { FaqList } from '@/components/faq'
import { CtaBand } from '@/components/cta-band'
import { ServiceGrid } from '@/components/sections/blocks'
import { Container, Eyebrow, Section, SectionHeading } from '@/components/ui'

type Props = { params: Promise<{ slug: string }> }

export const dynamicParams = false

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const p = getPost((await params).slug)
  if (!p) return {}
  return pageMetadata({
    title: p.metaTitle ?? `${p.title} | Proshala`,
    description: p.description,
    path: `/blog/${p.slug}`,
    ogTitle: p.title,
    kicker: 'Proshala blog',
    type: 'article',
    publishedTime: p.date,
    modifiedTime: p.updated ?? p.date,
    authors: [getAuthor(p.author).name],
  })
}

// Internal links use next/link; external links open safely.
const mdxComponents = {
  a: ({ href = '', ...props }: ComponentProps<'a'>) =>
    href.startsWith('/') ? <Link href={href} {...props} /> : <a href={href} target="_blank" rel="noopener" {...props} />,
}

export default async function BlogPost({ params }: Props) {
  const p = getPost((await params).slug)
  if (!p) notFound()
  const path = `/blog/${p.slug}`
  const author = getAuthor(p.author)
  const areas = (p.areas ?? []).map(getArea).filter(Boolean)

  const posting = {
    '@type': 'BlogPosting',
    '@id': `${absoluteUrl(path)}#article`,
    headline: p.title,
    description: p.description,
    datePublished: p.date,
    dateModified: p.updated ?? p.date,
    mainEntityOfPage: absoluteUrl(path),
    image: absoluteUrl(ogImageUrl(p.title, 'Proshala blog')),
    inLanguage: 'en-IN',
    keywords: p.tags.join(', '),
    author:
      author.type === 'Organization'
        ? { '@id': ORG_ID }
        : { '@type': 'Person', name: author.name, url: absoluteUrl(author.url), ...(author.sameAs ? { sameAs: author.sameAs } : {}) },
    publisher: { '@id': ORG_ID },
  }

  return (
    <>
      <JsonLd
        data={graph(
          webPageSchema({ path, name: p.title, description: p.description, updated: p.updated ?? p.date }),
          posting,
        )}
      />
      <article>
        <header className="dot-grid border-b border-border">
          <Container className="max-w-3xl py-12 sm:py-16">
            <Breadcrumbs
              items={[
                { name: 'Blog', path: '/blog' },
                { name: p.title, path },
              ]}
            />
            <Eyebrow>{p.tags[0]}</Eyebrow>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-5xl">{p.title}</h1>
            <p className="mt-5 text-lg leading-relaxed text-muted">{p.description}</p>
            <p className="mt-6 font-mono text-xs text-muted">
              By{' '}
              <Link href={author.url} className="text-fg hover:underline">
                {author.name}
              </Link>{' '}
              · Published <time dateTime={p.date}>{formatDate(p.date)}</time>
              {p.updated && p.updated !== p.date && (
                <>
                  {' '}
                  · Updated <time dateTime={p.updated}>{formatDate(p.updated)}</time>
                </>
              )}{' '}
              · {p.readingMinutes} min read
            </p>
          </Container>
        </header>
        <Container className="max-w-3xl py-12">
          <div className="prose prose-proshala max-w-none prose-headings:tracking-tight prose-h2:mt-12 prose-a:underline-offset-4 sm:prose-lg">
            <MDXRemote source={p.content} components={mdxComponents} options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }} />
          </div>
          <aside className="mt-12 rounded-xl border border-border bg-surface p-5 text-sm">
            <p className="font-medium">About the author</p>
            <p className="mt-1 text-muted">{author.bio}</p>
            <p className="mt-2 text-muted">
              Questions? <a href={`mailto:${site.email}`} className="text-accent-ink hover:underline">{site.email}</a>
            </p>
          </aside>
        </Container>
      </article>

      {p.faqs && p.faqs.length > 0 && (
        <Section>
          <FaqList faqs={p.faqs} />
        </Section>
      )}

      {p.services && p.services.length > 0 && (
        <Section>
          <SectionHeading eyebrow="// related" title="Related services" />
          <ServiceGrid slugs={p.services} className="mt-10" />
          {areas.length > 0 && (
            <ul className="mt-8 flex flex-wrap gap-2">
              {areas.map((a) => (
                <li key={a!.slug}>
                  <Link href={areaPath(a!.slug)} className="inline-flex min-h-10 items-center rounded-lg border border-border px-3 text-sm hover:border-border-strong">
                    Website development in {a!.name}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </Section>
      )}

      <CtaBand />
    </>
  )
}
