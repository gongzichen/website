/**
 * Created by asus on 2017/2/22.
 */
window.onload = function()
{
    //选中
    pitch()

    //垃圾桶
    clickTrash();
}

//选中垃圾桶
function clickTrash(){
    var tanshS = document.getElementsByClassName('transh');
    var panel = document.getElementsByClassName('panel')[0];
    var tanshT = document.getElementsByClassName('transh_top');
    var con_panel = panel.getElementsByClassName('con_panel')[0];
    var cancel = con_panel.getElementsByClassName('cancel')[0];
    var up;
    for(var i =0;i<tanshS.length;i++){
        (function(i){
            my.tap(tanshS[i],function(e){
                up = tanshT[i];
                tanshT[i].style.transition = 'all .3s ease';
                tanshT[i].style.webkitTransition = 'all .3s ease';

                tanshT[i].style.transformOrigin = '0 50%';
                tanshT[i].style.webkitTransformOrigin = '0 50%';

                tanshT[i].style.transform = 'rotateZ(-45deg)';
                tanshT[i].style.webkitTransform = 'rotateZ(-45deg)';

                panel.style.display='block';
                con_panel.className = 'con_panel jump';

            })
        })(i)
    }

    my.tap(cancel,function(){
        panel.style.display='none';
        up.style.transform = 'none';
        up.style.webkitTransform='none';
    })

}


//点击选中
function pitch(){
    var cicleS = document.getElementsByClassName('circle');
    for(var i =0;i<cicleS.length;i++)
    {
        my.tap(cicleS[i],function(e){
            e.preventDefault()
            if(e.target.hasAttribute('checked')){
                e.target.removeAttribute('checked');
            }else{
                e.target.setAttribute('checked','');
            }
        });
    }
}

