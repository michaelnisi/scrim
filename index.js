var trumpet = require('trumpet')
  , tr = trumpet()
  , Stream = require('stream').Stream
  , path = require('path')

module.exports = function () {
  var stream = new Stream()

  function filter (p) {
    return p || false
  }

  tr.select('.* img', function (node) {
    var src = node.attributes.src

    if (filter(src)) {
      stream.emit('data', src)
    }
  })

  // select link to the next page on public Google Reader pages 
  tr.select('#more a', function (node) {
    stream.emit('end', node.attributes.href)
  })

  stream.writable = true
  stream.readable = true

  stream.pause = function () {
    stream.emit('pause')
  }

  stream.resume = function () {
    stream.emit('resume')
  }

  stream.end = function () {
    tr.end()
    stream.emit('end')
  }

  stream.write = function (chunk) {
    return tr.write(chunk)
  }

  return stream
}
