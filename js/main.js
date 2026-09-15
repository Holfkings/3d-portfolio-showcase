/* ===== PROJECT DATA ===== */
const projects = [
  {
    id: 'ethereal-guardian',
    title: 'Ethereal Guardian',
    category: 'Character Design',
    filter: 'character',
    year: '2026',
    client: '',
    thumb: 'https://picsum.photos/seed/guardian/800/500',
    hoverGif: 'https://picsum.photos/seed/guardianhover/800/500',
    software: ['Blender','ZBrush','Substance 3D Painter','Unreal Engine 5'],
    roles: ['Modeling','Sculpting','Texturing','Lighting','Rendering'],
    hero: 'https://picsum.photos/seed/guardianhero/1200/675',
    content: `
      <div class="project-block">
        <h3>Overview</h3>
        <p>A full character turnaround for a fantasy RPG — a spectral guardian wreathed in embers and ancient armor. The piece was built for a real-time game pipeline with LODs and PBR textures optimized for Unreal Engine 5.</p>
      </div>
      <div class="project-block">
        <h3>Concept &amp; References</h3>
        <p>The brief called for something that reads as protective yet otherworldly. Reference boards drew from Samurai armor silhouettes, Norse berserker aesthetics, and volumetric fire references.</p>
        <div class="project-images">
          <img src="https://picsum.photos/seed/ref1/400/300" alt="Reference mood board" loading="lazy">
          <img src="https://picsum.photos/seed/ref2/400/300" alt="Silhouette exploration" loading="lazy">
          <img src="https://picsum.photos/seed/ref3/400/300" alt="Color palette study" loading="lazy">
        </div>
      </div>
      <div class="project-block">
        <h3>Work in Progress</h3>
        <div class="project-gallery-grid">
          <div><img src="https://picsum.photos/seed/wireframe1/400/300" alt="Wireframe render" loading="lazy"><p style="font-size:11px;color:var(--text-faint);margin-top:4px">Wireframe</p></div>
          <div><img src="https://picsum.photos/seed/clay1/400/300" alt="Clay render" loading="lazy"><p style="font-size:11px;color:var(--text-faint);margin-top:4px">Clay render</p></div>
          <div><img src="https://picsum.photos/seed/lightingtest1/400/300" alt="Lighting test" loading="lazy"><p style="font-size:11px;color:var(--text-faint);margin-top:4px">Lighting test</p></div>
          <div><img src="https://picsum.photos/seed/texturetest1/400/300" alt="Material test" loading="lazy"><p style="font-size:11px;color:var(--text-faint);margin-top:4px">Material test</p></div>
        </div>
      </div>
      <div class="project-block">
        <h3>Final Renders</h3>
        <p>Multiple angles rendered in Cycles with a warm rim-light setup to emphasize the embers and metallic edges.</p>
        <div class="project-gallery-grid">
          <div><img src="https://picsum.photos/seed/render1a/400/400" alt="Front view" loading="lazy"></div>
          <div><img src="https://picsum.photos/seed/render1b/400/400" alt="Side view" loading="lazy"></div>
          <div><img src="https://picsum.photos/seed/render1c/400/400" alt="Back view" loading="lazy"></div>
          <div><img src="https://picsum.photos/seed/render1d/400/400" alt="Detail shot" loading="lazy"></div>
        </div>
      </div>
      <div class="project-block">
        <h3>Turntable</h3>
        <p>A 15-second turntable showing the full 360° silhouette, armor detail, and emissive ember flow.</p>
        <div class="video-embed-wrap">
          <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0" loading="lazy" allow="autoplay; encrypted-media" allowfullscreen title="Turntable video"></iframe>
        </div>
      </div>
      <div class="project-block">
        <h3>Breakdown</h3>
        <p>A layered breakdown — wireframe over final, material ID pass, lighting pass, and compositing stack.</p>
        <div class="video-embed-wrap">
          <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0" loading="lazy" allow="autoplay; encrypted-media" allowfullscreen title="Breakdown video"></iframe>
        </div>
      </div>
    `
  },
  {
    id: 'neon-cityscape',
    title: 'Neon Cityscape',
    category: 'Environment Art',
    filter: 'environment',
    year: '2026',
    client: '',
    thumb: 'https://picsum.photos/seed/neoncity/800/500',
    hoverGif: 'https://picsum.photos/seed/neoncityhover/800/500',
    software: ['Blender','Houdini','Substance 3D Designer','After Effects'],
    roles: ['Modeling','Environment Design','Lighting','Compositing'],
    hero: 'https://picsum.photos/seed/neoncityhero/1200/675',
    content: `
      <div class="project-block">
        <h3>Overview</h3>
        <p>A rain-soaked futuristic city block at night, rendered with volumetric fog, neon signage, and wet-surface reflections. Built as a shot for a short animation project and later adapted into a still.</p>
      </div>
      <div class="project-block">
        <h3>Concept &amp; References</h3>
        <p>Cyberpunk city references from Blade Runner 2049, Ghost in the Shell, and real night photography from Tokyo and Seoul. The mood board focused on color temperature contrast — cool blues against warm neon magentas and cyans.</p>
        <div class="project-images">
          <img src="https://picsum.photos/seed/refn1/400/300" alt="City reference" loading="lazy">
          <img src="https://picsum.photos/seed/refn2/400/300" alt="Color palette" loading="lazy">
          <img src="https://picsum.photos/seed/refn3/400/300" alt="Composition sketch" loading="lazy">
        </div>
      </div>
      <div class="project-block">
        <h3>Work in Progress</h3>
        <div class="project-gallery-grid">
          <div><img src="https://picsum.photos/seed/wireframen1/400/300" alt="Blockout" loading="lazy"><p style="font-size:11px;color:var(--text-faint);margin-top:4px">Blockout</p></div>
          <div><img src="https://picsum.photos/seed/clayn1/400/300" alt="Clay render" loading="lazy"><p style="font-size:11px;color:var(--text-faint);margin-top:4px">Clay render</p></div>
          <div><img src="https://picsum.photos/seed/lightingtestn1/400/300" alt="Lighting test 1" loading="lazy"><p style="font-size:11px;color:var(--text-faint);margin-top:4px">Lighting test 1</p></div>
          <div><img src="https://picsum.photos/seed/lightingtestn2/400/300" alt="Lighting test 2" loading="lazy"><p style="font-size:11px;color:var(--text-faint);margin-top:4px">Lighting test 2</p></div>
        </div>
      </div>
      <div class="project-block">
        <h3>Final Renders</h3>
        <p>Three camera angles: wide establishing shot, street-level view, and a detail of the storefront signage.</p>
        <div class="project-gallery-grid">
          <div><img src="https://picsum.photos/seed/rendern1/400/400" alt="Wide shot" loading="lazy"></div>
          <div><img src="https://picsum.photos/seed/rendern2/400/400" alt="Street level" loading="lazy"></div>
          <div><img src="https://picsum.photos/seed/rendern3/400/400" alt="Signage detail" loading="lazy"></div>
        </div>
      </div>
      <div class="project-block">
        <h3>Breakdown</h3>
        <p>Lighting pass, volumetric fog pass, reflection pass, and final composite.</p>
        <div class="video-embed-wrap">
          <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0" loading="lazy" allow="autoplay; encrypted-media" allowfullscreen title="Breakdown video"></iframe>
        </div>
      </div>
    `
  },
  {
    id: 'techlens-pro',
    title: 'TechLens Pro',
    category: 'Product Visualization',
    filter: 'product',
    year: '2025',
    client: 'NovaTech Industries',
    thumb: 'https://picsum.photos/seed/techlens/800/500',
    hoverGif: 'https://picsum.photos/seed/techlenshover/800/500',
    software: ['Cinema 4D','Redshift','Substance 3D Painter','Photoshop'],
    roles: ['Modeling','Texturing','Lighting','Rendering','Compositing'],
    hero: 'https://picsum.photos/seed/techlenshero/1200/675',
    content: `
      <div class="project-block">
        <h3>Overview</h3>
        <p>Commercial product visualization for NovaTech's flagship smart-camera — TechLens Pro. The campaign required photorealistic studio renders with clean lighting, product feature callouts, and a set of lifestyle hero shots.</p>
      </div>
      <div class="project-block">
        <h3>Concept &amp; References</h3>
        <p>The client provided CAD data and brand guidelines. I supplemented with photography references for studio lighting setups and material behavior — brushed aluminum, glass lens elements, and soft-touch rubber accents.</p>
        <div class="project-images">
          <img src="https://picsum.photos/seed/refp1/400/300" alt="Product reference" loading="lazy">
          <img src="https://picsum.photos/seed/refp2/400/300" alt="Lighting reference" loading="lazy">
        </div>
      </div>
      <div class="project-block">
        <h3>Work in Progress</h3>
        <div class="project-gallery-grid">
          <div><img src="https://picsum.photos/seed/wireframep1/400/300" alt="CAD blockout" loading="lazy"><p style="font-size:11px;color:var(--text-faint);margin-top:4px">CAD blockout</p></div>
          <div><img src="https://picsum.photos/seed/clayp1/400/300" alt="Clay render" loading="lazy"><p style="font-size:11px;color:var(--text-faint);margin-top:4px">Clay render</p></div>
          <div><img src="https://picsum.photos/seed/lightingtestp1/400/300" alt="Lighting test" loading="lazy"><p style="font-size:11px;color:var(--text-faint);margin-top:4px">Lighting test</p></div>
          <div><img src="https://picsum.photos/seed/texturetestp1/400/300" alt="Material setup" loading="lazy"><p style="font-size:11px;color:var(--text-faint);margin-top:4px">Material setup</p></div>
        </div>
      </div>
      <div class="project-block">
        <h3>Final Renders</h3>
        <p>Hero product shot, three-angle turntable, and two lifestyle inserts. All rendered in Redshift with a three-point studio setup plus rim accents.</p>
        <div class="project-gallery-grid">
          <div><img src="https://picsum.photos/seed/renderp1/400/400" alt="Hero shot" loading="lazy"></div>
          <div><img src="https://picsum.photos/seed/renderp2/400/400" alt="Three-angle" loading="lazy"></div>
          <div><img src="https://picsum.photos/seed/renderp3/400/400" alt="Lifestyle 1" loading="lazy"></div>
          <div><img src="https://picsum.photos/seed/renderp4/400/400" alt="Lifestyle 2" loading="lazy"></div>
        </div>
      </div>
      <div class="project-block">
        <h3>Turntable</h3>
        <p>A 10-second smooth turntable used in the product launch video, with a slow camera push-in.</p>
        <div class="video-embed-wrap">
          <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0" loading="lazy" allow="autoplay; encrypted-media" allowfullscreen title="Turntable video"></iframe>
        </div>
      </div>
    `
  },
  {
    id: 'fluid-dreams',
    title: 'Fluid Dreams',
    category: 'Motion Graphics',
    filter: 'motion',
    year: '2025',
    client: '',
    thumb: 'https://picsum.photos/seed/fluid/800/500',
    hoverGif: 'https://picsum.photos/seed/fluidhover/800/500',
    software: ['Cinema 4D','Redshift','After Effects','Trapcode Suite'],
    roles: ['Animation','Motion Design','Lighting','Rendering','Compositing'],
    hero: 'https://picsum.photos/seed/fluidhero/1200/675',
    content: `
      <div class="project-block">
        <h3>Overview</h3>
        <p>A 30-second motion piece exploring fluid simulation and abstract form — created as a personal experiment that turned into a reel piece. Featured in a motion design showcase and a few design blogs.</p>
      </div>
      <div class="project-block">
        <h3>Concept &amp; References</h3>
        <p>Inspired by ink-in-water experiments, generative art, and abstract expressionism. Reference gathering focused on fluid dynamics references, color transitions, and slow-motion abstract footage.</p>
        <div class="project-images">
          <img src="https://picsum.photos/seed/refm1/400/300" alt="Fluid reference 1" loading="lazy">
          <img src="https://picsum.photos/seed/refm2/400/300" alt="Fluid reference 2" loading="lazy">
          <img src="https://picsum.photos/seed/refm3/400/300" alt="Mood board" loading="lazy">
        </div>
      </div>
      <div class="project-block">
        <h3>Work in Progress</h3>
        <div class="project-gallery-grid">
          <div><img src="https://picsum.photos/seed/wireframem1/400/300" alt="Sim test 1" loading="lazy"><p style="font-size:11px;color:var(--text-faint);margin-top:4px">Sim test 1</p></div>
          <div><img src="https://picsum.photos/seed/claym1/400/300" alt="Sim test 2" loading="lazy"><p style="font-size:11px;color:var(--text-faint);margin-top:4px">Sim test 2</p></div>
          <div><img src="https://picsum.photos/seed/lightingtestm1/400/300" alt="Lighting test" loading="lazy"><p style="font-size:11px;color:var(--text-faint);margin-top:4px">Lighting test</p></div>
        </div>
      </div>
      <div class="project-block">
        <h3>Final Frames</h3>
        <p>Selected frames from the final render, showing the color progression and fluid forms.</p>
        <div class="project-gallery-grid">
          <div><img src="https://picsum.photos/seed/renderm1/400/400" alt="Frame 1" loading="lazy"></div>
          <div><img src="https://picsum.photos/seed/renderm2/400/400" alt="Frame 2" loading="lazy"></div>
          <div><img src="https://picsum.photos/seed/renderm3/400/400" alt="Frame 3" loading="lazy"></div>
          <div><img src="https://picsum.photos/seed/renderm4/400/400" alt="Frame 4" loading="lazy"></div>
        </div>
      </div>
      <div class="project-block">
        <h3>Full Reel Clip</h3>
        <p>The complete 30-second piece with synth-wave sound design.</p>
        <div class="video-embed-wrap">
          <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0" loading="lazy" allow="autoplay; encrypted-media" allowfullscreen title="Motion piece"></iframe>
        </div>
      </div>
    `
  },
  {
    id: 'mythical-forest',
    title: 'Mythical Forest',
    category: 'Personal Project',
    filter: 'personal',
    year: '2026',
    client: '',
    thumb: 'https://picsum.photos/seed/mythforest/800/500',
    hoverGif: 'https://picsum.photos/seed/mythforesthover/800/500',
    software: ['Blender','Gaea','Substance 3D Designer','Quixel Mixer'],
    roles: ['Environment Art','Terrain sculpting','Vegetation','Lighting','Rendering'],
    hero: 'https://picsum.photos/seed/mythforesthero/1200/675',
    content: `
      <div class="project-block">
        <h3>Overview</h3>
        <p>A personal passion project — a bioluminescent forest at twilight. Built to push my environment workflow: procedural terrain in Gaea, hand-sculpted details in Blender, and Quixel megascans for vegetation and rock assets.</p>
      </div>
      <div class="project-block">
        <h3>Concept &amp; References</h3>
        <p>References from temperate rainforests in the Pacific Northwest, bioluminescent fungi photography, and fantasy concept art. The goal was realism with a magical twist — believable lighting and scale, but with an impossible glow.</p>
        <div class="project-images">
          <img src="https://picsum.photos/seed/reff1/400/300" alt="Forest reference" loading="lazy">
          <img src="https://picsum.photos/seed/reff2/400/300" alt="Bioluminescence ref" loading="lazy">
          <img src="https://picsum.photos/seed/reff3/400/300" alt="Composition study" loading="lazy">
        </div>
      </div>
      <div class="project-block">
        <h3>Work in Progress</h3>
        <div class="project-gallery-grid">
          <div><img src="https://picsum.photos/seed/wireframef1/400/300" alt="Terrain blockout" loading="lazy"><p style="font-size:11px;color:var(--text-faint);margin-top:4px">Terrain blockout</p></div>
          <div><img src="https://picsum.photos/seed/clayf1/400/300" alt="Clay terrain" loading="lazy"><p style="font-size:11px;color:var(--text-faint);margin-top:4px">Clay terrain</p></div>
          <div><img src="https://picsum.photos/seed/lightingtestf1/400/300" alt="Lighting test" loading="lazy"><p style="font-size:11px;color:var(--text-faint);margin-top:4px">Lighting test</p></div>
          <div><img src="https://picsum.photos/seed/lightingtestf2/400/300" alt="Bioluminescence test" loading="lazy"><p style="font-size:11px;color:var(--text-faint);margin-top:4px">Bioluminescence test</p></div>
        </div>
      </div>
      <div class="project-block">
        <h3>Final Renders</h3>
        <p>Three compositions — wide establishing shot, mid-level tree detail, and a ground-level view through the ferns. All rendered in Cycles with volumetrics and emission shaders for the glowing elements.</p>
        <div class="project-gallery-grid">
          <div><img src="https://picsum.photos/seed/renderf1/400/400" alt="Wide shot" loading="lazy"></div>
          <div><img src="https://picsum.photos/seed/renderf2/400/400" alt="Tree detail" loading="lazy"></div>
          <div><img src="https://picsum.photos/seed/renderf3/400/400" alt="Ground level" loading="lazy"></div>
        </div>
      </div>
      <div class="project-block">
        <h3>Turntable</h3>
        <p>A slow virtual dolly through the forest, pushing past trees into the glowing clearing.</p>
        <div class="video-embed-wrap">
          <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0" loading="lazy" allow="autoplay; encrypted-media" allowfullscreen title="Turntable video"></iframe>
        </div>
      </div>
    `
  },
  {
    id: 'steel-sentinel',
    title: 'Steel Sentinel',
    category: 'Character Design',
    filter: 'character',
    year: '2025',
    client: 'Ironforge Studios',
    thumb: 'https://picsum.photos/seed/steel/800/500',
    hoverGif: 'https://picsum.photos/seed/steelhover/800/500',
    software: ['Maya','ZBrush','Arnold','Substance 3D Painter'],
    roles: ['Modeling','Texturing','Rigging','Lighting','Rendering'],
    hero: 'https://picsum.photos/seed/steelhero/1200/675',
    content: `
      <div class="project-block">
        <h3>Overview</h3>
        <p>A mecha-character created for Ironforge Studios' upcoming game. Full turnaround, PBR texture sets, and a basic rig for pose exploration. Built to hero-asset quality with clean topology for subdivision.</p>
      </div>
      <div class="project-block">
        <h3>Work in Progress</h3>
        <div class="project-gallery-grid">
          <div><img src="https://picsum.photos/seed/wireframes1/400/300" alt="Wireframe" loading="lazy"><p style="font-size:11px;color:var(--text-faint);margin-top:4px">Wireframe</p></div>
          <div><img src="https://picsum.photos/seed/clays1/400/300" alt="Clay render" loading="lazy"><p style="font-size:11px;color:var(--text-faint);margin-top:4px">Clay render</p></div>
          <div><img src="https://picsum.photos/seed/lightingtests1/400/300" alt="Lighting test" loading="lazy"><p style="font-size:11px;color:var(--text-faint);margin-top:4px">Lighting test</p></div>
        </div>
      </div>
      <div class="project-block">
        <h3>Final Renders</h3>
        <div class="project-gallery-grid">
          <div><img src="https://picsum.photos/seed/renders1/400/400" alt="Front view" loading="lazy"></div>
          <div><img src="https://picsum.photos/seed/renders2/400/400" alt="Side view" loading="lazy"></div>
          <div><img src="https://picsum.photos/seed/renders3/400/400" alt="Action pose" loading="lazy"></div>
        </div>
      </div>
      <div class="project-block">
        <h3>Turntable</h3>
        <div class="video-embed-wrap">
          <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0" loading="lazy" allow="autoplay; encrypted-media" allowfullscreen title="Turntable video"></iframe>
        </div>
      </div>
    `
  }
];

