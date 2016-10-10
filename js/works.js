//始终要让图片中有一张显示large
function showCallback(){
	//强制其他兄弟还剩0.0几秒结束动画
	// $(this).siblings().stop(true,true);
	$(this),siblings().each(function(){
		//判断有没有执行动画
		$("#one").is(':animated');
	})
	$("<div class='title'></div>")
	.text($(this).attr('alt'))
	.appendTo($('#container'))
	.css('left',$(this).position().left+'px');
}
function hideCallback(){
	$(this).attr('src',$(this).attr('src').replace('large',''));
}
$(function(){
	$('img').mouseover(function(){
		var showCSS={'width':'482px','height':'144px'};
		var hideCSS={'width':'141px','height':'141px'};
		if($(this).attr('src').indexOf('large')!=-1) return;
		$(this).stop(true).siblings().stop(true);//所有动画全停
		$('#container .title').remove();//标题消失
		var src=$(this).attr('src').replace(/\d\.jpg$/,'large$&');
		$(this).css(hideCSS).attr('src',src).animate(showCSS,110,showCallback)
		.siblings().each(function(i,v){
			if($(v).attr('src').search('large')!=-1)
				$(v).animate(hideCSS,100,hideCallback);
		});//end of each
	});
});