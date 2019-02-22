const withPlugins = require('next-compose-plugins');

const withSourceMap = require('@zeit/next-source-maps')();
const sass = require('@zeit/next-sass');
const optimizedImages = require('next-optimized-images');
const withTypescript = require('@zeit/next-typescript');

module.exports = withPlugins(
  [
    [withSourceMap],
    [sass],
    [optimizedImages, { optimizeImages: false, }],
    withTypescript,
  ],
  {
    webpack(config, options) {
      return config;
    }
  });
