'use strict'

let data = {}

let fetchData = function (prop) {
  return data[prop] ? data[prop] : data
}

exports.create = function (config) {
  data = Object.assign({}, config)
}

exports.get = fetchData

exports.post = fetchData

exports.put = fetchData

exports.remove = fetchData
