# scrim - scrape img tag src attributes from HTML page

[![Build Status](https://secure.travis-ci.org/michaelnisi/scrim.png?branch=master)](https://travis-ci.org/michaelnisi/scrim)

A through stream to scrape image URIs form a HTML page. You write an HTML page to it and it emits image URIs.

## Usage
    
    var scrim = require('scrim')
      , cop = require('cop')
      , request = require('request')

    request('http://npmjs.org')
      .pipe(scrim())
      .pipe(cop(function (uri) { return uri + '\n' }))
      .pipe(process.stdout)

## Installation

Install with [npm](https://npmjs.org):

    npm install scrim

## License

[MIT License](https://raw.github.com/michaelnisi/scrim/master/LICENSE)
