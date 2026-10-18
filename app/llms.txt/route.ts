// /llms.txt — a plain summary of the company for AI assistants and answer engines.
import { addressLine, site } from '@/content/site'
import { serviceGroups, servicesByGroup } from '@/content/services'
import { areaPath, readyAreas } from '@/content/areas'
import { industries } from '@/content/industries'
import { getAllPosts } from '@/lib/blog'
import { absoluteUrl } from '@/lib/utils'

export const dynamic = 'force-static'

export function GET() {
  const groups = (['build', 'automate', 'grow'] as const)
    .map((g) => {
      const head = `### ${serviceGroups[g].title}`
      const items = servicesByGroup(g).map((s) => `- [${s.h1}](${absoluteUrl(`/services/${s.slug}`)}): ${s.summary}`)
      return [head, ...items].join('\n')
    })
    .join('\n\n')

  const body = `# ${site.name}

> ${site.description}

${site.name} (${site.legalName}) is an engineering-first tech company based in ${addressLine()}, India. It builds business websites, e-commerce stores and custom web apps, adds AI automations and AI agents (WhatsApp, chatbots, CRM workflows, voice agents), and runs Google and Meta ads for clients. Its core work is website development and AI automation; ads are a supporting service.

## Contact
- Phone / WhatsApp: ${site.phoneDisplay}
- Email: ${site.email}
- Hours: ${site.hours.display} (IST)
- Address: ${addressLine()}
- Website: ${site.url}

## Key pages
- [Website development](${absoluteUrl('/website-development')}): pillar page — services, costs, platforms, process
- [AI automation](${absoluteUrl('/ai-automation')}): pillar page — AI agents, WhatsApp automation, tools, safety, costs
- [Website development in Rohini](${absoluteUrl('/website-development-rohini')}): primary local page
- [Pricing](${absoluteUrl('/pricing')})
- [Services](${absoluteUrl('/services')})
- [Free quote](${absoluteUrl('/free-quote')})
- [Contact](${absoluteUrl('/contact')})

## Services
${groups}

## Areas served
${readyAreas()
  .map((a) => `- [${a.name}](${absoluteUrl(areaPath(a.slug))})`)
  .join('\n')}

## Industries
${industries.map((i) => `- [${i.name}](${absoluteUrl(`/industries/${i.slug}`)})`).join('\n')}

## Guides
${getAllPosts()
  .map((p) => `- [${p.title}](${absoluteUrl(`/blog/${p.slug}`)}): ${p.description}`)
  .join('\n')}
`
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } })
}
