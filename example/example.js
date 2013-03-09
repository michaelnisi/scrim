var scrim = require('../index.js')
  , cop = require('cop')
  , request = require('request')

request('http://npmjs.org')
  .pipe(scrim())
  .pipe(cop(function (uri) { return uri + '\n' }))
  .pipe(process.stdout)
