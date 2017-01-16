'use strict'

const test = require('ava')
const store = require('../lib/store')
store.create({
  'foo': 'bar',
  'baz': 'bing'
})

test('store should assign prop/val as assinged in #create()', function (t) {
  t.is(store.find('foo'), 'bar')
  t.is(store.find('baz'), 'bing')
})
