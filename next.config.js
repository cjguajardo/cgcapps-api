/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers () {
    return [
      {
        source: '/api/ip',
        headers: [
          // Allow for specific domains to have access or * for all
          {
            key: 'Access-Control-Allow-Origin',
            value: '*'
          },
          // Allows for specific methods accepted
          {
            key: "Access-Control-Allow-Methods",
            value: "GET, OPTIONS",
          },
          // Allows for specific headers accepted (These are a few standard ones)
          {
            key: "Access-Control-Allow-Headers",
            value: "Content-Type, Authorization",
          },
        ]
      }
    ]
  }
}

module.exports = nextConfig
