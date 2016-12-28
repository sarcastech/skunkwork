'use strict'

const fs = require('fs')
const http = require('http')
const server = http.createServer((req, res) => {
  let target = req.url
  let dataObj = fs.readFileSync('./fake.json')
  dataObj = JSON.parse(dataObj)
  res.setHeader('Content-Type', 'application/json')
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')

  if (dataObj[target]) {
    res.end(JSON.stringify(dataObj[target]))
  } else {
    res.end('404 - not found')
  }
})

server.listen(9000)
