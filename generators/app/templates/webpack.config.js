'use strict'

const LiveReloadPlugin = require('webpack-livereload-plugin')
const JSDocPlugin = require('./lib/jsdoc-plugin.js')
require('es6-promise').polyfill()

module.exports = {
  entry: './index.js',
  output: {
    path: __dirname + '/dist',
    filename: 'index.js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015']
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
    new LiveReloadPlugin(),
    new JSDocPlugin()
  ]
}
