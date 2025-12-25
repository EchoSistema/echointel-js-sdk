/**
 * Channel contribution
 */
export interface ChannelContribution {
  channel: string
  contribution: number
  percentage: number
  [key: string]: unknown
}

/**
 * Attribution response
 */
export interface AttributionResponse {
  /** Channel contributions */
  contributions: ChannelContribution[]
  /** Global AUC score */
  globalAuc: number | null
  /** Human-readable interpretation */
  interpretation: string
}

/**
 * Decile summary
 */
export interface DecileSummary {
  decile: number
  avgUplift: number
  count: number
  [key: string]: unknown
}

/**
 * Uplift detail
 */
export interface UpliftDetail {
  customerId: string
  uplift: number
  decile: number
  [key: string]: unknown
}

/**
 * Uplift response
 */
export interface UpliftResponse {
  /** Uplift details per customer */
  details: UpliftDetail[]
  /** Decile summaries */
  decileSummary: DecileSummary[]
  /** Human-readable interpretation */
  interpretation: string
}
