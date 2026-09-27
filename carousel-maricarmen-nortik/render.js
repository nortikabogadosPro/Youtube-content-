const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

const W = 1080, H = 1350;
const GREEN = '#28F09A';
const GREEN_DARK = '#0F8A55';
const BG = '#0A0B0C';
const BG2 = '#141517';

const FONT = `-apple-system, "Helvetica Neue", Arial, sans-serif`;

function shell(inner, { photo = null, photoSide = 'right', dark = 0.62 } = {}) {
  // Source frames are 924x2000 phone-app screenshots; crop out the top status bar
  // and bottom scrubber/filmstrip, keeping roughly face-to-chest (rows 200-1500).
  const scale = 1.0385, imgW = Math.round(924 * scale), top = -Math.round(200 * scale), left = -Math.round((imgW - 605) / 2);
  const photoBlock = photo ? `
    <div class="photo-wrap" style="${photoSide === 'right' ? 'right:0;' : 'left:0;'}">
      <img src="file://${photo}" style="width:${imgW}px; top:${top}px; left:${left}px;">
    </div>
    <div class="photo-fade" style="${photoSide === 'right' ? 'right:0;' : 'left:0;'}"></div>
  ` : '';
  return `
  <html><head><meta charset="utf-8"><style>
    * { margin:0; padding:0; box-sizing:border-box; }
    html,body { width:${W}px; height:${H}px; background:${BG}; overflow:hidden; font-family:${FONT}; }
    .stage { position:relative; width:${W}px; height:${H}px; background:linear-gradient(160deg, ${BG} 0%, ${BG2} 100%); }
    .photo-wrap { position:absolute; top:0; bottom:0; width:56%; overflow:hidden; opacity:0.92; }
    .photo-wrap img { position:absolute; filter:grayscale(15%) contrast(1.08) brightness(1.02); }
    .photo-fade { position:absolute; top:0; bottom:0; width:70%; background:linear-gradient(${photoSide === 'right' ? '90deg' : '270deg'}, ${BG} 0%, rgba(10,11,12,0.45) 38%, rgba(10,11,12,0) 72%); }
    .dark-overlay { position:absolute; inset:0; background:rgba(0,0,0,${dark}); }
    .brand { position:absolute; top:64px; left:64px; display:flex; align-items:center; gap:14px; z-index:5; }
    .brand .mark { width:34px; height:34px; border:3px solid ${GREEN}; border-radius:8px; display:flex; align-items:center; justify-content:center; font-weight:900; color:${GREEN}; font-size:18px; }
    .brand .word { font-weight:800; letter-spacing:3px; color:#F5F6F5; font-size:20px; }
    .pagenum { position:absolute; top:70px; right:64px; color:rgba(255,255,255,0.45); font-weight:700; letter-spacing:2px; font-size:16px; z-index:5; }
    .content { position:absolute; left:64px; right:64px; bottom:96px; z-index:5; }
    .eyebrow { color:${GREEN}; font-weight:800; letter-spacing:4px; font-size:22px; text-transform:uppercase; margin-bottom:22px; }
    h1 { color:#FFFFFF; font-weight:900; line-height:1.04; letter-spacing:-1px; text-transform:none; }
    .body { color:rgba(255,255,255,0.86); font-weight:500; line-height:1.5; margin-top:28px; }
    .hl { color:${GREEN}; }
    .swipe { position:absolute; bottom:36px; right:64px; color:${GREEN}; font-weight:800; letter-spacing:3px; font-size:20px; z-index:5; }
    .divider { width:64px; height:6px; background:${GREEN}; border-radius:3px; margin-bottom:26px; }
    .num-badge { position:absolute; bottom:96px; left:64px; font-size:220px; font-weight:900; color:rgba(255,255,255,0.06); line-height:1; z-index:1; }
  </style></head>
  <body><div class="stage">${photoBlock}<div class="dark-overlay"></div>${inner}</div></body></html>`;
}

const slides = [];

