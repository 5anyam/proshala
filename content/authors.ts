// Blog authors. BlogPosting schema uses these.
// TODO: Add a real person (name, role, photo, LinkedIn) for E-E-A-T and set
// posts' `author:` frontmatter to their key. Until then posts are attributed
// to the organisation, which is accurate.

export type Author = {
  key: string
  name: string
  type: 'Person' | 'Organization'
  role?: string
  bio: string
  url: string
  sameAs?: string[]
  image?: string
}

export const authors: Record<string, Author> = {
  'proshala-team': {
    key: 'proshala-team',
    name: 'Proshala Team',
    type: 'Organization',
    bio: 'The engineering team at Proshala, a Rohini-based company that builds websites, web apps and AI automations for businesses in Delhi.',
    url: '/about',
  },
}

export const getAuthor = (key: string) => authors[key] ?? authors['proshala-team']
