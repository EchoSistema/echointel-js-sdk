/**
 * Journey transition
 */
export interface Transition {
  fromState: string
  toState: string
  probability: number
  [key: string]: unknown
}

/**
 * Markov journey response
 */
export interface MarkovResponse {
  /** State transitions */
  transitions: Transition[]
  /** Drop-off probabilities per state */
  dropOffProbs: Record<string, number>
  /** Human-readable interpretation */
  interpretation: string
}

/**
 * Journey path
 */
export interface JourneyPath {
  path: string[]
  count: number
  percentage: number
  [key: string]: unknown
}

/**
 * Journey sequences response
 */
export interface SequenceResponse {
  /** Common paths */
  paths: JourneyPath[]
  /** Human-readable interpretation */
  interpretation: string
  [key: string]: unknown
}
