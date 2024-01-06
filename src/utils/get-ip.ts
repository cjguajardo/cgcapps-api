import { NextRequest } from "next/server"

export const getIp = (request: NextRequest): string | null => {
  const ip: string[] = []

  ip.push(request.headers.get('X-Forwarded-For') || '')
  ip.push(request.headers.get('CF-Connecting-IP') || '')
  ip.push(request.headers.get('Fastly-Client-IP') || '')
  ip.push(request.headers.get('True-Client-IP') || '')
  ip.push(request.headers.get('X-Real-IP') || '')
  ip.push(request.ip || '')

  const realIp = new Set(ip.filter((i) => i !== '')).values().next().value

  // check if it is a valid ip
  const regex = new RegExp(/^(?:[0-9]{1,3}\.){3}[0-9]{1,3}$/)
  if (!regex.test(realIp)) {
    return null
  }

  return realIp
}