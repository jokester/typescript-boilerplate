/**
 * webpack config (production)
 */
const webpackMerge = require("webpack-merge");
const path = require("path");
const webpack = require("webpack");
const MinifyPlugin = require("babel-minify-webpack-plugin");

module.exports = webpackMerge([
  require("./common"),
  {
    output: {
      path: path.join(__dirname, "..", "prod"),
      filename: "[name].min.js",
      sourceMapFilename: "[name].min.map"
    },
    plugins: [
      new webpack.DefinePlugin({
        $$webpack_dev: JSON.stringify(false),
        "process.env": {
          NODE_ENV: JSON.stringify("production")
        },
      }),
      new MinifyPlugin({}),
      new webpack.optimize.ModuleConcatenationPlugin(),
      /* disable uglifyJS in favor of babili, for ES6 support
      new webpack.optimize.UglifyJsPlugin({
        minimize: true,
        compress: {
          warnings: true,
          drop_console: false
        }
      })
      */
    ]
  }
]);
