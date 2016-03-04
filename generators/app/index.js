'use strict'

var yeoman = require('yeoman-generator')
var chalk = require('chalk')
var yosay = require('yosay')
var git = require('simple-git')()
var wrench = require('wrench')

module.exports = yeoman.generators.Base.extend({
  props: {
    init_repository: false
  },
  prompting: function () {
    var that = this
    // Have Yeoman greet the user.
    that.log(yosay(
      `Welcome to the good ol ${chalk.green('UI Component')} generator!`
    ))

    var done = that.async()
    var prompts = [{
      type: 'input',
      name: 'component_name',
      message: 'What is the component name?',
      default: process.cwd().split('/').pop()
    }, {
      type: 'input',
      name: 'repository_path',
      message: 'What is the repository url?',
      default: 'git@github.com:my-name/my-component.git'
    }, {
      type: 'input',
      name: 'author_name',
      message: 'What is the your name?',
      default: that.user.git.name() || 'Some Cool Person'
    }, {
      type: 'input',
      name: 'author_email',
      message: 'What is the your email address?',
      default: that.user.git.email() || 'you@company.com'
    }]

    that.prompt(prompts, function (answers) {
      Object.assign(that.props, answers)
      done()
    })
  },

  writing: function () {
    var done = this.async()
    var that = this
    var files = wrench.readdirSyncRecursive(that.sourceRoot())

    // for each file in templates
    // copy and parse templates
    files.forEach(function (filename, index, array) {
      that.template(
        that.templatePath(filename),
        that.destinationPath(filename),
        that.props
      )
    })

    git
      .init()
      .addRemote('origin', this.props.repository_path)
      .add(['.'])
      .commit('Initialized repository')
      .then(function () {
        that.log(yosay('Initialized the git repository for you!'))
        done()
      })
  },

  install: function () {
    var that = this

    this.installDependencies({
      npm: true,
      bower: false,
      callback: function () {
        that.log(yosay(chalk.green(`
          You're all set!
          Run \`npm test\` to make sure everything's working right.
          Then run \`npm start\` to kick off your build.
        `)))
      }
    })
  }
})
