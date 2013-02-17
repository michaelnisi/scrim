
// imgscraper - scrape img tags from html page

var trumpet = require('trumpet')
  , tr = trumpet()
  , Stream = require('stream').Stream
  , path = require('path')

module.exports = function () {
  var stream = new Stream()

  function filter (p) {
    return p.substr(0, 4) === 'http'
      && (path.extname(p) === '.png' || path.extname(p) === '.jpg')
  }

  tr.select('.* img', function (node) {
    var src = node.attributes.src

    if (filter(src)) {
      stream.emit('data', src)
    }
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
  }

  stream.write = function (chunk) {
    return tr.write(chunk)
  }

  return stream
}
