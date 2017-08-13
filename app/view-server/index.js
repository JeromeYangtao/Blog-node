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
          let htmlPath = path.resolve(viewPath, `${ejsName}.ejs`)
          let tempStr = fs.readFileSync(htmlPath, 'utf8')
          let render = ejs.compile(tempStr, {
            compileDebug: true
          })
          // resCtx.body = render({
          //     hello: 'world'
          //   }
          // )
          resCtx.body = tempStr
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