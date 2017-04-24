/**
 * Created by hujiacheng on 2017/4/21.
 */
define(['jquery','ArtTemplate','util'],function ($,ArtTemplate,util) {
    // console.log('添加全局抽佣规则页面');
    $('.confirm_add').on('click',function () {
        var obj={};
        obj=util.toObj($('#commission-add-form').serialize());
        $.ajax({
            type:'post',
            url:'http://app.youmasc.com/youma/master/add_goods_money.php',
            data:obj,
            success:function (data) {
                console.log(data);
                if($.trim(data)==='success'){
                    alert('添加成功');
                }
            },
            error:function () {
                console.log('添加全局抽佣规则失败');
            }
        })
        return false;
    })
})