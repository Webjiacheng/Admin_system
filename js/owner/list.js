/**
 * Created by hujiacheng on 2017/2/25.
 */
define(['jquery','ArtTemplate','util'],function ($,ArtTemplate,util) {
    var totalModel="",user_id="",index=0;
    function getInfo() {
        $.ajax({
            type:'post',
            url:'http://app.youmasc.com/youma/master/user_list.php',
            data:{
                from_index:0,
                count:10,
                classify:'车主'
            },
            success:function (data) {
                totalModel=JSON.parse(data);
                console.log(totalModel);
                var html = ArtTemplate('owner-list', {list:totalModel});
                $('#tbody').html(html);

            },
            error:function (data) {
                console.log(data);
            }
        })
    };
    getInfo();
    $(document).on('click','.check',function () {
        user_id=$(this).attr('data-user_id');
        for(var i=0;i<totalModel.length;i++){
            if(totalModel[i].user_id===user_id){
                console.log(totalModel[i]);
                var motaihtml = ArtTemplate('owner-motai', {list:totalModel[i]});
                $('#owner-item-info').html(motaihtml);
            }
        }
    });
    util.createEle('车主');
    util.Page('#next','#prev','ul.pagination li',index,getInfo);
})