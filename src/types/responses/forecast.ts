/**
 * Forecast value with year-month and value
 */
export interface ForecastValue {
  /** Year and month in format 'YYYY-MM' */
  yearMonth: string
  /** Forecasted value */
  value: number
}

/**
 * Forecast evaluation metrics
 */
export interface ForecastEvaluationMetrics {
  /** Root Mean Square Error */
  rmse: number | null
  /** Mean Absolute Error */
  mae: number | null
  /** R-squared */
  r2: number | null
  /** Average daily sales */
  averageDailySales: number | null
  /** Human-readable interpretation */
  interpretation: string
}

/**
 * Forecast data containing calendar and business forecasts
 */
export interface ForecastData {
  /** Calendar-based forecast values */
  calendar: ForecastValue[]
  /** Business-based forecast values */
  business: ForecastValue[]
}

/**
 * Forecast algorithm result for a single product
 */
export interface ForecastAlgorithmResult {
  /** Product code */
  productCode: string
  /** Best algorithm used */
  bestAlgorithm: string
  /** Evaluation metrics */
  evaluationMetrics: ForecastEvaluationMetrics
  /** Forecast data */
  forecast: ForecastData
}

/**
 * Forecast units response
 */
export interface ForecastUnitsResponse {
  /** Forecast period */
  forecastPeriod: number
  /** Array of forecast results by algorithm */
  forecasts: ForecastAlgorithmResult[]
  /** Execution time in seconds */
  executionTimeSeconds: number
}

/**
 * Generic forecast response (for revenue/cost endpoints)
 */
export interface ForecastResponse {
  [key: string]: unknown
}
