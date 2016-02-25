/* eslint-env jasmine */
'use strict'

let event_emitter

import { EventEmitter } from './event-emitter.js'

describe('EventEmitter', () => {
  beforeEach(() => {
    event_emitter = new EventEmitter()
  })

  afterEach(() => {
    event_emitter = null
  })

  it('sanity check', () => {
    expect(EventEmitter).toBeDefined()
  })

  describe('#on', () => {
    it('should add an event listener on the particular event', () => {
      event_emitter.on('a fake event', () => {
        console.log('test event text')
      })

      expect(event_emitter.events['a fake event']).toBeDefined()
      expect(event_emitter.events['a fake event'][0].toString()).toContain('test event text')
    })
  })

  describe('#removeListener', () => {
    it('should remove a named callback from the event listener queue', () => {
      function fake_event_callback () {}

      event_emitter.on('a fake event', fake_event_callback)
      expect(event_emitter.events['a fake event'].length).toBe(1)

      event_emitter.removeListener('a fake event', fake_event_callback)
      expect(event_emitter.events['a fake event'].length).toBe(0)
    })
  })

  describe('#emit', () => {
    beforeEach(() => {
      spyOn(console, ['log'])
    })

    it('should trigger all the callbacks for a particular event', () => {
      event_emitter.on('a fake event', () => {
        console.log('called the first callback')
      })

      event_emitter.on('a fake event', () => {
        console.log('called the second callback')
      })

      event_emitter.emit('a fake event')

      expect(console.log.calls.count()).toBe(2)
      expect(console.log.calls.argsFor(0)).toEqual(['called the first callback'])
    })

    it('should call each callback with any extra data passed in', () => {
      event_emitter.on('a fake event', (arg1, arg2) => {
        console.log('called the first callback')

        expect(arg1).toBe('testcontext')
        expect(arg2).toBe('secondargument')
      })

      event_emitter.emit('a fake event', 'testcontext', 'secondargument')
    })
  })

  describe('#once', () => {
    beforeEach(() => {
      spyOn(console, ['log'])
    })

    it('should add a callback that only gets triggered once', () => {
      function fake_event_callback () {
        console.log('called the callback exactly once')
      }

      event_emitter.once('a fake event', fake_event_callback)
      event_emitter.emit('a fake event')
      event_emitter.emit('a fake event')
      expect(console.log.calls.count()).toBe(1)
    })
  })
})
