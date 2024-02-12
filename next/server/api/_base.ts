import { initTRPC } from '@trpc/server';
import superjson from 'superjson';

/**
 * A custom request context for all API requests
 */
export interface ApiReqContext {
  // we are using a custom header for demonstration
  // in reality, user sessions can go here too
  xCustomHeader?: string;
  userAgent?: string;
  requestId?: string;
}

export const t = initTRPC.context<ApiReqContext>().create({
  transformer: superjson,
  // TODO understand tRPC error formatting
  // errorFormatter(opt) {}
});
