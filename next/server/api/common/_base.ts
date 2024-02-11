import { initTRPC } from '@trpc/server';
import superjson from 'superjson';

export const t = initTRPC.context<object>().create({
  transformer: superjson,
});
