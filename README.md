[![pug-tree](https://raw.githubusercontent.com/dambrisco/pug-tree/master/pug-tree.jpg)](https://raw.githubusercontent.com/dambrisco/pug-tree/master/pug-tree.jpg)  
[Credit: flickr/dapuglet](https://www.flickr.com/photos/dapuglet)

# pug-tree
[![NPM version](https://img.shields.io/npm/v/pug-tree?logo=npm)](https://npmjs.org/package/pug-tree "View this project on NPM")
[![Dependency status](https://img.shields.io/librariesio/github/dambrisco/pug-tree?logo=librariesio)](https://libraries.io/github/dambrisco/pug-tree "View this project on Libraries.io")
[![CI status](https://img.shields.io/github/actions/workflow/status/dambrisco/pug-tree/node.js.yml?logo=github)](https://github.com/dambrisco/pug-tree/actions/workflows/node.js.yml?query=branch%3Atrunk "View this project's CI run history")

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
