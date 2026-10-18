import { websitePillar as p } from '@/content/pillars'
import { pageMetadata } from '@/lib/seo'
import { PillarPage } from '@/components/pillar-page'
import { AreasBlock } from '@/components/sections/blocks'
import { Section } from '@/components/ui'

export const metadata = pageMetadata({
  title: p.metaTitle,
  description: p.metaDescription,
  path: p.path,
  kicker: 'Website development · Delhi',
})

export default function WebsiteDevelopmentPage() {
  return (
    <PillarPage pillar={p} crumb="Website development">
      <Section>
        <AreasBlock />
      </Section>
    </PillarPage>
  )
}
