/**
 * Created by hujiacheng on 2017/4/24.
 */
/**
 * Created by Administrator on 2017-04-23.
 */
define(['jquery','bootstrap','ArtTemplate','util'],function ($,bootstrap,ArtTemplate,util) {
    var totalModel='',goods_id='',index=0;
    console.log('配件列表页面');
    function getInfo(str) {
        $.ajax({
            type:'post',
            url:'http://app.youmasc.com/youma/master/project_list.php',
            data:{
                from_index:0,
                count:10,
                classify_id:str
            },
            success:function (data) {
                totalModel=JSON.parse(data);
                console.log(totalModel);
                var html = ArtTemplate('accessorie-tpl', {list:totalModel});
                $('#tbody').html(html);

            },
            error:function (data) {
                console.log(data);
            }
        })
    };
    getInfo('汽车隔音');
    $(document).on('click','.check',function () {
        goods_id=$(this).attr('data-goods_id');
        for(var i=0;i<totalModel.length;i++){
            if(totalModel[i].goods_id===goods_id){
                var motaihtml = ArtTemplate('peijian-tpl', {list:totalModel[i]});
                $('#peijian-motai').html(motaihtml);
            }
        }
    });
    $(document).on('click','.go-sub',function () {
        $.ajax({
            type:'post',
            url:'http://app.youmasc.com/youma/master/update_project.php',
            data:{
                goods_id:goods_id,
                title:$('#title').val(),
                classify:$('#classify').val(),
                price1:$('#price1').val(),
                price2:$('#price2').val(),
                icon:$('#icon').val(),
                completion:$('#completion').val(),
                province:$('#province').val(),
                city:$('#city').val(),
                district:$('#district').val(),
                district_type:$('#district_type').val(),
                classify_id:$('#classify_id').val(),
                from_interval:$('#from_interval').val(),
                to_interval:$('#to_interval').val(),
                state:$('#state').val(),
            },
            success:function (data) {
                console.log(data);
            },
            error:function () {
                console.log('修改配件信息失败');
            }
        })
    });
    util.createDetail1Ele('汽车音响');
    util.Page('#next','#prev','ul.pagination li',index,getInfo);
})