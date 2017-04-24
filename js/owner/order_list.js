/**
 * Created by hujiacheng on 2017/4/24.
 */
/**
 * Created by hujiacheng on 2017/2/25.
 */
define(['jquery','ArtTemplate','util'],function ($,ArtTemplate,util) {
    var totalModel="",index=0;
    function getInfo() {
        $.ajax({
            type:'post',
            url:'http://app.youmasc.com/youma/master/driver_order.php',
            data:{
                from_index:0,
                count:10,
            },
            success:function (data) {
                console.log(data);
                totalModel=JSON.parse(data);
                console.log(totalModel);
                var html = ArtTemplate('owner-order', {list:totalModel});
                $('#order-tbody').html(html);

            },
            error:function (data) {
                console.log(data);
            }
        })
    };
    getInfo();
    util.createEle('车主订单');
    util.Page('#next','#prev','ul.pagination li',index,getInfo);
})