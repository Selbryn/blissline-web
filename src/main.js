import './style.css'

const assetBase = import.meta.env.BASE_URL

document.querySelector('#app').innerHTML = `
  <a class="skip-link" href="#contenido">Saltar al contenido</a>
  <div class="disco-ball" aria-hidden="true">
    <canvas id="disco-ball-canvas"></canvas>
    <span class="disco-ball__chain"></span>
  </div>
  <header class="site-header">
    <canvas class="header-reflections" aria-hidden="true"></canvas>
    <a class="brand" href="#inicio" aria-label="Blissline, inicio">
      <img src="${assetBase}images/blissline-logo.png" alt="Blissline">
    </a>
    <nav aria-label="Navegación principal">
      <a href="#show" data-i18n="nav.show">El show</a>
      <a href="#banda" data-i18n="nav.band">La banda</a>
      <a href="#repertorio" data-i18n="nav.repertoire">Repertorio</a>
      <a href="#eventos" data-i18n="nav.events">Eventos</a>
      <a href="#contacto" data-i18n="nav.contact">Contacto</a>
      <div class="language-picker">
        <span class="visually-hidden" data-i18n="language.label">Idioma</span>
        <button class="language-toggle" type="button" aria-haspopup="listbox" aria-expanded="false" aria-label="Idioma seleccionado">
          <img class="flag flag-es" src="${assetBase}images/flags/es.svg" alt="">
        </button>
        <div class="language-menu" role="listbox" aria-label="Seleccionar idioma">
          <button type="button" role="option" data-language="es" aria-label="Español"><img class="flag flag-es" src="${assetBase}images/flags/es.svg" alt=""></button>
          <button type="button" role="option" data-language="en" aria-label="English"><img class="flag flag-en" src="${assetBase}images/flags/en.svg" alt=""></button>
          <button type="button" role="option" data-language="pl" aria-label="Polski"><img class="flag flag-pl" src="${assetBase}images/flags/pl.svg" alt=""></button>
        </div>
      </div>
    </nav>
  </header>

  <a class="button floating-contact" href="#contacto" aria-label="Contactar con Blissline">
    <span data-i18n="floating.cta">Contactar con Blissline</span>
  </a>

  <main id="contenido">
    <section class="hero-section" id="inicio">
      <video class="hero-video" autoplay muted loop playsinline preload="auto" aria-hidden="true">
        <source src="${assetBase}videos/blisslineMainVideo.mp4" type="video/mp4">
      </video>
      <div class="hero-video-overlay" aria-hidden="true"></div>
      <div class="hero-copy">
        <p class="eyebrow" data-i18n="hero.eyebrow">Música en directo</p>
        <h1 data-i18n="hero.title">BLISSLINE.<br>Música atemporal.</h1>
        <p class="intro" data-i18n="hero.intro">Funk, disco y house para bodas, eventos privados y festivales.</p>
      </div>
    </section>

    <section class="content-section" id="show">
      <p class="eyebrow" data-i18n="show.eyebrow">Más que música en vivo</p>
      <h2 data-i18n="show.title">Un sonido que todos conocen</h2>
      <p data-i18n="show.description">Canciones icónicas, músicos en vivo y un groove irresistible: una experiencia para conectar generaciones, culturas y nacionalidades.</p>
      <ul class="feature-list">
        <li><strong>Atemporal</strong><span>Canciones que nunca se olvidan.</span></li>
        <li><strong>Internacional</strong><span>Música que cruza idiomas y culturas.</span></li>
        <li><strong>En vivo</strong><span>Músicos reales, interacción real, energía real.</span></li>
        <li><strong>Versátil</strong><span>Del cóctel elegante a una pista de baile llena.</span></li>
      </ul>
    </section>

    <section class="content-section" id="banda">
      <p class="eyebrow" data-i18n="band.eyebrow">El grupo</p>
      <h2 data-i18n="band.title">Cuatro músicos, un mismo groove</h2>
      <div class="members">
        <article>
          <div class="member-heading"><h3>Ada Nasiadka</h3><p class="member-role">Voz</p></div>
          <div class="member-photo"><img src="${assetBase}images/ada.png" alt="Ada Nasiadka cantando"></div>
          <p class="member-description">Ada pone voz y carácter a cada canción, conectando con el público desde la primera nota.</p>
        </article>
        <article>
          <div class="member-heading"><h3>Luis Albarrán</h3><p class="member-role">Bajo</p></div>
          <div class="member-photo"><img src="${assetBase}images/luis.png" alt="Luis Albarrán tocando el bajo"></div>
          <p class="member-description">Luis sostiene el groove con precisión y carácter, dando fuerza y elegancia a cada canción.</p>
        </article>
        <article>
          <div class="member-heading"><h3>Tino Bonet</h3><p class="member-role">Saxofón</p></div>
          <div class="member-photo"><img src="${assetBase}images/tino.png" alt="Tino Bonet tocando el saxofón"></div>
          <p class="member-description">Tino aporta melodías brillantes y ese toque de soul que convierte cada directo en algo especial.</p>
        </article>
        <article>
          <div class="member-heading"><h3>Mauro Magarelli</h3><p class="member-role">Percusión</p></div>
          <div class="member-photo"><img src="${assetBase}images/mauro.png" alt="Mauro Magarelli tocando las congas"></div>
          <p class="member-description">Mauro enciende el ritmo con sus manos y transforma cualquier espacio en una celebración.</p>
        </article>
      </div>
    </section>

    <section class="content-section" id="repertorio">
      <p class="eyebrow" data-i18n="repertoire.eyebrow">El sonido</p>
      <h2 data-i18n="repertoire.title">Ya conoces las canciones. Ahora vívelas en directo.</h2>
      <div class="actions">
        <a class="button button-secondary" href="https://open.spotify.com/playlist/4eXiOclwUECFepTtaUKULV" target="_blank" rel="noreferrer" aria-label="Escucha el repertorio en Spotify">
          <svg class="button-icon" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="var(--ink)"/><path d="M7.1 9.2c3.3-1 6.5-.7 9.5.7M7.8 12.2c2.8-.7 5.5-.4 8 .8M8.7 15c2.2-.4 4.2-.1 6.2.8" fill="none" stroke="var(--cream)" stroke-width="1.4" stroke-linecap="round"/></svg>
          <span data-i18n="repertoire.spotify">Escucha el repertorio</span>
        </a>
        <a class="button button-secondary" href="https://www.youtube.com/playlist?list=PLJSZpgz-EJ58" target="_blank" rel="noreferrer" aria-label="Nuestro directo en YouTube">
          <svg class="button-icon" viewBox="0 0 24 24" aria-hidden="true"><rect x="2" y="5" width="20" height="14" rx="4" fill="var(--ink)"/><path d="m10 9 5 3-5 3z" fill="var(--cream)"/></svg>
          <span data-i18n="repertoire.youtube">Nuestro directo</span>
        </a>
      </div>
      <div class="repertoire-highlights">
        <p class="repertoire-highlights__label">Algunos clásicos que tocamos</p>
        <ul class="song-list">
          <li><a class="song-play" href="https://www.youtube.com/watch?v=yURRmWtbTbo" target="_blank" rel="noreferrer" aria-label="Escuchar Don’t Stop ’Til You Get Enough en YouTube"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="2" y="5" width="20" height="14" rx="4" fill="var(--ink)"/><path d="m10 9 5 3-5 3z" fill="var(--cream)"/></svg></a><span>Don’t Stop ’Til You Get Enough</span><small>Michael Jackson</small></li>
          <li><a class="song-play" href="https://www.youtube.com/watch?v=-ihs-vT9T3Q" target="_blank" rel="noreferrer" aria-label="Escuchar Night Fever en YouTube"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="2" y="5" width="20" height="14" rx="4" fill="var(--ink)"/><path d="m10 9 5 3-5 3z" fill="var(--cream)"/></svg></a><span>Night Fever</span><small>Bee Gees</small></li>
          <li><a class="song-play" href="https://www.youtube.com/watch?v=uyGY2NfYpeE" target="_blank" rel="noreferrer" aria-label="Escuchar We Are Family en YouTube"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="2" y="5" width="20" height="14" rx="4" fill="var(--ink)"/><path d="m10 9 5 3-5 3z" fill="var(--cream)"/></svg></a><span>We Are Family</span><small>Sister Sledge</small></li>
          <li><a class="song-play" href="https://www.youtube.com/watch?v=aXgSHL7efKg" target="_blank" rel="noreferrer" aria-label="Escuchar Le Freak en YouTube"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="2" y="5" width="20" height="14" rx="4" fill="var(--ink)"/><path d="m10 9 5 3-5 3z" fill="var(--cream)"/></svg></a><span>Le Freak</span><small>CHIC</small></li>
          <li><a class="song-play" href="https://www.youtube.com/watch?v=Lrle0x_DHBM" target="_blank" rel="noreferrer" aria-label="Escuchar Let’s Groove en YouTube"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="2" y="5" width="20" height="14" rx="4" fill="var(--ink)"/><path d="m10 9 5 3-5 3z" fill="var(--cream)"/></svg></a><span>Let’s Groove</span><small>Earth, Wind &amp; Fire</small></li>
          <li><a class="song-play" href="https://www.youtube.com/watch?v=Gs069dndIYk" target="_blank" rel="noreferrer" aria-label="Escuchar September en YouTube"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="2" y="5" width="20" height="14" rx="4" fill="var(--ink)"/><path d="m10 9 5 3-5 3z" fill="var(--cream)"/></svg></a><span>September</span><small>Earth, Wind &amp; Fire</small></li>
          <li><a class="song-play" href="https://www.youtube.com/watch?v=D-NvQ6VJYtE" target="_blank" rel="noreferrer" aria-label="Escuchar Cosmic Girl en YouTube"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="2" y="5" width="20" height="14" rx="4" fill="var(--ink)"/><path d="m10 9 5 3-5 3z" fill="var(--cream)"/></svg></a><span>Cosmic Girl</span><small>Jamiroquai</small></li>
          <li><a class="song-play" href="https://www.youtube.com/watch?v=Zi_XLOBDo_Y" target="_blank" rel="noreferrer" aria-label="Escuchar Billie Jean en YouTube"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="2" y="5" width="20" height="14" rx="4" fill="var(--ink)"/><path d="m10 9 5 3-5 3z" fill="var(--cream)"/></svg></a><span>Billie Jean</span><small>Michael Jackson</small></li>
          <li><a class="song-play" href="https://www.youtube.com/watch?v=Er9xGRolrT4" target="_blank" rel="noreferrer" aria-label="Escuchar Good Times en YouTube"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="2" y="5" width="20" height="14" rx="4" fill="var(--ink)"/><path d="m10 9 5 3-5 3z" fill="var(--cream)"/></svg></a><span>Good Times</span><small>CHIC</small></li>
          <li><a class="song-play" href="https://www.youtube.com/watch?v=6dYWe1c3OyU" target="_blank" rel="noreferrer" aria-label="Escuchar I Will Survive en YouTube"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="2" y="5" width="20" height="14" rx="4" fill="var(--ink)"/><path d="m10 9 5 3-5 3z" fill="var(--cream)"/></svg></a><span>I Will Survive</span><small>Gloria Gaynor</small></li>
        </ul>
      </div>
    </section>

    <section class="content-section" id="eventos">
      <p class="eyebrow" data-i18n="events.eyebrow">Para cada celebración</p>
      <h2 data-i18n="events.title">Los grandes momentos se recuerdan por cómo suenan.</h2>
      <ul class="event-list">
        <li>Bodas</li>
        <li>Eventos privados y corporativos</li>
        <li>Festivales</li>
      </ul>
    </section>

    <section class="contact-section" id="contacto">
      <p class="eyebrow" data-i18n="contact.eyebrow">Contacto</p>
      <h2 data-i18n="contact.title">Hablemos de tu evento</h2>
      <p data-i18n="contact.description">Cuéntanos qué tienes en mente y crearemos el sonido de la noche.</p>
      <div class="contact-details">
        <a class="contact-detail" href="mailto:blissline.es@gmail.com">
          <span class="contact-detail-label">Email</span>
          <span>blissline.es@gmail.com</span>
        </a>
        <a class="contact-detail" href="tel:+34611619440">
          <span class="contact-detail-label">Teléfono</span>
          <span>+34 611 61 94 40</span>
        </a>
      </div>
      <div class="contact-links" aria-label="Redes sociales">
        <a class="contact-icon" href="https://www.instagram.com/blissline.es/" target="_blank" rel="noreferrer" aria-label="Instagram">
          <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="12" r="4.25" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="17.4" cy="6.7" r="1.1" fill="currentColor"/></svg>
        </a>
        <a class="contact-icon" href="https://www.youtube.com/playlist?list=PLJSZpgz-EJ58" target="_blank" rel="noreferrer" aria-label="YouTube">
          <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="2.5" y="5.5" width="19" height="13" rx="4" fill="none" stroke="currentColor" stroke-width="2"/><path d="m10 9 5 3-5 3Z" fill="currentColor"/></svg>
        </a>
        <a class="contact-icon" href="https://wa.me/34611619440" target="_blank" rel="noreferrer" aria-label="Abrir WhatsApp">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 11.6a8 8 0 0 1-11.8 7l-4.2 1.2 1.3-4A8 8 0 1 1 20 11.6Z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><path d="M9 8.6c.2-.4.4-.4.7-.4h.5c.2 0 .4.1.5.4l.6 1.4c.1.3.1.5-.1.7l-.5.6c.6 1.2 1.5 2.1 2.7 2.7l.6-.5c.2-.2.4-.2.7-.1l1.4.6c.3.1.4.3.4.5v.5c0 .3 0 .5-.4.7-.5.3-1.2.5-1.8.3-2.6-.7-4.5-2.6-5.2-5.2-.2-.7 0-1.3.3-1.8Z" fill="currentColor"/></svg>
        </a>
      </div>
    </section>
  </main>

  <footer class="site-footer">© ${new Date().getFullYear()} Blissline</footer>
`

