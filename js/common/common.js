/**
 * Created by hujiacheng on 2017/2/25.
 */
define(['jquery','jqueryCookie','NProgress'],function ($,undefined,NProgress)
{
    $('.navs ul').prev('a').on('click', function () {
        $(this).next().slideToggle();//点击弹出二级菜单
    });

    $(document).ajaxStart(function () {
        // console.log('加载开始');
        $('.overlay').show();
    }).ajaxStop(function () {
        //console.log('加载完毕');
        $('.overlay').hide();
    });

    var pathname=window.location.pathname;
    //映射路径,用于确认点击的是哪一个菜单
    var pathObj={
        "/html/course/category_add.html":"/html/course/category.html",
        "/html/course/category.html":"/html/course/category.html",
        "/html/course/add_step1.html":"/html/course/list.html",
        "/html/course/add_step2.html":"/html/course/list.html",
        "/html/course/add_step3.html":"/html/course/list.html",
        "/html/course/list.html":"/html/course/list.html",
        "/html/course/add.html":"/html/course/add.html",
        "/html/merchants/list.html":"/html/merchants/list.html",
        "/html/merchants/add.html":"/html/merchants/list.html",
        "/index.html":"/index.html",
        "/":"/index.html",
        "/html/owner/list.html":"/html/owner/list.html",
        "/html/owner/add.html":"/html/owner/list.html",
        "/html/article/add_article.html":"/html/article/add_article.html",
        "/html/article/remove_article.html":"/html/article/remove_article.html",
        "/html/course/topic.html":"/html/course/topic.html",
        "/html/master/list.html":"/html/master/list.html",
        "/html/master/add.html":"/html/master/list.html",
        "/html/master/commission_list.html":"/html/master/commission_list.html",
        "/html/subject/gap_filling.html":"/html/subject/gap_filling.html",
        "/html/subject/multiple_choice.html":"/html/subject/multiple_choice.html",
        "/html/subject/single_choice.html":"/html/subject/single_choice.html",
        "/html/subject/add.html/0":"/html/subject/single_choice.html",
        "/html/subject/add.html/1":"/html/subject/multiple_choice.html",
        "/html/subject/add.html/2":"/html/subject/gap_filling.html",
        "/html/commission/add_rule.html":"/html/commission/add_rule.html",
        "/html/commission/rule.html":"/html/commission/rule.html",
        "/html/merchants/push_list.html":"/html/merchants/push_list.html",
        "/html/accessorie/list.html":"/html/accessorie/list.html",
        "/html/accessorie/add.html":"/html/accessorie/add.html",
        "/html/owner/order_list.html":"/html/owner/order_list.html",
        "/html/accessorie/stereo_list.html":"/html/accessorie/stereo_list.html",
        "/html/accessorie/sound_list.html":"/html/accessorie/sound_list.html",
        "/html/subject/single_choice_sound.html":"/html/subject/single_choice_sound.html",
        "/html/subject/single_choice_stereo.html":"/html/subject/single_choice_stereo.html",
    }

    console.log(pathname);
    $('a').removeClass('active').filter('[href="'+pathObj[pathname]+'"]').addClass('active').parents().show();//通过排它，添加底色
    $('a').removeClass('active-link').filter('[href="'+pathObj[pathname]+'"]').addClass('active-link').parents().show();//通过排它，添加三角标记


    $('#return').on('click',function () {
        location.href='/html/home/login.html';
        return false;
    });
    //{"tc_name":"123456","tc_avatar":""}
    var userInfo;
    try{
        userInfo=JSON.parse($.cookie('userInfo'));
    }catch(e){
        userInfo={};
    }
    // var nickname=userInfo.nickname;
    // var icon=userInfo.icon;
    userInfo=JSON.parse(userInfo)[0];
    // console.log(userInfo.nickname+'----'+userInfo.icon);
    $('.aside .profile h4').html(userInfo.nickname?userInfo.nickname:'有马车装');
    // $('.aside .img-circle img').attr('src',userInfo.icon?userInfo.icon:'/img/default.jpg');
    $('.aside .img-circle img').attr('src','/img/default.jpg');
    NProgress.done();
})