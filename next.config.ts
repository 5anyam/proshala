import type { NextConfig } from 'next'
import redirects from './content/redirects.json'

const nextConfig: NextConfig = {
  poweredByHeader: false,
  turbopack: { root: process.cwd() },
  // OG image route reads these font files at runtime
  outputFileTracingIncludes: { '/og': ['./assets/fonts/**'] },
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },
  async redirects() {
    return [
      // Apex → www. Vercel's domain-level redirect normally handles this first;
      // this is a safety net if both hosts ever point at the app.
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'proshala.com' }],
        destination: 'https://www.proshala.com/:path*',
        statusCode: 301,
      },
      // Removed / renamed pages. Edit content/redirects.json, not this file.
      ...redirects.map((r) => ({ ...r, statusCode: 301 as const })),
    ]
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
        ],
      },
    ]
  },
}

export default nextConfig
