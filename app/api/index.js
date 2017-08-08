module.exports = (url) => {
    let apiMap = {
        '/list.action': ['吉他', '三只松鼠', 'mongodb'],
        '/user.action': ['Thomson', '男', '中国']
    };
    return apiMap[url]
};
