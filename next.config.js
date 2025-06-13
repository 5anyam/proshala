/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
    domains: ['cms.proshala.com', 'assets.aceternity.com'],
    unoptimized: true,
},
eslint: {
    ignoreDuringBuilds: true, // Disable ESLint during builds
  },

}

module.exports = nextConfig
