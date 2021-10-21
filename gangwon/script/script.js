$(document).ready(function () {
    // 내비게이션바
    $(".main > li").mouseenter(function () {
        $(this).children(".sub").stop().slideDown();
    });
    $(".main > li").mouseleave(function () {
        $(this).children(".sub").stop().slideUp();
    });

    // 메인 이미지 fadeIn/Out 효과
    var num = 0;
    setInterval(function () {
        num = (num == 2) ? 0 : ++num;
        $("#slide li").eq(num).fadeIn(1000);
        $("#slide li").eq(num).siblings().fadeOut(1000);
    }, 2000);

    // 탭 메뉴 (공지사항+갤러리)
    $(".tabBtn li").click(function () {
        var i = $(this).index();
        $(".tabCont").css({
            display: "none"
        });
        $(".tabCont").eq(i).css({
            display: "block"
        });
    });

    // 겔러리 이미지(컬러/흑백) 바꾸기
    $(".gallery a").hover(function () {
        var j = $(this).index() + 1;
        $(this).children("img").attr({src: "../images/thumb" + j + ".jpg"});
    }, function () {
        var j = $(this).index() + 1;
        $(this).children("img").attr({src: "../images/thumb" + j + "_bk.jpg"});
    });
    
    // 레이어 팝업창
    $(".tabCont li").eq(0).click(function(){
        $("#modal").show();
    });
    $(".popup button").click(function(){
        $("#modal").hide();
    });
});