// SLIDE 1 — HOOK
slides.push(shell(`
  <div class="brand"><div class="mark">N</div><div class="word">NORTIK ABOGADOS</div></div>
  <div class="content" style="bottom:120px;">
    <div class="eyebrow">Caso real · septiembre 2026</div>
    <h1 style="font-size:88px;">A sus 87 años,<br>la sacaron de su<br>casa en <span class="hl">CAMILLA</span>.</h1>
    <div class="body" style="font-size:30px; max-width:820px;">Llevaba <b>71 años</b> viviendo allí. Esto es lo que la ley permite&nbsp;— y lo que no.</div>
  </div>
  <div class="swipe">DESLIZA →</div>
`, { photo: path.join(__dirname, 'assets/martin_1.jpg'), photoSide: 'right', dark: 0.72 }));

// SLIDE 2 — EL CASO
slides.push(shell(`
  <div class="brand"><div class="mark">N</div><div class="word">NORTIK ABOGADOS</div></div>
  <div class="pagenum">02 / 08</div>
  <div class="num-badge">01</div>
  <div class="content">
    <div class="eyebrow">El caso</div>
    <div class="divider"></div>
    <h1 style="font-size:66px;">Mari Carmen,<br><span class="hl">87 años</span></h1>
    <div class="body" style="font-size:32px; max-width:860px;">
      Vivía en el mismo piso de Madrid desde <b>1956</b>. Al morir su madre en 2005, se subrogó en su contrato de alquiler de <b class="hl">renta antigua</b>: pagaba 500&nbsp;€/mes.
    </div>
  </div>
`));

// SLIDE 3 — EL GIRO
slides.push(shell(`
  <div class="brand"><div class="mark">N</div><div class="word">NORTIK ABOGADOS</div></div>
  <div class="pagenum">03 / 08</div>
  <div class="num-badge">02</div>
  <div class="content">
    <div class="eyebrow">Qué cambió</div>
    <div class="divider"></div>
    <h1 style="font-size:62px;">El edificio<br>cambió de dueño</h1>
    <div class="body" style="font-size:30px; max-width:860px;">
      Un fondo de inversión compró el inmueble. Le propuso comprar su propia vivienda por <b>250.000&nbsp;€</b> y después le subió el alquiler a:
    </div>
    <div style="font-size:74px; font-weight:900; color:${GREEN}; margin-top:22px; letter-spacing:-2px;">500&nbsp;€ → 2.650&nbsp;€/mes</div>
    <div class="body" style="font-size:26px; margin-top:16px; opacity:0.75;">Su pensión: 1.450&nbsp;€/mes.</div>
  </div>
`));

// SLIDE 4 — EL PROCESO
slides.push(shell(`
  <div class="brand"><div class="mark">N</div><div class="word">NORTIK ABOGADOS</div></div>
  <div class="pagenum">04 / 08</div>
  <div class="num-badge">03</div>
  <div class="content">
    <div class="eyebrow">El proceso judicial</div>
    <div class="divider"></div>
    <h1 style="font-size:58px;">4 intentos de<br>desahucio en<br>un año</h1>
    <div class="body" style="font-size:27px; max-width:880px; line-height:1.7;">
      <b class="hl">Oct 2025</b> — 1er intento, frenado 4 meses.<br>
      <b class="hl">Jun 2026</b> — 2º intento, aplazado por vulnerabilidad.<br>
      <b class="hl">Sept 2026</b> — se ejecuta el desalojo, con un fuerte despliegue policial.
    </div>
  </div>
`));

// SLIDE 5 — RENTA ANTIGUA
slides.push(shell(`
  <div class="brand"><div class="mark">N</div><div class="word">NORTIK ABOGADOS</div></div>
  <div class="pagenum">05 / 08</div>
  <div class="num-badge">04</div>
  <div class="content">
    <div class="eyebrow">Lo que debes saber</div>
    <div class="divider"></div>
    <h1 style="font-size:56px;">¿Qué es un contrato<br>de <span class="hl">"renta antigua"</span>?</h1>
    <div class="body" style="font-size:29px; max-width:880px;">
      Son alquileres firmados antes de 1995, con condiciones muy protegidas. Pueden <b>heredarse o subrogarse</b> — pero cuando el inmueble cambia de propietario, se convierten en uno de los conflictos legales más complejos en España.
    </div>
  </div>
`));

