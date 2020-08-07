function homePage(){
        targetOffset = $("#home-page").offset().top
        $('html, body').animate({
          scrollTop: targetOffset - 90
        }, 700);
}
