// Auto-generated Open Graph images: /og?title=...&kicker=...
// Every page's metadata points here (see lib/seo.ts). Favicons are untouched.
import { ImageResponse } from 'next/og'
import { readFile } from 'node:fs/promises'
import { join } from 'node:path'

export const runtime = 'nodejs'

const fontsDir = join(process.cwd(), 'assets/fonts')
const fonts = Promise.all([
  readFile(join(fontsDir, 'Geist-SemiBold.ttf')),
  readFile(join(fontsDir, 'GeistMono-Regular.ttf')),
])

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const title = (searchParams.get('title') || 'We build the tech that runs your business.').slice(0, 110)
  const kicker = (searchParams.get('kicker') || 'proshala.com').slice(0, 48)
  const [sans, mono] = await fonts

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px',
          background: '#0A0B0D',
          backgroundImage: 'radial-gradient(rgba(255,255,255,0.08) 1.5px, transparent 1.5px)',
          backgroundSize: '28px 28px',
          color: '#E8EAED',
          fontFamily: 'Geist',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: 999,
              background: '#C5F24A',
            }}
          />
          <div style={{ fontFamily: 'GeistMono', fontSize: 26, color: '#C5F24A', textTransform: 'uppercase', letterSpacing: 3 }}>
            {kicker}
          </div>
        </div>
        <div style={{ fontSize: title.length > 60 ? 60 : 72, lineHeight: 1.1, letterSpacing: -2, maxWidth: 1000 }}>
          {title}
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderTop: '1px solid #2C313B',
            paddingTop: 28,
            fontFamily: 'GeistMono',
            fontSize: 24,
            color: '#9AA2AE',
          }}
        >
          <div style={{ fontFamily: 'Geist', fontSize: 30, letterSpacing: 6, color: '#E8EAED' }}>PROSHALA</div>
          <div>Websites · Web apps · AI automation — Rohini, Delhi</div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        { name: 'Geist', data: sans, weight: 600, style: 'normal' },
        { name: 'GeistMono', data: mono, weight: 400, style: 'normal' },
      ],
      headers: { 'Cache-Control': 'public, max-age=86400, s-maxage=604800, immutable' },
    },
  )
}
