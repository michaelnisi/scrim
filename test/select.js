var scrim = require('../index.js')
  , es = require('event-stream')
  , fs = require('fs')
  , test = require('tap').test

test('scrape img tags', function (t) {
  var reader = fs.createReadStream('./index.html')
    , images = scrim()
  
  var wanted = [
    'http://img.jpg'
  , 'http://img.png'
  , 'img.jpg'
  ]

  reader
    .pipe(images)
    .on('end', function (data) {
      // TODO: more?
    })
    .pipe(es.writeArray(function (err, array) {
      t.equal(array.length, wanted.length)
      t.deepEqual(array, wanted)
      t.end()
    }))
})
