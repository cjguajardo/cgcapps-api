import { NextRequest, NextResponse } from "next/server";
import getGeoData from "@/services/geoip-service";
import { insertGeoData, getLastGeoData } from "@/services/supabase";

export async function POST( request: Request ) {
  try {
    const { ip } = await request.json();
    const data = await getGeoData( ip );

    if ( data ) {
      await insertGeoData( { ...data, ip } );

      const lastGeoData = await getLastGeoData();

      return NextResponse.json( lastGeoData || {} )
    }
    return NextResponse.json( { error: 'No data found' } )
  }
  catch ( e ) {
    return NextResponse.json( { error: e } );
  }
}

export async function GET( request: NextRequest ) {
  // get the IP address from the request headers
  const ip = request.headers.get( 'X-Forwarded-For' )
  const data = await getGeoData( ip );
  console.log( { data, ip } );

  if ( data ) {
    await insertGeoData( data );

    const lastGeoData = await getLastGeoData();

    return NextResponse.json( lastGeoData || {} )
  }

  return NextResponse.json( data )
}