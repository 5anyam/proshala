import type { Metadata } from 'next'
import Link from 'next/link'
import { navGroups } from '@/components/layout/nav-data'
import { ButtonLink, Container, Eyebrow } from '@/components/ui'

export const metadata: Metadata = {
  title: { absolute: 'Page not found | Proshala' },
  robots: { index: false, follow: true },
}

export default function NotFound() {
  return (
    <section className="dot-grid border-b border-border py-20 sm:py-28">
      <Container>
        <Eyebrow>{"// error 404"}</Eyebrow>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">This page does not exist.</h1>
        <p className="mt-4 max-w-xl text-muted">
          It may have moved when we rebuilt the site. Try one of these instead, or tell us what you were looking for on
          WhatsApp.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <ButtonLink href="/" arrow>
            Go to homepage
          </ButtonLink>
          <ButtonLink href="/contact" variant="secondary">
            Contact us
          </ButtonLink>
        </div>
        <div className="mt-14 grid gap-8 sm:grid-cols-3">
          {navGroups.map((g) => (
            <div key={g.key}>
              <Link href={g.href} className="font-mono text-xs uppercase tracking-[0.14em] text-accent-ink">
                {g.label} →
              </Link>
              <ul className="mt-3 space-y-2 text-sm text-muted">
                {g.items.slice(0, 5).map((it) => (
                  <li key={it.href}>
                    <Link href={it.href} className="hover:text-fg">
                      {it.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
