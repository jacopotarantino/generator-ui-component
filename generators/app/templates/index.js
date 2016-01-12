'use strict'

import { UIComponent } from './node_modules/ui-component-base'
import './source/'

class MyComponent extends UIComponent {
  /**
  * Create a new <%= component_name %>.
  * @extends UIComponent
  * @param {object} options - hash of custom attributes.
  * @example new MyComponent({
  *   my_option: true,
  *   some_data: [{
  *     title: 'foo',
  *     url: '/bar'
  *   }]
  * }).render()
  */
  constructor(options) {
    super(options)
  }
}

new MyComponent({
  my_option: false,
  some_data: [{
    title: 'foo',
    url: '/bar'
  }]
}).render()
