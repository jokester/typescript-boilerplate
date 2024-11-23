import { Hono } from 'hono';
import { serve } from '@hono/node-server';
import debug from 'debug';

debug.inspectOpts!.depth = 100;
const logger = debug('node-server');

const app = new Hono();
app.all('*', async (c) => {
  const reqUrl = c.req.raw.url;
  const headers = c.req.header();
  const reqBody = await c.req.json().catch(e => 'not json');
  logger({reqUrl, headers, reqBody});
  return c.text('It works!');
});
const server = serve(app, (info) => {
  console.log(`Listening on http://localhost:${info.port}`); // Listening on http://localhost:3000
});
