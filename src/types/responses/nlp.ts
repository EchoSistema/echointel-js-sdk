/**
 * NLP analysis response
 */
export interface NlpAnalysisResponse {
  text: string
  entities: Array<{
    text: string
    label: string
    start: number
    end: number
  }>
  keywords: string[]
  summary: string
  [key: string]: unknown
}

/**
 * Sanitize text response
 */
export interface SanitizeTextResponse {
  originalText: string
  sanitizedText: string
  removedPatterns: string[]
  [key: string]: unknown
}
