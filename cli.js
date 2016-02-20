#!/usr/bin/env node
var minimist = require('minimist')
var chalk = require('chalk')

var argv = minimist(process.argv.slice(2), {
  alias: {
    h: 'help',
    i: 'input',
    o: 'output',
    s: 'scale'
  },
  default: {
    scale: 0.5
  }
})

if (argv.h) {
  console.log('usage: pdf-to-png -i input -o output -s scale\n')
  console.log('converts an input PDF file to an output PNG thumbnail')
  process.exit(1)
}

require('./index.js')({
  input: argv.input,
  output: argv.output,
  scale: argv.scale
}, cb)

function cb (error) {
  if (error) {
    console.error('[' + chalk.red('error') + '] ' + error.toString().replace('Error: ', ''))
    process.exit(1)
  }
}
