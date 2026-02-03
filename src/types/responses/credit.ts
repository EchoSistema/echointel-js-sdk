/**
 * Credit risk prediction
 */
export interface CreditRiskPrediction {
  customerId: string
  probability: number
  riskClass: string
  [key: string]: unknown
}

/**
 * Credit risk score response
 */
export interface CreditRiskScoreResponse {
  /** AUC score */
  auc: number
  /** Best model used */
  bestModel: string
  /** Predictions */
  predictions: CreditRiskPrediction[]
  /** Human-readable interpretation */
  interpretation: string
}

/**
 * Credit risk explain response
 */
export interface CreditRiskExplainResponse {
  customerId: string
  features: Record<string, number>
  interpretation: string
  [key: string]: unknown
}
