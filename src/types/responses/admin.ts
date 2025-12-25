/**
 * Customer output (admin)
 */
export interface CustomerOut {
  /** Customer API ID */
  customerApiId: string
  /** Secret key */
  secret: string
  /** Whether customer is enabled */
  enabled: boolean
  /** Creation timestamp */
  tsCreate: string
  /** Update timestamp */
  tsUpdate: string
  /** Allowed API routes */
  allowedRoutes: string[]
}

/**
 * Customer list response
 */
export interface CustomerListResponse {
  customers: CustomerOut[]
}

/**
 * Create customer request
 */
export interface CreateCustomerRequest {
  customerApiId: string
  allowedRoutes?: string[]
  enabled?: boolean
  [key: string]: unknown
}

/**
 * Update customer request
 */
export interface UpdateCustomerRequest {
  allowedRoutes?: string[]
  enabled?: boolean
  [key: string]: unknown
}

/**
 * Segmentation report response
 */
export interface SegmentationReportResponse {
  [key: string]: unknown
}

/**
 * Purchasing segmentation response
 */
export interface PurchasingSegmentationResponse {
  [key: string]: unknown
}
