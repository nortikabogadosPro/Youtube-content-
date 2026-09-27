const path = require('path');
const T = require('../carousel-maricarmen-nortik/theme.js');
const { INK, INK2, NAVY, CREAM, GOLD, SERIF, PHOTO, brand, pageTag, eyebrow, card, logoMark, photoDuotone, renderSlides } = T;

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
    h1 { font-family:${SERIF}; color:#fff; font-weight:700; font-size:62px; line-height:1.14; letter-spacing:-0.5px; }
    h1 .hl { color:${GOLD}; font-style:italic; }
    .sub { color:rgba(255,255,255,0.85); font-size:25px; font-weight:500; line-height:1.5; margin-top:26px; max-width:880px; }
    .cta { position:absolute; bottom:52px; left:56px; right:56px; z-index:9; display:flex; align-items:center; justify-content:space-between; }
    .pill { background:${GOLD}; color:${INK}; font-weight:700; letter-spacing:2px; font-size:14px; text-transform:uppercase; padding:17px 28px; border-radius:3px; }
    .who { display:flex; align-items:center; gap:10px; }
    .who span { color:rgba(255,255,255,0.55); font-weight:700; font-size:13px; letter-spacing:1.5px; }
  </style></head><body><div class="stage">
    ${photoDuotone(PHOTO)}
    <div class="badge"><div class="led"></div><span>Análisis jurídico e histórico</span></div>
    ${pageTag('01 / 08')}
    <div class="content">
      <div class="kicker">5 décadas, 5 responsables distintos</div>
      <h1>Cada época tiene <span class="hl">un culpable</span> distinto.</h1>
      <div class="sub">1956, 1994, 2018, 2023, 2026 — cinco momentos, cinco decisiones que, sumadas, la dejaron en la calle. Analizamos cada una, sin quedarnos con ninguna.</div>
    </div>
    <div class="cta"><div class="pill">Desliza por la línea de tiempo →</div><div class="who">${logoMark('light', 24)}<span>NORTIK ABOGADOS</span></div></div>
  </div></body></html>`;
}

// ---------------------------------------------------------------
// Reusable "era" slide
// ---------------------------------------------------------------
function eraSlide({ num, era, tag, title, cards, bg = INK, dark = true }) {
  const eyeColor = dark ? GOLD : NAVY;
  const cardsHtml = cards.map(c => card({ ...c, tone: dark ? c.tone : 'onLight' })).join('');
  return `<html><head><meta charset="utf-8"><style>${T.RESET}
    .stage { background:${bg}; }
    .era { position:absolute; top:60px; right:56px; font-family:${SERIF}; font-style:italic; font-weight:700;
      font-size:20px; color:${dark ? 'rgba(255,255,255,0.4)' : 'rgba(27,46,59,0.45)'}; z-index:9; }
    .head { position:absolute; top:150px; left:56px; right:56px; z-index:5; }
    h1 { font-family:${SERIF}; color:${dark ? '#fff' : NAVY}; font-weight:700; font-size:44px; line-height:1.18; letter-spacing:-0.3px; }
    .cards { position:absolute; left:56px; right:56px; top:${cards.length > 1 ? 460 : 520}px; z-index:5; }
  </style></head><body><div class="stage">
    ${brand(dark ? 'light' : 'dark')}
    <div class="era">${era}</div>
    <div class="head">${eyebrow(tag, eyeColor)}<h1>${title}</h1></div>
    <div class="cards">${cardsHtml}</div>
  </div></body></html>`;
}

// SLIDE 2 — ERA 1956–1975: EL CONTEXTO DE OTRA ESPAÑA
function slide2() {
  return eraSlide({
    num: 2, era: '1956 — 1975', tag: 'PRIMER SOSPECHOSO · UNA ÉPOCA ENTERA',
    title: 'El contrato nació en la España en la que una mujer casada necesitaba permiso para firmar',
    bg: INK,
    cards: [
      { label: 'Lo que muchos asumen', text: 'Que el contrato de 1956 solo pudo estar a nombre del padre porque una mujer casada no podía firmar actos jurídicos sin autorización — la "licencia marital" no desapareció hasta 1975.', tone: 'neutral' },
      { label: 'Lo que dice la historia', text: 'Curiosamente, su madre SÍ heredó el contrato como viuda ya en 1961 — la ley de arrendamientos se lo permitía. El machismo legal era real, pero no fue lo que le impidió heredar la casa.', tone: 'accent' },
    ],
  });
}

// SLIDE 3 — ERA 1994: LA LEY QUE FIJÓ LAS REGLAS
function slide3() {
  return eraSlide({
    num: 3, era: '1994', tag: 'SEGUNDO SOSPECHOSO · LA LETRA PEQUEÑA',
    title: 'La ley que decidió, 30 años antes, cómo terminaría este caso',
    bg: CREAM, dark: false,
    cards: [
      { label: 'El requisito que nadie recuerda', text: 'La Ley de Arrendamientos Urbanos de 1994 exige un 65% de discapacidad reconocida para heredar una renta antigua sin ser cónyuge. Maricarmen tenía un 50%. Una cifra fijada tres décadas antes decidió su caso.', tone: 'neutral' },
    ],
  });
}

// SLIDE 4 — ERA 2018: ENTRA EL FONDO
function slide4() {
  return eraSlide({
    num: 4, era: '2018', tag: 'TERCER SOSPECHOSO · EL MERCADO',
    title: 'Un fondo compra el edificio por 247.000€ — y años después sube la renta un 430%',
    bg: INK,
    cards: [
      { label: 'La versión que le acusa', text: 'Compró barato un edificio con inquilinos de renta antigua, le ofreció comprarle su piso y, al negarse, subió el alquiler de 500€ a 2.650€/mes.', tone: 'neutral' },
      { label: 'El matiz', text: 'Actuó dentro de la legalidad vigente: la ley permite actualizar la renta cuando la subrogación no cumple los requisitos. Es un fondo, no una ONG.', tone: 'accent' },
    ],
  });
}

// SLIDE 5 — ERA 2023–2025: LA LEY QUE SE RECORTÓ
function slide5() {
  return eraSlide({
    num: 5, era: '2023 — 2025', tag: 'CUARTO SOSPECHOSO · LA PROTECCIÓN QUE SE DEBILITÓ',
    title: 'Una ley pensada para protegerla — recortada un año antes de su desahucio',
    bg: INK,
    cards: [
      { label: 'Lo que existía', text: 'La Ley de Vivienda de 2023 obligaba a los "grandes tenedores" a acreditar la vulnerabilidad del inquilino y pasar por conciliación antes de desahuciar.', tone: 'neutral' },
      { label: 'Lo que cambió', text: 'En 2025 se eliminaron esos dos requisitos específicos para grandes tenedores, sustituidos por una conciliación general para todos los propietarios — más amplia, pero también más débil en este tipo de casos.', tone: 'accent' },
    ],
  });
}

// SLIDE 6 — ERA FEB 2026: EL DECRETO QUE CAYÓ
function slide6() {
  return eraSlide({
    num: 6, era: 'FEBRERO 2026', tag: 'QUINTO SOSPECHOSO · UN MES DE DIFERENCIA',
    title: 'El decreto que la habría protegido cayó 30 días antes del desalojo',
    bg: CREAM, dark: false,
    cards: [
      { label: 'Lo que pasó', text: 'PP, Junts y Vox tumbaron el decreto que blindaba frente a desahucios a familias vulnerables sin alternativa habitacional — por 177 votos en contra, 172 a favor.', tone: 'neutral' },
    ],
  });
}

// SLIDE 7 — SÍNTESIS
function slide7() {
  return `<html><head><meta charset="utf-8"><style>${T.RESET}
    .stage { background:${INK2}; }
    .center { position:absolute; left:56px; right:56px; top:190px; z-index:5; }
    h1 { font-family:${SERIF}; color:#fff; font-weight:700; font-style:italic; font-size:50px; line-height:1.16; letter-spacing:-0.3px; }
    h1 .hl { color:${GOLD}; }
    .list { margin-top:38px; }
    .list div { display:flex; gap:20px; align-items:baseline; color:rgba(255,255,255,0.85); font-weight:500; font-size:21px;
      line-height:1.5; margin-bottom:16px; border-bottom:1px solid rgba(255,255,255,0.1); padding-bottom:16px; }
    .list .y { font-family:${SERIF}; font-style:italic; color:${GOLD}; font-weight:700; font-size:20px; min-width:130px; }
    .body { color:rgba(255,255,255,0.78); font-size:23px; font-weight:500; line-height:1.5; margin-top:26px; max-width:900px; font-style:italic; font-family:${SERIF}; }
  </style></head><body><div class="stage">
    ${brand()}
    ${pageTag('07 / 08')}
    <div class="center">
      ${eyebrow('La síntesis')}
      <h1>Cinco épocas. <span class="hl">Un mismo desenlace.</span></h1>
      <div class="list">
        <div><div class="y">1956–75</div>Un contrato nacido en la España de la licencia marital.</div>
        <div><div class="y">1994</div>Una ley que fijó un umbral que ella no alcanzaba.</div>
        <div><div class="y">2018</div>Un fondo que vio una oportunidad de mercado.</div>
        <div><div class="y">2023–25</div>Una protección que se debilitó justo antes de necesitarla.</div>
        <div><div class="y">2026</div>Un decreto que faltó por 30 días.</div>
      </div>
      <div class="body">Ninguna década, por sí sola, la habría desahuciado. Juntas, sí.</div>
    </div>
  </div></body></html>`;
}

// SLIDE 8 — CRÉDITO / DISCLAIMER (sin CTA comercial)
function slide8() {
  return `<html><head><meta charset="utf-8"><style>${T.RESET}
    .stage { background:${INK}; }
    .center { position:absolute; left:70px; right:70px; top:0; bottom:0; display:flex; flex-direction:column;
      align-items:center; justify-content:center; text-align:center; z-index:5; }
    h1 { font-family:${SERIF}; color:#fff; font-weight:700; font-style:italic; font-size:46px; line-height:1.2; letter-spacing:-0.3px; }
    h1 .hl { color:${GOLD}; }
    .sub { color:rgba(255,255,255,0.8); font-size:24px; font-weight:500; margin-top:24px; line-height:1.45; max-width:820px; }
    .credit { margin-top:46px; display:flex; align-items:center; gap:12px; }
    .credit span { color:rgba(255,255,255,0.55); font-weight:700; font-size:14px; letter-spacing:1.5px; }
    .foot { position:absolute; left:70px; right:70px; bottom:56px; z-index:5; text-align:center; }
    .foot p { color:rgba(255,255,255,0.4); font-size:15px; line-height:1.55; }
  </style></head><body><div class="stage">
    <div class="center">
      <h1>¿Y tú qué crees — <span class="hl">qué época tiene más responsabilidad</span>?</h1>
      <div class="sub">Coméntalo. El objetivo de este análisis no es señalar, sino entender por qué un caso así es posible.</div>
      <div class="credit">${logoMark('light', 22)}<span>ANÁLISIS: NORTIK ABOGADOS</span></div>
    </div>
    <div class="foot"><p>Caso basado en información publicada por medios de comunicación. Análisis informativo y divulgativo, no constituye asesoría legal ni opinión política institucional.</p></div>
  </div></body></html>`;
}

const slides = [slide1(), slide2(), slide3(), slide4(), slide5(), slide6(), slide7(), slide8()];
renderSlides(slides, __dirname);
