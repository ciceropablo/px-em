'use strict';

var Promise = require('pinkie-promise');

module.exports = function(px, base, format) {
  return new Promise(function(resolve, reject) {
    if (typeof px !== 'number') {
      reject(new TypeError('`px` should be a number'));
    }

    if (typeof base === 'boolean') {
      format = base;
      base = null;
    }

    base = base || 16;
    format = format || false;

    if (typeof base !== 'number' || base < 0) {
      reject(new TypeError('`base` should be a number greater than zero'));
    }

    var em = Math.round((px / base) * 1000) / 1000;
    resolve(format ? em + 'em' : em);
  });
};
