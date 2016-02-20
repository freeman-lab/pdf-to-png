var spawn = require('electron-spawn')
var path = require('path')

module.exports = function (opts, cb) {
  var input = opts.input
  var output = opts.output
  var scale = opts.scale || 0.5

  if (!input) cb(new Error('must provide input file'))
  if (!output) cb(new Error('must provide output file'))

  var electron = spawn(path.join(__dirname, 'spawn.js'), input, output, scale, {
    detached: true
  })

  electron.stdout.on('data', function (data) {
    var message = data.toString()
    if (message.indexOf('Error: ') === 0) {
      message = message.replace('Error: ', '')
      if (cb) cb(new Error(message))
    }
    if (message.indexOf('Success: ') === 0) {
      if (cb) cb()
    }
  })
}
