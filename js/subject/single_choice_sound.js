/**
 * Created by hujiacheng on 2017/4/24.
 */
/**
 * Created by hujiacheng on 2017/4/21.
 */
define(['jquery','ArtTemplate','util'],function ($,ArtTemplate,util) {
    var totalModel="",topic_id="",index=0;
    function getInfo(str) {
        $.ajax({
            type:'post',
            url:'http://app.youmasc.com/youma/master/topic_single_choice_list.php',
            data:{
                from_index:0,
                count:10,
                classify:str
            },
            success:function (data) {
                totalModel=JSON.parse(data);
                console.log(totalModel);
                var html = ArtTemplate('sound_tpl', {list:totalModel});
                $('#single_choice_sound').html(html);
            },
            error:function () {
                console.log('获取单选题失败');
            }
        });
    };
    getInfo('汽车隔音');
    $(document).on('click','.check',function () {
        topic_id=$(this).attr('data-topic_id');
        for(var i=0;i<totalModel.length;i++){
            if(totalModel[i].topic_id===topic_id){
                console.log(totalModel[i]);
                var motaihtml = ArtTemplate('topic_detail_tpl', {list:totalModel[i]});
                $('#topic_motai').html(motaihtml);
            }
        }
    });
    $(document).on('click','.confirm_btn',function () {
        $.ajax({
            type:'post',
            url:'http://app.youmasc.com/youma/master/update_topic_single_choice.php',
            data:{
                topic_id:topic_id,
                ask:$('#ask').val(),
                answer:$('#answer').val(),
                a:$('#a').val(),
                b:$('#b').val(),
                c:$('#c').val(),
                d:$('#d').val(),
                e:$('#e').val(),
                classify:$('#classify').val()
            },
            success:function (data) {
                console.log(data);
                location.href='/html/subject/single_choice.html';
            },
            error:function () {
                console.log('更改题目失败');
            }
        })
    });
    util.createDetail2Ele('汽车隔音');
    util.Page('#next','#prev','ul.pagination li',index,getInfo);
})