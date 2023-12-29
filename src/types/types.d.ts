export interface GeoPluginResponse {
  geoplugin_request: string;
  geoplugin_status: string | null;
  geoplugin_delay: string;
  geoplugin_credit: string;
  geoplugin_city: string;
  geoplugin_region: string;
  geoplugin_regionCode: string;
  geoplugin_regionName: string;
  geoplugin_areaCode: string;
  geoplugin_dmaCode: string;
  geoplugin_countryCode: string;
  geoplugin_countryName: string;
  geoplugin_inEU: string | null;
  geoplugin_euVATrate: boolean | null;
  geoplugin_continentCode: string;
  geoplugin_continentName: string;
  geoplugin_latitude: string;
  geoplugin_longitude: string;
  geoplugin_locationAccuracyRadius: string;
  geoplugin_timezone: string;
  geoplugin_currencyCode: string;
  geoplugin_currencySymbol: string;
  geoplugin_currencySymbol_UTF8: string;
  geoplugin_currencyConverter: string;
}

export interface GeoDataType {
  continent: string;
  country: string;
  region: string;
  city: string;
  latitude: string;
  longitude: string;
}

export interface ContactFormType {
  name: string;
  email: string;
  message: string;
  isValid: boolean;
}