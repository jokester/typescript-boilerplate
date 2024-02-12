import { TRPCError } from '@trpc/server';
import { TRPC_ERROR_CODE_KEY } from '@trpc/server/rpc';

/**
 * Throwing this error in API handler to return custom error response
 */
export class ClientBad extends TRPCError {
  constructor(message: string, code: TRPC_ERROR_CODE_KEY = 'BAD_REQUEST', cause?: unknown) {
    super({ message, code, cause });
  }
}
