
// scrim - dig image URIs from HTML page

var trumpet = require('trumpet')
  , Transform = require('stream').Transform
  , tr = trumpet()
  , Stream = require('stream').Stream
  , path = require('path')

module.exports = function () {
  var stream = new Transform()

  stream._transform = function (chunk, encoding, callback) {
    tr.write(chunk)
    callback()
  }

  function filter (p) {
    return p || false
  }

  tr.select('.* img', function (node) {
    var src = node.attributes.src

    if (filter(src)) {
      stream.push(src)
    }
  })

  // select link to the next page on public Google Reader pages
  tr.select('#more a', function (node) {
    stream.push(node.attributes.href)
  })

  tr.on('end', function () {
    stream.push(null)
  })

  return stream
}
