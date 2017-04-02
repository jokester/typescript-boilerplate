/**
 * webpack config (production)
 */
const webpackMerge = require('webpack-merge');
const path = require('path');

module.exports = webpackMerge([
  require('./common'),
  require('./common.prod'),
  {
    entry: {
        'browser-entrypoint': path.join(__dirname, '..', 'lib-ts', 'browser-entrypoint.ts')
    },
    output: {
        path: path.join(__dirname, '..', 'prod'),
        filename: '[name].min.js',
        sourceMapFilename: '[name].map',
    },
  }
]);
