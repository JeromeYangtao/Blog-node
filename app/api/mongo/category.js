const mongoose = require('mongoose')
const {categorySchema} = require('./schema')

// 第一个参数是collection的名字
const CategoryModel = mongoose.model('Category', categorySchema)

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
  $_saveCategory,
  $_getCategoryList,
}