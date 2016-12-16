$(function (){
	var go = document.getElementById('go');	
	go.onclick = function (){
		history.go(-1);
	}
	function attribute (){
		var img = document.querySelector('.week-film');
		var attr = ["images/勾.png","images/勾勾.png"];
		var status = 'true';
		img.onclick = function (){
			if(status == 'true'){
				img.src = attr[0];
				status = 'false';
			}
			else{
				img.src = attr[1];
				status = 'true';
			}
		}
	}
	attribute();	
	var pass = document.querySelector('#password');
    var click = document.querySelector('.pwd-btn');
    var text = document.querySelector('.pwd-text');
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

