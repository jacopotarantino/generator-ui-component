# generator-ui-component

[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url]
[npm-image]: https://badge.fury.io/js/generator-ui-component.svg
[npm-url]: https://npmjs.org/package/generator-ui-component
[travis-image]: https://travis-ci.org/jacopotarantino/generator-ui-component.svg?branch=master
[travis-url]: https://travis-ci.org/jacopotarantino/generator-ui-component
[daviddm-image]: https://david-dm.org/jacopotarantino/generator-ui-component.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/jacopotarantino/generator-ui-component

> Scaffolds a UI Component with ES6/7, tests, and webpack+babel build. Initializes a git repository. Creates a minimal build process that you can get started with immediately. Includes the CSS and Sass loaders so you can write your styles cleanly and import them just like node modules. Includes the jade-loader so you can write HTML painlessly. And finally includes a demo "base component" to extend from, a demo "event emitter" class to extend from, and webpack support for ES7 features so you can have fun writing JavaScript :).

## Installation

First, install [Yeoman](http://yeoman.io) and generator-ui-component using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g generator-ui-component
```

Then generate your new project:

```bash
mkdir my-fancy-component && cd $_
yo ui-component
```

Make sure to run the sample test suite to make sure things are working as expected:

```bash
npm test
```

Then get started working. A basic `index.html` file is provided for you to prove out your UI component as quickly as possible.

```bash
open index.html
npm start
```

## License

All content copyright © [Jacopo Tarantino](https://jack.ofspades.com). This work is licensed under the Creative Commons Attribution-ShareAlike 4.0 International License. To view a copy of this license, visit [http://creativecommons.org/licenses/by-sa/4.0/deed.en_US](http://creativecommons.org/licenses/by-sa/4.0/deed.en_US).

## TODO

* nsp
* Tests for the generator itself
* Boilerplate CI integration
  * Automatically connect to CI?
* Support for react/polymer/angular/events/pouchdb/isomorphism
* Github pages support
* Support for codeclimate
  * Automatic setup
  * automatic sending of code coverage stats
* [semantic release](https://github.com/semantic-release/semantic-release)
   * for both the generator and the generated output
* [commitizen](http://commitizen.github.io/cz-cli/)
* https://github.com/kentcdodds/validate-commit-msg
* [david](https://david-dm.org/)
* readme badges
* [browser sync](https://github.com/Browsersync/browser-sync)?
* replace livereload with that and parallelshell
  * https://github.com/keithamus/parallelshell
  * https://css-tricks.com/why-npm-scripts/
