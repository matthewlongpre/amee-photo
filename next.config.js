/** @type {import('next').NextConfig} */
module.exports = {
  experimental: { appDir: true },
  images: {
    remotePatterns: [
      { hostname: 'cdn.sanity.io' },
      { hostname: 'source.unsplash.com' },
    ],
  },
  typescript: {
    // Set this to false if you want production builds to abort if there's type errors
    // ignoreBuildErrors:,
  },
  eslint: {
    /// Set this to false if you want production builds to abort if there's lint errors
    // ignoreDuringBuilds:,
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
