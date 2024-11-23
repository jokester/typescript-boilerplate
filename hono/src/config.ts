import type { Bindings } from 'hono/dist/types/types';

export interface MyBindings extends Bindings {
  OPENAPI_API_KEY: string;
}
