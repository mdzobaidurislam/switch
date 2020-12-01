$(document).ready(function(){
    $('.toggle_bar').click(function () { 
        $('.mobaile_menu').addClass('mobaile_active');
    });
    $('.colse_tigger').click(function () { 
         $('.mobaile_menu').removeClass('mobaile_active');
    });
     // sticky
     $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();
        if (scroll < 100) {
            $(".menuarea").removeClass("stikyadded");
        } else {
            $(".menuarea").addClass("stikyadded");
        }
    });
});