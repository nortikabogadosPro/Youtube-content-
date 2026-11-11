// Carrusel "El choque de derechos" — 9 slides 1080x1350.
// Tipografía nueva (la de la portada de Línea Tu Casa): titulares en Bebas Neue
// en mayúsculas, cuerpo en Inter, fondo negro, verde neón #77EA8D, rojo aviso
// #E1201B, subrayado a mano en verde y handles @brionesnortik · @abogadosnortik.
const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

const W = 1080, H = 1350;
const GREEN = '#77EA8D';
const RED = '#E1201B';
const BG = '#000';
const BG2 = '#0B0B0B';
const FONT_FILE = path.join(__dirname, 'assets/BebasNeue.ttf');
const TOTAL = 9;

const BASE = `
  @font-face { font-family:'Bebas'; src:url('file://${FONT_FILE}'); }
  * { margin:0; padding:0; box-sizing:border-box; }
  html,body { width:${W}px; height:${H}px; overflow:hidden; font-family:'Inter', Arial, sans-serif; }
  .stage { position:relative; width:${W}px; height:${H}px; background:${BG}; color:#fff; overflow:hidden; }
  .label { position:absolute; top:84px; left:80px; color:${GREEN}; font-weight:700; font-size:30px; letter-spacing:0.5px; text-transform:uppercase; }
  .page { position:absolute; top:88px; right:80px; color:rgba(255,255,255,0.4); font-weight:600; font-size:24px; letter-spacing:1px; }
  .h { font-family:'Bebas', Impact, sans-serif; font-weight:400; text-transform:uppercase; line-height:0.95; letter-spacing:0.5px; }
  .g { color:${GREEN}; } .r { color:${RED}; } .w { color:#fff; }
  .body { font-size:38px; line-height:1.38; color:rgba(255,255,255,0.92); font-weight:400; }
  .body b { font-weight:700; color:#fff; }
  .muted { color:rgba(255,255,255,0.55); }
  .handles { position:absolute; bottom:70px; left:80px; font-size:28px; color:rgba(255,255,255,0.5); }
  .swipe { position:absolute; bottom:66px; right:80px; font-family:'Bebas'; font-size:40px; color:${GREEN}; letter-spacing:1px; }
  .badge { display:inline-flex; align-items:center; gap:16px; background:${RED}; border-radius:8px; padding:10px 26px 6px 22px; }
  .badge span { font-family:'Bebas'; font-size:62px; line-height:1; color:#fff; letter-spacing:0.5px; }
  .badge.green { background:${GREEN}; } .badge.green span { color:#000; }
`;

const warnIcon = (fill = '#fff', mark = RED) => `<svg width="50" height="46" viewBox="0 0 50 46" style="margin-top:-6px"><path d="M25 2 L48 44 H2 Z" fill="${fill}"/><rect x="22.5" y="15" width="5" height="16" rx="2" fill="${mark}"/><circle cx="25" cy="37" r="3" fill="${mark}"/></svg>`;

// Subrayado "a mano" ondulado
function squiggle(width = 780, color = GREEN) {
  const segs = 14, step = width / segs;
  let d = `M2 9`;
  for (let i = 1; i <= segs; i++) d += ` Q ${(i - 0.5) * step} ${i % 2 ? 3 : 15} ${i * step} ${8 + (i % 3) - 1}`;
  return `<svg width="${width + 4}" height="20" style="display:block"><path d="${d}" stroke="${color}" stroke-width="7" fill="none" stroke-linecap="round"/></svg>`;
}

function page(n, label, inner, { bg = BG, swipe = true, extraCss = '' } = {}) {
  return `<html><head><meta charset="utf-8"><style>${BASE}${extraCss}</style></head><body>
  <div class="stage" style="background:${bg}">
    <div class="label">${label}</div>
    <div class="page">${String(n).padStart(2, '0')} / ${String(TOTAL).padStart(2, '0')}</div>
    ${inner}
    <div class="handles">@brionesnortik &nbsp;·&nbsp; @abogadosnortik</div>
    ${swipe ? '<div class="swipe">DESLIZA →</div>' : ''}
  </div></body></html>`;
}

