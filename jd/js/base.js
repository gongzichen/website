window.my = {};

my.addEnd = function (obj,fn){

    if(typeof obj != "object")return;
    obj.addEventListener('transitionend',function(e){
        fn&&fn(e);
    })

    obj.addEventListener('webkitTransitionEnd',function(e){
        fn&&fn(e);
    })


}

my.tap = function(obj,fn){
    if(typeof  obj != "object")return;
    var iMove = false;
    var start = 0;
    obj.addEventListener('touchstart', function () {
        start = Date.now();
    })

    obj.addEventListener('touchmove',function(){
        iMove = true;
    })

    obj.addEventListener('touchend',function(e){
        if(Date.now()-start < 200 && !iMove){
            fn&&fn(e);
        }
        iMove = false;
        start = 0;
    })
}