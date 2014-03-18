// JavaScript Document
$(function(){
	//导航隐藏下拉菜单
	$("#menu li").mouseover(function(){
		$(this).children("dl").show();
		$(this).addClass("check");
	}).mouseout(function(){
		$(this).children("dl").hide();
		$(this).removeClass("check");
	});
	//news list
	$("#news_listB li:odd").addClass("bg");
	//business nav list
	$("#side_nav_list dl").click(function(){
		$(this).children("dt").addClass("dt_check");
		$(this).children("dd:eq(0)").css("margin-top","5px");
		$(this).children("dd").show();
		$(this).siblings().children("dt").removeClass("dt_check");
		$(this).siblings().children("dd").hide();
	});
	/*******/
});