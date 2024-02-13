import getConfig from 'next/config';

export interface ServerRuntimeConfig {
  serverStartAt: string;
  projectRoot: string;
}
export const serverRuntimeConfig: ServerRuntimeConfig = getConfig().serverRuntimeConfig;
