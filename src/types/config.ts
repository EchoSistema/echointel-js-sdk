/**
 * EchoIntel SDK Configuration
 */
export interface EchoIntelConfig {
  /** API base URL (default: 'https://ai.echosistema.live') */
  apiUrl?: string
  /** Customer API ID (required) */
  customerApiId: string
  /** Secret key (required) */
  secret: string
  /** Admin secret for admin endpoints (optional) */
  adminSecret?: string
  /** Request timeout in milliseconds (default: 30000) */
  timeout?: number
  /** Retry configuration */
  retry?: {
    /** Number of retry attempts (default: 3) */
    attempts?: number
    /** Delay between retries in milliseconds (default: 100) */
    delay?: number
  }
}

/**
 * Internal resolved configuration with defaults applied
 */
export interface ResolvedConfig {
  apiUrl: string
  customerApiId: string
  secret: string
  adminSecret?: string
  timeout: number
  retry: {
    attempts: number
    delay: number
  }
}
