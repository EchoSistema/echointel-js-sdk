/**
 * EchoIntel JavaScript SDK
 *
 * @packageDocumentation
 */

// Main client
export { EchoIntelClient } from './client'

// Endpoints
export { Endpoints } from './endpoints'

// Errors
export {
  EchoIntelError,
  ValidationError,
  AuthenticationError,
} from './errors'

// Types
export type {
  EchoIntelConfig,
  ResolvedConfig,
} from './types/config'

// Response types
export type {
  // Common
  BaseResponse,
  HealthResponse,

  // Forecast
  ForecastValue,
  ForecastEvaluationMetrics,
  ForecastData,
  ForecastAlgorithmResult,
  ForecastUnitsResponse,
  ForecastResponse,

  // Inventory
  DailyInventoryRecord,
  ProductDetails,
  ProcessingInfo,
  InventoryHistoryResponse,
  InventoryOptimizationResponse,

  // Customer
  AlgorithmMetrics,
  ClusterDetail,
  CustomerLabel,
  SegmentationResponse,
  CustomerScore,
  LoyaltySummary,
  LoyaltyResponse,
  RfmCustomerOut,
  RfmResponse,
  ClvFeatureOut,
  ClvFeaturesResponse,
  ClvForecastCustomer,
  ClvForecastResponse,
  CustomerFeaturesResponse,

  // Churn
  ChurnLabelResponse,
  ChurnRiskResponse,

  // NPS
  NpsResponse,

  // Propensity
  PropensityResponse,

  // Recommendation
  RecommendationOut,
  ModelInfo,
  RecResponse,

  // Cross-sell
  CrossSellResponse,
  UpsellPair,
  UpsellResponse,

  // Pricing
  PriceOutcome,
  PricingResponse,

  // Sentiment
  SentimentDetail,
  SentimentKpiBlock,
  SentimentReportResponse,
  SentimentRealtimeResponse,

  // Anomaly
  AnomalyDetail,
  AnomalyKpiBlock,
  AnomalyTabularResponse,
  GraphDetail,
  AnomalyGraphResponse,

  // Credit
  CreditRiskPrediction,
  CreditRiskScoreResponse,
  CreditRiskExplainResponse,

  // Attribution
  ChannelContribution,
  AttributionResponse,
  DecileSummary,
  UpliftDetail,
  UpliftResponse,

  // Journey
  Transition,
  MarkovResponse,
  JourneyPath,
  SequenceResponse,

  // NLP
  NlpAnalysisResponse,
  SanitizeTextResponse,

  // Admin
  CustomerOut,
  CustomerListResponse,
  CreateCustomerRequest,
  UpdateCustomerRequest,
  SegmentationReportResponse,
  PurchasingSegmentationResponse,
} from './types/responses'
