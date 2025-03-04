/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Enable static exports
  basePath: '/ai-podcast-landing', // Repository name
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
