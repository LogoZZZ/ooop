(function(){
    var _sclTop;
    window.addEventListener('scroll',function(){
   if(document.body.scrollTop==0){
        _sclTop=document.documentElement;
    }else{
        _sclTop=document.body
    }
})
    var _timer=null
    var _i=1000;
    function _run(){
        _timer=setInterval(function(){
        _i-=10;
        _sclTop.scrollTop=_sclTop.scrollTop-_sclTop.scrollTop/15;
        if(_sclTop.scrollTop==0||_i==-200){
            _sclTop.scrollTop=0
            clearInterval(_timer);
        }
    },10)
    }
    var _btn=document.getElementById('btn');
    _btn.addEventListener('click',function(){
        clearInterval(_timer);
        _i=1000;
        _run();
    })

}())