/**
 * Created by asus on 2017/3/9.
 */

$(function(){
    var boxH = $(window).height();
    $('.fir_go').click(function(){
        $('#boxes').css('top',-boxH);
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
    three()
});

// 第三屏
function three(){
    var boxW = document.body.offsetWidth;
    var boxH = document.body.offsetHeight;
    var bg1T = boxH * 0.4;
    var bg1H = boxH *0.1574;
    var box3_con = document.getElementsByClassName('box3-con')[0];
    var stage_1 = document.getElementsByClassName('stage_1')[0];

    stage_1.style.top = bg1T + 'px';
    stage_1.style.height = bg1H + 'px';

    var box3_conW = box3_con.offsetWidth;
    var maxX  = 0 , minX = boxW - box3_conW;
    // 缓冲区域
    var buffer = 0;
    // 添加过渡的效果
    var addTransition = function(){
           box3_con.style.transition = 'all .2s linea';
           box3_con.style.webkitTransition = 'all .2s linea';
    };
    //移除过渡效果
    var removeTranslateX = function(){
        box3_con.style.transition = 'none';
        box3_con.style.webkitTransition = 'none';
    };
    // 添加过渡效果
    var changeTranslateX = function(test){
        box3_con.style.transform ='translateX('+test+'px)';
        box3_con.style.webkitTransform = 'translateX('+test+'px)';

    };

    //监听滑动
    var startX = 0,endX = 0,move = 0;
    var currentX = 0; // 记录当前的X
    box3_con.addEventListener('touchstart',function(e){
        startX = e.touches[0].clientX;
        console.log(startX);
    });

    box3_con.addEventListener('touchmove' ,function(e){
        endX= e.touches[0].clientX;
        move = startX - endX;
        // 移除过渡效果
        if( (currentX - move) <= maxX + buffer && (currentX - move) >= minX - buffer ){
            removeTranslateX();
            changeTranslateX(currentX - move);
        }
    });

    box3_con.addEventListener('touchend',function(e){
        // 向左滑动
        if((currentX + move) < minX ){
              currentX  = minX;
                //添加动画
                addTransition();
                changeTranslateX(currentX);
        }else if((currentX - move) > maxX ){
            currentX = maxX;
            //添加动画
            addTransition();
            changeTranslateX(currentX);
        }else {
            currentX = currentX - move;
        }
        startX = 0;
        move = 0;
        endX =0;
    });

}