function welcomeScroll(){
        targetOffset = $("#presentation").offset().top
        $('html, body').animate({
          scrollTop: targetOffset - 80
        }, 700);
}

function skillsScroll(){
  targetOffset = $("#hard-skills").offset().top
  $('html, body').animate({
    scrollTop: targetOffset - 80
  }, 700);
}
