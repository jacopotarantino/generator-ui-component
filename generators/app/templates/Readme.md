# Contextual Subnavigation

This creates a new <%= component_name %>

## Install and run

* `git clone <%= repository_path %>`
* `cd <%= component_name %>`
* `npm install`
* `npm test`

## Building

This will run jsdoc, standard, karma, and babel. jsdoc outputs a compiled static site to `/docs`. Babel transpile the ES6 in `index.js` to ES5 in `dist/index.js` and creates a sourcemap. It's recommended that you just run the `npm test` command which will run a standard build anyway.

* `npm test`

## Run a watcher for development

This just runs a watcher for Webpack/Babel. It does not start an HTTP server.

* `npm start`

## Test

Run the test suite.

* `npm test`
