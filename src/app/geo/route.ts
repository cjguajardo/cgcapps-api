import unserialize from "@/utils/unserialize";
import { NextResponse } from "next/server";
import GeoDataAdapter from "@/adapters/geodata";
import { GeoPluginResponse, GeoDataType } from "@/types/types.d";

export async function POST( request: Request ) {

  try {
    const { origin, ip } = await request.json();

    const url = `http://www.geoplugin.net/php.gp?ip=${ip}`
    // const url = `https://ipinfo.io/${ip}/geo`

    const response = await fetch( url )

    if ( response && response.ok ) {
      const serialized = await response.text()
      const adapter = new GeoDataAdapter();

      const data = adapter.extractData( unserialize( serialized ) as GeoPluginResponse )
      return NextResponse.json( data )
    }
    return NextResponse.json( { error: 'No response' } )
  }
  catch ( e ) {
    return NextResponse.json( { error: e } );
  }
}