const translations = {
  es: { language: 'Idioma', nav: ['El show', 'Repertorio', 'Eventos', 'Contacto'], hero: ['Música en directo', 'BLISSLINE.<br>Música atemporal.', 'Funk, disco y house para bodas, eventos privados y festivales.', 'Contactar con Blissline'], show: ['Más que música en vivo', 'Un sonido que todos conocen', 'Canciones icónicas, músicos en vivo y un groove irresistible: una experiencia para conectar generaciones, culturas y nacionalidades.'], band: ['El grupo', 'Cuatro músicos, un mismo groove'], repertoire: ['El sonido', 'Ya conoces las canciones. Ahora vívelas en directo.', '', 'Escucha el repertorio', 'Nuestro directo'], events: ['Para cada celebración', 'Los grandes momentos se recuerdan por cómo suenan.'], contact: ['Contacto', 'Hablemos de tu evento', 'Cuéntanos qué tienes en mente y crearemos el sonido de la noche.'], features: [['Atemporal', 'Canciones que nunca se olvidan.'], ['Internacional', 'Música que cruza idiomas y culturas.'], ['En vivo', 'Músicos reales, interacción real, energía real.'], ['Versátil', 'Del cóctel elegante a una pista de baile llena.']], eventItems: ['Bodas', 'Eventos privados y corporativos', 'Festivales'], roles: ['Voz', 'Bajo', 'Saxofón', 'Percusión'] },
  en: { language: 'Language', nav: ['The show', 'Repertoire', 'Events', 'Contact'], hero: ['Live music', 'Timeless music.<br>Live energy.', 'Funk, disco and house for weddings, private events and festivals.', 'Contact Blissline'], show: ['More than live music', 'A sound everyone knows', 'Iconic songs, live musicians and an irresistible groove: an experience that connects generations, cultures and nationalities.'], band: ['The band', 'Four musicians, one groove'], repertoire: ['The sound', 'You know the songs. Now experience them live.', 'From timeless disco and funk classics to the energy of contemporary house.', 'Listen to the repertoire', 'Our live show'], events: ['For every celebration', 'Great moments are remembered by how they sound.'], contact: ['Contact', 'Let’s talk about your event', 'Tell us what you have in mind and we’ll create the sound of the night.'], features: [['Timeless', 'Songs you never forget.'], ['International', 'Music that crosses languages and cultures.'], ['Live', 'Real musicians, real interaction, real energy.'], ['Versatile', 'From an elegant cocktail to a packed dance floor.']], eventItems: ['Weddings', 'Private and corporate events', 'Festivals'], roles: ['Vocals', 'Bass', 'Saxophone', 'Percussion'] },
  pl: { language: 'Język', nav: ['Show', 'Repertuar', 'Wydarzenia', 'Kontakt'], hero: ['Muzyka na żywo', 'Ponadczasowa muzyka.<br>Energia na żywo.', 'Funk, disco i house na wesela, prywatne wydarzenia i festiwale.', 'Skontaktuj się z Blissline'], show: ['Więcej niż muzyka na żywo', 'Brzmienie, które zna każdy', 'Ikoniczne utwory, muzycy na żywo i nieodparty groove: doświadczenie łączące pokolenia, kultury i narodowości.'], band: ['Zespół', 'Czterech muzyków, jeden groove'], repertoire: ['Brzmienie', 'Znasz te utwory. Teraz przeżyj je na żywo.', 'Od ponadczasowych klasyków disco i funku po energię współczesnego house’u.', 'Posłuchaj repertuaru', 'Nasz koncert na żywo'], events: ['Na każdą uroczystość', 'Wielkie chwile pamięta się po tym, jak brzmią.'], contact: ['Kontakt', 'Porozmawiajmy o Twoim wydarzeniu', 'Opowiedz nam o swoich planach, a stworzymy brzmienie tego wieczoru.'], features: [['Ponadczasowe', 'Piosenki, których się nie zapomina.'], ['Międzynarodowe', 'Muzyka przekraczająca języki i kultury.'], ['Na żywo', 'Prawdziwi muzycy, prawdziwa energia.'], ['Wszechstronne', 'Od eleganckiego koktajlu po pełny parkiet.']], eventItems: ['Wesela', 'Wydarzenia prywatne i firmowe', 'Festiwale'], roles: ['Wokal', 'Bas', 'Saksofon', 'Perkusja'] }
}

