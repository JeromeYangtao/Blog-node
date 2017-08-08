// 核心逻辑入口
const staticServer = require('./static_server');

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
            let body = staticServer(url);
            response.end(body)
        }
    }
}

module.exports = App;