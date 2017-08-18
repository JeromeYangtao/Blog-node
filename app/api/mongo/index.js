const mongoose = require('mongoose')
const {blogSchema} = require('./schema')
// 第一个参数是collection的名字
const BlogModel = mongoose.model('Blog', blogSchema)
const $_saveBlog = blog => {
  return new BlogModel(blog).save().exec().then(_blog => {
    return {
      status: 1,
      data: _blog
    }
  })
}
module.exports = {
  $_saveBlog
}