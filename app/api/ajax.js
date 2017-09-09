//使用mongoose处理ajax请求
let Router = require('./router')
let {$_saveCategory, $_getCategoryList} = require('./mongo/category')
let {$_saveBlog, $_getBlogList} = require('./mongo/blog')
//获取分类列表
Router.get('/categoryList.action', ctx => {
  return $_getCategoryList(ctx.reqCtx.query)
})
// 增加分类
Router.get('/category.action', ctx => {
  let category = ctx.reqCtx.query
  return $_saveCategory(category)
})

// 添加博客
Router.post('/blog.action', ctx => {
  let blog = ctx.reqCtx.body
  return $_saveBlog(blog)
})
//获取博客列表
Router.get('/blogList.action', ctx => {
  return $_getBlogList(ctx.reqCtx.query)
})

module.exports = Router