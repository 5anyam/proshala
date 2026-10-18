import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { breadcrumbSchema } from '@/lib/schema'
import { JsonLd } from './json-ld'

export type Crumb = { name: string; path: string }

/** Visible breadcrumbs + BreadcrumbList JSON-LD. "Home" is added automatically. */
export function Breadcrumbs({ items }: { items: Crumb[] }) {
  const all = [{ name: 'Home', path: '/' }, ...items]
  return (
    <>
      <nav aria-label="Breadcrumb" className="mb-6">
        <ol className="flex flex-wrap items-center gap-1 font-mono text-xs text-muted">
          {all.map((c, i) => (
            <li key={c.path} className="flex items-center gap-1">
              {i > 0 && <ChevronRight aria-hidden="true" className="size-3" />}
              {i === all.length - 1 ? (
                <span aria-current="page" className="text-fg">
                  {c.name}
                </span>
              ) : (
                <Link href={c.path} className="hover:text-fg">
                  {c.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
      <JsonLd data={{ '@context': 'https://schema.org', ...breadcrumbSchema(all) }} />
    </>
  )
}
