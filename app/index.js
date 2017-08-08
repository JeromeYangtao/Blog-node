// 核心逻辑入口
const staticServer = require('./static_server');
const apiServer = require('./api');

class App {
    constructor() {

    }

    initServer() {
        // 高阶函数
        //方便个人的初始化工作
        // let _package = require('../package.json');
        return (request, response) => {
            // 每个请求逻辑
            // 结构赋值
            let {url} = request;
            // url包含action的是ajax请求
            if (url.match('action')) {
                let body = apiServer(url);
                response.writeHead(200, 'success', {'X-powered-by': 'Node.js'});
                response.end(body)
            } else {
                let body = staticServer(url);
                response.writeHead(200, 'success', {'X-powered-by': 'Node.js'});
                response.end(body)
            }

        }
    }
}

module.exports = App;