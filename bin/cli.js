#!/usr/bin/env node

var hoard = require('../index.js')()
  , request = require('request')
  , stdout = process.stdout

;(function () {
  var arg = process.argv.splice(2)
    , url = arg[0]

  url = 'http://www.google.com/reader/shared/user%2F00420557349755252971%2Fstate%2Fcom.google%2Fstarred?hl=en&hl=en&c=CJWeofbL7LQC'

  request(url)
    .pipe(hoard)
    .pipe(stdout)
})()

