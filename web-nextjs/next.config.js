/* eslint @typescript-eslint/no-var-requires: 0 */
const { withPlugins, optional } = require('next-compose-plugins');

const { PHASE_DEVELOPMENT_SERVER, PHASE_PRODUCTION_BUILD } = require('next/constants');

const nextConf = {
  poweredByHeader: false,
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
  webpack(config, { buildId, dev, isServer, webpack }) {
    config.plugins.push(
      new webpack.DefinePlugin({
        // becomes process.env.NEXT_DEV : boolean
        'process.env.NEXT_DEV': JSON.stringify(!!dev),
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

  images: {
    disableStaticImages: true,
  },

  webpack5: true,

  // productionBrowserSourceMaps: true,

  future: {},
};

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: !!process.env.BUNDLE_ANALYZE,
});

module.exports = withPlugins(
  [
    [withBundleAnalyzer], // no idea how to make it optional
    [
      optional(() => require('next-optimized-images')),
      { optimizeImages: false },
      [PHASE_DEVELOPMENT_SERVER, PHASE_PRODUCTION_BUILD],
    ], // required after { disableStaticImages: true }
    [
      optional(() =>
        require('next-transpile-modules')([
          'lodash-es',
          /* ES modules used in server code */
        ]),
      ),
      {},
      [PHASE_DEVELOPMENT_SERVER, PHASE_PRODUCTION_BUILD],
    ],
  ],
  nextConf,
);
