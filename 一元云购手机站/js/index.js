/**
 * Created by asus on 2017/2/18.
 */
window.onload = function(){
        sliding()
        time()
}
window.onresize = function(){
    setTimeout(function(){
        window.location.reload();
    }, 200);
};



//轮播图
function sliding(){
    var  banner = document.getElementsByClassName('banner')[0];
    var  bannerW = banner.offsetWidth;
    var  ul = banner.getElementsByTagName('ul')[0];
    var curOi =banner.getElementsByTagName('ol')[0];
    var curLis = curOi.getElementsByTagName('li');

    console.log(ul);

    function addTranslate(){
        ul.style.transition = 'all .5s ease';
        ul.style.webkitTransition = 'all .5s ease';
    }

    function removeTranslate(){
        ul.style.transition = 'none';
        ul.style.webkitTransition = 'none';
}

    function sportsX(x){
        ul.style.transform = 'translate('+x+'px)';
        ul.style.webkitTransform= 'translate('+x+'px)';
    }

    var timer = null, index = 1;
    timer = setInterval(test,1000);
    function test(){
        index++;
        addTranslate();
        sportsX(-index * bannerW);
    }


    ul.addEventListener('transitionEnd',function(){
        if(index >= 4){
            index = 1;
        }else if(index <= 0){
            index = 3
        }
        removeTranslate();
        sportsX(-index* bannerW);
        olSports()
    });

    ul.addEventListener('webkitTransitionEnd',function(){
        if(index >= 4){
            index = 1;
        }else if(index <= 0){
            index = 3
        }
        removeTranslate();
        sportsX(-index * bannerW);
        olSports()
    });


//   圆点跟着滚动
    function olSports(){
        for(var i =0;i<curLis.length;i++)
        {
            curLis[i].className = '';
        }
        var liIndex = index;
        //console.log(liIndex);
        if(index >= 4){
            index = 1;
        }else if(index <= 0){
            index = 3
        }
        curLis[index-1].className = 'curOi';
    }

//    触目滑动
    var start = 0,end = 0,move = 0;
    ul.addEventListener('touchstart',function(e){
        clearInterval(timer);
       start = e.touches[0].clientX;
        console.log(start);
    });
    //容易产生浏览器BUG 事件现象丢失
    window.addEventListener('touchmove',function(e){
        e.preventDefault();
        end  = e.touches[0].clientX;
        move = start -end;

        console.log(index+"滑动的距离");
        removeTranslate();
        sportsX(-index * bannerW - move);
    })

    ul.addEventListener('touchend',function(e){
        if(Math.abs(move)>= 1/3* bannerW && end !=0 ){
         if(move > 0){
            index++;
        }else {
             index--;
         }
        }
        console.log(index);
        addTranslate();
        sportsX(-index * bannerW);
        timer = setInterval(test,1000);
        start = 0;
        end = 0;
        move = 0;
    })
}

//时间
function time(){
    var time = document.getElementsByClassName('time')[0];
    var spanS = time.getElementsByTagName('span');
    if(end <=0){
        clearInterval(tiemr);
    }
    // 假设时间
    var timer = null, end = 5 *60 *60;
    timer = setInterval(function(){
        end--;
        if(end<=0) {
            clearInterval(timer);
        }
            var h =Math.floor(end/(60*60));
            var m = Math.floor(end %(60*60)/60);
            var s = end % 60;
            //console.log(h,m,s);
            spanS[0].innerHTML = h>10? Math.floor(h/10):0;
            spanS[1].innerHTML = h%10;
            spanS[3].innerHTML = m>10? Math.floor(m/10):0;
            spanS[4].innerHTML = m%10;
            spanS[6].innerHTML = s>10? Math.floor(s/10):0;
            spanS[7].innerHTML = s%10;
    },1000)
}