//使用mongoose处理ajax请求
let Router = require('./router')
//获取分类列表
Router.get('/categoryList.action', ctx => {})
// 增加分类
Router.get('/category.action', ctx => {return {a: 2}})
// 添加博客
Router.post('/blog.action', ctx => {})

module.exports = Router