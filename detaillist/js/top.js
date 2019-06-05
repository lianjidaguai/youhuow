$(".header-left").hover(function(){
    $('.yoho-group-list').fadeIn("fast");
},function(){
    $('.yoho-group-list').fadeOut("fast");
})

$('.yoho-group-list > li').eq(0).hover(function(){
    $(this).children().html('集团官网');
},function(){
    $(this).children().html('YOHO!');
})
$('.yoho-group-list > li').eq(1).hover(function(){
    $(this).children().html('男生潮流');
},function(){
    $(this).children().html('YOHO!BOYS');
})
$('.yoho-group-list > li').eq(2).hover(function(){
    $(this).children().html('女生潮流');
},function(){
    $(this).children().html('YOHO!GIRLS');
})

$('.yoho-group-list > li').eq(3).hover(function(){
    $(this).children().html('新鲜好去处');
},function(){
    $(this).children().html('Mars');
})
$('.yoho-group-list > li').eq(4).hover(function(){
    $(this).children().html('潮流嘉年华');
},function(){
    $(this).children().html("YO'HOOD");
})

$('.server').hover(function(){
    $('.nav-drop-down').fadeIn("fast");
},function(){
    $('.nav-drop-down').fadeOut("fast");
})

$('.phoneapp').hover(function(){
    $('.phoneapp .download-app-box').fadeIn("fast");
},function(){
    $('.phoneapp .download-app-box').fadeOut("fast");
})

$('.focus').hover(function(){
    $('.focus .download-app-box').fadeIn("fast");
},function(){
    $('.focus .download-app-box').fadeOut("fast");
})
//点击改变样式cure
$(".main-nav-list > li").click(function(){
    $(this).addClass('cure').siblings().removeClass('cure');
  })

/*导航栏上的js样式*/
$('.cloth').hover(function(){
    $('.cloth .third-nav-wrapper').fadeIn("fast");
},function(){
    $('.cloth .third-nav-wrapper').fadeOut("fast");
})
$('.shoes').hover(function(){
    $('.shoes .third-nav-wrapper').fadeIn("fast");
},function(){
    $('.shoes .third-nav-wrapper').fadeOut("fast");
})
$('.bag').hover(function(){
    $('.bag .third-nav-wrapper').fadeIn("fast");
},function(){
    $('.bag .third-nav-wrapper').fadeOut("fast");
})
$('.peishi').hover(function(){
    $('.peishi .third-nav-wrapper').fadeIn("fast");
},function(){
    $('.peishi .third-nav-wrapper').fadeOut("fast");
})
/*固定在右侧的二维码 */
$('.code-down-box').click(function(){
    $(this).fadeOut('fast');
})
/*划上显示*/
$(".qrcode-download-right").hover(function(){
    $('.download-app-kuang').fadeIn("fast");
},function(){
    $('.download-app-kuang').fadeOut("slow");
})

/*回到顶端 */
$(function(){
      $(window).scroll(function(){if($(window).scrollTop()>100){
        $(".right-floating-layer").removeClass('hide');
    }else{
        $(".right-floating-layer").addClass('hide');
    }   
})
      $('.return-top').click(function(){
          $('body,html').animate({scrollTop:0},500);
      })
})
//logo旋转特效
setInterval(row,8000);
function row(){
    $(".main-logo").addClass("cw");
    setTimeout(function(){ 
    $(".main-logo").removeClass("cw");
    $(".main-logo").addClass("logo-cn");
    },2000);
    setTimeout(function(){
        $(".main-logo").addClass("cw");  
    },6000);
    setTimeout(function(){
        $(".main-logo").removeClass("logo-cn");  
    },8000);
}

//购物车隐藏与显示
$(".go-cart").hover(
    function(){
        $(".mini-cart-wrapper").fadeIn("fast");
    },function(){
        $(".mini-cart-wrapper").fadeOut("fast");
    }
)
