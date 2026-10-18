import Link from 'next/link'
import type { ComponentProps, ReactNode } from 'react'
import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { SHOW_TODOS } from '@/content/site'

export function Container({ className, ...props }: ComponentProps<'div'>) {
  return <div className={cn('mx-auto w-full max-w-6xl px-4 sm:px-6', className)} {...props} />
}

export function Section({
  className,
  children,
  bordered = true,
  ...props
}: ComponentProps<'section'> & { bordered?: boolean }) {
  return (
    <section className={cn('py-16 sm:py-24', bordered && 'border-t border-border', className)} {...props}>
      <Container>{children}</Container>
    </section>
  )
}

/** Monospace label, e.g. "// 01 — BUILD" */
export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <p className={cn('font-mono text-xs uppercase tracking-[0.14em] text-accent-ink', className)}>{children}</p>
  )
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  as: As = 'h2',
  className,
  align = 'left',
}: {
  eyebrow?: string
  title: ReactNode
  intro?: ReactNode
  as?: 'h1' | 'h2'
  className?: string
  align?: 'left' | 'center'
}) {
  return (
    <div className={cn('max-w-3xl', align === 'center' && 'mx-auto text-center', className)}>
      {eyebrow && <Eyebrow className="mb-3">{eyebrow}</Eyebrow>}
      <As className="text-3xl font-semibold tracking-tight sm:text-4xl">{title}</As>
      {intro && <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">{intro}</p>}
    </div>
  )
}

const buttonStyles = {
  primary:
    'bg-accent text-accent-fg hover:brightness-95 shadow-[0_0_0_1px_rgb(0_0_0/0.08)_inset]',
  secondary: 'border border-border-strong bg-surface text-fg hover:bg-surface-2',
  ghost: 'text-fg hover:bg-surface-2',
}

type ButtonLinkProps = ComponentProps<typeof Link> & {
  variant?: keyof typeof buttonStyles
  size?: 'md' | 'lg'
  arrow?: boolean
}

export function ButtonLink({ variant = 'primary', size = 'md', arrow, className, children, ...props }: ButtonLinkProps) {
  return (
    <Link
      className={cn(
        'inline-flex min-h-11 items-center justify-center gap-2 rounded-lg font-medium transition-colors',
        size === 'md' ? 'px-4 text-sm' : 'px-5 text-base',
        buttonStyles[variant],
        className,
      )}
      {...props}
    >
      {children}
      {arrow && <ArrowRight aria-hidden="true" className="size-4" />}
    </Link>
  )
}

/** Plain <a> styled as a button — for tel:, wa.me and mailto: links */
export function ButtonA({
  variant = 'primary',
  size = 'md',
  className,
  ...props
}: ComponentProps<'a'> & { variant?: keyof typeof buttonStyles; size?: 'md' | 'lg' }) {
  return (
    <a
      className={cn(
        'inline-flex min-h-11 items-center justify-center gap-2 rounded-lg font-medium transition-colors',
        size === 'md' ? 'px-4 text-sm' : 'px-5 text-base',
        buttonStyles[variant],
        className,
      )}
      {...props}
    />
  )
}

export function Card({ className, ...props }: ComponentProps<'div'>) {
  return <div className={cn('rounded-xl border border-border bg-surface p-6 shadow-card', className)} {...props} />
}

export function Pill({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-md border border-border bg-surface-2 px-2 py-0.5 font-mono text-xs text-muted',
        className,
      )}
    >
      {children}
    </span>
  )
}

export function UpdatedDate({ date }: { date: string }) {
  const d = new Date(date + 'T00:00:00+05:30')
  return (
    <p className="font-mono text-xs text-muted">
      Last updated{' '}
      <time dateTime={date}>
        {d.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
      </time>
    </p>
  )
}

/** Visible placeholder for content the owner still has to supply.
 *  Rendered in development; hidden in production unless NEXT_PUBLIC_SHOW_TODOS=true. */
export function Todo({ children, className }: { children: ReactNode; className?: string }) {
  if (!SHOW_TODOS) return null
  return (
    <div
      className={cn(
        'rounded-lg border border-dashed border-amber-500/60 bg-amber-500/5 p-4 font-mono text-xs text-amber-600 dark:text-amber-400',
        className,
      )}
    >
      TODO · {children}
    </div>
  )
}
