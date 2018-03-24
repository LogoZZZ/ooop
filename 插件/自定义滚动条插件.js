var dv1={
    div1S:document.getElementById('dsct'),
    div1Sh:document.getElementById('ful').scrollHeight,
}
var winch=window.clientHeight||document.documentElement.clientHeight;
dv1.div1S.style.height=(winch/dv1.div1Sh)*winch+'px'
var showon=dv1.div1Sh-winch;//被隐藏的高度
var showout=showon/dv1.div1Sh*winch;
function dv1fun(){
winch=window.clientHeight||document.documentElement.clientHeight;
dv1.div1S.style.height=(winch/dv1.div1Sh)*winch+'px'
showon=dv1.div1Sh-winch;
showout=showon/dv1.div1Sh*winch
}
var xxx=window ||document.documentElement
xxx.addEventListener('resize',dv1fun)

//
var dom11=document.getElementById('ful')
var gun={
downY:0,
domdsup:document.getElementById('dsup'),
}

dv1.div1S.addEventListener("mousedown",function(e){
tem=true;
gun.downY=e.clientY;
if(navigator.userAgent.indexOf('MSIE')>0){
dom11.onselectstart='return false;'
}else{
dom11.classList.add('noselect')
}
})
dom11.addEventListener("mouseup",function(e){
tem=false;
if(navigator.userAgent.indexOf('MSIE')>0){
dom11.onselectstart=''
}else{
dom11.classList.remove('noselect')
}
})
dv1.div1S.addEventListener("mouseup",function(e){
tem=false;
if(navigator.userAgent.indexOf('MSIE')>0){
dom11.onselectstart=''
}else{
dom11.classList.remove('noselect')
}
})
document.getElementById('dom1').addEventListener("mousemove",function(e){
if(tem){
scrollvue((e.clientY-gun.downY)*dv1.div1Sh/winch);
gun.downY=e.clientY;
}
})

// var int=5,intimer=0,intt=1;
// var timer=setInterval(function(x){
//     if(x>0&&dom11.scrollTop>=dom11.scrollTop+top){

//         clearInterval(timer)
//     }else if(x<0&&dom11.scrollTop<=dom11.scrollTop+top){
//         clearInterval(timer)
//     }
// },100),

function istop(){
return dom11.scrollTop==0 || Math.ceil(dom11.scrollTop)==showon
}
function scrollto(top){
if(top<0){
dom11.scrollTop=0;
}else if(top>showon){
dom11.scrollTop=showon;
}else{
dom11.scrollTop=top;
}
var domdsdwHeight=dom11.scrollTop*showout/showon;
gun.domdsup.style.height=domdsdwHeight+'px';
}
function scrollvue(rel){
scrollto(dom11.scrollTop+rel)
}

//滚轮事件
function swheel(rel,e){
var pistop=istop();
scrollvue(rel);
if (!istop() || (istop() && !pistop)) {
e.preventDefault();
}
}





if (navigator.userAgent.indexOf("Firefox") < 0) {
dom11.addEventListener("mousewheel", function (e) {
swheel(-e.wheelDelta/6, e);
});
} else {
dom11.addEventListener("DOMMouseScroll", function (e) {
swheel(e.detail * 5, e);
});
}
