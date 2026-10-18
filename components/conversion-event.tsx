'use client'

import { useEffect } from 'react'
import { track } from '@/lib/track'

/** Fires the lead conversion once per real form submission. The server action
 *  redirects here with a unique ?lid=; direct visits and refreshes don't count. */
export function ConversionEvent() {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const lid = params.get('lid')
    if (!lid) return
    try {
      const key = `lead-tracked:${lid}`
      if (sessionStorage.getItem(key)) return
      sessionStorage.setItem(key, '1')
    } catch {}
    track('generate_lead', { service: params.get('service') ?? undefined, lead_id: lid })
  }, [])
  return null
}
