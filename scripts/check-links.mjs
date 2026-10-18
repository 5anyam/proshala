// Crawl the running site and check: every internal link resolves (no 404s),
// one <h1> per page, unique titles ≤60 chars and descriptions ≤155 chars,
// canonical points to https://www.proshala.com, no leftover placeholder text.
//
// Usage: npm run build && npm start   (in another terminal)
//        BASE=http://localhost:3000 npm run check:links
const BASE = process.env.BASE || 'http://localhost:3000'
const CANON = 'https://www.proshala.com'

const seen = new Map() // path -> status
const queue = ['/']
const pages = []
const problems = []
const linkSources = new Map()

const decode = (s) => s.replace(/&amp;/g, '&').replace(/&#x27;|&#39;/g, "'").replace(/&quot;/g, '"').replace(/&lt;/g, '<').replace(/&gt;/g, '>')
const strip = (s) => decode(s.replace(/<[^>]+>/g, '')).trim()

// Icon references kept byte-for-byte from the old site at the owner's request.
// They point to files that have never existed; reported as warnings only.
const KNOWN_MISSING = new Set(['/icon.svg', '/apple-touch-icon.png', '/site.webmanifest'])
const warnings = []

// Seed with every URL in the sitemap
const sm = await fetch(`${BASE}/sitemap.xml`).then((r) => r.text())
for (const m of sm.matchAll(/<loc>([^<]+)<\/loc>/g)) queue.push(m[1].replace(CANON, '') || '/')

while (queue.length) {
  const path = queue.shift()
  if (seen.has(path)) continue
  const res = await fetch(BASE + path, { redirect: 'manual' })
  seen.set(path, res.status)
  if (res.status !== 200) continue
  const type = res.headers.get('content-type') || ''
  if (!type.includes('text/html')) continue
  const html = await res.text()

  const h1s = html.match(/<h1[\s>]/g) || []
  const title = strip(html.match(/<title>([\s\S]*?)<\/title>/)?.[1] || '')
  const desc = decode(html.match(/<meta name="description" content="([^"]*)"/)?.[1] || '')
  const canonical = html.match(/<link rel="canonical" href="([^"]*)"/)?.[1] || ''
  const robots = html.match(/<meta name="robots" content="([^"]*)"/)?.[1] || ''
  const noindex = robots.includes('noindex')
  pages.push({ path, title, desc, canonical, noindex })

  if (h1s.length !== 1) problems.push(`${path}: ${h1s.length} <h1> elements`)
  if (!noindex) {
    if (!title) problems.push(`${path}: missing <title>`)
    if (title.length > 60) problems.push(`${path}: title ${title.length} chars — "${title}"`)
    if (!desc) problems.push(`${path}: missing meta description`)
    if (desc.length > 155) problems.push(`${path}: description ${desc.length} chars`)
    const expected = CANON + (path === '/' ? '' : path)
    if (canonical !== expected) problems.push(`${path}: canonical "${canonical}" ≠ "${expected}"`)
  }
  if (/randomuser\.me|your-google-verification-code|name="keywords"/.test(html)) problems.push(`${path}: legacy placeholder found`)
  if (/>\s*TODO/.test(html)) problems.push(`${path}: visible TODO text (expected only in dev / NEXT_PUBLIC_SHOW_TODOS)`)

  for (const m of html.matchAll(/href="([^"#]+)(#[^"]*)?"/g)) {
    let href = m[1]
    if (href.startsWith(CANON)) href = href.slice(CANON.length) || '/'
    if (!href.startsWith('/') || href.startsWith('//') || href.startsWith('/_next')) continue
    href = href.replace(/&amp;/g, '&').split('?')[0] || '/'
    if (!linkSources.has(href)) linkSources.set(href, path)
    if (!seen.has(href)) queue.push(href)
  }
}

for (const [path, status] of seen) {
  if (status >= 400 && KNOWN_MISSING.has(path)) warnings.push(`kept icon reference returns ${status}: ${path}`)
  else if (status >= 400) problems.push(`BROKEN ${status}: ${path} (linked from ${linkSources.get(path) ?? 'sitemap'})`)
}
const indexable = pages.filter((p) => !p.noindex)
const dup = (key) => {
  const m = new Map()
  for (const p of indexable) m.set(p[key], [...(m.get(p[key]) || []), p.path])
  for (const [v, ps] of m) if (ps.length > 1) problems.push(`duplicate ${key} "${v}": ${ps.join(', ')}`)
}
dup('title')
dup('desc')

console.log(`Crawled ${seen.size} URLs, ${pages.length} HTML pages (${indexable.length} indexable).`)
warnings.forEach((w) => console.log('warning: ' + w))
if (problems.length) {
  console.log(`\n${problems.length} problem(s):`)
  problems.forEach((p) => console.log(' - ' + p))
  process.exit(1)
}
console.log('No broken links, H1, title, description or canonical problems found.')
