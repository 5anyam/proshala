'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ArrowRight } from 'lucide-react'
import { site, telLink, whatsappLink } from '@/content/site'
import { BrandIcon, Icon } from '../icon'

/** Floating contact dock on mobile + floating WhatsApp button on desktop. */
export function MobileCtaBar() {
  const pathname = usePathname()
  // On the quote/thank-you pages the quote button is redundant: show Call + WhatsApp only.
  const onQuotePage = pathname === '/free-quote' || pathname === '/thank-you'

  return (
    <>
      <nav
        aria-label="Quick contact"
        className="dock-in fixed inset-x-3 bottom-[calc(0.75rem+env(safe-area-inset-bottom))] z-40 lg:hidden"
      >
        <div className="flex items-center gap-2 rounded-2xl border border-border-strong bg-surface p-2 shadow-[0_18px_40px_-16px_rgb(0_0_0/0.75),0_0_0_1px_rgb(255_255_255/0.03)_inset]">
          {onQuotePage ? (
            <>
              <a
                href={telLink}
                data-track="phone_click"
                className="flex h-12 flex-1 items-center justify-center gap-2 rounded-xl border border-border bg-surface-2 text-sm font-medium active:scale-[0.98]"
              >
                <Icon name="Phone" className="size-4" />
                Call us
              </a>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener"
                data-track="whatsapp_click"
                className="flex h-12 flex-1 items-center justify-center gap-2 rounded-xl bg-[#25D366] text-sm font-medium text-[#062b14] active:scale-[0.98]"
              >
                <BrandIcon name="whatsapp" className="size-4" />
                WhatsApp
              </a>
            </>
          ) : (
            <>
              <a
                href={telLink}
                aria-label={`Call Proshala on ${site.phoneDisplay}`}
                data-track="phone_click"
                className="flex size-12 shrink-0 items-center justify-center rounded-xl border border-border bg-surface-2 text-fg active:scale-95"
              >
                <Icon name="Phone" className="size-5" />
              </a>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener"
                aria-label="Chat with Proshala on WhatsApp"
                data-track="whatsapp_click"
                className="flex size-12 shrink-0 items-center justify-center rounded-xl border border-[#25D366]/30 bg-[#25D366]/12 text-[#25D366] active:scale-95"
              >
                <BrandIcon name="whatsapp" className="size-5" />
              </a>
              <Link
                href="/free-quote"
                className="group flex h-12 min-w-0 flex-1 items-center justify-between gap-2 rounded-xl bg-accent pl-4 pr-3 text-accent-fg shadow-[inset_0_1px_0_rgb(255_255_255/0.35)] active:scale-[0.98]"
              >
                <span className="flex min-w-0 flex-col leading-tight">
                  <span className="truncate text-[15px] font-semibold">Get a free quote</span>
                  <span className="truncate font-mono text-[10px] uppercase tracking-wider opacity-70">Reply in 1 day</span>
                </span>
                <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-black/10 transition-transform group-active:translate-x-0.5">
                  <ArrowRight aria-hidden="true" className="size-4" />
                </span>
              </Link>
            </>
          )}
        </div>
      </nav>

      <a
        href={whatsappLink()}
        target="_blank"
        rel="noopener"
        aria-label="Chat with Proshala on WhatsApp"
        data-track="whatsapp_click"
        className="fixed bottom-6 right-6 z-40 hidden size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg ring-1 ring-black/10 transition-transform hover:scale-105 lg:inline-flex"
      >
        <BrandIcon name="whatsapp" className="size-7" />
      </a>
    </>
  )
}
