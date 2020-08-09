function presentationScroll(){
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


function projectsScroll(){
  targetOffset = $("#projects").offset().top
  $('html, body').animate({
    scrollTop: targetOffset - 80
  }, 700);
}
