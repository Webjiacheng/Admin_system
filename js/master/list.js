/**
 * Created by hujiacheng on 2017/4/21.
 */
define(['jquery','ArtTemplate','util'],function ($,ArtTemplate,util) {
    var totalModel="",user_id="",index=0;
    function getInfo(index) {
        $.ajax({
            type:'post',
            url:'http://app.youmasc.com/youma/master/master_list.php',
            data:{
                from_index:index,
                count:10,
            },
            success:function (data) {
                totalModel=JSON.parse(data);
                console.log(totalModel);
                var html = ArtTemplate('master-tpl', {list:totalModel});
                $('#tbody').html(html);

            },
            error:function (data) {
                console.log(data);
            }
        })
    };
    getInfo(0);
    $(document).on('click','.check',function () {
        user_id=$(this).attr('data-user_id');
        for(var i=0;i<totalModel.length;i++){
            if(totalModel[i].user_id===user_id){
                console.log(totalModel[i]);
                var motaihtml = ArtTemplate('master-motai', {list:totalModel[i]});
                $('#master-item-info').html(motaihtml);
            }
        }
    });
    $(document).on('click','.go-sub',function () {
        $.ajax({
            type:'post',
            url:'http://app.youmasc.com/youma/master/update_master.php',
            data:{
                nickname: $('#nickname').val(),
                company:$('#company').val(),
                job:$('#job').val(),
                gender:$('#gender').val(),
                phone:$('#phone').val(),
                state:$('#state').val(),
                address:$('#address').val(),
                user_id:user_id
            },
            success:function (data) {
                console.log(data);
                getInfo();
            },
            error:function () {
                console.log('失败');
            }
        })
    });
    util.createEle('师傅');
    util.Page('#next','#prev','ul.pagination li',index,getInfo);
})