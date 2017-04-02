const webpack = require('webpack');
const BabiliPlugin = require("babili-webpack-plugin");

module.exports = {
  plugins: [
    new webpack.DefinePlugin({ '$$webpack_dev': JSON.stringify(false)}),
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
    new BabiliPlugin({}),
  ],
};
