import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { readyCaseStudies } from '@/content/portfolio'
import { pageMetadata } from '@/lib/seo'
import { ProjectDetail } from '@/components/project-pages'

type Props = { params: Promise<{ slug: string }> }

export const dynamicParams = false

export function generateStaticParams() {
  const list = readyCaseStudies().map((p) => ({ slug: p.slug }))
  return list.length ? list : [{ slug: '_placeholder' }]
}

const find = (slug: string) => readyCaseStudies().find((p) => p.slug === slug)

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const p = find((await params).slug)
  if (!p) return { robots: { index: false } }
  return pageMetadata({
    title: `${p.title} | Proshala`.slice(0, 60),
    description: p.summary.slice(0, 155),
    path: `/case-studies/${p.slug}`,
    ogTitle: p.title,
    kicker: 'Case study',
  })
}

export default async function CaseStudyPage({ params }: Props) {
  const p = find((await params).slug)
  if (!p) notFound()
  return (
    <ProjectDetail
      p={p}
      crumbs={[
        { name: 'Case studies', path: '/case-studies' },
        { name: p.title, path: `/case-studies/${p.slug}` },
      ]}
    />
  )
}
