/**
 * Retry configuration
 */
export interface RetryConfig {
  /** Number of retry attempts */
  attempts: number
  /** Delay between retries in milliseconds */
  delay: number
}

/**
 * Default retry configuration
 */
export const DEFAULT_RETRY_CONFIG: RetryConfig = {
  attempts: 3,
  delay: 100,
}

/**
 * Sleep for a given number of milliseconds
 */
export function sleep(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms))
}

/**
 * Execute a function with retry logic
 *
 * @param fn - The async function to execute
 * @param config - Retry configuration
 * @param shouldRetry - Function to determine if retry should happen (default: always retry)
 * @returns The result of the function
 */
export async function withRetry<T>(
  fn: () => Promise<T>,
  config: RetryConfig = DEFAULT_RETRY_CONFIG,
  shouldRetry: (error: Error) => boolean = () => true
): Promise<T> {
  let lastError: Error | undefined

  for (let attempt = 1; attempt <= config.attempts; attempt++) {
    try {
      return await fn()
    } catch (error) {
      lastError = error as Error

      if (!shouldRetry(lastError)) {
        throw lastError
      }

      if (attempt < config.attempts) {
        await sleep(config.delay)
      }
    }
  }

  throw lastError ?? new Error('Retry failed')
}
