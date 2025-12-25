import { EchoIntelError, AuthenticationError, ValidationError } from '../errors'

/**
 * Fetcher options
 */
export interface FetcherOptions {
  timeout?: number
  retry?: {
    attempts: number
    delay: number
  }
}

/**
 * Sleep for a given number of milliseconds
 */
function sleep(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms))
}

/**
 * HTTP fetcher with retry logic and error handling
 */
export async function fetcher<T>(
  url: string,
  options: RequestInit & FetcherOptions
): Promise<T> {
  const { timeout = 30000, retry = { attempts: 3, delay: 100 }, ...fetchOptions } = options

  let lastError: Error | undefined

  for (let attempt = 1; attempt <= retry.attempts; attempt++) {
    try {
      const controller = new AbortController()
      const timeoutId = setTimeout(() => controller.abort(), timeout)

      const response = await fetch(url, {
        ...fetchOptions,
        signal: controller.signal,
      })

      clearTimeout(timeoutId)

      if (!response.ok) {
        const data = await response.json().catch(() => ({})) as Record<string, unknown>

        if (response.status === 401 || response.status === 403) {
          throw new AuthenticationError(
            (data.detail as string) || (data.message as string) || 'Authentication failed',
            response.status as 401 | 403
          )
        }

        if (response.status === 422) {
          throw new ValidationError(
            (data.detail as string) || (data.message as string) || 'Validation failed',
            (data.errors as Record<string, string[]>) || {}
          )
        }

        throw new EchoIntelError(
          (data.detail as string) || (data.message as string) || `Request failed with status ${response.status}`,
          response.status,
          data
        )
      }

      return await response.json() as T
    } catch (error) {
      lastError = error as Error

      // Do not retry authentication or validation errors
      if (error instanceof AuthenticationError || error instanceof ValidationError) {
        throw error
      }

      // Do not retry on abort (timeout)
      if (error instanceof Error && error.name === 'AbortError') {
        throw new EchoIntelError(`Request timed out after ${timeout}ms`, 408)
      }

      if (attempt < retry.attempts) {
        await sleep(retry.delay)
      }
    }
  }

  throw lastError ?? new EchoIntelError('Request failed after all retry attempts')
}
