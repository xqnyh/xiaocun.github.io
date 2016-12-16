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
	})
$('#go').click(function (){
	history.go(-1);
})
})