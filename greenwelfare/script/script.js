$(document).ready(function () {
    // 내비게이션 바
    $(".main > li").mouseenter(function () {
        $(".sub").stop().slideDown();
        $("nav").css({height: "120px"});
    });
    $(".main > li").mouseleave(function () {
        $(".sub").stop().slideUp();
        $("nav").css({height: "0px"});
    });

    // 슬라이드 이미지
    var count = 0;

    $("#slide li:eq(0)").siblings().css({left: "1200px"});
    
    setInterval(function () {
        count = (count == 2) ? 0 : ++count ;
        $("#slide li").eq(count-1).animate({left: "-1200px"}, 1000, function(){
            $("#slide li").eq(count-1).css({left: "1200px"});
        });
        $("#slide li").eq(count).animate({left: "0px"}, 1000);
    }, 4000);
    
    // 레이어 모달 팝업창
    $(".notice li:eq(0)").click(function(){
        $("#modal").show();
    });
    $(".popup button").click(function(){
        $("#modal").hide();
    });
});










