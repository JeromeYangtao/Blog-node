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
            let {url} = request;
            // 返回的字符串或buffer
            let body = '';
            let headers = '';
            // url包含action的是ajax请求
            if (url.match('action')) {
                apiServer(url).then((val) => {
                    body = JSON.stringify(val);
                    headers = {
                        'content-type': 'application/json'
                    };
                    let finalHeaders = Object.assign(headers, {'X-powered-by': 'Node.js'});
                    response.writeHead(200, 'success', finalHeaders);
                    response.end(body)
                });

            } else {
                staticServer(url).then((body) => {
                    let finalHeaders = Object.assign(headers, {'X-powered-by': 'Node.js'});
                    response.writeHead(200, 'success', finalHeaders);
                    response.end(body)
                })
            }

        }
    }
}

module.exports = App;