'use strict'

const fs = require('fs')
const http = require('http')

let Skunkwork = function () {
  this.store = require('./store')
  this.server = http.createServer((req, res) => {
    let dataObj = fs.readFileSync('./fake.json')
    this.store.create(JSON.parse(dataObj))
    res.setHeader('Content-Type', 'application/json')
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')

    let requestedData = JSON.stringify(this.store.find(req.url))
    if (requestedData) {
      res.end(JSON.stringify(requestedData))
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
