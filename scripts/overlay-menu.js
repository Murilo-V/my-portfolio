function openNav() {
    document.getElementById("overlay").style.width = "100%";

    const muriloHeader = document.getElementById('murilo');
    const iconHeader = document.getElementById('menu-icon');
    const bgHeader = document.getElementById('navbar');
    
    bgHeader.style.backgroundColor = "#323232";
    muriloHeader.style.color = "#3F8D1A";
    iconHeader.style.color = "#3F8D1A";
  }
  
function closeNav() {
    document.getElementById("overlay").style.width = "0%";
  }
