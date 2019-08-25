
layui.use(['layer', 'laytpl', 'form', 'element', 'upload', 'util','login'], function(exports){

    var $ = layui.jquery
        ,layer = layui.layer
        ,laytpl = layui.laytpl
        ,form = layui.form
        ,element = layui.element
        ,upload = layui.upload
        ,login = layui.login
        ,util = layui.util;


    //banner
    if($('.swiper-container').length > 0){
        var mySwiper = new Swiper('.swiper-container',{
            loop: true,
            speed:600,
            grabCursor : true,
            parallax:true,
            pagination: {
                el:'.swiper-pagination',
                clickable :true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },

        })

    }


});

