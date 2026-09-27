const path = require('path');
const T = require('../carousel-maricarmen-nortik/theme.js');
const { INK, INK2, NAVY, CREAM, GOLD, BAD, OK, SERIF, PHOTO, brand, pageTag, eyebrow, card, logoMark, photoDuotone, renderSlides } = T;

// ---------------------------------------------------------------
// SLIDE 1 — HOOK
// ---------------------------------------------------------------
function slide1() {
  return `<html><head><meta charset="utf-8"><style>${T.RESET}
    .badge { position:absolute; top:60px; left:56px; z-index:9; display:flex; align-items:center; gap:10px; }
    .badge .led { width:8px; height:8px; border-radius:50%; background:${GOLD}; }
    .badge span { color:rgba(255,255,255,0.85); font-weight:700; letter-spacing:2px; font-size:13px; text-transform:uppercase; }
    .content { position:absolute; left:56px; right:56px; bottom:150px; z-index:9; }
    .kicker { color:${GOLD}; font-weight:700; letter-spacing:3px; font-size:15px; text-transform:uppercase; margin-bottom:20px; }
    h1 { font-family:${SERIF}; color:#fff; font-weight:700; font-size:68px; line-height:1.1; letter-spacing:-0.5px; }
    h1 .hl { color:${GOLD}; font-style:italic; }
    .sub { color:rgba(255,255,255,0.85); font-size:25px; font-weight:500; line-height:1.5; margin-top:26px; max-width:880px; }
    .cta { position:absolute; bottom:52px; left:56px; right:56px; z-index:9; display:flex; align-items:center; justify-content:space-between; }
    .pill { background:${GOLD}; color:${INK}; font-weight:700; letter-spacing:2px; font-size:14px; text-transform:uppercase; padding:17px 28px; border-radius:3px; }
    .who { display:flex; align-items:center; gap:10px; }
    .who span { color:rgba(255,255,255,0.55); font-weight:700; font-size:13px; letter-spacing:1.5px; }
  </style></head><body><div class="stage">
    ${photoDuotone(PHOTO)}
    <div class="badge"><div class="led"></div><span>Análisis comparado · 6 países</span></div>
    ${pageTag('01 / 10')}
    <div class="content">
      <div class="kicker">Mismo caso, seis países distintos</div>
      <h1>En Polonia, la ley la habría <span class="hl">protegido por su edad</span>.</h1>
      <div class="sub">El desahucio de Mari Carmen sería casi impensable en gran parte de Europa. Comparamos Alemania, Francia, Polonia, Holanda, Suecia y Noruega.</div>
    </div>
    <div class="cta"><div class="pill">Desliza y compara →</div><div class="who">${logoMark('light', 24)}<span>NORTIK ABOGADOS</span></div></div>
  </div></body></html>`;
}

// ---------------------------------------------------------------
// SLIDE 2 — ESPAÑA HOY (bridge)
// ---------------------------------------------------------------
function slide2() {
  return `<html><head><meta charset="utf-8"><style>${T.RESET}
    .stage { background:${INK}; }
    .head { position:absolute; top:150px; left:56px; right:56px; z-index:5; }
    h1 { font-family:${SERIF}; color:#fff; font-weight:700; font-size:48px; line-height:1.16; letter-spacing:-0.3px; margin-top:16px; }
    .body { color:rgba(255,255,255,0.82); font-size:25px; font-weight:500; line-height:1.5; margin-top:26px; max-width:900px; }
    .cardwrap { position:absolute; left:56px; right:56px; bottom:140px; z-index:5; }
  </style></head><body><div class="stage">
    ${brand()}
    ${pageTag('02 / 10')}
    <div class="head">
      ${eyebrow('España, 2026')}
      <h1>87 años, sin alternativa de vivienda, y el desalojo siguió adelante</h1>
      <div class="body">La ley española lo permitía: no existe ninguna norma que obligue a garantizarle un techo antes de sacarla de su casa.</div>
    </div>
    <div class="cardwrap">${card({ label: 'En España', text: 'La vulnerabilidad frena el proceso — pero no lo puede parar de forma indefinida.', tone: 'bad' })}</div>
  </div></body></html>`;
}

