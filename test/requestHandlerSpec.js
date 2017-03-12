'use strict'

const test = require('ava')
const handler = require('../lib/requestHandler')
const fakeStore = {
  find: function () {
    return {foo: 'bar'}
  }
}

const req = handler(fakeStore)

test('requestHandler should return a function', function (t) {
  t.is(typeof req, 'function')
})
