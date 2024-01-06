import { NextRequest, NextResponse } from "next/server"

interface IpInfo {
  'x-forwarded-for': string | null
  remoteAddress: string | undefined
  'cf-connecting-ip': string | null
  'fastly-client-ip': string | null
  'true-client-ip': string | null
  'x-real-ip': string | null
  ip: string | undefined
  url: string | undefined
}

export async function GET (request: NextRequest) {
  const ip: IpInfo = {} as IpInfo

  ip['x-forwarded-for'] = request.headers.get('X-Forwarded-For')
  ip['cf-connecting-ip'] = request.headers.get('CF-Connecting-IP')
  ip['fastly-client-ip'] = request.headers.get('Fastly-Client-IP')
  ip['true-client-ip'] = request.headers.get('True-Client-IP')
  ip['x-real-ip'] = request.headers.get('X-Real-IP')
  ip['ip'] = request.ip
  ip['url'] = request.url

  return NextResponse.json(ip)
}