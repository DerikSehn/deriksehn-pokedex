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
          {
          protocol: 'https',
          hostname: 'raw.githubusercontent.com',
          port: '',
          pathname: '/**',
        }, {
          protocol: 'https',
          hostname: 'pokeapi.co',
          port: '',
          pathname: '/api/v2/**',
        },
      ],
    },
}

module.exports = nextConfig
