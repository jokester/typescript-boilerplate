import { t } from './_base';
import { serverRuntimeConfig } from '../runtime-config';
import { createDebugLogger } from '../../shared/logger';

const debugLogger = createDebugLogger(__filename);

export const appRouter = t.router({
  siteMeta: t.router({
    getSiteInfo: t.procedure.query((input) => {
      debugLogger('getSiteInfo', input.ctx);
      return {
        serverStartAt: new Date(serverRuntimeConfig.serverStartAt),
        userAgent: input.ctx.userAgent,
      };
    }),
  }),
});

// Export type router type signature,
// NOTE frontend code should only import this type, not appRouter the value
export type AppRouter = typeof appRouter;
