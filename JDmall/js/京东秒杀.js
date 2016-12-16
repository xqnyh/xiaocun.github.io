/**
 * Created by Administrator on 2016/10/27.
 */
$(function (){	
	$('#hidden').hide();
	var n = 1;
$('#header-logo').click(function (){
	if(n == 1){
		$('#hidden').show();
	n = 0;
	}
	else{
		$('#hidden').hide();
		n = 1;
	}
function table() {
    var ul = document.querySelectorAll('.kill-shop>.copy-style');
    var li = document.querySelectorAll('.kill-time>li');  
    for(var i = 0;i < li.length;i++){
        li[i].index = i;      
        li[i].addEventListener('click', function () {
        	for(var n = 0; n < li.length; n++) li[n].className="";
                    this.className = "current";
                    for(var n = 0; n < ul.length; n++) ul[n].style.display = "none";
                    ul[this.index].style.display = "block"
        })
    }
}
	table();	
})
		var hours = document.getElementById('kill-hour');
		var minutes = document.getElementById('kill-minute');
        var seconds = document.getElementById('kill-second');         
        var h = 7;
        var m = 59;
        var s = 30;                     		
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
})