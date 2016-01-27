'use strict'

module.exports = class JSDocPlugin {
  constructor () {}

  apply (compiler) {
    compiler.plugin('done', function () {
      const spawn = require('child_process').spawn
      const jsdoc = spawn('./node_modules/.bin/jsdoc', [
        '-p', './source/',
        '-r',
        '-d', './docs/'
      ])

      jsdoc.stdout.on('data', (data) => {
        console.log(`stdout: ${data}`)
      })

      jsdoc.stderr.on('data', (data) => {
        console.log(`stderr: ${data}`)
      })

      jsdoc.on('close', (code) => {
        console.log('Built documentation')
      })
    })
  }
}
