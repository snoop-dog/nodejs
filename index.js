const Koa = require('koa')
const app = new Koa()
const Router = require('koa-router')
const cors = require('koa2-cors')
const bodyParser = require('koa-bodyparser')
const fs = require('fs')
let router = new Router()

app.use(bodyParser())
app.use(cors())

router.post('/api/login', (ctx) => {
  let loginData = fs.readFileSync('./static/login.json').toString()
  ctx.body = loginData
})

app.use(router.routes())

app.listen(9527,() => console.log("服务启动 localhost:9527"))