$(function (){
	var back = document.getElementById('go-back');
	var pass = document.querySelector('#password');
    var click = document.querySelector('.pwd-btn');
    var text = document.querySelector('.pwd-text');
    back.onclick = function (){    
		history.go(-1);
	};
    function ps(){
        if (pass.type=="password"){
             pass.setAttribute('type','text');
             click.onclick = function (){
             	click.style.position = 'relative';
             	click.style.left = '27px';
             	text.innerHTML = '';
             	txt();
             }
        }
    }
    function txt(){   
        if (pass.type=="text"){
            pass.setAttribute('type','password'); 
             click.onclick = function (){
             	click.style.position = 'relative';
             	click.style.left = '0px';
             	text.innerHTML = '…';
             	ps();
             }
        }
    }
    ps();
    txt();
	$('.pwd-clear').css('opacity','0').css('cursor','default');
	$('.confirm-clear').css('opacity','0').css('cursor','default');
});
function textCount(pass,con){
	if(pass.value.length > 0){
		$('.pwd-clear').css('opacity','1');		
	}
	else{
		$('.pwd-clear').css('opacity','0');		
	}
	if(con.value.length > 0){	
		$('.confirm-clear').css('opacity','1');	
	}
	else{	
		$('.confirm-clear').css('opacity','0');	
	}
	$('.pwd-clear').click(function (){
		pass.value = '';
});
	$('.confirm-clear').click(function (){
		con.value = '';
})
}
