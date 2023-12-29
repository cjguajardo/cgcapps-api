import { GeoDataType } from "@/types/types"
export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface GeoIpRow extends GeoDataType {
  id: number;
  ip: string;
  created_at: string;
}

export interface GeoIpRowInsert extends GeoDataType {
  id?: number;
  ip: string;
  created_at?: string;
}

export interface GeoIpRowUpdate extends GeoDataType {
  id?: number;
  ip?: string;
  created_at?: string;
}

export interface Database {
  public: {
    Tables: {
      todos: {
        Row: GeoIpRow
        Insert: GeoIpRowInsert
        Update: GeoIpRowUpdate
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}