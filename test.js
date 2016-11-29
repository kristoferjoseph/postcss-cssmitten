var test = require('tape')
var fs = require('fs')
var path = require('path')
var cssmitten = require('./')

function strip (str) {
  return str.replace(/\s+/g, '')
}

test('should output correct styles', function(t) {
  var code = fs.readFileSync('./fixtures/index.css', 'utf8')
  var expected = fs.readFileSync('./fixtures/expected.css', 'utf8')
  function cb(error, actual) {
    if (error) {
      t.fail(error)
    }
    t.equal(strip(actual), strip(expected))
    t.end()
  }
  cssmitten(code, cb)
})
