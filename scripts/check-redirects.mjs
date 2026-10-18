// Verify every removed/renamed URL returns 301 to its new home, and that the
// destination itself returns 200 (no chains, no 404s).
// Usage: BASE=http://localhost:3000 npm run check:redirects
import { readFileSync } from 'node:fs'

const BASE = process.env.BASE || 'http://localhost:3000'
const redirects = JSON.parse(readFileSync(new URL('../content/redirects.json', import.meta.url), 'utf8'))

let failed = 0
for (const { source, destination } of redirects) {
  const src = source.replace(':slug', 'example-post')
  const dst = destination.replace(':slug', 'example-post')
  const r = await fetch(BASE + src, { redirect: 'manual' })
  const loc = (r.headers.get('location') || '').replace(/^https?:\/\/[^/]+/, '')
  let ok = r.status === 301 && loc === dst
  let finalStatus = '-'
  if (ok && !destination.includes(':slug')) {
    const f = await fetch(BASE + dst, { redirect: 'manual' })
    finalStatus = f.status
    ok = f.status === 200
  }
  if (!ok) failed++
  console.log(`${ok ? 'OK  ' : 'FAIL'} ${r.status} ${src} → ${loc || '(none)'}  [dest ${finalStatus}]`)
}
console.log(`\n${redirects.length - failed}/${redirects.length} redirects OK`)
process.exit(failed ? 1 : 0)
