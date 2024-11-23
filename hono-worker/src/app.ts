import { Hono } from 'hono';
import { serveStatic } from 'hono/cloudflare-workers';
// @ts-expect-error
import manifest from '__STATIC_CONTENT_MANIFEST';
import { jsonRoute } from './routes/json-route';
import { MyBindings } from './config';
import { forwardOpenaiRoute } from './routes/forward-route';

const app = new Hono<{Bindings: MyBindings}>();

app.get(
  '/*',
  serveStatic({
    root: '.',
    manifest,
  }),
);

app.route('/api/*', jsonRoute);
app.route('/openai/*', forwardOpenaiRoute);

// URL rewrite for SPA, as the last route
app.get(
  '/*',
  serveStatic({
    root: '.',
    manifest,
    rewriteRequestPath(reqPath) {
      return '/index.html';
    },
  }),
);

export default app;
