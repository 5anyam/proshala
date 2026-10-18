import { serviceGroups, services } from '@/content/services'

/** Serializable service options for the lead form <select>. */
export const leadServiceOptions = services.map((s) => ({
  value: s.slug,
  label: s.name,
  group: serviceGroups[s.group].title,
}))
