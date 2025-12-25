import { EchoIntelError } from './EchoIntelError'

/**
 * Validation error (HTTP 422)
 */
export class ValidationError extends EchoIntelError {
  public readonly errors: Record<string, string[]>

  constructor(message: string, errors: Record<string, string[]>) {
    super(message, 422, { errors })
    this.name = 'ValidationError'
    this.errors = errors

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, ValidationError)
    }
  }
}
