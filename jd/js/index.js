window.onload = function(){
	//滑动
	slider();
	// 轮播图;
	carouse();

	hour();
}

window.onresize = function () {
	setTimeout(function(){
		window.location.reload();
	},200)
}
//顶部
function slider(){
	var header = document.getElementsByClassName('header')[0];
	var banner = document.getElementsByClassName('banner')[0];
	var bannerH = banner.offsetHeight;
	var m = 0;
	window.onscroll = function(){
		var scrollH = document.body.scrollTop;
			m = scrollH / bannerH;
		if (m < 0.8){
			header.style.background ='rgba(201,21,35,'+m+')';
		}else{
			header.style.background ='rgba(201,21,35,0.8)';
		}
	}
}
//轮播图
function carouse(){
	var banner = document.getElementsByClassName('banner')[0];
	var bannerUl = banner.getElementsByTagName('ul')[0];
	var bannerW = banner.offsetWidth;
	//设置translate
	function addTranslate(){
		bannerUl.style.transition = 'all .2s ease';
		bannerUl.style.webkitTransition = 'all .2s ease';
	}
	function removeTranslate(){
		bannerUl.style.transition = 'none';
		bannerUl.style.webkitTransition = 'none';
	}
	function changeX (x){
		bannerUl.style.transform = 'translate('+x+'px)';
		bannerUl.style.webkitTransform = 'translater('+x+'px)';
	}
	var index = 0,timer = null;
	timer = setInterval(sport,1000);
	function sport(){
		index++;
		addTranslate();
		changeX(-index * bannerW);
	}

	bannerUl.addEventListener('transitionendtransitionend',function(){
		if(index>8)
		{
			index = 1;
		}else if(index<1)
		{
			index =8;
		}
		removeTranslate();
		changeX(-index * bannerW);
		olSport();
	})

	bannerUl.addEventListener('webkitTransitionEnd',function(){
		if(index>8)
		{
			index = 1;
		}else if(index<1)
		{
			index =8;
		}
		removeTranslate();
		changeX(-index * bannerW);
		olSport();
	})

//	指示器
	function olSport(){
		var bannerOL = document.getElementsByClassName('banner_ol')[0];
		var olLis = bannerOL.getElementsByTagName('li');
		for(var i=0;i<olLis.length;i++)
		{
			olLis[i].className='';
		}

		var olLisIndex = index;
		if(olLisIndex>8)
		{
			olLisIndex = 1;
		}else if(olLisIndex<1)
		{
			olLisIndex =8;
		}
		olLis[olLisIndex-1].className='current';
	}

	//添加手势
	var start = 0, move = 0,end =0;
	banner.addEventListener('touchstart',function(e){
		clearInterval(timer);
		start = e.touches[0].clientX;
	});
	banner.addEventListener('touchmove',function(e){
		e.preventDefault();
		end = e.touches[0].clientX;
		move = start - end;
		changeX(-index*bannerW - move);
		removeTranslate();
	})
	banner.addEventListener('touchend', function (e) {
		if(Math.abs(move)>bannerW * 1/3 && move !=0)
		{
			if(move > 0){
				index++;
			}else{
				index--;
			}
		}
		addTranslate();
		changeX(-index * bannerW);
		timer = setInterval(sport,1000);
		move = 0;
		start = 0;
		end = 0;
	})
}

//计时器
function hour(){
	var second = document.getElementsByClassName('second_count')[0];
	var spanS = second.getElementsByTagName('span');

	var end = 6 *60 *60,timer = null;
	timer = setInterval(function(){
		end--;
		if(end <=0){
			clearInterval(timer);
		}
		var h =Math.floor(end/(60*60));
		var m =Math.floor(end/60%60);
		var s = end%60;
		console.log(h,m,s);
		spanS[0].innerHTML = h>10?Math.floor(h/10):0;
		spanS[1].innerHTML = h%10;
		spanS[3].innerHTML = m>10?Math.floor(m/10):0;
		spanS[4].innerHTML = m%10;
		spanS[6].innerHTML = s>10?Math.floor(s/10):0;
		spanS[7].innerHTML = s%10;
		console.log(s%10)
	},1000)
}