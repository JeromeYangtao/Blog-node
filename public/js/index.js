setTimeout(function () {
  $.ajax({
    url: '/user.action',
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


