/*
* @Author: erdou
* @Date:   2017-02-07 13:39:47
* @Last Modified by:   erdou
* @Last Modified time: 2017-02-08 08:08:18
*/

'use strict';
$(function(){
	// 图片轮播
	var flash_sta = 0;
	var timer = setInterval(autoRun, 2000);	//定时器	
	function autoRun(){
		flash_sta++;
		flash_sta = (flash_sta == 7) ? 0 : flash_sta; //判断，当图片是7时，归零再从第一张开始
		$('.flash img').eq(flash_sta).fadeIn().siblings('img').hide();//这张图片显示，其他img的兄弟图片隐藏
		$('.flash ul li').eq(flash_sta).addClass('cur').siblings('li').removeClass('cur');//当前图片的li显示cur,li的兄弟cur类移除
	}
	$('.flash ul li').mouseover(function(){
		clearInterval(timer);//鼠标移入后清除定时器
		flash_sta = $(this).index(); //获得鼠标移入到第几个li
		$('.flash img').eq(flash_sta).fadeIn().siblings('img').hide();//这张图片显示，其他img的兄弟图片隐藏
		$('.flash ul li').eq(flash_sta).addClass('cur').siblings('li').removeClass('cur');//当前图片的li显示cur,li的兄弟cur类移除
	});
	$('.flash ul li').mouseout(function(){
		timer = setInterval(autoRun, 1000);	//鼠标移出开启定时器
	});

});