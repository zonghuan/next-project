var route = require('./instance.js')

route.get('/api/test',function *(next){
  this.body = JSON.stringify({'msg':'abc'})
})
