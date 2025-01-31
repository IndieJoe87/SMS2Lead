
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'webwerkmitte.b-cdn.net',
      },
    ],
  },
}

module.exports = nextConfig
