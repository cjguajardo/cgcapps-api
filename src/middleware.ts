import { NextRequest, NextResponse } from "next/server"


export function middleware (req: NextRequest) {
  // retrieve the current response
  const res = NextResponse.next()

  const allowedOrigins = process.env.ALLOWED_ORIGIN?.split(',') || [
    'https://cgcapps.cl'
  ]
  const origin = req.headers.get('origin') || ''

  if (!allowedOrigins.includes(origin)) {
    // set the status to 403 Forbidden and return the response
    return new Response('Forbidden', { status: 403 })
  }

  // add the CORS headers to the response
  res.headers.append('Access-Control-Allow-Origin', origin)
  res.headers.append('Access-Control-Allow-Credentials', process.env.CREDENTIALS || "true")
  res.headers.append('Access-Control-Allow-Methods', process.env.ALLOWED_METHODS || 'GET,POST')
  res.headers.append(
    'Access-Control-Allow-Headers', process.env.ALLOWED_HEADERS ||
  'X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type'
  )
  res.headers.append('Access-Control-Max-Age', process.env.MAX_AGE || '86400')

  return res
}

// specify the path regex to apply the middleware to
export const config = {
  matcher: '/api/:path*',
}