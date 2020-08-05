function changeHeader() {
    const header = document.getElementById('navbar'); // colocar em cache
    
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

// $(document).ready(function(){
// 	$("#welcome").scroll(function(){
// 		$("#menu").css("background","#D5DBD5");
// 	});
// });