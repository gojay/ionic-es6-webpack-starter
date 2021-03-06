var path = require('path'),
  libPath = path.join(__dirname, 'lib'),
  wwwPath = path.join(__dirname, 'www'),
  pkg = require('./package.json'),
  webpack = require("webpack"),
  HtmlWebpackPlugin = require('html-webpack-plugin');

var BrowserSyncPlugin = require('browser-sync-webpack-plugin');

var aliases = {
  'registerjs': path.resolve(__dirname, './lib/util/register.js'),
  //'ui-router': path.resolve(__dirname, '../node_modules/ionic-sdk/release/js/angular-ui/angular-ui-router.min.js')
};


module.exports = {
  entry: path.join(libPath, 'index.js'),
  output: {
    path: wwwPath,
    filename: 'prototype-[hash:6].js'
  },
  module: {
    loaders: [{
      test: /[\/]angular\.js$/,
      loader: 'expose?angular!exports?window.angular'
    }, {
      test: /[\/]lodash\.js$/,
      loader: 'expose?_'
    }, {
      test: /\.html$/,
      loader: 'html'
    }, {
      test: /\.json$/,
      loader: "json"
    }, {
      test: /\.(png|jpg|svg)$/,
      loader: 'file?name=images/[path][name].[ext]'
    }, {
      test: /\.css$/,
      loader: "style!css"
    }, {
      test: /\.js$/,
      exclude: /(node_modules)/,
      loader: "ng-annotate?add=true!babel"
    }, {
      test: /\.scss$/,
      loader: "style!css!autoprefixer!sass"
    }, {
      test: [/ionicons\.svg/, /ionicons\.eot/, /ionicons\.ttf/, /ionicons\.woff/],
      loader: 'file?name=fonts/[name].[ext]'
    }]
  },
  resolve: {
    extensions: ['', '.js', '.json', '.scss', '.html'],
    root: [
      libPath,
      path.join(__dirname, 'node_modules')
    ],
    moduleDirectories: [
      'node_modules'
    ],
    alias: aliases

  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      pkg: pkg,
      template: path.join(libPath, 'index.html')
    }),
    new BrowserSyncPlugin({
      host: 'localhost',
      port: 3000,
      server: {baseDir: ['www']}
    }),
    new webpack.ProvidePlugin({
      register: 'registerjs'
    }),
  ]
};
