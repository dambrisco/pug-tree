var pug = require('pug')
var path = require('path')
var fs = require('fs')

function compile(dir, defaults) {
  return fs.readdirSync(dir).map(file => {
    var f = path.join(dir, file)
    var stat = fs.statSync(f)

    if (stat && stat.isDirectory()) {
      var obj = {}
      obj[file] = compile(f, defaults)
      return obj
    } else {
      return {
        name: path.basename(file, path.extname(file)),
        path: f
      }
    }
  }).reduce((acc, val) => {
    if (typeof(val.name) === 'string'
      && typeof(val.path) === 'string') {
      var template = pug.compileFile(val.path)
      acc[val.name] = locals => {
        var all = Object.assign({}, defaults, locals)
        return template(all)
      }
    } else {
      Object.assign(acc, val)
    }
    return acc
  }, {})
}

module.exports = (dir, defaults) => {
  return compile(dir, defaults)
}
