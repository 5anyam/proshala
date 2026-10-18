// Best-effort in-memory rate limiter (per server instance). Good enough to stop
// casual form spam on Vercel; for stricter limits swap in Upstash Redis.
const hits = new Map<string, number[]>()

export function rateLimit(key: string, limit = 5, windowMs = 10 * 60 * 1000) {
  const now = Date.now()
  const recent = (hits.get(key) ?? []).filter((t) => now - t < windowMs)
  if (recent.length >= limit) {
    hits.set(key, recent)
    return false
  }
  recent.push(now)
  hits.set(key, recent)
  if (hits.size > 5000) hits.clear()
  return true
}
