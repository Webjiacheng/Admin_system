/**
 * Created by hujiacheng on 2017/2/25.
 */
requirejs.config({
    baseUrl:'/',
    paths:{
        //引入第三方库
        jquery:'lib/jquery/jquery.min',
        bootstrap:'node_modules/bootstrap/dist/js/bootstrap',
        echarts:'lib/echarts/echarts.min',
        jqueryCookie:'lib/jquery-cookie/jquery.cookie',
        NProgress:'lib/nprogress/nprogress',
        ArtTemplate:'node_modules/art-template/dist/template',
        Datepicker:'lib/bootstrap-datepicker/js/bootstrap-datepicker',
        DatepickerLanguage:'lib/bootstrap-datepicker/locales/bootstrap-datepicker.zh-CN.min',
        Uploadify:'/lib/uploadify/jquery.uploadify',
        ckeditor:'/lib/ckeditor/ckeditor',
        region:'/lib/region/jquery.region',
        MD5:'/lib/jquery/jquery.md5',
        trumbowyg:'/lib/ueditor/trumbowyg',//富文本
        base:'/lib/assets/plugins/base64/trumbowyg.base64',//将图片转码
        zh_cn:'/lib/ueditor/langs/zh_cn',//中文
        trumbowyg_upload:'/lib/ueditor/plugins/upload/trumbowyg.upload',//上传
        //ArtTemplate:'lib/artTemplate/template',
        //引入自己的js地址
        Index:'js/common/index',
        ownerList:'js/owner/list',
        userProfile:'js/owner/profile',
        common:'js/common/common',
        util:'js/common/util',
        Edit:'js/course/edit',
        TeacherAdd:'js/merchants/add',
        TeacherList:'js/merchants/list',
        TeacherEdit:'js/merchants/edit',
        HomeLogin:'js/home/login',
        HomeRepass:'js/home/repass',
        HomeSettings:'js/home/settings',
        CourseAdd:'js/course/add',
        CourseAdd_step1:'js/course/add_step1',
        CourseAdd_step2:'js/course/add_step2',
        CourseAdd_step3:'js/course/add_step3',
        CourseCategory:'js/course/category',
        CourseCategory_add:'js/course/category_add',
        CourseList:'js/course/list',
        CourseTopic:'js/course/topic',
        Article:'js/article/add_article',
        Master:'js/master/list',
        SingleChoice:'js/subject/single_choice',
        MultipleChoice:'js/subject/multiple_choice',
        GapFilling:'js/subject/gap_filling',
        SubjectAdd:'js/subject/add',
        AddMaster:'js/master/add',
        Commission:'js/master/commission_list',
        Rule:'js/commission/rule',
        AddRule:'js/commission/add_rule',
        PushList:'js/merchants/push_list',
        AccessorieList:'js/accessorie/list',
        AccessorieAdd:'js/accessorie/add',
        OwnerList:'js/owner/order_list',
        StereoList:'js/accessorie/stereo_list',
        SoundList:'js/accessorie/sound_list',
        SingleChoiceSound:"js/subject/single_choice_sound",
        SingleChoiceStereo:"js/subject/single_choice_stereo",
    },
    shim:{
        bootstrap:{
            deps:['jquery']
        },
        DatepickerLanguage:{
            deps:['jquery','Datepicker']
        },
        Uploadify:{
            deps:['jquery']
        }
    }
});
require(['NProgress'],function (NProgress) {
    NProgress.start();
});
//所有页面都需要这两个文件，先加载
require(['jquery','bootstrap','echarts','common']);
(function (window) {
    var pathname=window.location.pathname;
    require(['jquery','jqueryCookie'],function ($,undefined) {
        // if(pathname=='/html/home/login.html' && $.cookie('PHPSESSID')){
        //     location.href='/index.html';
        // }else if(!(pathname=='/html/home/login.html') && !($.cookie('PHPSESSID'))){
        //     //location.href='/html/home/login.html'; 上线前要打开注释
        // }
        switch(pathname){
            case '/index.html':
                require(['Index']);
                break;
            case '/':
                require(['Index']);
                break;
            case '/html/owner/list.html':
                require(['ownerList']);
                break;
            case '/html/merchants/add.html':
                require(['TeacherAdd']);
                break;
            case '/html/merchants/list.html':
                require(['TeacherList']);
                break;
            case '/html/home/login.html':
                require(['HomeLogin']);
                break;
            case '/html/home/repass.html':
                require(['HomeRepass']);
                break;
            case '/html/home/settings.html':
                require(['HomeSettings']);
                break;
            case '/html/course/add.html':
                require(['CourseAdd']);
                break;
            case '/html/merchants/edit.html':
                require(['Edit']);
                break;
            case '/html/course/add_step1.html':
                require(['CourseAdd_step1']);
                break;
            case '/html/course/add_step2.html':
                require(['CourseAdd_step2']);
                break;
            case '/html/course/add_step3.html':
                require(['CourseAdd_step3']);
                break;
            case '/html/course/category.html':
                require(['CourseCategory']);
                break;
            case '/html/course/category_add.html':
                require(['CourseCategory_add']);
                break;
            case '/html/course/list.html':
                require(['CourseList']);
                break;
            case '/html/course/topic.html':
                require(['CourseTopic']);
                break;
            case '/html/article/add_article.html':
                require(['Article']);
                break;
            case '/html/master/list.html':
                require(['Master']);
                break;
            case '/html/subject/single_choice.html':
                require(['SingleChoice']);
                break;
            case '/html/subject/multiple_choice.html':
                require(['MultipleChoice']);
                break;
            case '/html/subject/gap_filling.html':
                require(['GapFilling']);
                break;
            case '/html/subject/add.html/0':
                require(['SubjectAdd']);
                break;
            case '/html/subject/add.html/1':
                require(['SubjectAdd']);
                break;
            case '/html/subject/add.html/2':
                require(['SubjectAdd']);
                break;
            case '/html/master/add.html':
                require(['AddMaster']);
                break;
            case '/html/master/commission_list.html':
                require(['Commission']);
                break;
            case '/html/commission/rule.html':
                require(['Rule']);
                break;
            case '/html/commission/add_rule.html':
                require(['AddRule']);
                break;
            case '/html/merchants/push_list.html':
                require(['PushList']);
                break;
            case '/html/accessorie/list.html':
                require(['AccessorieList']);
                break;
            case '/html/accessorie/add.html':
                require(['AccessorieAdd']);
                break;
            case '/html/owner/order_list.html':
                require(['OwnerList']);
                break;
            case '/html/accessorie/stereo_list.html':
                require(['StereoList']);
                break;
            case '/html/accessorie/sound_list.html':
                require(['SoundList']);
                break;
            case '/html/subject/single_choice_sound.html':
                require(['SingleChoiceSound']);
                break;
            case '/html/subject/single_choice_stereo.html':
                require(['SingleChoiceStereo']);
                break;
            default:
                console.log('页面失败');
        }
    })

}(window))