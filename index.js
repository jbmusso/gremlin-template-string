/**
 * A template function to be used with ES6 template strings.
 * This returns an object with an escaped `script` (String) key and a `params`
 * (Object/map of bound parameters) key.
 *
 * @param {String} rawString - a raw Gremlin string
 * @return {Object}
 */
function gremlin(rawString) {
  var script = '';
  var params = {};
  var inlineParams = [].slice.call(arguments, 1);
  var paramIdentifier;

  for (var i = 0; i < inlineParams.length; ++i) {
    paramIdentifier = 'p' + (i + 1);
    script += rawString[i] + paramIdentifier;
    params[paramIdentifier] = inlineParams[i];
  }

  script += rawString[inlineParams.length];

  return { script: script, params: params };
}

module.exports = gremlin;
