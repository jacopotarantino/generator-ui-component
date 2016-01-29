'use strict'

const page_title = 'Welcome to the demo page for: theknot-ui-membership-modal'

// Describe a feature
describe('my page', function() {
  it('should visit a page that has a title', function() {
    browser.get('index.html')

    expect(element(by.css('body')).getText()).toContain(page_title)
  })
})
