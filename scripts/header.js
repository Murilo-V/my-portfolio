function changeHeader() {
    const header = document.getElementById('navbar');
    
    window.addEventListener('scroll', function (){
        if (window.scrollY > 0) {
            header.style.backgroundColor = "#D5DBD5";
            header.style.transition = "300ms"
            header.style.transitionProperty = "background-color"
        }
        else {
            header.style.backgroundColor = ""
        }
    })
};

changeHeader();