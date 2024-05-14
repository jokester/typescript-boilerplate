import { t } from './_base';
import { serverRuntimeConfig } from '../runtime-config';
import { createDebugLogger } from '../../shared/logger';
import { z } from 'zod';
import { ApiError } from './errors';
import { TRPCError } from '@trpc/server';

const debugLogger = createDebugLogger(__filename);

const getParamSchema = z.object({
  showUserAgent: z.boolean().optional(),
});
const postBodySchema = z.object({
  triggerError: z.boolean(),
  trpcCode: z.enum(['BAD_REQUEST', 'CONFLICT'] as const).optional(),
  httpStatusCode: z.number().optional(),
});

export const appRouter = t.router({
  siteMeta: t.router({
    getSiteInfo: t.procedure.input(getParamSchema).query((input) => {
      debugLogger('getSiteInfo', input.ctx);
      return {
        serverStartAt: new Date(serverRuntimeConfig.serverStartAt),
        ...(input.input.showUserAgent && {
          userAgent: input.ctx.userAgent,
        }),
      };
    }),
    mutationExample: t.procedure.input(postBodySchema).mutation((input) => {
      if (input.input.triggerError) {
        const {trpcCode, httpStatusCode} = input.input;
        if (httpStatusCode) {
          throw new ApiError({message: `asked by client`, httpStatus: httpStatusCode});
        } else if (trpcCode) {
          throw new TRPCError({message: `asked by client`, code: trpcCode, cause: new Error(`user asked`)});
        } else {
          throw new Error(`generic server error`);
        }
      }
      return {
        ok: true,
      };
    }),
  }),
});

// Export type router type signature,
// NOTE frontend code should only import this type, not appRouter the value
export type AppRouter = typeof appRouter;
