/**
 * Price outcome
 */
export interface PriceOutcome {
  price: number
  expectedRevenue: number
  expectedDemand: number
  [key: string]: unknown
}

/**
 * Pricing response
 */
export interface PricingResponse {
  /** Best recommended price */
  bestPrice: number
  /** Price outcomes */
  outcomes: PriceOutcome[]
  /** Model information */
  modelInfo: Record<string, unknown>
  /** Human-readable interpretation */
  interpretation: string
}
