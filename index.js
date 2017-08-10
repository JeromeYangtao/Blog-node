const http = require('http')
const PORT = 7000
const App = require('./app') //默认找app下的index.js
const server = new App()

http.createServer(server.initServer()).listen(PORT, function () {
  console.log(`server is listening ${PORT}`)
})
