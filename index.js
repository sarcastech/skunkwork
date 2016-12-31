'use strict'

const fs = require('fs')
const http = require('http')

let Skunkwork = function () {
  this.store = require('./store')
  this.server = http.createServer((req, res) => {
    let method = req.method.toLowerCase()
    if (method === 'delete') { method = 'remove' }

    let target = req.url
    let dataObj = fs.readFileSync('./fake.json')
    this.store.create(JSON.parse(dataObj))
    res.setHeader('Content-Type', 'application/json')
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    if (this.store[method]) {
      res.end(JSON.stringify(this.store[method](target)))
    } else {
      res.end('404 - not found')
    }
  })
}

Skunkwork.prototype = {
  start: function (file) {
    let dataObj = fs.readFileSync(file)
    this.store.create(JSON.parse(dataObj))
    this.server.listen(9000)
  },

  stop: function () {
    this.server.close()
  }
}

module.exports = Skunkwork
