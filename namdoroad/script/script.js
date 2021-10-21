$(function(){
    $('.notice li').eq(0).click(function(){
        $('#popup').show();
    });
    $('#popup button').click(function(){
        $('#popup').hide();
    });
});