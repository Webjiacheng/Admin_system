/**
 * Created by Administrator on 2017-04-23.
 */
define(['jquery','ArtTemplate','util'],function ($,ArtTemplate,util) {
    var totalModel="",money_id="",index=0;
    function getInfo() {
        $.ajax({
            type:'post',
            url:'http://app.youmasc.com/youma/master/goods_money.php',
            data:{},
            success:function (data) {
                totalModel=JSON.parse(data);
                console.log(totalModel);
                var html = ArtTemplate('commission-list-tpl', {list:totalModel});
                $('#tbody').html(html);

            },
            error:function (data) {
                console.log(data);
            }
        })
    };
    getInfo();
    $(document).on('click','.btn-modify',function () {
        var obj={};
        obj['late_rate']=$('#late_rate').val();
        obj['praise_rate']=$('#praise_rate').val();
        obj['all_order']=$('#all_order').val();
        obj['money_rate']=$('#money_rate').val();
        obj['money_id']=money_id;
        console.log(obj);
        $.ajax({
            type:'post',
            url:'http://app.youmasc.com/youma/master/update_goods_money.php',
            data:obj,
            success:function (data) {
                console.log(data);
                // totalModel=JSON.parse(data);
                // console.log(totalModel);
                // var html = ArtTemplate('owner-order', {list:totalModel});
                // $('#order-tbody').html(html);

            },
            error:function (data) {
                console.log(data);
            }
        })

    })
    // 点击修改按钮时：判断id与点击的是否相等，相等则拿到那条数据进行渲染
    $(document).on('click','.modify',function () {
        money_id=$(this).attr('data-user_id');
        for(var i=0;i<totalModel.length;i++){
            if(totalModel[i].money_id===money_id){
                console.log(totalModel[i]);
                var motaihtml = ArtTemplate('rule-motai', {list:totalModel[i]});
                $('#master-rule').html(motaihtml);
            }
        }
    });
    util.createEle('总规则');
    util.Page('#next','#prev','ul.pagination li',index,getInfo);




    // $('.order-btn').on('click',function () {
    //     $('#table_1').css('display','none');
    //     $('#table_2').css('display','block');
    //     $.ajax({
    //         type:'post',
    //         url:'http://app.youmasc.com/youma/master/driver_order.php',
    //         data:{
    //             from_index:0,
    //             count:10,
    //         },
    //         success:function (data) {
    //             totalModel=JSON.parse(data);
    //             console.log(totalModel);
    //             var html = ArtTemplate('owner-order', {list:totalModel});
    //             $('#order-tbody').html(html);
    //
    //         },
    //         error:function (data) {
    //             console.log(data);
    //         }
    //     })
    // })
})