// Get the modal by id
var modal = document.getElementById("modal");

// Get the modal image tag
var modalImg = document.getElementById("modal-img");

// this function is called when a small image is clicked
function showModal(src) {
    modal.classList.remove('hidden');
    modalImg.src = src;
}

// this function is called when the close button is clicked
function closeModal() {
    modal.classList.add('hidden');
}