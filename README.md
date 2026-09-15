# 3D Artist Portfolio — Web Showcase

Portfolio de un artista 3D/animator, construido como página estática de una sola vez (vanilla HTML/CSS/JS, sin frameworks). Sirve como ejemplo de site web oscuro, premium, con interactividad ligera y diseño responsive.

## Stack
- HTML5 semántico
- CSS3 (custom properties, grid, flex, animations, media queries)
- JavaScript vanilla (ES6): canvas de partículas, canvas de estrellas cayendo, sistema de modales, filtrado de proyectos, navegación activa por scroll, scroll reveal
- Google Fonts: Space Grotesk, Sora, Fraunces
- Imágenes de placeholder: picsum.photos (reemplazar por renders reales)

## Estructura
```
/
  index.html          vuelta principal
  css/styles.css      todo el estilo
  js/main.js          datos de proyectos + interactividad
  README.md
```

## Qué incluye la página
- Hero a pantalla completa con canvas interactivo de partículas + overlay + CTAs
- Showreel modal (iframe de YouTube con autoplay mute)
- Grid de proyectos con 6 filtros (All / Character / Environment / Product / Motion / Personal)
- Modal de detalle de proyecto: hero, año, cliente, software chips con iconos SVG, roles, bloques de Overview / Concept / WIP (wireframe/clay/lighting test) / Final renders gallery / Turntable video / Breakdown video
- About: avatar con anillo animado, bio, barras de software, specs de hardware, timeline de proceso de 6 pasos, "currently exploring", badges de disponibilidad
- Resources: 3 tarjetas (Free 3D Models / Tutorial Links / Blog)
- Contact: email, redes (ArtStation/Behance/Instagram/Discord), estado de comisión, botón de rate sheet (genera .txt)
- Fondo global con canvas de estrellas cayendo (parpadeo, dorado+azul-blanco)
- Nav sticky con blur al hacer scroll, highlight de sección activa, menú hamburguesa en móvil

## Diseño
- Tema oscuro #0c0c0c, acento dorado #e8a849
- Tipografía: Space Grotesk (display), Sora (body), Fraunces (serif)
- Hover states en tarjetas, botones, chips, tarjetas de proceso
- Animaciones: fadeUp en hero, ring spin en avatar, scroll reveal en secciones, estrellas cayendo en background

## Responsive
Sí, compatible con celular. Hay media queries en 900px y 540px:
- Nav se convierte en hamburguesa
- Layout de About (avatar + texto) se apila
- About columns (Software/Hardware) se apilan
- Contact se apila a una columna
- Grid de proyectos pasa a 1 columna
- Timeline de proceso se adapta: sin línea lateral en tablet, números y tarjetas compactos en celular chico, el título y descripción se reordenan para mejor legibilidad en pantallas estrechas
- Modales tienen padding y altura ajustada

## Para personalizar
- Cambiar nombre/título/bio: editar texto en index.html y strings en js/main.js
- Proyectos: array `projects` en js/main.js — cada entrada tiene id, title, category, filter, year, client, thumb, hoverGif, software, roles, hero, content (HTML string con bloques)
- Imágenes: reemplazar URLs picsum.photos por renders reales de cada proyecto
- Showreel: cambiar el src del iframe en index.html por el embed real de Vimeo/YouTube
- Redes y email: editar hrefs en Contact y footer
- Rate sheet: editar el Blob en el listener de rateSheetBtn

## Cómo verlo
Opción 1 — archivo directo:
  Abrir index.html en el navegador (doble clic desde el explorador).
  Nota: algunos navegadores restringen autoplay en file://, para el showreelSmooth mejor usar localhost.

Opción 2 — servidor local:
  python3 -m http.server 8766
  Abrir http://localhost:8766/index.html

## Estado
Versión showcase/portafolio. Los datos y media son placeholder, la estructura, interactividad y diseño están completos.
