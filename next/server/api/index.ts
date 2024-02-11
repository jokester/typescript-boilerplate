import { t } from './common/_base';
import { serverRuntimeConfig } from '../runtime-config';

export const appRouter = t.router({
  siteMeta: t.router({
    getSiteInfo: t.procedure.query(({}) => {
      return {
        serverStartAt: new Date(serverRuntimeConfig.serverStartAt),
      };
    }),
  }),
});

// Export type router type signature,
// NOTE frontend code should only import this type, not appRouter the value
export type AppRouter = typeof appRouter;
