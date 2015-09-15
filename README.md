## px-em [![Build Status](https://travis-ci.org/ciceropablo/px-em.svg)](https://travis-ci.org/ciceropablo/px-em)
> A module to convert PX in EM.

## Installation

```sh
$ [sudo] npm install --save px-em
```

## Usage

```js
var pxEm = require('px-em');

pxEm(16, 24, true)
  .then(function(em) {
    console.log(em); // 0.667em
  })
  .catch(function(err) {
    console.log(err.message);
  });
```

## API

### `pxEm(px, [base], [format])`

Type: `number` or `string`

Returns a promise that resolves to the value converted.

#### `px`

*Required*  
Type: `number`

Pixel value to converting.

#### `base`

Type: `number`  
Default: `16`

Base value to converting.

#### `format`

Type: `boolean`  
Default: `false`

Format value to formatting.

## Related

See **[em-px](https://github.com/ciceropablo/em-px)** for the inverse.

## License

MIT © [Cícero Pablo](http://ciceropablo.github.io)