// ---------------------------------------------------------------
// Reusable "country" slide
// ---------------------------------------------------------------
function countrySlide({ num, flag, country, title, body, verdict, bg = INK2, dark = true }) {
  return `<html><head><meta charset="utf-8"><style>${T.RESET}
    .stage { background:${bg}; }
    .tag { position:absolute; top:60px; right:56px; font-family:${SERIF}; font-style:italic; font-weight:700; font-size:20px;
      color:${dark ? 'rgba(255,255,255,0.4)' : 'rgba(27,46,59,0.45)'}; z-index:9; }
    .head { position:absolute; top:150px; left:56px; right:56px; z-index:5; }
    h1 { font-family:${SERIF}; color:${dark ? '#fff' : NAVY}; font-weight:700; font-size:44px; line-height:1.16; letter-spacing:-0.3px; }
    .body { color:${dark ? 'rgba(255,255,255,0.82)' : 'rgba(27,46,59,0.75)'}; font-size:23px; font-weight:500; line-height:1.5; margin-top:24px; max-width:900px; }
    .body b { color:${dark ? '#fff' : NAVY}; font-weight:700; }
    .cardwrap { position:absolute; left:56px; right:56px; bottom:130px; z-index:5; }
  </style></head><body><div class="stage">
    ${brand(dark ? 'light' : 'dark')}
    <div class="tag">${country}</div>
    <div class="head">
      ${eyebrow(flag, dark ? GOLD : NAVY)}
      <h1>${title}</h1>
      <div class="body">${body}</div>
    </div>
    <div class="cardwrap">${card({ label: '¿Habría evitado este desahucio?', text: verdict, tone: dark ? 'accent' : 'onLight' })}</div>
  </div></body></html>`;
}

// SLIDE 3 — FRANCIA
function slide3() {
  return countrySlide({
    num: 3, flag: 'FRANCIA', country: 'Francia',
    title: 'Prohibido desahuciar a mayores de 65 sin techo garantizado',
    body: 'La ley francesa impide expulsar a un inquilino de más de 65 años con recursos limitados si la administración no le garantiza antes un realojo adecuado y cercano. Además, ningún desahucio puede ejecutarse entre el 1 de noviembre y el 31 de marzo (la <b>trêve hivernale</b>).',
    verdict: 'Muy probablemente sí — Maricarmen (87 años, pensión limitada) encajaría directamente en esa protección.',
    bg: INK,
  });
}

// SLIDE 4 — ALEMANIA
function slide4() {
  return countrySlide({
    num: 4, flag: 'ALEMANIA', country: 'Alemania',
    title: 'Un juez puede paralizar el desahucio "indefinidamente"',
    body: 'El Código Civil alemán incluye la cláusula de <b>extrema dureza (Härtefall)</b>: si el desalojo supone un perjuicio desproporcionado para una persona mayor o con discapacidad grave, el juez puede suspenderlo sin fecha. Y si aun así se ejecuta, la ley da hasta un año para buscar otra vivienda.',
    verdict: 'Probablemente — o como mínimo, lo habría alargado mucho más allá de un año.',
    bg: CREAM, dark: false,
  });
}

// SLIDE 5 — POLONIA
function slide5() {
  return countrySlide({
    num: 5, flag: 'POLONIA', country: 'Polonia',
    title: 'La ley protege explícitamente a los mayores de 75 años',
    body: 'Polonia prohíbe desahuciar "a la calle" sin ofrecer un local sustitutivo entre el 1 de noviembre y el 31 de marzo — y da protección reforzada y explícita a personas mayores de 75 años, embarazadas y personas con discapacidad, sin importar la época del año.',
    verdict: 'A sus 87 años, Maricarmen estaría en el grupo que la ley polaca protege por nombre propio.',
    bg: INK,
  });
}

// SLIDE 6 — HOLANDA
function slide6() {
  return countrySlide({
    num: 6, flag: 'HOLANDA', country: 'Países Bajos',
    title: 'Con un 30% de vivienda social, el mercado no depende de un solo casero',
    body: 'La "huurbescherming" holandesa impide subir la renta o desahuciar sin una causa muy concreta. Y con más del 30% del parque de vivienda siendo social (frente al 1,6% de España), el alquiler de precio limitado es la norma, no la excepción.',
    verdict: 'Muy difícil que una renta pasara de 500€ a 2.650€ de la noche a la mañana — y menos aún que acabara en desalojo.',
    bg: CREAM, dark: false,
  });
}

// SLIDE 7 — SUECIA
function slide7() {
  return countrySlide({
    num: 7, flag: 'SUECIA', country: 'Suecia',
    title: 'Donde el alquiler no depende de un solo propietario privado',
    body: 'Suecia gestiona buena parte de su vivienda de alquiler a través de compañías públicas municipales (<b>allmännyttan</b>), con listas de espera en vez de mercado libre. Un cambio de propietario, sencillamente, no puede dejarte sin casa de la noche a la mañana.',
    verdict: 'No es solo una ley distinta — es un mercado del alquiler organizado de otra manera.',
    bg: INK,
  });
}

// SLIDE 8 — NORUEGA
function slide8() {
  return countrySlide({
    num: 8, flag: 'NORUEGA', country: 'Noruega',
    title: 'Sin una regla dramática — pero con un sistema que reparte mejor',
    body: 'La ley noruega (Husleieloven) protege de forma general frente a desalojos injustificados y exige causa y preaviso claros. No tiene una cláusula tan específica como la francesa o la polaca — pero un mercado del alquiler más regulado y menos concentrado hace que casos como este sean, en la práctica, mucho más raros.',
    verdict: 'Es el recordatorio de que no todo protección se ve en una ley concreta: a veces está en cómo funciona el mercado entero.',
    bg: CREAM, dark: false,
  });
}

