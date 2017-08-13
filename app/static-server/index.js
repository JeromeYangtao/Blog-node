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
    // 处理静态资源,CSS,JS,图像等，不包括HTML
    if (!url.match('action') && url.match(/\./)) {
      let _path = getPath(url)
      fs.readFile(_path, (error, data) => {
        if (error) {
          resCtx.body = `NOT FOUND${error.stack}`
          resolve()
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