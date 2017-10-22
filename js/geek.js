$(function(){   
    $(window).scroll(function() {      
        if($(window).scrollTop() >= 100){
            $('.actGotop').fadeIn(300); 
        }else{    
            $('.actGotop').fadeOut(300);    
        }  
    });
    $('.actGotop').click(function(){
    $('html,body').animate({scrollTop: '0px'}, 800);});   
});
$("download").mouseover(function(){
  $("download").css("background: url(down_btn_hover.png)");
});

$("download")(function () {
            //弹出层
            $("#download").click(function (event) {
                $("download").show(300);
            });
            //隐藏层
            $("download").click(function (event) {
                $("download").hide(300);
            });
        });