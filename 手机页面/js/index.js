/**
 * Created by asus on 2017/3/9.
 */

$(function(){
    var boxH = $(window).height();
    $('.fir_go').click(function(){
        $('#boxes').css('top',-boxH);
        $('.bg').addClass('cur');
    });

    //跳转第二屏
   $('.con-go').click(function(){
       $('#boxes').css('top',-boxH * 2);
   });
        var config = {
            reset:true,
            origin:'bottom',
            duration:500,
            delay:0,
            opacity: 0, // 初始透明度
            scale: 0.5 //缩放
        };
        window.sr = ScrollReveal(config);
        sr.reveal('.sr',300);

    // 跳转第三屏
    $('.box2-con-go').click(function(){
        $('#boxes').css('top',-boxH * 3);
    });



    //第三屏

});