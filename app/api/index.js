let Router = require('./router')
//获取分类列表
Router.get('/categoryList.action', ctx => {})
// 增加分类
Router.get('/category.action', ctx => {return {a: 2}})
// 添加博客
Router.post('/blog.action', ctx => {})
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
