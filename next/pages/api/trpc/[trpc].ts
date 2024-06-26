import * as trpcNext from '@trpc/server/adapters/next';
import { appRouter } from '../../../server/api';
import { ZodError } from 'zod';
import { createDebugLogger } from '../../../shared/logger';
import { withApiRequestLog } from '../../../server/request-logger';

import { ApiReqContext } from '../../../server/api/_base';

const debugLogger = createDebugLogger(__filename);
// export API handler
// @see https://trpc.io/docs/api-handler
const handler = trpcNext.createNextApiHandler({
  router: appRouter,

  async createContext(ctx): Promise<ApiReqContext> {
    // NOTE this is a good place to extract stuff from req/res for use in API handlers
    return {
      xCustomHeader: ctx.req.headers['x-custom-header'] as string,
      userAgent: ctx.req.headers['user-agent'] as string,
      requestId: (ctx.req as any).reqId,
    };
  },

  responseMeta({ctx, errors, paths, type}) {
    // NOTE this is where you can tune http headers
    return {
      headers: {
        'x-extra-server-header': 'my-custom-server-header',
        'x-client-ua': ctx?.userAgent,
      },
    };
  },

  onError({error, type, path, input, ctx, req}) {
    debugLogger('error in trpc procedure', path, input, error);
    if (error.cause instanceof ZodError) {
      // rewrite error message to be more user-friendly
      const messages = error.cause.errors.map((err) => `${err.message} at ${err.path.join('.')}`);
      error.message = `zod validation error: ${messages.join(', ')}`;
    }
  },

  batching: {
    enabled: false,
  },
});

export default withApiRequestLog(handler);
