/**
 * Anomaly detail
 */
export interface AnomalyDetail {
  recordId: string
  isAnomaly: boolean
  anomalyScore: number
  [key: string]: unknown
}

/**
 * Anomaly KPI block
 */
export interface AnomalyKpiBlock {
  totalRecords: number
  anomalyCount: number
  anomalyRate: number
  [key: string]: unknown
}

/**
 * Anomaly tabular response (transactions/accounts)
 */
export interface AnomalyTabularResponse {
  /** KPI summary */
  kpi: AnomalyKpiBlock
  /** Detailed anomaly analysis */
  details: AnomalyDetail[]
  /** Human-readable interpretation */
  interpretation: string
}

/**
 * Graph anomaly detail
 */
export interface GraphDetail {
  nodeId: string
  isAnomaly: boolean
  anomalyScore: number
  connections: number
  [key: string]: unknown
}

/**
 * Anomaly graph response
 */
export interface AnomalyGraphResponse {
  /** Graph details */
  details: GraphDetail[]
  /** Human-readable interpretation */
  interpretation: string
  [key: string]: unknown
}
