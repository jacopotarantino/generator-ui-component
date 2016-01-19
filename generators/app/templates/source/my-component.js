'use strict'

import { UIComponent } from './ui-component.js'
import component_styles from './styles.sass'

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
  }
}
