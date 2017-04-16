/**
 * webpack config (dev)
 */
const webpackMerge = require('webpack-merge');
const path = require('path');
const webpack = require('webpack');

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
    devServer: {
        contentBase: path.join(__dirname, "..", "dev"),
        compress: true,
        port: 9000,
        hot: true,
    },
    plugins: [
      new webpack.NamedModulesPlugin(),
      new webpack.HotModuleReplacementPlugin(),
    ],
  }
]);
