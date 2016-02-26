/**
 * A template function to be used with ES6 template strings.
 * This returns an object with an escaped `gremlin` (String) key and a
 * `bindings` (Object/map of bound parameters) key.
 *
 * @param {String} rawString - a raw Gremlin string
 * @return {Object}
 */
function createGremlinQuery(rawString) {
  var gremlin = '';
  var bindings = {};
  var inlineParams = [].slice.call(arguments, 1);
  var paramIdentifier;

  for (var i = 0; i < inlineParams.length; ++i) {
    paramIdentifier = 'p' + (i + 1);
    gremlin += rawString[i] + paramIdentifier;
    bindings[paramIdentifier] = inlineParams[i];
  }

  gremlin += rawString[inlineParams.length];

  return { gremlin: gremlin, bindings: bindings };
}

module.exports = createGremlinQuery;
