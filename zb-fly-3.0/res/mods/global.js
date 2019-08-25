
layui.define(['laypage', 'fly', 'element', 'flow'], function(exports){
    var $ = layui.jquery;
    var layer = layui.layer;
    var util = layui.util;
    var laytpl = layui.laytpl;
    var form = layui.form;
    var laypage = layui.laypage;
    var fly = layui.fly;
    var flow = layui.flow;
    var element = layui.element;
    var upload = layui.upload;

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

});