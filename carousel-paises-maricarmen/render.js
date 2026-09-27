const path = require('path');
const T = require('../carousel-maricarmen-nortik/theme.js');
const { INK, INK2, NAVY, CREAM, GOLD, OK, RESET, PHOTO, brand, pageTag, logoMark, renderSlides } = T;

// ---------------------------------------------------------------
// SLIDE 1 — HOOK
// ---------------------------------------------------------------
function slide1() {
  return `<html><head><meta charset="utf-8"><style>${RESET}
    .bg { position:absolute; inset:0; overflow:hidden; background:${INK}; }
    .bg img { position:absolute; top:-330px; left:-40px; width:1160px; filter:blur(9px) grayscale(45%) brightness(0.45) contrast(1.05); transform:scale(1.05); }
    .vign { position:absolute; inset:0; background:
      linear-gradient(180deg, rgba(14,27,36,0.86) 0%, rgba(14,27,36,0.4) 26%, rgba(14,27,36,0.65) 58%, rgba(14,27,36,0.97) 92%); }
    .badge { position:absolute; top:60px; left:56px; z-index:9; display:flex; align-items:center; gap:10px;
      background:rgba(255,255,255,0.08); border:1px solid rgba(255,255,255,0.22); backdrop-filter:blur(4px);
      padding:10px 18px 10px 14px; border-radius:30px; }
    .badge .led { width:9px; height:9px; border-radius:50%; background:${GOLD}; box-shadow:0 0 10px ${GOLD}; }
    .badge span { color:#fff; font-weight:800; letter-spacing:1.5px; font-size:15px; }
    .content { position:absolute; left:56px; right:56px; bottom:150px; z-index:9; }
    .kicker { color:${GOLD}; font-weight:900; letter-spacing:3px; font-size:24px; text-transform:uppercase; margin-bottom:18px; }
    h1 { color:#fff; font-weight:900; font-size:70px; line-height:1.05; letter-spacing:-2.5px; }
    h1 .hl { color:${GOLD}; }
    .sub { color:rgba(255,255,255,0.92); font-size:29px; font-weight:600; line-height:1.42; margin-top:26px; max-width:900px; }
    .cta { position:absolute; bottom:52px; left:56px; right:56px; z-index:9; display:flex; align-items:center; justify-content:space-between; }
    .cta .pill { background:${GOLD}; color:${INK}; font-weight:900; letter-spacing:1.5px; font-size:20px; padding:18px 30px; border-radius:40px; }
    .cta .who { display:flex; align-items:center; gap:10px; }
    .cta .who span { color:rgba(255,255,255,0.6); font-weight:700; font-size:15px; letter-spacing:1.5px; }
  </style></head><body><div class="stage">
    <div class="bg"><img src="file://${PHOTO}"></div>
    <div class="vign"></div>
    <div class="badge"><div class="led"></div><span>ANÁLISIS COMPARADO</span></div>
    ${pageTag('01 / 08', 'rgba(255,255,255,0.6)')}
    <div class="content">
      <div class="kicker">Mismo caso, distinto país</div>
      <h1>En Francia, esto sería <span class="hl">ilegal</span>.</h1>
      <div class="sub">Juristas señalan que el desahucio de Mari Carmen sería casi impensable en gran parte de Europa. Vemos qué habría pasado en 4 países distintos.</div>
    </div>
    <div class="cta"><div class="pill">DESLIZA Y COMPARA →</div><div class="who">${logoMark('light', 28)}<span>NORTIK ABOGADOS</span></div></div>
  </div></body></html>`;
}

// ---------------------------------------------------------------
// SLIDE 2 — ESPAÑA HOY (bridge / recordatorio)
// ---------------------------------------------------------------
function slide2() {
  return `<html><head><meta charset="utf-8"><style>${RESET}
    .stage { background:${INK}; }
    .head { position:absolute; top:150px; left:56px; right:56px; z-index:5; }
    .eyebrow { color:${GOLD}; font-weight:900; letter-spacing:3px; font-size:20px; text-transform:uppercase; }
    h1 { color:#fff; font-weight:900; font-size:54px; line-height:1.1; letter-spacing:-1.5px; margin-top:16px; }
    .body { color:rgba(255,255,255,0.85); font-size:28px; font-weight:600; line-height:1.5; margin-top:26px; max-width:900px; }
    .verdict { position:absolute; left:56px; right:56px; bottom:120px; z-index:5; background:rgba(217,83,79,0.1);
      border:1.5px solid rgba(217,83,79,0.3); border-radius:20px; padding:30px 32px; }
    .verdict .lbl { color:#e08a86; font-weight:900; letter-spacing:2px; font-size:16px; margin-bottom:10px; }
    .verdict p { color:#fff; font-weight:700; font-size:25px; line-height:1.4; }
  </style></head><body><div class="stage">
    ${brand()}
    ${pageTag('02 / 08')}
    <div class="head">
      <div class="eyebrow">ESPAÑA, 2026</div>
      <h1>87 años, sin alternativa de vivienda, y aun así el desalojo siguió adelante</h1>
      <div class="body">La ley española permitía ejecutarlo: la subrogación no cumplía un requisito técnico, y no existía ninguna norma que obligara a garantizarle un techo antes de sacarla de su casa.</div>
    </div>
    <div class="verdict">
      <div class="lbl">EN ESPAÑA</div>
      <p>La vulnerabilidad frena el proceso — pero no lo puede parar de forma indefinida.</p>
    </div>
  </div></body></html>`;
}

