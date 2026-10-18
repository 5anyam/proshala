import { site, telLink, whatsappLink } from '@/content/site'
import { BrandIcon } from './icon'
import { ButtonA, ButtonLink, Container, Eyebrow } from './ui'

export function CtaBand({
  title = 'Tell us what you want to build.',
  body = 'Get a fixed, written quote within one working day. No obligation, no sales pressure — just a clear plan and price.',
}: {
  title?: string
  body?: string
}) {
  return (
    <section className="border-t border-border py-16 sm:py-24">
      <Container>
        <div className="dot-grid relative overflow-hidden rounded-2xl border border-border bg-surface px-6 py-12 sm:px-12">
          <Eyebrow className="mb-3">{"// next step"}</Eyebrow>
          <h2 className="max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
          <p className="mt-4 max-w-xl text-muted">{body}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/free-quote" size="lg" arrow>
              Get a free website quote
            </ButtonLink>
            <ButtonA href={whatsappLink()} size="lg" variant="secondary" target="_blank" rel="noopener" data-track="whatsapp_click">
              <BrandIcon name="whatsapp" className="size-4" />
              WhatsApp us
            </ButtonA>
            <ButtonA href={telLink} size="lg" variant="ghost" data-track="phone_click">
              Call {site.phoneDisplay}
            </ButtonA>
          </div>
        </div>
      </Container>
    </section>
  )
}
