// 核心逻辑入口
const fs = require('fs')
const path = require('path')

class App {
  constructor () {
    this.middlewareArr = []
    //设计一个空的Promise
    this.middlewareChain = Promise.resolve()
  }

  use (middleware) {
    this.middlewareArr.push(middleware)
  }

  //创建Promise链条
  composeMiddleware (context) {
    let {middlewareArr} = this
    //根据中间件数组 创建Promise链条
    // iterator
    for (let middleware of middlewareArr) {
      this.middlewareChain = this.middlewareChain.then(() => {
        return middleware(context)
      })
    }
    return this.middlewareChain
  }

  initServer () {
    // 高阶函数
    //方便个人的初始化工作
    return (request, response) => {
      let context = {
        req: request,
        reqCtx: {
          body: '',//POST请求的数据
          query: {},//处理客户端GET请求
        },
        res: response,
        resCtx: {
          statusCode: 200,//状态码
          statusMessage: 'success',
          headers: {},//response的返回报文
          body: '',//返回给前端的内容区

        }
      }

      this.composeMiddleware(context)
        .then(() => {
          // 函数体不变
          let base = {'X-powered-by': 'Node.js'}
          let {body, headers, statusCode, statusMessage} = context.resCtx
          response.writeHead(statusCode, statusMessage, Object.assign(headers, base))
          response.end(body)
        })
      // .catch((error) => {
      //   if (error) {
      //     throw new Error('中间件')
      //   }
      // })
    }
  }
}

module.exports = App