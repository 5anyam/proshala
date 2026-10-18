// Server-side only (uses node:fs). Imported from server components and route handlers.
import fs from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'
import { cache } from 'react'
import type { Faq } from '@/content/types'

const DIR = path.join(process.cwd(), 'content/blog')

export type PostMeta = {
  slug: string
  title: string
  /** ≤60 chars incl. " | Proshala" — falls back to title */
  metaTitle?: string
  description: string
  date: string
  updated?: string
  author: string
  tags: string[]
  /** Service slugs this post supports (for internal links) */
  services?: string[]
  /** Area slugs this post supports */
  areas?: string[]
  faqs?: Faq[]
  draft?: boolean
  readingMinutes: number
}

export type Post = PostMeta & { content: string }

function readPost(file: string): Post {
  const raw = fs.readFileSync(path.join(DIR, file), 'utf8')
  const { data, content } = matter(raw)
  const words = content.split(/\s+/).filter(Boolean).length
  return {
    slug: file.replace(/\.mdx$/, ''),
    title: data.title,
    metaTitle: data.metaTitle,
    description: data.description,
    date: data.date,
    updated: data.updated,
    author: data.author ?? 'proshala-team',
    tags: data.tags ?? [],
    services: data.services ?? [],
    areas: data.areas ?? [],
    faqs: data.faqs ?? [],
    draft: Boolean(data.draft),
    readingMinutes: Math.max(1, Math.round(words / 220)),
    content,
  }
}

export const getAllPosts = cache((): Post[] => {
  if (!fs.existsSync(DIR)) return []
  return fs
    .readdirSync(DIR)
    .filter((f) => f.endsWith('.mdx'))
    .map(readPost)
    .filter((p) => !p.draft)
    .sort((a, b) => (a.date < b.date ? 1 : -1))
})

export const getPost = cache((slug: string) => getAllPosts().find((p) => p.slug === slug))
