const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

const W = 1080, H = 1350;

// Brand palette sampled from the real Nortik logo (navy ink) + a warm gold accent
// for a minimalist "serious law firm" feel — no invented brand hues.
const INK = '#0E1B24';      // deep navy background
const INK2 = '#14232E';     // secondary navy (texture bg)
const NAVY = '#1B2E3B';     // exact logo ink, used for cards on light bg
const CREAM = '#F4F0E6';    // paper / light card bg
const GOLD = '#C9A24B';     // accent: kickers, highlights, CTAs, ribbons
const OK = '#4CAF7D';       // semantic green (checklist only)
const BAD = '#D9534F';      // semantic red (checklist only)

const FONT = `-apple-system, "Helvetica Neue", Arial, sans-serif`;
const PHOTO = path.join(__dirname, 'assets/martin_1.jpg');
const A = path.join(__dirname, 'assets');

const RESET = `
  * { margin:0; padding:0; box-sizing:border-box; }
  html,body { width:${W}px; height:${H}px; overflow:hidden; font-family:${FONT}; }
  .stage { position:relative; width:${W}px; height:${H}px; }
  b, strong { font-weight:900; }
`;

function logoMark(variant = 'light', h = 34) {
  const file = variant === 'dark' ? 'nortik_mark_navy.png' : 'nortik_mark_cream.png';
  const w = Math.round(h * (210 / 107));
  return `<img src="file://${A}/${file}" style="height:${h}px; width:${w}px; flex:none; display:block;">`;
}

function brand(variant = 'light', pos = 'top:56px; left:56px;') {
  const textColor = variant === 'dark' ? NAVY : '#fff';
  return `
  <div style="position:absolute; ${pos} display:flex; align-items:center; gap:14px; z-index:9;">
    ${logoMark(variant, 34)}
    <div style="font-weight:800; letter-spacing:3px; color:${textColor}; font-size:19px;">NORTIK ABOGADOS</div>
  </div>`;
}

function pageTag(label, color = 'rgba(255,255,255,0.5)') {
  return `<div style="position:absolute; top:60px; right:56px; font-weight:800; letter-spacing:2px; font-size:16px; color:${color}; z-index:9;">${label}</div>`;
}

