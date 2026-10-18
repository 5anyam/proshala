import type { ReactNode } from 'react'
import { Breadcrumbs } from './breadcrumbs'
import { Container, Eyebrow, UpdatedDate } from './ui'

export function PageHero({
  crumb,
  path,
  eyebrow,
  title,
  intro,
  updated,
  children,
}: {
  crumb: string
  path: string
  eyebrow: string
  title: ReactNode
  intro?: ReactNode
  updated?: string
  children?: ReactNode
}) {
  return (
    <section className="dot-grid border-b border-border">
      <Container className="py-12 sm:py-16">
        <Breadcrumbs items={[{ name: crumb, path }]} />
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">{title}</h1>
        {intro && <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">{intro}</p>}
        {children}
        {updated && (
          <div className="mt-6">
            <UpdatedDate date={updated} />
          </div>
        )}
      </Container>
    </section>
  )
}
