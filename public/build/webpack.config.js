// webpack项目配置
let plugins = require('./plugin_loader.js')['plugins']
let loaders = require('./plugin_loader.js')['loaders']
let path = require('path')
let AddResolve = (obj) => {
  let transObj = {}
  for (let key in obj) {
    transObj[key] = path.resolve(__dirname, '../', obj[key])
  }
  return transObj
}
//webpack配置文件
module.exports = {
  context: path.resolve(__dirname, '../'),
  watch: process.env['NODE_ENV'] != 'prod',
  entry: {
    index: './js/index.js',
    // manage: './js/manage/index.js',
    // detail: './js/detail/index.js',
    // list: './js/list/index.js',
    // about: './js/about/index.js',
    common: [
      // 'react',
      // 'react-dom',
      'reset',   //引用别名，resolve
      'common_lib',
      './js/index.js'
    ]
  },
  // debug: true,
  // 开发者工具
  devtool: 'source-map', //保留源代码和编译后的代码, .map
  output: {
    path: path.resolve(__dirname, '../dist/'),
    filename: '[name].js', //[]为占位符
    chunkFilename: '[name].min.js',
    publicPath: ''
  },
  resolve: {
    // 别名
    alias: AddResolve(require('./alias'))
  },
  plugins,
  module: {
    rules: loaders
  }
}