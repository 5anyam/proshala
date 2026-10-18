import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { readyProjects } from '@/content/portfolio'
import { pageMetadata } from '@/lib/seo'
import { ProjectDetail } from '@/components/project-pages'

type Props = { params: Promise<{ slug: string }> }

export const dynamicParams = false

export function generateStaticParams() {
  // Next requires at least one param for a fully static dynamic route; the
  // placeholder renders a 404 until real projects are published.
  const list = readyProjects().map((p) => ({ slug: p.slug }))
  return list.length ? list : [{ slug: '_placeholder' }]
}

const find = (slug: string) => readyProjects().find((p) => p.slug === slug)

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const p = find((await params).slug)
  if (!p) return { robots: { index: false } }
  return pageMetadata({
    title: `${p.title} — ${p.client} | Proshala`.slice(0, 60),
    description: p.summary.slice(0, 155),
    path: `/portfolio/${p.slug}`,
    ogTitle: p.title,
    kicker: 'Portfolio',
  })
}

export default async function ProjectPage({ params }: Props) {
  const p = find((await params).slug)
  if (!p) notFound()
  return (
    <ProjectDetail
      p={p}
      crumbs={[
        { name: 'Portfolio', path: '/portfolio' },
        { name: p.title, path: `/portfolio/${p.slug}` },
      ]}
    />
  )
}
