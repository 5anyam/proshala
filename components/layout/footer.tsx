import Link from 'next/link'
import { addressLine, mailLink, site, telLink, whatsappLink } from '@/content/site'
import { areaGroups, areaPath } from '@/content/areas'
import { industries } from '@/content/industries'
import { BrandIcon, Icon } from '../icon'
import { Container, Todo } from '../ui'
import { Logo } from './logo'
import { navGroups } from './nav-data'

const company = [
  { name: 'About', href: '/about' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Case studies', href: '/case-studies' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Tech stack', href: '/tech-stack' },
  { name: 'Blog', href: '/blog' },
  { name: 'Careers', href: '/careers' },
  { name: 'Contact', href: '/contact' },
]

const legal = [
  { name: 'Privacy policy', href: '/privacy-policy' },
  { name: 'Terms of service', href: '/terms-of-service' },
  { name: 'Disclaimer', href: '/disclaimer' },
]

export function NapBlock({ className }: { className?: string }) {
  return (
    <address className={className + ' not-italic'}>
      <p className="font-medium">{site.legalName}</p>
      <p className="mt-1 text-muted">{addressLine()}</p>
      {!site.address.street && <Todo className="mt-2">Add full street address + PIN in content/site.ts</Todo>}
      <ul className="mt-3 space-y-2 text-sm">
        <li>
          <a href={telLink} className="inline-flex items-center gap-2 hover:text-accent-ink" data-track="phone_click">
            <Icon name="Phone" className="size-4 text-muted" />
            {site.phoneDisplay}
          </a>
        </li>
        <li>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 hover:text-accent-ink"
            data-track="whatsapp_click"
          >
            <BrandIcon name="whatsapp" className="size-4 text-muted" />
            WhatsApp
          </a>
        </li>
        <li>
          <a href={mailLink} className="inline-flex items-center gap-2 hover:text-accent-ink" data-track="email_click">
            <Icon name="Mail" className="size-4 text-muted" />
            {site.email}
          </a>
        </li>
        <li className="inline-flex items-center gap-2 text-muted">
          <Icon name="Clock" className="size-4" />
          {site.hours.display}
        </li>
        {site.mapUrl && (
          <li>
            <a href={site.mapUrl} target="_blank" rel="noopener" className="inline-flex items-center gap-2 hover:text-accent-ink">
              <Icon name="MapPin" className="size-4 text-muted" />
              Get directions
            </a>
          </li>
        )}
      </ul>
    </address>
  )
}

export function Footer() {
  const { local, ncr } = areaGroups()
  return (
    <footer className="border-t border-border bg-surface pb-32 pt-16 lg:pb-10">
      <Container>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm text-muted">{site.tagline} Websites, web apps and AI automation from Rohini, Delhi.</p>
            <NapBlock className="mt-6 text-sm" />
            <ul className="mt-6 flex gap-2">
              {(Object.keys(site.socials) as (keyof typeof site.socials)[]).map((k) => (
                <li key={k}>
                  <a
                    href={site.socials[k]}
                    target="_blank"
                    rel="noopener"
                    aria-label={`Proshala on ${k}`}
                    className="inline-flex size-10 items-center justify-center rounded-lg border border-border text-muted hover:text-fg"
                  >
                    <BrandIcon name={k} className="size-4" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {navGroups.map((g) => (
            <div key={g.key}>
              <p className="font-mono text-xs uppercase tracking-[0.14em] text-accent-ink">{g.label}</p>
              <Link href={g.href} className="mt-2 block text-sm font-medium hover:underline">
                {g.title}
              </Link>
              <ul className="mt-3 space-y-2 text-sm text-muted">
                {g.items.map((it) => (
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

        <div className="mt-12 grid gap-10 border-t border-border pt-10 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr]">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-accent-ink">Areas we serve</p>
            <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-sm text-muted">
              {[...local, ...ncr].map((a) => (
                <li key={a.slug}>
                  <Link href={areaPath(a.slug)} className="hover:text-fg">
                    Website development {a.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-accent-ink">Industries</p>
            <ul className="mt-3 space-y-2 text-sm text-muted">
              {industries.map((i) => (
                <li key={i.slug}>
                  <Link href={`/industries/${i.slug}`} className="hover:text-fg">
                    {i.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-accent-ink">Company</p>
            <ul className="mt-3 space-y-2 text-sm text-muted">
              {company.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-fg">
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-border pt-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {site.legalName}. All rights reserved.</p>
          <ul className="flex flex-wrap gap-4">
            {legal.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-fg">
                  {l.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  )
}
