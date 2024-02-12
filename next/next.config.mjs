import { PHASE_DEVELOPMENT_SERVER, PHASE_PRODUCTION_BUILD } from 'next/constants.js';

/**
 * when in problem, try to sync with {@link https://github.com/vercel/next.js/tree/canary/packages/create-next-app/templates/typescript}
 * @type {import('next').NextConfig}
 */
const nextConf = {
  poweredByHeader: false,

  /**
   * runtime server-only configuration
   * see https://nextjs.org/docs/pages/api-reference/next-config-js/runtime-configuration
   * @type {import('./server/runtime-config').ServerRuntimeConfig}
   */
  serverRuntimeConfig: {
    serverStartAt: new Date().toISOString(),
  },
  /**
   * runtime shared configuration
   * see https://nextjs.org/docs/pages/api-reference/next-config-js/runtime-configuration
   * @type {import('./shared/runtime-config').PublicRuntimeConfig}
   */
  publicRuntimeConfig: {
    // TODO
  },
  /**
   * build-time configuration
   */
  env: {
    // values defined get bundled when `next build`
    builtAt: new Date().toISOString(),
  },
  // see https://nextjs.org/docs/#customizing-webpack-config
  webpack(config, { buildId, dev, isServer, webpack }) {
    config.plugins.push(
      new webpack.DefinePlugin({
        /**
         * build-time configuration
         */
        'process.env.NEXT_DEV': JSON.stringify(!!dev),
      }),
    );

    config.node = {
      // allow use of __file / __dirname
      ...config.node,
      __filename: true,
    };
    return config;
  },

  transpilePackages: ['lodash-es', '@jokester/ts-commonutil'],

  typescript: {
    ignoreBuildErrors: true, // types get checked with lint
  },

  images: {},

  experimental: {
    webpackBuildWorker: true,
  },

  productionBrowserSourceMaps: true,
  reactStrictMode: true,
};

export default (phase, { defaultConfig }) => {
  /**
   * @type {import('next').NextConfig}
   */
  let merged = { ...nextConf };

  if (phase === PHASE_PRODUCTION_BUILD) {
    merged = require('@next/bundle-analyzer')({ enabled: true, openAnalyzer: false })(merged);
  }

  return merged;
};
