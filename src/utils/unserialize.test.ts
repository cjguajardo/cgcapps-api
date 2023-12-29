import { describe, it, expect } from 'vitest'
import unserialize, { getPart, getSize } from './unserialize';

describe( 'unserialize', () => {
  it( 'should return an object when given a valid serialized string', () => {
    const serialized = "a:24:{s:17:\"geoplugin_request\";s:13:\"181.163.12.82\";s:16:\"geoplugin_status\";i:200;s:15:\"geoplugin_delay\";s:3:\"2ms\";s:16:\"geoplugin_credit\";s:148:\"Some of the returned data includes GeoLite2 data created by MaxMind, available from <a href=\\'https://www.maxmind.com\\'>https://www.maxmind.com</a>.\";s:14:\"geoplugin_city\";s:12:\"San Fernando\";s:16:\"geoplugin_region\";s:16:\"O'Higgins Region\";s:20:\"geoplugin_regionCode\";s:2:\"LI\";s:20:\"geoplugin_regionName\";s:16:\"O'Higgins Region\";s:18:\"geoplugin_areaCode\";s:0:\"\";s:17:\"geoplugin_dmaCode\";s:0:\"\";s:21:\"geoplugin_countryCode\";s:2:\"CL\";s:21:\"geoplugin_countryName\";s:5:\"Chile\";s:14:\"geoplugin_inEU\";i:0;s:19:\"geoplugin_euVATrate\";b:0;s:23:\"geoplugin_continentCode\";s:2:\"SA\";s:23:\"geoplugin_continentName\";s:13:\"South America\";s:18:\"geoplugin_latitude\";s:8:\"-34.5761\";s:19:\"geoplugin_longitude\";s:8:\"-70.9848\";s:32:\"geoplugin_locationAccuracyRadius\";s:2:\"20\";s:18:\"geoplugin_timezone\";s:16:\"America/Santiago\";s:22:\"geoplugin_currencyCode\";s:3:\"CLP\";s:24:\"geoplugin_currencySymbol\";s:5:\"&#36;\";s:29:\"geoplugin_currencySymbol_UTF8\";s:1:\"$\";s:27:\"geoplugin_currencyConverter\";s:8:\"885.1401\";}"
    const result = unserialize( serialized );
    expect( Object.keys( result ) ).toHaveLength( 24 )
    expect( result ).toHaveProperty( "geoplugin_request" )
  } );

  it( 'should return an empty object when given an empty serialized string', () => {
    const serialized = '';
    const result = unserialize( serialized );
    expect( result ).toEqual( {} );
  } );

  it( 'should return null when given an invalid serialized string', () => {
    const serialized = 'invalid';
    const result = unserialize( serialized );
    expect( result ).toEqual( {} );
  } );
} );

describe( 'unserialize', () => {
  // Existing tests...

  describe( 'getPart', () => {
    it( 'should return the correct value item, value type, and value size', () => {
      const content = "s:17:\"geoplugin_request\";s:13:\"181.163.12.82\";"
      const result = getPart( content );
      expect( result.valueItem ).toEqual( "s:17:\"geoplugin_request\"" );
      expect( result.valueType ).toEqual( "s" );
      expect( result.valueSize ).toEqual( 17 );
    } );

    it( 'should return the correct value item, value type, and value size when given a different content', () => {
      const content = "i:200;"
      const result = getPart( content );
      expect( result.valueItem ).toEqual( "i:200" );
      expect( result.valueType ).toEqual( "i" );
      expect( result.valueSize ).toEqual( 3 );
    } );
  } );
} );