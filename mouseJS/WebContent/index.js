$(document).ready(function(){
    autoroll();
	hookThumb();
	sbysf_scroll();
	act_scroll();
});
var i=-1; //第i+1个tab开始
var offset = 5000; //轮换时间
var timer = null;
function autoroll(){
	n = $('#J-slide-number > a').length-1;
	i++;
	if(i > n){
		i = 0;
	}
	slide(i);
	timer = window.setTimeout(autoroll, offset);
}
function slide(i){
	$('#J-slide-number > a').eq(i).addClass('slide-number-active').siblings().removeClass('slide-number-active');
	 $("#J-slide > li").eq(i).css({opacity: '1',display: "block","z-index": "100"}).siblings().css({"z-index": "1",opacity: '1',display: "block"});
	  $('#J-slide-number > a').each(function(p){
		  if(p==i){
			  $(".bg-"+(p+1)+"-lazy").stop().animate({opacity: '1'},400);
			  if($(window).width()>1500){var auto_w = -200;}else{var auto_w = -360;}
			  if(p==0){$(".pic-"+(p+1)+"-lazy").animate({left: auto_w+'px'},800);}
			  if(p==1){$(".pic-"+(p+1)+"-lazy").animate({right: auto_w+'px'},800);}
			  if(p==2){$(".pic-"+(p+1)+"-lazy").animate({left: auto_w+'px'},800);}
			  setTimeout(function(){$(".pic-"+(p+1)+"-lazy").find("img").animate({opacity:'1'},500);},800);
			  

		  }else{
			  $(".bg-"+(p+1)+"-lazy").stop().animate({opacity: '0'},400);
				//$(".pic-"+(p+1)+"-lazy").slideUp("slow");
				if(p==0){$(".pic-"+(p+1)+"-lazy").css({left: '-3000px'});}
				if(p==1){$(".pic-"+(p+1)+"-lazy").css({right: '-3000px'});}
				if(p==2){$(".pic-"+(p+1)+"-lazy").css({left: '-3000px'});}
				$(".pic-"+(p+1)+"-lazy").find("img").css({opacity:'0'})

		  }
	  });
	 
	$('#banner').attr('class','slide-'+(i+1));
}
function hookThumb(){
	$('#J-slide-number > a').each(function(j){
		$(this).click(function(){
			slide(j);
			clearTimeout(timer);
			i=j;
		   timer = window.setTimeout(autoroll, offset);
			return false;
		});
	});
}

/*hover_more*/
$(".hover_more").hover(function(){
	$(this).find("span").stop().animate({top: '97px'},200);
},function(){
	$(this).find("span").stop().animate({top: '182px'},200);
})
/*sbysf_tab*/
var sbysf_timer = null;
var sbysf_index = -1;
function sbysf_scroll(){
	sbysf_index++;
	if(sbysf_index > 3){
		sbysf_index = 0;
	}
	sbysf_show(sbysf_index);
	sbysf_timer = window.setTimeout(sbysf_scroll,10000);
}
$(".sbysf_tab a").click(function(){
	var index = $(".sbysf_tab a").index($(this));
	sbysf_show(index);
	sbysf_index = index;
	clearTimeout(sbysf_timer);
	sbysf_timer = window.setTimeout(sbysf_scroll,10000);
})
function sbysf_show(j){
  $(".sbysf_tab a").removeClass('now');
  $(".sbysf_tab a").eq(j).addClass('now');
  var index = -(j*1100);	
  $(".sb_list ul").animate({left: index+'px'},400);
}

/*activity*/
var act_timer = null;
var act_num = -1;
function act_scroll(){
	act_num++;
	var n = $(".activity_con dl").length;
	if(act_num > n-1){
		act_num = 0;
	}
	show_activity(act_num);
	act_timer = window.setTimeout(act_scroll,10000);
}
function show_activity(i){
	$(".activity_con > dl").eq(i).show("slow").siblings("dl").hide("slow");
}

$("#prev_btn").click(function(){
	act_num--;
	var nums = $(".activity_con dl").length;
	if(act_num<0){act_num = nums - 1;};
	show_activity(act_num);
	clearTimeout(act_timer);
	act_timer = window.setTimeout(act_scroll,10000);
	return false;
})
$("#next_btn").click(function(){
	act_num++;
	var nums = $(".activity_con dl").length;
	if(act_num>=nums){act_num = 0;}
	show_activity(act_num);
	clearTimeout(act_timer);
	act_timer = window.setTimeout(act_scroll,10000);
	return false;
})


