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
            // 返回的字符串或buffer
            let body = '';
            // url包含action的是ajax请求
            if (url.match('action')) {
                body = apiServer(url);
                response.writeHead(200, 'success', {
                    'X-powered-by': 'Node.js',
                    'content-type': 'application/json'
                });
                response.end(JSON.stringify(body))
            } else {
                body = staticServer(url);
                response.writeHead(200, 'success', {'X-powered-by': 'Node.js'});
                response.end(body)
            }

        }
    }
}

module.exports = App;