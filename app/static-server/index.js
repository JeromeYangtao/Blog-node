const fs = require('fs')
const path = require('path')

// 静态资源使用绝对路径
// DRY原则
let getPath = (url) => {
  return path.resolve(process.cwd(), 'public', `.${url}`)
}
let staticFunc = (ctx) => {
  let {url} = ctx.req
  let {resCtx} = ctx
  return new Promise((resolve, reject) => {
    if (!url.match('action')) {
      // let map = {
      //   '/': '/index.html',
      //   '/about': '/about.html',
      //   '/list': '/list.html'
      // }
      // url = map[url] || url
      if (url === '/') {
        url = '/index.html'
      }
      let _path = getPath(url)
      fs.readFile(_path, (error, data) => {
        if (error) {
          resCtx.body = `NOT FOUND${error.stack}`
          console.log(error)
          //   reject()
        }
        resCtx.body = data
        resolve()
      })
    } else {
      resolve()
    }
  })
}

module.exports = staticFunc