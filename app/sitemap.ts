// app/sitemap.ts — dynamic sitemap served at /sitemap.xml
import type { MetadataRoute } from "next";
import { locations, LOCATION_BASE } from "@/lib/data/locations";

const BASE = "https://proshala.com";

const staticPages: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
  { path: "",              priority: 1.0, changeFrequency: "weekly" },
  { path: "/about",        priority: 0.7, changeFrequency: "monthly" },
  { path: "/contact",      priority: 0.8, changeFrequency: "monthly" },
  { path: "/services",     priority: 0.9, changeFrequency: "weekly" },
  { path: "/case-studies", priority: 0.7, changeFrequency: "monthly" },
  { path: "/blogs",        priority: 0.8, changeFrequency: "daily" },
  { path: "/career",       priority: 0.5, changeFrequency: "monthly" },
  { path: "/disclaimer",   priority: 0.3, changeFrequency: "yearly" },
];

const servicePages = [
  "automation", "business-automation", "saas-tools", "ai-chatbots", "workflow-setup",
  "performance-marketing", "google-ads", "google-search-ads", "google-display-ads",
  "youtube-ads", "shopping-ads", "social-media-ads", "facebook-instagram-ads",
  "linkedin-ads", "seo", "local-seo", "technical-seo", "content-marketing",
  "website-development", "nextjs-development", "wordpress-development",
  "landing-pages", "analytics-reporting", "international-campaigns",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    ...staticPages.map(({ path, priority, changeFrequency }) => ({
      url: `${BASE}${path}`,
      lastModified: now,
      changeFrequency,
      priority,
    })),
    ...servicePages.map((slug) => ({
      url: `${BASE}/services/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    // Location pages — primary Delhi NCR ranking targets
    ...locations.map((loc) => ({
      url: `${BASE}/${LOCATION_BASE}${loc.slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    })),
    {
      url: `${BASE}/digital-marketing-sonipat`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
  ];
}
