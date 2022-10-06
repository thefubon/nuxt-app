// grab everything we need
const btn = document.getElementById('mobile-menu-button')
console.log('btn', btn)
const sidebar = document.getElementById('sidebar')
console.log('sidebar', sidebar)
let isSidebarOpen = false

// add our event listener for the click
btn.addEventListener('click', () => {
  sidebar.classList.toggle('-translate-x-full')
})

// close sidebar if user clicks outside of the sidebar
document.addEventListener('click', (event) => {
  console.log('event', event.target)
  const isButtonClick = btn.contains(event.target)
  const isOutsideClick = sidebar !== event.target && !sidebar.contains(event.target)

  // check to see if user clicks outside the sidebar
  if (!isButtonClick && isOutsideClick) {
    console.log('outside click')
    sidebar.classList.toggle('-translate-x-full')
    return
  }
})