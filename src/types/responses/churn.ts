/**
 * Churn label response
 */
export interface ChurnLabelResponse {
  /** Customer ID */
  customerId: string
  /** Snapshot date */
  snapshotDate: string
  /** Churned flag (1 = churned, 0 = not churned) */
  churned: number
}

/**
 * Churn risk response
 */
export interface ChurnRiskResponse {
  predictions: Array<{
    customerId: string
    churnProbability: number
    riskLevel: string
    [key: string]: unknown
  }>
  modelInfo: Record<string, unknown>
  [key: string]: unknown
}
