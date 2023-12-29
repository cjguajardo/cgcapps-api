import { GeoDataResponse, GeoDataType, GeoPluginResponse } from '@/types/types.d'

class GeoDataAdapter {
  public extractData (response: GeoPluginResponse | unknown): GeoDataType | null {
    const geo_data: GeoDataType = {
      continent: '',
      country: '',
      region: '',
      city: '',
      latitude: '',
      longitude: '',
    }

    if (!response) {
      return geo_data
    }

    /*  id: 239,
     ip: '181.163.12.82',
     continent: 'South America',
     country: 'Chile',
     region: 'none',
     city: 'San Fernando',
     latitude: 0,
     longitude: 0,
     created_at: '2023-12-29T19:06:00+00:00' */

    if (response && typeof response === 'object') {
      if ('geoplugin_continentName' in response) {
        geo_data.continent = response.geoplugin_continentName as string
      }
      else if ('continent' in response) {
        geo_data.continent = response.continent as string
      }
      if ('geoplugin_countryName' in response) {
        geo_data.country = response.geoplugin_countryName as string
      } else if ('country' in response) {
        geo_data.country = response.country as string
      }
      if ('geoplugin_regionName' in response) {
        geo_data.region = response.geoplugin_regionName as string
      } else if ('region' in response) {
        geo_data.region = response.region as string
      }
      if ('geoplugin_city' in response) {
        geo_data.city = response.geoplugin_city as string
      } else if ('city' in response) {
        geo_data.city = response.city as string
      }
      if ('geoplugin_latitude' in response) {
        geo_data.latitude = response.geoplugin_latitude as string
      }
      else if ('latitude' in response) {
        geo_data.latitude = response.latitude as string
      }
      if ('geoplugin_longitude' in response) {
        geo_data.longitude = response.geoplugin_longitude as string
      }
      else if ('longitude' in response) {
        geo_data.longitude = response.longitude as string
      }
    }

    return geo_data
  }

  public extractDataForResponse (response: GeoPluginResponse | unknown): GeoDataResponse | null {
    const extractedData = this.extractData(response)
    if (extractedData) {
      const { continent, country, region, city } = extractedData
      return { continent, country, region, city } as GeoDataResponse
    }

    return null
  }
}

export default GeoDataAdapter