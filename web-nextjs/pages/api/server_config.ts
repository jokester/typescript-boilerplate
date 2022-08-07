import { createApi, ClientBad } from '../../src/server/nextkit_server';
import { serviceRuntimeConfig } from '../../src/config/runtime-config';

export default createApi({
  async POST({ ctx }) {
    throw new ClientBad(400, 'POST not allowed');
  },
  async GET({ ctx }) {
    return {
      ip: ctx.ip,
      ...serviceRuntimeConfig,
    };
  },
});
