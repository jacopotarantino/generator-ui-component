'use strict'

import { UIComponent } from './ui-component.js'
import component_styles from './styles.sass'
import large_markup_blob from './large-markup-block.jade'
// import { deprecate } from 'core-decorators'
// this will throw in both standard and jsdoc.
// @deprecate
// re-enable when there's better support

/*
 * Provides assistance that doesn't need to be in the class.
 */
function my_helper_or_private_function (items) {
  return `<ul class="list-horizontal">some markup</ul>`
}

export class MyComponent extends UIComponent {
  /**
   * Creates a new MyComponent
   * @extends UIComponent
   * @param {array} items - description of items.
   */
  constructor (items) {
    super()

    this.styles = component_styles

    let my_component = document.createElement('nav')
    my_component.classList.add('my-component')
    my_component.classList.add('js-component-name')
    my_component.innerHTML = my_helper_or_private_function(items)
    this.node = my_component
  }

  /**
   * Puts this component on the page with a custom render method.
   */
  render () {
    let header = document.querySelector('#the-header')
    header
      .parentNode
      .insertBefore(this.node, header.nextSibling)

    let new_node = document.createElement('section')
    // note that jade templates come back as template functions
    new_node.innerHTML = large_markup_blob()
    document.body.appendChild(new_node)
  }
}
