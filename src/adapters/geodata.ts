import { GeoDataType, GeoPluginResponse } from '@/types/types.d';

class GeoDataAdapter {
  public extractData( response: GeoPluginResponse ): GeoDataType {
    return {
      continent: response.geoplugin_continentName,
      country: response.geoplugin_countryName,
      region: response.geoplugin_regionName,
      city: response.geoplugin_city,
      latitude: response.geoplugin_latitude,
      longitude: response.geoplugin_longitude,
    };
  }
}

export default GeoDataAdapter;