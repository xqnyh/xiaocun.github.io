//轮播图
$(function (){
	var k = 1;		
	setInterval (function (){
		var width = $('.list>li').width()			
		$('.list').animate({'margin-left':-width},1000,function (){
			$('.list>li').eq(0).appendTo(this)
			$(this).css('margin-left','0')
		})
			$('.count li').eq(k++).attr('class','main-count').siblings().attr('class','')
			if(k == $('.count li').length){
				k = 0;
			}	

		var height = $('.news-ul>li>a').height()			
		$('.news-ul').animate({'margin-top':-height},1000,function (){
			$('.news-ul>li').eq(0).appendTo(this)
			$(this).css('margin-top','0')
		})		
					
},3000)

	var j = 1;
setInterval(function(){	
	var liWidth = $('ol.list-player>li').width()			
		$('.outer-player').find($('ol:first-of-type')).eq(0).animate({'margin-left':-liWidth},1000,function(){
			$('.list-player>li').first().appendTo(this)
			$(this).css('margin-left',0)
		})
		$('ol.player-count>li').eq(j++).attr('class','count-visible').siblings().attr('class','')
			if(j == 3){
				j = 0;
		}
	},3000)
	var n = 1;	
setInterval(function(){	
	var liWidth = $('ol.list1>li').width()			
		$('.outer1').find($('ol:first-of-type')).eq(0).animate({'margin-left':-liWidth},1000,function(){
			$('.list1>li').first().appendTo(this)
			$(this).css('margin-left',0)
		})
		$('ol.count1>li').eq(n++).attr('class','visible1').siblings().attr('class','')
			if(n == 3){
				n = 0;
		}
				
	},3000)
	var m = 1;
setInterval(function(){	
	var liWidth = $('ol.list2>li').width()			
		$('.outer2').find($('ol:first-of-type')).eq(0).animate({'margin-left':-liWidth},1000,function(){
			$('.list2>li').first().appendTo(this)
			$(this).css('margin-left',0)
		})
		$('ol.count-sec>li').eq(m++).attr('class','visible-sec').siblings().attr('class','')
			if(m == 3){
				m = 0;
		}
	},3000)


//使用构造函数实现轮播图切换
// function Banner(banEl, direct, time) {
// 	var self = this;
// 	this.ban = banEl;
// 	this.ul = this.ban.find($('.list-player'));
// 	this.li = this.ban.find($('.list-player>li'));
// 	this.dot = this.ban.find($('.player-count>li'));
// 	this.curr = 0;
// 	this.dir = direct;
// 	this.time = time;
// 	this.ban.height(this.li.height());
// 	this.dot.eq(self.curr).addClass('count-visible').siblings().removeClass('count-visible');
// 	if(this.dir == 'left'){
// 		setInterval(function(){
// 			var width = self.li.width();
// 			$(self.ul).animate({'margin-left':-width},1000,function(){
// 				$(self.li).eq(self.curr).appendTo(this)
// 				$(this).css('margin-left','0')
// 				self.dot.eq(++self.curr).addClass('count-visible').siblings().removeClass('count-visible');
// 				if(self.curr == self.li.length){
// 					self.curr = 0;
// 				}
// 			})
// 		},self.time)
// 	}
// 	if(this.dir == 'top'){
// 		setInterval(function(){
// 			var height = self.li.height();
// 			$(self.ul).animate({'margin-top':-height},1000,function(){
// 				$(self.li).eq(self.curr).appendTo(this)
// 				$(this).css('margin-top','0')
// 				self.dot.eq(++self.curr).addClass('count-visible').siblings().removeClass('count-visible');
// 				if(self.curr == self.li.length){
// 					self.curr = 0;
// 				}
// 			})
// 		},self.time)
// 	}
	
// }
// var topMove = new Banner($('.change-text'),'top',3000);
// var listPlayer = new Banner($('.outer-player'),'left',3000);

//倒计时
		var hours = document.getElementById('kill-hour');
		var minutes = document.getElementById('kill-minute');
        var seconds = document.getElementById('kill-second');      	
        var h = 9;
        var m = 30;
        var s = 59;                     		
            var myVar = setInterval(function (){
            	hours.innerHTML = h;
                seconds.innerHTML = s;
         		minutes.innerHTML = m;      			
         		if(0 < s <= 59){
               		 s--;
            	 }
         		 if(s < 0){
                    s = 59;
                     m -= 1;
                }
         		 if(m < 0){
         		 	m = 59;
         		 	h -= 1;
         		 }         			
                h < 10 ? hours.innerHTML = '0' + h : hours.innerHTML = h;
                m < 10 ? minutes.innerHTML = '0' + m : minutes.innerHTML = m;
  				s < 10 ? seconds.innerHTML = '0' + s : seconds.innerHTML = s;
                  if(h == 0){
                      if(m == 0){
                          clearInterval(myVar);
                          seconds.innerHTML = '0' + '0';
                      }
           	}         
            },1000); 

function back (){		
		var div = document.querySelector('.back-top');		
		var timer;		
		window.onscroll = function (){			
			if(document.body.scrollTop <= 300){				
				div.style.display = 'none';
			
			}
			else{				
				div.style.display = 'inline-block';
				div.style.opacity = '0.3';							
			}			
		}
		div.onclick = function (){
			var timer = setInterval(function (){
				document.body.scrollTop -= 30;
				if(document.body.scrollTop == 0){
				clearInterval(timer);
			}
			},50);				
		}		
	}	
	back();	
	
})
