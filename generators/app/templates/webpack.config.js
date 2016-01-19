'use strict'

var LiveReloadPlugin = require('webpack-livereload-plugin')

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
    }]
  },
  plugins: [
    new LiveReloadPlugin()
  ]
}
