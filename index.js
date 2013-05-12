
// scrim - dig image URIs from HTML page

var trumpet = require('trumpet')
  , Transform = require('stream').Transform
  , url = require('url')
  , Stream = require('stream').Stream
  , path = require('path')

module.exports = function () {
  var tr = trumpet()
    , stream = new Transform()

  tr.select('.* img', function (node) {
    var src = node.attributes.src || false
    if (src) stream.push(src)
  })

  // select link to the next page on public Google Reader pages
  tr.select('#more a', function (node) {
    stream.emit('more', node.attributes.href)
  })

  tr.on('error', function (err) {
    stream.emit('error', err)
  })

  tr.on('end', function () {
    stream.push(null)
  })

  stream._transform = function (chunk, enc, cb) {
    tr.write(chunk.toString())
    cb()
  }

  return stream
}
