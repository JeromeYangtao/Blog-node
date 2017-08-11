const fs = require('fs')
const path = require('path')

// 静态资源使用绝对路径
// DRY原则
let getPath = (url) => {
  return path.resolve(process.cwd(), 'public', `.${url}`)
}
let staticFunc = (request) => {
  let {url} = request
  return new Promise((resolve, reject) => {
    let map = {
      '/': '/index.html',
      '/about': '/about.html',
      '/list': '/list.html'
    }
    url = map[url] || url
    let _path = getPath(url)
    fs.readFile(_path, (error, data) => {
      if (error) {
        reject(`NOT FOUND${error.stack}`)
      }
      resolve(data)
    })
  })
}

module.exports = staticFunc