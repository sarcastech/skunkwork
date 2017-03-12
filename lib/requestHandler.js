'use strict'

function server (storeObj) {
  return function (req, res) {
    res.setHeader('Content-Type', 'application/json')
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')

    console.log(`${req.method} : ${req.url}`)
    let requestedData = storeObj.find(req.url)
    if (requestedData) {
      res.end(JSON.stringify(requestedData))
    } else {
      res.end('404 - not found')
    }
  }
}

module.exports = server
