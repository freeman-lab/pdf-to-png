var test = require('tape')
var fs = require('fs')
var converter = require('./index.js')

test('conversion', function (t) {
  var cb = function () {
    t.ok(fs.existsSync('goat.png'), 'file converted')
    fs.unlinkSync('goat.png')
    t.end()
  }
  var opts = {input: 'assets/goat.pdf', output: 'goat.png', scale: 0.5}
  converter(opts, cb)
})
