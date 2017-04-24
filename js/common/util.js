/**
 * Created by hujiacheng on 2017/3/1.
 */
define([],{
    getQueryString:function(key) {
    var search=location.search.slice(1);//name=hjc&age=18
    var searchArr=search.split('&');//["name=hjc", "age=18"]
    var searchObj={};
    var tempArr=null;
    for(var i=0,len=searchArr.length;i<len;i++){
        tempArr=searchArr[i].split("=");//1-["name", "hjc"];2-["age", "18"]
        searchObj[tempArr[0]]=tempArr[1];
    }
    //console.log(searchObj);//Object {name: "hjc", age: "18"}
    //判断是否传参
    return arguments.length==0?searchObj:searchObj[key];
   },
   //转换为对象
   toObj:function (str) {
       //late_rate=1&praise_rate=23&all_order=3&money_rate=4
       var obj={},arr=[];
        arr=str.split('&');//["late_rate=1", "praise_rate=23", "all_order=3", "money_rate=4"]
       for(var i=0;i<arr.length;i++){
           obj[arr[i].split('=')[0]]=decodeURI(arr[i].split('=')[1]);
       }
       return obj;
   },
    Page:function(ele1,ele2,ele,index,getInfo){
        $(document).on('click',ele1,function () {
            console.log($(ele1).attr('data-pageNum'));
            if((index+2)>$(ele1).attr('data-pageNum')){
                return false;
            }

            $(ele).eq([index+2]).addClass('active').siblings().removeClass('active');
            index++;
            getInfo(index*10+1);
            return false;
        });
        $(ele2).on('click',function () {
            var num=1;
            if(index==0){
                $(ele).eq([num]).addClass('active').siblings().removeClass('active');
            }else {
                $(ele).eq([index]).addClass('active').siblings().removeClass('active');
            }
            if(index<=0){
                return false;
            }else {
                index--;
            };
            getInfo(index*10+1);
            return false;
        });
    },
    createEle:function (str) {
        $.ajax({
            type:'post',
            url:'http://app.youmasc.com/youma/master/load_sum.php',
            data:{
                classify:str//str为替换参数：师傅，车主，商家，商家推送的订单，总规则，题目，配件，车主订单
            },
            success:function (data) {
                console.log(data);
                var num=Math.ceil(data/10);//num为总页数
                console.log(num);
                //第一步先创建元素插入盒子totalPage中,第二步再插入头尾上一页下一页

                for(var i=1;i<=num;i++){
                    if(i==1){
                        $('#totalPage').append('<li  class="active"><a href="#">'+i+'</a></li>');
                    }else {
                        $('#totalPage').append('<li><a href="#">'+i+'</a></li>');
                    }
                }
                $('#totalPage').append('<li><a href="#" id="next" data-pageNum='+num+'>下一页</a></li>');

            }
        })
    },
    createDetail1Ele:function (str) {
        $.ajax({
            type:'post',
            url:'http://app.youmasc.com/youma/master/load_goods_sum.php',
            data:{
                classify_id:str//str为替换参数：师傅，车主，商家，商家推送的订单，总规则，题目，配件，车主订单
            },
            success:function (data) {
                console.log(data);
                var num=Math.ceil(data/10);//num为总页数
                console.log(num);
                //第一步先创建元素插入盒子totalPage中,第二步再插入头尾上一页下一页

                for(var i=1;i<=num;i++){
                    if(i==1){
                        $('#totalPage').append('<li  class="active"><a href="#">'+i+'</a></li>');
                    }else {
                        $('#totalPage').append('<li><a href="#">'+i+'</a></li>');
                    }
                }
                $('#totalPage').append('<li><a href="#" id="next" data-pageNum='+num+'>下一页</a></li>');

            }
        })
    },
    createDetail2Ele:function (str) {
        $.ajax({
            type:'post',
            url:'http://app.youmasc.com/youma/master/load_topic_sum.php',
            data:{
                classify:str//str为替换参数：师傅，车主，商家，商家推送的订单，总规则，题目，配件，车主订单
            },
            success:function (data) {
                console.log(data);
                var num=Math.ceil(data/10);//num为总页数
                console.log(num);
                //第一步先创建元素插入盒子totalPage中,第二步再插入头尾上一页下一页

                for(var i=1;i<=num;i++){
                    if(i==1){
                        $('#totalPage').append('<li  class="active"><a href="#">'+i+'</a></li>');
                    }else {
                        $('#totalPage').append('<li><a href="#">'+i+'</a></li>');
                    }
                }
                $('#totalPage').append('<li><a href="#" id="next" data-pageNum='+num+'>下一页</a></li>');

            }
        })
    }
})