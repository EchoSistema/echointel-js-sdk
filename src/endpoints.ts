/**
 * EchoIntel API Endpoints
 */
export const Endpoints = {
  BASE_URL: 'https://ai.echosistema.dev',

  // System
  HEALTH: '/health',

  // Forecasting
  FORECAST_REVENUE: '/api/forecast-revenue',
  FORECAST_COST: '/api/forecast-cost',
  FORECAST_COST_IMPROVED: '/api/forecast-cost-improved',
  FORECAST_UNITS: '/api/forecast-units',
  FORECAST_COST_TOTUS: '/api/forecast-cost-totus',

  // Inventory
  INVENTORY_OPTIMIZATION: '/api/inventory-optimization',
  INVENTORY_HISTORY_IMPROVED: '/api/inventory-history-improved',

  // Customer Analytics
  CUSTOMER_SEGMENTATION: '/api/customer-segmentation',
  CUSTOMER_FEATURES: '/api/customer-features',
  CUSTOMER_LOYALTY: '/api/customer-loyalty',
  CUSTOMER_RFM: '/api/customer-rfm',
  CUSTOMER_CLV_FEATURES: '/api/customer-clv-features',
  CUSTOMER_CLV_FORECAST: '/api/customer-clv-forecast',

  // Churn
  CHURN_RISK: '/api/churn-risk',
  CHURN_LABEL: '/api/churn-label',

  // NPS
  NPS: '/api/nps',

  // Propensity
  PROPENSITY_BUY_PRODUCT: '/api/propensity-buy-product',
  PROPENSITY_RESPOND_CAMPAIGN: '/api/propensity-respond-campaign',
  PROPENSITY_UPGRADE_PLAN: '/api/propensity-upgrade-plan',

  // Recommendations
  RECOMMEND_USER_ITEMS: '/api/recommend-user-items',
  RECOMMEND_SIMILAR_ITEMS: '/api/recommend-similar-items',

  // Cross-Sell & Upsell
  CROSS_SELL_MATRIX: '/api/cross-sell-matrix',
  UPSELL_SUGGESTIONS: '/api/upsell-suggestions',

  // Dynamic Pricing
  DYNAMIC_PRICING_RECOMMEND: '/api/dynamic-pricing-recommend',

  // Sentiment
  SENTIMENT_REPORT: '/api/sentiment-report',
  SENTIMENT_REALTIME: '/api/sentiment-realtime',

  // Anomaly Detection
  ANOMALY_TRANSACTIONS: '/api/anomaly-transactions',
  ANOMALY_ACCOUNTS: '/api/anomaly-accounts',
  ANOMALY_GRAPH: '/api/anomaly-graph',

  // Credit Risk
  CREDIT_RISK_SCORE: '/api/credit-risk-score',
  CREDIT_RISK_EXPLAIN: '/api/credit-risk-explain',

  // Marketing Attribution
  CHANNEL_ATTRIBUTION: '/api/channel-attribution',
  UPLIFT_MODEL: '/api/uplift-model',

  // Customer Journey
  JOURNEY_MARKOV: '/api/journey-markov',
  JOURNEY_SEQUENCES: '/api/journey-sequences',

  // NLP
  NLP_ANALYSIS: '/api/nlp-analisys',
  NLP_ANALYSIS_EN: '/api/nlp-analisys-en',
  NLP_EXCESS_INVENTORY_REPORT: '/api/nlp-openai-excess-inventory-report',
  SANITIZE_TEXT: '/api/sanitize-text',

  // Advanced Segmentation (Admin)
  PURCHASING_SEGMENTATION: '/api/purchasing-segmentation',
  PURCHASING_SEGMENTATION_DENDROGRAM: '/api/purchasing-segmentation-dendrogram',
  SEGMENT_HIERARCHY_CHART: '/api/segment-hierarchy-chart',
  SEGMENT_SUBSEGMENT_EXPLORE: '/api/segment-subsegment-explore',
  SEGMENT_CLUSTER_PROFILES: '/api/segment-cluster-profiles',

  // Reporting (Admin)
  SEGMENTATION_REPORT: '/api/segmentation-report',
  SEGMENTATION_REPORT_I18N: '/api/segmentation-report-i18n',
  SEGMENTATION_REPORT_JSON: '/api/segmentation-report-json',

  // Async ML Jobs
  JOBS: '/api/jobs',
  DLQ_MESSAGES: '/api/dlq/messages',
  DLQ_RETRY: '/api/dlq/retry',

  // Admin
  ADMIN_CUSTOMERS: '/admin/customers',
} as const

export type EndpointKey = keyof typeof Endpoints
