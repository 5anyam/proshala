import type { Metadata } from 'next'
import { site, whatsappLink } from '@/content/site'
import { ConversionEvent } from '@/components/conversion-event'
import { BrandIcon } from '@/components/icon'
import { ButtonA, ButtonLink, Container, Eyebrow } from '@/components/ui'

export const metadata: Metadata = {
  title: { absolute: 'Thank you | Proshala' },
  robots: { index: false, follow: false },
}

export default function ThankYouPage() {
  return (
    <section className="dot-grid border-b border-border py-20 sm:py-28">
      <ConversionEvent />
      <Container className="max-w-2xl">
        <Eyebrow>{'// received'}</Eyebrow>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">Thanks — we have your details.</h1>
        <p className="mt-5 text-lg text-muted">
          Someone from our team will contact you within one working day ({site.hours.display}). If it is urgent, WhatsApp us
          now and mention your name.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <ButtonA href={whatsappLink('Hi Proshala, I just sent an enquiry on your website.')} target="_blank" rel="noopener" size="lg" data-track="whatsapp_click">
            <BrandIcon name="whatsapp" className="size-4" /> WhatsApp us
          </ButtonA>
          <ButtonLink href="/blog" variant="secondary" size="lg">
            Read our guides
          </ButtonLink>
        </div>
      </Container>
    </section>
  )
}
