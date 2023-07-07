/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['cdn.sanity.io'],
    },
    experimental: {
        serverActions: true,
      },
}

module.exports = nextConfig
