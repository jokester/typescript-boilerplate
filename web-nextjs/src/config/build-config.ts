import { inServer } from './runtime-config';

export const isDevBuild = !!process.env.NEXT_DEV;

export const buildConfig = {
  builtAt: process.env.builtAt,
  NEXT_DEV: process.env.NEXT_DEV,
} as const;

console.debug(
  `buildConfig as seen from ${isDevBuild ? 'dev' : 'prod'} / ${inServer ? 'server' : 'client'}`,
  buildConfig,
);
