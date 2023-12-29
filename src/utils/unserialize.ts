
export const getSize = ( text: string | null ) => {
  let size = text ? text : ''
  size = size.replaceAll( '"', '' ).replaceAll( ';', '' )
  if ( size?.indexOf( 'i' ) === 0 || size?.indexOf( 'b' ) === 0 ) {
    const value = size.substring( size.indexOf( ':' ) + 1 )
    size = value.length.toString()
  }
  else { size = size.substring( size.indexOf( ':' ) + 1 ) }

  return parseInt( size ) || 0
}
export const getPart = ( content: string ) => {
  const valueItem = content.substring( 0, content.indexOf( ';' ) )
  const valueType = valueItem.substring( 0, valueItem.indexOf( ':' ) )
  const valueSize = getSize( valueItem )

  return { valueItem, valueType, valueSize }
}

export default function unserialize( serialized: string ): object {
  if ( !serialized ) return {}

  if ( serialized.indexOf( 'a:' ) !== 0 ) {
    return {}
  }

  const match = serialized.match( /^a:\d+:{/ );
  const size = match ? parseInt( match[0].replace( 'a:', '' ).replace( ':{', '' ) ) : 0;
  if ( size === 0 ) return {}

  let content = serialized.substring( `a:${size}:{`.length, serialized.length - 1 )
  const pairs: { [key: string]: string | number | boolean } = {};

  while ( Object.keys( pairs ).length < size ) {
    const k = getPart( content )
    content = content.substring( k.valueItem.length + 1 )
    // console.log( { content } );

    const v = getPart( content )
    content = content.substring( v.valueItem.length + 1 )

    const value = v.valueItem.substring( `${v.valueType}:${v.valueSize}:"`.length, `s:${v.valueSize}:"`.length + v.valueSize );
    const key = k.valueItem.substring( `${k.valueType}:${k.valueSize}:"`.length, `s:${k.valueSize}:"`.length + k.valueSize );

    // console.log( { key, value, v, k } );

    if ( v.valueType === 'i' ) {
      pairs[key] = parseInt( value )
    } else if ( v.valueType === 'b' ) {
      pairs[key] = value === '1'
    } else {
      pairs[key] = value;
    }
  }
  return pairs;
}