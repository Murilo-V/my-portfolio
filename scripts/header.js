const bgHeader = document.getElementById('navbar');
const muriloHeader = document.getElementById('murilo');
const iconHeader = document.getElementById('menu-icon');

bgHeader.style.transition = "150ms";
bgHeader.style.transitionProperty = "background-color";

window.addEventListener("load",() => {
    $(window).scroll(() => {
        if ($(window).scrollTop() > $("#reception").offset().top){
            bgHeader.style.backgroundColor = "";
            muriloHeader.style.color = "#3F8D1A";
            iconHeader.style.color = "#3F8D1A";
        }
        if ($(window).scrollTop() > $("#presentation").offset().top - 120){
            bgHeader.style.backgroundColor = "#D5DBD5";
            muriloHeader.style.color = "#323232";
            iconHeader.style.color = "#323232";
        }
        if ($(window).scrollTop() > $("#skills").offset().top){
            bgHeader.style.backgroundColor = "#3F8D1A";
            muriloHeader.style.color = "#D5DBD5";
            iconHeader.style.color = "#D5DBD5";
        }
        if ($(window).scrollTop() > $("#projects").offset().top){
            bgHeader.style.backgroundColor = "#323232";
            muriloHeader.style.color = "#3F8D1A";
            iconHeader.style.color = "#3F8D1A";
        }
        if ($(window).scrollTop() > $("#contact").offset().top){
            bgHeader.style.backgroundColor = "#8A8A8A";
            muriloHeader.style.color = "#323232";
            iconHeader.style.color = "#323232";
        }
    });   
});