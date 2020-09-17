const Router = require('koa-router')
const fs = require('fs')
const router = new Router()

router.post('/api/login', (ctx) => {
  let loginData = fs.readFileSync('./static/login.json').toString()
  ctx.body = loginData
})

router.get('/api/vue-ts/menu', (ctx) => {
  let menuData = fs.readFileSync('./static/vue-ts/menu.json').toString()
  ctx.body = menuData
})

module.exports = router