// ---------------------------------------------------------------
// SLIDE 1 — HOOK (full-bleed blurred portrait + text-only press alert)
// ---------------------------------------------------------------
function slide1() {
  return `<html><head><meta charset="utf-8"><style>${RESET}
    .bg { position:absolute; inset:0; overflow:hidden; background:${INK}; }
    .bg img { position:absolute; top:-330px; left:-40px; width:1160px; filter:blur(9px) grayscale(35%) brightness(0.55) contrast(1.05); transform:scale(1.05); }
    .vign { position:absolute; inset:0; background:
      linear-gradient(180deg, rgba(14,27,36,0.82) 0%, rgba(14,27,36,0.35) 24%, rgba(14,27,36,0.6) 58%, rgba(14,27,36,0.97) 92%); }
    .badge { position:absolute; top:60px; left:56px; z-index:9; display:flex; align-items:center; gap:10px;
      background:rgba(255,255,255,0.08); border:1px solid rgba(255,255,255,0.22); backdrop-filter:blur(4px);
      padding:10px 18px 10px 14px; border-radius:30px; max-width:560px; }
    .badge .led { width:9px; height:9px; border-radius:50%; background:${GOLD}; box-shadow:0 0 10px ${GOLD}; }
    .badge span { color:#fff; font-weight:800; letter-spacing:1.5px; font-size:15px; }
    .content { position:absolute; left:56px; right:56px; bottom:150px; z-index:9; }
    .kicker { color:${GOLD}; font-weight:900; letter-spacing:3px; font-size:24px; text-transform:uppercase; margin-bottom:18px; }
    h1 { color:#fff; font-weight:900; font-size:92px; line-height:0.98; letter-spacing:-3px; }
    h1 .hl { color:${GOLD}; }
    .sub { color:rgba(255,255,255,0.92); font-size:31px; font-weight:600; line-height:1.42; margin-top:26px; max-width:900px; }
    .cta { position:absolute; bottom:52px; left:56px; right:56px; z-index:9; display:flex; align-items:center; justify-content:space-between; }
    .cta .pill { background:${GOLD}; color:${INK}; font-weight:900; letter-spacing:1.5px; font-size:20px; padding:18px 30px; border-radius:40px; }
    .cta .who { display:flex; align-items:center; gap:10px; }
    .cta .who span { color:rgba(255,255,255,0.6); font-weight:700; font-size:15px; letter-spacing:1.5px; }
    .clip { position:absolute; top:112px; right:56px; width:372px; background:${CREAM}; color:${NAVY};
      padding:20px 24px 18px; border-radius:2px; transform:rotate(-3.5deg); box-shadow:0 22px 34px rgba(0,0,0,0.5); z-index:8;
      font-family:Georgia,'Times New Roman',serif; }
    .clip .tape { position:absolute; top:-13px; left:50%; transform:translateX(-50%) rotate(-2deg); width:86px; height:24px;
      background:rgba(255,255,255,0.4); border:1px solid rgba(255,255,255,0.55); }
    .clip .alert { display:inline-block; background:#8a1f1f; color:#fff; font-family:${FONT}; font-weight:800; font-size:11px;
      letter-spacing:1.5px; padding:3px 9px; border-radius:3px; margin-bottom:9px; }
    .clip .src { font-size:12px; font-weight:700; letter-spacing:2px; text-transform:uppercase; color:#8a1f1f;
      margin-bottom:8px; font-family:${FONT}; }
    .clip .headline { font-size:19px; font-weight:700; line-height:1.28; }
    .clip .foot { margin-top:10px; font-size:13px; color:#5a5a5a; font-style:italic; font-family:${FONT}; }
  </style></head><body><div class="stage">
    <div class="bg"><img src="file://${PHOTO}"></div>
    <div class="vign"></div>
    <div class="badge"><div class="led"></div><span>DESPACHO DE ABOGADOS · CASO VERIFICADO</span></div>
    ${pageTag('01 / 08', 'rgba(255,255,255,0.6)')}
    <div class="clip">
      <div class="tape"></div>
      <div class="alert">ÚLTIMA HORA</div>
      <div class="src">Portada nacional</div>
      <div class="headline">"Conmoción social y política por el desahucio de Maricarmen"</div>
      <div class="foot">— El País</div>
    </div>
    <div class="content">
      <div class="kicker">Esto acaba de pasar en Madrid</div>
      <h1>A los 87 años,<br>la sacaron de<br>su casa en <span class="hl">CAMILLA</span>.</h1>
      <div class="sub">71 años viviendo en el mismo piso. Y aun así, <b>era legal echarla</b>. Te explico cómo — y qué habría podido evitarlo.</div>
    </div>
    <div class="cta"><div class="pill">DESLIZA Y ENTÉRATE →</div><div class="who">${logoMark('light', 28)}<span>NORTIK ABOGADOS</span></div></div>
  </div></body></html>`;
}

