'use strict'

const fs = require('fs')
const http = require('http')
const reqHandler = require('./requestHandler')
const store = require('./store')

module.exports = {
  start: function (file, port = 9000) {
    let dataObj = fs.readFileSync(file, 'utf8')
    store.create(JSON.parse(dataObj))
    http.createServer(reqHandler(store)).listen(port)
  }
}
