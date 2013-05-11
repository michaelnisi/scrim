var scrim = require('../index.js')
  , Writable = require('stream').Writable
  , fs = require('fs')
  , test = require('tap').test

test('scrape img tags', function (t) {
  var reader = fs.createReadStream('./index.html')
    , transformer = scrim()
    , writer = new Writable()

  var expected = [
    'http://img.jpg'
  , 'http://img.png'
  , 'img.jpg'
  ]

  var actual = []

  writer._write = function (chunk, enc, cb) {
    actual.push(chunk.toString())
    cb()
  }

  reader
    .pipe(transformer)
    .pipe(writer)
    .on('finish', function () {
      t.equal(actual.length, expected.length)
      t.deepEqual(actual, expected)
      t.end()
    })
})
