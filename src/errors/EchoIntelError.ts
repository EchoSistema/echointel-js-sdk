/**
 * Base error class for EchoIntel SDK
 */
export class EchoIntelError extends Error {
  public readonly statusCode?: number
  public readonly context?: Record<string, unknown>

  constructor(
    message: string,
    statusCode?: number,
    context?: Record<string, unknown>
  ) {
    super(message)
    this.name = 'EchoIntelError'
    this.statusCode = statusCode
    this.context = context

    // Maintains proper stack trace for where error was thrown (only in V8)
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, EchoIntelError)
    }
  }
}
