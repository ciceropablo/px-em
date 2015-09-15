'use strict';

module.exports = function(px, base, unit) {
  if (typeof px !== 'number') {
    throw new TypeError('`px` should be a number');
  }

  if (typeof base === 'boolean') {
    unit = base;
    base = null;
  }

  base = base || 16;
  unit = unit || false;

  if (typeof base !== 'number' || base < 0) {
    throw new TypeError('`base` should be a number greater than zero');
  }

  var value = px / base;
  return unit ? value + 'em' : value;
};
