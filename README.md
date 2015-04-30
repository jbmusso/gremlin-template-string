# gremlin-template-string

Generate Gremlin scripts with bound parameters using ES6 template strings.

Gremlin is a graph database query language used by the [Apache TinkerPop](http://tinkerpop.incubator.apache.org/) framework.

Read the full Gremlin/TinkerPop3 documentation there: http://www.tinkerpop.com/docs/current/

## Install

```
$ npm install gremlin-template-string --save
```

Run tests with:
```
$ npm test
```

## Usage

The module exports a single function (*tag expression*) which allows you to tag an ES6 template template string.

It will return an object with two properties: 
* `script`: an escaped Gremlin string
* `params`: a map (Object) of bound parameters (ie `{p1: 'Foo', 'p2': 'Bar'}`)

## Example

```javascript
var gremlin = require('gremlin-template-string');

var who = 'Foobar';
var query = gremlin`
  g.V('name', ${who}).out('follows').name
`
// query.script === "\n  g.V('name', p1).out('follows').name\n"
// query.params.p1 === 'Foobar'
```

## Benefits

* easy multiline Gremlin queries
* syntax highlighting in IDE (Sublime Text)
* safer scripts (prevents Gremlin injections)
* faster scripts (bound parameters)

## Thanks

This library is heavily inspired by this blog post: http://www.ivc.com/blog/better-sql-strings-in-io-js-nodejs-part-2/. Thanks!

## Author
 - [@jbmusso](https://twitter.com/jbmusso)

# License

MIT
