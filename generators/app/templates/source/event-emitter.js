'use strict'

export class EventEmitter {
  /**
   * Create an event emitter.
   * @example
   * class MyComponent extends EventEmitter {
   *   constructor (options) {
   *     super(options)
   *   }
   *
   *   render () {
   *     this.emit('rendered my_component to DOM', {instance: this})
   *     super()
   *   }
   *
   *   submit () {
   *     this.on('form submitted', (data) => {
   *       // send data to API
   *     })
   *   }
   * }
   */
  constructor () {
    this._events = {}
  }

  get events () {
    return Object.assign({}, this._events)
  }

  /**
   * Adds an event listener to the instance.
   */
  on (event, listener) {
    if (typeof this._events[event] !== 'object') {
      this._events[event] = []
    }

    this._events[event].push(listener)
  }

  /**
   * Removes a named listener from a particular event.
   */
  removeListener (event, listener) {
    const idx = this._events[event].indexOf(listener)

    this._events[event].splice(idx, 1)
  }

  /**
   * Triggers all the callbacks in the queue for a particular event.
   */
  emit (event, ...args) {
    if (typeof this._events[event] !== 'object') { return }

    const listeners = this._events[event].slice()

    listeners.forEach(listener => {
      listener.apply(this, args)
    })
  }

  /**
   * Adds an event listener that removes itself once it gets called.
   */
  once (event, listener) {
    this.on(event, function g () {
      this.removeListener(event, g)
      listener.apply(this, arguments)
    })
  }
}
