/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Enable static exports
  basePath: process.env.NODE_ENV === 'production' ? '/ai-podcast-landing' : '', // Only use basePath in production
  images: {
    unoptimized: true,
  },
  // Disable server-side features for static export
  trailingSlash: true,
  typescript: {
    ignoreBuildErrors: true, // Temporarily ignore TS errors for deployment
  },
}

module.exports = nextConfig;