// ---------------------------------------------------------------
// SLIDE 2 — EL CASO (diagonal gold ribbon + ghost numeral)
// ---------------------------------------------------------------
function slide2() {
  return `<html><head><meta charset="utf-8"><style>${RESET}
    .stage { background:${INK}; }
    .bg { position:absolute; inset:0; overflow:hidden; }
    .bg img { position:absolute; top:-330px; left:-40px; width:1160px; filter:blur(9px) grayscale(40%) brightness(0.5) contrast(1.05); transform:scale(1.05); }
    .vign { position:absolute; inset:0; background:linear-gradient(160deg, rgba(14,27,36,0.55) 0%, rgba(14,27,36,0.88) 55%, rgba(14,27,36,0.97) 100%); }
    .ribbon { position:absolute; top:-120px; right:-260px; width:900px; height:520px; background:${GOLD};
      transform:rotate(-32deg); z-index:1; opacity:0.94; }
    .ghost { position:absolute; top:280px; right:-20px; font-size:520px; font-weight:900; color:rgba(255,255,255,0.06);
      line-height:1; z-index:1; letter-spacing:-10px; }
    .card { position:absolute; left:56px; right:80px; bottom:150px; z-index:5; }
    .eyebrow { display:inline-block; background:rgba(201,162,75,0.18); color:${GOLD}; font-weight:900; letter-spacing:3px;
      font-size:20px; padding:9px 18px; border-radius:8px; margin-bottom:28px; }
    h1 { color:#fff; font-weight:900; font-size:76px; line-height:1.03; letter-spacing:-2px; text-shadow:0 4px 24px rgba(0,0,0,0.4); }
    h1 .hl { color:${GOLD}; }
    .body { color:rgba(255,255,255,0.92); font-size:33px; font-weight:600; line-height:1.5; margin-top:30px; max-width:880px; }
    .body b { color:#fff; }
  </style></head><body><div class="stage">
    <div class="bg"><img src="file://${path.join(__dirname, 'assets/martin_2.jpg')}"></div>
    <div class="vign"></div>
    ${brand()}
    ${pageTag('02 / 08')}
    <div class="ribbon"></div>
    <div class="ghost">87</div>
    <div class="card">
      <div class="eyebrow">EL CASO</div>
      <h1>Mari Carmen,<br><span class="hl">71 años</span> en la<br>misma casa</h1>
      <div class="body">Vivía en el mismo piso de Madrid desde <b>1956</b>. Al morir su madre en 2005, se subrogó en su contrato de alquiler de <b>renta antigua</b>: pagaba 500&nbsp;€/mes.</div>
    </div>
  </div></body></html>`;
}

// ---------------------------------------------------------------
// SLIDE 3 — EL GIRO (cream block + rotated navy stat card)
// ---------------------------------------------------------------
function slide3() {
  return `<html><head><meta charset="utf-8"><style>${RESET}
    .stage { background:${CREAM}; }
    .top { position:absolute; top:150px; left:56px; right:56px; z-index:5; }
    .eyebrow { color:${NAVY}; font-weight:900; letter-spacing:3px; font-size:20px; opacity:0.65; }
    h1 { color:${NAVY}; font-weight:900; font-size:60px; line-height:1.05; letter-spacing:-2px; margin-top:18px; max-width:820px; }
    .lower { position:absolute; left:56px; right:56px; top:470px; bottom:56px; z-index:5;
      display:flex; flex-direction:column; align-items:center; justify-content:center; gap:52px; }
    .card { width:100%; background:${NAVY}; border-radius:26px;
      transform:rotate(-2.2deg); box-shadow:0 30px 60px rgba(27,46,59,0.35); padding:56px 44px; }
    .stat { display:flex; align-items:center; justify-content:center; gap:26px; }
    .stat .num { font-weight:900; letter-spacing:-3px; color:#fff; font-size:64px; }
    .stat .num.now { color:${GOLD}; font-size:76px; }
    .stat .arrow { color:${GOLD}; font-size:46px; font-weight:900; }
    .cap { text-align:center; color:rgba(255,255,255,0.6); font-weight:700; font-size:20px; margin-top:14px; letter-spacing:0.5px; }
    .foot { text-align:center; }
    .foot p { color:${NAVY}; font-weight:800; font-size:34px; line-height:1.4; }
  </style></head><body><div class="stage">
    ${brand('dark')}
    ${pageTag('03 / 08', 'rgba(27,46,59,0.55)')}
    <div class="top">
      <div class="eyebrow">QUÉ CAMBIÓ</div>
      <h1>El edificio cambió de dueño. Un fondo le propuso comprarle su propia casa por 250.000&nbsp;€...</h1>
    </div>
    <div class="lower">
      <div class="card">
        <div class="stat"><div class="num">500&nbsp;€</div><div class="arrow">→</div><div class="num now">2.650&nbsp;€</div></div>
        <div class="cap">SU ALQUILER MENSUAL, DE UN MES A OTRO</div>
      </div>
      <div class="foot"><p>Su pensión: 1.450&nbsp;€/mes.<br>Imposible de pagar.</p></div>
    </div>
  </div></body></html>`;
}

