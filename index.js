const Koa = require('koa')
const app = new Koa()
const cors = require('koa2-cors')
const bodyParser = require('koa-bodyparser')
const router = require('./router/index')

app.use(bodyParser())
app.use(cors())


app.use(router.routes())

app.listen(9527,() => console.log("服务启动 localhost:9527"))