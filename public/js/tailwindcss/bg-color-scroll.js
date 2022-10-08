var body = document.getElementsByTagName('body')[0];
body.style.backgroundColor = 'gray';

// trigger this function every time the user scrolls
window.onscroll = function (event) {
    var scroll = window.pageYOffset;
    if (scroll < 300) {
        // green
        body.style.backgroundColor = 'gray';
    } else if (scroll >= 300 && scroll < 600) {
        // yellow
        body.style.backgroundColor = 'yellow';
    } else if (scroll >= 600 && scroll < 1200) {
        // blue
        body.style.backgroundColor = 'blue';
    } else if (scroll >= 1200 && scroll < 1800) {
        // orange
        body.style.backgroundColor = 'orange';
    } else if (scroll >= 1800 && scroll < 3000) {
        // red
        body.style.backgroundColor = 'red';
    } else {
        // purple
        body.style.backgroundColor = 'purple';
    }
}