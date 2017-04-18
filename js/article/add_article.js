/**
 * Created by hujiacheng on 2017/2/26.
 */
/**
 * Created by hujiacheng on 2017/2/26.
 * 后期带优化：问题在require.js引入成功后还是不可以产生作用
 */
define(['jquery','ArtTemplate','base'],function ($,ArtTemplate,base) {
    $(function () {
        $('.save').on('click',function () {
            console.log($('.editor')[0].innerHTML);
        })
    })

})