$(function(){
    // 내비게이션바
    $(".main li").mouseenter(function(){
        $(this).find('.sub').stop().slideDown();
    });
    $(".main li").mouseleave(function(){
        $(this).find('.sub').stop().slideUp();
    });
    
    // 이미지 슬라이드 효과
    var num = 0;
    setInterval(function () {
        num = (num == 2) ? 0 : ++num;
        $("#slide li").eq(num).fadeIn(1000);
        $("#slide li").eq(num).siblings().fadeOut(1000);
    }, 2000);
    
    
    // 모달 레이어 팝업
    $(".notice li:eq(0)").click(function(){
        $("#modal").show();
    });
    $(".popup button").click(function(){
        $("#modal").hide();
    });
    
});