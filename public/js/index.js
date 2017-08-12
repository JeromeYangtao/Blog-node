setTimeout(function () {
  $.ajax({
    url: '/list.action',
    method: 'get',
    // 返回数组
    success: function (arr) {
      let liStr = arr.map(function (ele) {
        return '<li>' + ele + '</li>'
      }).join('')
      $('#root').html(liStr)
    },
    error: function (error) {
      console.log(error)
    }
  })
}, 1000)

setTimeout(function () {
  $.ajax({
    url: '/user.action',
    method: 'post',
    headers: {
      'content-type': 'application/json'
    },
    data: JSON.stringify([
      '中国', 'thomson'
    ]),
    // 返回数组
    success: function (arr) {
      let liStr = arr.map(function (ele) {
        return '<li>' + ele + '</li>'
      }).join('')
      $('#shop').html(liStr)
    }
    ,
    error: function (error) {
      console.log(error)
    }
  })
}, 2000)



