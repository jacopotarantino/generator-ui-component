'use strict'

export class UIComponent {
  /**
   * Create a base component.
   * @param {object} options - hash of arguments.
   * @example
   * class MyComponent extends UIComponent {
   *   constructor (options) {
   *     super(options)
   *
   *   this.stylesheet = options.stylesheet
   *   this.markup = options.markup
   * }
   */
  constructor (options) {}

  /**
   * Puts the stylesheet for the contextual subnav on the page.
   */
  render () {
    document.body.appendChild(this.node)
  }

  /**
   * Removes the stylesheet from the page.
   */
  remove () {
    this.node.parentNode.removeChild(this.node)
  }
}
