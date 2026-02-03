/**
 * Propensity response
 */
export interface PropensityResponse {
  /** Predictions */
  predictions: Array<{
    customerId: string
    probability: number
    [key: string]: unknown
  }>
  /** Model information */
  modelInfo: Record<string, unknown>
}
