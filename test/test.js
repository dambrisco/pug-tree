var path = require('path')
var pugTree = require('../index.js')(
  path.join(__dirname, 'templates'), {
    title: 'Hello world!'
  })

var htmlIndex = pugTree.index({ body: 'This is a body!' })
var htmlNestedPage = pugTree.nested.page({ body: 'This is another body!' })

var expectedHtmlIndex = '<!DOCTYPE html><html><head><title>Hello world!</title></head><body><div>This is the index template</div><div>This is a body!</div></body></html>'
var expectedHtmlNestedPage = '<!DOCTYPE html><html><head><title>Hello world!</title></head><body><div>This is the nested page template</div><div>This is another body!</div></body></html>'

if (htmlIndex !== expectedHtmlIndex) {
  throw new Error('index.pug does not contain the expected template')
}
if (htmlNestedPage !== expectedHtmlNestedPage) {
  throw new Error('nested/page.pug does not contain the expected template')
}
