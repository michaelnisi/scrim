var scrim = require('../index.js')
  , cop = require('cop')
  , hyperquest = require('hyperquest')

hyperquest('http://www.nodejs.org')
  .pipe(scrim())
  .pipe(cop(function (uri) { return uri + '\n' }))
  .pipe(process.stdout)
