/*************轮播图****************/
function show(){
			var imgs=document.getElementById('lun').getElementsByTagName('img');
			var spans=document.getElementById('lun').getElementsByTagName('span');
			imgs=Array.prototype.slice.call(imgs,0);
			spans=Array.prototype.slice.call(spans,0);
			var num=0;
			function modify(){
				for(var i=0;i<imgs.length;i++){
					imgs[i].className="";
					spans[i].className="";
				}
				imgs[num].className="currentImg";
				spans[num].className="currentSpan";
			}
			function autoPlay(){
				num++;
				if(num==imgs.length){num=0;}
				modify();
			}
			setInterval(autoPlay,2000);
		}
/*************下拉菜单****************/
function push(){
		var container=document.getElementById('container');
		var spans=container.getElementsByTagName('span');
		var divs=container.getElementsByTagName('div');
		for(var i=0;i<spans.length;i++){
			(function(x){
				spans[x].onmouseover=function(){
					if(divs[x].offsetHeight>0){
						spans[x].className="span";
						divs[x].className="div";
					}
					else{
						chose();
	// 					spans[x].className+=" span show";
	// 					divs[x].className+=" div cur";
	// 				}
	// 			};
	// 		})(i);
	// 	}
	// 	function chose(){
	// 		for(var j=0;j<spans.length;j++){
	// 			spans[j].className="span";
	// 			divs[j].className="div";
	// 		}
	// 	}
	// }
