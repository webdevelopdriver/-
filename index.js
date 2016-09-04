$(function (){
	$(".pic ul li").mouseover(function(){
		$(this).stop(true).animate({width:"798px"},500).siblings().stop(true).animate({width:"100px"},500);
	});
});