// ---------- 1 · PORTADA ----------
const s1 = page(1, 'Huelga · Constitución', `
  <div style="position:absolute; left:80px; right:80px; top:250px;">
    <div class="badge">${warnIcon()}<span>EL CHOQUE DE DERECHOS</span></div>
    <div class="h" style="font-size:200px; margin-top:44px;">TU HUELGA</div>
    <div style="display:flex; align-items:center; gap:26px; margin:4px 0 8px;">
      <div style="height:4px; width:120px; background:rgba(255,255,255,0.3)"></div>
      <div class="h muted" style="font-size:80px;">VS.</div>
      <div style="height:4px; flex:1; background:rgba(255,255,255,0.3)"></div>
    </div>
    <div class="h g" style="font-size:186px;">MI AMBULANCIA</div>
    <div style="margin-top:10px">${squiggle(900)}</div>
    <div class="body" style="margin-top:56px; font-size:42px;">Los dos están en la Constitución.<br>Y en cada huelga, alguien tiene que ceder. <b>¿Quién?</b></div>
  </div>`);

// ---------- 2 · ESQUINA VERDE ----------
const s2 = page(2, 'Esquina verde', `
  <div style="position:absolute; left:80px; right:80px; top:200px;">
    <div class="h muted" style="font-size:64px;">DERECHO Nº 1</div>
    <div class="h g" style="font-size:168px; margin-top:6px;">HACER HUELGA</div>
    <div style="margin-top:6px">${squiggle(700)}</div>
    <div style="margin-top:56px; border-left:8px solid ${GREEN}; padding:6px 0 6px 34px;">
      <div class="body" style="font-size:40px; font-style:italic;">“Se reconoce el derecho a la huelga de los trabajadores para la defensa de sus intereses.”</div>
      <div class="muted" style="font-size:28px; margin-top:16px; font-weight:600;">ARTÍCULO 28.2 · CONSTITUCIÓN ESPAÑOLA</div>
    </div>
    <div class="body" style="margin-top:56px;">No es un “permiso” de tu empresa. Es un <b>derecho fundamental</b>: de los más blindados que hay. Si te lo vulneran, puedes llegar hasta el <b>Tribunal Constitucional</b>.</div>
  </div>`);

// ---------- 3 · ESQUINA ROJA ----------
const s3 = page(3, 'Esquina roja', `
  <div style="position:absolute; left:80px; right:80px; top:200px;">
    <div class="h muted" style="font-size:64px;">DERECHO Nº 2</div>
    <div class="h r" style="font-size:150px; margin-top:6px;">LOS SERVICIOS<br>ESENCIALES</div>
    <div style="margin-top:6px">${squiggle(760, RED)}</div>
    <div style="display:flex; flex-wrap:wrap; gap:18px; margin-top:52px;">
      ${['🏥 Salud', '🚑 Urgencias', '🚇 Transporte básico', '🚓 Seguridad'].map(t => `<div style="border:2px solid rgba(255,255,255,0.25); border-radius:40px; padding:14px 24px; font-size:30px; font-weight:600; white-space:nowrap;">${t}</div>`).join('')}
    </div>
    <div class="body" style="margin-top:56px;">Y aquí viene lo curioso: <b>el mismo artículo 28.2</b> que te deja hacer huelga obliga a garantizar “el mantenimiento de los servicios esenciales de la comunidad”.</div>
    <div class="body g" style="margin-top:30px; font-weight:700;">La Constitución ya sabía que iban a chocar.</div>
  </div>`);

// ---------- 4 · ¿QUÉ ES ESENCIAL? ----------
const row = (ok, text) => `<div style="display:flex; align-items:center; gap:26px; padding:30px 0; border-bottom:1px solid rgba(255,255,255,0.14);">
  <div class="h" style="font-size:58px; width:60px; text-align:center; color:${ok ? GREEN : RED};">${ok ? '✓' : '✕'}</div>
  <div style="font-size:40px; font-weight:500;">${text}</div></div>`;