/* ===== SOFTWARE ICONS (SVG) ===== */
const swIcons = {
  'Blender': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>`,
  'Maya': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M6 3h12l4 6-10 7L2 9z"/><path d="M4 17v3h16v-3"/></svg>`,
  'Cinema 4D': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M7 10h4M7 14h2"/></svg>`,
  'ZBrush': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2a10 10 0 0 1 10 10c0 5-4 9-10 9S2 17 2 12 7 2 12 2z"/><path d="M9 12l2 2 4-4"/></svg>`,
  'Substance 3D Painter': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2l2 4 4.5 1.5-1.5 4-3.5 1 1 4-3.5 2-3.5-2 1-4-3.5-1-1.5-4L4 6l2-4z"/><path d="M9 13a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"/></svg>`,
  'Unreal Engine 5': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>`,
  'Houdini': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 3l7.5 7.5M21 3l-7.5 7.5M12 22l-7.5-7.5M21 22l-7.5-7.5"/><circle cx="12" cy="12" r="2"/></svg>`,
  'Substance 3D Designer': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>`,
  'After Effects': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M4 8l4 4 6-8"/></svg>`,
  'Photoshop': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z"/><path d="M12 7v7M9 10h6"/></svg>`,
  'Gaea': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 12c0-4.97 4.03-9 9-9s9 4.03 9 9c0 2.38-1.19 4.47-3 5.74V17H8v1.74C5.19 16.47 4 14.38 4 12c0-1.31.28-2.53.78-3.58z"/><path d="M16 12c0-4.97 4.03-9 9-9s1 4.03-1 9"/></svg>`,
  'Quixel Mixer': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>`,
  'Redshift': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="9"/><path d="M12 8v4l3 2"/></svg>`,
  'Arnold': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="9"/><path d="M12 8v4l3 2"/></svg>`,
  'Trapcode Suite': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2l2 4 4.5 1.5-1.5 4-3.5 1 1 4-3.5 2-3.5-2 1-4-3.5-1-1.5-4L4 6l2-4z"/><circle cx="12" cy="12" r="1.5"/></svg>`
};
const swShort = {
  'Substance 3D Painter':'Substance Painter',
  'Substance 3D Designer':'Substance Designer',
  'Unreal Engine 5':'Unreal Engine 5',
  'Trapcode Suite':'Trapcode'
};
function swKey(name){return swShort[name] || name}

