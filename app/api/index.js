module.exports = (request) => {
  // request.context = {
  //   body: '',
  //   query: {},
  //   method: 'GET'
  // }

  let {url, method, context} = request
  let apiMap = {
    '/list.action': ['吉他', '三只松鼠', 'mongodb'],
    '/user.action': ['Thomson', '男', '中国']
  }
  if (method === 'GET') {
    // 返回一个数组或undefined
    return Promise.resolve(apiMap[url])
  } else {
    // 处理POST请求
    let {body} = context
    return Promise.resolve(body)
  }

}
