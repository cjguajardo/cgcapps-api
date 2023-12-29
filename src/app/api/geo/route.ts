import { NextRequest, NextResponse } from "next/server"
import getGeoData from "@/services/geoip-service"
import { insertGeoData, getLastGeoData } from "@/services/supabase"

export async function GET (request: NextRequest) {
  //@ts-ignore
  const ip = request.headers.get('X-Forwarded-For') || request.socket.remoteAddress
  const data = await getGeoData(ip)
  console.log({ data, ip })

  const lastGeoData = await getLastGeoData()
  if (data) {
    await insertGeoData(data)
  }
  return NextResponse.json(lastGeoData || {})
}