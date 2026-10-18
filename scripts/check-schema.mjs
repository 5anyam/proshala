// Extract and validate JSON-LD from every page in the sitemap: valid JSON,
// @context present, required properties per type, and no review/rating markup
// unless explicitly configured. (For Google's view, also test key URLs in
// https://search.google.com/test/rich-results after deploying.)
// Usage: BASE=http://localhost:3000 npm run check:schema
const BASE = process.env.BASE || 'http://localhost:3000'
const CANON = 'https://www.proshala.com'

const required = {
  Organization: ['name', 'url', 'logo'],
  LocalBusiness: ['name', 'address', 'telephone', 'url'],
  ProfessionalService: ['name', 'address', 'telephone'],
  WebSite: ['name', 'url'],
  WebPage: ['url', 'name'],
  ContactPage: ['url', 'name'],
  AboutPage: ['url', 'name'],
  Service: ['name', 'provider'],
  BreadcrumbList: ['itemListElement'],
  FAQPage: ['mainEntity'],
  BlogPosting: ['headline', 'datePublished', 'author', 'publisher', 'image'],
}

const sm = await fetch(`${BASE}/sitemap.xml`).then((r) => r.text())
const paths = [...sm.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].replace(CANON, '') || '/')

const problems = []
const typeCount = {}
for (const path of paths) {
  const html = await fetch(BASE + path).then((r) => r.text())
  const blocks = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map((m) => m[1])
  if (!blocks.length) problems.push(`${path}: no JSON-LD`)
  let faqPages = 0
  for (const raw of blocks) {
    let data
    try {
      data = JSON.parse(raw)
    } catch (e) {
      problems.push(`${path}: invalid JSON-LD (${e.message})`)
      continue
    }
    if (!data['@context']) problems.push(`${path}: JSON-LD without @context`)
    const nodes = data['@graph'] ?? [data]
    for (const n of nodes) {
      const types = [].concat(n['@type'])
      for (const t of types) {
        typeCount[t] = (typeCount[t] || 0) + 1
        if (t === 'FAQPage') faqPages++
        if (t === 'Review' || t === 'AggregateRating') problems.push(`${path}: ${t} markup present — only allowed for verified reviews`)
        for (const prop of required[t] || []) if (n[prop] == null) problems.push(`${path}: ${t} missing "${prop}"`)
      }
      if (n.aggregateRating) problems.push(`${path}: aggregateRating present — confirm it is verified`)
      if (n['@type'] === 'FAQPage' && !n.mainEntity?.every((q) => q.name && q.acceptedAnswer?.text))
        problems.push(`${path}: FAQPage question without answer`)
    }
  }
  if (faqPages > 1) problems.push(`${path}: ${faqPages} FAQPage blocks (should be 1)`)
}

console.log(`Checked ${paths.length} pages. Schema types found:`)
console.log(Object.entries(typeCount).map(([t, c]) => `  ${t}: ${c}`).join('\n'))
if (problems.length) {
  console.log(`\n${problems.length} problem(s):`)
  problems.forEach((p) => console.log(' - ' + p))
  process.exit(1)
}
console.log('\nAll JSON-LD blocks parse and include required properties.')
