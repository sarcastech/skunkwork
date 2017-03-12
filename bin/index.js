#!/usr/bin/env node

'use strct'

const skunk = require('../lib/index')
let args = process.argv.slice(2)
if (args.length < 1) {
  console.log('Please point to a valid JSON file.')
} else {
  skunk.start(args[0], args[1])
}
