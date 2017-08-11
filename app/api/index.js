module.exports = (request) => {
  let {url, method} = request
  let apiMap = {
    '/list.action': ['吉他', '三只松鼠', 'mongodb'],
    '/user.action': ['Thomson', '男', '中国']
  }
  if (method === 'GET') {
    // 返回一个数组或undefined
    return Promise.resolve(apiMap[url])
  } else {
    return new Promise((resolve, reject) => {
      let data = ''
      request.on('data', (chunk) => {
        data += chunk
      }).on('end', () => {

        resolve(JSON.parse(data))
      })
    })
  }

}
