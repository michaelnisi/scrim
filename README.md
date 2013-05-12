# scrim - scrape image URIs from HTML

[![Build Status](https://secure.travis-ci.org/michaelnisi/scrim.png?branch=master)](https://travis-ci.org/michaelnisi/scrim)

The `scrim` [Node.js](http://nodejs.org/) module scrapes image URIs from HTML documents. Pipe an HTML formatted string to it, and `scrim` emits image URIs.

## Usage

    var scrim = require('scrim')
      , cop = require('cop')
      , http  = require('http')

    http.get('http://www.nodejs.org', function (res) {
      res
        .pipe(scrim())
        .pipe(cop(function (uri) { return uri + '\n' }))
        .pipe(process.stdout)
    })

### scrim()

The `scrim` module exports a single function that returns a [Transform](http://nodejs.org/api/stream.html#stream_class_stream_transform) stream.

## Installation

Install with [npm](https://npmjs.org):

    npm install scrim

## License

[MIT License](https://raw.github.com/michaelnisi/scrim/master/LICENSE)
