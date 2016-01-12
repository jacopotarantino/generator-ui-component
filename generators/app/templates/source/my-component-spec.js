'use strict'

import {MyComponent} from './my-component.js'

describe('MyComponent', () => {

  let my_component

  beforeEach(() => {
    let header = document.createElement('div')
    header.id = 'the-knot'
    document.body.appendChild(header)

    my_component = new MyComponent([{
      url: '/foo',
      text: 'bar'
    }])
  })

  afterEach(() => {
    let node = document.querySelector('.my-component')
    if (node) { node.parentNode.removeChild(node) }

    let header = document.getElementById('the-knot')
    header.parentNode.removeChild(header)
  })

  it('sanity check', () => {
    expect(MyComponent).toBeDefined()
  })

  describe('#render', () => {
    it('should render the contextual subnav onto the page', () => {
      my_component.render()
      let node = document.querySelector('.my-component')

      expect(node).toBeDefined()
      expect(node.innerHTML).toContain('<ul class="list-horizontal"')
    })
  })

})
