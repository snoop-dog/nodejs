const Router = require('koa-router')
const fs = require('fs')
const router = new Router()

router.post('/api/login', (ctx) => {
  let loginData = fs.readFileSync('./static/login.json').toString()
  ctx.body = loginData
})

module.exports = router