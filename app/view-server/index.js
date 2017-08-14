const ejs = require('ejs')
const fs = require('fs')
const path = require('path')
const mime = require('mime')
const urlRewriteMap = require('./urlRewrite')

module.exports = (ctx) => {
  let {req, resCtx} = ctx
  let {url} = req
  return Promise.resolve({
    then: (resolve, reject) => {
      if (url.match('action') || url.match(/\./)) {
        resolve()
      } else {
        // 处理HTML
        let ejsName = urlRewriteMap[url]
        const viewPath = path.resolve(__dirname, 'ejs')
        if (ejsName) {
          //ejs动态渲染
          let layoutPath = path.resolve(viewPath, 'layout.ejs')
          let layoutHtml = fs.readFileSync(layoutPath, 'utf8')
          let render = ejs.compile(layoutHtml, {
            compileDebug: true,
            filename: layoutPath   //相对路径的基准
          })
          let html = render({
              templateName: ejsName
            }
          )
          resCtx.body = html
          resCtx.headers = Object.assign(resCtx.headers, {
            'Content-Type': 'text/html'
          })
          resolve()
        } else {
          // 重定向
          resCtx.headers = Object.assign(resCtx.headers, {
            'Location': '/'
          })
          resCtx.statusCode = 302
          resCtx.statusMessage = 'redirect'
          // resCtx.body = ''
          resolve()
        }
      }

    }
  })
}