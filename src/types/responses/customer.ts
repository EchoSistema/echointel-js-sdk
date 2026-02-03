/**
 * Algorithm evaluation metrics
 */
export interface AlgorithmMetrics {
  /** Algorithm name */
  algorithm: string
  /** Algorithm parameters */
  params: Record<string, unknown>
  /** Silhouette score */
  silhouette: number | null
  /** Davies-Bouldin index */
  daviesBouldin: number | null
  /** Calinski-Harabasz index */
  calinskiHarabasz: number | null
  /** Number of clusters */
  nClusters: number | null
}

/**
 * Cluster detail
 */
export interface ClusterDetail {
  /** Cluster ID */
  clusterId: number
  /** Cluster size (number of customers) */
  size: number
  /** Cluster centroid values */
  centroid: number[]
  /** Human-readable persona label */
  personaLabel: string
}

/**
 * Customer label (customer to cluster assignment)
 */
export interface CustomerLabel {
  /** Customer ID */
  customerId: string
  /** Assigned cluster ID */
  clusterId: number
}

/**
 * Segmentation response
 */
export interface SegmentationResponse {
  /** Best algorithm used */
  bestAlgorithm: string
  /** Evaluation metrics per algorithm */
  evaluationMetrics: AlgorithmMetrics[]
  /** Cluster details */
  clusters: ClusterDetail[]
  /** Customer to cluster assignments */
  customerLabels: CustomerLabel[]
}

/**
 * Customer score for loyalty
 */
export interface CustomerScore {
  customerId: string
  score: number
  tier: string
  [key: string]: unknown
}

/**
 * Loyalty summary
 */
export interface LoyaltySummary {
  totalCustomers: number
  averageScore: number
  tierDistribution: Record<string, number>
  [key: string]: unknown
}

/**
 * Loyalty response
 */
export interface LoyaltyResponse {
  /** Customer scores */
  customers: CustomerScore[]
  /** Summary statistics */
  summary: LoyaltySummary
}

/**
 * RFM customer output
 */
export interface RfmCustomerOut {
  customerId: string
  recency: number
  frequency: number
  monetary: number
  recencyScore: number
  frequencyScore: number
  monetaryScore: number
  rfmScore: string
  segment: string
  [key: string]: unknown
}

/**
 * RFM response
 */
export interface RfmResponse {
  /** Customer RFM data */
  customers: RfmCustomerOut[]
  /** RFM thresholds */
  thresholds: Record<string, unknown>
}

/**
 * CLV feature output
 */
export interface ClvFeatureOut {
  customerId: string
  [key: string]: unknown
}

/**
 * CLV features response
 */
export interface ClvFeaturesResponse {
  /** Customer features */
  customers: ClvFeatureOut[]
  [key: string]: unknown
}

/**
 * CLV forecast customer
 */
export interface ClvForecastCustomer {
  customerId: string
  predictedClv: number
  [key: string]: unknown
}

/**
 * CLV forecast response
 */
export interface ClvForecastResponse {
  /** Best algorithm used */
  bestAlgorithm: string
  /** Forecast horizon in months */
  horizonMonths: number
  /** Evaluation MAE per algorithm */
  evaluationMae: Record<string, number>
  /** Customer CLV forecasts */
  customers: ClvForecastCustomer[]
}

/**
 * Customer features response
 */
export interface CustomerFeaturesResponse {
  [key: string]: unknown
}
