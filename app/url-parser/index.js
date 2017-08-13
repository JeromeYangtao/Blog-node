/*
 *url-parser
 * 处理客户端数据,POST请求时前端发送的数据 (method query body)
 */

module.exports = (ctx) => {
  let {method} = ctx.req
  let {reqCtx} = ctx
  return Promise.resolve({
    then: (resolve, reject) => {
      if (method === 'POST') {
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