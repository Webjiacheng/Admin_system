/**
 * Created by hujiacheng on 2017/2/26.
 */
/**
 * Created by hujiacheng on 2017/2/26.
 */
define(['jquery','ArtTemplate','util'],function ($,ArtTemplate,util) {
    var index=0;
    function getInfo() {
        $.ajax({
            type:'post',
            url:'http://app.youmasc.com/youma/master/user_list.php',
            data:{
                from_index:0,
                count:10,
                classify:'商家'
            },
            success:function (data) {
                totalModel=JSON.parse(data);
                var html = ArtTemplate('merchants-tpl', {list:totalModel});
                $('#merchants_list').html(html);

            },
            error:function () {
                console.log('获取商家列表失败');
            }
        });
    };
    getInfo();

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
    util.createEle('商家');
    util.Page('#next','#prev','ul.pagination li',index,getInfo);

})