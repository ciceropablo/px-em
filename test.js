'use strict';

var test = require('tape');
var pxEm = require('./');

test('px-em', function(t) {
  pxEm()
    .then(function() {
      t.fail('should not be called');
    })
    .catch(function(err) {
      t.equal(err.message, '`px` should be a number', '');
    });

  pxEm(16)
    .then(function(em) {
      t.equal(em, 1, '`em` should be equal 1');
    })
    .catch(function() {
      t.fail('should not be called');
    });

  pxEm(16, true)
    .then(function(em) {
      t.equal(em, '1em', '`em` should be equal 1em');
    })
    .catch(function() {
      t.fail('should not be called');
    });

  pxEm(16, 0)
    .then(function(em) {
      t.equal(em, 1, '`em` should be equal 1');
    })
    .catch(function() {
      t.fail('should not be called');
    });

  pxEm(16, 24)
    .then(function(em) {
      t.equal(em, 0.667, '`em` should be equal 0.667');
    })
    .catch(function() {
      t.fail('should not be called');
    });

  pxEm(16, 24, true)
    .then(function(em) {
      t.equal(em, '0.667em', '`em` should be equal 0.667em');
    })
    .catch(function() {
      t.fail('should not be called');
    });

  pxEm(16, -1)
    .then(function() {
      t.fail('should not be called');
    })
    .catch(function(err) {
      t.equal(err.message, '`base` should be a number greater than zero', '');
    });

  pxEm(-16, 24)
    .then(function(em) {
      t.equal(em, -0.667, '`em` should be equal -0.667');
    })
    .catch(function() {
      t.fail('should not be called');
    });

  pxEm('16px', '24px')
    .then(function(em) {
      t.equal(em, 0.667, '`em` should be equal 0.667');
    })
    .catch(function() {
      t.fail('should not be called');
    });

  pxEm('-16px', '24px', true)
    .then(function(em) {
      t.equal(em, '-0.667em', '`em` should be equal -0.667em');
    })
    .catch(function() {
      t.fail('should not be called');
    });

  pxEm('-16px', 24, true)
    .then(function(em) {
      t.equal(em, '-0.667em', '`em` should be equal -0.667em');
    })
    .catch(function() {
      t.fail('should not be called');
    });

  pxEm(16, '24px', true)
    .then(function(em) {
      t.equal(em, '0.667em', '`em` should be equal 0.667em');
    })
    .catch(function() {
      t.fail('should not be called');
    });

  pxEm('ten', '24px')
    .then(function() {
      t.fail('should not be called');
    })
    .catch(function(err) {
      t.equal(err.message, '`px` should be a number', '');
    });

  pxEm('24px', '0.667em')
    .then(function(em) {
      t.equal(em, 35.982, '`em` should be equal 35.982');
    })
    .catch(function() {
      t.fail('should not be called');
    });
  t.end();
});
