import { NextRequest, NextResponse } from "next/server"
import getGeoData from "@/services/geoip-service"
import { insertGeoData, getLastGeoData } from "@/services/supabase"

export async function GET (request: NextRequest) {
  //@ts-ignore
  const ip = request.headers.get('X-Forwarded-For') || request.socket.remoteAddress
  const data = await getGeoData(ip)
  console.log({ data, ip })

  if (data) {
    await insertGeoData(data)

    const lastGeoData = await getLastGeoData()

    return NextResponse.json(lastGeoData || {})
  }

  return NextResponse.json(data)
}