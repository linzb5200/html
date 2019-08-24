;!function(){
    var layer = layui.layer,form = layui.form;
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

}();