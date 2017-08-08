// 核心逻辑入口
const fs = require('fs');
const path = require('path');

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
            // 静态资源使用绝对路径
            // DRY原则
            let getPath = (url) => {
                return path.resolve(process.cwd(), 'public', `.${url}`);
            };
            let staticFunc = (url) => {
                if (url === '/') {
                    url = '/index.html'
                }
                let _path = getPath(url);
                fs.readFile(_path, 'utf8', (error, data) => {
                    response.end(data)
                });
            };
            staticFunc(url)
        }
    }
}

module.exports = App;