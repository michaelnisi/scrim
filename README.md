# scrim - scrape image URIs from HTML page

[![Build Status](https://secure.travis-ci.org/michaelnisi/scrim.png?branch=master)](https://travis-ci.org/michaelnisi/scrim)

A through [Stream](http://nodejs.org/docs/latest/api/stream.html) to scrape image URIs from an HTML page. You pipe an HTML formatted string to it, and it emits image URIs.

## Usage
    
    var scrim = require('scrim')
      , cop = require('cop')
      , hyperquest = require('hyperquest')

    hyperquest('http://www.nodejs.org')
      .pipe(scrim())
      .pipe(cop(function (uri) { return uri + '\n' }))
      .pipe(process.stdout)

## Installation

Install with [npm](https://npmjs.org):

    npm install scrim

## License

[MIT License](https://raw.github.com/michaelnisi/scrim/master/LICENSE)
