import getConfig from 'next/config';

export interface ServerRuntimeConfig {
  serverStartAt: string;
}
export const serverRuntimeConfig: ServerRuntimeConfig = getConfig().serverRuntimeConfig;