const s4 = page(4, 'Test rápido', `
  <div style="position:absolute; left:80px; right:80px; top:200px;">
    <div class="h" style="font-size:130px;">¿ESENCIAL <span class="g">O NO?</span></div>
    <div class="body muted" style="font-size:32px; margin-top:16px;">Lo esencial no es el sector: es el derecho que proteges.</div>
    <div style="margin-top:34px; border-top:1px solid rgba(255,255,255,0.14);">
      ${row(true, 'Que la ambulancia llegue')}
      ${row(true, 'Que un paciente en diálisis reciba su sesión')}
      ${row(true, 'Que haya trenes para ir al hospital')}
      ${row(false, 'Que tu tren de las 8:00 salga a su hora')}
      ${row(false, 'Que nadie note que hay huelga')}
    </div>
  </div>`);

// ---------- 5 · LA REGLA DE ORO ----------
const s5 = page(5, 'La regla de oro', `
  <div style="position:absolute; left:80px; right:80px; top:260px;">
    <div class="badge green"><span>⚖️ LA REGLA DE ORO</span></div>
    <div class="h" style="font-size:128px; margin-top:40px;">LOS SERVICIOS MÍNIMOS DEBEN SER</div>
    <div class="h g" style="font-size:128px;">PROPORCIONALES<br>Y JUSTIFICADOS.</div>
    <div style="margin-top:8px">${squiggle(860)}</div>
    <div class="body" style="margin-top:56px; font-size:44px;">Su trabajo es mantener <b>lo imprescindible</b>.<br>No mantener <b>la normalidad</b>.</div>
  </div>`);

// ---------- 6 · LA TRAMPA ----------
const s6 = page(6, 'La trampa', `
  <div style="position:absolute; left:80px; right:80px; top:200px;">
    <div class="badge">${warnIcon()}<span>MÍNIMOS… ¿O MÁXIMOS?</span></div>
    <div class="h" style="font-size:124px; margin-top:40px;">SI TODO FUNCIONA<br>COMO UN DÍA NORMAL,</div>
    <div class="h r" style="font-size:124px;">NO HAY HUELGA.</div>
    <div class="h muted" style="font-size:80px; margin-top:6px;">HAY UNA HUELGA DE MENTIRA.</div>
    <div class="body" style="margin-top:46px;">Los servicios mínimos <b>no pueden usarse</b> para que parezca que no hay huelga. Cuando son abusivos, vacían el derecho del artículo 28.2 — y los tribunales <b>los han anulado</b> en más de una ocasión.</div>
  </div>`);

// ---------- 7 · QUIÉN DECIDE / EL PROBLEMA ----------
const step = (n, title, text, color = GREEN) => `<div style="display:flex; gap:30px; margin-bottom:38px;">
  <div class="h" style="font-size:96px; color:${color}; width:70px; line-height:0.85;">${n}</div>
  <div><div class="h" style="font-size:58px;">${title}</div><div class="body" style="font-size:33px; margin-top:6px;">${text}</div></div></div>`;
const s7 = page(7, '¿Quién los fija?', `
  <div style="position:absolute; left:80px; right:80px; top:200px;">
    <div class="h" style="font-size:118px; margin-bottom:46px;">¿QUIÉN PONE <span class="g">LOS MÍNIMOS?</span></div>
    ${step(1, 'La autoridad pública, no la empresa', 'El Gobierno o la administración competente los fija.')}
    ${step(2, 'Tiene que explicar por qué', 'Cada porcentaje debe estar motivado. “Porque sí” no vale.')}
    ${step(3, 'Se pueden recurrir', 'Ante los tribunales, como vulneración de un derecho fundamental.')}
    ${step('!', 'El problema', 'La sentencia suele llegar <b>cuando la huelga ya ha pasado</b>. Te dan la razón… tarde.', RED)}
  </div>`);

