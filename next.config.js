module.exports = {
  images: {
    domains: ['storage.googleapis.com'],
  },
  experimental: {
    images: {
      unoptimized: true,
    },
  },
  webpack: (config, { isServer }) => {
    // Fixes npm packages that depend on `fs` module
    if (!isServer) {
      config.node = {
        fs: 'empty',
      }
    }

    return config
  },
}