// ---------------------------------------------------------------
// SLIDE 4 — EL PROCESO (vertical timeline)
// ---------------------------------------------------------------
function slide4() {
  const items = [
    ['OCT 2025', '1er intento de desahucio', 'La defensa lo frena durante 4 meses.'],
    ['JUN 2026', '2º intento', 'Aplazado por situación de vulnerabilidad.'],
    ['SEPT 2026', 'Se ejecuta el desalojo', 'Con un fuerte despliegue policial y cientos de vecinos intentando impedirlo.'],
  ];
  const rows = items.map((it, i) => `
    <div style="display:flex; gap:28px; align-items:flex-start; ${i < items.length - 1 ? 'margin-bottom:64px;' : ''}">
      <div style="display:flex; flex-direction:column; align-items:center;">
        <div style="width:22px; height:22px; border-radius:50%; background:${GOLD}; box-shadow:0 0 0 6px rgba(201,162,75,0.2); flex:none;"></div>
        ${i < items.length - 1 ? `<div style="width:3px; flex:1; background:rgba(255,255,255,0.16); margin-top:8px; min-height:70px;"></div>` : ''}
      </div>
      <div>
        <div style="color:${GOLD}; font-weight:900; letter-spacing:2px; font-size:22px;">${it[0]}</div>
        <div style="color:#fff; font-weight:900; font-size:34px; margin-top:6px; letter-spacing:-0.5px;">${it[1]}</div>
        <div style="color:rgba(255,255,255,0.72); font-weight:500; font-size:24px; margin-top:8px; max-width:680px; line-height:1.4;">${it[2]}</div>
      </div>
    </div>`).join('');
  return `<html><head><meta charset="utf-8"><style>${RESET}
    .stage { background:${INK}; }
    .ghost-ico { position:absolute; top:-60px; right:-50px; font-size:420px; color:rgba(201,162,75,0.05); z-index:1;
      font-weight:900; transform:rotate(12deg); }
    .head { position:absolute; top:170px; left:56px; right:56px; z-index:5; }
    .eyebrow { color:${GOLD}; font-weight:900; letter-spacing:3px; font-size:20px; text-transform:uppercase; }
    h1 { color:#fff; font-weight:900; font-size:58px; line-height:1.05; letter-spacing:-2px; margin-top:16px; }
    .timeline { position:absolute; left:56px; right:56px; top:430px; z-index:5; }
    .closing { position:absolute; left:56px; right:56px; bottom:86px; z-index:5; background:rgba(201,162,75,0.1);
      border:1.5px solid rgba(201,162,75,0.3); border-radius:18px; padding:28px 30px; }
    .closing p { color:rgba(255,255,255,0.85); font-weight:700; font-size:24px; line-height:1.45; }
    .closing p b { color:${GOLD}; }
  </style></head><body><div class="stage">
    <div class="ghost-ico">⚖</div>
    ${brand()}
    ${pageTag('04 / 08')}
    <div class="head"><div class="eyebrow">EL PROCESO JUDICIAL</div><h1>4 intentos de<br>desahucio en un año</h1></div>
    <div class="timeline">${rows}</div>
    <div class="closing"><p><b>Casi un año de recursos y aplazamientos</b> — el tiempo que gana un buen abogado puede ser la diferencia entre un desalojo y una salida negociada.</p></div>
  </div></body></html>`;
}

// ---------------------------------------------------------------
// SLIDE 5 — RENTA ANTIGUA (definition / pull-quote, dot-grid bg)
// ---------------------------------------------------------------
function slide5() {
  return `<html><head><meta charset="utf-8"><style>${RESET}
    .stage { background:${INK2}; background-image: radial-gradient(rgba(201,162,75,0.09) 1.6px, transparent 1.6px);
      background-size: 30px 30px; }
    .quote { position:absolute; top:220px; left:56px; font-size:220px; color:${GOLD}; opacity:0.28; font-weight:900; line-height:0.5; }
    .quote2 { position:absolute; bottom:170px; right:56px; font-size:220px; color:${GOLD}; opacity:0.18; font-weight:900;
      line-height:0.5; transform:rotate(180deg); }
    .center { position:absolute; left:56px; right:56px; top:50%; transform:translateY(-46%); z-index:5; }
    .eyebrow { color:${GOLD}; font-weight:900; letter-spacing:3px; font-size:20px; text-transform:uppercase; margin-bottom:22px; }
    h1 { color:#fff; font-weight:900; font-size:62px; line-height:1.08; letter-spacing:-2px; }
    h1 .hl { color:${GOLD}; }
    .body { color:rgba(255,255,255,0.85); font-size:31px; font-weight:600; line-height:1.5; margin-top:30px; max-width:900px; }
    .body b { color:#fff; }
  </style></head><body><div class="stage">
    ${brand()}
    ${pageTag('05 / 08')}
    <div class="quote">&ldquo;</div>
    <div class="quote2">&ldquo;</div>
    <div class="center">
      <div class="eyebrow">LO QUE DEBES SABER</div>
      <h1>¿Qué es un contrato<br>de <span class="hl">"renta antigua"</span>?</h1>
      <div class="body">Alquileres firmados antes de 1995, con condiciones muy protegidas. Pueden <b>heredarse o subrogarse</b> — pero cuando el inmueble cambia de dueño, se convierten en uno de los conflictos legales más complejos de España.</div>
    </div>
  </div></body></html>`;
}

