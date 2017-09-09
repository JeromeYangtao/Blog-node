const mongoose = require('mongoose')
const {blogSchema, categorySchema} = require('./schema')
// 第一个参数是collection的名字
const BlogModel = mongoose.model('Blog', blogSchema)
const CategoryModel = mongoose.model('Category', categorySchema)

const $_saveBlog = async (params) => {
  const blog = new BlogModel({
    title: params.title,
    content: params.content,
    category: params.category
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

const $_saveCategory = async params => {
  const category = new CategoryModel({
    category: params.category
  })
  let created = await category.save()
    .catch(e => {
        console.log(e.code)
        console.log('保存博客类别出错')
      }
    )
  return {
    status: 1,
    data: {
      _id: created._id,
      category: created.category
    },
    msg: '博客类别保存成功'
  }
}

const $_getCategoryList = async query => {
  let result = await CategoryModel.find(query)
  return {
    status: 1,
    data: result,
    msg: '获取博客类别列表成功'
  }
}
module.exports = {
  $_saveBlog,
  $_saveCategory,
  $_getCategoryList,
  $_getBlogList
}