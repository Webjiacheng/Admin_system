/**
 * Created by hujiacheng on 2017/4/22.
 */
/**
 * Created by hujiacheng on 2017/2/26.
 */
define(['jquery','bootstrap','Datepicker','DatepickerLanguage','util'],function ($,bootstrap,Datepicker,DatepickerLanguage,util) {
    $('#add').on('click',function () {
        var str=$('#teacher-add-form').serialize(),obj={};
        obj=util.toObj(str);
        console.log(obj);
        $.ajax({
            type:'post',
            url:'http://app.youmasc.com/youma/master/add_master.php',
            data:obj,
            success:function (data) {
                console.log(data);
                //location.href='/html/master/list.html';
            },
            error:function (data) {
                console.log('添加失败');
            }
        })
        return false;
    })
})