var postcss = require('postcss')
var imports = require('postcss-import')
var inherit = require('postcss-inherit')
var dedupe  = require('postcss-deduplicate')
var mqpacker = require('css-mqpacker')

module.exports = function(code, callback) {
  postcss()
    .use(imports)
    .use(inherit)
    .use(dedupe)
    .use(mqpacker)
    .process(code)
    .then(function(processed) {
      var messages = processed && processed.messages
      if (messages && messages.length) {
        messages.forEach(function(message) {
          if (message.text) {
            console.warn(message.text)
          }
        })
      }
      callback(null, processed.css)
    })
}
