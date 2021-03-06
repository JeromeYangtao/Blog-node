const http = require('http')
const PORT = 7000
const App = require('./app')
const server = new App()
//中间件
const urlParser = require('./app/url-parser')
const cookieParser = require('./app/cookie-parser')
const apiServer = require('./app/api')
const staticServer = require('./app/static-server')
const viewServer = require('./app/view-server')

server.use(urlParser)
server.use(cookieParser)
server.use(apiServer)
server.use(staticServer)
server.use(viewServer)

// 引入mongoose
const mongoose = require('mongoose')
mongoose.Promise = global.Promise
uri = 'mongodb://localhost/blog'
mongoose.connect(uri, {useMongoClient: true})
let db = mongoose.connection
db.on('error', () => {
  console.log(`error happen for db`)
})
  .once('open', () => {
    console.log('连接成功')
  })
//启动app
http.createServer(server.initServer()).listen(PORT, () => {
  console.log(`server listening on port ${PORT}`)
})



