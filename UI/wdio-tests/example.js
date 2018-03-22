'use strict'

console.log("start example")
const assert = require('assert')

describe('First Test Group', () => {
  it('gets the title of MDN toppage', () => {
    const title = browser.url('https://developer.mozilla.org/en-US/').getTitle()
    // assert.equal(title, 'Mozilla Developer Network')
    assert.equal(title, 'MDN Web Docs')
  })
})
