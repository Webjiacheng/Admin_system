/**
 * Created by hujiacheng on 2017/2/26.
 */

// 需要使用echarts再打开注释
define(['echarts','ArtTemplate'],function (echarts,ArtTemplate) {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('main')),obj={},arr=[],push_order="",master="";

    // 指定图表的配置项和数据
    var option = {
        title: {
            text: '师傅接单数据表'
        },
        tooltip: {},
        legend: {
            data:['接单量']
        },
        xAxis: {
            data: ["1~5","6~10","11~15","16~20","21~25","26~月底"]
        },
        yAxis: {},
        series: [{
            name: '接单量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
        }]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);

    function getInfo(str,callback) {
        $.ajax({
            type:'post',
            url:'http://app.youmasc.com/youma/master/load_sum.php',
            data:{
                classify:str
            },
            success:function (data) {
                callback($.trim(data));
            },
            error:function () {
                console.log('获取数据失败');
            }
        })
    };
    getInfo('商家推送的订单',function (data) {
        $('#push_order').html(ArtTemplate('push_order_tpl', data+'笔'));
    })
    getInfo('师傅',function (data) {
        $('#master').html(ArtTemplate('master_tpl', data+'个'));
    })
    getInfo('车主',function (data) {
        $('#owner').html(ArtTemplate('owner_tpl', data+'个'));
    })
    getInfo('商家',function (data) {
        $('#merchant').html(ArtTemplate('merchant_tpl', data+'个'));
    })

})