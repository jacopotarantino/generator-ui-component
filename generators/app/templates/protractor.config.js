'use strict'

let ns = require('node-static')
let file = new ns.Server('./')
let app_server = require('http').createServer(function (request, response) {
  request.addListener('end', function () {
    file.serve(request, response)
  }).resume()
})
const TEST_APP_PORT = 8082

exports.config = {
  capabilities: {
    // You can use other browsers
    // like firefox, phantomjs, safari, IE (-_-)
    'browserName': 'phantomjs'
  },
  baseUrl: `http://localhost:${TEST_APP_PORT}`,
  seleniumServerJar: './node_modules/protractor/selenium/selenium-server-standalone-2.48.2.jar',
  seleniumArgs: [],
  specs: [ 'e2e/*-spec.js' ],
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    isVerbose: true,
  },
  allScriptsTimeout: 20000,
  onPrepare: function () {
    browser.ignoreSynchronization = true
  },
  beforeLaunch: function () {
    // start the app server
    app_server.listen(TEST_APP_PORT)
  },
  afterLaunch: function () {
    // kill the app server
    app_server.close()
  }
}