// ---------- 8 · DEBATE ----------
const opt = (letter, title, quote, color) => `<div style="border:3px solid ${color}; border-radius:18px; padding:34px 36px; margin-bottom:28px;">
  <div style="display:flex; align-items:baseline; gap:22px;"><div class="h" style="font-size:96px; color:${color}; line-height:0.8;">${letter}</div><div class="h" style="font-size:62px;">${title}</div></div>
  <div class="body" style="font-size:34px; margin-top:16px; font-style:italic;">${quote}</div></div>`;
const s8 = page(8, 'Ahora te toca a ti', `
  <div style="position:absolute; left:80px; right:80px; top:200px;">
    <div class="h" style="font-size:138px;">¿QUIÉN DEBERÍA <span class="g">GANAR?</span></div>
    <div style="margin:4px 0 46px">${squiggle(640)}</div>
    ${opt('A', 'La huelga', '“Una huelga que no molesta no sirve para nada. Para eso está.”', GREEN)}
    ${opt('B', 'La ciudadanía', '“Mi urgencia no puede ser moneda de cambio en tu negociación.”', RED)}
    <div class="h" style="font-size:66px; margin-top:20px;">COMENTA <span class="g">A</span> O <span class="r">B</span> 👇 <span class="muted">(Y POR QUÉ)</span></div>
  </div>`);

// ---------- 9 · CIERRE ----------
const s9 = page(9, 'En resumen', `
  <div style="position:absolute; left:80px; right:80px; top:200px;">
    <div class="h" style="font-size:132px;">EN UNA HUELGA<br><span class="g">NO GANA NADIE</span><br>AL 100 %.</div>
    <div style="margin-top:8px">${squiggle(720)}</div>
    <div class="body" style="margin-top:46px;">
      <div style="margin-bottom:14px;"><span class="g" style="font-weight:800">✓</span> Huelga: derecho fundamental (art. 28.2 CE).</div>
      <div style="margin-bottom:14px;"><span class="g" style="font-weight:800">✓</span> Servicios esenciales: también protegidos.</div>
      <div><span class="g" style="font-weight:800">✓</span> Mínimos sí. <b>Proporcionales, justificados y recurribles.</b></div>
    </div>
    <div style="margin-top:56px; display:flex; gap:20px;">
      <div style="background:${GREEN}; color:#000; border-radius:10px; padding:18px 30px; font-family:'Bebas'; font-size:50px; line-height:1;">SÍGUENOS</div>
      <div style="border:3px solid #fff; border-radius:10px; padding:16px 30px; font-family:'Bebas'; font-size:50px; line-height:1;">💾 GUÁRDALO</div>
      <div style="border:3px solid #fff; border-radius:10px; padding:16px 30px; font-family:'Bebas'; font-size:50px; line-height:1;">🔁 ENVÍALO</div>
    </div>
  </div>`, { swipe: false });

(async () => {
  const slides = [s1, s2, s3, s4, s5, s6, s7, s8, s9];
  const browser = await chromium.launch({ args: ['--no-sandbox', '--allow-file-access-from-files'] });
  const pg = await browser.newPage({ viewport: { width: W, height: H } });
  const tmp = path.join(__dirname, '.tmp');
  fs.mkdirSync(tmp, { recursive: true });
  for (let i = 0; i < slides.length; i++) {
    const f = path.join(tmp, `s${i + 1}.html`);
    fs.writeFileSync(f, slides[i]);
    await pg.goto('file://' + f, { waitUntil: 'load' });
    await pg.evaluate(() => document.fonts.ready);
    const out = path.join(__dirname, `slide_${String(i + 1).padStart(2, '0')}.png`);
    await pg.screenshot({ path: out });
    console.log('OK', out);
  }
  await browser.close();
  fs.rmSync(tmp, { recursive: true, force: true });
})();
