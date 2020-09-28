module.exports = {
  /**
  * @description: TOKEN效验
  * @param: {object} req 请求体对象
  * @param: {object} res 返回体对象
  * @param: {function} next 下一跳路由方法
  * @return: 无返回值
  */
  checkSession: (req, res, next) => {
    if(req.session && req.session.secret && req.session.secret.token){
        next();
    } else {
        res.send({"info": "用户登录超时！", "status": 401})
    }
  }
}