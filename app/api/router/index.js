//创建路由模块
class Router {
  constructor () {
    this.routerMap = {
      'get': {},
      'post': {},
      'delete': {}
    }
  }

  get (pathname, handler) {
    let getMap = this.routerMap.get
    getMap[pathname] = handler
  }

  post (pathname, handler) {
    let postMap = this.routerMap.post
    postMap[pathname] = handler
  }

  delete (pathname, handler) {
    let deleteMap = this.routerMap.delete
    deleteMap[pathname] = handler
  }

  //对接request  response
  routes (ctx) {
    let {pathname, method} = ctx.reqCtx
    if (method === 'get' || method === 'post' || method === 'delete') {
      let handler = this.routerMap[method][pathname]
      if (handler) {
        return Promise.resolve(handler(ctx))
      } else {
        return Promise.resolve()
      }
    } else {
      return Promise.resolve()
    }
  }
}

module.exports = new Router()