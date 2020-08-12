const header = document.getElementById('navbar');

header.style.transition = "150ms"
header.style.transitionProperty = "background-color"
  
    $(window).scroll(function(){
        if ($(window).scrollTop() > $("#reception").offset().top){
            header.style.backgroundColor = "";
        }
        if ($(window).scrollTop() > $("#presentation").offset().top - 85){
            header.style.backgroundColor = "#D5DBD5";
        }
        if ($(window).scrollTop() > $("#skills").offset().top){
            header.style.backgroundColor = "#323232";
        }
        if ($(window).scrollTop() > $("#projects").offset().top){
            header.style.backgroundColor = "#D5DBD5";
        }
    });   