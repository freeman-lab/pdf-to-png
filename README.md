#pdf-to-png

Render a PDF to a PNG, useful for generating thumbnails. Just uses `electron-spawn` and `pdf.js`, doesn't require any image processing libraries.

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

As a command line tool

##### `pdf-to-png -i input -o output -s scale`

- `input`: input file
- `output`: output file
- `scale`: fraction of full size

##### `converter(opts, [cb])`

- `opts.input`: input file
- `opts.output`: output file
- `opts.scale`: fraction of full size
- `cb`: optional callback to be called on completion