// ---------------------------------------------------------------
// Reusable "country" slide
// ---------------------------------------------------------------
function countrySlide({ num, tag, title, body, verdictLabel, verdictText, verdictColor = GOLD, bg = INK2 }) {
  return `<html><head><meta charset="utf-8"><style>${RESET}
    .stage { background:${bg}; background-image: radial-gradient(rgba(143,199,166,0.08) 1.6px, transparent 1.6px);
      background-size: 30px 30px; }
    .head { position:absolute; top:150px; left:56px; right:56px; z-index:5; }
    .eyebrow { display:inline-block; background:rgba(143,199,166,0.16); color:${GOLD}; font-weight:900; letter-spacing:3px;
      font-size:18px; padding:9px 18px; border-radius:8px; margin-bottom:24px; }
    h1 { color:#fff; font-weight:900; font-size:50px; line-height:1.12; letter-spacing:-1.5px; }
    .body { color:rgba(255,255,255,0.85); font-size:27px; font-weight:600; line-height:1.5; margin-top:26px; max-width:900px; }
    .body b { color:#fff; }
    .verdict { position:absolute; left:56px; right:56px; bottom:120px; z-index:5; background:rgba(143,199,166,0.12);
      border:1.5px solid rgba(143,199,166,0.35); border-radius:20px; padding:30px 32px; }
    .verdict .lbl { color:${verdictColor}; font-weight:900; letter-spacing:2px; font-size:16px; margin-bottom:10px; }
    .verdict p { color:#fff; font-weight:700; font-size:25px; line-height:1.4; }
  </style></head><body><div class="stage">
    ${brand()}
    ${pageTag(`0${num} / 08`)}
    <div class="head">
      <div class="eyebrow">${tag}</div>
      <h1>${title}</h1>
      <div class="body">${body}</div>
    </div>
    <div class="verdict">
      <div class="lbl">${verdictLabel}</div>
      <p>${verdictText}</p>
    </div>
  </div></body></html>`;
}

// SLIDE 3 — FRANCIA
function slide3() {
  return countrySlide({
    num: 3,
    tag: 'FRANCIA',
    title: 'Prohibido desahuciar a mayores de 65 sin techo garantizado',
    body: 'La ley francesa impide expulsar a un inquilino de más de 65 años con recursos limitados si la administración no le garantiza antes un realojo adecuado y cercano. Además, ningún desahucio puede ejecutarse entre el 1 de noviembre y el 31 de marzo (la <b>trêve hivernale</b>).',
    verdictLabel: '¿HABRÍA EVITADO ESTE DESAHUCIO?',
    verdictText: 'Muy probablemente sí — Maricarmen (87 años, pensión limitada) encajaría directamente en esa protección.',
  });
}

// SLIDE 4 — ALEMANIA
function slide4() {
  return countrySlide({
    num: 4,
    tag: 'ALEMANIA',
    title: 'Un juez puede paralizar el desahucio "indefinidamente"',
    body: 'El Código Civil alemán incluye la cláusula de <b>extrema dureza (Härtefall)</b>: si el desalojo supone un perjuicio desproporcionado para una persona mayor o con discapacidad grave, el juez puede suspenderlo sin fecha. Y si aun así se ejecuta, la ley da hasta un año para buscar otra vivienda.',
    verdictLabel: '¿HABRÍA EVITADO ESTE DESAHUCIO?',
    verdictText: 'Probablemente — o como mínimo, lo habría alargado mucho más allá de un año.',
  });
}

// SLIDE 5 — ESTADOS UNIDOS (contraste)
function slide5() {
  return countrySlide({
    num: 5,
    tag: 'ESTADOS UNIDOS',
    title: 'Depende radicalmente de en qué calle vivas',
    body: 'En Nueva York o San Francisco, los mayores de 60 con más de un año en la vivienda tienen derecho a 60 días de preaviso y protección de "causa justa". Pero en muchos otros estados, un desahucio puede tramitarse en semanas, sin ninguna protección específica por edad.',
    verdictLabel: '¿HABRÍA EVITADO ESTE DESAHUCIO?',
    verdictText: 'En NY o SF, probablemente se habría alargado. En la mayoría de estados, no habría cambiado casi nada.',
    verdictColor: '#e0c95a',
  });
}

// SLIDE 6 — MODELO NÓRDICO (curiosidad extra)
function slide6() {
  return countrySlide({
    num: 6,
    tag: 'SUECIA · EL MODELO OPUESTO',
    title: 'Donde el alquiler no depende de un solo casero',
    body: 'Suecia gestiona buena parte de su vivienda de alquiler a través de compañías públicas municipales (<b>allmännyttan</b>), con listas de espera en vez de mercado libre. Un cambio de propietario privado, sencillamente, no puede dejarte sin casa de la noche a la mañana.',
    verdictLabel: 'LA DIFERENCIA DE FONDO',
    verdictText: 'No es solo una ley distinta — es un mercado del alquiler organizado de otra manera.',
  });
}

