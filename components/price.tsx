import { SHOW_TODOS } from '@/content/site'
import { isTodo } from '@/lib/utils'

/** Renders a price, or "On quote" in production while the price is still a TODO. */
export function Price({ value, fallback = 'On quote' }: { value: string; fallback?: string }) {
  if (!isTodo(value)) return <>{value}</>
  if (SHOW_TODOS)
    return <span className="rounded border border-dashed border-amber-500/60 px-1.5 font-mono text-xs text-amber-500">TODO price</span>
  return <span className="text-muted">{fallback}</span>
}
