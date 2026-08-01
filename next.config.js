/** @type {import('next').NextConfig} */
const nextConfig = {

  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },

  async redirects() {
    return [
      // Old thin/dated blog posts → new Delhi NCR location pages (SEO 301s)
      { source: "/best-digital-marketing-agency-in-delhi-2023",      destination: "/digital-marketing-delhi", permanent: true },
      { source: "/best-digital-marketing-services-in-delhi",         destination: "/digital-marketing-delhi", permanent: true },
      { source: "/best-social-media-marketing-agency-in-delhi-2024", destination: "/digital-marketing-delhi", permanent: true },
      { source: "/website-development-company-in-noida",             destination: "/digital-marketing-noida", permanent: true },
      { source: "/best-digital-marketing-services-in-india",         destination: "/",                        permanent: true },
      { source: "/5-benefits-of-digital-marketing",                  destination: "/blogs",                   permanent: true },
      { source: "/ai-teams-ai-employee-solutions-for-your-business-proshalaai-solutions", destination: "/services/automation", permanent: true },
      // Off-strategy city posts → homepage
      { source: "/best-digital-marketing-company-in-chandigarh",     destination: "/", permanent: true },
      { source: "/best-digital-marketing-company-in-indore",         destination: "/", permanent: true },
      { source: "/best-digital-marketing-company-in-surat",          destination: "/", permanent: true },
      { source: "/best-digital-marketing-company-in-dubai-2024",     destination: "/", permanent: true },
    ];
  },
};

module.exports = nextConfig;
