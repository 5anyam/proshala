import { automationPillar as p } from '@/content/pillars'
import { pageMetadata } from '@/lib/seo'
import { PillarPage } from '@/components/pillar-page'
import { WorkflowDiagram } from '@/components/sections/workflow-diagram'
import { Section, SectionHeading } from '@/components/ui'

export const metadata = pageMetadata({
  title: p.metaTitle,
  description: p.metaDescription,
  path: p.path,
  kicker: 'AI automation · AI agents',
})

export default function AiAutomationPage() {
  return (
    <PillarPage pillar={p} crumb="AI automation">
      <Section className="line-grid">
        <SectionHeading
          eyebrow="// see it work"
          title="Three automations most businesses start with"
          intro="Tap a flow and each step to see what happens — no code, no copy-paste, no one forgetting to follow up."
        />
        <div className="mt-10">
          <WorkflowDiagram />
        </div>
      </Section>
    </PillarPage>
  )
}
