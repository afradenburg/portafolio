/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
    webpack: (config, { isServer }) => {
      if (!isServer) {
        config.resolve.fallback = {
          fs: false,
          module: false,
          unstable_runtimeJS: false,
          
        }
      }
  
      return config
    },
  }
  