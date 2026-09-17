/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'mshr-next-kxk3.vercel.app',
      },
      {
        protocol: 'https',
        hostname: 'mshr.org',
      },
    ],
  },
};

module.exports = nextConfig;
