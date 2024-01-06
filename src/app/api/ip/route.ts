import { getIp } from "@/utils/get-ip"
import { NextRequest, NextResponse } from "next/server"

export async function GET (request: NextRequest) {
  console.log('GET_IP')
  const ip = getIp(request)

  return NextResponse.json({ ip })
}