// Appends a lead as a new row in a Google Sheet via a Google Apps Script web app.
// Setup: scripts/google-sheet-apps-script.gs (instructions at the top of that file).
//
// Env:
//   GOOGLE_SHEET_WEBHOOK_URL  the Apps Script web app URL (…/exec)
//   GOOGLE_SHEET_SECRET       optional shared secret; must match SECRET in the script

export type SheetLead = {
  id: string
  submittedAt: string
  name: string
  phone: string
  email?: string
  serviceName?: string
  budget?: string
  message?: string
  page?: string
}

export const sheetConfigured = () => Boolean(process.env.GOOGLE_SHEET_WEBHOOK_URL)

export async function appendLeadToSheet(lead: SheetLead) {
  const url = process.env.GOOGLE_SHEET_WEBHOOK_URL
  if (!url) return

  // Apps Script answers POST with a 302 to googleusercontent.com; fetch follows
  // it and the final response body is the JSON returned by doPost().
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'text/plain;charset=utf-8' },
    body: JSON.stringify({ secret: process.env.GOOGLE_SHEET_SECRET || '', ...lead }),
    redirect: 'follow',
    signal: AbortSignal.timeout(10000),
  })
  if (!res.ok) throw new Error(`Google Sheet webhook HTTP ${res.status}`)

  const text = await res.text()
  let body: { ok?: boolean; error?: string } = {}
  try {
    body = JSON.parse(text)
  } catch {
    throw new Error(`Google Sheet webhook returned non-JSON (is the web app access set to "Anyone"?): ${text.slice(0, 120)}`)
  }
  if (!body.ok) throw new Error(`Google Sheet webhook error: ${body.error ?? 'unknown'}`)
}
