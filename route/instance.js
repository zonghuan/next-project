var route = require('koa-router')()

route.use(function *(next){
  this.set('Content-Type','text/html')
  yield next
})

module.exports = route