// SLIDE 6 — DERECHOS
slides.push(shell(`
  <div class="brand"><div class="mark">N</div><div class="word">NORTIK ABOGADOS</div></div>
  <div class="pagenum">06 / 08</div>
  <div class="num-badge">05</div>
  <div class="content">
    <div class="eyebrow">Tus derechos</div>
    <div class="divider"></div>
    <h1 style="font-size:52px;">¿Qué protege — y qué<br>NO — a un inquilino<br>vulnerable?</h1>
    <div class="body" style="font-size:28px; max-width:900px; line-height:1.75; margin-top:24px;">
      <span class="hl" style="font-weight:800;">✓</span> Se puede alegar vulnerabilidad social ante el juzgado.<br>
      <span class="hl" style="font-weight:800;">✓</span> Servicios sociales pueden solicitar aplazamientos.<br>
      <span style="color:#ff6b6b; font-weight:800;">✗</span> Hoy no existe un "escudo antidesahucios" permanente.<br>
      <span style="color:#ff6b6b; font-weight:800;">✗</span> La vulnerabilidad frena el proceso, pero no siempre lo impide.
    </div>
  </div>
`));

// SLIDE 7 — CÓMO AYUDAMOS
slides.push(shell(`
  <div class="brand"><div class="mark">N</div><div class="word">NORTIK ABOGADOS</div></div>
  <div class="pagenum">07 / 08</div>
  <div class="content" style="bottom:120px;">
    <div class="eyebrow">Cómo te protegemos</div>
    <div class="divider"></div>
    <h1 style="font-size:56px;">Si estás en esta<br>situación, actúa<br><span class="hl">antes de que sea tarde</span></h1>
    <div class="body" style="font-size:28px; max-width:760px;">
      Revisamos tu contrato, negociamos con el propietario o el fondo, y presentamos los recursos y aplazamientos que la ley permite para ganar tiempo y buscar una salida real.
    </div>
  </div>
`, { photo: path.join(__dirname, 'assets/martin_1.jpg'), photoSide: 'right', dark: 0.68 }));

// SLIDE 8 — CTA
slides.push(shell(`
  <div class="brand" style="top:64px; left:0; right:0; justify-content:center;"><div class="mark">N</div><div class="word">NORTIK ABOGADOS</div></div>
  <div style="position:absolute; top:0; left:0; right:0; bottom:0; display:flex; flex-direction:column; align-items:center; justify-content:center; text-align:center; z-index:5; padding:0 90px;">
    <h1 style="font-size:64px; color:#fff;">No esperes a la carta<br>del <span class="hl">juzgado</span>.</h1>
    <div class="body" style="font-size:30px; margin-top:26px;">Escríbenos. Una consulta a tiempo<br>puede cambiarlo todo.</div>
    <div style="margin-top:56px; padding:20px 46px; border:3px solid ${GREEN}; border-radius:60px; color:${GREEN}; font-weight:800; letter-spacing:2px; font-size:26px;">
      📩 ESCRÍBENOS · LINK EN BIO
    </div>
  </div>
  <div style="position:absolute; bottom:56px; left:64px; right:64px; z-index:5; color:rgba(255,255,255,0.45); font-size:18px; line-height:1.5; text-align:center;">
    Caso basado en información publicada por medios de comunicación. Contenido informativo y divulgativo, no sustituye una asesoría legal personalizada — cada caso requiere su propio análisis.
  </div>
`));

(async () => {
  const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome', args: ['--no-sandbox', '--allow-file-access-from-files'] });
  const page = await browser.newPage({ viewport: { width: W, height: H } });
  const tmpDir = path.join(__dirname, '.tmp_html');
  fs.mkdirSync(tmpDir, { recursive: true });
  for (let i = 0; i < slides.length; i++) {
    const htmlPath = path.join(tmpDir, `slide_${i + 1}.html`);
    fs.writeFileSync(htmlPath, slides[i]);
    await page.goto('file://' + htmlPath, { waitUntil: 'load' });
    const out = path.join(__dirname, `slide_${String(i + 1).padStart(2, '0')}.png`);
    await page.screenshot({ path: out });
    console.log('OK', out);
  }
  await browser.close();
  fs.rmSync(tmpDir, { recursive: true, force: true });
})();
