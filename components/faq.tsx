import { Plus } from 'lucide-react'
import type { Faq } from '@/content/types'
import { faqSchema } from '@/lib/schema'
import { JsonLd } from './json-ld'
import { SectionHeading } from './ui'

/** FAQ list using native <details> — answers are in the HTML, no JS needed.
 *  Emits FAQPage JSON-LD unless `schema={false}` (only one FAQPage per URL). */
export function FaqList({
  faqs,
  title = 'Frequently asked questions',
  eyebrow = '// FAQ',
  schema = true,
}: {
  faqs: Faq[]
  title?: string
  eyebrow?: string
  schema?: boolean
}) {
  if (!faqs.length) return null
  return (
    <div className="grid gap-10 lg:grid-cols-[1fr_1.6fr]">
      <SectionHeading eyebrow={eyebrow} title={title} />
      <div className="divide-y divide-border border-y border-border">
        {faqs.map((f, i) => (
          <details key={f.q} className="group py-1" open={i === 0}>
            <summary className="flex min-h-12 cursor-pointer items-start justify-between gap-4 py-4 text-left font-medium">
              <h3 className="text-base">{f.q}</h3>
              <Plus
                aria-hidden="true"
                className="mt-0.5 size-5 shrink-0 text-muted transition-transform group-open:rotate-45"
              />
            </summary>
            <p className="pb-5 pr-8 leading-relaxed text-muted">{f.a}</p>
          </details>
        ))}
      </div>
      {schema && <JsonLd data={{ '@context': 'https://schema.org', ...faqSchema(faqs) }} />}
    </div>
  )
}