const navLabels = {
  es: ['El show', 'La banda', 'Repertorio', 'Eventos', 'Contacto'],
  en: ['The show', 'The band', 'Repertoire', 'Events', 'Contact'],
  pl: ['Show', 'Zespół', 'Repertuar', 'Wydarzenia', 'Kontakt']
}

const applyLanguage = (language) => {
  const t = translations[language] || translations.es
  document.documentElement.lang = language
  const toggleFlag = document.querySelector('.language-toggle .flag')
  if (toggleFlag) {
    toggleFlag.className = `flag flag-${language}`
    toggleFlag.src = `${assetBase}images/flags/${language}.svg`
  }
  document.querySelector('nav').setAttribute('aria-label', t.language)
  document.querySelectorAll('nav > a').forEach((el, i) => { el.textContent = navLabels[language][i] })
  const groups = [
    [['.hero-section .eyebrow', '.hero-section h1', '.hero-section .intro'], t.hero],
    [['#show .eyebrow', '#show h2', '#show > p'], t.show],
    [['#banda .eyebrow', '#banda h2'], t.band],
    [['#repertorio .eyebrow', '#repertorio h2', '#repertorio > p'], t.repertoire],
    [['#eventos .eyebrow', '#eventos h2'], t.events],
    [['#contacto .eyebrow', '#contacto h2', '#contacto > p'], t.contact]
  ]
  groups.forEach(([selectors, values]) => selectors.forEach((selector, i) => { const el = document.querySelector(selector); if (el) el.innerHTML = values[i] }))
  const floatingContact = document.querySelector('.floating-contact span')
  if (floatingContact) floatingContact.textContent = t.hero[3]
  document.querySelectorAll('.feature-list li').forEach((el, i) => { el.querySelector('strong').textContent = t.features[i][0]; el.querySelector('span').textContent = t.features[i][1] })
  document.querySelectorAll('.event-list li').forEach((el, i) => { el.textContent = t.eventItems[i] })
  document.querySelectorAll('.member-role').forEach((el, i) => { el.textContent = t.roles[i] })
  document.querySelectorAll('#repertorio .button span[data-i18n]').forEach((el, i) => { el.textContent = t.repertoire[i + 3] })
  document.querySelector('.language-picker span.visually-hidden').textContent = t.language
  document.querySelector('.language-toggle').setAttribute('aria-label', `${t.language}: ${language}`)
  localStorage.setItem('blissline-language', language)
}

