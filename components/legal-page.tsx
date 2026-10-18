import type { ReactNode } from 'react'
import { PageHero } from './page-hero'
import { Container, Todo } from './ui'

export function LegalPage({
  crumb,
  path,
  title,
  updated,
  children,
}: {
  crumb: string
  path: string
  title: string
  updated: string
  children: ReactNode
}) {
  return (
    <>
      <PageHero crumb={crumb} path={path} eyebrow="Legal" title={title} updated={updated} />
      <Container className="max-w-3xl py-12">
        <Todo className="mb-8">Starter text — have it reviewed by a lawyer before relying on it.</Todo>
        <div className="prose prose-proshala max-w-none">{children}</div>
      </Container>
    </>
  )
}
