$(function (){	
	$('#go').click(function (){
	history.go(-1);
})
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
})

//全选/反选
	var jdself = document.querySelector('.jd-self');
		var jdfirst = document.querySelector('.jd-first');
		var jdsecond = document.querySelector('.jd-second');		
		var attr = ["url(images/勾.png)","url(images/勾勾.png)"];
		var status = 'true';		
	function attribute (){		
		jdself.onclick = function (){
			if(status == 'true'){
				jdself.style.backgroundImage = attr[1];
				jdfirst.style.backgroundImage = attr[1];
				jdsecond.style.backgroundImage = attr[1];
				status = 'false';				
			}
			else{
				jdself.style.backgroundImage = attr[0];
				jdfirst.style.backgroundImage = attr[0];
				jdsecond.style.backgroundImage = attr[0];
				status = 'true';
			}
		}
		
	}
		attribute();
		
	function attributeCopy (){
		var monopoly = document.querySelector('.monopoly');
		var monopolyfirst = document.querySelector('.monopoly-first');
		var attr = ["url(images/勾.png)","url(images/勾勾.png)"];
		var status = 'true';
		monopoly.onclick = function (){
			if(status == 'true'){
				monopoly.style.backgroundImage = attr[1];
				monopolyfirst.style.backgroundImage = attr[1];				
				status = 'false';				
			}
			else{
				monopoly.style.backgroundImage = attr[0];
				monopolyfirst.style.backgroundImage = attr[0];			
				status = 'true';
			}
		}
	
	}
		attributeCopy();	
function outerFun(){
		var jdself = document.querySelector('.jd-self');
		var jdfirst = document.querySelector('.jd-first');
		var jdsecond = document.querySelector('.jd-second');		
		var attr = ["url(images/勾.png)","url(images/勾勾.png)"];
		var status = 'true';		
	function attribute (){
			if(status == 'true'){
				jdself.style.backgroundImage = attr[1];
				jdfirst.style.backgroundImage = attr[1];
				jdsecond.style.backgroundImage = attr[1];
				status = 'false';				
			}
			else{
				jdself.style.backgroundImage = attr[0];
				jdfirst.style.backgroundImage = attr[0];
				jdsecond.style.backgroundImage = attr[0];
				status = 'true';
			}
		}
		return attribute;
}
		var outer = outerFun();
function outerCopy(){
		var monopoly = document.querySelector('.monopoly');
		var monopolyfirst = document.querySelector('.monopoly-first');
		var attr = ["url(images/勾.png)","url(images/勾勾.png)"];
		var status = 'true';
	function attributeCopy (){
			if(status == 'true'){
				monopoly.style.backgroundImage = attr[1];
				monopolyfirst.style.backgroundImage = attr[1];				
				status = 'false';				
			}
			else{
				monopoly.style.backgroundImage = attr[0];
				monopolyfirst.style.backgroundImage = attr[0];			
				status = 'true';
			}
	}	
		return attributeCopy;
}
		var outercopy = outerCopy();	
	function selectFirst (){
		var jdfirst = document.querySelector('.jd-first');				
		var attr = ["url(images/勾.png)","url(images/勾勾.png)"];
		var status = 'true';		
		jdfirst.onclick = function (){
			if(status == 'true'){
				jdfirst.style.backgroundImage = attr[1];							
				status = 'false';				
			}
			else{			
				jdfirst.style.backgroundImage = attr[0];			
				status = 'true';
			}
		}
	}
	selectFirst();
	
	function selectSecond (){
		var jdsecond = document.querySelector('.jd-second');				
		var attr = ["url(images/勾.png)","url(images/勾勾.png)"];
		var status = 'true';		
		jdsecond.onclick = function (){
			if(status == 'true'){
				jdsecond.style.backgroundImage = attr[1];							
				status = 'false';				
			}
			else{			
				jdsecond.style.backgroundImage = attr[0];			
				status = 'true';
			}
		}
	}
	selectSecond();
	
	function monopolyFirst (){
		var monopolyfirst = document.querySelector('.monopoly-first');				
		var attr = ["url(images/勾.png)","url(images/勾勾.png)"];
		var status = 'true';		
		monopolyfirst.onclick = function (){
			if(status == 'true'){
				monopolyfirst.style.backgroundImage = attr[1];							
				status = 'false';				
			}
			else{			
				monopolyfirst.style.backgroundImage = attr[0];			
				status = 'true';
			}
		}
	}
	monopolyFirst();
	
	function selectAll (){
		var selectall = document.querySelector('.select-all');
		var attr = ["url(images/勾.png)","url(images/勾勾.png)"];
		var status = 'true';
		selectall.onclick = function (){
			outer();
		outercopy();
		if(status == 'true'){
			selectall.style.backgroundImage = attr[1];
			status = 'false';
		}
		else{
			selectall.style.backgroundImage = attr[0];
			status = 'true';
		}
		}
	}
	selectAll();
})