# <%= component_name %>

This creates a new <%= component_name %>

![dependency stability](https://david-dm.org/<&= author_name %>/<%= component_name %>.svg)

## Prerequisites

* node
* npm
* Java

## Install and run

<% if (init_repository) { %><%= '* `git clone ' + repository_path + '`' %><% } %>
* `cd <%= component_name %>`
* `npm install`
* `npm test`

## Testing

This will run standard, karma, protractor, nsp, and jsdoc. Webpack uses sass, jade, and babel to wire up your components/requires. jsdoc outputs a compiled static site to `/docs`. Babel transpile the ES6 in `index.js` to ES5 in `dist/index.js` and creates a sourcemap.

* `npm test`

## Run a watcher for development

This just runs a watcher for Webpack/Babel. It does not start an HTTP server. You can, however, point a browser at your `index.html` file and see your component running there. The `index.html` file is mostly intended for local testing and manual QA.

* `npm start`

## Build only

Run the build to generate dist files and use them as you please.

* `npm build`

## Contributing

* Checkout new branch - `git checkout feature/intent-of-feature`
* Make changes
* Run tests - `npm test`
* Commit changes - `npm run commit` - This uses commitizen and also checks that your commits are valid on the other side.
* Push changes - `git push`
* Create pull request
* Get review
* Merge changes
