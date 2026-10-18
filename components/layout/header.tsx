'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useId, useRef, useState } from 'react'
import { ChevronDown, Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Icon } from '../icon'
import { ButtonLink } from '../ui'
import { Logo } from './logo'
import { navGroups, primaryLinks } from './nav-data'
import { ThemeToggle } from './theme-toggle'

export function Header() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const menuId = useId()
  const mobileId = useId()
  const wrapRef = useRef<HTMLDivElement>(null)

  // Close menus on navigation (state adjustment during render, no effect needed)
  const [lastPath, setLastPath] = useState(pathname)
  if (pathname !== lastPath) {
    setLastPath(pathname)
    setMenuOpen(false)
    setMobileOpen(false)
  }

  // Close on Escape / outside click
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        setMenuOpen(false)
        setMobileOpen(false)
      }
    }
    function onClick(e: MouseEvent) {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) setMenuOpen(false)
    }
    document.addEventListener('keydown', onKey)
    document.addEventListener('mousedown', onClick)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.removeEventListener('mousedown', onClick)
    }
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
  }, [mobileOpen])

  return (
    <header className="glass sticky top-0 z-50 border-b border-border">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded-md focus:bg-accent focus:px-3 focus:py-2 focus:text-accent-fg"
      >
        Skip to content
      </a>
      <div ref={wrapRef} className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Logo />

        <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
          <button
            type="button"
            aria-expanded={menuOpen}
            aria-controls={menuId}
            onClick={() => setMenuOpen((v) => !v)}
            className="inline-flex h-10 items-center gap-1 rounded-lg px-3 text-sm text-muted hover:text-fg"
          >
            Services
            <ChevronDown aria-hidden="true" className={cn('size-4 transition-transform', menuOpen && 'rotate-180')} />
          </button>
          {primaryLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              aria-current={pathname === l.href ? 'page' : undefined}
              className="inline-flex h-10 items-center rounded-lg px-3 text-sm text-muted hover:text-fg aria-[current=page]:text-fg"
            >
              {l.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-1">
          <ThemeToggle />
          <ButtonLink href="/free-quote" className="hidden sm:inline-flex">
            Free quote
          </ButtonLink>
          <button
            type="button"
            className="inline-flex size-10 items-center justify-center rounded-lg hover:bg-surface-2 lg:hidden"
            aria-expanded={mobileOpen}
            aria-controls={mobileId}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X aria-hidden="true" className="size-5" /> : <Menu aria-hidden="true" className="size-5" />}
          </button>
        </div>

        {/* Desktop mega menu — always in the HTML, hidden when closed */}
        <div
          id={menuId}
          hidden={!menuOpen}
          className="absolute inset-x-0 top-16 border-b border-border bg-bg shadow-card max-lg:hidden"
        >
          <div className="mx-auto grid max-w-6xl grid-cols-3 gap-8 px-6 py-8">
            {navGroups.map((g) => (
              <div key={g.key}>
                <Link href={g.href} className="group mb-4 block">
                  <span className="font-mono text-xs uppercase tracking-[0.14em] text-accent-ink">{g.label}</span>
                  <span className="mt-1 block text-sm font-medium group-hover:underline">{g.title}</span>
                </Link>
                <ul className="space-y-1">
                  {g.items.map((it) => (
                    <li key={it.href}>
                      <Link
                        href={it.href}
                        className="flex items-start gap-3 rounded-lg p-2 hover:bg-surface-2"
                      >
                        <Icon name={it.icon} className="mt-0.5 size-4 shrink-0 text-muted" />
                        <span className="text-sm">{it.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id={mobileId}
        hidden={!mobileOpen}
        className="fixed inset-x-0 bottom-0 top-16 z-40 overflow-y-auto border-t border-border bg-bg lg:hidden"
      >
        <nav aria-label="Mobile" className="px-4 pb-32 pt-4">
          {navGroups.map((g) => (
            <details key={g.key} className="border-b border-border" open={g.key === 'build'}>
              <summary className="flex min-h-12 cursor-pointer items-center justify-between">
                <span>
                  <span className="mr-2 font-mono text-xs uppercase tracking-[0.14em] text-accent-ink">{g.label}</span>
                  <span className="text-sm">{g.title}</span>
                </span>
                <ChevronDown aria-hidden="true" className="size-4 text-muted" />
              </summary>
              <ul className="pb-3">
                <li>
                  <Link href={g.href} className="flex min-h-11 items-center px-2 text-sm font-medium">
                    Overview →
                  </Link>
                </li>
                {g.items.map((it) => (
                  <li key={it.href}>
                    <Link href={it.href} className="flex min-h-11 items-center gap-3 px-2 text-sm text-muted">
                      <Icon name={it.icon} className="size-4" />
                      {it.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </details>
          ))}
          <ul className="mt-2">
            {primaryLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="flex min-h-12 items-center border-b border-border text-sm">
                  {l.name}
                </Link>
              </li>
            ))}
          </ul>
          <ButtonLink href="/free-quote" size="lg" className="mt-6 w-full" arrow>
            Get a free website quote
          </ButtonLink>
        </nav>
      </div>
    </header>
  )
}
