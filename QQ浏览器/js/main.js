/**
 * Created by asus on 2017/2/13.
 */
$(function(){
    var index = 0,timer = null;
    test(index)
    $('.gps li').on('click',function(){
        index = $(this).index();
        $(this).addClass('cur').siblings().removeClass('cur');
        $('section').eq(index).show().siblings('section').hide();
        test(index)
        setTimeout(function(){
            $('section').eq(index).removeClass('current').siblings('section').addClass('current');
        },10)

    })

    $(window).mousewheel(function(event,d) {
        clearTimeout(timer);
        timer = setTimeout(function(){
            index -= d;
            if(index > $('section').length-1){
                index = 0;
            }else if(index < 0){
                index =$('section').length-1;
            }
            $('section').eq(index).show().siblings('section').hide();
            $('.gps li').eq(index).addClass('cur').siblings().removeClass('cur');
            test(index)
            setTimeout(function(){
                $('section').eq(index).removeClass('current').siblings('section').addClass('current');
            },10)
        },400)
    })
})

function test(index){
    if(index == 0) {
        $('.scrollImg').show()
        $('.logo').hide()
    }else{
        $('.scrollImg').show()
        $('.logo').show()
    }
}