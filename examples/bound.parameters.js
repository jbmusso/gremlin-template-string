var gremlin = require('../');


var alice = 'Alice';
var bob = 'Bob';
var since = 1234;

var query = gremlin`
  alice = g.addVertex([name: ${alice}])
  bob = g.addVertex([name: ${bob}])
  g.addEdge(alice, bob, 'knows', [since: ${since}])
`