/* ===== RENDER PROJECT GRID ===== */
const grid = document.getElementById('projectGrid');

function softwareChips(software){
  return software.map(s => `
    <span class="software-chip" title="${s}">
      ${swIcons[s] || ''}
      ${swKey(s)}
    </span>`).join('');
}

function roleTags(roles){
  return roles.map(r => `<span class="role-tag">${r}</span>`).join('');
}

function buildCard(p){
  return `
    <article class="project-card" data-filter="${p.filter}" data-id="${p.id}" tabindex="0" role="button" aria-label="Open ${p.title}">
      <div class="project-thumb">
        <img src="${p.thumb}" alt="${p.title}" loading="lazy">
        <div class="thumb-overlay"></div>
        <!-- Hover GIF preview (prepared, shows on hover) -->
        <img class="project-hover-gif" src="${p.hoverGif}" alt="" loading="lazy">
        <div class="project-gif-placeholder">Hover for preview</div>
      </div>
      <div class="project-card-body">
        <h3 class="project-card-title">${p.title}</h3>
        <p class="project-card-cat">${p.category}${p.client ? ' · ' + p.client : ''}</p>
      </div>
    </article>
  `;
}

function renderGrid(filter = 'all'){
  grid.innerHTML = projects
    .filter(p => filter === 'all' || p.filter === filter)
    .map(buildCard).join('');
}

