/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Enable static exports
  basePath: '/ai-podcast-landing', // Updated repository name
  images: {
    unoptimized: true,
  },
}

export default nextConfig;
