var scrim = require('../index.js')
  , cop = require('cop')
  , http  = require('http')

http.get('http://www.nodejs.org', function (res) {
  res
    .pipe(scrim())
    .pipe(cop(function (uri) { return uri + '\n' }))
    .pipe(process.stdout)
})
