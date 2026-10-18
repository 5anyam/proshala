import { BrandIcon, Icon } from '../icon'

const log = [
  { t: '10:02:14', tag: 'whatsapp', text: 'New message: “Need a website for my clinic in Rohini”' },
  { t: '10:02:15', tag: 'agent', text: 'Qualified → service: clinic website · area: Rohini' },
  { t: '10:02:15', tag: 'crm', text: 'Lead created and assigned to sales' },
  { t: '10:02:16', tag: 'calendar', text: 'Consultation offered: Tue 11:30' },
  { t: '10:02:31', tag: 'whatsapp', text: 'Customer confirmed ✓' },
]

/** Hero illustration: a browser mockup of a client site + a live-looking
 *  automation log. All text is in the HTML; animation only reveals it. */
export function HeroVisual() {
  return (
    <div className="relative" aria-hidden="true">
      {/* Browser mockup */}
      <div className="overflow-hidden rounded-xl border border-border-strong bg-surface shadow-card">
        <div className="flex items-center gap-2 border-b border-border px-4 py-3">
          <span className="size-2.5 rounded-full bg-border-strong" />
          <span className="size-2.5 rounded-full bg-border-strong" />
          <span className="size-2.5 rounded-full bg-border-strong" />
          <span className="ml-3 flex-1 truncate rounded-md bg-surface-2 px-3 py-1 font-mono text-[11px] text-muted">
            yourclinic.in
          </span>
        </div>
        <div className="grid gap-4 p-5 sm:grid-cols-[1.2fr_1fr]">
          <div>
            <div className="h-2 w-16 rounded bg-accent/70" />
            <div className="mt-3 h-4 w-11/12 rounded bg-fg/80" />
            <div className="mt-2 h-4 w-3/4 rounded bg-fg/80" />
            <div className="mt-4 space-y-1.5">
              <div className="h-2 w-full rounded bg-muted/30" />
              <div className="h-2 w-5/6 rounded bg-muted/30" />
            </div>
            <div className="mt-5 flex gap-2">
              <span className="rounded-md bg-accent px-3 py-1.5 text-[11px] font-medium text-accent-fg">Book appointment</span>
              <span className="inline-flex items-center gap-1 rounded-md border border-border-strong px-3 py-1.5 text-[11px]">
                <BrandIcon name="whatsapp" className="size-3" /> WhatsApp
              </span>
            </div>
          </div>
          <div className="hidden grid-cols-2 gap-2 sm:grid">
            {['Gauge', 'Search', 'Smartphone', 'ShieldCheck'].map((n) => (
              <div key={n} className="flex flex-col justify-between rounded-lg border border-border bg-surface-2 p-3">
                <Icon name={n as 'Gauge'} className="size-4 text-accent-ink" />
                <div className="mt-4 h-1.5 w-3/4 rounded bg-muted/30" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Automation log */}
      <div className="relative -mt-6 ml-4 overflow-hidden rounded-xl border border-border-strong bg-[#07080a] font-mono text-[11.5px] leading-relaxed text-[#cfd3da] shadow-card sm:ml-10">
        <div className="flex items-center justify-between border-b border-white/10 px-4 py-2.5">
          <span className="inline-flex items-center gap-2 text-[#9aa2ae]">
            <span className="live-dot size-1.5 rounded-full bg-[#c5f24a]" /> automation · lead-flow
          </span>
          <span className="text-[#8b93a1]">demo</span>
        </div>
        <ol className="space-y-1.5 px-4 py-3">
          {log.map((l, i) => (
            <li key={i} className="term-line flex gap-2" style={{ animationDelay: `${0.4 + i * 0.55}s` }}>
              <span className="shrink-0 text-[#8b93a1]">{l.t}</span>
              <span className="shrink-0 text-[#c5f24a]">{l.tag.padEnd(8, ' ')}</span>
              <span className="min-w-0">{l.text}</span>
            </li>
          ))}
          <li className="term-line text-[#8b93a1]" style={{ animationDelay: '3.4s' }}>
            $ <span className="caret inline-block h-3 w-1.5 translate-y-0.5 bg-[#c5f24a]" />
          </li>
        </ol>
      </div>
    </div>
  )
}
