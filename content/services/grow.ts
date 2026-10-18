import type { Service } from '../types'

// GROW — Google & Meta Ads (secondary, ~15% of site weight; keep compact)

export const growServices: Service[] = [
  {
    slug: 'google-ads',
    group: 'grow',
    name: 'Google Ads',
    icon: 'Search',
    metaTitle: 'Google Ads Management in Delhi | Proshala',
    metaDescription:
      'Google Ads management for Delhi businesses — Search, Performance Max and YouTube campaigns tied to real leads and sales, with landing pages and tracking built in-house.',
    h1: 'Google Ads Management in Delhi',
    primaryKeyword: 'Google Ads agency Delhi',
    secondaryKeywords: ['PPC management Delhi', 'Google Ads expert Rohini', 'Performance Max management', 'YouTube ads agency'],
    intro:
      'We run Google Search, Performance Max and YouTube campaigns for businesses that want leads and sales, not just clicks. Because we also build websites and tracking, we set up proper conversion tracking, fast landing pages and offline sale uploads first — then optimise campaigns against what actually turns into revenue.',
    summary: 'Search, Performance Max and YouTube campaigns measured on leads and sales.',
    whoFor: [
      'Local businesses that want calls from people searching for their service',
      'E-commerce stores running Shopping and Performance Max',
      'B2B companies targeting high-intent searches',
      'Businesses unhappy with an agency that reports only clicks and impressions',
    ],
    deliverables: [
      { title: 'Tracking first', desc: 'GA4, Google Ads conversions, call tracking and enhanced conversions set up correctly.' },
      { title: 'Search campaigns', desc: 'Tight keyword groups, negatives, location targeting by area and ad schedule.' },
      { title: 'Performance Max & Shopping', desc: 'Merchant Center feed, asset groups and audience signals.' },
      { title: 'YouTube', desc: 'Short video ads for awareness and remarketing.' },
      { title: 'Landing pages', desc: 'Dedicated pages built by our own dev team.' },
      { title: 'Plain-English reports', desc: 'Leads, cost per lead and sales — not vanity metrics.' },
    ],
    stack: ['Google Ads', 'GA4', 'Google Tag Manager', 'Merchant Center', 'Looker Studio', 'Offline conversion import'],
    process: [
      { title: 'Audit', desc: 'Existing account and tracking reviewed.' },
      { title: 'Fix tracking', desc: 'Conversions verified before spending more.' },
      { title: 'Launch', desc: 'Campaigns structured around your best services and areas.' },
      { title: 'Optimise weekly', desc: 'Search terms, bids, ads and pages improved every week.' },
    ],
    timeline: 'Live in 5–7 working days',
    priceFrom: 'TODO',
    priceNote: 'management fee per month, ad spend paid directly to Google',
    faqs: [
      { q: 'How much should I spend on Google Ads in Delhi?', a: 'It depends on your industry’s cost per click and how many leads you need. We estimate a starting budget from keyword data for your service and area during the audit, and suggest starting small, then scaling what works.' },
      { q: 'Do you charge a percentage of ad spend?', a: 'We charge a fixed monthly management fee agreed upfront. Ad spend is paid by you directly to Google from your own account.' },
      { q: 'Who owns the Google Ads account?', a: 'You do. Campaigns run in your account; we get manager access. If you leave, all data and history stay with you.' },
      { q: 'How soon will I get leads?', a: 'Search campaigns can bring enquiries within days of going live. The first 3–4 weeks are a learning period where we cut wasted searches and improve cost per lead.' },
      { q: 'Can you target only Rohini or North Delhi?', a: 'Yes. We can target specific PIN codes or a radius around your location, so you pay only for people in your service area.' },
    ],
    related: ['landing-pages', 'facebook-instagram-ads', 'crm-automation', 'ecommerce-website-development'],
    updated: '2026-10-18',
  },
  {
    slug: 'facebook-instagram-ads',
    group: 'grow',
    name: 'Meta Ads',
    icon: 'Megaphone',
    metaTitle: 'Meta Ads (Facebook & Instagram) Agency in Delhi | Proshala',
    metaDescription:
      'Facebook and Instagram ads for Delhi businesses — lead ads, WhatsApp click ads and sales campaigns with Conversions API tracking and leads piped straight to your CRM.',
    h1: 'Meta Ads — Facebook & Instagram',
    primaryKeyword: 'Meta ads agency Delhi',
    secondaryKeywords: ['Facebook ads agency Delhi', 'Instagram ads management', 'click to WhatsApp ads', 'Meta lead ads'],
    intro:
      'We run Facebook and Instagram campaigns — lead forms, click-to-WhatsApp and sales campaigns — for local businesses and online stores. Every campaign is set up with the Meta pixel and Conversions API, and leads go straight to your WhatsApp or CRM so your team can respond while the customer is still interested.',
    summary: 'Lead, WhatsApp and sales campaigns with Conversions API and instant lead routing.',
    whoFor: [
      'Local businesses with a visual offer — clinics, real estate, restaurants, salons',
      'Coaching institutes and schools during admission season',
      'D2C and e-commerce brands selling online',
      'Businesses that want WhatsApp conversations rather than form fills',
    ],
    deliverables: [
      { title: 'Tracking', desc: 'Meta pixel, Conversions API and domain verification.' },
      { title: 'Campaign setup', desc: 'Lead, WhatsApp, traffic and sales campaigns with location targeting.' },
      { title: 'Creative direction', desc: 'Ad formats, hooks and copy; static and short video briefs.' },
      { title: 'Instant lead routing', desc: 'Lead ads synced to WhatsApp, Sheets or CRM in real time.' },
      { title: 'Lead quality checks', desc: 'Qualifying questions and filters to reduce junk leads.' },
      { title: 'Reporting', desc: 'Cost per lead and per sale, by ad and audience.' },
    ],
    stack: ['Meta Ads Manager', 'Conversions API', 'WhatsApp Business API', 'n8n', 'GA4', 'Looker Studio'],
    process: [
      { title: 'Offer & audience', desc: 'What we sell, to whom, and in which areas.' },
      { title: 'Tracking & routing', desc: 'Pixel, CAPI and lead delivery tested.' },
      { title: 'Launch & test', desc: 'Several creatives and audiences tested against each other.' },
      { title: 'Scale', desc: 'Budget moved to what produces real customers.' },
    ],
    timeline: 'Live in 5–7 working days',
    priceFrom: 'TODO',
    priceNote: 'management fee per month, ad spend paid directly to Meta',
    faqs: [
      { q: 'Facebook ads or Google ads — which is better?', a: 'Google captures people already searching for your service; Meta creates demand by showing your offer to the right audience. Local services with clear search demand usually start on Google; visual offers, events and products often do well on Meta. Many businesses use both.' },
      { q: 'Why are my Facebook leads low quality?', a: 'Instant forms make it very easy to submit, so some leads are casual. We add qualifying questions, use higher-intent form types, reply instantly on WhatsApp and send sale data back to Meta so it finds better people.' },
      { q: 'What are click-to-WhatsApp ads?', a: 'They are ads that open a WhatsApp chat with your business instead of a form. For many local businesses they produce more natural conversations and better leads.' },
      { q: 'Do you create the ad designs and videos?', a: 'We write ad copy and creative briefs and produce simple static creatives. For video shoots we work with your team or a production partner.' },
      { q: 'What is the Conversions API and do I need it?', a: 'It sends conversion data from your server to Meta, which is more reliable than the browser pixel alone because of ad blockers and privacy settings. It noticeably improves tracking and campaign optimisation.' },
    ],
    related: ['google-ads', 'whatsapp-automation', 'landing-pages', 'crm-automation'],
    updated: '2026-10-18',
  },
]
