//返回顶部
/*function tBox(){
    //h = $(window).height();
    t = $(document).scrollTop();
    if(t > 150){
        $(".tbox").fadeIn(300);
    }else{
        $(".tbox").fadeOut(300);
    }
}
$(document).ready(function(e){
    $("body").append('<div class="tbox"><a href="javascript:void(0)" id="gotop"></a></div>');

    tBox();

    $("#gotop").click(function(){
        //$(document).scrollTop(0);
        $('html,body').animate({'scrollTop':0},1000); //滚回顶部的时间，越小滚的速度越快~
    })
});

$(window).scroll(function(e){
    tBox();
})*/

/*首页大图滚动*/
$(function() {
    $(".hbanner").flexslider({
      slideshowSpeed: 4000, //展示时间间隔ms
      animationSpeed: 400, //滚动时间ms
      touch: true //是否支持触屏滑动

    });
}); 

/*军分区动态*/
 $(function() {
    $(".hjunnews-pic").flexslider({
    slideshowSpeed: 4000, //展示时间间隔ms
    animationSpeed: 400, //滚动时间ms
    touch: true //是否支持触屏滑动
  });
}); 

/*国防动员动态*/
 $(function() {
    $(".arouse-pic").flexslider({
    slideshowSpeed: 4000, //展示时间间隔ms
    animationSpeed: 400, //滚动时间ms
    touch: true //是否支持触屏滑动
  });
}); 

/*政工园地*/
$(document).ready(function() {
  $('.ct:gt(0)').hide();
  var hdw = $('.field-hd a');
        //hdw.hover(function() {
        //    $(this).addClass('current').siblings().removeClass('current');
        //});
        hdw.mouseover(function() {
          $(this).addClass('current').siblings().removeClass();
          var hdw_index = hdw.index(this);
          $('.ct').eq(hdw.index(this)).show().siblings().hide();
        });
      });

/*党管武装 双拥共建*/
$(document).ready(function() {
  $('.arm-ct:gt(0)').hide();
  var hdw = $('.armhd a');
        //hdw.hover(function() {
        //    $(this).addClass('current').siblings().removeClass('current');
        //});
        hdw.mouseover(function() {
          $(this).addClass('current').siblings().removeClass();
          var hdw_index = hdw.index(this);
          $('.arm-ct').eq(hdw.index(this)).show().siblings().hide();
        });
      });

/*中国惠州*/
$(document).ready(function() {
  $('.hznews-ct:gt(0)').hide();
  var hdw = $('.hznews-hd a');
        //hdw.hover(function() {
        //    $(this).addClass('current').siblings().removeClass('current');
        //});
        hdw.mouseover(function() {
          $(this).addClass('current').siblings().removeClass();
          var hdw_index = hdw.index(this);
          $('.hznews-ct').eq(hdw.index(this)).show().siblings().hide();
        });
      });

/*专题策划左滚动*/
jQuery(".special-content").slide({mainCell:".bd ul",autoPlay:true,effect:"leftMarquee", vis:3,interTime:10}); //添加 opp:true, 向右滚动

/*通知公告*/
 jQuery(".hmain-5-left").slide({mainCell:".bd ul",autoPage:true,effect:"top",autoPlay:true,vis:4});

 /*军分区动态*/
 jQuery(".hmain-2-left").slide({mainCell:".bd ul",autoPage:true,effect:"top",autoPlay:true,vis:10});

 /*后勤保障*/
 jQuery(".hmain-3-right").slide({mainCell:".bd ul",autoPage:true,effect:"top",autoPlay:true,vis:8});

//二级导航
$(function(){ 
   $(".nav li").has("ul").mouseover(function(){ 
    $(this).children("ul").css("display","block");  
    $(this).css("backgroundColor","#024f74");  
  }).mouseout(function () { 
   $(this).children("ul").css("display","none");  
   $(this).css("backgroundColor","#006899"); 
    })  
    })  



/*头条播报单条滚动*/
var box=document.getElementById("press"),can=true; 
box.innerHTML+=box.innerHTML; 
box.onmouseover=function(){can=false}; 
box.onmouseout=function(){can=true}; 
new function (){ 
  var stop=box.scrollTop%30==0&&!can; 
  if(!stop)box.scrollTop==parseInt(box.scrollHeight/2)?box.scrollTop=0:box.scrollTop++; 
  setTimeout(arguments.callee,box.scrollTop%90?10:1500); 
}; 


/*设为首页 加入收藏*/
// 设置为主页 
function SetHome(obj,vrl){ 
  try{ 
    obj.style.behavior='url(#default#homepage)';obj.setHomePage(vrl); 
  } 
  catch(e){ 
    if(window.netscape) { 
      try { 
        netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect"); 
      } 
      catch (e) { 
        alert("此操作被浏览器拒绝！\n请在浏览器地址栏输入“about:config”并回车\n然后将 [signed.applets.codebase_principal_support]的值设置为'true',双击即可。"); 
      } 
      var prefs = Components.classes['@mozilla.org/preferences-service;1'].getService(Components.interfaces.nsIPrefBranch); 
      prefs.setCharPref('browser.startup.homepage',vrl); 
    }else{ 
      alert("您的浏览器不支持，请按照下面步骤操作：1.打开浏览器设置。2.点击设置网页。3.输入："+vrl+"点击确定。"); 
    } 
  } 
} 
// 加入收藏 兼容360和IE6 
function shoucang(sTitle,sURL) 
{ 
  try 
  { 
    window.external.addFavorite(sURL, sTitle); 
  } 
  catch (e) 
  { 
    try 
    { 
      window.sidebar.addPanel(sTitle, sURL, ""); 
    } 
    catch (e) 
    { 
      alert("加入收藏失败，请使用Ctrl+D进行添加"); 
    } 
  } 
} 



