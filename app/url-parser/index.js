/*
 *url-parser
 * 处理客户端数据 (method query body)
 */
module.exports = (request) => {
  let {method, url, context} = request
  return Promise.resolve({
    then: (resolve, reject) => {
      context.method = method
      //@TODO
      context.query = {}
      if (method === 'POST') {
        //paused ===> flow
        let data = ''
        request.on('data', (chunk) => {
          data += chunk
        }).on('end', () => {
          context.body = JSON.parse(data)
          // 通知下一个流程
          resolve()
        })
      } else {
        resolve()
      }

    }
  })
}