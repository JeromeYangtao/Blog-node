/*
 *url-parser
 * 处理客户端数据,POST请求时前端发送的数据 (method query body)
 */
const Url = require('url')
module.exports = (ctx) => {
  let {method, url} = ctx.req
  let {reqCtx} = ctx
  // let {pathname, query} = reqCtx
  method = method.toLowerCase()
  Object.assign(reqCtx, Url.parse(url, true), {method})
  return Promise.resolve({
    then: (resolve, reject) => {
      if (method === 'post' || method === 'put') {
        //paused ===> flow
        //中文由3个buffer传输，字符串可能乱码
        let data = []
        ctx.req.on('data', (chunk) => {
          data.push(chunk)
        }).on('end', () => {
          let endData = Buffer.concat(data).toString()
          reqCtx.body = JSON.parse(endData)
          // 通知下一个流程
          resolve()
        })
      } else {
        resolve()
      }
    }
  })
}