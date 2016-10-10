window.onload=function(){
	var target=document.getElementById('img');
	target.onmousemove=function(e){
		e=e||window.event;
		var newDiv=document.getElementById('move');
		if(newDiv==null){
			newDiv=document.createElement('div');
			newDiv.setAttribute('id','move');
			newDiv.className='move';
			document.getElementsByTagName('body')[0].appendChild(newDiv);
		}
		newDiv.style.left=(e.clientX+10)+'px';
		newDiv.style.top=(e.clientY+20)+'px';
		//处理large
		var large=document.getElementById('large');
		var sizeX=800*((e.clientX-this.offsetLeft)/this.offsetWidth);
		var sizeY=800*((e.clientY-this.offsetTop)/this.offsetHeight);
		large.style.backgroundPosition=
				-1*sizeX+'px '+-1*sizeY+'px';
	};
	target.onmouseout=function(){
		var newDiv=document.getElementById('move');
		document.getElementsByTagName('body')[0].removeChild(newDiv);
	};
};