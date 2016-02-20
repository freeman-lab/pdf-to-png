var spawn = require('electron-spawn')
var minimist = require('minimist')
var fs = require('fs')
var path = require('path')

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
  usage(function () { process.exit(1) })
}

var electron = spawn('./index.js', argv.i, argv.o, argv.s, {
  detached: true
})

function usage (cb) {
  var r = fs.createReadStream(path.join(__dirname, 'usage.txt'))
  r.pipe(process.stdout)
  if (cb) r.once('end', cb)
}