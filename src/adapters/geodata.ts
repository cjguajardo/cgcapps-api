import { GeoDataResponse, GeoDataType, GeoPluginResponse } from '@/types/types.d';

class GeoDataAdapter {
  public extractData( response: GeoPluginResponse | unknown ): GeoDataType | null {
    const geo_data: GeoDataType = {
      continent: '',
      country: '',
      region: '',
      city: '',
      latitude: '',
      longitude: '',
    };

    if ( !response ) {
      return geo_data;
    }

    if ( response && typeof response === 'object' ) {
      if ( 'geoplugin_continentName' in response ) {
        geo_data.continent = response.geoplugin_continentName as string;
      }
      if ( 'geoplugin_countryName' in response ) {
        geo_data.country = response.geoplugin_countryName as string;
      }
      if ( 'geoplugin_regionName' in response ) {
        geo_data.region = response.geoplugin_regionName as string;
      }
      if ( 'geoplugin_city' in response ) {
        geo_data.city = response.geoplugin_city as string;
      }
      if ( 'geoplugin_latitude' in response ) {
        geo_data.latitude = response.geoplugin_latitude as string;
      }
      if ( 'geoplugin_longitude' in response ) {
        geo_data.longitude = response.geoplugin_longitude as string;
      }

      return geo_data
    }

    return null
  }

  public extractDataForResponse( response: GeoPluginResponse | unknown ): GeoDataResponse | null {
    const extractedData = this.extractData( response );

    if ( extractedData ) {
      const { continent, country, region, city } = extractedData;
      return { continent, country, region, city } as GeoDataResponse
    }

    return null
  }
}

export default GeoDataAdapter;