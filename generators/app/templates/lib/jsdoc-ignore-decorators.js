'use strict'

/**
 * Source file parser that turns decorators into jsdoc comments.
 * Only supports single-line decorators.
 */
exports.handlers = {
  beforeParse: function (e) {
    let lines = e.source.split('\n')
    // group 1: decorator name, group 2: any arguments passed to the decorator.
    let decorator_regex = /^\s+(@\w+)(\(.+\))?$/

    lines.forEach((line, index) => {
      if (decorator_regex.test(line)) {
        lines.splice(index, 1)
      }
    })

    e.source = lines.join('\n')
  }
}
