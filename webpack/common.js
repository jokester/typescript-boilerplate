/**
 * Common setting for all webpack build
 */
const webpack = require("webpack");
const Visualizer = require("webpack-visualizer-plugin");

module.exports = {
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"]
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
            // override module to ES6 to enable tree-shaking and stuff
            module: "ES6"
          }
        }
      }
    ]
  },
  plugins: [new Visualizer()],
  devtool: "source-map"
};
