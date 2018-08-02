const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const rules = require('./node_modules/paraviewweb/config/webpack.loaders.js');
const plugins = [
  new HtmlWebpackPlugin({
    inject: 'body',
  }),
];

const entry = path.join(__dirname, './src/index.js');
const outputPath = path.join(__dirname, './dist');
const styles = path.resolve('./node_modules/paraviewweb/style');

module.exports = {
  plugins,
  entry,
  output: {
    path: outputPath,
    filename: 'MyWebApp.js',
    libraryTarget: 'umd',
  },
  module: {
    rules: [
     { test: entry, loader: "expose-loader?MyWebApp" },
    ].concat(rules),
  },
  resolve: {
    alias: {
      PVWStyle: styles,
    },
  },
  devServer: {
    contentBase: './dist/',
    port: 9999,
  },
};