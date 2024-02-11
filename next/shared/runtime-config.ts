import getConfig from 'next/config';
import { createDebugLogger } from './logger';
const debugLogger = createDebugLogger(__filename);

export interface PublicRuntimeConfig {
  // NOTE this should match next.config.js
}
export const publicRuntimeConfig: PublicRuntimeConfig = getConfig().publicRuntimeConfig;
export const inBrowser = typeof window !== 'undefined';
export const inServer = !inBrowser;

debugLogger('publicRuntimeConfig', publicRuntimeConfig);
