var openButton = document.getElementById('open');
var dialog = document.getElementById('dialog');
var closeButton = document.getElementById('close');
var overlay = document.getElementById('overlay');

// show the overlay and the dialog
openButton.addEventListener('click', function () {
    dialog.classList.remove('hidden');
    overlay.classList.remove('hidden');
});

// hide the overlay and the dialog
closeButton.addEventListener('click', function () {
    dialog.classList.add('hidden');
    overlay.classList.add('hidden');
});