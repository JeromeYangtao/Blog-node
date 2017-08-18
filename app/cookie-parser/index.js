// 处理cookie
// debugger
const cookie_parser = require('cookie')
// 设置白名单
const whiteNameList = ['/name_Thomson']
module.exports = (ctx) => {
  let {cookie} = ctx.req.headers
  let {res, resCtx} = ctx
  let {pathname} = ctx.reqCtx
  return Promise.resolve({
    then: (resolve, reject) => {
      let cookieStr = time => `auth=true;Max-Age=${time}`
      // cookie解析成对象
      let cookieObj = cookie_parser.parse(cookie || '')
      if (cookieObj['auth']) {
        resCtx.hasUser = true
        res.setHeader('Set-Cookie', cookieStr(3600))
      }

      if (whiteNameList.indexOf(pathname) > -1) {
        res.setHeader('Set-Cookie', cookieStr(3600))
      }
      //登出
      if (pathname === '/logout') {
        res.setHeader('Set-Cookie', cookieStr(0))
      }
      resolve()
    }
  })
}