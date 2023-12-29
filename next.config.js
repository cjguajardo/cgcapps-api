/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers () {
    return [
      {
        source: '/api/:path*',
        headers: [
          { key: 'Access-Control-Allow-Origin', value: 'https://*.cgcapps.cl' },
          { key: 'Access-Control-Allow-Methods', value: 'GET,POST' },
          { key: 'Access-Control-Allow-Headers', value: 'X-Requested-With,Content-Type' }

        ]
      }
    ]
  }
}

module.exports = nextConfig
