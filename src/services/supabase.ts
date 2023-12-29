import GeoDataAdapter from '@/adapters/geodata'
import { GeoDataResponse, GeoDataType } from '@/types/types'
import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
  process.env.SUPABASE_URL ?? '',
  process.env.SUPABASE_ANON_KEY ?? ''
)

export const insertGeoData = async (data: GeoDataType): Promise<void> => {
  const result = await supabase.from('geo_ip').insert([data])
  console.log({ result })
  if (result.error) {
    console.error({ error: result.error })
  }
}

export const getLastGeoData = async (): Promise<GeoDataResponse | null> => {
  const { data, error } = await supabase
    .from('geo_ip')
    .select('*')
    .order('created_at', { ascending: false })
    .limit(1)

  if (error) {
    console.error({ error })
    return null
  }

  if (!data) {
    return null
  }

  const adapter = new GeoDataAdapter()
  const geoData = adapter.extractDataForResponse(data[0])
  console.log({ data: data[0] })

  return geoData
}

export const getOrigins = async (endpoint?: string | null): Promise<string[]> => {
  let endpoints = '("/geo","/mail")'
  if (endpoint) {
    endpoints = `("${endpoint}")`
  }

  const { data, error } = await supabase.from('allowed_origins')
    .select('*')
    .filter('enabled', 'eq', true)
    .filter('endpoint', 'in', endpoints)
    .order('created_at', { ascending: false })

  if (error) {
    console.error({ error })
    return []
  }

  if (!data) {
    return []
  }

  return Array.from(new Set(data.map(item => item.origin)).values())
}