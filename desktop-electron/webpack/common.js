/**
 * Common setting for all webpack build
 */
const webpack = require("webpack");
const path = require("path");
const Visualizer = require("webpack-visualizer-plugin");

module.exports = {
  target: "electron",
  node: {
    /* prevents __dirname from becoming "/" */
    __dirname: false,
    __filename: false
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"]
  },
  entry: {
    "electron-entrypoint": path.join(__dirname, "..", "lib-ts", "electron-entrypoint.ts"),
    "window1": [
      // not including ES5-7 shim for electron // "core-js/client/shim",
      path.join(__dirname, "..", "lib-ts", "window1.tsx"),
    ],
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
            // with electron, it should be safe to target es6
            target: "es6",
            // use module=es6 for tree-shaking and stuff
            module: "ES6"
          }
        }
      }
    ]
  },
  plugins: [new Visualizer()],
  devtool: "source-map"
};
