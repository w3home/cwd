$(document).ready(function(){
    //내비게이션바
    $(".main > li").mouseover(function(){
        $(".sub").stop().slideDown();
    });
    $(".main > li").mouseout(function(){
        $(".sub").stop().slideUp();
    });
    
    //방법2: 이미지 슬라이드
//    var flag = 1;
//    
//    setInterval(function(){
//        if(flag == 1) {
//            //조건1 참
//            $(".m3").css("z-index",1).slideDown();
//            $(".m1").css({"z-index": 0}).delay(1000).slideUp();
//            $(".m2").css({zIndex:0}).delay(1000).slideUp();
//            flag = 2;
//        } else if(flag == 2) {
//            //조건2 참, 조건1 거짓
//            $(".m2").css({zIndex:1}).slideDown();
//            $(".m1").css({zIndex:0}).delay(1000).slideUp();
//            $(".m3").css({zIndex:0}).delay(1000).slideUp();
//            flag = 3;
//        } else {
//            //조건1,2 거짓
//            $(".m1").css({zIndex:1}).slideDown();
//            $(".m2").css({zIndex:0}).delay(1000).slideUp();
//            $(".m3").css({zIndex:0}).delay(1000).slideUp();
//            flag = 1;
//        }
//    },2000);
    
    //방법3: 이미지 슬라이드
    var num = 0;
    var maxNum = 2;
    
    start();
    
    function start(){
        $("#mainimg img").eq(num-1).css({top:"-300px"});

        setInterval(function(){
            slide();
        }, 2000);
    }
    
    function slide(){
        if(num == maxNum) {
            num = 0;
        } else {
            num += 1;
        }
        
        $("#mainimg img").eq(num-1).animate({top:"300px"},1000,function(){
            $("#mainimg img").eq(num-1).css({top:"-300px"});
        });
        $("#mainimg img").eq(num).animate({top:"0px"},1000);
    }
    
    // 방법1: 레이어 팝업창
//    $(".notice li:eq(0)").click(function(){
//        $("#modal").addClass("on");
//    });
//    $(".popup button").click(function(){
//        $("#modal").removeClass("on");
//    });
    // 방법2: 레이어 팝업창
   $(".notice li:eq(0)").click(function(){
       $("#modal").show();
   });
   $(".popup button").click(function(){
       $("#modal").hide();
   });
    
   
    // C 영역: 공지사항+겔러리 탭 메뉴
    $(".tabBtn li").click(function(){
        var i = $(this).index();
//        $(".tabBtn li").css({background:"#999", zIndex:0});
//        $(this).css({background:"#fff", zIndex:1});
        $(".tabCont").css({display:"none"});
        $(".tabCont").eq(i).css({display:"block"});
    });
    
//    $(".tabBtn li:eq(0)").click(function(){
//        $(".tabCont:eq(0)").css({display:"block"})
//        $(".tabCont:eq(1)").css({display:"none"})
//    });
//    $(".tabBtn li:eq(1)").click(function(){
//        $(".tabCont:eq(1)").css({display:"block"})
//        $(".tabCont:eq(0)").css({display:"none"})
//    });
});






