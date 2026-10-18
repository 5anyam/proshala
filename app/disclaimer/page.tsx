import { site } from '@/content/site'
import { pageMetadata } from '@/lib/seo'
import { LegalPage } from '@/components/legal-page'

export const metadata = pageMetadata({
  title: 'Disclaimer | Proshala',
  description: 'Disclaimer for information, pricing, guides and examples published on proshala.com.',
  path: '/disclaimer',
  kicker: 'Legal',
})

export default function DisclaimerPage() {
  return (
    <LegalPage crumb="Disclaimer" path="/disclaimer" title="Disclaimer" updated="2026-10-18">
      <p>
        The information on {site.url.replace('https://', '')} is provided in good faith for general guidance about our
        services and about websites, automation and online advertising.
      </p>
      <h2>Guides and blog posts</h2>
      <p>
        Price ranges, timelines and platform comparisons in our guides reflect typical market conditions at the time of
        writing and may change. They are not a quote. Your project’s price and timeline are set only in a written quote.
      </p>
      <h2>Results</h2>
      <p>
        Search rankings, advertising performance and business results depend on many factors outside our control, including
        competition, platform changes and your own operations. We do not guarantee specific rankings, leads or revenue.
      </p>
      <h2>Third-party platforms</h2>
      <p>
        Google, Meta, WhatsApp, OpenAI, Anthropic, Shopify, WordPress and other names are trademarks of their respective
        owners. We are not affiliated with or endorsed by them unless stated. Their pricing and policies can change at any
        time.
      </p>
      <h2>External links</h2>
      <p>We are not responsible for the content of external websites linked from this site.</p>
      <h2>Contact</h2>
      <p>
        If you believe anything on this site is inaccurate, please tell us at <a href={`mailto:${site.email}`}>{site.email}</a>.
      </p>
    </LegalPage>
  )
}
