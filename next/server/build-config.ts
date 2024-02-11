import { inServer } from '../shared/runtime-config';
import { createDebugLogger } from '../shared/logger';

export const isDevBuild = !!process.env.NEXT_DEV;

export const buildConfig = {
  // NOTE this should match next.config.js
  builtAt: process.env.builtAt,
  NEXT_DEV: process.env.NEXT_DEV,
} as const;

const debugLogger = createDebugLogger(__filename);

debugLogger(`buildConfig as seen from ${isDevBuild ? 'dev' : 'prod'} / ${inServer ? 'server' : 'client'}`, buildConfig);