const languageToggle = document.querySelector('.language-toggle')
const languageMenu = document.querySelector('.language-menu')
const setLanguageMenuState = (open) => {
  languageMenu.classList.toggle('is-open', open)
  languageToggle.setAttribute('aria-expanded', String(open))
}
const savedLanguage = localStorage.getItem('blissline-language') || 'es'
applyLanguage(savedLanguage)
document.querySelectorAll('[data-language]').forEach((option) => option.addEventListener('click', (event) => {
  event.preventDefault()
  event.stopPropagation()
  applyLanguage(option.dataset.language)
  setLanguageMenuState(false)
}))
languageToggle.addEventListener('click', (event) => {
  event.preventDefault()
  event.stopPropagation()
  setLanguageMenuState(!languageMenu.classList.contains('is-open'))
})
document.addEventListener('click', (event) => { if (!event.target.closest('.language-picker')) setLanguageMenuState(false) })

const membersGrid = document.querySelector('.members')
if (membersGrid) {
  membersGrid.querySelectorAll('article').forEach((card) => {
    const name = card.querySelector('h3').textContent
    const role = card.querySelector('.member-role').textContent
    const countries = ['Polonia', 'Venezuela', 'España', 'Venezuela']
    const country = countries[[...card.parentElement.children].indexOf(card)]
    const rotor = document.createElement('div')
    rotor.className = 'member-rotor'
    const front = document.createElement('div')
    front.className = 'member-front'
    front.append(...card.childNodes)
    const back = document.createElement('div')
    back.className = 'member-back'
    const title = document.createElement('h3')
    title.textContent = name
    const backRole = document.createElement('p')
    backRole.className = 'member-back-role'
    backRole.textContent = role
    const backCountry = document.createElement('p')
    backCountry.className = 'member-country'
    backCountry.textContent = country
    const copy = document.createElement('p')
    copy.textContent = 'Texto de prueba. Aquí podrás conocer más sobre este artista y su historia con Blissline.'
    const secondCopy = document.createElement('p')
    secondCopy.className = 'member-back-copy-second'
    secondCopy.textContent = 'Otro bloque de texto de prueba para ampliar la historia del artista y su conexión con el groove.'
    back.append(title, backRole, backCountry, copy, secondCopy)
    back.setAttribute('aria-hidden', 'true')
    rotor.append(front, back)
    card.append(rotor)
    card.tabIndex = 0
    card.setAttribute('role', 'button')
    card.setAttribute('aria-label', name)
    card.setAttribute('aria-pressed', 'false')
    let turns = 0
    const flip = () => {
      turns += 1
      const flipped = turns % 2 === 1
      card.style.setProperty('--flip-angle', `${turns * 180}deg`)
      card.setAttribute('aria-pressed', String(flipped))
      front.setAttribute('aria-hidden', String(flipped))
      back.setAttribute('aria-hidden', String(!flipped))
    }
    card.addEventListener('click', flip)
    card.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault()
        if (!event.repeat) flip()
      }
    })
  })
  const visibilityObserver = new IntersectionObserver(([entry]) => {
    membersGrid.classList.toggle('is-visible', entry.isIntersecting)
  }, { rootMargin: '120px 0px', threshold: .05 })
  visibilityObserver.observe(membersGrid)

  const cardMotion = window.matchMedia('(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)')
  if (cardMotion.matches) {
    document.querySelectorAll('.members article').forEach((card) => {
      let pointerFrame = 0
      let pointerX = 0
      let pointerY = 0

      const resetCard = () => {
        if (pointerFrame) cancelAnimationFrame(pointerFrame)
        pointerFrame = 0
        card.style.setProperty('--card-rotate-x', '0deg')
        card.style.setProperty('--card-rotate-y', '0deg')
        card.style.setProperty('--foil-x', '50%')
        card.style.setProperty('--foil-y', '50%')
        card.style.setProperty('--parallax-x', '0px')
        card.style.setProperty('--parallax-y', '0px')
      }

      card.addEventListener('pointermove', (event) => {
        if (!cardMotion.matches || event.pointerType === 'touch') {
          resetCard()
          return
        }
        pointerX = event.clientX
        pointerY = event.clientY
        if (pointerFrame) return
        pointerFrame = requestAnimationFrame(() => {
          const bounds = card.getBoundingClientRect()
          const x = Math.max(0, Math.min(1, (pointerX - bounds.left) / bounds.width))
          const y = Math.max(0, Math.min(1, (pointerY - bounds.top) / bounds.height))
          card.style.setProperty('--card-rotate-x', `${(0.5 - y) * 7}deg`)
          card.style.setProperty('--card-rotate-y', `${(x - 0.5) * 7}deg`)
          card.style.setProperty('--foil-x', `${x * 100}%`)
          card.style.setProperty('--foil-y', `${y * 100}%`)
          card.style.setProperty('--parallax-x', `${(x - 0.5) * 12}px`)
          card.style.setProperty('--parallax-y', `${(y - 0.5) * 12}px`)
          pointerFrame = 0
        })
      }, { passive: true })

      card.addEventListener('pointerleave', resetCard)
      card.addEventListener('pointercancel', resetCard)
    })
  }
}

