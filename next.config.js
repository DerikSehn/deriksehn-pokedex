/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'deriksehnstorage.s3.amazonaws.com',
        port: '',
        pathname: '/cars-video/**',
      },
    ],
  },
}

module.exports = nextConfig
