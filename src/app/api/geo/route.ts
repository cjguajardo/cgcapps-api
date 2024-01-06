import { NextRequest, NextResponse } from "next/server"
import getGeoData from "@/services/geoip-service"
import { insertGeoData, getLastGeoData } from "@/services/supabase"
import { getIp } from "@/utils/get-ip"

export async function GET (request: NextRequest) {
  const ip = getIp(request)
  const lastGeoData = await getLastGeoData()

  const data = await getGeoData(ip)
  if (data) {
    await insertGeoData(data)
  }
  return NextResponse.json({ ...lastGeoData, ip })
}