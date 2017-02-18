/**
 * Created by asus on 2017/2/18.
 */
window.onload = function(){
        sliding()
}

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
    timer = setInterval(function(){
        index++;
        addTranslate();
        sportsX(-index * bannerW);
    },1000)


    ul.addEventListener('transitionEnd',function(){
       if(index>3){
           index = 1;
       }else if(index < 0){
           index = 3;
       }
        olSports()
        removeTranslate();
        sportsX(-index* bannerW);
    });

    ul.addEventListener('webkitTransitionEnd',function(){
        if(index > 3){
            index = 1;
        }else if(index < 0){
            index = 3;
        }
        olSports()
        removeTranslate();
        sportsX(-index * bannerW);
    });


//   原点跟着滚动
    function olSports(){
        for(var i =0;i<curLis.length;i++)
        {
            curLis[i].className = '';
        }
        var liIndex = index;
        console.log(liIndex);
        if(index > 3){
            index = 1;
        }else if(index < 0){
            index = 3;
        }
        curLis[index-1].className = 'curOi';
    }
}