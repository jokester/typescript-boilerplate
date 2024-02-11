import * as trpcNext from '@trpc/server/adapters/next';
import { appRouter } from '../../../server/api';
import { ZodError } from 'zod';
import { TRPCError } from '@trpc/server';
import { createDebugLogger } from '../../../shared/logger';
import { ClientBad } from '../../../server/api/errors';
import { withApiRequestLog } from '../../../server/request_logger';
const logger = createDebugLogger(__filename);
// export API handler
// @see https://trpc.io/docs/api-handler
const handler = trpcNext.createNextApiHandler({
  router: appRouter,

  createContext: (ctx) => ({
    // NOTE this is a good place to extract stuff from req/res and expose to API handlers
  }),

  responseMeta({ ctx, errors, paths, type }) {
    // NOTE this is where you can tune http headers
    if (true) {
      return {
        headers: {
          'cache-control': 'no-cache',
        },
      };
    }
  },

  onError({ error, type, path, input, ctx, req }) {
    if (error.cause instanceof ZodError) {
      logger('trpc error', error.cause, path, input, ctx);
      // we could rewrite error code / message here
      throw new TRPCError({ message: error.cause.name, code: 'BAD_REQUEST' });
    } else if (error instanceof ClientBad) {
      logger('client bad', path, input, ctx);
    } else {
      logger('error', error, type, path, ctx);
    }
  },

  batching: {
    enabled: true,
  },
});

export default withApiRequestLog(handler);
