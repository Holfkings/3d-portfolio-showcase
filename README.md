# 3D Artist Portfolio — Web Showcase

A single-page static website for a 3D artist/animator portfolio (vanilla HTML/CSS/JS, no frameworks). It serves as an example of a dark, premium web site with light interactivity and responsive design.

---

## Stack

- Semantic HTML5
- CSS3 (custom properties, grid, flex, animations, media queries)
- Vanilla JavaScript (ES6): particle canvas, falling stars canvas, modal system, project filtering, scroll-based active navigation, scroll reveal
- Google Fonts: Space Grotesk, Sora, Fraunces
- Placeholder images: picsum.photos (replace with real renders)

---

## Structure

```
/
  index.html          main page
  css/styles.css      all styling
  js/main.js          project data + interactivity
  README.md
```

---

## What the page includes

- Full-screen hero with interactive particle canvas + overlay + CTAs
- Showreel modal (YouTube iframe with autoplay mute)
- Project grid with 6 filters (All / Character / Environment / Product / Motion / Personal)
- Project detail modal: hero, year, client, software chips with SVG icons, roles, blocks for Overview / Concept / WIP (wireframe/clay/lighting test) / Final renders gallery / Turntable video / Breakdown video
- About: avatar with animated ring, bio, software bars, hardware specs, 6-step process timeline, "currently exploring", availability badges
- Resources: 3 cards (Free 3D Models / Tutorial Links / Blog)
- Contact: email, socials (ArtStation/Behance/Instagram/Discord), commission status, rate sheet button (generates .txt)
- Global background with falling stars canvas (twinkle, gold+blue-white)
- Sticky nav with blur on scroll, active section highlight, hamburger menu on mobile

---

## Design

- Dark theme #0c0c0c, gold accent #e8a849
- Typography: Space Grotesk (display), Sora (body), Fraunces (serif)
- Hover states on cards, buttons, chips, process cards
- Animations: fadeUp on hero, ring spin on avatar, scroll reveal on sections, falling stars on background

---

## Responsive

Yes, mobile-compatible. Media queries at 900px and 540px:

- Nav becomes hamburger
- About layout (avatar + text) stacks
- About columns (Software/Hardware) stack
- Contact stacks to one column
- Project grid goes to 1 column
- Process timeline adapts: no side line on tablet, compact numbers and cards on small phone, title and description reorder for better readability on narrow screens
- Modals have adjusted padding and height

---

## To customize

- Change name/title/bio: edit text in index.html and strings in js/main.js
- Projects: `projects` array in js/main.js — each entry has id, title, category, filter, year, client, thumb, hoverGif, software, roles, hero, content (HTML string with blocks)
- Images: replace picsum.photos URLs with real renders for each project
- Showreel: change the iframe src in index.html to the real Vimeo/YouTube embed
- Socials and email: edit hrefs in Contact and footer
- Rate sheet: edit the Blob in the rateSheetBtn listener

---

## How to view

**Option 1 — direct file:**
  Open index.html in the browser (double-click from file explorer).
  Note: some browsers restrict autoplay on file://, for the showreel it's better to use localhost.

**Option 2 — local server:**
  python3 -m http.server 8766
  Open http://localhost:8766/index.html

---

## Status

Showcase/portfolio version. Data and media are placeholders, the structure, interactivity, and design are complete.
