import type { Area } from './types'

// Local landing pages at /website-development-{slug}.
// RULE: no doorway pages. A page is only built, linked and added to the
// sitemap when `status: 'ready'` AND its content is genuinely specific to
// that area. Stubs below marked 'todo' need real local content first.

export const AREA_PREFIX = 'website-development-'
export const areaPath = (slug: string) => `/${AREA_PREFIX}${slug}`

const U = '2026-10-18'

export const areas: Area[] = [
  // ───────────────────────────── ROHINI (primary) ─────────────────────────────
  {
    slug: 'rohini',
    name: 'Rohini',
    region: 'North West Delhi',
    kind: 'primary',
    status: 'ready',
    metaTitle: 'Website Development Company in Rohini, Delhi | Proshala',
    metaDescription:
      'Proshala is a Rohini-based website development company: fast business websites, e-commerce, WordPress and AI automation. Meet us locally.',
    h1: 'Website Development Company in Rohini, Delhi',
    primaryKeyword: 'website development company in Rohini',
    secondaryKeywords: [
      'website designer in Rohini',
      'web development company Rohini Delhi',
      'e-commerce website development Rohini',
      'WordPress developer Rohini',
      'website development company near me',
    ],
    intro:
      'Proshala is a website development company based in Rohini, Delhi. We build fast business websites, online stores, WordPress sites and web apps for Rohini clinics, coaching institutes, retailers and service firms — and add WhatsApp and AI automation so enquiries are answered in seconds. You can meet the team in person, in Rohini.',
    businessMix:
      'Rohini is one of the largest planned residential sub-cities in Asia, and its economy reflects that: neighbourhood clinics and diagnostic labs, coaching centres for school, CA and competitive exams, schools, property dealers, boutiques, gyms and restaurants clustered around the District Centre in Sector 10. Most of these businesses serve customers within a few kilometres, which makes local search — and a website that converts phone visitors — the main growth lever. Rohini also sits next to the Bawana, Narela and Mangolpuri industrial belts, so many B2B manufacturers and traders run their offices from here.',
    landmarks: ['District Centre, Sector 10', 'Japanese Park', 'DC Chowk, Sector 9', 'Rohini West & Rohini East metro (Red Line)', 'Rithala metro', 'Rohini Courts, Sector 14'],
    neighbourhoods: ['Sector 3', 'Sector 7', 'Sector 8', 'Sector 9', 'Sector 11', 'Sector 13', 'Sector 15', 'Sector 16', 'Sector 24', 'Avantika', 'Budh Vihar', 'Vijay Vihar', 'Begumpur', 'Rithala'],
    // TODO: once the address is in content/site.ts, name the exact sector here.
    travel:
      'Our office is in Rohini, so for any business in Rohini we can meet at your shop, clinic or office within a short drive — usually the same or next working day. Most projects then run on WhatsApp and short video calls, with in-person reviews at key milestones.',
    sections: [
      {
        h2: 'Why do Rohini businesses need a local website, not just an Instagram page?',
        body:
          'People in Rohini search with their sector in mind — “dentist in Sector 7 Rohini”, “maths tuition Rohini Sector 11”, “boutique near Rohini West metro”. Google answers these searches with the Map Pack and with websites that clearly mention the area, services and timings. An Instagram page cannot rank for those searches, and a slow template site often loses the visitor before the phone number loads. We build sites with a page for each core service, your sector and landmark in the content, LocalBusiness schema and a direct link to your Google Business Profile, so you show up where Rohini customers are looking.',
      },
      {
        h2: 'What do we usually build for Rohini businesses?',
        body:
          'For clinics: doctor profiles, treatment pages and online booking with WhatsApp reminders. For coaching institutes: course and batch pages, admission landing pages and instant enquiry replies during admission season. For retailers and boutiques: catalogue sites or Shopify stores with UPI and COD. For CA firms, lawyers and consultants: credible service websites with appointment booking. For manufacturers and traders with offices in Rohini: B2B catalogues and IndiaMART lead automation.',
      },
      {
        h2: 'How much does a website cost in Rohini?',
        body:
          'Pricing in Rohini is the same as anywhere we work: it depends on the number of pages, whether we write the content, and features like booking, payments or a portal. A small business site is the most affordable starting point; e-commerce and custom apps cost more because of integrations. We give a fixed, written quote with a page list after a short call or a visit — see the pricing page for starting packages.',
      },
    ],
    industries: ['clinics', 'schools-coaching-institutes', 'retail', 'real-estate', 'restaurants', 'manufacturing'],
    services: ['business-website-development', 'ecommerce-website-development', 'wordpress-development', 'whatsapp-automation', 'ai-chatbots', 'google-ads'],
    localProject: 'TODO: Add a real Rohini project (client name with permission, what we built, link).',
    faqs: [
      { q: 'Is Proshala actually based in Rohini?', a: 'Yes. Our office is in Rohini, North West Delhi, and we are happy to meet Rohini clients at their premises or at our office during working hours, Monday to Saturday, 10 AM to 7 PM.' },
      { q: 'Who is the best website designer in Rohini?', a: 'The right developer for you is one who shows live sites they have built, explains what is included in the price, gives you ownership of the domain and code, and can be reached after launch. Ask any company in Rohini — including us — for those four things before you decide.' },
      { q: 'Can you build an e-commerce website for my shop in Rohini?', a: 'Yes. We build Shopify, WooCommerce and custom stores with UPI, cards and cash on delivery, delivery integration and WhatsApp order updates. For local shops we can also set up same-day delivery zones by PIN code, such as 110085 and 110089.' },
      { q: 'Do you build WordPress websites in Rohini?', a: 'Yes. We build custom WordPress themes without heavy page builders, so sites stay fast and easy to edit. We also fix and speed up existing WordPress sites.' },
      { q: 'How long does it take to build a website for a Rohini business?', a: 'Most business websites take 2–4 weeks from the first meeting to launch. Being local helps: content reviews and photo shoots at your premises can happen quickly.' },
      { q: 'Can you help my clinic or coaching centre rank in Rohini searches?', a: 'We build the website with local SEO foundations — area-specific pages, schema, fast loading and correct Google Business Profile links — and guide you on reviews and profile posts. Ranking also depends on your reviews and competition in your sector.' },
      { q: 'Do you offer AI automation for small businesses in Rohini?', a: 'Yes. The most common setups for Rohini businesses are instant WhatsApp replies to new enquiries, appointment reminders, fee or payment reminders and a website chatbot that answers timings and fees.' },
      { q: 'Do you also serve Pitampura, Prashant Vihar and nearby areas?', a: 'Yes. We regularly work with businesses in Pitampura, Netaji Subhash Place, Shalimar Bagh, Prashant Vihar, Ashok Vihar and across North West Delhi.' },
    ],
    nearby: ['pitampura', 'netaji-subhash-place', 'shalimar-bagh', 'delhi'],
    geo: { lat: 28.733, lng: 77.117 },
    updated: U,
  },

  // ───────────────────────────── PITAMPURA ─────────────────────────────
  {
    slug: 'pitampura',
    name: 'Pitampura',
    region: 'North West Delhi',
    kind: 'north-west',
    status: 'ready',
    metaTitle: 'Website Designer in Pitampura, Delhi | Proshala',
    metaDescription:
      'Website design for Pitampura businesses — coaching institutes, clinics, CA firms and shops. Fast, mobile-first sites from a team next door in Rohini.',
    h1: 'Website Designer in Pitampura, Delhi',
    primaryKeyword: 'website designer in Pitampura',
    secondaryKeywords: ['web development company Pitampura', 'website development Pitampura Delhi', 'website design North West Delhi'],
    intro:
      'We design and build websites for Pitampura businesses from our base next door in Rohini. Coaching institutes, clinics, CA firms, boutiques and banquet halls around Pitampura get fast, mobile-first sites that rank for local searches, plus WhatsApp automation so every enquiry gets a reply within seconds.',
    businessMix:
      'Pitampura mixes dense residential blocks with busy commercial strips around Madhuban Chowk, Kohat Enclave and the TV Tower area. It has a high concentration of coaching institutes, tuition centres and test-prep academies, along with clinics, CA and tax practices, wedding and banquet businesses, boutiques and restaurants that draw customers from across North Delhi.',
    landmarks: ['Pitampura TV Tower', 'Dilli Haat, Pitampura', 'Madhuban Chowk', 'Pitampura & Kohat Enclave metro (Red Line)', 'Netaji Subhash Place (adjacent)'],
    neighbourhoods: ['Kohat Enclave', 'Saraswati Vihar', 'Rani Bagh', 'Maurya Enclave', 'Sainik Vihar', 'Tarun Enclave', 'Kapil Vihar', 'Vaishali Enclave'],
    travel:
      'Pitampura is next door to Rohini — a short drive or two Red Line stops — so we can meet in person for the kickoff and design reviews, and run the rest on WhatsApp and video calls.',
    sections: [
      {
        h2: 'Websites for coaching institutes in Pitampura',
        body:
          'Pitampura’s coaching centres compete hard during admission season, and parents compare institutes on their phones. We build institute websites with clear course, batch and fee pages, results with permission, faculty profiles and fast admission landing pages for ads. Enquiries trigger an instant WhatsApp reply and are assigned to a counsellor, so no lead waits until the next day.',
      },
      {
        h2: 'Clinics, CA firms and professional services',
        body:
          'For doctors, dentists, physiotherapists and CA practices around Kohat Enclave and Madhuban Chowk, the website’s job is trust and convenience: who you are, what you handle, timings, location and a one-tap way to book or call. We keep these sites simple, fast and connected to Google Business Profile so they show up for “near me” searches.',
      },
    ],
    industries: ['schools-coaching-institutes', 'clinics', 'retail', 'restaurants'],
    services: ['business-website-development', 'landing-pages', 'whatsapp-automation', 'crm-automation'],
    localProject: 'TODO: Add a real Pitampura project.',
    faqs: [
      { q: 'Do you have an office in Pitampura?', a: 'Our office is in neighbouring Rohini. Pitampura is a short drive away, so we meet Pitampura clients in person whenever it helps.' },
      { q: 'Can you build an admission website for my Pitampura coaching centre?', a: 'Yes — course and batch pages, fee structure, results, and admission landing pages with instant WhatsApp replies and counsellor assignment.' },
      { q: 'How much does a website cost in Pitampura?', a: 'It depends on pages, content and features. We give a fixed written quote after a short call or visit; the pricing page lists starting packages.' },
      { q: 'Can you redesign my existing website without losing Google rankings?', a: 'Yes. We map old URLs to new ones with 301 redirects, keep ranking content and monitor Search Console after launch.' },
    ],
    nearby: ['rohini', 'netaji-subhash-place', 'shalimar-bagh', 'delhi'],
    geo: { lat: 28.7005, lng: 77.1316 },
    updated: U,
  },

  // ───────────────────────────── NETAJI SUBHASH PLACE ─────────────────────────────
  {
    slug: 'netaji-subhash-place',
    name: 'Netaji Subhash Place',
    region: 'North West Delhi',
    kind: 'north-west',
    status: 'ready',
    metaTitle: 'Web Development Company in Netaji Subhash Place | Proshala',
    metaDescription:
      'Web development and AI automation for firms in Netaji Subhash Place (NSP), Delhi — corporate websites, web apps, CRMs and lead automation.',
    h1: 'Web Development Company in Netaji Subhash Place (NSP)',
    primaryKeyword: 'web development company Netaji Subhash Place',
    secondaryKeywords: ['website development NSP Delhi', 'website designer Netaji Subhash Place', 'IT company NSP Pitampura'],
    intro:
      'Netaji Subhash Place is North Delhi’s office district, and the companies here need more than a brochure site. We build corporate websites, client portals, CRMs and AI automations for firms in NSP — CA and law practices, IT and consulting companies, brokers and B2B traders — from our team a few minutes away in Rohini.',
    businessMix:
      'NSP is built around a District Centre of commercial towers and the Red and Pink Line metro interchange. It houses CA and law firms, insurance and financial advisers, IT services companies, startups, recruitment firms and the corporate offices of manufacturers from Wazirpur Industrial Area next door — a business mix where B2B lead flow and client service matter more than walk-in traffic.',
    landmarks: ['Netaji Subhash Place metro (Red & Pink Line interchange)', 'NSP District Centre office towers', 'Wazirpur Industrial Area', 'Ring Road'],
    neighbourhoods: ['NSP District Centre', 'Wazirpur', 'Shakurpur', 'Tri Nagar', 'Pitampura (Kohat Enclave side)'],
    travel:
      'NSP is a short drive from our Rohini office, which makes in-person workshops easy for scoping web apps and automations, where seeing how your team actually works matters.',
    sections: [
      {
        h2: 'Corporate websites that win B2B trust',
        body:
          'For an NSP firm, the website is checked before every serious meeting. We build fast, credible corporate sites with clear service pages, team and credentials, case studies, and enquiry forms that route to the right partner — not a generic info@ inbox.',
      },
      {
        h2: 'Client portals, CRMs and automation for professional firms',
        body:
          'CA practices, legal firms and consultants in NSP spend a lot of time collecting documents, sending reminders and answering status questions. We build client portals for document upload and status tracking, CRM pipelines for new business, and AI tools that extract data from documents or draft first-pass summaries for review.',
      },
    ],
    industries: ['manufacturing', 'retail', 'real-estate'],
    services: ['custom-web-applications', 'crm-automation', 'custom-ai-integrations', 'business-website-development'],
    localProject: 'TODO: Add a real NSP project.',
    faqs: [
      { q: 'Do you build web apps and client portals for firms in NSP?', a: 'Yes. Client portals for document collection and status tracking, internal CRMs and dashboards are some of the most useful things we build for professional firms.' },
      { q: 'Can AI help a CA or legal firm?', a: 'Yes, carefully. Common uses are extracting data from invoices and statements, summarising documents for review and answering routine client questions from approved information — always with a professional reviewing outputs.' },
      { q: 'Can you integrate with Tally?', a: 'In most setups, yes, via Tally’s XML interface or connectors. We check your version and setup before quoting.' },
      { q: 'Do you work with manufacturers in Wazirpur?', a: 'Yes. We build B2B catalogues, dealer portals and IndiaMART lead automation for manufacturers and traders.' },
    ],
    nearby: ['pitampura', 'rohini', 'shalimar-bagh', 'delhi'],
    geo: { lat: 28.6955, lng: 77.1525 },
    updated: U,
  },

  // ───────────────────────────── SHALIMAR BAGH ─────────────────────────────
  {
    slug: 'shalimar-bagh',
    name: 'Shalimar Bagh',
    region: 'North West Delhi',
    kind: 'north-west',
    status: 'ready',
    metaTitle: 'Website Development in Shalimar Bagh, Delhi | Proshala',
    metaDescription:
      'Websites, online booking and WhatsApp automation for Shalimar Bagh clinics, diagnostics and traders — built by a team based in nearby Rohini.',
    h1: 'Website Development in Shalimar Bagh, Delhi',
    primaryKeyword: 'website development Shalimar Bagh',
    secondaryKeywords: ['website designer Shalimar Bagh', 'clinic website Shalimar Bagh', 'web design North West Delhi'],
    intro:
      'We build websites and automation for Shalimar Bagh businesses — especially the clinics, diagnostic labs and pharmacies that have grown around the area’s large hospitals, and the traders connected to Azadpur Mandi. Sites are fast, mobile-first and built for local searches, with online booking and WhatsApp replies where they help.',
    businessMix:
      'Shalimar Bagh is a well-established residential area with a strong healthcare cluster: two large multi-speciality hospitals, plus specialist clinics, diagnostic centres, physiotherapy and pharmacies serving patients from across North Delhi. Next door, Azadpur Mandi and the wholesale trade around it give the area many trading and logistics businesses as well.',
    landmarks: ['Max Super Speciality Hospital, Shalimar Bagh', 'Fortis Hospital, Shalimar Bagh', 'Shalimar Bagh Mughal garden', 'Shalimar Bagh metro (Pink Line)', 'Azadpur Mandi'],
    neighbourhoods: ['Shalimar Bagh AC/BL/BN blocks', 'Haiderpur', 'Shalimar Village', 'Azadpur', 'Wazirpur (nearby)'],
    travel:
      'Shalimar Bagh is a short drive from Rohini via Outer Ring Road, so in-person visits for photos, content and reviews are easy to arrange.',
    sections: [
      {
        h2: 'Websites and booking for clinics and diagnostics',
        body:
          'Patients referred to Shalimar Bagh’s specialists often search the doctor or the test before they call. We build clinic and diagnostics websites with doctor profiles, test and package pages, home-collection booking and WhatsApp report-ready alerts — within NMC and ad-platform healthcare rules.',
      },
      {
        h2: 'Simple systems for traders and wholesalers',
        body:
          'For trading businesses linked to Azadpur and nearby markets, the need is usually practical: a catalogue site for buyers, WhatsApp order intake, and a small dashboard or Google Sheet automation for orders, dispatch and payment reminders.',
      },
    ],
    industries: ['clinics', 'retail', 'manufacturing'],
    services: ['business-website-development', 'whatsapp-automation', 'ai-chatbots', 'custom-web-applications'],
    localProject: 'TODO: Add a real Shalimar Bagh project.',
    faqs: [
      { q: 'Can you build a website with online booking for my clinic in Shalimar Bagh?', a: 'Yes — doctor profiles, treatment pages, online booking and WhatsApp reminders, written within NMC guidelines.' },
      { q: 'Can a diagnostic lab send reports on WhatsApp automatically?', a: 'Yes. When a report is ready in your system, the patient can get a WhatsApp alert with a secure link, if your lab software allows integration.' },
      { q: 'Do you build order systems for wholesale traders?', a: 'Yes. Typical setups are WhatsApp order intake, a simple order dashboard and automated payment reminders.' },
      { q: 'Are you close to Shalimar Bagh?', a: 'Yes. We are based in Rohini, a short drive away, and meet Shalimar Bagh clients in person.' },
    ],
    nearby: ['rohini', 'pitampura', 'netaji-subhash-place', 'delhi'],
    geo: { lat: 28.7165, lng: 77.1626 },
    updated: U,
  },

  // ───────────────────────────── DELHI (city) ─────────────────────────────
  {
    slug: 'delhi',
    name: 'Delhi',
    region: 'Delhi',
    kind: 'city',
    status: 'ready',
    metaTitle: 'Website Design Company in Delhi | Proshala',
    metaDescription:
      'Website design and development company in Delhi, based in Rohini. Business websites, e-commerce, web apps and AI automation across Delhi.',
    h1: 'Website Design & Development Company in Delhi',
    primaryKeyword: 'website design company in Delhi',
    secondaryKeywords: ['website development company Delhi', 'website design company in North West Delhi', 'web development company Delhi'],
    intro:
      'Proshala is a website design and development company in Delhi, based in Rohini in North West Delhi. We build business websites, e-commerce stores, web apps and AI automations for Delhi companies in every zone — meeting in person across North and West Delhi, and working over video calls everywhere else.',
    businessMix:
      'Delhi’s business landscape changes zone by zone: retail and wholesale markets in Chandni Chowk, Karol Bagh and Lajpat Nagar; offices in Connaught Place, Nehru Place and Netaji Subhash Place; industrial areas in Okhla, Naraina, Mayapuri, Bawana and Narela; and dense residential districts like Rohini, Dwarka and Janakpuri full of clinics, schools and local services. Each needs a different kind of website and lead flow.',
    landmarks: ['Connaught Place', 'Nehru Place', 'Karol Bagh', 'Okhla Industrial Area', 'Netaji Subhash Place', 'Rohini District Centre'],
    neighbourhoods: ['Rohini', 'Pitampura', 'Netaji Subhash Place', 'Shalimar Bagh', 'Punjabi Bagh', 'Paschim Vihar', 'Janakpuri', 'Dwarka', 'Karol Bagh', 'Lajpat Nagar', 'Saket', 'Laxmi Nagar'],
    travel:
      'For North and West Delhi we meet in person. For South, East and Central Delhi we usually kick off in person and run the project on video calls and preview links.',
    sections: [
      {
        h2: 'How much does a website cost in Delhi?',
        body:
          'Website prices in Delhi range widely because “website” covers everything from a 5-page brochure to a custom web app. What matters is what is included: design, content, SEO setup, integrations, hosting and support. We publish starting packages on our pricing page and give fixed written quotes so you can compare like for like.',
      },
      {
        h2: 'Websites built for how Delhi customers buy',
        body:
          'Delhi buyers compare quickly, call or WhatsApp rather than email, and often search in Hinglish. We design for that: tap-to-call and WhatsApp buttons everywhere, fast pages on mobile data, clear prices or “starting from” information, and content that uses the words your customers actually type.',
      },
    ],
    industries: ['clinics', 'schools-coaching-institutes', 'real-estate', 'restaurants', 'retail', 'manufacturing'],
    services: ['business-website-development', 'ecommerce-website-development', 'custom-web-applications', 'ai-agents'],
    localProject: 'TODO: Add a real Delhi project.',
    faqs: [
      { q: 'Where is your office in Delhi?', a: 'We are based in Rohini, North West Delhi. We meet clients in person across North and West Delhi and work remotely with businesses across the city and India.' },
      { q: 'How do I choose a website development company in Delhi?', a: 'Look at live sites they built, ask what exactly is included, insist on owning your domain and code, check how they handle SEO and speed, and confirm post-launch support. Our blog has a full checklist.' },
      { q: 'Do you build websites in Hindi?', a: 'Yes. We can build bilingual Hindi–English sites with proper language tags so each version ranks for the right searches.' },
      { q: 'Can you work with my business in South or East Delhi?', a: 'Yes. Most of the project runs on calls and shared previews; we meet in person when needed.' },
    ],
    nearby: ['rohini', 'pitampura', 'gurgaon', 'noida'],
    geo: { lat: 28.6139, lng: 77.209 },
    updated: U,
  },

  // ───────────────────────────── NCR ─────────────────────────────
  {
    slug: 'gurgaon',
    name: 'Gurgaon',
    region: 'Haryana',
    kind: 'ncr',
    status: 'ready',
    metaTitle: 'Website & Web App Development in Gurgaon | Proshala',
    metaDescription:
      'Next.js websites, web apps and AI automation for Gurgaon (Gurugram) startups, SaaS companies and B2B firms — engineering-first, fast and built to scale.',
    h1: 'Website & Web App Development in Gurgaon (Gurugram)',
    primaryKeyword: 'website development company Gurgaon',
    secondaryKeywords: ['web development company Gurugram', 'Next.js developer Gurgaon', 'AI automation Gurgaon'],
    intro:
      'Gurgaon’s startups and corporate teams expect product-grade websites, not templates. We build Next.js marketing sites, SaaS front-ends, internal dashboards and AI automations for Gurugram companies — with performance budgets, clean TypeScript and integrations into the tools your team already uses.',
    businessMix:
      'Gurugram combines funded startups and SaaS companies around Cyber City and Golf Course Road, corporate and IT offices in Udyog Vihar, premium consumer businesses along Sohna Road and the new sectors, and manufacturing and auto suppliers in IMT Manesar.',
    landmarks: ['DLF Cyber City', 'Golf Course Road', 'Udyog Vihar', 'Sohna Road', 'IMT Manesar'],
    neighbourhoods: ['Cyber City', 'Golf Course Extension', 'Sushant Lok', 'Sector 29', 'Sector 56', 'New Gurgaon (Sectors 82–95)', 'Palam Vihar'],
    travel: 'Gurgaon projects run mostly remotely with scheduled in-person workshops for discovery and major reviews.',
    sections: [
      {
        h2: 'Startup and SaaS websites',
        body:
          'For startups, the marketing site and the product often share a design system and deployment pipeline. We build both on Next.js with a headless CMS for the marketing team, analytics wired into the product, and Core Web Vitals checked on every release.',
      },
      {
        h2: 'Internal tools and AI agents for operations teams',
        body:
          'Ops-heavy Gurugram companies use us to replace spreadsheet workflows with internal dashboards, and to add AI agents for lead qualification, support triage and document processing — with logging and human approval built in.',
      },
    ],
    industries: ['real-estate', 'manufacturing', 'retail'],
    services: ['nextjs-development', 'custom-web-applications', 'ai-agents', 'custom-ai-integrations'],
    faqs: [
      { q: 'Do you work with startups in Gurgaon?', a: 'Yes. We build marketing sites, MVP web apps and AI features for startups, working in short sprints with preview links.' },
      { q: 'Can you work alongside our in-house engineering team?', a: 'Yes. We follow your Git workflow, code standards and review process, and can own a defined part of the product.' },
      { q: 'Do you build AI agents for B2B companies?', a: 'Yes — lead qualification, support triage and internal ops agents connected to your CRM and tools.' },
      { q: 'Do you meet in Gurgaon?', a: 'For discovery and key reviews, yes. Day-to-day work runs on calls, Slack or WhatsApp and preview links.' },
    ],
    nearby: ['delhi', 'faridabad', 'noida', 'bahadurgarh'],
    geo: { lat: 28.4595, lng: 77.0266 },
    updated: U,
  },
  {
    slug: 'noida',
    name: 'Noida',
    region: 'Uttar Pradesh',
    kind: 'ncr',
    status: 'ready',
    metaTitle: 'Website Development Company in Noida | Proshala',
    metaDescription:
      'Websites, e-commerce and AI automation for Noida businesses — IT firms in Sectors 62–63, retailers around Sector 18 and exporters in Phase 2.',
    h1: 'Website Development Company in Noida',
    primaryKeyword: 'website development company in Noida',
    secondaryKeywords: ['web design company Noida', 'e-commerce website Noida', 'web app development Noida'],
    intro:
      'We build websites, online stores, web apps and automations for Noida businesses — from IT and services companies in Sectors 62 and 63 to retailers around Sector 18 and exporters in the Phase 2 industrial area. Projects run on video calls and preview links, with in-person meetings when they add value.',
    businessMix:
      'Noida has a large IT and services corridor around Sectors 62, 63 and 125–135, a retail and entertainment hub at Sector 18, media around Film City in Sector 16A, and garment and electronics exporters in Phase 1 and Phase 2. Its residential sectors also support a dense network of schools, clinics and local services.',
    landmarks: ['Sector 18 market', 'Sector 62/63 IT hub', 'Film City, Sector 16A', 'Noida Phase 2 industrial area', 'Noida Expressway'],
    neighbourhoods: ['Sector 18', 'Sector 62', 'Sector 63', 'Sector 50', 'Sector 76', 'Sector 125', 'Sector 137', 'Noida Extension (border)'],
    travel: 'Noida projects run remotely with in-person kickoffs for larger builds.',
    sections: [
      {
        h2: 'Export and manufacturing websites',
        body:
          'Phase 2 exporters sell to buyers who never visit. We build international-ready B2B catalogues with specifications, certifications and RFQ forms, plus enquiry automation that routes leads by product and country.',
      },
      {
        h2: 'Websites and portals for schools and clinics',
        body:
          'Noida’s residential sectors are full of schools, coaching centres and clinics. We build sites with clear admission or booking flows, and parent or patient communication on WhatsApp.',
      },
    ],
    industries: ['manufacturing', 'schools-coaching-institutes', 'clinics', 'retail'],
    services: ['business-website-development', 'ecommerce-website-development', 'crm-automation', 'custom-web-applications'],
    faqs: [
      { q: 'Do you build export websites for Noida manufacturers?', a: 'Yes — B2B catalogues with specs, certifications, RFQ forms and enquiry routing by product and region.' },
      { q: 'Can you work with my Noida business remotely?', a: 'Yes. Most of our process runs on calls, WhatsApp and preview links; we meet in person for larger projects.' },
      { q: 'Do you build school or coaching websites in Noida?', a: 'Yes, including admission landing pages, enquiry automation and student portals.' },
      { q: 'What happened to your old Noida digital marketing page?', a: 'We have refocused on building websites, apps and AI automation, with Google and Meta ads as supporting services. The old page now points here.' },
    ],
    nearby: ['greater-noida', 'ghaziabad', 'delhi', 'faridabad'],
    geo: { lat: 28.5355, lng: 77.391 },
    updated: U,
  },
  {
    slug: 'greater-noida',
    name: 'Greater Noida',
    region: 'Uttar Pradesh',
    kind: 'ncr',
    status: 'ready',
    metaTitle: 'Website Development in Greater Noida | Proshala',
    metaDescription:
      'Websites and automation for Greater Noida: Knowledge Park institutes, Greater Noida West real estate and Yamuna Expressway industrial units.',
    h1: 'Website Development in Greater Noida',
    primaryKeyword: 'website development Greater Noida',
    secondaryKeywords: ['website designer Greater Noida West', 'college website development', 'real estate website Greater Noida'],
    intro:
      'Greater Noida is home to dozens of colleges in Knowledge Park, large residential societies in Greater Noida West and industrial units along the Yamuna Expressway. We build websites, admission and enquiry systems, and automations for institutes, real estate businesses and manufacturers across the area.',
    businessMix:
      'Greater Noida’s Knowledge Park hosts many engineering, management and professional colleges; Greater Noida West (Noida Extension) has large residential societies and the local businesses that serve them; and the industrial sectors and Yamuna Expressway corridor host manufacturing and logistics.',
    landmarks: ['Knowledge Park', 'Pari Chowk', 'Greater Noida West (Gaur City)', 'Yamuna Expressway', 'India Expo Centre & Mart'],
    neighbourhoods: ['Knowledge Park I–V', 'Alpha & Beta sectors', 'Greater Noida West', 'Techzone', 'Ecotech industrial sectors'],
    travel: 'Greater Noida projects are run remotely with in-person meetings for kickoffs and key reviews.',
    sections: [
      {
        h2: 'Admission systems for colleges and institutes',
        body:
          'Colleges in Knowledge Park compete for students across India. We build programme pages that answer fees, eligibility and placement questions clearly, admission landing pages for ads, and a CRM that tracks every applicant from enquiry to enrolment.',
      },
      {
        h2: 'Local businesses in Greater Noida West',
        body:
          'Large societies create demand for clinics, tuition, salons, food and home services. These businesses need simple, fast websites with WhatsApp ordering or booking, aimed at the specific societies they serve.',
      },
    ],
    industries: ['schools-coaching-institutes', 'real-estate', 'manufacturing', 'restaurants'],
    services: ['landing-pages', 'crm-automation', 'business-website-development', 'whatsapp-automation'],
    faqs: [
      { q: 'Do you build websites for colleges in Knowledge Park?', a: 'Yes — programme pages, admission landing pages and applicant CRMs with WhatsApp follow-up.' },
      { q: 'Can you build a website for a business serving Greater Noida West societies?', a: 'Yes. Simple, fast sites with WhatsApp booking or ordering work well for society-focused businesses.' },
      { q: 'Do you build real estate project websites?', a: 'Yes, with floor plans, pricing, RERA details and site-visit booking.' },
      { q: 'Is the project handled remotely?', a: 'Mostly, yes, with in-person meetings when they help.' },
    ],
    nearby: ['noida', 'ghaziabad', 'delhi', 'faridabad'],
    geo: { lat: 28.4744, lng: 77.504 },
    updated: U,
  },
  {
    slug: 'ghaziabad',
    name: 'Ghaziabad',
    region: 'Uttar Pradesh',
    kind: 'ncr',
    status: 'ready',
    metaTitle: 'Website Development Company in Ghaziabad | Proshala',
    metaDescription:
      'Websites, e-commerce and automation for Ghaziabad — Indirapuram and Vaishali retail, Raj Nagar Extension services and Sahibabad industry.',
    h1: 'Website Development Company in Ghaziabad',
    primaryKeyword: 'website development company Ghaziabad',
    secondaryKeywords: ['website designer Ghaziabad', 'web design Indirapuram', 'e-commerce website Ghaziabad'],
    intro:
      'We build websites, online stores and automations for Ghaziabad businesses — retailers and clinics in Indirapuram, Vaishali and Kaushambi, service businesses in Raj Nagar Extension, and manufacturers in Sahibabad and Meerut Road industrial areas. Built mobile-first and set up to capture enquiries on WhatsApp.',
    businessMix:
      'Ghaziabad has dense residential and retail hubs in Indirapuram, Vaishali and Kaushambi, fast-growing Raj Nagar Extension, and long-established industrial areas in Sahibabad, Loni and along Meerut Road, many of them B2B suppliers to Delhi and beyond.',
    landmarks: ['Indirapuram', 'Vaishali & Kaushambi', 'Raj Nagar Extension', 'Sahibabad Industrial Area', 'Meerut Road industrial area'],
    neighbourhoods: ['Indirapuram', 'Vaishali', 'Kaushambi', 'Vasundhara', 'Raj Nagar', 'Raj Nagar Extension', 'Crossings Republik'],
    travel: 'Ghaziabad projects run remotely, with in-person meetings when needed.',
    sections: [
      {
        h2: 'Retail and local service websites',
        body:
          'For shops, clinics and services in Indirapuram and Vaishali, we build fast websites and Shopify stores with WhatsApp ordering and local delivery zones by PIN code.',
      },
      {
        h2: 'B2B sites for Sahibabad manufacturers',
        body:
          'Sahibabad and Meerut Road manufacturers need credible catalogues and enquiry systems. We build product catalogues with downloadable specs and connect IndiaMART and website enquiries to a CRM.',
      },
    ],
    industries: ['retail', 'manufacturing', 'clinics', 'real-estate'],
    services: ['business-website-development', 'ecommerce-website-development', 'crm-automation', 'whatsapp-automation'],
    faqs: [
      { q: 'Do you build e-commerce stores for Ghaziabad shops?', a: 'Yes — Shopify or WooCommerce with UPI, COD and local delivery options.' },
      { q: 'Can IndiaMART leads for my Sahibabad factory go to a CRM?', a: 'Yes, through the IndiaMART lead API, with automatic acknowledgement and assignment.' },
      { q: 'Do you serve Raj Nagar Extension?', a: 'Yes, along with Indirapuram, Vaishali, Kaushambi and the rest of Ghaziabad.' },
      { q: 'Do you meet in person in Ghaziabad?', a: 'When it helps, yes; most work runs remotely.' },
    ],
    nearby: ['noida', 'greater-noida', 'delhi', 'faridabad'],
    geo: { lat: 28.6692, lng: 77.4538 },
    updated: U,
  },
  {
    slug: 'faridabad',
    name: 'Faridabad',
    region: 'Haryana',
    kind: 'ncr',
    status: 'ready',
    metaTitle: 'Website Development Company in Faridabad | Proshala',
    metaDescription:
      'B2B websites, dealer portals and automation for Faridabad manufacturers, plus sites for clinics, schools and retailers in NIT and Sector 15.',
    h1: 'Website Development Company in Faridabad',
    primaryKeyword: 'website development company Faridabad',
    secondaryKeywords: ['website designer Faridabad', 'manufacturer website Faridabad', 'web development Faridabad'],
    intro:
      'Faridabad is one of North India’s biggest manufacturing bases, and most of its factories still sell through phone calls and portals. We build B2B websites, product catalogues, dealer portals and enquiry automation for Faridabad manufacturers, as well as fast websites for the city’s clinics, schools and retailers.',
    businessMix:
      'Faridabad’s industrial sectors and Mathura Road corridor host auto-component, engineering, electrical and fabrication manufacturers, many supplying large OEMs. NIT, Sector 15 and Greater Faridabad support dense retail, healthcare and education.',
    landmarks: ['Mathura Road industrial belt', 'NIT Faridabad', 'Sector 15 market', 'Ballabgarh', 'Greater Faridabad (Neharpar)'],
    neighbourhoods: ['NIT', 'Sector 15', 'Sector 16', 'Sector 21', 'Ballabgarh', 'Greater Faridabad', 'Surajkund'],
    travel: 'Faridabad projects run remotely, with factory visits for B2B scoping when useful.',
    sections: [
      {
        h2: 'Websites and portals for manufacturers',
        body:
          'Procurement teams check supplier websites before shortlisting. We build catalogues with specifications, certifications and RFQ forms, dealer portals for orders and dispatch tracking, and quote follow-up automation.',
      },
      {
        h2: 'Local businesses in NIT and Sector 15',
        body:
          'Clinics, schools and shops in Faridabad’s main markets get fast, mobile-first sites with booking or WhatsApp ordering and correct Google Business Profile links.',
      },
    ],
    industries: ['manufacturing', 'clinics', 'schools-coaching-institutes', 'retail'],
    services: ['business-website-development', 'custom-web-applications', 'crm-automation', 'api-integrations'],
    faqs: [
      { q: 'Do you build dealer portals for Faridabad manufacturers?', a: 'Yes — dealers log in to see pricing, place orders and track dispatch.' },
      { q: 'Can you connect our website enquiries to Tally or a CRM?', a: 'Usually yes; we confirm the integration path after seeing your setup.' },
      { q: 'Do you visit factories in Faridabad?', a: 'For B2B scoping, yes — seeing the process helps us design the right system.' },
      { q: 'Do you build websites for local shops and clinics too?', a: 'Yes, fast mobile-first sites with booking or WhatsApp ordering.' },
    ],
    nearby: ['delhi', 'gurgaon', 'noida', 'greater-noida'],
    geo: { lat: 28.4089, lng: 77.3178 },
    updated: U,
  },
  {
    slug: 'sonipat',
    name: 'Sonipat',
    region: 'Haryana',
    kind: 'ncr',
    status: 'ready',
    metaTitle: 'Website Development in Sonipat, Haryana | Proshala',
    metaDescription:
      'Websites and automation for Sonipat businesses — Kundli industrial units, education institutions, Murthal food businesses and real estate along NH-44.',
    h1: 'Website Development in Sonipat',
    primaryKeyword: 'website development Sonipat',
    secondaryKeywords: ['website designer Sonipat', 'web design Kundli', 'website development company Haryana'],
    intro:
      'Sonipat sits just north of our Rohini base along NH-44, close enough for in-person visits. We build websites and automations for Kundli and Rai industrial units, the area’s universities and schools, Murthal’s food businesses and real estate projects along the highway.',
    businessMix:
      'Sonipat’s economy spans industrial estates in Kundli and Rai, a growing education hub with several private universities, the famous highway dhabas of Murthal, and residential and real estate development along NH-44 and the KMP Expressway.',
    landmarks: ['Kundli Industrial Area', 'Rai Industrial Area', 'Murthal', 'NH-44 (GT Road)', 'Rajiv Gandhi Education City'],
    neighbourhoods: ['Kundli', 'Rai', 'Murthal', 'Sonipat city', 'Gannaur', 'Ganaur road'],
    travel: 'Sonipat is reachable from Rohini via NH-44, so in-person meetings are practical for most projects.',
    sections: [
      {
        h2: 'B2B websites for Kundli and Rai industrial units',
        body:
          'Manufacturers in Kundli and Rai need catalogues and enquiry systems that look as solid as their factories. We build them with specs, RFQ forms and IndiaMART lead automation.',
      },
      {
        h2: 'Restaurants, education and real estate',
        body:
          'Murthal’s food businesses benefit from fast menu sites and Google Maps visibility; schools and institutes need admission flows; highway real estate projects need microsites with site-visit booking.',
      },
    ],
    industries: ['manufacturing', 'restaurants', 'schools-coaching-institutes', 'real-estate'],
    services: ['business-website-development', 'crm-automation', 'landing-pages', 'whatsapp-automation'],
    faqs: [
      { q: 'Do you visit clients in Sonipat?', a: 'Yes. Sonipat is a practical drive from our Rohini office for kickoffs and reviews.' },
      { q: 'Can you build a website for a Murthal restaurant or dhaba?', a: 'Yes — fast menu pages, location, timings, reservations or direct ordering, and correct Google Maps links.' },
      { q: 'Do you build sites for Kundli manufacturers?', a: 'Yes, B2B catalogues with RFQ forms and lead automation.' },
      { q: 'What happened to the Sonipat digital marketing page?', a: 'We now focus on websites, apps and AI automation, with ads as a supporting service; the old page points here.' },
    ],
    nearby: ['rohini', 'panipat', 'bahadurgarh', 'delhi'],
    geo: { lat: 28.9931, lng: 77.0151 },
    updated: U,
  },
  {
    slug: 'panipat',
    name: 'Panipat',
    region: 'Haryana',
    kind: 'ncr',
    status: 'ready',
    metaTitle: 'Website Development in Panipat for Exporters | Proshala',
    metaDescription:
      'Export-ready websites, product catalogues and enquiry automation for Panipat’s textile and home furnishing manufacturers, plus sites for local businesses.',
    h1: 'Website Development in Panipat',
    primaryKeyword: 'website development Panipat',
    secondaryKeywords: ['textile exporter website', 'home furnishing website Panipat', 'website designer Panipat'],
    intro:
      'Panipat’s textile, rug and home-furnishing manufacturers sell to buyers around the world, and those buyers judge suppliers by their website. We build export-ready catalogues, sampling and RFQ flows, and enquiry automation that routes international leads to the right merchandiser quickly.',
    businessMix:
      'Panipat is a major centre for handloom, home furnishings, blankets, rugs and recycled textiles, with a large export trade, alongside a refinery, an industrial base and the local retail and services that support them.',
    landmarks: ['Panipat textile and handloom cluster', 'Panipat industrial area', 'GT Road (NH-44)', 'Panipat Refinery'],
    neighbourhoods: ['Model Town', 'Sector 25 industrial area', 'Samalkha', 'Barsat Road', 'GT Road'],
    travel: 'Panipat projects run remotely, with factory visits during scoping where helpful.',
    sections: [
      {
        h2: 'Export catalogues that buyers trust',
        body:
          'International buyers want clear product ranges, materials, certifications, MOQs and lead times. We build multilingual-ready catalogues with high-quality product photography layouts and RFQ forms that collect what your team needs to quote.',
      },
      {
        h2: 'Faster responses to export enquiries',
        body:
          'Time zones mean enquiries arrive overnight. Automation acknowledges each one instantly, routes it by product and country, and reminds merchandisers to follow up.',
      },
    ],
    industries: ['manufacturing', 'retail'],
    services: ['business-website-development', 'crm-automation', 'ecommerce-website-development', 'custom-ai-integrations'],
    faqs: [
      { q: 'Can you build a multilingual export website?', a: 'Yes, with proper hreflang tags so each language version reaches the right buyers.' },
      { q: 'Can AI help with product descriptions for large catalogues?', a: 'Yes. AI can draft consistent descriptions and translations from your specs, reviewed by your team.' },
      { q: 'Do you build B2C stores for Panipat brands?', a: 'Yes, on Shopify or WooCommerce, including international shipping and payments where needed.' },
      { q: 'Do you visit Panipat?', a: 'During scoping when it helps; most work runs remotely.' },
    ],
    nearby: ['sonipat', 'rohtak', 'delhi', 'bahadurgarh'],
    geo: { lat: 29.3909, lng: 76.9635 },
    updated: U,
  },
  {
    slug: 'rohtak',
    name: 'Rohtak',
    region: 'Haryana',
    kind: 'ncr',
    status: 'ready',
    metaTitle: 'Website Development in Rohtak, Haryana | Proshala',
    metaDescription:
      'Websites and automation for Rohtak coaching institutes, clinics, IMT Rohtak manufacturers and local businesses — fast, mobile-first and lead-ready.',
    h1: 'Website Development in Rohtak',
    primaryKeyword: 'website development Rohtak',
    secondaryKeywords: ['website designer Rohtak', 'coaching institute website Rohtak', 'web design Haryana'],
    intro:
      'Rohtak is an education and healthcare centre for Haryana, with a growing industrial base at IMT Rohtak. We build websites for coaching institutes, clinics and local businesses in the city, and B2B catalogues and automations for manufacturers and suppliers at IMT.',
    businessMix:
      'Rohtak hosts a large university and a major government medical institute, which drive a big coaching, hostel and healthcare economy. IMT Rohtak brings automotive and engineering suppliers to the area.',
    landmarks: ['Maharshi Dayanand University', 'PGIMS Rohtak', 'IMT Rohtak', 'Delhi Road'],
    neighbourhoods: ['Model Town', 'Sector 1', 'Sector 14', 'Delhi Road', 'IMT Rohtak'],
    travel: 'Rohtak projects run remotely, with in-person meetings for larger builds.',
    sections: [
      {
        h2: 'Coaching institute and student-focused websites',
        body:
          'Rohtak’s coaching centres and PG/hostel businesses compete for students arriving from across Haryana. We build course and batch pages, admission forms and WhatsApp enquiry automation.',
      },
      {
        h2: 'Supplier websites for IMT Rohtak',
        body:
          'Suppliers to large automotive OEMs need professional catalogues, quality certifications and RFQ handling. We build those, plus dealer and order portals where needed.',
      },
    ],
    industries: ['schools-coaching-institutes', 'clinics', 'manufacturing'],
    services: ['business-website-development', 'landing-pages', 'whatsapp-automation', 'custom-web-applications'],
    faqs: [
      { q: 'Do you build coaching institute websites in Rohtak?', a: 'Yes, with course pages, admission forms and automated WhatsApp follow-up.' },
      { q: 'Can you build supplier websites for IMT Rohtak companies?', a: 'Yes, B2B catalogues with certifications and RFQ forms.' },
      { q: 'Do you build clinic websites?', a: 'Yes, with doctor profiles, booking and reminders, following NMC guidelines.' },
      { q: 'Is the project remote?', a: 'Mostly, with in-person meetings when needed.' },
    ],
    nearby: ['bahadurgarh', 'sonipat', 'panipat', 'delhi'],
    geo: { lat: 28.8955, lng: 76.6066 },
    updated: U,
  },
  {
    slug: 'bahadurgarh',
    name: 'Bahadurgarh',
    region: 'Haryana',
    kind: 'ncr',
    status: 'ready',
    metaTitle: 'Website Development in Bahadurgarh | Proshala',
    metaDescription:
      'Websites, B2B catalogues and dealer portals for Bahadurgarh’s footwear and industrial units in MIE, plus sites for local clinics, schools and retailers.',
    h1: 'Website Development in Bahadurgarh',
    primaryKeyword: 'website development Bahadurgarh',
    secondaryKeywords: ['footwear manufacturer website', 'website designer Bahadurgarh', 'B2B website Haryana'],
    intro:
      'Bahadurgarh is a major non-leather footwear manufacturing hub, with a large cluster of units in the Modern Industrial Estate. We build B2B catalogues, distributor portals and order automation for these manufacturers, plus websites for the town’s clinics, schools and shops — a short drive from our Rohini base.',
    businessMix:
      'Bahadurgarh’s economy is driven by footwear and allied manufacturing in the Modern Industrial Estate (MIE) and HSIIDC areas, with logistics along the KMP Expressway and a growing residential population that supports local services.',
    landmarks: ['Modern Industrial Estate (MIE)', 'Bahadurgarh City Park metro (Green Line)', 'KMP Expressway', 'Rohtak Road'],
    neighbourhoods: ['MIE Part A & B', 'HSIIDC Sector 16/17', 'Sector 6', 'Sector 9', 'Line Par'],
    travel: 'Bahadurgarh is close to West Delhi, and we can visit units in MIE in person for scoping.',
    sections: [
      {
        h2: 'Distributor portals for footwear manufacturers',
        body:
          'Footwear brands in MIE sell through distributors and retailers across India. A distributor portal with catalogue, pricing tiers, order placement and dispatch tracking cuts phone orders and errors.',
      },
      {
        h2: 'Catalogue and D2C websites',
        body:
          'For units building their own brand, we build product catalogues and D2C stores with size charts, variants and COD, plus marketplace inventory sync.',
      },
    ],
    industries: ['manufacturing', 'retail'],
    services: ['custom-web-applications', 'ecommerce-website-development', 'crm-automation', 'api-integrations'],
    faqs: [
      { q: 'Can you build a distributor ordering portal?', a: 'Yes — catalogue, tiered pricing, orders, dispatch tracking and WhatsApp updates.' },
      { q: 'Can my footwear brand sell D2C online?', a: 'Yes, on Shopify or WooCommerce with size variants, COD and marketplace inventory sync.' },
      { q: 'Do you visit MIE Bahadurgarh?', a: 'Yes, for scoping and reviews when useful.' },
      { q: 'Do you build for local businesses in Bahadurgarh too?', a: 'Yes, fast mobile-first sites for clinics, schools and shops.' },
    ],
    nearby: ['rohtak', 'delhi', 'rohini', 'gurgaon'],
    geo: { lat: 28.692, lng: 76.924 },
    updated: U,
  },

  // ───────────────────── TODO: North/West Delhi (unpublished) ─────────────────────
  // Fill real local content and set status: 'ready' to publish. Do NOT
  // publish with copy-pasted text from another area.
  ...(
    [
      ['prashant-vihar', 'Prashant Vihar', 28.714, 77.129],
      ['ashok-vihar', 'Ashok Vihar', 28.695, 77.176],
      ['model-town', 'Model Town', 28.7025, 77.194],
      ['paschim-vihar', 'Paschim Vihar', 28.668, 77.102],
      ['punjabi-bagh', 'Punjabi Bagh', 28.672, 77.131],
      ['narela', 'Narela', 28.8526, 77.0929],
      ['bawana', 'Bawana', 28.798, 77.034],
      ['alipur', 'Alipur', 28.797, 77.133],
    ] as const
  ).map(
    ([slug, name, lat, lng]): Area => ({
      slug,
      name,
      region: 'North West Delhi',
      kind: 'north-west',
      status: 'todo',
      metaTitle: `TODO: Website Development in ${name} | Proshala`,
      metaDescription: 'TODO',
      h1: `Website Development in ${name}`,
      primaryKeyword: `website development ${name}`,
      secondaryKeywords: [],
      intro: 'TODO: 40–60 word intro specific to this area.',
      businessMix: 'TODO: who does business here.',
      landmarks: [],
      neighbourhoods: [],
      travel: 'TODO',
      sections: [],
      industries: [],
      services: [],
      faqs: [],
      nearby: ['rohini', 'pitampura'],
      geo: { lat, lng },
      updated: U,
    }),
  ),
]

export const readyAreas = () => areas.filter((a) => a.status === 'ready')
export const getArea = (slug: string) => areas.find((a) => a.slug === slug && a.status === 'ready')
/** Areas grouped for the "Areas we serve" blocks */
export const areaGroups = () => ({
  local: readyAreas().filter((a) => a.kind === 'primary' || a.kind === 'north-west' || a.kind === 'city'),
  ncr: readyAreas().filter((a) => a.kind === 'ncr'),
})
