/** @type {import('next').NextConfig} */
const nextCors = require('nextjs-cors')
const nextConfig = {
  middleware: [
    nextCors({
      methods: ['GET', 'POST'],
      origin: ['https://cgcapps.cl'],
      optionsSuccessStatus: 200
    })
  ]
}

module.exports = nextConfig
