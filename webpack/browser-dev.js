/**
 * webpack config (dev)
 */
const webpackMerge = require('webpack-merge');
const path = require('path');

module.exports = webpackMerge([
  require('./common'),
  require('./common.dev'),
  {
    entry: {
        'browser-entrypoint': path.join(__dirname, '..', 'lib-ts', 'browser-entrypoint.ts')
    },
    output: {
        path: path.join(__dirname, '..', 'dev'),
        filename: '[name].js',
        sourceMapFilename: '[name].map',
    },
  }
]);
