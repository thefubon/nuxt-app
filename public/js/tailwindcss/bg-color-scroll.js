var body = document.getElementsByTagName('body')[0];
body.style.backgroundColor = '#e2e8f0';

// trigger this function every time the user scrolls
window.onscroll = function (event) {
    var scroll = window.pageYOffset;
    if (scroll < 300) {
        // green
        body.style.backgroundColor = '#e2e8f0';
    } else if (scroll >= 300 && scroll < 600) {
        // yellow
        body.style.backgroundColor = '#fef9c3';
    } else if (scroll >= 600 && scroll < 1200) {
        // blue
        body.style.backgroundColor = '#bfdbfe';
    } else if (scroll >= 1200 && scroll < 1800) {
        // orange
        body.style.backgroundColor = '#fed7aa';
    } else if (scroll >= 1800 && scroll < 3000) {
        // red
        body.style.backgroundColor = '#fecaca';
    } else {
        // purple
        body.style.backgroundColor = '#e9d5ff';
    }
}