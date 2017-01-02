#!/usr/bin/env node

'use strct'

const Skunkwork = require('../lib/index')
let skunk = new Skunkwork()

skunk.start('./fake.json')
