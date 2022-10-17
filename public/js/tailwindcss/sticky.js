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

// var header = document.getElementById("header");
// var body = document.getElementById("body");

// window.onscroll = function () {
//     if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
//       header.classList.add("w-full", "fixed", "top-0", "z-40");
//       body.classList.add("pt-[68px]");
//     } else {
//       header.classList.remove("w-full", "fixed", "top-0", "z-40");
//       body.classList.remove("pt-[68px]");
//     }
// }

// When the user clicks on the button, scroll to the top of the document
function goToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}