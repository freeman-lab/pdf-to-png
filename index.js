var pdf = require('pdfjs-dist')
var fs = require('fs')

module.exports = function(args) {
  var input = args[1]
  var output = args[2]
  var scale = args[3]

  var data = new Uint8Array(fs.readFileSync(input))

  var canvas = document.createElement('canvas')
  var ctx = canvas.getContext('2d')

  pdf.getDocument(data).then(function (doc) {
    doc.getPage(1).then(function (page) {
      var viewport = page.getViewport(scale)

      canvas.height = viewport.height
      canvas.width = viewport.width

      var renderer = {
        canvasContext: ctx,
        viewport: viewport
      }

      page.render(renderer).then(function () {
        ctx.globalCompositeOperation = 'destination-over'
        ctx.fillStyle = '#ffffff'
        ctx.fillRect(0, 0, canvas.width, canvas.height)
        var img = canvas.toDataURL('image/png')
        img = img.replace(/^data:image\/png;base64,/, "");
        fs.writeFile(output, img, 'base64', function (err) {
          if (err) return err
          require('remote').require('app').quit()
        })
      })
    })
  })

}