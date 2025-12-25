/**
 * Sentiment detail
 */
export interface SentimentDetail {
  textId: string
  text: string
  sentiment: string
  score: number
  [key: string]: unknown
}

/**
 * Sentiment KPI block
 */
export interface SentimentKpiBlock {
  totalTexts: number
  positiveCount: number
  negativeCount: number
  neutralCount: number
  averageScore: number
  [key: string]: unknown
}

/**
 * Sentiment report response
 */
export interface SentimentReportResponse {
  /** Period start date */
  periodStart: string
  /** Period end date */
  periodEnd: string
  /** KPI summary */
  kpis: SentimentKpiBlock
  /** Detailed sentiment analysis */
  details: SentimentDetail[]
  /** Human-readable interpretation */
  interpretation: string
}

/**
 * Sentiment realtime response
 */
export interface SentimentRealtimeResponse {
  text: string
  sentiment: string
  score: number
  confidence: number
  [key: string]: unknown
}
