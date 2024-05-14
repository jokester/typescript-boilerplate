import { initTRPC } from '@trpc/server';
import superjson from 'superjson';
import { ZodError } from 'zod';

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

  // serialize TRPCError into response
  errorFormatter(opts) {
    const {shape, error} = opts;
    return {
      ...shape,
      // by default `shape.data` is serialized TRPCError?
      data: {
        ...shape.data,
        zodError: error.code === 'BAD_REQUEST' && error.cause instanceof ZodError ? error.cause.flatten() : null,
      },
    };
  },
});
