# pdf-to-png

Render a PDF to a PNG, useful for generating thumbnails. Uses [`electron-spawn`](https://github.com/maxogden/electron-spawn) and [`pdf.js`](https://mozilla.github.io/pdf.js/), so it doesn't require any image processing libraries. Supports a custom scale factor. Currently only renders the first page.

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)

## install

```
npm install pdf-to-png
```

## example

Use as a command line tool

```bash
pdf-to-png -i goat.pdf -o goat.png
```

Or as a module

```javascript
require('pdf-to-png')({
	input: 'goat.pdf',
	output: 'goat.png'
})
```

To run the included example clone this repo then call

```
npm run example
```

## usage

##### `pdf-to-png -i input -o output -s scale`

- `input`: input file
- `output`: output file
- `scale`: fraction of full size

##### `require('pdf-to-png')(opts, [cb])`

- `opts.input`: input file
- `opts.output`: output file
- `opts.scale`: fraction of full size
- `cb`: optional callback to be called on completion

