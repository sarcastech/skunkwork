'use strict'

let data = {}

exports.create = function (config) {
  data = Object.assign(data, config)
}

exports.get = function (prop) {
  return data[prop] ? data[prop] : data
}

