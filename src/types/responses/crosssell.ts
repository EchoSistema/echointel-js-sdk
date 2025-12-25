/**
 * Cross-sell response
 */
export interface CrossSellResponse {
  /** Items or categories */
  itemsOrCategories: string[]
  /** Co-occurrence matrix */
  matrix: number[][]
  /** Metric used */
  metric: string
  /** Generation timestamp */
  generatedAt: string
}

/**
 * Upsell pair
 */
export interface UpsellPair {
  fromItem: string
  toItem: string
  confidence: number
  [key: string]: unknown
}

/**
 * Upsell response
 */
export interface UpsellResponse {
  /** Upsell suggestions */
  suggestions: UpsellPair[]
  /** Metric used */
  metric: string
  /** Generation timestamp */
  generatedAt: string
}
