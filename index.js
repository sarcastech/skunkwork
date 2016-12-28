'use strict'

const store = require('./store')
const fs = require('fs')
const http = require('http')
const server = http.createServer((req, res) => {
  let method = req.method.toLowerCase()
  let target = req.url
  let dataObj = fs.readFileSync('./fake.json')
  store.create(JSON.parse(dataObj))
  res.setHeader('Content-Type', 'application/json')
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')

  if (store[method]) {
    res.end(JSON.stringify(store[method](target)))
  } else {
    res.end('404 - not found')
  }
})

server.listen(9000)
