var menu = document.getElementById("menu");

// open/close the menu when the user clicks on the button
function toggleMenu() {
    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
    } else {
        menu.classList.add('hidden');
    }
}

// close the menu when the user clicks outside of it 
window.onclick = function (event) {
    var dropdownWrapper = document.getElementById('dropdown-wrapper');
    if (!dropdownWrapper.contains(event.target) && !menu.classList.contains('hidden')) {
        menu.classList.add('hidden');
    }
}