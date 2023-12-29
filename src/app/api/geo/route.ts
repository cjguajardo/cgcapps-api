import { NextRequest, NextResponse } from "next/server"
import getGeoData from "@/services/geoip-service"
import { insertGeoData, getLastGeoData } from "@/services/supabase"

export async function GET (request: NextRequest) {
  //@ts-ignore
  const ip = request.headers.get('X-Forwarded-For') || request.socket.remoteAddress
    || request.headers.get('CF-Connecting-IP') || request.headers.get('Fastly-Client-IP') ||
    request.headers.get('True-Client-IP') || request.headers.get('X-Real-IP') ||
    request.ip
  const lastGeoData = await getLastGeoData()

  const data = await getGeoData(ip)
  if (data) {
    await insertGeoData(data)
  }
  return NextResponse.json(lastGeoData || {})
}