renderGrid();

/* ===== FILTER BUTTONS ===== */
const filterBtns = document.querySelectorAll('.filter-btn');
filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderGrid(btn.dataset.filter);
  });
});

/* ===== PROJECT CARDS → MODAL ===== */
grid.addEventListener('click', e => {
  const card = e.target.closest('.project-card');
  if (!card) return;
  openProject(card.dataset.id);
});
grid.addEventListener('keydown', e => {
  const card = e.target.closest('.project-card');
  if (!card) return;
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    openProject(card.dataset.id);
  }
});

function openProject(id){
  const p = projects.find(x => x.id === id);
  if (!p) return;

  document.getElementById('projectHero').innerHTML =
    `<img src="${p.hero}" alt="${p.title}"><div class="hp-overlay"></div>`;
  document.getElementById('pTitle').textContent = p.title;
  document.getElementById('pCategory').textContent = p.category;
  document.getElementById('pYear').textContent = p.year;
  document.getElementById('pClient').textContent = p.client ?
    `Client: ${p.client}` : 'Personal project';
  document.getElementById('pSoftware').innerHTML = softwareChips(p.software);
  document.getElementById('pRoles').innerHTML = roleTags(p.roles);
  document.getElementById('pContent').innerHTML = p.content;

  openModal('projectModal');
}

