# proshala.com

Website for **Proshala** — a tech company in Rohini, Delhi that builds websites, web apps and AI automations, and runs Google & Meta ads.

- **Stack:** Next.js 16 (App Router, fully static), React 19, TypeScript, Tailwind CSS v4, MDX blog, Lucide icons, Geist font (self-hosted via `next/font`).
- **Hosting:** Vercel. Canonical host is **https://www.proshala.com**.
- **Content lives in `content/`.** You can edit services, locations, FAQs, portfolio, pricing and blog posts without touching components.

---

## Quick start

```bash
npm install
cp .env.example .env.local   # fill in what you have
npm run dev                  # http://localhost:3000 — TODO placeholders are visible in dev
npm run build && npm start   # production build — TODO placeholders are hidden
```

## Environment variables

See `.env.example`. Summary:

| Variable | Required | Purpose |
|---|---|---|
| `GOOGLE_SHEET_WEBHOOK_URL` | at least one of these three | Adds each lead as a row in a Google Sheet — see [Leads in Google Sheets](#leads-in-google-sheets) |
| `GOOGLE_SHEET_SECRET` | optional | Shared secret, must match `SECRET` in the Apps Script |
| `RESEND_API_KEY` | at least one of these three | Emails each lead (verify `proshala.com` in Resend first) |
| `LEAD_WEBHOOK_URL` | at least one of these three | POSTs each lead as JSON (Zapier/Make/n8n, CRM) |
| `LEAD_EMAIL_TO` / `LEAD_EMAIL_FROM` | optional | Recipients (comma-separated) / sender |
| `NEXT_PUBLIC_GA_ID` | optional | GA4 (previous site used `G-FCHC0XD63Q`) |
| `NEXT_PUBLIC_GTM_ID` | optional | Google Tag Manager — don't also configure GA4 inside GTM if `GA_ID` is set |
| `NEXT_PUBLIC_META_PIXEL_ID` | optional | Meta Pixel, loaded only after cookie consent |
| `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` | optional | Search Console meta-tag verification |
| `NEXT_PUBLIC_SHOW_TODOS` | optional | `true` shows TODO placeholders on a production/preview build |

**If none of `GOOGLE_SHEET_WEBHOOK_URL`, `RESEND_API_KEY` or `LEAD_WEBHOOK_URL` is set in production, the form shows "please WhatsApp or call us" instead of losing the lead.**

Tracking uses Google Consent Mode v2: analytics and ad storage are denied until the visitor accepts the cookie banner, and the Meta Pixel loads only after consent. Conversion events:

| Event | When |
|---|---|
| `generate_lead` (Meta: `Lead`) | Once per real form submission, on `/thank-you` |
| `whatsapp_click`, `phone_click`, `email_click` (Meta: `Contact`) | Any element with `data-track="..."` |

### Leads in Google Sheets

Every form submission (free quote and contact) can be added as a row to a Google Sheet: date and time (IST), lead ID, name, phone, email, service, budget, message, page and a **Status** dropdown (New / Contacted / Quoted / Won / Lost).

1. Create a Google Sheet, then go to **Extensions → Apps Script**.
2. Paste the contents of [`scripts/google-sheet-apps-script.gs`](scripts/google-sheet-apps-script.gs).
3. **Deploy → New deployment → Web app**, with *Execute as: Me* and *Who has access: Anyone*. Copy the URL ending in `/exec`.
4. Set `GOOGLE_SHEET_WEBHOOK_URL` to that URL in Vercel (and optionally `GOOGLE_SHEET_SECRET`, matching `SECRET` in the script), then redeploy.
5. Submit a test enquiry on `/free-quote`. If no row appears, open the `/exec` URL in a browser: it should say the endpoint is live. Then check the Vercel function logs for `[lead] delivery failed`.

The sheet can be used together with email (Resend). The form counts as successful if at least one channel delivers, so a Google outage alone never loses a lead as long as email is also set up.

---

## Project structure

```
app/                     routes (one folder per URL)
  [slug]/                local pages: /website-development-{area}
  services/[slug]/       service pages
  industries/[slug]/     industry pages
  blog/[slug]/           MDX posts
  og/                    auto-generated Open Graph images (/og?title=...)
  llms.txt/              plain-text summary for AI assistants
  actions/lead.ts        form server action (validation, honeypot, rate limit, email + webhook)
content/                 ← edit this
  site.ts                name, address, phone, hours, socials (NAP — keep identical to Google Business Profile)
  services/              build.ts · automate.ts · grow.ts
  areas.ts               local pages
  industries.ts
  pillars.ts             /website-development and /ai-automation
  pricing.ts
  portfolio.ts           projects, case studies, testimonials, verified rating
  faqs.ts                home page FAQs
  authors.ts             blog authors
  tech-stack.ts
  blog/*.mdx             blog posts
  redirects.json         every 301 redirect
components/              UI (ui.tsx primitives, sections/, layout/)
lib/                     seo.ts (metadata), schema.ts (JSON-LD), blog.ts, track.ts
scripts/                 verification scripts (see below)
docs/                    keyword-map.md, redirects.md
```

---

## How to…

### Add or edit a service
1. Add an object to the right array in `content/services/build.ts`, `automate.ts` or `grow.ts`. Copy an existing one and keep every field.
2. Set `slug`, `icon` (a name from `components/icon.tsx`), `metaTitle` (≤ 60 chars) and `metaDescription` (≤ 155 chars).
3. Write a 40–60 word `intro` that answers the question directly, plus 6–10 real `faqs`.
4. Set `priceFrom` to e.g. `'₹24,999'`, or leave it as `'TODO'` and the page shows "On quote".

The page, menu, footer, sitemap, `llms.txt` and Service/FAQ schema all update automatically.

### Add a local area page
1. In `content/areas.ts`, either fill in one of the `todo` stubs (Prashant Vihar, Ashok Vihar, Model Town, Paschim Vihar, Punjabi Bagh, Narela, Bawana, Alipur) or copy a ready page.
2. Write **genuinely local** content: the business mix, real landmarks and markets, neighbourhoods, travel and meeting details, 2–3 area-specific sections and area-specific FAQs. Never paste another area's text with the name swapped — Google treats that as doorway pages.
3. Set `status: 'ready'`. The page goes live at `/website-development-{slug}` and is added to the sitemap, footer, "Areas we serve" and `llms.txt`.
4. If an old URL existed for that area (e.g. `/best-digital-marketing-services-in-bawana`), point its redirect in `content/redirects.json` to the new page.

### Add a portfolio item or case study
1. Put the screenshot in `public/portfolio/` (WebP or PNG, around 1600×1000).
2. Add the project to `projects` (or `caseStudies`) in `content/portfolio.ts` with `status: 'ready'`, the real client name, `url`, `stack`, the `services` used, and `results` you can verify.
3. Only publish with the client's permission. Never invent numbers.

### Add a testimonial
Add it to `testimonials` in `content/portfolio.ts` with `status: 'ready'`, using the client's exact words, with permission. Add `sourceUrl` (the link to their Google review) whenever possible. Fill in `verifiedRating` only with your real Google Business Profile rating and review count.

### Add a blog post
1. Create `content/blog/my-post-slug.mdx`. Don't put a year in the slug.
2. Add the frontmatter (copy from an existing post): `title`, `metaTitle` (≤ 60 chars), `description` (≤ 155 chars), `date`, `author`, `tags`, `services`, `areas`, and optionally `faqs`.
3. Start with a 40–60 word **Short answer**, use question-style H2s, and link to at least one service page, one local page and one other post.

### Add or edit FAQs
- Home page: `content/faqs.ts`
- Service, area, industry, pillar and pricing pages: the `faqs` field of that item
- Blog post: the `faqs` frontmatter

FAQPage schema is generated automatically, once per page.

### Add a redirect
Add `{ "source": "/old-url", "destination": "/new-url" }` to `content/redirects.json`, then run `npm run check:redirects`.

---

## Quality checks

Run against a production build (`npm run build && npm start`, then in another terminal):

```bash
BASE=http://localhost:3000 npm run check:links      # crawl: broken links, one H1, title ≤60, description ≤155, canonical, duplicates
BASE=http://localhost:3000 npm run check:redirects  # every old URL → 301 → live page
BASE=http://localhost:3000 npm run check:schema     # JSON-LD parses, required properties, no unverified ratings
npm run check:todos                                 # everything still to fill in
npm run lint && npm run typecheck
```

After deploying, also test key URLs in Google's [Rich Results Test](https://search.google.com/test/rich-results) and [PageSpeed Insights](https://pagespeed.web.dev/).

---

## Deployment checklist (Vercel)

- [ ] Vercel → Domains: make `www.proshala.com` primary, and set `proshala.com` to redirect to it with **308 (permanent)**. It is currently 307 (temporary).
- [ ] Add the environment variables, at minimum one lead delivery channel.
- [ ] Search Console: verify the `https://www.proshala.com` property, submit `/sitemap.xml`, and watch the Pages report for 404s from old URLs.
- [ ] `cms.proshala.com` (old WordPress) currently returns HTTP 500. Set it to noindex or shut it down so it doesn't compete with the main site.
- [ ] Export the old WordPress post URLs (or the Search Console Pages report) and add a redirect for any that are still getting traffic.

---

## Off-site local SEO checklist (Rohini & North-West Delhi)

On-site work only gets you halfway. Local ranking mostly comes from these:

**Google Business Profile**
- [ ] Primary category **"Website designer"**. Secondary: "Website development company", "Software company", "Internet marketing service".
- [ ] Name, address and phone **exactly** as in `content/site.ts` (NAP consistency). Don't add keywords to the business name.
- [ ] Hours Mon–Sat 10:00–19:00. Website: `https://www.proshala.com/website-development-rohini` or the homepage.
- [ ] Services: list each service with a short description, using the names from the site.
- [ ] Service areas: Rohini, Pitampura, Shalimar Bagh, Prashant Vihar, Netaji Subhash Place, Ashok Vihar, Model Town, Paschim Vihar, Punjabi Bagh, Narela, Bawana, Alipur, Delhi.
- [ ] Photos: office exterior and signage, interior, team at work, screenshots of client sites (with permission). Add new ones monthly.
- [ ] Posts: one or two per week (a new project, a blog post, an offer).
- [ ] Q&A: add and answer your own top 5 FAQs.
- [ ] Then copy the Maps share link and embed URL into `content/site.ts` (`mapUrl`, `mapEmbedUrl`) and add the coordinates (`geo`).

**Reviews**
- [ ] Ask every happy client for a Google review. Send the direct review link on WhatsApp after launch.
- [ ] Reply to every review within 48 hours.
- [ ] Never buy reviews or post fake ones. It risks suspension of the profile.

**Citations**: same NAP everywhere, same categories, link to www.proshala.com
- [ ] Justdial
- [ ] Sulekha
- [ ] IndiaMART
- [ ] Clutch
- [ ] GoodFirms
- [ ] Also: Bing Places, Apple Business Connect, Facebook page (address + hours), LinkedIn company page, DesignRush, TradeIndia
- [ ] Update the old listings that still say "digital marketing agency" so they describe the new positioning.

**Links**
- [ ] Add "Website by Proshala" footer credits (with permission) on client sites.
- [ ] Get listed in local business associations and market associations in Rohini and North-West Delhi.
- [ ] Write guest posts or get interviews on Delhi business and startup sites.

---

## Remaining TODOs

Run `npm run check:todos` for the full list. The main ones:

1. **Office address, PIN, coordinates and Maps links** in `content/site.ts`. This is the most important item for local ranking.
2. **Prices** in `content/pricing.ts` and the `priceFrom` field on each service.
3. **Portfolio, case studies and testimonials:** real, permitted and verifiable (`content/portfolio.ts`).
4. **About page:** founding story and team members.
5. **Blog author:** a real person in `content/authors.ts`.
6. **8 North/West Delhi area pages** (stubs in `content/areas.ts`).
7. **GST statement** on the pricing FAQ.
8. **Legal pages:** have a lawyer review them.
9. **Careers:** real openings.
10. **Typical timelines** on service pages: check they match how you actually work.
11. **Favicon:** `layout.tsx` still references `/icon.svg`, `/apple-touch-icon.png` and `/site.webmanifest` (kept as instructed), but these files have never existed and return 404. Either add the files or remove the references; until then, Lighthouse best-practices is capped at 96.
