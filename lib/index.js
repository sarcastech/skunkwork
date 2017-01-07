'use strict'

const fs = require('fs')
const http = require('http')

let Skunkwork = function () {
  this.store = require('./store')
  this.server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json')
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')

    console.log(`${req.method} : ${req.url}`)
    let requestedData = this.store.find(req.url)
    if (requestedData) {
      res.end(JSON.stringify(requestedData))
    } else {
      res.end('404 - not found')
    }
  })
}

Skunkwork.prototype = {
  start: function (file, port = 9000) {
    let dataObj = fs.readFileSync(file, 'utf8')
    this.store.create(JSON.parse(dataObj))
    this.server.listen(port)
  },

  stop: function () {
    this.server.close()
  }
}

module.exports = Skunkwork
