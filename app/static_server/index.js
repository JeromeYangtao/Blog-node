const fs = require('fs');
const path = require('path');
// 静态资源使用绝对路径
// DRY原则
let getPath = (url) => {
    return path.resolve(process.cwd(), 'public', `.${url}`);
};
let staticFunc = (url) => {
    let map = {
        '/': '/index.html',
        '/about': '/about.html',
        '/list': '/list.html'
    };
    url = map[url] || url
    let _path = getPath(url);
    let body = '';
    try {
        body = fs.readFileSync(_path,)
    } catch (error) {
        body = `NOT FOUND ${error.stack}`
    }
    return body
};

module.exports = staticFunc;