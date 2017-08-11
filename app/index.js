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
      let context = {
        req: request,
        reqCtx: {
          body: '',//POST请求的数据
          query: {},//处理客户端GET请求
        },
        res: response,
        resCtx: {
          headers: {},//response的返回报文
          body: '',//返回给前端的内容区
        }
      }
      urlParser(context)
        .then(() => {
          return apiServer(context)
        })
        .then(() => {
          return staticServer(context)
        })
        .then(() => {
          let base = {'X-powered-by': 'Node.js'}
          let {body} = context.resCtx
          response.writeHead(200, 'success', base)
          response.end(body)
        })
    }
  }
}

module.exports = App