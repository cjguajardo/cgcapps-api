import { NextRequest, NextResponse } from "next/server"
import getGeoData from "@/services/geoip-service"
import { insertGeoData, getLastGeoData, getOrigins } from "@/services/supabase"

export async function GET (request: NextRequest) {
  //@ts-ignore
  const ip = request.headers.get('X-Forwarded-For') || request.socket.remoteAddress
  const data = await getGeoData(ip)
  console.log({ data, ip })

  const origins = await getOrigins("/geo")

  if (data) {
    await insertGeoData(data)

    const lastGeoData = await getLastGeoData()

    return NextResponse.json(lastGeoData || {})
  }

  return NextResponse.json(data, {
    headers: {
      'cache-control': 's-maxage=1, stale-while-revalidate',
      'Access-Control-Allow-Origin': origins.join(', '),
    }
  })
}