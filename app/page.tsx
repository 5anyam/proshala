import Link from 'next/link'
import { site, telLink, whatsappLink } from '@/content/site'
import { servicesByGroup } from '@/content/services'
import { homeFaqs } from '@/content/faqs'
import { pageMetadata } from '@/lib/seo'
import { graph, webPageSchema } from '@/lib/schema'
import { JsonLd } from '@/components/json-ld'
import { BrandIcon, Icon } from '@/components/icon'
import { ButtonA, ButtonLink, Container, Section, SectionHeading } from '@/components/ui'
import { HeroVisual } from '@/components/sections/hero-visual'
import { WorkflowDiagram } from '@/components/sections/workflow-diagram'
import {
  AreasBlock,
  IndustriesGrid,
  PortfolioGrid,
  ProcessSteps,
  ServiceCard,
  StackStrip,
  TestimonialsSection,
} from '@/components/sections/blocks'
import { FaqList } from '@/components/faq'
import { CtaBand } from '@/components/cta-band'

const TITLE = 'Website Development & AI Automation in Delhi | Proshala'
const DESCRIPTION =
  'Proshala builds fast websites, web apps and AI automations for businesses in Rohini and across Delhi, and runs Google & Meta ads to bring them customers.'

export const metadata = pageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: '/',
  ogTitle: 'We build the tech that runs your business.',
  kicker: 'Websites · Web apps · AI automation',
})

// Facts we can stand behind. Numbers are rendered in the HTML — no counters.
const commitments = [
  { value: '< 2.0s', label: 'Largest Contentful Paint budget on every site we build' },
  { value: '100%', label: 'of code, domain and accounts in your name' },
  { value: '1 day', label: 'to get a fixed, written quote after our call' },
  { value: 'Mon–Sat', label: 'a developer you can WhatsApp, 10 AM – 7 PM' },
]

const trust = [
  'Based in Rohini, Delhi',
  'Engineering team, not resellers',
  'Fixed written quotes',
  'You own everything',
  'Hindi & English',
]

const process = [
  { title: 'Discover', desc: 'A 20–30 minute call or visit to understand your business, customers and goals.' },
  { title: 'Plan & quote', desc: 'A written scope with pages, features, timeline and a fixed price.' },
  { title: 'Design', desc: 'Key screens designed and approved before we build.' },
  { title: 'Build & automate', desc: 'Weekly preview links; automations tested with your real data.' },
  { title: 'Launch & support', desc: 'Go-live, tracking verified, team trained, 30 days of free fixes.' },
]

