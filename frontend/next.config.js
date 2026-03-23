/** @type {import('next').NextConfig} */
const nextConfig = {
  // Removed 'output: export' for full Next.js functionality on Vercel
  images: {
    // Vercel handles image optimization automatically
    formats: ['image/avif', 'image/webp'],
  },
  // Optional: Add trailing slash for consistent URLs
  trailingSlash: true,
}

module.exports = nextConfig
