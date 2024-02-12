import { TRPC_ERROR_CODE_KEY } from '@trpc/server/rpc';

const httpStatusToTRPCCode: Record<number, TRPC_ERROR_CODE_KEY> = {
  400: 'BAD_REQUEST',
  401: 'UNAUTHORIZED',
  403: 'FORBIDDEN',
  404: 'NOT_FOUND',
  405: 'METHOD_NOT_SUPPORTED',
  408: 'TIMEOUT',
  409: 'CONFLICT',
  412: 'PRECONDITION_FAILED',
  413: 'PAYLOAD_TOO_LARGE',
  422: 'UNPROCESSABLE_CONTENT',
  429: 'TOO_MANY_REQUESTS',
  499: 'CLIENT_CLOSED_REQUEST',
  500: 'INTERNAL_SERVER_ERROR',
  501: 'NOT_IMPLEMENTED',
};

interface ApiErrorOptions {
  message: string;
  // TODO: do we need this?
  httpStatus?: number;
}

/**
 * Throwing this error in API handler to return custom error response
 */
export class ApiError extends Error {
  static codeFromHttpStatus(httpStatus: number): TRPC_ERROR_CODE_KEY {
    return httpStatusToTRPCCode[httpStatus] || 'INTERNAL_SERVER_ERROR';
  }
  constructor(readonly _options: ApiErrorOptions) {
    super(_options.message);
  }
}
