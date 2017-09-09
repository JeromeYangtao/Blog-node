// 创建schema
const {Schema} = require('mongoose')
// 创建博客的数据存储 schema
const blogSchema = new Schema({
  title: String,
  content: String,//html
  // rawContent: String,//markdown
  category: String,//分类
  // date: {
  //   type: String, default: () => {
  //     return new Date().toLocaleString()
  //   }
  // }
})

// 创建博客的数据存储 schema
const categorySchema = new Schema({
  category: String,
  // _id: String
})

module.exports = {
  blogSchema,
  categorySchema
}
