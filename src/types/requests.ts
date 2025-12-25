/**
 * Request types for EchoIntel API
 */

// =========================================================================
// FORECASTING
// =========================================================================

export interface ForecastRequest {
  [key: string]: unknown
}

export interface ForecastByProductRequest {
  productCode: string
  [key: string]: unknown
}

// =========================================================================
// INVENTORY
// =========================================================================

export interface InventoryRequest {
  [key: string]: unknown
}

export interface InventoryHistoryRequest {
  [key: string]: unknown
}

// =========================================================================
// CUSTOMER ANALYTICS
// =========================================================================

export interface SegmentationRequest {
  [key: string]: unknown
}

export interface RfmRequest {
  [key: string]: unknown
}

export interface LoyaltyRequest {
  [key: string]: unknown
}

export interface CltvRequest {
  [key: string]: unknown
}

export interface AbcRequest {
  [key: string]: unknown
}

export interface MicroSegmentationRequest {
  [key: string]: unknown
}

// =========================================================================
// CHURN
// =========================================================================

export interface ChurnRiskRequest {
  [key: string]: unknown
}

export interface ChurnLabelRequest {
  [key: string]: unknown
}

// =========================================================================
// NPS
// =========================================================================

export interface NpsRequest {
  [key: string]: unknown
}

// =========================================================================
// PROPENSITY
// =========================================================================

export interface PropensityRequest {
  [key: string]: unknown
}

export interface PropensityCampaignRequest {
  [key: string]: unknown
}

export interface PropensityUpgradeRequest {
  [key: string]: unknown
}

// =========================================================================
// RECOMMENDATIONS
// =========================================================================

export interface RecommendUserRequest {
  userId: string
  [key: string]: unknown
}

export interface RecommendSimilarRequest {
  itemId: string
  [key: string]: unknown
}

// =========================================================================
// CROSS-SELL / UPSELL
// =========================================================================

export interface CrossSellRequest {
  [key: string]: unknown
}

export interface UpsellRequest {
  [key: string]: unknown
}

// =========================================================================
// PRICING
// =========================================================================

export interface PricingRequest {
  [key: string]: unknown
}

// =========================================================================
// SENTIMENT
// =========================================================================

export interface SentimentRequest {
  [key: string]: unknown
}

export interface SentimentRealtimeRequest {
  text: string
  [key: string]: unknown
}

// =========================================================================
// ANOMALY
// =========================================================================

export interface AnomalyTransactionsRequest {
  [key: string]: unknown
}

export interface AnomalyAccountsRequest {
  [key: string]: unknown
}

export interface AnomalyGraphRequest {
  [key: string]: unknown
}

// =========================================================================
// CREDIT RISK
// =========================================================================

export interface CreditRiskRequest {
  [key: string]: unknown
}

// =========================================================================
// ATTRIBUTION
// =========================================================================

export interface AttributionRequest {
  [key: string]: unknown
}

export interface UpliftRequest {
  [key: string]: unknown
}

// =========================================================================
// JOURNEY
// =========================================================================

export interface JourneyMarkovRequest {
  [key: string]: unknown
}

export interface JourneySequencesRequest {
  [key: string]: unknown
}

// =========================================================================
// NLP
// =========================================================================

export interface NlpRequest {
  text: string
  [key: string]: unknown
}

export interface SanitizeRequest {
  text: string
  [key: string]: unknown
}

// =========================================================================
// ADMIN - SEGMENTATION
// =========================================================================

export interface PurchasingSegmentationRequest {
  [key: string]: unknown
}

export interface PatternsChartRequest {
  [key: string]: unknown
}

export interface HierarchyChartRequest {
  [key: string]: unknown
}

export interface HierarchyDataRequest {
  [key: string]: unknown
}

export interface TransitionMatrixRequest {
  [key: string]: unknown
}

// =========================================================================
// ADMIN - REPORTS
// =========================================================================

export interface SegmentationReportRequest {
  [key: string]: unknown
}

export interface SegmentationReportI18nRequest {
  [key: string]: unknown
}

export interface GenerateReportRequest {
  [key: string]: unknown
}
