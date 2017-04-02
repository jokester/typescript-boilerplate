const webpack = require('webpack');

module.exports = {
  plugins: [
    new webpack.DefinePlugin({ '$$webpack_dev': JSON.stringify(false)}),
    // TODO adapt hot module new webpack.HotModuleReplacementPlugin(),
  ],

};
