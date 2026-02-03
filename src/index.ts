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

// Request types
export type {
  ForecastRequest,
  ForecastByProductRequest,
  InventoryRequest,
  InventoryHistoryRequest,
  SegmentationRequest,
  RfmRequest,
  LoyaltyRequest,
  CltvRequest,
  AbcRequest,
  MicroSegmentationRequest,
  ChurnRiskRequest,
  ChurnLabelRequest,
  NpsRequest,
  PropensityRequest,
  PropensityCampaignRequest,
  PropensityUpgradeRequest,
  RecommendUserRequest,
  RecommendSimilarRequest,
  CrossSellRequest,
  UpsellRequest,
  PricingRequest,
  SentimentRequest,
  SentimentRealtimeRequest,
  AnomalyTransactionsRequest,
  AnomalyAccountsRequest,
  AnomalyGraphRequest,
  CreditRiskRequest,
  AttributionRequest,
  UpliftRequest,
  JourneyMarkovRequest,
  JourneySequencesRequest,
  NlpRequest,
  SanitizeRequest,
  PurchasingSegmentationRequest,
  PatternsChartRequest,
  HierarchyChartRequest,
  HierarchyDataRequest,
  TransitionMatrixRequest,
  SegmentationReportRequest,
  SegmentationReportI18nRequest,
  GenerateReportRequest,
} from './types/requests'

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