/* ===== MODAL HELPERS ===== */
const modalOverlays = document.querySelectorAll('.modal-overlay');
function openModal(id){
  const el = document.getElementById(id);
  if (!el) return;
  el.hidden = false;
  // Force reflow for transition
  void el.offsetWidth;
  el.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeModal(id){
  const el = document.getElementById(id);
  if (!el) return;
  el.classList.remove('open');
  setTimeout(() => { el.hidden = true; }, 220);
  document.body.style.overflow = '';
}
document.querySelectorAll('[data-close]').forEach(btn => {
  btn.addEventListener('click', () => {
    const modal = btn.closest('.modal-overlay');
    if (modal) closeModal(modal.id);
  });
});
modalOverlays.forEach(overlay => {
  overlay.addEventListener('click', e => {
    if (e.target === overlay) closeModal(overlay.id);
  });
});
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    modalOverlays.forEach(o => { if (o.classList.contains('open')) closeModal(o.id); });
  }
});

/* ===== SHOWREEL MODAL ===== */
document.getElementById('heroReelBtn').addEventListener('click', () => openModal('reelModal'));

/* ===== NAV ===== */
const nav = document.getElementById('nav');
const navToggle = document.getElementById('navToggle');
const navLinks = document.querySelectorAll('.nav-links a[data-nav]');

