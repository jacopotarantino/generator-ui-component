'use strict'
/* eslint-env jasmine */

import {MyComponent} from './my-component.js'

describe('MyComponent', () => {
  let my_component

  beforeEach(() => {
    let header = document.createElement('div')
    header.id = 'the-header'
    document.body.appendChild(header)

    my_component = new MyComponent([{
      url: '/foo',
      text: 'bar'
    }])
  })

  afterEach(() => {
    let header = document.getElementById('the-header')
    header.parentNode.removeChild(header)

    let node = document.querySelector('.my-component')
    if (node) { node.parentNode.removeChild(node) }
  })

  it('sanity check', () => {
    expect(MyComponent).toBeDefined()
  })

  describe('#render', () => {
    it('should render my custom component onto the page', () => {
      my_component.render()
      let node = document.querySelector('.my-component')

      expect(node).toBeDefined()
      expect(node.innerHTML).toContain('<ul class="list-horizontal"')
    })
  })
})