// ---------------------------------------------------------------
// SLIDE 6 — DERECHOS (checklist cards grid)
// ---------------------------------------------------------------
function slide6() {
  const items = [
    [true, 'Se puede alegar vulnerabilidad social ante el juzgado.'],
    [true, 'Servicios sociales pueden solicitar aplazamientos.'],
    [false, 'Hoy no existe un "escudo antidesahucios" permanente.'],
    [false, 'La vulnerabilidad frena el proceso, pero no siempre lo impide.'],
  ];
  const cards = items.map(([ok, text]) => `
    <div style="display:flex; gap:20px; align-items:flex-start; background:${ok ? 'rgba(76,175,125,0.10)' : 'rgba(217,83,79,0.08)'};
      border:1.5px solid ${ok ? 'rgba(76,175,125,0.35)' : 'rgba(217,83,79,0.30)'}; border-radius:18px; padding:26px 28px; margin-bottom:20px;">
      <div style="flex:none; width:38px; height:38px; border-radius:50%; background:${ok ? OK : BAD};
        display:flex; align-items:center; justify-content:center; font-weight:900; font-size:22px; color:#fff;">${ok ? '✓' : '✕'}</div>
      <div style="color:#fff; font-weight:700; font-size:26px; line-height:1.35; padding-top:4px;">${text}</div>
    </div>`).join('');
  return `<html><head><meta charset="utf-8"><style>${RESET}
    .stage { background:${INK}; }
    .head { position:absolute; top:160px; left:56px; right:56px; z-index:5; }
    .eyebrow { color:${GOLD}; font-weight:900; letter-spacing:3px; font-size:20px; text-transform:uppercase; }
    h1 { color:#fff; font-weight:900; font-size:50px; line-height:1.08; letter-spacing:-1.5px; margin-top:16px; }
    .grid { position:absolute; left:56px; right:56px; top:470px; z-index:5; }
    .takeaway { position:absolute; left:56px; right:56px; bottom:86px; z-index:5; background:${GOLD};
      border-radius:18px; padding:30px 32px; }
    .takeaway p { color:${INK}; font-weight:800; font-size:26px; line-height:1.4; }
  </style></head><body><div class="stage">
    ${brand()}
    ${pageTag('06 / 08')}
    <div class="head"><div class="eyebrow">TUS DERECHOS</div><h1>¿Qué protege — y qué NO —<br>a un inquilino vulnerable?</h1></div>
    <div class="grid">${cards}</div>
    <div class="takeaway"><p>💡 En resumen: la ley te da herramientas para ganar tiempo — pero solo si las usas a tiempo.</p></div>
  </div></body></html>`;
}

