import './style.css'

document.querySelector('#app').innerHTML = `
  <a class="skip-link" href="#contenido">Saltar al contenido</a>
  <div class="disco-ball" aria-hidden="true">
    <canvas id="disco-ball-canvas"></canvas>
    <span class="disco-ball__chain"></span>
  </div>
  <header class="site-header">
    <a class="brand" href="#inicio" aria-label="Blissline, inicio">
      <img src="/images/blissline-logo.png" alt="Blissline">
    </a>
    <nav aria-label="Navegación principal">
      <a href="#show">El show</a>
      <a href="#repertorio">Repertorio</a>
      <a href="#eventos">Eventos</a>
      <a href="#contacto">Contacto</a>
    </nav>
  </header>

  <main id="contenido">
    <section class="hero-section" id="inicio">
      <p class="eyebrow">Música en directo</p>
      <h1>Música atemporal.<br> Energía en vivo.</h1>
      <p class="intro">Funk, disco y house para bodas, eventos privados y festivales.</p>
      <a class="button" href="#contacto">Contactar con Blissline</a>
      <figure class="hero-photo">
        <img src="/images/blissline-group-dossier.webp" alt="Los cuatro integrantes de Blissline">
      </figure>
    </section>

    <section class="content-section" id="show">
      <p class="eyebrow">Más que música en vivo</p>
      <h2>Un sonido que todos conocen</h2>
      <p>Canciones icónicas, músicos en vivo y un groove irresistible: una experiencia para conectar generaciones, culturas y nacionalidades.</p>
      <ul class="feature-list">
        <li><strong>Atemporal</strong><span>Canciones que nunca se olvidan.</span></li>
        <li><strong>Internacional</strong><span>Música que cruza idiomas y culturas.</span></li>
        <li><strong>En vivo</strong><span>Músicos reales, interacción real, energía real.</span></li>
        <li><strong>Versátil</strong><span>Del cóctel elegante a una pista de baile llena.</span></li>
      </ul>
    </section>

    <section class="content-section" id="integrantes">
      <p class="eyebrow">El grupo</p>
      <h2>Cuatro músicos, un mismo groove</h2>
      <div class="members">
        <article>
          <div class="member-heading"><h3>Ada Nasiadka</h3><p class="member-role">Voz</p></div>
          <div class="member-photo"><img src="/images/ada.png" alt="Ada Nasiadka cantando"></div>
          <p class="member-description">Ada pone voz y carácter a cada canción, conectando con el público desde la primera nota.</p>
        </article>
        <article>
          <div class="member-heading"><h3>Luis Albarrán</h3><p class="member-role">Bajo</p></div>
          <div class="member-photo"><img src="/images/luis.png" alt="Luis Albarrán tocando el bajo"></div>
          <p class="member-description">El groove de Luis sostiene la pista con elegancia, precisión y una energía imposible de quedarse quieto.</p>
        </article>
        <article>
          <div class="member-heading"><h3>Tino Bonet</h3><p class="member-role">Saxofón</p></div>
          <div class="member-photo"><img src="/images/tino.png" alt="Tino Bonet tocando el saxofón"></div>
          <p class="member-description">Tino aporta melodías brillantes y ese toque de soul que convierte cada directo en algo especial.</p>
        </article>
        <article>
          <div class="member-heading"><h3>Mauro Magarelli</h3><p class="member-role">Percusión</p></div>
          <div class="member-photo"><img src="/images/mauro.png" alt="Mauro Magarelli tocando las congas"></div>
          <p class="member-description">Mauro enciende el ritmo con sus manos y transforma cualquier espacio en una celebración.</p>
        </article>
      </div>
    </section>

    <section class="content-section" id="repertorio">
      <p class="eyebrow">El sonido</p>
      <h2>Ya conoces las canciones. Ahora vívelas en directo.</h2>
      <p>Desde clásicos atemporales del disco y el funk hasta la energía del house contemporáneo.</p>
      <div class="actions">
        <a class="button button-secondary" href="https://open.spotify.com/playlist/4eXiOclwUECFepTtaUKULV" target="_blank" rel="noreferrer">Ver repertorio en Spotify</a>
        <a class="button button-secondary" href="https://www.youtube.com/playlist?list=PLJSZpgz-EJ58" target="_blank" rel="noreferrer">Ver vídeos en directo</a>
      </div>
    </section>

    <section class="content-section" id="eventos">
      <p class="eyebrow">Para cada celebración</p>
      <h2>Los grandes momentos se recuerdan por cómo suenan.</h2>
      <ul class="event-list">
        <li>Bodas</li>
        <li>Eventos privados y corporativos</li>
        <li>Festivales</li>
      </ul>
    </section>

    <section class="contact-section" id="contacto">
      <p class="eyebrow">Contacto</p>
      <h2>Hablemos de tu evento</h2>
      <p>Cuéntanos qué tienes en mente y crearemos el sonido de la noche.</p>
      <div class="contact-links">
        <a href="https://www.instagram.com/blissline.es/" target="_blank" rel="noreferrer">Instagram: @blissline.es</a>
        <a href="mailto:blissline.es@gmail.com">blissline.es@gmail.com</a>
        <a href="https://wa.me/34611619440" target="_blank" rel="noreferrer">WhatsApp: +34 611 61 94 40</a>
      </div>
    </section>
  </main>

  <footer class="site-footer">© ${new Date().getFullYear()} Blissline</footer>
`

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
      vec3 coolTint = mix(vec3(.36, .52, 1.0), vec3(.72, .18, 1.0), smoothstep(.12, .72, tileVariation));
      vec3 facetTint = mix(coolTint, vec3(1.0, .72, .5), smoothstep(.78, 1.0, secondVariation));
      color += cursorPool * facetSparkle * facetTint * .9;
      color += cursorCore * facetSparkle * mix(vec3(.88, .62, 1.0), vec3(1.0, .94, .78), secondVariation) * 1.65;
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
    const pointerTarget = { x: 0, y: 0 }
    const pointerCurrent = { x: 0, y: 0 }

    const draw = () => {
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 2)
      const size = Math.round(canvas.clientWidth * pixelRatio)
      if (canvas.width !== size || canvas.height !== size) {
        canvas.width = size
        canvas.height = size
      }
      gl.viewport(0, 0, canvas.width, canvas.height)
      gl.useProgram(program)
      gl.enableVertexAttribArray(position)
      gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0)
      gl.uniform1f(rotation, (window.scrollY * .002) % (Math.PI * 2))
      pointerCurrent.x += (pointerTarget.x - pointerCurrent.x) * .14
      pointerCurrent.y += (pointerTarget.y - pointerCurrent.y) * .14
      gl.uniform2f(pointer, pointerCurrent.x, pointerCurrent.y)
      gl.drawArrays(gl.TRIANGLES, 0, 6)
    }

    window.addEventListener('scroll', draw, { passive: true })
    window.addEventListener('resize', draw)
    window.addEventListener('pointermove', (event) => {
      const bounds = canvas.getBoundingClientRect()
      const visibleLeft = Math.max(0, bounds.left)
      const visibleRight = Math.min(window.innerWidth, bounds.right)
      const visibleTop = Math.max(0, bounds.top)
      const visibleBottom = Math.min(window.innerHeight, bounds.bottom)
      const screenX = Math.max(0, Math.min(1, event.clientX / window.innerWidth))
      const screenY = Math.max(0, Math.min(1, event.clientY / window.innerHeight))

      // Proyecta toda la pantalla solamente sobre la porción visible del canvas.
      // La coordenada Y de WebGL crece desde abajo, al contrario que la del DOM.
      const projectedX = visibleLeft + screenX * Math.max(0, visibleRight - visibleLeft)
      const projectedY = visibleTop + screenY * Math.max(0, visibleBottom - visibleTop)
      pointerTarget.x = ((projectedX - bounds.left) / bounds.width) * 2.0 - 1.0
      pointerTarget.y = 1.0 - ((projectedY - bounds.top) / bounds.height) * 2.0
      draw()
    }, { passive: true })
    const animatePointer = () => {
      draw()
      requestAnimationFrame(animatePointer)
    }
    requestAnimationFrame(animatePointer)
    draw()
  }
}
