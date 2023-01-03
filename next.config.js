module.exports = {
  images: {
    domains: ['assets.gracecrothall.com'],
    unoptimized: true,
  },
  // experimental: {
  //   images: {
  //     unoptimized: true,
  //   },
  // },
  // webpack: (config, { isServer }) => {
  //   // Fixes npm packages that depend on `fs` module
  //   if (!isServer) {
  //     config.node = {
  //       fs: 'empty',
  //     }
  //   }

  //   return config
  // },
}
