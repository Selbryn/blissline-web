const mobile = matchMedia('(max-width: 767px)')
const main = document.querySelector('main')
const original = [...main.children]
const members = document.querySelector('.members')
const cards = [...members.children]
const words = {
  es: ['Ver directo', 'Consultar fecha', 'Ver las 10 canciones', 'Ver menos', 'Anterior', 'Siguiente'],
  en: ['Watch live', 'Check availability', 'See all 10 songs', 'Show less', 'Previous', 'Next'],
  pl: ['Zobacz koncert', 'Zapytaj o termin', 'Zobacz 10 utworów', 'Pokaż mniej', 'Poprzedni', 'Następny'],
}
const label = i => (words[document.documentElement.lang] || words.es)[i]
const actions = document.createElement('div')
actions.className = 'actions mobile-only'
const live = document.createElement('a')
live.className = 'button'
live.href = document.querySelector('#repertorio a[href*="youtube"]').href
live.target = '_blank'; live.rel = 'noreferrer'
const contact = document.createElement('a')
contact.className = 'button'; contact.href = '#contacto'
actions.append(live, contact)
document.querySelector('.hero-copy').append(actions)
const repeat = document.createElement('a')
repeat.className = 'button mobile-only mobile-contact'; repeat.href = '#contacto'
document.querySelector('#repertorio').append(repeat)
const more = document.createElement('button')
more.type = 'button'; more.className = 'button mobile-only song-expand'
more.setAttribute('aria-expanded', 'false')
const songs = document.querySelector('.song-list')
songs.id = 'song-list'; more.setAttribute('aria-controls', songs.id)
songs.after(more)
more.onclick = () => { const expanded = more.getAttribute('aria-expanded') !== 'true'; more.setAttribute('aria-expanded', expanded); songs.classList.toggle('expanded', expanded); translate() }
const controls = document.createElement('div')
controls.className = 'mobile-only member-controls'
const previous = document.createElement('button'), next = document.createElement('button'), count = document.createElement('span')
previous.type = next.type = 'button'; previous.textContent = '←'; next.textContent = '→'
count.setAttribute('aria-live', 'polite')
controls.append(previous, count, next); members.after(controls)
let index = 0
const update = () => { index = cards.reduce((best, card, i) => Math.abs(card.getBoundingClientRect().left - members.getBoundingClientRect().left) < Math.abs(cards[best].getBoundingClientRect().left - members.getBoundingClientRect().left) ? i : best, 0); count.textContent = `${index + 1} / 4`; previous.disabled = index === 0; next.disabled = index === 3 }
const move = step => members.scrollTo({left: cards[Math.max(0, Math.min(3, index + step))].getBoundingClientRect().left - members.getBoundingClientRect().left + members.scrollLeft, behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth'})
previous.onclick = () => move(-1); next.onclick = () => move(1)
members.addEventListener('scroll', update, {passive:true})
function translate() { live.textContent = label(0); contact.textContent = repeat.textContent = label(1); more.textContent = label(more.getAttribute('aria-expanded') === 'true' ? 3 : 2); previous.setAttribute('aria-label', label(4)); next.setAttribute('aria-label', label(5)) }
new MutationObserver(translate).observe(document.documentElement, {attributes:true, attributeFilter:['lang']})
function layout() {
  const order = mobile.matches ? ['inicio', 'show', 'repertorio', 'eventos', 'banda', 'contacto'].map(id => document.getElementById(id)) : original
  main.append(...order)
  const nav = document.querySelector('.site-nav')
  order.forEach(section => {
    const link = nav.querySelector(`a[href="#${section.id}"]`)
    if (link) nav.append(link)
  })

  update()
}
document.querySelectorAll('.member-photo img').forEach(img => { img.loading = 'lazy'; img.decoding = 'async' })
document.querySelectorAll('.contact-icon').forEach(link => { const text = document.createElement('span'); text.className = 'mobile-only'; text.textContent = link.href.includes('wa.me') ? 'WhatsApp' : link.getAttribute('aria-label'); link.append(text) })
mobile.addEventListener('change', layout); layout(); translate()
// Preserve native touch scrolling and distinguish a swipe from a card tap.
let gestureStart = null
let swiped = false
members.addEventListener('pointerdown', event => {
  if (!mobile.matches || event.pointerType !== 'touch') return
  gestureStart = { x: event.clientX, y: event.clientY }
  swiped = false
}, { passive: true })
members.addEventListener('pointermove', event => {
  if (gestureStart && Math.hypot(event.clientX - gestureStart.x, event.clientY - gestureStart.y) > 10) swiped = true
}, { passive: true })
members.addEventListener('pointercancel', () => { if (gestureStart) swiped = true; gestureStart = null }, { passive: true })
members.addEventListener('pointerup', () => { gestureStart = null }, { passive: true })
members.addEventListener('click', event => {
  if (mobile.matches && swiped && event.detail !== 0) {
    event.preventDefault()
    event.stopPropagation()
    swiped = false
  }
}, true)

const contactLinks = document.querySelector('.contact-links')
const originalContactLinks = [...contactLinks.children]
function orderContactLinks() {
  const links = mobile.matches
    ? ['wa.me', 'instagram.com', 'youtube.com'].map(domain => originalContactLinks.find(link => link.href.includes(domain)))
    : originalContactLinks
  contactLinks.append(...links)
}
mobile.addEventListener('change', orderContactLinks)
orderContactLinks()
