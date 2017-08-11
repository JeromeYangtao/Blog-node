module.exports = (ctx) => {
  let {url, method} = ctx.req
  let {reqCtx, res, resCtx} = ctx

  let apiMap = {
    '/list.action': ['吉他', '三只松鼠', 'mongodb'],
    '/user.action': ['Thomson', '男', '中国']
  }
  return Promise.resolve({
    then: (resolve, reject) => {
      if (url.match('action')) {
        if (method === 'GET') {
          // 返回一个数组或undefined
          resCtx.body = JSON.stringify(apiMap[url])
        } else {
          // 处理POST请求
          let {body} = reqCtx
          resCtx.body = JSON.stringify(body)
        }
        res.setHeader('Content-Type', 'application/json')
      }
      resolve()
    }
  })

}
