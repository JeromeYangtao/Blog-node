setTimeout(function () {
    $.ajax({
        url: '/user.action',
        method: 'get',
        success: function (data) {
            $('#root').html(data);
            console.log(data)
        },
        error: function (error) {
            console.log(error)
        }
    });
}, 1000);

