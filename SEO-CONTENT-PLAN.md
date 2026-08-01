# Proshala — SEO Content Plan (Delhi NCR Focus)

Goal: Rank proshala.com across Delhi NCR for "digital marketing agency/company in {city}" + build topical authority so location pages and service pages rank faster. Domain is from 2020 with good DA — content velocity + internal linking will compound fast.

---

## 1. Old Blogs on cms.proshala.com — What To Do

**Do NOT bulk-delete.** Deleting URLs that have backlinks/traffic throws away authority. Handle each like this:

### Redirect (301) — overlap with new location pages
These now compete with your own new location pages. 301 them (Rank Math / Redirection plugin on WP won't help since they're served via proshala.com/[slug] — add redirects in `next.config.js`):

| Old post | 301 to |
|---|---|
| /best-digital-marketing-agency-in-delhi-2023 | /digital-marketing-delhi |
| /best-digital-marketing-services-in-delhi | /digital-marketing-delhi |
| /best-social-media-marketing-agency-in-delhi-2024 | /digital-marketing-delhi |
| /website-development-company-in-noida | /digital-marketing-noida |
| /best-digital-marketing-services-in-india | / (homepage) |

### Rewrite & keep (good local intent, no page competes)
Delhi sub-areas are gold — keep the URLs, replace the content with 1,500+ word proper local guides:
- /best-digital-marketing-company-in-rohini → rewrite as "Digital Marketing Services in Rohini"
- /website-development-company-in-rohini → rewrite, link to Rohini post + Delhi page
- /best-digital-marketing-services-in-janakpuri → rewrite
- /best-digital-marketing-services-in-pitampura → rewrite
- /digital-marketing-agency-in-nsp → rewrite (Netaji Subhash Place — commercial hub, high intent)
- /best-digital-marketing-services-in-bawana → rewrite (industrial angle)

### Delete or noindex (off-strategy, thin, dated)
- /best-digital-marketing-company-in-chandigarh, -indore, -surat, -dubai-2024 → you don't serve these seriously; they dilute NCR focus. Delete + 301 to homepage, or keep only if you actually want those markets.
- /5-benefits-of-digital-marketing → generic, zero ranking chance. 301 to /blogs.
- /ai-teams-ai-employee-solutions… → 301 to /services/automation.

**Rule for all future titles: never put a year in the slug** (title mein "2026" theek hai, URL mein kabhi nahi).

---

## 2. New Blog Strategy — 4 Content Clusters

Publish **2 posts/week minimum**. Every post must internally link to: 1 location page + 1 service page + 1 related blog.

### Cluster A — Delhi NCR Local Intent (highest priority, direct money keywords)
1. Digital Marketing Cost in Delhi NCR: Real Pricing Guide (SEO, Ads, SMM)
2. How to Choose a Digital Marketing Agency in Delhi (10-Point Checklist)
3. Top 10 Digital Marketing Companies in Delhi NCR Compared (include yourself #1, be factual about others)
4. SEO Services in Delhi: What ₹10,000/Month Actually Gets You
5. Google Ads Cost in Delhi NCR: CPC Benchmarks by Industry
6. Best Performance Marketing Agencies in Gurgaon for Startups
7. Digital Marketing for Noida Businesses: Sector-Wise Strategy Guide
8. Why Ghaziabad Businesses Lose Customers to Delhi Brands (And How to Fix It)
9. Local SEO in Delhi: How to Rank in the Google Map Pack
10. Digital Marketing in Rohini, Pitampura & NSP: North Delhi Guide
11. Faridabad Industrial Marketing: How Manufacturers Get B2B Leads Online
12. Digital Marketing for Greater Noida West: The Untapped Market

### Cluster B — Service Education (supports service pages)
13. SEO vs Google Ads: Which Should Your Business Choose First?
14. How Long Does SEO Take in India? Honest Month-by-Month Timeline
15. Google Ads Quality Score: The Complete Guide to Lower CPCs
16. WhatsApp Marketing & Automation for Indian Businesses
17. Landing Page vs Website: What Converts Better for Ads?
18. Technical SEO Checklist: 25 Fixes That Move Rankings
19. Meta Ads vs Google Ads for Lead Generation in India
20. How to Read Your Google Analytics 4 Reports (Business Owner's Guide)
21. Content Marketing That Ranks: Topic Clusters Explained Simply
22. Remarketing Explained: Bring Back the 97% Who Didn't Convert

### Cluster C — Industry Playbooks (each links to relevant city pages)
23. Digital Marketing for Real Estate in Noida & Gurgaon: Site-Visit Lead System
24. Digital Marketing for Clinics & Hospitals in Delhi NCR (Compliant Ads Guide)
25. Digital Marketing for Coaching Institutes: Admission Season Playbook
26. Digital Marketing for Restaurants & Cloud Kitchens in Delhi NCR
27. B2B Digital Marketing for Manufacturers (Faridabad, Sahibabad, MIE)
28. Textile Export Marketing: How Panipat Exporters Get International Buyers
29. Digital Marketing for Salons, Gyms & Local Services
30. Digital Marketing for CA, Law & Consulting Firms in Delhi
31. D2C Brand Marketing in India: 0 to First 1,000 Orders
32. Digital Marketing for Schools & Preschools in NCR

### Cluster D — AI & Automation (your differentiator, low competition)
33. AI Marketing Automation for Indian SMBs: Practical Use Cases
34. AI Chatbots for Lead Qualification: Setup Guide + ROI Math
35. How We Use AI to Cut Google Ads Wastage by 30%
36. Marketing Workflow Automation: 10 Tasks You Should Never Do Manually
37. AI Content + SEO in 2026: What Google Actually Rewards
38. Building a Marketing Dashboard: GA4 + Ads + CRM in One View
39. WhatsApp Chatbot + CRM Integration for Indian Businesses
40. The AI-First Agency Model: Why Retainers Are Changing

---

## 3. On-Page Rules (every post)

- 1,200–2,000 words, H2/H3 structure, FAQ section at bottom (FAQ schema via Rank Math)
- Primary keyword in: title, H1, first 100 words, one H2, meta description, slug
- Add real numbers/screenshots where possible (E-E-A-T) + author box "Proshala Team, Delhi NCR"
- 3+ internal links (location page + service page + blog), 1–2 outbound authority links
- Compress images to WebP, alt text with keyword variants

## 4. Beyond Blogs — Ranking Levers

1. **Google Business Profile** — create/optimise GBP for Delhi (primary). Weekly posts, review generation via WhatsApp link. This is 50% of local ranking.
2. **Citations** — JustDial, Sulekha, IndiaMART, Clutch, GoodFirms, DesignRush with identical NAP (name/address/phone).
3. **next.config.js redirects** for the old blog URLs listed above.
4. **Fix Google Search Console verification** — layout.tsx still has placeholder `your-google-verification-code`. Add real code + submit /sitemap.xml.
5. **cms.proshala.com WP API is currently returning 500** — homepage/blog pages silently show nothing when it fails. Fix the WP install (likely plugin error), and ensure cms subdomain is set to `noindex` (only proshala.com should rank, not the CMS).
