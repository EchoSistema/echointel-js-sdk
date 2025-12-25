/**
 * Daily inventory record
 */
export interface DailyInventoryRecord {
  date: string
  quantity: number
  value: number
  [key: string]: unknown
}

/**
 * Product details
 */
export interface ProductDetails {
  productCode: string
  productName: string
  [key: string]: unknown
}

/**
 * Processing information
 */
export interface ProcessingInfo {
  startTime: string
  endTime: string
  durationSeconds: number
  [key: string]: unknown
}

/**
 * Inventory history response
 */
export interface InventoryHistoryResponse {
  /** Daily inventory records */
  dailyInventory: DailyInventoryRecord[]
  /** Inventory analysis data */
  inventoryAnalysis: Record<string, unknown>
  /** Inventory aging data */
  inventoryAging: Record<string, unknown>
  /** Product details */
  productDetails: ProductDetails
  /** Processing information */
  processingInfo: ProcessingInfo
}

/**
 * Inventory optimization response
 */
export interface InventoryOptimizationResponse {
  [key: string]: unknown
}
