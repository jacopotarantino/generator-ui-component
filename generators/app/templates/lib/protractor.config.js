'use strict'

let ns = require('node-static')
let file = new ns.Server('./')
let app_server = require('http').createServer(function (request, response) {
  request.addListener('end', function () {
    file.serve(request, response)
  }).resume()
})
const TEST_APP_PORT = 8082

const fs = require('fs')
const path = require('path')
const selenium_module_folder = './node_modules/protractor/selenium'
let selenium_jar = fs.readdirSync(selenium_module_folder).filter((file) => {
  return file.includes('selenium-server-standalone')
}).pop()
selenium_jar = path.join(__dirname, '../', selenium_module_folder, selenium_jar)

exports.config = {
  capabilities: {
    // You can use other browsers
    // like firefox, phantomjs, safari, IE (-_-)
    'browserName': 'phantomjs',
    'phantomjs.binary.path': require('phantomjs').path,
    'phantomjs.cli.args': [
      '--webdriver-loglevel=INFO'
    ]
  },
  baseUrl: `http://localhost:${TEST_APP_PORT}`,
  seleniumServerJar: selenium_jar,
  seleniumArgs: [],
  specs: [ '../e2e/*-spec.js' ],
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    isVerbose: true,
    print: function () {}
  },
  allScriptsTimeout: 20000,
  onPrepare: function () {
    browser.ignoreSynchronization = true

    // add jasmine spec reporter
    var SpecReporter = require('jasmine-spec-reporter')
    jasmine.getEnv().addReporter(new SpecReporter({
      displayStacktrace: 'all'
    }))
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
