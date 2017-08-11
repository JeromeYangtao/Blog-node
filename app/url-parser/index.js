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
        let data = ''
        ctx.req.on('data', (chunk) => {
          data += chunk
        }).on('end', () => {
          reqCtx.body = JSON.parse(data)
          // 通知下一个流程
          resolve()
        })
      } else {
        resolve()
      }

    }
  })
}