// Scroll shadow + active link
function onScroll(){
  nav.classList.toggle('scrolled', window.scrollY > 40);
  // Update active link based on sections
  const scrollPos = window.scrollY + 100;
  let current = '';
  document.querySelectorAll('section[id]').forEach(sec => {
    const top = sec.offsetTop;
    const bottom = top + sec.offsetHeight;
    if (scrollPos >= top && scrollPos < bottom) current = sec.id;
  });
  navLinks.forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === '#' + current);
  });
}
window.addEventListener('scroll', onScroll, { passive: true });
window.addEventListener('resize', onScroll);
onScroll();

navToggle.addEventListener('click', () => {
  navToggle.classList.toggle('open');
  document.querySelector('.nav-links').classList.toggle('open');
});
document.querySelectorAll('.nav-links a').forEach(a => {
  a.addEventListener('click', () => {
    navToggle.classList.remove('open');
    document.querySelector('.nav-links').classList.remove('open');
  });
});

/* ===== SCROLL REVEAL ===== */
const revealEls = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      revealObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
revealEls.forEach(el => revealObserver.observe(el));

/* ===== HERO CANVAS — 3D-ish abstract loop ===== */
(function(){
  const canvas = document.getElementById('heroCanvas');
  const ctx = canvas.getContext('2d');
  let w, h, particles = [];

  function resize(){
    const dpr = window.devicePixelRatio || 1;
    w = canvas.clientWidth;
    h = canvas.clientHeight;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  class Particle {
    constructor(){
      this.reset();
    }
    reset(){
      this.x = Math.random() * w;
      this.y = Math.random() * h;
      this.size = Math.random() * 2 + 1;
      this.speedX = (Math.random() - 0.5) * 0.35;
      this.speedY = (Math.random() - 0.5) * 0.35;
      this.opacity = Math.random() * 0.5 + 0.2;
      this.hue = Math.random() < 0.3 ? 38 : 210; // accent or blue
    }
    update(){
      this.x += this.speedX;
      this.y += this.speedY;
      if (this.x < -10 || this.x > w + 10 || this.y < -10 || this.y > h + 10) this.reset();
    }
    draw(){
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = this.hue === 38
        ? `rgba(232,168,73,${this.opacity})`
        : `rgba(120,160,220,${this.opacity})`;
      ctx.fill();
    }
  }

  function initParticles(count){
    particles = [];
    for (let i = 0; i < count; i++) particles.push(new Particle());
  }

  function drawConnections(){
    for (let i = 0; i < particles.length; i++){
      for (let j = i + 1; j < particles.length; j++){
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120){
          const alpha = (1 - dist / 120) * 0.18;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(232,168,73,${alpha})`;
          ctx.lineWidth = 0.6;
          ctx.stroke();
        }
      }
    }
  }

  function draw(){
    ctx.clearRect(0, 0, w, h);

    // Subtle radial glow in background
    const grd = ctx.createRadialGradient(w * 0.5, h * 0.45, 0, w * 0.5, h * 0.45, w * 0.6);
    grd.addColorStop(0, 'rgba(232,168,73,0.04)');
    grd.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = grd;
    ctx.fillRect(0, 0, w, h);

    particles.forEach(p => { p.update(); p.draw(); });
    drawConnections();
    requestAnimationFrame(draw);
  }

  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      resize();
      // Reposition existing particles proportionally
      particles.forEach(p => {
        p.x = (p.x / (w || 1)) * canvas.clientWidth;
        p.y = (p.y / (h || 1)) * canvas.clientHeight;
      });
      w = canvas.clientWidth;
      h = canvas.clientHeight;
    }, 150);
  });

  resize();
  initParticles(140);
  draw();
})();

/* ===== FALLING STARS (global, behind everything) ===== */
(function(){
  const canvas = document.getElementById('starsCanvas');
  const ctx = canvas.getContext('2d');
  let w, h, stars = [];
  const STAR_COUNT = 160;

  class FallingStar {
    constructor(){
      this.reset(true);
    }
    reset(initial){
      this.x = Math.random() * w;
      this.y = initial ? Math.random() * h : -10 - Math.random() * 60;
      this.size = Math.random() * 1.6 + 0.4;
      this.speed = Math.random() * 0.55 + 0.15;
      this.opacity = Math.random() * 0.7 + 0.25;
      this.hue = Math.random() < 0.25 ? 38 : 215; // gold or blue-white
      this.twinkleSpeed = Math.random() * 0.02 + 0.006;
      this.twinkle = Math.random() * Math.PI * 2;
      this.drift = (Math.random() - 0.5) * 0.04;
    }
    update(){
      this.y += this.speed;
      this.x += this.drift;
      this.twinkle += this.twinkleSpeed;
      if (this.y > h + 20){
        this.reset(false);
      }
      // Wrap horizontally
      if (this.x < -20) this.x = w + 20;
      if (this.x > w + 20) this.x = -20;
    }
    draw(){
      const twinkleAlpha = this.opacity * (0.7 + 0.3 * Math.sin(this.twinkle));
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      if (this.hue === 38){
        ctx.fillStyle = `rgba(232,168,73,${twinkleAlpha})`;
      } else {
        ctx.fillStyle = `rgba(190,215,245,${twinkleAlpha})`;
      }
      ctx.fill();
      // Tiny glow for larger stars
      if (this.size > 1.2){
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size * 3.5, 0, Math.PI * 2);
        ctx.fillStyle = this.hue === 38
          ? `rgba(232,168,73,${twinkleAlpha * 0.18})`
          : `rgba(190,215,245,${twinkleAlpha * 0.18})`;
        ctx.fill();
      }
    }
  }

  function init(){
    stars = [];
    for (let i = 0; i < STAR_COUNT; i++) stars.push(new FallingStar());
  }

  function resize(){
    const dpr = window.devicePixelRatio || 1;
    w = window.innerWidth;
    h = window.innerHeight;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    canvas.style.width = w + 'px';
    canvas.style.height = h + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  function draw(){
    ctx.clearRect(0, 0, w, h);
    stars.forEach(s => { s.update(); s.draw(); });
    requestAnimationFrame(draw);
  }

  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      resize();
      // Keep existing stars within new bounds
      stars.forEach(s => {
        if (s.x > w) s.x = w - 10;
        if (s.x < 0) s.x = 10;
        if (s.y > h) s.y = h - 10;
      });
      w = window.innerWidth;
      h = window.innerHeight;
    }, 150);
  });

  resize();
  init();
  draw();
})();
document.getElementById('rateSheetBtn').addEventListener('click', () => {
  // Placeholder: in production, link to a real PDF.
  const blob = new Blob(['Alex Renderer — Rate Sheet 2026\n\nFreelance day rate: $600–$900/day\nFull 3D character: $2,500–$6,000\nEnvironment shot: $1,200–$3,500\nProduct viz (per asset): $400–$1,200\nMotion / animation: $75–$150/second\n\nContact: alex@renderer.studio'], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'Alex_Renderer_Rate_Sheet_2026.txt';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
});
