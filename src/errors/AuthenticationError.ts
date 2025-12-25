import { EchoIntelError } from './EchoIntelError'

/**
 * Authentication error (HTTP 401/403)
 */
export class AuthenticationError extends EchoIntelError {
  constructor(message: string, statusCode: 401 | 403 = 401) {
    super(message, statusCode)
    this.name = 'AuthenticationError'

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, AuthenticationError)
    }
  }
}
