#!/usr/bin/env node

'use strct'

const Skunkwork = require('../lib/index')
let skunk = new Skunkwork()
let args = process.argv.slice(2)

skunk.start(args[0], args[1])
