/**
 * Recommendation output
 */
export interface RecommendationOut {
  userId: string
  itemId: string
  score: number
  [key: string]: unknown
}

/**
 * Model information
 */
export interface ModelInfo {
  algorithm: string
  trainedAt: string
  [key: string]: unknown
}

/**
 * Recommendation response
 */
export interface RecResponse {
  /** Recommendations */
  recommendations: RecommendationOut[]
  /** Model information */
  modelInfo: ModelInfo
}
