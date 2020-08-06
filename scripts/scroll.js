$(document).ready(function(){
    $("a").on('click', function(event) {
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        targetOffset = $(hash).offset().top
        $('html, body').animate({
          scrollTop: targetOffset - 90
        }, 700, function(){
          window.location.hash = hash;
        });
      } 
    });
  });