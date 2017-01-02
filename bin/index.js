#!/usr/bin/env node

'use strct'

const Skunkwork = require('../lib/index')
console.log('s = ', Skunkwork)
let skunk = new Skunkwork()

skunk.start('./fake.json')
