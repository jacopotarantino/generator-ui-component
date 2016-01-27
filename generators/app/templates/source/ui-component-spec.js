'use strict'

let component

import {UIComponent} from './ui-component.js'

class FakeComponent extends UIComponent {
  constructor () {
    super()
    this.node = document.createElement('div')
    this.node.classList.add('fake-component')
  }
}

describe('UIComponent', () => {

  beforeEach(() => {
    component = new FakeComponent()
  })

  afterEach(() => {
    let node = document.querySelector('.fake-component')
    if (node) { node.parentNode.removeChild(node) }

    let stylesheet = document.querySelector('style')
    if (stylesheet) { stylesheet.parentNode.removeChild(stylesheet) }
  })

  it('sanity check', () => {
    expect(UIComponent).toBeDefined()
  })

  describe('#render', () => {
    it('should render the component onto the page', () => {
      component.render()
      let node = document.querySelector('.fake-component')

      expect(node).toBeDefined()
    })
  })

  describe('#remove', () => {
    it('should delete the DOM node for the component', () => {
      component.render()

      let node = document.querySelector('.fake-component')
      expect(node).toBeDefined()

      component.remove()
      node = document.querySelector('.fake-component')
      expect(node).toBe(null)
    })
  })

})
