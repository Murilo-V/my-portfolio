function scrollTopButton() {
    const bgHeader = document.getElementById('navbar');
    const muriloHeader = document.getElementById('murilo');
    const iconHeader = document.getElementById('menu-icon');
    const topButton = document.getElementById('topButton');
    
    bgHeader.style.backgroundColor = "";
    muriloHeader.style.color = "#3F8D1A";
    iconHeader.style.color = "#3F8D1A";
    topButton.style.opacity = "0%";

    $('html, body').animate({
        scrollTop: 0
        }, 600, 'linear');
}