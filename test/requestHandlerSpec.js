'use strict'

const test = require('ava')
const handler = require('../lib/requestHandler')
const sinon = require('sinon')
let fakeStore = {
  find: function () {
    return {
      'foo': 'bar'
    }
  }
}
let fakeReq = {
  url: '/my/fake/url'
}
let fakeRes
let req

test.beforeEach((t) => {
  req = handler(fakeStore)
  sinon.stub(console, 'log', function (val) {
    t.context.console = val
  })

  fakeRes = {
    setHeader: sinon.spy(),
    end: sinon.spy()
  }
})

test.afterEach((t) => {
  req = null
  console.log.restore()
  fakeRes = {}
})

test('requestHandler should return a middleware function', function (t) {
  t.is(typeof req, 'function')
})

test('Middleware function should set correct headers', function (t) {
  req(fakeReq, fakeRes)
  t.is(fakeRes.setHeader.firstCall.calledWith('Content-Type', 'application/json'), true)
  t.is(fakeRes.setHeader.secondCall.calledWith('Access-Control-Allow-Origin', '*'), true)
  t.is(fakeRes.setHeader.thirdCall.calledWith('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept'), true)
})

test('When passed valid path, should return json data', function (t) {
  req(fakeReq, fakeRes)
  t.is(fakeRes.end.args[0][0].includes('foo'), true)
})

test('When passed invalid path, should return 404 msg', function (t) {
  req = handler({
    find: function () {
      return false
    }
  })
  req(fakeReq, fakeRes)

  t.is(fakeRes.end.calledWith('404 - not found'), true)
})