const canvas = document.querySelector('#disco-ball-canvas')
const gl = canvas.getContext('webgl', { alpha: true, antialias: true })

if (gl) {
  const vertexSource = `
    attribute vec2 a_position;
    varying vec2 v_uv;
    void main() {
      v_uv = a_position * .5 + .5;
      gl_Position = vec4(a_position, 0.0, 1.0);
    }
  `

  const fragmentSource = `
    precision highp float;
    varying vec2 v_uv;
    uniform float u_rotation;
    uniform vec2 u_pointer;

    mat2 rot2D(float a) {
      float c = cos(a);
      float s = sin(a);
      return mat2(c, -s, s, c);
    }

    vec3 stageLights(vec3 ray) {
      float sky = smoothstep(-.68, .8, ray.y);
      float floorLight = smoothstep(.75, -.55, ray.y);
      vec3 environment = mix(vec3(.42, .44, .49), vec3(.92, .95, .98), sky);
      environment += floorLight * vec3(.18, .17, .22);
      float softbox = pow(max(dot(ray, normalize(vec3(-.18, .73, .66))), 0.0), 15.0);
      float coolStrip = pow(max(dot(ray, normalize(vec3(.68, .32, .65))), 0.0), 38.0);
      float violetGlimmer = pow(max(dot(ray, normalize(vec3(-.72, .12, .66))), 0.0), 44.0);
      float lightBand = pow(.5 + .5 * sin(ray.x * 19.0 + ray.y * 8.0), 9.0);
      return environment + softbox * vec3(1.0) + coolStrip * vec3(.35, .52, .88) + violetGlimmer * vec3(.34, .08, .42) + lightBand * vec3(.8, .86, 1.0);
    }

    void main() {
      vec2 uv = v_uv * 2.0 - 1.0;
      float radius = length(uv);
      if (radius > 1.0) discard;

      float z = sqrt(1.0 - radius * radius);
      vec3 normal = normalize(vec3(uv, z));
      normal.xz = rot2D(u_rotation) * normal.xz;

      float longitude = atan(normal.z, normal.x);
      float latitude = atan(normal.y, length(normal.xz));
      float rows = 23.0;
      float latitudeStep = 3.141593 / rows;
      float quantLatitude = (floor((latitude + 1.570796) / latitudeStep) + .5) * latitudeStep - 1.570796;
      float columns = max(7.0, floor(38.0 * cos(quantLatitude)));
      float longitudeStep = 6.283185 / columns;
      float quantLongitude = (floor((longitude + 3.141593) / longitudeStep) + .5) * longitudeStep - 3.141593;
      vec3 tileNormal = vec3(cos(quantLongitude) * cos(quantLatitude), sin(quantLatitude), sin(quantLongitude) * cos(quantLatitude));
      vec3 tileScreenNormal = tileNormal;
      tileScreenNormal.xz = rot2D(-u_rotation) * tileScreenNormal.xz;

      vec2 grid = vec2((longitude + 3.141593) / longitudeStep, (latitude + 1.570796) / latitudeStep);
      vec2 tile = abs(fract(grid) - .5);
      float seam = smoothstep(.465, .5, max(tile.x, tile.y));
      vec2 tileIndex = floor(grid);
      float tileVariation = fract(sin(dot(tileIndex, vec2(41.23, 83.71))) * 24753.18);

      vec3 viewDir = normalize(vec3(-uv.x, -uv.y, 1.65));
      vec3 reflection = reflect(-viewDir, tileScreenNormal);
      vec3 color = stageLights(reflection);
      // Calcula la posición proyectada del centro de cada tesela. Al usar el
      // centro (y no el píxel actual), toda la tesela comparte una respuesta
      // de luz, produciendo reflejos separados propios de una bola de disco.
      vec2 tileCenter = tileScreenNormal.xy;
      vec2 cursorOnBall = u_pointer * .96;
      float cursorDistance = distance(tileCenter, cursorOnBall);
      float cursorPool = 1.0 - smoothstep(.1, .5, cursorDistance);
      float cursorCore = 1.0 - smoothstep(.02, .19, cursorDistance);
      float secondVariation = fract(sin(dot(tileIndex, vec2(17.71, 119.37))) * 43758.54);
      float facetAngle = mix(.5, 1.45, pow(max(tileScreenNormal.z, 0.0), 1.5));
      float facetSparkle = mix(.42, 1.55, tileVariation) * mix(.72, 1.18, secondVariation) * facetAngle;
      vec3 coolTint = mix(vec3(.4, .48, 1.0), vec3(.8, .12, 1.0), smoothstep(.06, .62, tileVariation));
      vec3 facetTint = mix(coolTint, vec3(.95, .5, .84), smoothstep(.86, 1.0, secondVariation));
      color += cursorPool * facetSparkle * facetTint * .98;
      color += cursorCore * facetSparkle * mix(vec3(.78, .3, 1.0), vec3(1.0, .9, .92), smoothstep(.72, 1.0, secondVariation)) * 1.72;
      vec3 keyLight = normalize(vec3(-.45, .72, .65));
      float metal = pow(max(dot(reflect(-keyLight, tileScreenNormal), viewDir), 0.0), 42.0);
      float sideLight = pow(max(dot(reflect(normalize(vec3(.8, -.1, .5)), tileScreenNormal), viewDir), 0.0), 20.0);
      color += metal * vec3(1.0);
      color += sideLight * vec3(.55, .67, .92);
      float tileFlash = pow(max(dot(reflection, normalize(vec3(.25, .48, .84))), 0.0), 80.0);
      color += tileFlash * mix(vec3(.8, .92, 1.0), vec3(1.0), tileVariation);
      // Mantiene cada faceta bien definida incluso cuando una zona amplia
      // refleja una parte uniforme del entorno.
      float tileContrast = mix(.7, 1.32, smoothstep(.08, .92, tileVariation));
      float crispFacet = mix(.035, .13, secondVariation) * (1.0 - seam);
      color *= mix(.86, 1.25, z) * tileContrast;
      color += crispFacet * mix(vec3(.42, .48, .72), vec3(.72, .28, .9), tileVariation);
      color = mix(color, vec3(.2, .21, .27), seam * .82);
      color += pow(1.0 - z, 3.0) * vec3(.17, .19, .28);

      float edge = 1.0 - smoothstep(.965, 1.0, radius);
      gl_FragColor = vec4(color, edge);
    }
  `

  const compile = (type, source) => {
    const shader = gl.createShader(type)
    gl.shaderSource(shader, source)
    gl.compileShader(shader)
    return shader
  }

  const program = gl.createProgram()
  gl.attachShader(program, compile(gl.VERTEX_SHADER, vertexSource))
  gl.attachShader(program, compile(gl.FRAGMENT_SHADER, fragmentSource))
  gl.linkProgram(program)

  if (gl.getProgramParameter(program, gl.LINK_STATUS)) {
    const buffer = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer)
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]), gl.STATIC_DRAW)
    const position = gl.getAttribLocation(program, 'a_position')
    const rotation = gl.getUniformLocation(program, 'u_rotation')
    const pointer = gl.getUniformLocation(program, 'u_pointer')
    const header = document.querySelector('.site-header')
    const headerReflections = document.querySelector('.header-reflections')
    const context = headerReflections?.getContext('2d')
    const reflectionParticles = Array.from({ length: 88 }, (_, index) => {
      const seed = index * 12.9898
      return {
        x: .03 + ((Math.sin(seed) + 1) / 2) * .94,
        y: .1 + ((Math.sin(seed * 1.43) + 1) / 2) * .7,
        phase: ((Math.sin(seed * 1.73) + 1) / 2) * Math.PI * 2,
        drift: .35 + ((Math.sin(seed * 1.91) + 1) / 2) * .65,
        size: .45 + ((Math.sin(seed * 2.31) + 1) / 2) * 1.15,
        alpha: .18 + ((Math.sin(seed * 3.17) + 1) / 2) * .34,
        hue: ((Math.sin(seed * 4.19) + 1) / 2)
      }
    })
    // Reuse each particle's light profile; position and radius are transforms.
    // This preserves the radial falloff without allocating 88 gradients per frame.
    if (context) {
      for (const particle of reflectionParticles) {
        const color = particle.hue > .66 ? '255, 225, 186' : particle.hue > .33 ? '188, 215, 255' : '218, 191, 255'
        const gradient = context.createRadialGradient(0, 0, 0, 0, 0, 1)
        gradient.addColorStop(0, `rgba(${color}, ${Math.min(.68, particle.alpha * 1.22)})`)
        gradient.addColorStop(.46, `rgba(${color}, ${particle.alpha * .72})`)
        gradient.addColorStop(1, `rgba(${color}, 0)`)
        particle.gradient = gradient
      }
    }
    const pointerTarget = { x: 0, y: 0 }
    const pointerCurrent = { x: 0, y: 0 }
    const headerPointerTarget = { x: 0, y: 0 }
    const headerPointerCurrent = { x: 0, y: 0 }
    let frame = 0
    let geometryDirty = true
    let bounds
    let width = 0
    let height = 0
    let pixelRatio = 1
    let pointerPosition
    let lastReflectionX
    let lastReflectionY

    // One render per display frame, and no animation work once the cursor settles.
    const scheduleDraw = () => {
      if (!frame && !document.hidden) frame = requestAnimationFrame(draw)
    }
    const invalidateGeometry = () => {
      geometryDirty = true
      scheduleDraw()
    }
    const easePointer = (current, target, factor) => {
      for (const axis of ['x', 'y']) {
        const delta = target[axis] - current[axis]
        current[axis] = Math.abs(delta) < .0001 ? target[axis] : current[axis] + delta * factor
      }
      return current.x !== target.x || current.y !== target.y
    }

    gl.useProgram(program)
    gl.enableVertexAttribArray(position)
    gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0)
    header.style.setProperty('--reflection-angle', '90deg')

    const draw = () => {
      frame = 0
      // Read layout together, only after a resize (the ball is fixed on scroll).
      if (geometryDirty) {
        pixelRatio = Math.min(window.devicePixelRatio || 1, 2)
        bounds = canvas.getBoundingClientRect()
        width = header.clientWidth
        height = header.clientHeight
        geometryDirty = false
      }
      if (pointerPosition) {
        const screenX = Math.max(0, Math.min(1, pointerPosition.x / window.innerWidth))
        const screenY = Math.max(0, Math.min(1, pointerPosition.y / window.innerHeight))
        headerPointerTarget.x = (pointerPosition.x / window.innerWidth) * 2 - 1
        headerPointerTarget.y = 1 - (pointerPosition.y / window.innerHeight) * 2
        const visibleLeft = Math.max(0, bounds.left)
        const visibleRight = Math.min(window.innerWidth, bounds.right)
        const visibleTop = Math.max(0, bounds.top)
        const visibleBottom = Math.min(window.innerHeight, bounds.bottom)
        const projectedX = visibleLeft + screenX * Math.max(0, visibleRight - visibleLeft)
        const projectedY = visibleTop + screenY * Math.max(0, visibleBottom - visibleTop)
        pointerTarget.x = ((projectedX - bounds.left) / bounds.width) * 2 - 1
        pointerTarget.y = 1 - ((projectedY - bounds.top) / bounds.height) * 2
      }
      const size = Math.round(bounds.width * pixelRatio)
      if (canvas.width !== size || canvas.height !== size) {
        canvas.width = size
        canvas.height = size
        gl.viewport(0, 0, size, size)
      }
      const rotationTravel = window.scrollY * .002
      const rotationValue = rotationTravel % (Math.PI * 2)
      gl.uniform1f(rotation, rotationValue)
      const ballMoving = easePointer(pointerCurrent, pointerTarget, .14)
      const headerMoving = easePointer(headerPointerCurrent, headerPointerTarget, .12)
      gl.uniform2f(pointer, pointerCurrent.x, pointerCurrent.y)
      if (header) {
        const reflectionX = 50 + headerPointerCurrent.x * 8
        const reflectionY = 42 + headerPointerCurrent.y * 17
        if (reflectionX !== lastReflectionX) header.style.setProperty('--reflection-x', `${reflectionX}%`)
        if (reflectionY !== lastReflectionY) header.style.setProperty('--reflection-y', `${reflectionY}%`)
        lastReflectionX = reflectionX
        lastReflectionY = reflectionY
      }
      if (context) {
        if (headerReflections.width !== Math.round(width * pixelRatio) || headerReflections.height !== Math.round(height * pixelRatio)) {
          headerReflections.width = Math.round(width * pixelRatio)
          headerReflections.height = Math.round(height * pixelRatio)
        }
        context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0)
        context.clearRect(0, 0, width, height)
        const wallShiftX = headerPointerCurrent.x * .045
        const wallShiftY = headerPointerCurrent.y * .08
        reflectionParticles.forEach((particle) => {
          // La pared está frente al espectador: los reflejos cruzan todo el
          // plano horizontalmente y desaparecen al salir por el borde.
          const travel = particle.x + rotationTravel * (.105 + particle.drift * .045) + wallShiftX
          const wrappedX = ((travel % 1) + 1) % 1
          const shimmer = rotationTravel * particle.drift + particle.phase
          const x = width * wrappedX
          const y = height * (particle.y + wallShiftY + Math.sin(shimmer) * .018)
          const pointRadius = Math.max(.85, particle.size * 1.1825 * (.78 + Math.sin(shimmer * 1.6) * .18)) * 3
          const softRadius = pointRadius * 1.85
          context.setTransform(pixelRatio * softRadius, 0, 0, pixelRatio * softRadius, x * pixelRatio, y * pixelRatio)
          context.fillStyle = particle.gradient
          context.beginPath()
          context.arc(0, 0, 1, 0, Math.PI * 2)
          context.fill()
        })
      }
      gl.drawArrays(gl.TRIANGLES, 0, 6)
      if (ballMoving || headerMoving) scheduleDraw()
    }

    window.addEventListener('scroll', scheduleDraw, { passive: true })
    window.addEventListener('resize', invalidateGeometry)
    const resizeObserver = new ResizeObserver(invalidateGeometry)
    resizeObserver.observe(canvas)
    resizeObserver.observe(header)
    window.addEventListener('pointermove', (event) => {
      pointerPosition = { x: event.clientX, y: event.clientY }
      scheduleDraw()
    }, { passive: true })
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        cancelAnimationFrame(frame)
        frame = 0
      } else invalidateGeometry()
    })
    scheduleDraw()
  }
}
