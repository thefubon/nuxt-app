let menuBars = document.querySelector('.menu');

menuBars.onclick = ()=>{
    menuBars.classList.toggle('active');
    nav.classList.toggle("active");
}


var nav = document.getElementById("nav");

// When the user scrolls down 200px from the top of the document, show the button
window.onscroll = function () {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      nav.classList.add("sticky");
    } else {
      nav.classList.remove("sticky");
    }
}

// When the user clicks on the button, scroll to the top of the document
function goToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}