// 核心逻辑入口
const staticServer = require('./static_server')
const apiServer = require('./api')
const urlParser = require(('./url-parser'))

class App {
  constructor () {

  }

  initServer () {
    // 高阶函数
    //方便个人的初始化工作
    // let _package = require('../package.json');
    return (request, response) => {
      request.context = {
        body: '',
        query: {},
        method: 'GET'
      }
      urlParser(request).then(() => {
        return apiServer(request)
        // 每个请求逻辑
        // 返回的字符串或buffer
      }).then((val) => {
        if (!val) {
          // API中找不到就算静态资源请求
          return staticServer(request)
        } else {
          return val
        }
      }).then((val) => {
        let base = {'X-powered-by': 'Node.js'}
        let body = ''
        if (val instanceof Buffer) {
          // 静态资源匹配返回Buffer
          body = val
        } else {
          // API中找到返回的是array
          body = JSON.stringify(val)
          let finalHeaders = Object.assign(base, {
            'content-type': 'application/json'
          })
          response.writeHead(200, 'success', finalHeaders)
        }
        response.end(body)
      })
    }
  }
}

module.exports = App