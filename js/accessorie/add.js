/**
 * Created by Administrator on 2017-04-23.
 */
/**
 * Created by hujiacheng on 2017/4/22.
 */
/**
 * Created by hujiacheng on 2017/2/26.
 */
define(['jquery','bootstrap','Datepicker','DatepickerLanguage','util'],function ($,bootstrap,Datepicker,DatepickerLanguage,util) {
    console.log('配件添加页面');
    $('#accessorie_add').on('click',function () {
        console.log($('#accessorie-add-form').serialize());
        var obj={};
        obj=util.toObj($('#accessorie-add-form').serialize());
        console.log(obj);
        $.ajax({
            type:'post',
            url:'http://app.youmasc.com/youma/master/add_project.php',
            data:obj,
            success:function (data) {
                console.log(data);
            },
            error:function () {
                console.log('添加配件失败');
            }
        })
    })
})