'use strict'

import { MyComponent } from './source/my-component.js'

new MyComponent({
  my_option: false,
  some_data: [{
    title: 'foo',
    url: '/bar'
  }]
}).render()
