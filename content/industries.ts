import type { Industry } from './types'

export const industries: Industry[] = [
  {
    slug: 'clinics',
    name: 'Clinics & Hospitals',
    icon: 'Stethoscope',
    metaTitle: 'Websites & Automation for Clinics in Delhi | Proshala',
    metaDescription:
      'Clinic and hospital websites with online booking, WhatsApp reminders and doctor profiles that rank locally — for dental, skin, eye and physio clinics.',
    h1: 'Websites & Automation for Clinics and Hospitals',
    intro:
      'Patients choose a clinic on their phone: they search, compare reviews, check timings and call or WhatsApp. We build clinic websites with doctor profiles, treatment pages and online booking, then automate reminders and follow-ups so fewer appointments are missed and front-desk staff spend less time on the phone.',
    problems: [
      'Front desk overloaded with calls asking timings, fees and availability',
      'No-shows because reminders depend on someone remembering to call',
      'Website does not show up for “dentist near me” or treatment searches',
      'Reviews and patient feedback not collected systematically',
    ],
    builds: [
      { title: 'Clinic website', desc: 'Doctor profiles, treatment pages, timings, location map and clear booking buttons.' },
      { title: 'Online booking', desc: 'Slot booking synced to the doctor’s calendar, with WhatsApp confirmation.' },
      { title: 'Patient reminders', desc: 'Automatic WhatsApp reminders before appointments and follow-up visits.' },
      { title: 'Review requests', desc: 'A polite message after the visit asking satisfied patients for a Google review.' },
    ],
    automations: ['Appointment reminders', 'Follow-up visit nudges', 'Lab report ready alerts', 'Review requests', 'FAQ answering on WhatsApp'],
    services: ['business-website-development', 'whatsapp-automation', 'ai-chatbots', 'google-ads'],
    faqs: [
      { q: 'Can patients book appointments on the website?', a: 'Yes. We add a booking system tied to each doctor’s schedule, with confirmations and reminders on WhatsApp.' },
      { q: 'Are there rules for clinic advertising and websites?', a: 'Yes. Medical advertising must follow NMC guidelines and Google and Meta healthcare policies — no guaranteed outcomes or misleading claims. We write content and ads within those limits.' },
      { q: 'Can a chatbot answer patient questions?', a: 'It can answer factual questions such as timings, fees, location and preparation instructions, and book slots. It should not give medical advice; those questions are handed to staff.' },
      { q: 'Will my clinic show up on Google Maps?', a: 'Your Google Business Profile drives Maps results. We link your website to it correctly, add location schema and guide you on reviews, photos and posts.' },
    ],
    updated: '2026-10-18',
  },
  {
    slug: 'schools-coaching-institutes',
    name: 'Schools & Coaching',
    icon: 'GraduationCap',
    metaTitle: 'Websites for Schools & Coaching in Delhi | Proshala',
    metaDescription:
      'Websites, admission landing pages, enquiry automation and student portals for schools and coaching institutes in Delhi, built for admission season.',
    h1: 'Websites & Automation for Schools and Coaching Institutes',
    intro:
      'Admissions are won in a few busy weeks. We build school and coaching websites that answer parents’ and students’ questions clearly, admission landing pages for ad campaigns, and automations that reply to every enquiry instantly, schedule counselling calls and follow up until the seat is filled.',
    problems: [
      'Enquiries pile up during admission season and many never get a callback',
      'Parents cannot find fees, batch timings or results on the website',
      'Fee reminders, attendance and notices handled manually',
      'Ads sending traffic to a homepage that does not convert',
    ],
    builds: [
      { title: 'Institute website', desc: 'Courses, faculty, results, batch timings and fee structure presented clearly.' },
      { title: 'Admission landing pages', desc: 'One page per course or campaign with fast enquiry forms.' },
      { title: 'Enquiry automation', desc: 'Instant WhatsApp reply, counsellor assignment and follow-up sequence.' },
      { title: 'Student portal', desc: 'Fee status, attendance, study material and notices in one login.' },
    ],
    automations: ['Instant enquiry replies', 'Counselling call booking', 'Fee reminders', 'Attendance alerts to parents', 'Result and notice broadcasts'],
    services: ['landing-pages', 'whatsapp-automation', 'custom-web-applications', 'facebook-instagram-ads'],
    faqs: [
      { q: 'Can you build a student portal for fees and attendance?', a: 'Yes. We build portals where students and parents see fees, attendance, study material and notices, with WhatsApp alerts for important updates.' },
      { q: 'How do we handle hundreds of admission enquiries a day?', a: 'Every enquiry gets an instant WhatsApp reply with key details, is assigned to a counsellor, and receives follow-ups until it is closed. A dashboard shows counsellor response times.' },
      { q: 'Should we run Google or Meta ads for admissions?', a: 'Google captures students actively searching for a course; Meta reaches parents and students in your area before they search. Most institutes do best with both during peak season.' },
      { q: 'Can we show results and toppers on the website?', a: 'Yes, with permission from students and parents. Verified results pages build trust and help with search rankings.' },
    ],
    updated: '2026-10-18',
  },
  {
    slug: 'real-estate',
    name: 'Real Estate',
    icon: 'Building',
    metaTitle: 'Real Estate Websites & Lead Automation, Delhi NCR | Proshala',
    metaDescription:
      'Project websites, property listing portals, site-visit booking and lead automation for real estate builders, brokers and channel partners in Delhi NCR.',
    h1: 'Websites & Lead Automation for Real Estate',
    intro:
      'In real estate, the fastest callback usually wins the site visit. We build project microsites and listing websites, connect every lead source — portals, ads, WhatsApp — into one CRM, and automate instant replies, site-visit booking and follow-ups so no buyer goes cold while waiting for a call.',
    problems: [
      'Leads from 99acres, MagicBricks, Housing and ads scattered across inboxes',
      'Slow callbacks — buyers have already spoken to three other brokers',
      'Every new project needs a microsite in days',
      'No way to tell which campaigns bring site visits and bookings',
    ],
    builds: [
      { title: 'Project microsites', desc: 'Fast pages with floor plans, pricing, location and RERA details.' },
      { title: 'Listing websites', desc: 'Searchable property listings with filters and enquiry tracking.' },
      { title: 'Lead hub', desc: 'Portal, ad and WhatsApp leads in one CRM with source tagging.' },
      { title: 'Site-visit booking', desc: 'Buyers pick a slot; reminders and directions sent automatically.' },
    ],
    automations: ['Portal lead capture', 'Instant WhatsApp brochure', 'Site-visit reminders', 'Re-engagement of old leads', 'Sales team assignment'],
    services: ['landing-pages', 'crm-automation', 'ai-voice-agents', 'facebook-instagram-ads'],
    faqs: [
      { q: 'Can leads from property portals go into one CRM?', a: 'Yes. Most portals send leads by email or API; we capture them automatically, tag the source and assign them to your team.' },
      { q: 'Do project websites need RERA details?', a: 'Yes. Project pages and ads for registered projects should display the RERA registration number and website. We include these in every project page.' },
      { q: 'Can an AI agent call new leads?', a: 'Yes. An AI voice agent can call new leads within minutes, confirm budget and location, and book a site visit, transferring hot leads to your sales team.' },
      { q: 'How quickly can you launch a new project page?', a: 'A project landing page with tracking can typically be launched within a week once we have the brochure, plans and pricing.' },
    ],
    updated: '2026-10-18',
  },
  {
    slug: 'restaurants',
    name: 'Restaurants & Cafés',
    icon: 'UtensilsCrossed',
    metaTitle: 'Restaurant Websites & Direct Ordering in Delhi | Proshala',
    metaDescription:
      'Restaurant and café websites with menus, table reservations and direct online ordering — cut aggregator commissions and build your own customer list.',
    h1: 'Websites & Ordering for Restaurants and Cafés',
    intro:
      'Aggregators bring orders but take a large commission and keep the customer data. We build restaurant websites with a menu that loads fast on phones, table reservations and direct ordering, plus WhatsApp automation that brings repeat customers back without paying commission on every order.',
    problems: [
      'High aggregator commissions on every order',
      'No list of your own regular customers',
      'Menu is a blurry PDF or Instagram post',
      'Reservation calls missed during rush hours',
    ],
    builds: [
      { title: 'Restaurant website', desc: 'Fast menu, photos, timings, location and reservation buttons.' },
      { title: 'Direct ordering', desc: 'Online ordering with UPI payment and delivery or pickup options.' },
      { title: 'Reservations', desc: 'Table booking with WhatsApp confirmations.' },
      { title: 'Repeat-order automation', desc: 'Opt-in WhatsApp offers and birthday messages to past customers.' },
    ],
    automations: ['Reservation confirmations', 'Order status updates', 'Feedback and review requests', 'Opt-in offers to regulars'],
    services: ['business-website-development', 'ecommerce-website-development', 'whatsapp-automation', 'facebook-instagram-ads'],
    faqs: [
      { q: 'Can I take orders on my own website instead of Zomato or Swiggy?', a: 'Yes. Direct ordering lets you keep the margin and the customer relationship. Most restaurants run both — aggregators for discovery and direct ordering for regulars.' },
      { q: 'How do I get customers to order directly?', a: 'Inserts in delivery bags, QR codes on tables, a direct-order offer and WhatsApp messages to opted-in customers are the usual levers.' },
      { q: 'Can the menu be updated easily?', a: 'Yes. Menu items, prices and availability are editable from a simple dashboard and update instantly.' },
      { q: 'Do you handle delivery?', a: 'We integrate with delivery partners or your own riders; we do not run delivery operations ourselves.' },
    ],
    updated: '2026-10-18',
  },
  {
    slug: 'retail',
    name: 'Retail & Showrooms',
    icon: 'Store',
    metaTitle: 'Websites & E-commerce for Retailers in Delhi | Proshala',
    metaDescription:
      'Websites, online stores and WhatsApp catalogues for Delhi retailers and showrooms — sell online, drive store visits and keep customers coming back.',
    h1: 'Websites & E-commerce for Retailers and Showrooms',
    intro:
      'Retail customers now check online before they visit a store. We build websites and online stores for retailers and showrooms that show your range, stock and location clearly, accept orders or reservations, and use WhatsApp to bring customers back for new arrivals, sales and service reminders.',
    problems: [
      'Customers cannot see your range before visiting',
      'Selling only through Instagram DMs and manual payment links',
      'No system to reach past customers about new stock or sales',
      'Stock and orders tracked on paper or separate spreadsheets',
    ],
    builds: [
      { title: 'Catalogue website', desc: 'Product range with prices or “ask for price”, and store locator.' },
      { title: 'Online store', desc: 'Shopify or WooCommerce with UPI, COD and delivery.' },
      { title: 'WhatsApp catalogue & updates', desc: 'New arrivals and offers to opted-in customers.' },
      { title: 'Inventory sync', desc: 'Stock synced between store, website and marketplaces.' },
    ],
    automations: ['Order confirmations', 'Back-in-stock alerts', 'Service and warranty reminders', 'Festive offer broadcasts'],
    services: ['ecommerce-website-development', 'whatsapp-automation', 'google-ads', 'api-integrations'],
    faqs: [
      { q: 'Should a showroom have an online store?', a: 'Not always. Some showrooms do better with a catalogue that drives visits and WhatsApp enquiries. We recommend based on your products, margins and delivery capability.' },
      { q: 'Can stock sync with my billing software?', a: 'Often, yes — depending on the billing software. We check integration options for your POS or accounting tool during scoping.' },
      { q: 'Can I sell on Amazon and my own site together?', a: 'Yes. Inventory can be synced across channels so you do not oversell.' },
      { q: 'How do I bring walk-in customers back?', a: 'Collect WhatsApp opt-ins at billing, then send new-arrival and offer messages that respect frequency limits.' },
    ],
    updated: '2026-10-18',
  },
  {
    slug: 'manufacturing',
    name: 'Manufacturing & B2B',
    icon: 'Factory',
    metaTitle: 'Manufacturer Websites & Automation, Delhi NCR | Proshala',
    metaDescription:
      'B2B websites, product catalogues, dealer portals and enquiry automation for manufacturers and exporters in Bawana, Narela, Wazirpur and across Delhi NCR.',
    h1: 'Websites & Automation for Manufacturers and B2B',
    intro:
      'Buyers and distributors now shortlist suppliers online before they call. We build B2B websites with detailed product catalogues and specification sheets, dealer and order portals, and automations that route IndiaMART, website and export enquiries to the right person and track every quote until it closes.',
    problems: [
      'Website is a brochure from years ago with no product detail',
      'Enquiries from IndiaMART, TradeIndia and email tracked manually',
      'Dealers order by phone and WhatsApp, causing errors',
      'Quotes sent but never followed up',
    ],
    builds: [
      { title: 'B2B website & catalogue', desc: 'Products with specs, downloadable datasheets and RFQ forms.' },
      { title: 'Dealer portal', desc: 'Dealers place orders, see pricing and track dispatch.' },
      { title: 'Enquiry hub', desc: 'IndiaMART, TradeIndia, website and email enquiries in one CRM.' },
      { title: 'Quote automation', desc: 'Quote follow-ups and reminders until a decision.' },
    ],
    automations: ['IndiaMART lead capture', 'Quote follow-ups', 'Dispatch updates to dealers', 'Payment reminders', 'Export enquiry routing'],
    services: ['custom-web-applications', 'crm-automation', 'business-website-development', 'api-integrations'],
    faqs: [
      { q: 'Do manufacturers need a website if they are on IndiaMART?', a: 'Yes. Serious buyers check your own website before shortlisting, and it is the only place where you control your brand, catalogue and enquiries without competitors listed beside you.' },
      { q: 'Can IndiaMART leads be automated?', a: 'Yes. Using the IndiaMART lead API, enquiries go into your CRM instantly, are assigned to a salesperson and get an automatic acknowledgement.' },
      { q: 'Can dealers place orders online?', a: 'Yes. A dealer portal shows each dealer their pricing, lets them order and track dispatch, and reduces phone and WhatsApp order errors.' },
      { q: 'Can the website target export buyers?', a: 'Yes. We build international-ready catalogues with specs, certifications and RFQ forms, and can add multiple languages if needed.' },
    ],
    updated: '2026-10-18',
  },
]

export function getIndustry(slug: string) {
  return industries.find((i) => i.slug === slug)
}
