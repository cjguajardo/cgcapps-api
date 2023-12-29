import { describe, it, expect } from 'vitest';
import GeoDataAdapter from './geodata';

describe( 'GeoDataAdapter', () => {
  describe( 'extractData', () => {
    it( 'should extract the correct data from the response', () => {
      const response = {
        geoplugin_continentName: 'South America',
        geoplugin_countryName: 'Chile',
        geoplugin_regionName: 'O\'Higgins Region',
        geoplugin_city: 'San Fernando',
        geoplugin_latitude: '-34.5761',
        geoplugin_longitude: '-70.9848',
      };

      const adapter = new GeoDataAdapter();
      const result = adapter.extractData( response );

      expect( result ).toEqual( {
        continent: 'South America',
        country: 'Chile',
        region: 'O\'Higgins Region',
        city: 'San Fernando',
        latitude: '-34.5761',
        longitude: '-70.9848',
      } );
    } );
  } );
} );