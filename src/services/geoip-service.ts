import GeoDataAdapter from "@/adapters/geodata";
import { GeoDataType, GeoPluginResponse } from "@/types/types";
import unserialize from "@/utils/unserialize";

// const url = `https://ipinfo.io/${ip}/geo`

export default async function getGeoData( ip: string | null ): Promise<GeoDataType | null> {
  if ( !ip ) {
    return null
  }
  if ( ip === '::ffff:127.0.0.1' || ip === '::1' || ip === '127.0.0.1' || ip === 'localhost' ) {
    return null
  }
  const url = `http://www.geoplugin.net/php.gp?ip=${ip}`
  const response = await fetch( url )

  if ( response && response.ok ) {
    const serialized = await response.text()
    console.log( { serialized } );
    const adapter = new GeoDataAdapter();

    const data = adapter.extractData( unserialize( serialized ) as GeoPluginResponse )

    return data
  }
  return null
}