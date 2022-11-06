
const navBtn = document.querySelector('.header-toggle')
const primaryNav = document.querySelector('.primary-navigation')
const toggleSwitch = document.querySelector('.toggle-switch')

const monthlyText = document.querySelector('.plan-monthly')
const yearlyText = document.querySelector('.plan-yearly')

// nav menu click

navBtn.addEventListener('click', () => {
  primaryNav.classList.toggle('nav-visible')

  navBtn.setAttribute('aria-expanded',
  (navBtn.getAttribute('aria-expanded') === 'false' ? true : false))
})

toggleSwitch.addEventListener('click', () => {
  toggleSwitch.setAttribute('data-toggled',
    (toggleSwitch.getAttribute('data-toggled') === 'false' ? true : false))

  if(monthlyText.classList.contains('active-plan')) {
    yearlyText.classList.add('active-plan')
    monthlyText.classList.remove('active-plan')
  } else {
    yearlyText.classList.remove('active-plan')
    monthlyText.classList.add('active-plan')
  }
})