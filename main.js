
const navBtn = document.querySelector('.toggle')
const primaryNav = document.querySelector('.primary-navigation')

navBtn.addEventListener('click', () => {
  primaryNav.classList.toggle('nav-visible')

  navBtn.setAttribute('aria-expanded',
  (navBtn.getAttribute('aria-expanded') === 'false' ? true : false))

})