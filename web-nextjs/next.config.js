/* eslint @typescript-eslint/no-var-requires: 0 */
const { withPlugins, optional } = require('next-compose-plugins');

const { PHASE_DEVELOPMENT_SERVER, PHASE_PRODUCTION_BUILD } = require('next/constants');

const nextConf = {
  analyzeServer: ['server', 'both'].includes(process.env.BUNDLE_ANALYZE),
  analyzeBrowser: ['browser', 'both'].includes(process.env.BUNDLE_ANALYZE),
  bundleAnalyzerConfig: {
    server: {
      analyzerMode: 'static',
      // reportFilename: '../bundles/server.html'
    },
    browser: {
      analyzerMode: 'static',
      // reportFilename: '../bundles/client.html'
    },
  },

  env: {
    // becomes process.env.SOME_CONSTANT : boolean
    SOME_CONSTANT: 'SOME_CONSTANT',
  },

  devIndicators: {
    autoPrerender: false,
  },

  // see https://nextjs.org/docs/#customizing-webpack-config
  webpack(config, { buildId, dev, isServer }) {
    const webpack = require('webpack');
    config.plugins.push(
      new webpack.DefinePlugin({
        // becomes process.env.NEXT_DEV : boolean
        'process.env.NEXT_DEV': JSON.stringify(!!dev),
        'process.env.NEXT_SERVER': JSON.stringify(!!isServer),
      }),
    );

    config.plugins = config.plugins.map((p) => {
      return p;
    });

    config.node = {
      // allow use of __file / __dirname
      ...config.node,
      __filename: true,
    };

    return config;
  },
};

module.exports = withPlugins(
  [
    [optional(() => require('next-optimized-images')), { optimizeImages: false }, [PHASE_PRODUCTION_BUILD]],
    [optional(() => require('@zeit/next-bundle-analyzer')), {}, [PHASE_PRODUCTION_BUILD]],
    [optional(() => require('@zeit/next-source-maps')), {}, [PHASE_PRODUCTION_BUILD]],
    [
      optional(() =>
        require('next-transpile-modules')([
          /* ES modules used in server code */
        ]),
      ),
      {},
      [PHASE_DEVELOPMENT_SERVER, PHASE_PRODUCTION_BUILD],
    ],
  ],
  nextConf,
);
