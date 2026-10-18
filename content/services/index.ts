import type { Service, ServiceGroup } from '../types'
import { buildServices } from './build'
import { automateServices } from './automate'
import { growServices } from './grow'

export const services: Service[] = [...buildServices, ...automateServices, ...growServices]

export const serviceGroups: Record<
  ServiceGroup,
  { label: string; title: string; href: string; blurb: string; crumb?: string }
> = {
  build: {
    label: 'Build',
    title: 'Website & Web App Development',
    href: '/website-development',
    crumb: 'Website development',
    blurb: 'Fast websites, stores and web apps that you own.',
  },
  automate: {
    label: 'Automate',
    title: 'AI Automations & AI Agents',
    href: '/ai-automation',
    crumb: 'AI automation',
    blurb: 'Workflows and AI agents that take repetitive work off your team.',
  },
  grow: {
    label: 'Grow',
    title: 'Google & Meta Ads',
    href: '/services#grow',
    blurb: 'Campaigns that send the right people to what we build.',
  },
}

export function getService(slug: string) {
  return services.find((s) => s.slug === slug)
}

export function servicesByGroup(group: ServiceGroup) {
  return services.filter((s) => s.group === group)
}
