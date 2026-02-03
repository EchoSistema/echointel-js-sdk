/**
 * Base response interface
 */
export interface BaseResponse {
  [key: string]: unknown
}

/**
 * Health check response
 */
export interface HealthResponse {
  status: string
  version?: string
}
