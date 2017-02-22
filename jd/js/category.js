/**
 * Created by asus on 2017/2/22.
 */
window.onload = function () {
    // 侧边滑动
    slideLeft();
}


//侧边滑动
function slideLeft(){
    var slideBox = document.getElementsByClassName('main_left')[0];
    var conUl = slideBox.getElementsByTagName('ul')[0];
    var slideBoxH = slideBox.offsetHeight;
    var conUlH = conUl.offsetHeight;
    //滑动范围
    var maxY = 0, minY = slideBoxH - conUlH,round = 200;

    function addTransition(){
        conUl.style.transition = 'all .3s linear';
        conUl.style.webkitTransition = 'all .3s linear';
    }

    function removeTransition(){
        conUl.style.transition = 'none';
        conUl.style.webkitTransition = 'none';
    }

    function changeY(y){
        conUl.style.transform = 'translateY('+y+'px)';
        conUl.style.webkitTransform = 'translateY('+y+'px)';
    }

    var start = 0, move = 0, end = 0, cur = 0;

    conUl.addEventListener('touchstart', function (e) {
        start = e.touches[0].clientY;
    });

    conUl.addEventListener('touchmove',function(e){

        end = e.touches[0].clientY;
        move = start - end;
        if((cur - move) > (minY - round) &&(cur - move) < (maxY + round)){
            changeY(cur - move);
            console.log(cur-move)
            removeTransition();
        }
    })

    conUl.addEventListener('touchend', function (e) {
        if( cur - move <minY ){
            cur = minY;
            addTransition();
            changeY(cur);
        }else if(cur - move>maxY){
            cur = maxY;
            addTransition();
            changeY(cur);
        }else{
            cur = cur- move;
        }
         start = 0; move = 0; end = 0;
    })

//    监听tab事件
    var conULls = conUl.getElementsByTagName('li');
    var newLi= null, index = 0;
    my.tap(conUl,function(e){
        for(var i=0;i<conULls.length;i++)
        {
            conULls[i].index = i;
            conULls[i].className = '';
        }
        newLi = e.target.parentNode;
        newLi.className='cur';
        index = newLi.index;

        if(index * -50 > minY){
            addTransition();
            changeY(index*-50);
            cur = index * -50;
        }else{
            changeY(minY);
            cur = minY;
        }

        var mainRight = document.getElementsByClassName('main_right')[0];
        mainRight.style.transiton = 'all .2s ease';
        mainRight.style.webkitTransition = 'all .2s ease';
        mainRight.style.opacity = 0;
        setTimeout(function(){
            mainRight.style.opacity = 1;
        },200)
    });



}
