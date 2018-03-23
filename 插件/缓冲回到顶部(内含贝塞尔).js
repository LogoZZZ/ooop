(function(){
    function Bezier(x0,y0,x1,y1,x2,y2,x3,y3){
        this.x0=x0;
        this.y0=y0;
        this.bx0=3.0 * x0; //3x0
        this.by0=3.0 * y0; //3y0
        this.bx1=3.0 * x1; //3x1
        this.by1=3.0 * y1; //3y1
        this.bx2=3.0 * x2; //3x2
        this.by2=3.0 * y2; //3y2
        this.x3=x3;
        this.y3=y3;
        //以上是公式中除t以外的数据 公式：(3x1-3x2+x3-x0)t^3+(3x0-6x1+3x2)t^2+(3x1-3x0)t+x0
        this.btx1=this.bx1 - this.bx2 + this.x3 - this.x0;  //公式(3x1-3x2+x3-x0)的部分
        this.btx2=this.bx0 - (2*this.bx1) + this.bx2;  //公式(3x0-6x1+3x2)的部分
        this.btx3=this.bx1-this.bx0;  //公式(3x1-3x0)的部分
        //以下是将以上x变为y的部分
        this.bty1=this.by1 - this.by2 + this.y3 - this.y0;  //公式(3y1-3y2+y3-y0)的部分
        this.bty2=this.by0 - (2*this.by1) + this.by2;  //公式(3y0-6y1+3y2)的部分
        this.bty3=this.by1-this.by0;  //公式(3y1-3y0)的部分
    }
    Bezier.prototype={
        getY:function(t){
            this.t3=t*t*t;
            this.t2=t*t;
            return (this.bty1*this.t3 + this.bty2*this.t2 + this.bty3*t + this.y0) 
        },
        getX:function(t){
            this.t3=t*t*t;
            this.t2=t*t;
            return (this.btx1*this.t3 + this.btx2*this.t2 + this.btx3*t + this.x0)
        },
        so:function(t){
            return this.getY(this.getX(t));
        }
    }
    
    
    
            var sclTop;
            window.addEventListener('scroll',function(){
           if(document.body.scrollTop==0){
                sclTop=document.documentElement;
            }else{
                sclTop=document.body
            }
        })
            
            var stop=0;
            var sbody;
    
            var timer=null
            var i=0;
            var ii;
            var stop;
            function run(){
                timer=setInterval(function(){
                i+=5;
                ii=i/1000;
                stop=bz.so(ii)
                sclTop.scrollTop=stop;
                if(sclTop.scrollTop==0){
                    clearInterval(timer);
                    sbody=0;
                }
            })
            }
            var bz;
            var sbody10,sbody19,sbody13;
            var btn=document.getElementById('btn');
            btn.addEventListener('click',function(){
                clearInterval(timer);
                stop=0;i=0;
                sbody=sclTop.scrollTop;
                sbody10=sbody/10;
                sbody19=sbody10*9;
                sbody13=sbody10*3;
                bz=new Bezier(0,sbody,1.2,sbody19,0.3,sbody13,2,0);
                run();
            })
    
}())