[![pug-tree](https://raw.githubusercontent.com/dambrisco/pug-tree/master/pug-tree.jpg)](https://raw.githubusercontent.com/dambrisco/pug-tree/master/pug-tree.jpg)  
[Source: flickr/dapuglet](https://www.flickr.com/photos/dapuglet)

# pug-tree
[![NPM version](https://img.shields.io/npm/v/pug-tree.svg)](https://npmjs.org/package/pug-tree "View this project on NPM")
[![Build Status](https://img.shields.io/travis/dambrisco/pug-tree.svg)](https://travis-ci.org/dambrisco/pug-tree "View this project's build information")
[![Dependency Status](https://img.shields.io/david/dambrisco/pug-tree.svg)](https://david-dm.org/dambrisco/pug-tree "Check this project's dependencies")

pug-tree is a tiny library design to build nested objects of templating functions from a given directory of [pug template](https://github.com/pugjs/pug) files.

## Installation and Usage

* `npm install --save pug-tree`
* `require('pug-tree')(directory, defaults)`
  * `directory` should be the top level of your templates folder, usually something like `path.join(__dirname, 'templates')`
  * `defaults` is properties object that is pre-bound to template - this is a good place to include information that doesn't usually change like `title`
  * See `test/test.js` for usage example

Given a folder structure:
```
<project-name>
↳ templates
  ↳ index.pug
  ↳ nested
    ↳ page.pug
```

You will be able to do the following:
```node
var templates = require('pug-tree')(path.join(__dirname, 'templates'), { title: title })
var indexHtml = templates.index({ body: indexBody })
var nestedPageHtml = templates.nested.page({ body: nestedPageBody })
```

Where `title` and `body` are both available to each of the templates.
