$(function (){	
	$('#hidder').hide();
	var n = 1;
$('#logo').click(function (){
	if(n == 1){
		$('#hidder').show();
		n = 0;
	}
	else{
		$('#hidder').hide();
		n = 1;
	}
	})
$('#go').click(function (){
	history.go(-1);
})
})