/**
 * Created by asus on 2017/2/19.
 */
window.onload = function(){
    slider()
}

//轮播图
function slider(){
    var banner = document.getElementsByClassName('banner')[0];
    var bannerU = banner.getElementsByTagName('ul')[0];
    var bannerW = banner.offsetWidth;
    var bannerO = banner.getElementsByTagName('ol')[0];
    var oLs = bannerO.getElementsByTagName('li');
    console.log(bannerU);

    function addTransition(){
        bannerU.style.transition = 'all 5s linear';
        bannerU.style.webkitTransition = 'all 5s linear';
    }

    function  removeTransition(){
        bannerU.style.transition = 'none';
        bannerU.style.webkitTransition = 'none';
    }

    function  changeX(x){
        bannerU.style.transform = 'translate('+x+'px)';
        bannerU.style.webkitTransform = 'translate('+x+'px)';
    }

    var timer = null, index = 1;
    timer = setInterval(timerCon,7000);
    function timerCon(){
        index++;
        addTransition();
        changeX(-index * bannerW);
    }

    bannerU.addEventListener('transitionend',function(){
        if (index > 3){
            index = 1;
        }else if(index < 1){
            index = 3;
        }
         removeTransition();
         changeX(-index*bannerW);
        circleSport();
    })

//    圆点滚动
    function circleSport(){
        for(var i = 0; i<oLs.length;i++)
        {
            oLs[i].className ='';

        }
        var oIndex = index;
        console.log(index);
        if (oIndex > 3){
            oIndex = 1;
        }else if(index < 1){
            oIndex = 3;
        }
        oLs[oIndex-1].className='cur';
    }
}