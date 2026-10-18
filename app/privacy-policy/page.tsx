import { addressLine, site } from '@/content/site'
import { pageMetadata } from '@/lib/seo'
import { LegalPage } from '@/components/legal-page'

export const metadata = pageMetadata({
  title: 'Privacy Policy | Proshala',
  description: 'How Proshala collects, uses and protects personal data submitted through proshala.com, in line with India’s Digital Personal Data Protection Act, 2023.',
  path: '/privacy-policy',
  kicker: 'Legal',
})

export default function PrivacyPolicyPage() {
  return (
    <LegalPage crumb="Privacy policy" path="/privacy-policy" title="Privacy policy" updated="2026-10-18">
      <p>
        This policy explains how {site.legalName} (“Proshala”, “we”) handles personal data collected through{' '}
        {site.url.replace('https://', '')}. We process personal data in accordance with India’s Digital Personal Data
        Protection Act, 2023 (DPDP Act).
      </p>
      <h2>What we collect</h2>
      <ul>
        <li>
          <strong>Details you submit</strong> through our forms or WhatsApp: name, phone number, email, business details and
          your message.
        </li>
        <li>
          <strong>Usage data</strong>, only if you accept analytics cookies: pages visited, device and browser type,
          approximate location and how you arrived (for example, from a Google or Meta ad).
        </li>
        <li>
          <strong>Technical data</strong> needed to run and secure the site, such as IP address in server logs and for
          spam prevention.
        </li>
      </ul>
      <h2>Why we use it</h2>
      <ul>
        <li>To reply to your enquiry and prepare a quote.</li>
        <li>To provide services you have engaged us for.</li>
        <li>To understand which pages and campaigns work, if you have consented to analytics.</li>
        <li>To prevent spam and abuse of our forms.</li>
      </ul>
      <h2>Cookies and tracking</h2>
      <p>
        We use Google Analytics, Google Tag Manager and the Meta Pixel only after you accept cookies in the banner. If you
        decline, analytics and advertising cookies are not set. You can change your choice by clearing this site’s data in
        your browser.
      </p>
      <h2>Who we share it with</h2>
      <p>
        We do not sell personal data. We use service providers to operate the site and handle enquiries — for example email
        delivery (Resend), hosting (Vercel), spreadsheets or CRM tools, and analytics providers (Google, Meta) where you have
        consented. They process data only on our instructions.
      </p>
      <h2>How long we keep it</h2>
      <p>
        Enquiry data is kept for as long as needed to respond and follow up, and for client records as long as required for
        legal, tax and accounting purposes. You can ask us to delete it sooner.
      </p>
      <h2>Your rights</h2>
      <p>
        You can ask to access, correct or erase your personal data, withdraw consent, or raise a grievance. Email{' '}
        <a href={`mailto:${site.email}`}>{site.email}</a> and we will respond within a reasonable time.
      </p>
      <h2>Contact</h2>
      <p>
        {site.legalName}, {addressLine()}. Email: <a href={`mailto:${site.email}`}>{site.email}</a>. Phone:{' '}
        {site.phoneDisplay}.
      </p>
    </LegalPage>
  )
}
