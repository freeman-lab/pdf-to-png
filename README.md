#pdf-to-png

Render a PDF to a PNG, useful for generating thumbnails. Just uses `electron-spawn` and `pdf.js`, doesn't require any image processing libraries.

## install

```
npm install pdf-to-png
```

## usage

Use as a command line tool

```bash
pdf-to-png -i input -o output -s scale
```

Or use as a module with `electron-spawn`

```javascript
var converter = require('pdf-to-png')

var spawn = require('electron-spawn')
spawn(converter, input, output, scale, {
  detached: true
})
```