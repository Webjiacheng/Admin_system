/**
 * Created by Administrator on 2017-04-23.
 */
/**
 * Created by hujiacheng on 2017/2/26.
 */
/**
 * Created by hujiacheng on 2017/2/26.
 */
define(['jquery','ArtTemplate','util'],function ($,ArtTemplate,util) {
    var totalModel='',index=0;

    $(document).on('click','.check',function () {
        user_id=$(this).attr('data-user_id');
        for(var i=0;i<totalModel.length;i++){
            if(totalModel[i].user_id===user_id){
                console.log(totalModel[i]);
                var motaihtml = ArtTemplate('merchants-motai', {list:totalModel[i]});
                $('#merchants-item-info').html(motaihtml);
            }
        }
    });

    function getInfo() {
        $.ajax({
            type:'post',
            url:'http://app.youmasc.com/youma/master/shop_order.php',
            data:{
                from_index:0,
                count:10,
            },
            success:function (data) {
                totalModel=JSON.parse(data);
                var html = ArtTemplate('push_tpl', {list:totalModel});
                $('#push_list').html(html);

            },
            error:function (data) {
                console.log(data);
            }
        });
    };
    getInfo();

    $('.btn-push').on('click',function () {
        console.log(1);
        console.log($('#push-form-data').serialize());
        var str={},arr=[];
        arr=$('#push-form-data').serialize().split('&');
        for(var i=0;i<arr.length;i++){
            str[arr[i].split('=')[0]]=arr[i].split('=')[1];
        }
        $.ajax({
            type:'post',
            url:'http://app.youmasc.com/youma/master/add_master_order.php',
            data:str,
            success:function (data) {
                console.log(data);
            },
            error:function () {
                console.log('推送失败');
            }
        })
    });
    util.createEle('商家推送的订单');
    util.Page('#next','#prev','ul.pagination li',index,getInfo);

})