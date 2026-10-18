// List every TODO the site owner still has to fill in.
// Usage: npm run check:todos
import { readdirSync, readFileSync, statSync } from 'node:fs'
import { join, relative } from 'node:path'

const root = new URL('..', import.meta.url).pathname
const dirs = ['content', 'app', 'components', 'lib']
const files = []
const walk = (d) => {
  for (const f of readdirSync(d)) {
    const p = join(d, f)
    if (statSync(p).isDirectory()) walk(p)
    else if (/\.(tsx?|mdx?|json)$/.test(f)) files.push(p)
  }
}
dirs.forEach((d) => walk(join(root, d)))

let n = 0
for (const f of files) {
  const lines = readFileSync(f, 'utf8').split('\n')
  const hits = lines
    .map((l, i) => [i + 1, l.trim()])
    .filter(([, l]) => /TODO/.test(l) && !/isTodo|SHOW_TODOS|TODO\s*=|startsWith\('TODO|'TODO' as const|TODO price|replace\('TODO/.test(l))
  if (!hits.length) continue
  console.log(`\n${relative(root, f)}`)
  for (const [ln, l] of hits) {
    n++
    console.log(`  ${String(ln).padStart(4)}  ${l.slice(0, 140)}`)
  }
}
console.log(`\n${n} TODO line(s).`)
