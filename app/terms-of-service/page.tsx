import { site } from '@/content/site'
import { pageMetadata } from '@/lib/seo'
import { LegalPage } from '@/components/legal-page'

export const metadata = pageMetadata({
  title: 'Terms of Service | Proshala',
  description: 'Terms that apply to using proshala.com and to website, web app, automation and ads projects delivered by Proshala.',
  path: '/terms-of-service',
  kicker: 'Legal',
})

export default function TermsPage() {
  return (
    <LegalPage crumb="Terms of service" path="/terms-of-service" title="Terms of service" updated="2026-10-18">
      <p>
        These terms apply to your use of {site.url.replace('https://', '')} and, unless a signed proposal or contract says
        otherwise, to projects delivered by {site.legalName} (“Proshala”).
      </p>
      <h2>Quotes and scope</h2>
      <p>
        Each project is defined by a written quote or proposal listing pages, features, timeline and price. Work outside that
        scope is quoted separately and started only after your approval.
      </p>
      <h2>Payments</h2>
      <p>
        Payment milestones are set out in the quote. Work may pause if a payment is overdue. Third-party costs — domains,
        hosting, software licences, AI and messaging usage, and advertising spend — are billed by those providers to you, or
        passed through at cost when agreed.
      </p>
      <h2>Ownership</h2>
      <p>
        On full payment, you own the deliverables created specifically for you, including design files, code written for your
        project and content. Domains, hosting and third-party accounts are registered in your name. Open-source libraries and
        third-party tools remain under their own licences.
      </p>
      <h2>Your responsibilities</h2>
      <p>
        You are responsible for the accuracy and legality of content, images and claims you provide, for obtaining consent
        from your customers for marketing messages, and for complying with rules that apply to your industry (for example
        medical advertising or real estate regulations).
      </p>
      <h2>Results</h2>
      <p>
        We commit to the deliverables and measurable targets in your quote. We do not guarantee search rankings, ad
        performance or sales, which depend on factors outside our control.
      </p>
      <h2>Support and warranty</h2>
      <p>
        We fix defects reported within 30 days of launch at no charge. Ongoing support is available under a maintenance plan.
      </p>
      <h2>Liability</h2>
      <p>
        To the extent permitted by law, our total liability for any project is limited to the fees paid for that project. We
        are not liable for indirect or consequential losses.
      </p>
      <h2>Governing law</h2>
      <p>These terms are governed by the laws of India, with courts in Delhi having jurisdiction.</p>
      <h2>Contact</h2>
      <p>
        Questions about these terms: <a href={`mailto:${site.email}`}>{site.email}</a>.
      </p>
    </LegalPage>
  )
}
