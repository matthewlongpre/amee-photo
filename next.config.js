/** @type {import('next').NextConfig} */
module.exports = {
  transpilePackages: [
    'sanity',
    '@sanity/vision',
    'sanity-plugin-asset-source-unsplash',
  ],
  images: {
    remotePatterns: [
      { hostname: 'cdn.sanity.io' },
      { hostname: 'source.unsplash.com' },
    ],
  },
  async redirects() {
    return [
      {
        source: '/:year/:month/:day/:post',
        destination: '/stories/:post',
        permanent: true,
      },
    ]
  },
}
