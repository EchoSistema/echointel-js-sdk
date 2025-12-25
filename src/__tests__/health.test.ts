import { describe, it, expect } from 'vitest'
import { EchoIntelClient } from '../client'

describe('Health Check - Real API', () => {
  const client = new EchoIntelClient({
    customerApiId: 'test',
    secret: 'test',
  })

  it('should return health status from API', async () => {
    const result = await client.health()

    console.log('Health Response:', result)

    expect(result).toBeDefined()
  })
})
