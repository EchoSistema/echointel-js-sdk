/**
 * NPS response
 */
export interface NpsResponse {
  npsScore: number
  promoters: number
  passives: number
  detractors: number
  totalResponses: number
  interpretation: string
  [key: string]: unknown
}
