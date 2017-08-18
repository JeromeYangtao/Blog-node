const mongoose = require('mongoose')
const {blogSchema, categorySchema} = require('./schema')
// 第一个参数是collection的名字
const BlogModel = mongoose.model('Blog', blogSchema)
const CategoryModel = mongoose.model('Category', categorySchema)
const $_saveBlog = blog => {
  return BlogModel(blog).save().exec().then(_blog => {
    return {
      status: 1,
      data: _blog
    }
  })
}
const $_saveCategory = category => {
  return CategoryModel(category).save().exec().then(_category => {
    return {
      status: 1,
      data: _category
    }
  })
}
module.exports = {
  $_saveBlog,
  $_saveCategory
}