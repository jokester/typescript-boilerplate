import { Hono } from 'hono';

export const jsonRoute = new Hono();

jsonRoute.get('/', (c) => {
  return c.json({message: 'Hello!', path: c.req.path});
});
