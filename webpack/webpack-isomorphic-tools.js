/* eslint-disable import/no-commonjs */

const WebpackIsomorphicToolsPlugin = require('webpack-isomorphic-tools/plugin');

module.exports = {
  webpack_assets_file_path: '../build/webpack-assets.json',
  webpack_stats_file_path: '../build/webpack-stats.json',
  assets: {
    images: {
      extensions: [
        'jpeg',
        'jpg',
        'png',
        'gif'
      ],
      parser: WebpackIsomorphicToolsPlugin.url_loader_parser
    },
    fonts: {
      extensions: [
        'woff',
        'woff2',
        'ttf',
        'eot'
      ],
      parser: WebpackIsomorphicToolsPlugin.url_loader_parser
    },
    svg: {
      extension: 'svg',
      parser: WebpackIsomorphicToolsPlugin.url_loader_parser
    },
  }
};
