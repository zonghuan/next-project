const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const Koa = require('koa')
const appKoa = new Koa()
const port = 3000

var router=require('./route')
appKoa.use(router.routes())
  .use(router.allowedMethods())

app.prepare().then(() => {
  createServer((req, res) => {
    const parsedUrl = parse(req.url, true)
    const { pathname, query } = parsedUrl
    if(pathname.indexOf('/api')>-1){
      return appKoa.callback()(req,res)
    }
    app.render(req, res, pathname, query)

  })
  .listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})
