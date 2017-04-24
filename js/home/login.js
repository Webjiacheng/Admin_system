/**
 * Created by hujiacheng on 2017/2/26.
 */
define(['jquery','jqueryCookie','MD5'],function ($,undefined,MD5) {
    var userInfo=null;
    try{
        userInfo=JSON.parse($.cookie('userInfo'));
    }catch(e){
        userInfo={};
    }

    $('.login .avatar img').attr('src',userInfo.icon?userInfo.icon:'/img/default.jpg');
    // console.log(userInfo.icon);
    $('#formData').on('submit',function () {
        $.ajax({
            url:'http://app.youmasc.com/youma/login.php',
            type:'post',
            data:{
                phone:$('#phone').val(),
                password:$.md5($("#password").val())
            },
            success:function (data) {
                console.log('成功'+data);
                $.cookie('userInfo',JSON.stringify(data),{path:'/'});
                location.href='/index.html';
            },
            error:function (data){
                console.log('登录失败');
            }
        })
        return false;
    })
})