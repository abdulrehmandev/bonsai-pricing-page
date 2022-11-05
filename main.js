
const navBtn = document.querySelector('.toggle')
const primaryNav = document.querySelector('.primary-navigation')

// nav menu click

navBtn.addEventListener('click', () => {
  primaryNav.classList.toggle('nav-visible')

  navBtn.setAttribute('aria-expanded',
  (navBtn.getAttribute('aria-expanded') === 'false' ? true : false))
})

// dropdown hover

const dropdownTitle = document.querySelector('.dropdown')
const dropdownMenu = document.querySelector('.dropdown-menu')

let rotation = 0

dropdownTitle.addEventListener('mousemove', () => {
  dropdownMenu.classList.toggle('dropdown-visible')

  rotation = rotation == 0 ? 180 : 0
  document.querySelector('.dropdown-arrow').style.transform = `rotate(${rotation}deg)`
})