// ---------------------------------------------------------------
// SLIDE 9 — COMPARATIVA RESUMEN
// ---------------------------------------------------------------
function slide9() {
  const rows = [
    ['España', 'Sin protección específica por edad', 'bad'],
    ['Francia', 'Prohibido sin realojo garantizado (65+)', 'ok'],
    ['Alemania', 'Un juez puede suspenderlo sin fecha', 'ok'],
    ['Polonia', 'Protección explícita a partir de 75 años', 'ok'],
    ['Holanda', '30% de vivienda social amortigua el mercado', 'ok'],
    ['Suecia / Noruega', 'Modelo estructural, no solo una ley puntual', 'mid'],
  ];
  const icon = (t) => t === 'ok'
    ? `<div style="width:26px;height:26px;border:1.5px solid ${OK};border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:700;color:${OK};font-size:14px;">✓</div>`
    : t === 'bad'
    ? `<div style="width:26px;height:26px;border:1.5px solid ${BAD};border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:700;color:${BAD};font-size:14px;">✕</div>`
    : `<div style="width:26px;height:26px;border:1.5px solid ${GOLD};border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:700;color:${GOLD};font-size:13px;">~</div>`;
  const rowsHtml = rows.map(([country, desc, t]) => `
    <div style="display:flex; align-items:center; gap:22px; border-bottom:1px solid rgba(255,255,255,0.12); padding:20px 4px;">
      ${icon(t)}
      <div style="flex:1;">
        <div style="color:#fff; font-family:${SERIF}; font-weight:700; font-size:22px;">${country}</div>
        <div style="color:rgba(255,255,255,0.65); font-weight:500; font-size:18px; margin-top:3px;">${desc}</div>
      </div>
    </div>`).join('');
  return `<html><head><meta charset="utf-8"><style>${T.RESET}
    .stage { background:${INK}; }
    .head { position:absolute; top:140px; left:56px; right:56px; z-index:5; }
    h1 { font-family:${SERIF}; color:#fff; font-weight:700; font-size:42px; line-height:1.16; letter-spacing:-0.3px; margin-top:16px; }
    .rows { position:absolute; left:56px; right:56px; top:400px; z-index:5; }
  </style></head><body><div class="stage">
    ${brand()}
    ${pageTag('09 / 10')}
    <div class="head">${eyebrow('De un vistazo')}<h1>Protección frente al desahucio de mayores vulnerables</h1></div>
    <div class="rows">${rowsHtml}</div>
  </div></body></html>`;
}

// ---------------------------------------------------------------
// SLIDE 10 — CIERRE REFLEXIVO + CRÉDITO
// ---------------------------------------------------------------
function slide10() {
  return `<html><head><meta charset="utf-8"><style>${T.RESET}
    .stage { background:${INK}; }
    .center { position:absolute; left:70px; right:70px; top:0; bottom:0; display:flex; flex-direction:column;
      align-items:center; justify-content:center; text-align:center; z-index:5; }
    h1 { font-family:${SERIF}; color:#fff; font-weight:700; font-style:italic; font-size:46px; line-height:1.22; letter-spacing:-0.3px; }
    h1 .hl { color:${GOLD}; }
    .sub { color:rgba(255,255,255,0.8); font-size:24px; font-weight:500; margin-top:24px; line-height:1.45; max-width:820px; }
    .credit { margin-top:46px; display:flex; align-items:center; gap:12px; }
    .credit span { color:rgba(255,255,255,0.55); font-weight:700; font-size:14px; letter-spacing:1.5px; }
    .foot { position:absolute; left:70px; right:70px; bottom:56px; z-index:5; text-align:center; }
    .foot p { color:rgba(255,255,255,0.4); font-size:15px; line-height:1.55; }
  </style></head><body><div class="stage">
    <div class="center">
      <h1>No es solo una pregunta legal.<br>Es <span class="hl">qué modelo de vivienda</span> elegimos.</h1>
      <div class="sub">Cada país decide, con sus leyes, cuánto pesa el derecho a un techo frente al derecho de propiedad. España, hoy, lo resuelve distinto a sus vecinos.</div>
      <div class="credit">${logoMark('light', 22)}<span>ANÁLISIS: NORTIK ABOGADOS</span></div>
    </div>
    <div class="foot"><p>Comparativa basada en información publicada por medios de comunicación y fuentes jurídicas citadas. Contenido informativo y divulgativo, no constituye asesoría legal.</p></div>
  </div></body></html>`;
}

const slides = [slide1(), slide2(), slide3(), slide4(), slide5(), slide6(), slide7(), slide8(), slide9(), slide10()];
renderSlides(slides, __dirname);
