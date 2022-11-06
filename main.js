
const navBtn = document.querySelector('.header-toggle')
const primaryNav = document.querySelector('.primary-navigation')

const toggleSwitch = document.querySelector('.toggle-switch')
const monthlyText = document.querySelector('.plan-monthly')
const yearlyText = document.querySelector('.plan-yearly')

const priceTitles = document.querySelectorAll('.price')

const faqAccordian = document.querySelectorAll('.accordian')

const footerAcc = document.querySelectorAll('.footer-accordian-arrow')
const footerPanel = document.querySelectorAll('.footer-panel')

let yearlyPrices = [17, 32, 52]
let monthlyPrices = [24, 39, 79]


navBtn.addEventListener('click', () => {
  primaryNav.classList.toggle('nav-visible')

  navBtn.setAttribute(
    'aria-expanded',
    (navBtn.getAttribute('aria-expanded') === 'false' ? true : false)
  )
})

toggleSwitch.addEventListener('click', () => {
  toggleSwitch.setAttribute(
    'data-toggled',
    (toggleSwitch.getAttribute('data-toggled') === 'false' ? true : false)
  )

  if (monthlyText.classList.contains('active-plan')) {
    yearlyText.classList.add('active-plan')
    monthlyText.classList.remove('active-plan')
  } else {
    yearlyText.classList.remove('active-plan')
    monthlyText.classList.add('active-plan')
  }

  let i = 0

  if(toggleSwitch.getAttribute('data-toggled') === 'true') {
    priceTitles.forEach(title => {
      title.innerHTML = `${yearlyPrices[i]}`
      i++
    })
  } else {
    priceTitles.forEach(title => {
      title.innerHTML = `${monthlyPrices[i]}`
      i++
    })
  }

  document.querySelectorAll('.billed-yearly').forEach(el => {
    el.classList.toggle('hidden')
  })
})

faqAccordian.forEach(accordian => {
  accordian.addEventListener('click', () => {
    var panel = accordian.nextElementSibling

    panel.style.maxHeight = panel.style.maxHeight ? null : panel.scrollHeight + 'px'
    accordian.setAttribute(
      'data-opened',
      (accordian.getAttribute('data-opened') === 'false' ? true : false)
    )
  })
})

for (let i = 0; i < footerAcc.length; i++) {
  footerAcc[i].addEventListener('click', () => {
    var panel = footerPanel[i]
    var arrow = footerAcc[i]
    
    panel.style.maxHeight = panel.style.maxHeight ? null : panel.scrollHeight + 'px'
    arrow.setAttribute(
      'data-opened',
      (arrow.getAttribute('data-opened') === 'false' ? true : false)
    )
  })
  
}