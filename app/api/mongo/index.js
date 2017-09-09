const mongoose = require('mongoose')
const {blogSchema, categorySchema} = require('./schema')
// 第一个参数是collection的名字
const BlogModel = mongoose.model('Blog', blogSchema)
const CategoryModel = mongoose.model('Category', categorySchema)
const $_saveBlog = blog => {
  return BlogModel.findOneAndUpdate({
    title: blog.title,
    content: blog.content,
    category:blog.category
  }).then(_blog => {
    return {
      status: 1,
      data: _blog
    }
  })
}
const $_saveCategory = category => {
  return CategoryModel.findOneAndUpdate({
    category: category.name
  }, category, {
    //update and insert
    upsert: true,
    //无论如何都返回数据
    new: true
  }).then(_category => {
    return {
      status: 1,
      data: _category
    }
  })
}
const $_getCategoryList = query => {
  //collection + document的样子
  return CategoryModel.find(query).exec().then(categoryList => {
    return {
      status: 1,
      data: categoryList || []
    }
  })
}
module.exports = {
  $_saveBlog,
  $_saveCategory,
  $_getCategoryList
}