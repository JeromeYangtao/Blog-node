let Router = require('./router')
require('./ajax')
module.exports = (ctx) => {
  let {method} = ctx.req
  let {reqCtx, res, resCtx} = ctx
  let {pathname} = reqCtx
  return Promise.resolve({
    then: (resolve, reject) => {
      if (pathname.match('action')) {
        return Router.routes(ctx).then(val => {
          resCtx.body = JSON.stringify(val)
          resCtx.headers = Object.assign(resCtx.headers, {
            'Content-Type': 'application/json'
          })
          resolve()
        })
      }
      resolve()
    }
  })
}
