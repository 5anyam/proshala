import { serviceGroups, servicesByGroup } from '@/content/services'
import type { ServiceGroup } from '@/content/types'
import type { IconName } from '../icon'

export type NavGroup = {
  key: ServiceGroup
  label: string
  title: string
  href: string
  items: { name: string; href: string; icon: IconName; summary: string }[]
}

export const navGroups: NavGroup[] = (['build', 'automate', 'grow'] as const).map((key) => ({
  key,
  label: serviceGroups[key].label,
  title: serviceGroups[key].title,
  href: serviceGroups[key].href,
  items: servicesByGroup(key).map((s) => ({
    name: s.name,
    href: `/services/${s.slug}`,
    icon: s.icon,
    summary: s.summary,
  })),
}))

export const primaryLinks = [
  { name: 'Work', href: '/portfolio' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'About', href: '/about' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
]
