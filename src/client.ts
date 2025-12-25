import { Endpoints } from './endpoints'
import { fetcher } from './http/fetcher'
import type { EchoIntelConfig, ResolvedConfig } from './types/config'
import type {
  HealthResponse,
  ForecastResponse,
  ForecastUnitsResponse,
  InventoryOptimizationResponse,
  InventoryHistoryResponse,
  SegmentationResponse,
  CustomerFeaturesResponse,
  LoyaltyResponse,
  RfmResponse,
  ClvFeaturesResponse,
  ClvForecastResponse,
  ChurnRiskResponse,
  ChurnLabelResponse,
  NpsResponse,
  PropensityResponse,
  RecResponse,
  CrossSellResponse,
  UpsellResponse,
  PricingResponse,
  SentimentReportResponse,
  SentimentRealtimeResponse,
  AnomalyTabularResponse,
  AnomalyGraphResponse,
  CreditRiskScoreResponse,
  CreditRiskExplainResponse,
  AttributionResponse,
  UpliftResponse,
  MarkovResponse,
  SequenceResponse,
  NlpAnalysisResponse,
  SanitizeTextResponse,
  PurchasingSegmentationResponse,
  SegmentationReportResponse,
  CustomerOut,
  CustomerListResponse,
  CreateCustomerRequest,
  UpdateCustomerRequest,
} from './types/responses'

/**
 * EchoIntel API Client
 *
 * @example
 * ```typescript
 * const client = new EchoIntelClient({
 *   customerApiId: 'your-customer-id',
 *   secret: 'your-secret',
 * })
 *
 * const forecast = await client.forecastRevenue({ ... })
 * ```
 */
export class EchoIntelClient {
  private readonly config: ResolvedConfig

  constructor(config: EchoIntelConfig) {
    this.config = {
      apiUrl: config.apiUrl?.replace(/\/$/, '') ?? Endpoints.BASE_URL,
      customerApiId: config.customerApiId,
      secret: config.secret,
      adminSecret: config.adminSecret,
      timeout: config.timeout ?? 30000,
      retry: {
        attempts: config.retry?.attempts ?? 3,
        delay: config.retry?.delay ?? 100,
      },
    }
  }

  // =========================================================================
  // PRIVATE METHODS
  // =========================================================================

  private getHeaders(withAuth = false): Record<string, string> {
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    }

    if (withAuth) {
      headers['X-Customer-Api-Id'] = this.config.customerApiId
      headers['X-Secret'] = this.config.secret
      if (this.config.adminSecret) {
        headers['X-Admin-Secret'] = this.config.adminSecret
      }
    }