// ---------------------------------------------------------------
// SLIDE 7 — CÓMO AYUDAMOS (photo bleed + floating cream card)
// ---------------------------------------------------------------
function slide7() {
  return `<html><head><meta charset="utf-8"><style>${RESET}
    .bg { position:absolute; inset:0; overflow:hidden; background:${INK}; }
    .bg img { position:absolute; top:-260px; left:-260px; width:1160px; filter:blur(6px) grayscale(30%) brightness(0.5) contrast(1.05); }
    .vign { position:absolute; inset:0; background:linear-gradient(0deg, rgba(14,27,36,0.97) 0%, rgba(14,27,36,0.55) 40%, rgba(14,27,36,0.15) 70%); }
    .eyebrow { color:${GOLD}; font-weight:900; letter-spacing:3px; font-size:20px; text-transform:uppercase; }
    .headwrap { position:absolute; top:200px; left:56px; right:56px; z-index:6; }
    h1 { color:#fff; font-weight:900; font-size:58px; line-height:1.05; letter-spacing:-2px; margin-top:16px; }
    h1 .hl { color:${GOLD}; }
    .card { position:absolute; left:56px; right:56px; bottom:130px; z-index:6; background:${CREAM};
      border-radius:22px; padding:38px 40px; box-shadow:0 30px 60px rgba(0,0,0,0.4); }
    .card .t { color:${NAVY}; font-weight:900; font-size:24px; letter-spacing:-0.5px; margin-bottom:18px; }
    .card li { list-style:none; display:flex; gap:14px; align-items:flex-start; color:${NAVY}; font-weight:600; font-size:24px;
      line-height:1.4; margin-bottom:14px; }
    .card li:last-child { margin-bottom:0; }
    .card li .dot { flex:none; width:10px; height:10px; border-radius:50%; background:${GOLD}; margin-top:11px; }
  </style></head><body><div class="stage">
    <div class="bg"><img src="file://${PHOTO}"></div>
    <div class="vign"></div>
    ${brand()}
    ${pageTag('07 / 08')}
    <div class="headwrap">
      <div class="eyebrow">CÓMO TE PROTEGEMOS</div>
      <h1>Si estás en esta situación,<br>actúa <span class="hl">antes de que sea tarde</span></h1>
    </div>
    <div class="card">
      <div class="t">EN NORTIK ABOGADOS:</div>
      <ul>
        <li><div class="dot"></div>Revisamos tu contrato de alquiler al detalle.</li>
        <li><div class="dot"></div>Negociamos con el propietario o el fondo.</li>
        <li><div class="dot"></div>Presentamos recursos y aplazamientos legales para ganar tiempo real.</li>
      </ul>
    </div>
  </div></body></html>`;
}

// ---------------------------------------------------------------
// SLIDE 8 — CTA (deep navy, gold glow, big button)
// ---------------------------------------------------------------
function slide8() {
  return `<html><head><meta charset="utf-8"><style>${RESET}
    .stage { background:radial-gradient(ellipse at 50% 78%, rgba(201,162,75,0.22) 0%, rgba(201,162,75,0) 55%), ${INK}; }
    .center { position:absolute; left:70px; right:70px; top:0; bottom:0; display:flex; flex-direction:column;
      align-items:center; justify-content:center; text-align:center; z-index:5; }
    h1 { color:#fff; font-weight:900; font-size:70px; line-height:1.06; letter-spacing:-2.5px; }
    h1 .hl { color:${GOLD}; }
    .sub { color:rgba(255,255,255,0.86); font-size:30px; font-weight:600; margin-top:26px; line-height:1.4; }
    .btn { margin-top:52px; background:${GOLD}; color:${INK}; font-weight:900; letter-spacing:1.5px; font-size:24px;
      padding:22px 46px; border-radius:50px; }
    .foot { position:absolute; left:70px; right:70px; bottom:64px; z-index:5; text-align:center; }
    .foot p { color:rgba(255,255,255,0.5); font-size:17px; line-height:1.55; }
  </style></head><body><div class="stage">
    ${brand()}
    <div class="center">
      <h1>No esperes a la<br>carta del <span class="hl">juzgado</span>.</h1>
      <div class="sub">Escríbenos. Una consulta a tiempo<br>puede cambiarlo todo.</div>
      <div class="btn">📩 ESCRÍBENOS · LINK EN BIO</div>
    </div>
    <div class="foot"><p>Caso basado en información publicada por medios de comunicación. Contenido informativo y divulgativo, no sustituye una asesoría legal personalizada.</p></div>
  </div></body></html>`;
}

const slides = [slide1(), slide2(), slide3(), slide4(), slide5(), slide6(), slide7(), slide8()];

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
