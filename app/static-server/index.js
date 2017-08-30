const fs = require('fs')
const path = require('path')
const mime = require('mime')

// 静态资源使用绝对路径
// DRY原则
let getPath = (pathname) => {
  return path.resolve(process.cwd(), 'public', `.${pathname}`)
}
let staticFunc = (ctx) => {
  let {pathname} = ctx.reqCtx
  let {resCtx} = ctx
  return new Promise((resolve, reject) => {
    // 处理静态资源,CSS,JS,图像等，不包括HTML
    if (!pathname.match('action') && pathname.match(/\./)) {
      let _path = getPath(pathname)
      resCtx.headers = Object.assign(resCtx.headers, {
        'Content-Type': mime.lookup(_path)
      })
      console.log(_path)
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