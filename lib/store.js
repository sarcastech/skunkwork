'use strict'

let data = {}

exports.create = function (config) {
  data = Object.assign({}, config)
}

exports.find = function (prop) {
  return data[prop] || data
}
