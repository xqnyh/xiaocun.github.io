$(function (){	
	$('#hidden').hide();
	var n = 1;
$('#logo').click(function (){
	if(n == 1){
		$('#hidden').show();
	n = 0;
	}
	else{
		$('#hidden').hide();
		n = 1;
	}
})
})
function table() {
    var ul = document.querySelectorAll('.list-text');
    var li = document.querySelectorAll('.list>li');    
    for(var i = 0;i < li.length;i++){
        li[i].index = i;      
        li[i].addEventListener('click', function () {
        	for(var n = 0; n < li.length; n++) li[n].className= "";
                    this.className = "current";
                    for(var n = 0; n < ul.length; n++) ul[n].className= "list-text";
                    ul[this.index].className = 'list-visible';
        })
    }
}
	table();