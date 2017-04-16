/**
 * webpack config (production)
 */
const webpackMerge = require("webpack-merge");
const path = require("path");

module.exports = webpackMerge([
  require("./common"),
  {
    entry: {
      "browser-entrypoint": path.join(
        __dirname,
        "..",
        "lib-ts",
        "browser-entrypoint.ts"
      )
    },
    output: {
      path: path.join(__dirname, "..", "prod"),
      filename: "[name].min.js",
      sourceMapFilename: "[name].map"
    },
    plugins: [
      new webpack.DefinePlugin({ $$webpack_dev: JSON.stringify(false) }),
      /**
     * we are using Babili for its ES6 support
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: {
        warnings: true,
        drop_console: false,
      }
    }),
    */
      new BabiliPlugin({})
    ]
  }
]);
