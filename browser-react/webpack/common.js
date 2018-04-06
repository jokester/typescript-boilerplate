/**
 * Common setting for all webpack build
 */
const webpack = require("webpack");
const path = require("path");
const Visualizer = require("webpack-visualizer-plugin");

module.exports = {
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"]
  },
  entry: {
    "browser-entrypoint": [
      "core-js/client/shim",
      path.join(__dirname, "..", "lib-ts", "browser-entrypoint.tsx"),
    ],
  },
  output: {
    path: path.join(__dirname, "..", "public"),
    filename: "static/[name].js",
    // prefix "sourcemap" can be used to distinguish and reject public access
    sourceMapFilename: "static/sourcemap/[name].map"
  },
  module: {
    loaders: [
      // load ts/tsx with ts-loader
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        options: {
          transpileOnly: true,
          compilerOptions: {
            // use target=es5 for old browsers
            target: "es5",
            // use module=es6 for tree-shaking and stuff
            module: "ES6"
          }
        }
      }
    ]
  },
  plugins: [
    new Visualizer(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  devtool: "source-map"
};
