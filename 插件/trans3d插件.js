(function(){
    var _dom2=document.getElementsByClassName('dom2');
    var _sclTop;
    var _sin=0;
    var _timer1=null;
    var _ss=0;
    var _i;
    var __i;
    function _sb(){
        document.body.scrollTop==0?_sclTop=document.documentElement:_sclTop=document.body
    }
    function _up(){
        _timer1=setInterval(function(){
        _i+=5
        _ss=_ss-_ss/20;
        _on(_ss);
        if(_i==1000){
            _ss=0;
            _on(_ss);
            clearInterval(_timer1)
        }
    },5)
    }
    
    function _on(_ss){
        for(__i=0;__i<_dom2.length;__i++){
            _dom2[__i].style['transform']='translate3d(0,'+_ss+'px'+',0)';
            _dom2[__i].style['-ms-transform']='translate3d(0,'+_ss+'px'+',0)';
            _dom2[__i].style['-moz-transform']='translate3d(0,'+_ss+'px'+',0)';
            _dom2[__i].style['-webkit-transform']='translate3d(0,'+_ss+'px'+',0)';
            _dom2[__i].style['-o-transform']='translate3d(0,'+_ss+'px'+',0)';
        }
    }
    

        window.addEventListener('scroll',function(){
       _sb();
        clearInterval(_timer1)
            _ss+=_sclTop.scrollTop-_sin;
            _i=0;
            _on(_ss);
            _up()
       _sin=_sclTop.scrollTop;
    })


}())