'use strict'

const path = require('path')
const webpack = require('webpack')
const JSDocPlugin = require('./jsdoc-plugin.js')
require('es6-promise').polyfill()

module.exports = {
  debug: true,
  devtool: '#eval-source-map',
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, '/../dist'),
    filename: 'index.js',
    publicPath: '/dist'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /(node_modules|bower_components)/,
      query: {
        plugins: [
          'transform-runtime',
          'add-module-exports',
          'transform-decorators-legacy'
        ],
        presets: ['es2015', 'stage-0'],
        cacheDirectory: './.tmp'
      }
    }, {
      test: /\.sass$/,
      loaders: ['css', 'sass?indentedSyntax=true']
    }, {
      test: /\.jade$/,
      loader: 'jade'
    }]
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.NoErrorsPlugin(),
    new JSDocPlugin()
  ]
}