    return headers
  }

  private getAdminHeaders(): Record<string, string> {
    return {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'X-Admin-Secret': this.config.adminSecret ?? '',
    }
  }

  private async request<T>(
    method: string,
    endpoint: string,
    data?: Record<string, unknown>,
    withAuth = false
  ): Promise<T> {
    const url = `${this.config.apiUrl}${endpoint}`

    const options: RequestInit & { timeout: number; retry: { attempts: number; delay: number } } = {
      method,
      headers: this.getHeaders(withAuth),
      timeout: this.config.timeout,
      retry: this.config.retry,
    }

    if (data && (method === 'POST' || method === 'PUT' || method === 'PATCH')) {
      options.body = JSON.stringify(data)
    }

    return fetcher<T>(url, options)
  }

  private async requestAdmin<T>(
    method: string,
    endpoint: string,
    data?: Record<string, unknown>
  ): Promise<T> {
    const url = `${this.config.apiUrl}${endpoint}`

    const options: RequestInit & { timeout: number; retry: { attempts: number; delay: number } } = {
      method,
      headers: this.getAdminHeaders(),
      timeout: this.config.timeout,
      retry: this.config.retry,
    }

    if (data && (method === 'POST' || method === 'PUT' || method === 'PATCH')) {
      options.body = JSON.stringify(data)
    }

    return fetcher<T>(url, options)
  }

  // =========================================================================
  // SYSTEM
  // =========================================================================

  /**
   * Check API health status
   */
  async health(): Promise<HealthResponse> {
    return this.request<HealthResponse>('GET', Endpoints.HEALTH)
  }

  // =========================================================================
  // FORECASTING
  // =========================================================================

  /**
   * Forecast revenue based on historical data
   */
  async forecastRevenue(data: Record<string, unknown>): Promise<ForecastResponse> {
    return this.request<ForecastResponse>('POST', Endpoints.FORECAST_REVENUE, data)
  }

  /**
   * Forecast cost based on historical data
   */
  async forecastCost(data: Record<string, unknown>): Promise<ForecastResponse> {
    return this.request<ForecastResponse>('POST', Endpoints.FORECAST_COST, data)
  }

  /**
   * Forecast cost with improved algorithm
   */
  async forecastCostImproved(data: Record<string, unknown>): Promise<ForecastResponse> {
    return this.request<ForecastResponse>('POST', Endpoints.FORECAST_COST_IMPROVED, data)
  }

  /**
   * Forecast units based on historical data
   */
  async forecastUnits(data: Record<string, unknown>): Promise<ForecastUnitsResponse> {
    return this.request<ForecastUnitsResponse>('POST', Endpoints.FORECAST_UNITS, data)
  }

  /**
   * Forecast cost for Totus
   */
  async forecastCostTotus(data: Record<string, unknown>): Promise<ForecastResponse> {
    return this.request<ForecastResponse>('POST', Endpoints.FORECAST_COST_TOTUS, data)
  }

  // =========================================================================
  // INVENTORY
  // =========================================================================

  /**
   * Get inventory optimization recommendations
   */
  async inventoryOptimization(data: Record<string, unknown>): Promise<InventoryOptimizationResponse> {
    return this.request<InventoryOptimizationResponse>('POST', Endpoints.INVENTORY_OPTIMIZATION, data)
  }

  /**
   * Get improved inventory history analysis
   */
  async inventoryHistoryImproved(data: Record<string, unknown>): Promise<InventoryHistoryResponse> {
    return this.request<InventoryHistoryResponse>('POST', Endpoints.INVENTORY_HISTORY_IMPROVED, data)
  }

  // =========================================================================
  // CUSTOMER ANALYTICS
  // =========================================================================

  /**
   * Perform customer segmentation
   */
  async customerSegmentation(data: Record<string, unknown>): Promise<SegmentationResponse> {
    return this.request<SegmentationResponse>('POST', Endpoints.CUSTOMER_SEGMENTATION, data)
  }

  /**
   * Build customer features
   */
  async customerFeatures(data: Record<string, unknown>): Promise<CustomerFeaturesResponse> {
    return this.request<CustomerFeaturesResponse>('POST', Endpoints.CUSTOMER_FEATURES, data)
  }

  /**
   * Calculate customer loyalty scores
   */
  async customerLoyalty(data: Record<string, unknown>): Promise<LoyaltyResponse> {
    return this.request<LoyaltyResponse>('POST', Endpoints.CUSTOMER_LOYALTY, data)
  }

  /**
   * Perform RFM analysis
   */
  async customerRfm(data: Record<string, unknown>): Promise<RfmResponse> {
    return this.request<RfmResponse>('POST', Endpoints.CUSTOMER_RFM, data)
  }

  /**
   * Build CLV features
   */
  async customerClvFeatures(data: Record<string, unknown>): Promise<ClvFeaturesResponse> {
    return this.request<ClvFeaturesResponse>('POST', Endpoints.CUSTOMER_CLV_FEATURES, data)
  }

  /**
   * Forecast customer lifetime value
   */
  async customerClvForecast(data: Record<string, unknown>): Promise<ClvForecastResponse> {
    return this.request<ClvForecastResponse>('POST', Endpoints.CUSTOMER_CLV_FORECAST, data)
  }

  // =========================================================================
  // CHURN ANALYSIS
  // =========================================================================

  /**
   * Predict churn risk
   */
  async churnRisk(data: Record<string, unknown>): Promise<ChurnRiskResponse> {
    return this.request<ChurnRiskResponse>('POST', Endpoints.CHURN_RISK, data)
  }

  /**
   * Get churn labels
   */
  async churnLabel(data: Record<string, unknown>): Promise<ChurnLabelResponse> {
    return this.request<ChurnLabelResponse>('POST', Endpoints.CHURN_LABEL, data)
  }

  // =========================================================================
  // NPS
  // =========================================================================

  /**
   * Calculate NPS score
   */
  async nps(data: Record<string, unknown>): Promise<NpsResponse> {
    return this.request<NpsResponse>('POST', Endpoints.NPS, data)
  }

  // =========================================================================
  // PROPENSITY MODELING
  // =========================================================================

  /**
   * Predict propensity to buy product
   */
  async propensityBuyProduct(data: Record<string, unknown>): Promise<PropensityResponse> {
    return this.request<PropensityResponse>('POST', Endpoints.PROPENSITY_BUY_PRODUCT, data)
  }

  /**
   * Predict propensity to respond to campaign
   */
  async propensityRespondCampaign(data: Record<string, unknown>): Promise<PropensityResponse> {
    return this.request<PropensityResponse>('POST', Endpoints.PROPENSITY_RESPOND_CAMPAIGN, data)
  }

  /**
   * Predict propensity to upgrade plan
   */
  async propensityUpgradePlan(data: Record<string, unknown>): Promise<PropensityResponse> {
    return this.request<PropensityResponse>('POST', Endpoints.PROPENSITY_UPGRADE_PLAN, data)
  }

  // =========================================================================
  // RECOMMENDATIONS
  // =========================================================================

  /**
   * Get item recommendations for user
   */
  async recommendUserItems(data: Record<string, unknown>): Promise<RecResponse> {
    return this.request<RecResponse>('POST', Endpoints.RECOMMEND_USER_ITEMS, data)
  }

  /**
   * Get similar items
   */
  async recommendSimilarItems(data: Record<string, unknown>): Promise<RecResponse> {
    return this.request<RecResponse>('POST', Endpoints.RECOMMEND_SIMILAR_ITEMS, data)
  }

  // =========================================================================
  // CROSS-SELL & UPSELL
  // =========================================================================

  /**
   * Get cross-sell matrix
   */
  async crossSellMatrix(data: Record<string, unknown>): Promise<CrossSellResponse> {
    return this.request<CrossSellResponse>('POST', Endpoints.CROSS_SELL_MATRIX, data)
  }

  /**
   * Get upsell suggestions
   */
  async upsellSuggestions(data: Record<string, unknown>): Promise<UpsellResponse> {
    return this.request<UpsellResponse>('POST', Endpoints.UPSELL_SUGGESTIONS, data)
  }

  // =========================================================================
  // DYNAMIC PRICING
  // =========================================================================

  /**
   * Get dynamic pricing recommendations
   */
  async dynamicPricingRecommend(data: Record<string, unknown>): Promise<PricingResponse> {
    return this.request<PricingResponse>('POST', Endpoints.DYNAMIC_PRICING_RECOMMEND, data)
  }

  // =========================================================================
  // SENTIMENT ANALYSIS
  // =========================================================================

  /**
   * Get sentiment report
   */
  async sentimentReport(data: Record<string, unknown>): Promise<SentimentReportResponse> {
    return this.request<SentimentReportResponse>('POST', Endpoints.SENTIMENT_REPORT, data)
  }

  /**
   * Get realtime sentiment analysis
   */
  async sentimentRealtime(data: Record<string, unknown>): Promise<SentimentRealtimeResponse> {
    return this.request<SentimentRealtimeResponse>('POST', Endpoints.SENTIMENT_REALTIME, data)
  }

  // =========================================================================
  // ANOMALY DETECTION
  // =========================================================================

  /**
   * Detect anomalies in transactions
   */
  async anomalyTransactions(data: Record<string, unknown>): Promise<AnomalyTabularResponse> {
    return this.request<AnomalyTabularResponse>('POST', Endpoints.ANOMALY_TRANSACTIONS, data)
  }

  /**
   * Detect anomalies in accounts
   */
  async anomalyAccounts(data: Record<string, unknown>): Promise<AnomalyTabularResponse> {
    return this.request<AnomalyTabularResponse>('POST', Endpoints.ANOMALY_ACCOUNTS, data)
  }

  /**
   * Detect anomalies using graph analysis
   */
  async anomalyGraph(data: Record<string, unknown>): Promise<AnomalyGraphResponse> {
    return this.request<AnomalyGraphResponse>('POST', Endpoints.ANOMALY_GRAPH, data)
  }

  // =========================================================================
  // CREDIT RISK
  // =========================================================================

  /**
   * Get credit risk score
   */
  async creditRiskScore(data: Record<string, unknown>): Promise<CreditRiskScoreResponse> {
    return this.request<CreditRiskScoreResponse>('POST', Endpoints.CREDIT_RISK_SCORE, data)
  }

  /**
   * Get credit risk explanation
   */
  async creditRiskExplain(data: Record<string, unknown>): Promise<CreditRiskExplainResponse> {
    return this.request<CreditRiskExplainResponse>('POST', Endpoints.CREDIT_RISK_EXPLAIN, data)
  }

  // =========================================================================
  // MARKETING ATTRIBUTION
  // =========================================================================

  /**
   * Get channel attribution
   */
  async channelAttribution(data: Record<string, unknown>): Promise<AttributionResponse> {
    return this.request<AttributionResponse>('POST', Endpoints.CHANNEL_ATTRIBUTION, data)
  }

  /**
   * Get uplift model results
   */
  async upliftModel(data: Record<string, unknown>): Promise<UpliftResponse> {
    return this.request<UpliftResponse>('POST', Endpoints.UPLIFT_MODEL, data)
  }

  // =========================================================================
  // CUSTOMER JOURNEY
  // =========================================================================

  /**
   * Get Markov chain journey analysis
   */
  async journeyMarkov(data: Record<string, unknown>): Promise<MarkovResponse> {
    return this.request<MarkovResponse>('POST', Endpoints.JOURNEY_MARKOV, data)
  }

  /**
   * Get journey sequences
   */
  async journeySequences(data: Record<string, unknown>): Promise<SequenceResponse> {
    return this.request<SequenceResponse>('POST', Endpoints.JOURNEY_SEQUENCES, data)
  }

  // =========================================================================
  // NLP & TEXT PROCESSING
  // =========================================================================

  /**
   * Perform NLP analysis (Portuguese)
   */
  async nlpAnalysis(data: Record<string, unknown>): Promise<NlpAnalysisResponse> {
    return this.request<NlpAnalysisResponse>('POST', Endpoints.NLP_ANALYSIS, data)
  }

  /**
   * Perform NLP analysis (English)
   */
  async nlpAnalysisEn(data: Record<string, unknown>): Promise<NlpAnalysisResponse> {
    return this.request<NlpAnalysisResponse>('POST', Endpoints.NLP_ANALYSIS_EN, data)
  }

  /**
   * Generate excess inventory report using NLP
   */
  async nlpExcessInventoryReport(data: Record<string, unknown>): Promise<Record<string, unknown>> {
    return this.request<Record<string, unknown>>('POST', Endpoints.NLP_EXCESS_INVENTORY_REPORT, data)
  }

  /**
   * Sanitize text
   */
  async sanitizeText(data: Record<string, unknown>): Promise<SanitizeTextResponse> {
    return this.request<SanitizeTextResponse>('POST', Endpoints.SANITIZE_TEXT, data)
  }

  // =========================================================================
  // ADVANCED SEGMENTATION (ADMIN)
  // =========================================================================

  /**
   * Perform purchasing segmentation
   */
  async purchasingSegmentation(data: Record<string, unknown>): Promise<PurchasingSegmentationResponse> {
    return this.request<PurchasingSegmentationResponse>('POST', Endpoints.PURCHASING_SEGMENTATION, data, true)
  }

  /**
   * Get purchasing segmentation dendrogram
   */
  async purchasingSegmentationDendrogram(data: Record<string, unknown>): Promise<Record<string, unknown>> {
    return this.request<Record<string, unknown>>('POST', Endpoints.PURCHASING_SEGMENTATION_DENDROGRAM, data, true)
  }

  /**
   * Get segment hierarchy chart
   */
  async segmentHierarchyChart(data: Record<string, unknown>): Promise<Record<string, unknown>> {
    return this.request<Record<string, unknown>>('POST', Endpoints.SEGMENT_HIERARCHY_CHART, data, true)
  }

  /**
   * Explore segment subsegments
   */
  async segmentSubsegmentExplore(data: Record<string, unknown>): Promise<Record<string, unknown>> {
    return this.request<Record<string, unknown>>('POST', Endpoints.SEGMENT_SUBSEGMENT_EXPLORE, data, true)
  }

  /**
   * Get segment cluster profiles
   */
  async segmentClusterProfiles(data: Record<string, unknown>): Promise<Record<string, unknown>> {
    return this.request<Record<string, unknown>>('POST', Endpoints.SEGMENT_CLUSTER_PROFILES, data, true)
  }

  // =========================================================================
  // REPORTING (ADMIN)
  // =========================================================================

  /**
   * Get segmentation report
   */
  async segmentationReport(data: Record<string, unknown>): Promise<SegmentationReportResponse> {
    return this.request<SegmentationReportResponse>('POST', Endpoints.SEGMENTATION_REPORT, data, true)
  }

  /**
   * Get segmentation report with i18n support
   */
  async segmentationReportI18n(data: Record<string, unknown>, lang = 'pt'): Promise<SegmentationReportResponse> {
    return this.request<SegmentationReportResponse>(
      'POST',
      `${Endpoints.SEGMENTATION_REPORT_I18N}?lang=${lang}`,
      data,
      true
    )
  }

  /**
   * Get segmentation report as JSON
   */
  async segmentationReportJson(data: Record<string, unknown>, lang = 'en'): Promise<Record<string, unknown>> {
    return this.request<Record<string, unknown>>(
      'POST',
      `${Endpoints.SEGMENTATION_REPORT_JSON}?lang=${lang}`,
      data,
      true
    )
  }

  // =========================================================================
  // ADMIN OPERATIONS
  // =========================================================================

  /**
   * Create a new customer
   */
  async createCustomer(data: CreateCustomerRequest): Promise<CustomerOut> {
    return this.requestAdmin<CustomerOut>('POST', Endpoints.ADMIN_CUSTOMERS, data as Record<string, unknown>)
  }

  /**
   * List all customers
   */
  async listCustomers(includeDisabled = false): Promise<CustomerListResponse> {
    const query = includeDisabled ? '?include_disabled=true' : ''
    return this.requestAdmin<CustomerListResponse>('GET', `${Endpoints.ADMIN_CUSTOMERS}${query}`)
  }

  /**
   * Get a customer by ID
   */
  async getCustomer(customerId: string): Promise<CustomerOut> {
    return this.requestAdmin<CustomerOut>('GET', `${Endpoints.ADMIN_CUSTOMERS}/${customerId}`)
  }

  /**
   * Update a customer
   */
  async updateCustomer(customerId: string, data: UpdateCustomerRequest): Promise<CustomerOut> {
    return this.requestAdmin<CustomerOut>('PUT', `${Endpoints.ADMIN_CUSTOMERS}/${customerId}`, data as Record<string, unknown>)
  }

  /**
   * Delete a customer
   */
  async deleteCustomer(customerId: string): Promise<void> {
    await this.requestAdmin<Record<string, unknown>>('DELETE', `${Endpoints.ADMIN_CUSTOMERS}/${customerId}`)
  }
}
