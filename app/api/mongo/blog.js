const mongoose = require('mongoose')
const {blogSchema} = require('./schema')

// 第一个参数是collection的名字
const BlogModel = mongoose.model('Blog', blogSchema)

const $_saveBlog = async (params) => {
  const blog = new BlogModel({
    title: params.title,
    content: params.content,
    category: params.category,
    date: params.date
  })
  let created = await blog.save()
    .catch(e => {
        console.log(e.code)
        console.log('保存博客出错')
      }
    )
  return {
    status: 1,
    data: created || [],
    msg: '博客保存成功'
  }
}

const $_getBlogList = async query => {
  let blogList = await BlogModel.find(query)
  return {
    status: 1,
    data: blogList || [],
    msg: '获取博客列表成功'
  }
}

module.exports = {
  $_saveBlog,
  $_getBlogList
}