<div align="center">

# 🎨 3D Artist Portfolio — Web Showcase

### Dark theme portfolio · HTML/CSS/JS · Interactive · Responsive

<p align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript">
  <img src="https://img.shields.io/badge/Canvas-Interactive-F7DF1E?style=for-the-badge&logo=html5&logoColor=black" alt="Canvas">
  <img src="https://img.shields.io/badge/Responsive-Yes-grey?style=for-the-badge&logo=mobile&logoColor=white" alt="Responsive">
  <img src="https://img.shields.io/badge/No_Framework-Pure-grey?style=for-the-badge&logo=clean&logoColor=white" alt="No Framework">
</p>

</div>

---

## ✨ What It Is

A single-page static website showcasing a 3D artist/animator portfolio. Built with vanilla HTML/CSS/JS — no frameworks. Dark premium theme with light interactivity and fully responsive design.

**A showcase of what's possible with pure web technologies.**

---

## 🎯 Features

| Section | Description |
|---------|-------------|
| **Hero** | Full-screen with interactive particle canvas + overlay + CTAs |
| **Showreel modal** | YouTube iframe with autoplay (muted) |
| **Project grid** | 6 filters: All / Character / Environment / Product / Motion / Personal |
| **Project detail modal** | Hero, year, client, software chips (SVG icons), roles, content blocks, render galleries, turntable/breakdown videos |
| **About** | Avatar with animated ring, bio, software bars, hardware specs, 6-step process timeline |
| **Resources** | 3 cards: Free 3D Models / Tutorial Links / Blog |
| **Contact** | Email, socials (ArtStation/Behance/Instagram/Discord), commission status, rate sheet button |
| **Background** | Falling stars canvas (twinkle, gold + blue-white) |

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| **Markup** | HTML5 semantic |
| **Style** | CSS3 (custom properties, grid, flex, animations, media queries) |
| **Interactivity** | Vanilla JavaScript ES6 (canvas, modals, filtering, scroll reveal) |
| **Fonts** | Google Fonts: Space Grotesk, Sora, Fraunces |
| **Media** | picsum.photos placeholders (replace with real renders) |

---

## 📁 Project Structure

```text
3d-portfolio-showcase/
├── index.html          # Main page — all sections
├── css/
│   └── styles.css      # All styling — CSS3 custom properties
├── js/
│   └── main.js         # Project data + all interactivity
└── README.md
```

**Zero dependencies. Zero build tools.**

---

## 🚀 Quick Start

```bash
# Clone
git clone https://github.com/Holfkings/3d-portfolio-showcase.git
cd 3d-portfolio-showcase

# Option A — open directly
# Double-click index.html

# Option B — local server (recommended for autoplay)
python3 -m http.server 8766
# Open http://localhost:8766/index.html
```

---

## 🎨 Design System

| Aspect | Detail |
|--------|--------|
| **Background** | Dark #0c0c0c |
| **Accent** | Gold #e8a849 |
| **Display font** | Space Grotesk |
| **Body font** | Sora |
| **Serif font** | Fraunces |
| **Hover states** | Cards, buttons, chips, process cards |
| **Animations** | fadeUp (hero), ring spin (avatar), scroll reveal, falling stars |

---

## 📱 Responsive

Yes, fully mobile-compatible. Media queries at **900px** and **540px**:

| Breakpoint | Behavior |
|------------|----------|
| **> 900px** | Full layout, horizontal nav |
| **900px** | Nav → hamburger, About stacks, columns stack |
| **540px** | Single column, compact timeline, reordered title/description |

---

## 🔧 Customization

| What to change | Where |
|----------------|-------|
| Name / title / bio | Edit text in `index.html` and `js/main.js` |
| Projects | Edit `projects` array in `js/main.js` |
| Images | Replace picsum URLs with real renders |
| Showreel | Change iframe `src` in `index.html` |
| Socials / email | Edit hrefs in Contact and footer |
| Rate sheet | Edit Blob in `rateSheetBtn` listener |
| Colors | Edit CSS custom properties in `styles.css` |

---

## 📊 Project Data

Projects are defined in `js/main.js` as an array. Each project has:

```javascript
{
  id: 1,
  title: "Project Name",
  category: "Character",
  filter: "Character",
  year: 2024,
  client: "Client Name",
  thumb: "thumbnail.jpg",
  hoverGif: "hover.gif",
  software: ["Blender", "ZBrush", "Substance Painter"],
  roles: ["Modeling", "Texturing", "Lighting"],
  hero: "hero.jpg",
  content: "..." // HTML string with blocks
}
```

---

## 📊 Status

| Metric | Value |
|--------|-------|
| **Lines of code** | ~800 HTML + CSS + JS |
| **Dependencies** | 0 |
| **Build step** | None |
| **Pages** | 1 (single-page) |
| **Media** | Placeholder (replace with real renders) |

---

## 🤝 Contact

| Channel | Link |
|---------|------|
| 🐙 **GitHub** | [@Holfkings](https://github.com/Holfkings) |

---

<div align="center">

**Showcase/portfolio version.** Data and media are placeholders — structure, interactivity, and design are complete.

<p align="center" style="color: #888; font-size: 0.85em; margin-top: 24px;">
  Built with vanilla HTML/CSS/JS · No frameworks · Dark premium theme
</p>

</div>
