// 处理cookie
// debugger
const cookie_parser = require('cookie')
// 设置白名单
const whiteNameList = ['/name_Thomson']
module.exports = (ctx) => {
  let {cookie} = ctx.req.headers
  let {res} = ctx
  let {url} = ctx.req
  // console.log(cookieObj)
  return Promise.resolve({
    then: (resolve, reject) => {
      // cookie解析成对象
      if (cookie) {
        let cookieObj = cookie_parser.parse(cookie)
      }
      let cookieStr = 'auth=true;Max-Age=10000000000000000'
      if (whiteNameList.indexOf(url)) {
        res.setHeader('Set-Cookie', cookieStr)
      }
      resolve()
    }
  })
}