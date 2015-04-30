'use strict';
var chai = require('chai');
global.assert = require('chai').assert;

var gremlin = require('../');


describe('Gremlin template string', function() {
  it('should handle bound parameters', function() {
    var foo = 'Foobar';
    var query = gremlin`g.V('name', ${foo})`;

    assert.equal(query.script, "g.V('name', p1)")
    assert.equal(query.params.p1, foo);
  });

  it('should handle multiline scripts', function() {
    var foo = 'Foobar';
    var query = gremlin`
      alice = g.addVertex('name', ${foo})
      g.V()`

    assert.equal(query.script, "\n      alice = g.addVertex('name', p1)\n      g.V()")
    assert.equal(query.params.p1, foo);
  });
});
