/**
 * EchoIntel API Endpoints
 */
export const Endpoints = {
  BASE_URL: 'https://ai.echosistema.live',

  // System
  HEALTH: '/health',

  // Forecasting
  FORECAST_REVENUE: '/api/forecast_revenue',
  FORECAST_COST: '/api/forecast_cost',
  FORECAST_COST_IMPROVED: '/api/forecast_cost_improved',
  FORECAST_UNITS: '/api/forecast_units',
  FORECAST_COST_TOTUS: '/api/forecast_cost_totus',

  // Inventory
  INVENTORY_OPTIMIZATION: '/api/inventory_optimization',
  INVENTORY_HISTORY_IMPROVED: '/api/inventory_history_improved',

  // Customer Analytics
  CUSTOMER_SEGMENTATION: '/api/customer_segmentation',
  CUSTOMER_FEATURES: '/api/customer_features',
  CUSTOMER_LOYALTY: '/api/customer_loyalty',
  CUSTOMER_RFM: '/api/customer_rfm',
  CUSTOMER_CLV_FEATURES: '/api/customer_clv_features',
  CUSTOMER_CLV_FORECAST: '/api/customer_clv_forecast',

  // Churn
  CHURN_RISK: '/api/churn_risk',
  CHURN_LABEL: '/api/churn_label',

  // NPS
  NPS: '/api/nps',

  // Propensity
  PROPENSITY_BUY_PRODUCT: '/api/propensity_buy_product',
  PROPENSITY_RESPOND_CAMPAIGN: '/api/propensity_respond_campaign',
  PROPENSITY_UPGRADE_PLAN: '/api/propensity_upgrade_plan',

  // Recommendations
  RECOMMEND_USER_ITEMS: '/api/recommend_user_items',
  RECOMMEND_SIMILAR_ITEMS: '/api/recommend_similar_items',

  // Cross-Sell & Upsell
  CROSS_SELL_MATRIX: '/api/cross_sell_matrix',
  UPSELL_SUGGESTIONS: '/api/upsell_suggestions',

  // Dynamic Pricing
  DYNAMIC_PRICING_RECOMMEND: '/api/dynamic_pricing_recommend',

  // Sentiment
  SENTIMENT_REPORT: '/api/sentiment_report',
  SENTIMENT_REALTIME: '/api/sentiment_realtime',

  // Anomaly Detection
  ANOMALY_TRANSACTIONS: '/api/anomaly_transactions',
  ANOMALY_ACCOUNTS: '/api/anomaly_accounts',
  ANOMALY_GRAPH: '/api/anomaly_graph',

  // Credit Risk
  CREDIT_RISK_SCORE: '/api/credit_risk_score',
  CREDIT_RISK_EXPLAIN: '/api/credit_risk_explain',

  // Marketing Attribution
  CHANNEL_ATTRIBUTION: '/api/channel_attribution',
  UPLIFT_MODEL: '/api/uplift_model',

  // Customer Journey
  JOURNEY_MARKOV: '/api/journey_markov',
  JOURNEY_SEQUENCES: '/api/journey_sequences',

  // NLP
  NLP_ANALYSIS: '/api/nlp_analisys',
  NLP_ANALYSIS_EN: '/api/nlp_analisys_en',
  NLP_EXCESS_INVENTORY_REPORT: '/api/nlp_openai_excess_inventory_report',
  SANITIZE_TEXT: '/api/sanitize_text',

  // Advanced Segmentation (Admin)
  PURCHASING_SEGMENTATION: '/api/purchasing_segmentation',
  PURCHASING_SEGMENTATION_DENDROGRAM: '/api/purchasing_segmentation_dendrogram',
  SEGMENT_HIERARCHY_CHART: '/api/segment_hierarchy_chart',
  SEGMENT_SUBSEGMENT_EXPLORE: '/api/segment_subsegment_explore',
  SEGMENT_CLUSTER_PROFILES: '/api/segment_cluster_profiles',

  // Reporting (Admin)
  SEGMENTATION_REPORT: '/api/segmentation_report',
  SEGMENTATION_REPORT_I18N: '/api/segmentation_report_i18n',
  SEGMENTATION_REPORT_JSON: '/api/segmentation_report_json',

  // Admin
  ADMIN_CUSTOMERS: '/admin/customers',
} as const

export type EndpointKey = keyof typeof Endpoints
