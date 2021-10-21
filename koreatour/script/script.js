$(function(){
    // 내비게이션바
    $('.main > li').mouseenter(function(){
        $('.sub').stop().slideDown();
        $('.nav_bg').stop().animate({height:150});
    });
    $('nav').mouseleave(function(){
        $('.sub').stop().slideUp();
        $('.nav_bg').stop().animate({height:0});
    });
    
    // 이미지 슬라이드 효과
    var ct = 0;
    
    $("#slide li:eq(0)").siblings().css({top:-300});
    
    setInterval(function(){
        
        if (ct == 2) {
            ct = 0;
        } else {
            ct = ct + 1;
        }
        
        $("#slide li").eq(ct-1).animate({top:300},function(){
            $(this).css({top:-300});
        });
        $("#slide li").eq(ct).animate({top:0});
        
    }, 4000);
    
    
    // 모달 레이어 팝업
    $(".notice li:eq(0)").click(function(){
        $("#modal").show();
    });
    $(".popup button").click(function(){
        $("#modal").hide();
    });
    
});