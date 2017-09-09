//使用mongoose处理ajax请求
let Router = require('./router')
let {$_saveCategory, $_getCategoryList, $_removeCategory} = require('./mongo/category')
let {$_saveBlog, $_getBlogList, $_removeBlog} = require('./mongo/blog')
//博客分类
Router.get('/category.action', ctx => {
  return $_getCategoryList(ctx.reqCtx.query)
})
Router.post('/category.action', ctx => {
  let category = ctx.reqCtx.body
  return $_saveCategory(category)
})
Router.delete('/category.action', ctx => {
  let condition = ctx.reqCtx.query
  return $_removeCategory(condition)
})

//博客
Router.get('/blog.action', ctx => {
  return $_getBlogList(ctx.reqCtx.query)
})
Router.post('/blog.action', ctx => {
  let blog = ctx.reqCtx.body
  return $_saveBlog(blog)
})
Router.delete('/blog.action', ctx => {
  let condition = ctx.reqCtx.query
  return $_removeBlog(condition)
})

module.exports = Router