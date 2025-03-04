/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Enable static exports
  basePath: process.env.NODE_ENV === 'production' ? '/ai-podcast-landing' : '', // Only use basePath in production
  images: {
    unoptimized: true,
  },
}

export default nextConfig;
