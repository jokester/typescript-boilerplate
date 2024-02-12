import { httpLink } from '@trpc/client';
import { createTRPCNext } from '@trpc/next';
import type { AppRouter } from '../../server/api';
import { inBrowser } from '../../shared/runtime-config';
import superjson from 'superjson';
function getBaseUrl() {
  if (inBrowser) {
    // browser should use relative path
    return '';
  }
  return 'not-http://undefined.internal/api_base_url_not_set_for_server_code';
}

const links = [
  httpLink({
    url: `${getBaseUrl()}/api/trpc`,
    headers() {
      return {
        'x-custom-header': 'hello',
      };
    },
  }),
];

export const trpcClient = createTRPCNext<AppRouter>({
  config(opts) {
    return {
      links,
      transformer: superjson,
    };
  },
  /**
   * @link https://trpc.io/docs/v11/ssr
   **/
  ssr: false,
});
