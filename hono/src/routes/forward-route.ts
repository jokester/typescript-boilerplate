import { Hono } from 'hono';
import { MyBindings } from '../config';

export const forwardOpenaiRoute = new Hono<{Bindings: MyBindings}>({});

forwardOpenaiRoute.use('/*', async (c) => {
  const incomingHeaders = new Headers(c.req.raw.headers);
  console.debug('client req url', c.req.raw.url);

  const forwardUrl = new URL(c.req.raw.url);
  forwardUrl.host = 'api.openai.com';
  forwardUrl.protocol = 'https';
  forwardUrl.port = '';
  forwardUrl.pathname = forwardUrl.pathname.replace('/openai', '');

  const forwardHeaders: Record<string, string> = {
    host: 'api.openai.com',
  };
  ['accept-encoding', 'accept', 'accept-language', 'content-type', 'content-length'].forEach((h) => {
    if (incomingHeaders.has(h)) {
      forwardHeaders[h] = incomingHeaders.get(h)!;
    }
  });

  console.debug('origin req url', forwardUrl.toJSON());
  console.debug('origin req headers', forwardHeaders);

  return await fetch(forwardUrl.toString(), {
    method: c.req.raw.method,
    headers: {
      ...forwardHeaders,
      authorization: `Bearer ${c.env.OPENAPI_API_KEY}`,
    },
    body: c.req.raw.body,
  });
});
