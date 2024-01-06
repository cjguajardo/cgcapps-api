import { describe, it, expect } from 'vitest'
import { getIp } from './get-ip'
import { NextRequest } from 'next/server'

describe('getIp', () => {
  it('should return the correct IP address', () => {
    const request = {
      headers: new Map([
        ['X-Forwarded-For', '192.168.0.1'],
        ['CF-Connecting-IP', ''],
        ['Fastly-Client-IP', ''],
        ['True-Client-IP', ''],
        ['X-Real-IP', ''],
      ]),
      ip: '192.168.0.2',
    } as unknown as NextRequest

    const result = getIp(request)

    expect(result).toEqual('192.168.0.1')
  })

  it('should return null if no valid IP address is found', () => {
    const request = {
      headers: new Map([
        ['X-Forwarded-For', ''],
        ['CF-Connecting-IP', ''],
        ['Fastly-Client-IP', ''],
        ['True-Client-IP', ''],
        ['X-Real-IP', ''],
      ]),
      ip: '',
    } as unknown as NextRequest

    const result = getIp(request)

    expect(result).toBeNull()
  })
  it('should return null if no valid IP address is found', () => {
    const request = {
      headers: new Map([
        ['X-Forwarded-For', '::1'],
        ['CF-Connecting-IP', ''],
        ['Fastly-Client-IP', ''],
        ['True-Client-IP', ''],
        ['X-Real-IP', 'localhost'],
      ]),
      ip: '',
    } as unknown as NextRequest

    const result = getIp(request)

    expect(result).toBeNull()
  })

  it('should return null if no IP address is found', () => {
    const request = {
      headers: new Map(),
      ip: '',
    } as unknown as NextRequest

    const result = getIp(request)

    expect(result).toBeNull()
  })


})