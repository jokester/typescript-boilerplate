import getConfig from 'next/config';
interface ServiceRuntimeConfig {
  SOME_CONSTANT: string;
  NEXT_DEV: boolean;
}
export const serviceRuntimeConfig: ServiceRuntimeConfig = getConfig().serverRuntimeConfig;
export const inBrowser = typeof window !== 'undefined';
export const inServer = !inBrowser;

console.debug('serverRuntimeConfig', serviceRuntimeConfig);
