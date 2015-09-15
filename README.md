## px-em
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

TODO...

#### `px`

*Required*  
Type: `number`

TODO...

#### `base`

Type: `number`  
Default: `16`

TODO...

#### `format`

Type: `boolean`  
Default: `false`

TODO...

## License

MIT © [Cícero Pablo](http://ciceropablo.github.io)
