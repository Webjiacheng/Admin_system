/**
 * Created by hujiacheng on 2017/4/21.
 */
define(['jquery'],function ($) {
    var arr = location.pathname.split('/'),lenrth=arr.length,num=0;
    console.log(arr[lenrth-1]);//0:单选题  1:多选题   2:填空题
    $('#add_items').on('click',function () {
        num++;
        if(num==1){
            $('#item-D').slideDown();
        }else {
            $('#item-E').slideDown(500);
            setTimeout(function () {
                $('.add_item_btn').css('display','none');
            },500)
        }
    })
    $('#tm_add').on('click',function () {
        var obj={},arr=[];
        arr=$('#timu-add-form').serialize().split('&');
        for(var i=0;i<arr.length;i++){
            if(arr[i].split('=')[1]===""){
                obj[arr[i].split('=')[0]]='无';
            }else {
                obj[arr[i].split('=')[0]]=decodeURI(arr[i].split('=')[1]);
            }


        }
        obj['answer']=obj['answer'].toLowerCase();
        $.ajax({
            type:'post',
            url:'http://app.youmasc.com/youma/master/add_topic_single_choice.php',
            data:obj,
            success:function (data) {
                console.log(data);
            },
            error:function () {
                console.log('添加题目失败');
            }
        })
        return false;
    })
})