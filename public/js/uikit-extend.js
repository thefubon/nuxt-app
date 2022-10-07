let buttons = Array.from(document.querySelectorAll('.section-gallery__item'));

let slider = document.getElementById('modal-slider');

buttons.forEach(item => {
  item.addEventListener('click', () => {
    UIkit.slideshow(slider).show(item.dataset.index - 1);
    console.log(item.dataset.index)
  })
})