// ---------------------------------------------------------------
// SLIDE 7 — COMPARATIVA RESUMEN
// ---------------------------------------------------------------
function slide7() {
  const rows = [
    ['España', 'Sin protección específica por edad', BAD_ICON()],
    ['Francia', 'Prohibido sin realojo garantizado (65+)', OK_ICON()],
    ['Alemania', 'Un juez puede suspenderlo sin fecha', OK_ICON()],
    ['EE. UU.', 'Depende totalmente del estado/ciudad', MID_ICON()],
  ];
  function OK_ICON() { return `<div style="width:34px;height:34px;border-radius:50%;background:${OK};display:flex;align-items:center;justify-content:center;font-weight:900;color:#fff;font-size:18px;">✓</div>`; }
  function BAD_ICON() { return `<div style="width:34px;height:34px;border-radius:50%;background:#D9534F;display:flex;align-items:center;justify-content:center;font-weight:900;color:#fff;font-size:18px;">✕</div>`; }
  function MID_ICON() { return `<div style="width:34px;height:34px;border-radius:50%;background:#C9A24B;display:flex;align-items:center;justify-content:center;font-weight:900;color:${INK};font-size:16px;">~</div>`; }
  const rowsHtml = rows.map(([country, desc, icon]) => `
    <div style="display:flex; align-items:center; gap:22px; background:rgba(255,255,255,0.05); border:1.5px solid rgba(255,255,255,0.14);
      border-radius:16px; padding:22px 26px; margin-bottom:16px;">
      ${icon}
      <div style="flex:1;">
        <div style="color:#fff; font-weight:900; font-size:24px;">${country}</div>
        <div style="color:rgba(255,255,255,0.7); font-weight:600; font-size:19px; margin-top:4px;">${desc}</div>
      </div>
    </div>`).join('');
  return `<html><head><meta charset="utf-8"><style>${RESET}
    .stage { background:${INK}; }
    .head { position:absolute; top:140px; left:56px; right:56px; z-index:5; }
    .eyebrow { color:${GOLD}; font-weight:900; letter-spacing:3px; font-size:20px; text-transform:uppercase; }
    h1 { color:#fff; font-weight:900; font-size:46px; line-height:1.12; letter-spacing:-1.5px; margin-top:16px; }
    .rows { position:absolute; left:56px; right:56px; top:440px; z-index:5; }
  </style></head><body><div class="stage">
    ${brand()}
    ${pageTag('07 / 08')}
    <div class="head"><div class="eyebrow">DE UN VISTAZO</div><h1>Protección frente al desahucio para mayores vulnerables</h1></div>
    <div class="rows">${rowsHtml}</div>
  </div></body></html>`;
}

// ---------------------------------------------------------------
// SLIDE 8 — CIERRE REFLEXIVO + CRÉDITO
// ---------------------------------------------------------------
function slide8() {
  return `<html><head><meta charset="utf-8"><style>${RESET}
    .stage { background:radial-gradient(ellipse at 50% 78%, rgba(143,199,166,0.16) 0%, rgba(143,199,166,0) 55%), ${INK}; }
    .center { position:absolute; left:70px; right:70px; top:0; bottom:0; display:flex; flex-direction:column;
      align-items:center; justify-content:center; text-align:center; z-index:5; }
    h1 { color:#fff; font-weight:900; font-size:50px; line-height:1.14; letter-spacing:-1.5px; }
    h1 .hl { color:${GOLD}; }
    .sub { color:rgba(255,255,255,0.86); font-size:26px; font-weight:600; margin-top:24px; line-height:1.42; max-width:820px; }
    .credit { margin-top:46px; display:flex; align-items:center; gap:12px; }
    .credit span { color:rgba(255,255,255,0.6); font-weight:700; font-size:16px; letter-spacing:1.5px; }
    .foot { position:absolute; left:70px; right:70px; bottom:56px; z-index:5; text-align:center; }
    .foot p { color:rgba(255,255,255,0.45); font-size:16px; line-height:1.55; }
  </style></head><body><div class="stage">
    <div class="center">
      <h1>No es solo una pregunta legal.<br>Es <span class="hl">qué modelo de vivienda</span> elegimos.</h1>
      <div class="sub">Cada país decide, con sus leyes, cuánto pesa el derecho a un techo frente al derecho de propiedad. España, hoy, lo resuelve distinto a sus vecinos.</div>
      <div class="credit">${logoMark('light', 24)}<span>ANÁLISIS: NORTIK ABOGADOS</span></div>
    </div>
    <div class="foot"><p>Comparativa basada en información publicada por medios de comunicación y fuentes jurídicas citadas. Contenido informativo y divulgativo, no constituye asesoría legal.</p></div>
  </div></body></html>`;
}

const slides = [slide1(), slide2(), slide3(), slide4(), slide5(), slide6(), slide7(), slide8()];
renderSlides(slides, __dirname);
