window.onload = function (){
	var obj=null;
	var As=document.getElementById('nav').getElementsByTagName('a');
	obj = As[0];
	for(i=1;i<As.length;i++)
	{
		if(window.location.href.indexOf(As[i].href)>=0)
			obj=As[i];
	}
	obj.id='nava'

//table切换    
	var oLi = document.querySelectorAll(".hd>ul>li");
	var oUl = document.querySelectorAll(".bd>ul");

	for(var i = 0; i < oLi.length; i++)
	{
	    //记录下下标
	    //每一个li元素都添加一个属性来记录当前的下标值
	    oLi[i].index = i;
	    oLi[i].onmouseover = function ()
	    {
	        for(var n = 0; n < oLi.length; n++) oLi[n].className="";
	        this.className = "current";
	        for(var n = 0; n < oUl.length; n++) oUl[n].style.display = "none";
	        oUl[this.index].style.display = "block"
	    }
	}
}
