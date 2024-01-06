/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers () {
    return [
      {
        // Routes this applies to
        source: "/api/:path*",
        // Headers
        headers: [
          // Allow for specific domains to have access or * for all
          {
            key: "Access-Control-Allow-Origin",
            value: 'https://cgcapps.cl',
          },
          // Allows for specific methods accepted
          {
            key: "Access-Control-Allow-Methods",
            value: "GET, POST",
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig
