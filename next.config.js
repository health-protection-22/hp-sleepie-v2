/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'www.sleepie.life',
      'wp.sleepie.life',
      'staging.hpb.healthprotection.com',
      'img.okcapsule.com',
      'cdn.sanity.io',
    ],
    unoptimized: true,
  },
  fallback: false,
};

module.exports = nextConfig;
