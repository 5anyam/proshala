/**
 * Proshala — website leads → Google Sheet
 *
 * SETUP (5 minutes, one time):
 *  1. Create a Google Sheet (e.g. "Proshala Leads").
 *  2. In the sheet: Extensions → Apps Script. Delete the sample code and paste this whole file.
 *  3. Optional but recommended: set SECRET below to a long random string, and put the
 *     same value in the website's GOOGLE_SHEET_SECRET environment variable.
 *  4. Click Deploy → New deployment → type "Web app".
 *       Execute as:      Me
 *       Who has access:  Anyone
 *     Click Deploy, approve the permissions, and copy the Web app URL (ends with /exec).
 *  5. Put that URL in the website's GOOGLE_SHEET_WEBHOOK_URL environment variable
 *     (Vercel → Project → Settings → Environment Variables), then redeploy the site.
 *  6. Test: submit the form on /free-quote — a row appears in the "Leads" tab.
 *
 * If you edit this script later: Deploy → Manage deployments → Edit (pencil) →
 * Version "New version" → Deploy. The URL stays the same.
 */

const SECRET = '' // must match GOOGLE_SHEET_SECRET on the website ('' = no check)
const SHEET_NAME = 'Leads'
const TIMEZONE = 'Asia/Kolkata'
const HEADERS = ['Received (IST)', 'Lead ID', 'Name', 'Phone', 'Email', 'Service', 'Budget', 'Message', 'Page', 'Status', 'Notes']

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents)
    if (SECRET && data.secret !== SECRET) return json_({ ok: false, error: 'unauthorized' })

    const sheet = getSheet_()
    const lock = LockService.getScriptLock()
    lock.waitLock(10000)
    try {
      sheet.appendRow([
        Utilities.formatDate(data.submittedAt ? new Date(data.submittedAt) : new Date(), TIMEZONE, 'dd MMM yyyy, HH:mm'),
        safe_(data.id),
        safe_(data.name),
        safe_(data.phone),
        safe_(data.email),
        safe_(data.serviceName),
        safe_(data.budget),
        safe_(data.message),
        safe_(data.page),
        'New',
        '',
      ])
    } finally {
      lock.releaseLock()
    }
    return json_({ ok: true })
  } catch (err) {
    return json_({ ok: false, error: String(err) })
  }
}

// Visiting the URL in a browser shows this — handy to confirm the deployment works.
function doGet() {
  return json_({ ok: true, message: 'Proshala lead endpoint is live. Leads are sent here by POST.' })
}

function getSheet_() {
  const ss = SpreadsheetApp.getActiveSpreadsheet()
  let sheet = ss.getSheetByName(SHEET_NAME)
  if (!sheet) sheet = ss.insertSheet(SHEET_NAME)
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(HEADERS)
    sheet.setFrozenRows(1)
    sheet.getRange(1, 1, 1, HEADERS.length).setFontWeight('bold').setBackground('#F5C542')
    // Status dropdown for the sales team
    const rule = SpreadsheetApp.newDataValidation()
      .requireValueInList(['New', 'Contacted', 'Quoted', 'Won', 'Lost'], true)
      .build()
    sheet.getRange(2, 10, sheet.getMaxRows() - 1, 1).setDataValidation(rule)
  }
  return sheet
}

// Keep values as plain text: prevents formula injection (=, +, -, @) and keeps
// phone numbers like +91… or 09… from being turned into numbers.
function safe_(v) {
  const s = v == null ? '' : String(v).slice(0, 2000)
  return /^[=+\-@0-9]/.test(s) ? "'" + s : s
}

function json_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON)
}
