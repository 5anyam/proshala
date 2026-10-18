import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(iso: string) {
  return new Date(iso + 'T00:00:00+05:30').toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

export function absoluteUrl(path: string) {
  return `https://www.proshala.com${path === '/' ? '' : path}`
}

export function isTodo(value: string | undefined | null) {
  return !value || value.startsWith('TODO')
}
