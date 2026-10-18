import Link from 'next/link'
import { telLink, whatsappLink } from '@/content/site'
import { BrandIcon, Icon } from '../icon'

/** Sticky bottom bar on mobile + floating WhatsApp button on desktop. */
export function MobileCtaBar() {
  return (
    <>
      <div className="glass fixed inset-x-0 bottom-0 z-40 border-t border-border pb-[env(safe-area-inset-bottom)] lg:hidden">
        <div className="grid grid-cols-3 text-xs font-medium">
          <a href={telLink} className="flex min-h-14 flex-col items-center justify-center gap-1" data-track="phone_click">
            <Icon name="Phone" className="size-5" />
            Call
          </a>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener"
            className="flex min-h-14 flex-col items-center justify-center gap-1 border-x border-border"
            data-track="whatsapp_click"
          >
            <BrandIcon name="whatsapp" className="size-5" />
            WhatsApp
          </a>
          <Link href="/free-quote" className="flex min-h-14 flex-col items-center justify-center gap-1 bg-accent text-accent-fg">
            <Icon name="FileText" className="size-5" />
            Free quote
          </Link>
        </div>
      </div>
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