export default function Home() {
  const build = servicesByGroup('build')
  const automate = servicesByGroup('automate')
  const grow = servicesByGroup('grow')

  return (
    <>
      <JsonLd data={graph(webPageSchema({ path: '/', name: TITLE, description: DESCRIPTION }))} />

      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="dot-grid relative overflow-hidden border-b border-border">
        <Container className="grid items-center gap-12 py-14 sm:py-20 lg:grid-cols-[1.05fr_1fr] lg:py-24">
          <div>
            <h1>
              <span className="block font-mono text-xs uppercase tracking-[0.14em] text-accent-ink">
                Website development &amp; AI automation company in Delhi
              </span>
              <span className="mt-4 block text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
                We build websites and AI systems that grow your business.
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
              Proshala is a tech company in Rohini, Delhi. We build fast websites, online stores and web apps, then add AI
              automations — WhatsApp replies, lead qualification, reminders — so every enquiry is answered in seconds. When
              you need more customers, we run Google and Meta ads to the pages we built.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/free-quote" size="lg" arrow>
                Get a free website quote
              </ButtonLink>
              <ButtonA
                href={whatsappLink()}
                target="_blank"
                rel="noopener"
                size="lg"
                variant="secondary"
                data-track="whatsapp_click"
              >
                <BrandIcon name="whatsapp" className="size-4" />
                WhatsApp {site.phoneDisplay}
              </ButtonA>
            </div>
            <ul className="mt-8 flex flex-wrap gap-x-5 gap-y-2 font-mono text-xs text-muted">
              {trust.map((t) => (
                <li key={t} className="inline-flex items-center gap-1.5">
                  <Icon name="Check" className="size-3.5 text-accent-ink" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <HeroVisual />
        </Container>
      </section>

      {/* ── Commitments strip (real numbers in HTML) ─────────── */}
      <section aria-label="Our commitments" className="border-b border-border">
        <Container>
          <dl className="grid grid-cols-2 lg:grid-cols-4">
            {commitments.map((c, i) => (
              <div
                key={c.label}
                className={`flex flex-col py-8 pr-4 ${i % 2 === 1 ? 'border-l border-border pl-4 sm:pl-6' : ''} ${i === 2 ? 'border-t border-border lg:border-t-0 lg:border-l lg:pl-6' : ''} ${i === 3 ? 'border-t lg:border-t-0' : ''}`}
              >
                <dt className="mt-1 text-sm text-muted">{c.label}</dt>
                <dd className="order-first font-mono text-2xl font-medium tracking-tight sm:text-3xl">{c.value}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      {/* ── Build pillar ─────────────────────────────────── */}
      <Section bordered={false} id="build">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="// 01 — build"
            title="Website & web app development"
            intro="Business websites, online stores and custom web apps — built mobile-first, fast on Indian networks, ready for Google, and handed over with full ownership."
          />
          <ButtonLink href="/website-development" variant="secondary" arrow className="shrink-0">
            Website development
          </ButtonLink>
        </div>
        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {build.map((s) => (
            <ServiceCard key={s.slug} service={s} />
          ))}
        </div>
      </Section>

      {/* ── Automate pillar ──────────────────────────────── */}
      <Section id="automate" className="line-grid">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="// 02 — automate"
            title="AI automations & AI agents"
            intro="Take repetitive work off your team: instant WhatsApp replies, AI agents that qualify leads, automatic reminders and invoices. Tap through a flow below to see how it works."
          />
          <ButtonLink href="/ai-automation" variant="secondary" arrow className="shrink-0">
            AI automation
          </ButtonLink>
        </div>
        <div className="mt-10">
          <WorkflowDiagram />
        </div>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {automate.map((s) => (
            <li key={s.slug}>
              <Link
                href={`/services/${s.slug}`}
                className="flex min-h-12 items-center gap-3 rounded-lg border border-border bg-surface px-4 py-3 text-sm hover:border-border-strong"
              >
                <Icon name={s.icon} className="size-4 text-accent-ink" />
                {s.name}
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      {/* ── Portfolio ───────────────────────────────────── */}
      <Section>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading eyebrow="// work" title="Recent projects" />
          <ButtonLink href="/portfolio" variant="ghost" arrow>
            All work
          </ButtonLink>
        </div>
        <div className="mt-10">
          <PortfolioGrid />
        </div>
      </Section>

      {/* ── Tech stack ──────────────────────────────────── */}
      <Section>
        <div className="grid gap-8 lg:grid-cols-[1fr_1.6fr] lg:items-center">
          <SectionHeading
            eyebrow="// stack"
            title="Proven tools, chosen per project"
            intro={
              <>
                We pick the stack that fits your budget and team — not the one we happen to like.{' '}
                <Link href="/tech-stack" className="text-accent-ink underline underline-offset-4">
                  See our full tech stack
                </Link>
                .
              </>
            }
          />
          <StackStrip />
        </div>
      </Section>

      {/* ── Process ─────────────────────────────────────── */}
      <Section>
        <SectionHeading
          eyebrow="// process"
          title="How a project runs"
          intro="Clear stages, dated milestones and a preview link you can open on your phone at every step."
        />
        <div className="mt-10">
          <ProcessSteps steps={process} />
        </div>
      </Section>

      {/* ── Industries ──────────────────────────────────── */}
      <Section>
        <SectionHeading
          eyebrow="// industries"
          title="Built for local businesses that run on enquiries"
          intro="Clinics, schools and coaching institutes, real estate, restaurants, retailers and manufacturers — each with its own website and automation playbook."
        />
        <div className="mt-10">
          <IndustriesGrid />
        </div>
      </Section>

      {/* ── Ads (compact) ───────────────────────────────── */}
      <Section id="grow">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.6fr] lg:items-center">
          <SectionHeading
            eyebrow="// 03 — grow"
            title="Google & Meta ads, run by the people who built the site"
            intro="Tracking, landing pages and lead routing are set up properly first — then campaigns are judged on leads and sales, not clicks."
          />
          <div className="grid gap-3 sm:grid-cols-2">
            {grow.map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
        </div>
      </Section>

      {/* ── Testimonials (only real ones are ever shown) ── */}
      <TestimonialsSection />

      {/* ── Areas ───────────────────────────────────────── */}
      <Section>
        <AreasBlock />
      </Section>

      {/* ── FAQ ─────────────────────────────────────────── */}
      <Section>
        <FaqList faqs={homeFaqs} title="Questions people ask before hiring us" />
      </Section>

      <CtaBand />

      {/* Call link for screen readers / no-JS users at the end of the page */}
      <p className="sr-only">
        Call Proshala on <a href={telLink}>{site.phoneDisplay}</a>.
      </p>
    </>
  )
}
