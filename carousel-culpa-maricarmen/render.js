const path = require('path');
const T = require('../carousel-maricarmen-nortik/theme.js');
const { INK, INK2, NAVY, CREAM, GOLD, RESET, PHOTO, brand, pageTag, logoMark, renderSlides } = T;

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
    h1 { color:#fff; font-weight:900; font-size:66px; line-height:1.06; letter-spacing:-2px; }
    h1 .hl { color:${GOLD}; }
    .sub { color:rgba(255,255,255,0.92); font-size:29px; font-weight:600; line-height:1.42; margin-top:26px; max-width:900px; }
    .cta { position:absolute; bottom:52px; left:56px; right:56px; z-index:9; display:flex; align-items:center; justify-content:space-between; }
    .cta .pill { background:${GOLD}; color:${INK}; font-weight:900; letter-spacing:1.5px; font-size:20px; padding:18px 30px; border-radius:40px; }
    .cta .who { display:flex; align-items:center; gap:10px; }
    .cta .who span { color:rgba(255,255,255,0.6); font-weight:700; font-size:15px; letter-spacing:1.5px; }
  </style></head><body><div class="stage">
    <div class="bg"><img src="file://${PHOTO}"></div>
    <div class="vign"></div>
    <div class="badge"><div class="led"></div><span>ANÁLISIS JURÍDICO Y POLÍTICO</span></div>
    ${pageTag('01 / 08', 'rgba(255,255,255,0.6)')}
    <div class="content">
      <div class="kicker">El caso que divide a España</div>
      <h1>¿De quién es <span class="hl">la culpa</span> de que Mari Carmen acabara en la calle?</h1>
      <div class="sub">Todo el mundo señala a alguien distinto. Analizamos <b>5 versiones</b> — sin tomar partido, con los datos de cada una.</div>
    </div>
    <div class="cta"><div class="pill">DESLIZA Y COMPARA →</div><div class="who">${logoMark('light', 28)}<span>NORTIK ABOGADOS</span></div></div>
  </div></body></html>`;
}

// ---------------------------------------------------------------
// Reusable "hypothesis" slide: eyebrow + headline + pro/con cards
// ---------------------------------------------------------------
function hypothesisSlide({ num, total, tag, title, forLabel, forText, againstLabel, againstText, bg = INK }) {
  return `<html><head><meta charset="utf-8"><style>${RESET}
    .stage { background:${bg}; }
    .head { position:absolute; top:140px; left:56px; right:56px; z-index:5; }
    .eyebrow { display:inline-block; background:rgba(143,199,166,0.16); color:${GOLD}; font-weight:900; letter-spacing:3px;
      font-size:18px; padding:9px 18px; border-radius:8px; margin-bottom:24px; }
    h1 { color:#fff; font-weight:900; font-size:44px; line-height:1.15; letter-spacing:-1.5px; }
    .cards { position:absolute; left:56px; right:56px; top:490px; z-index:5; }
    .card { border-radius:20px; padding:28px 30px; margin-bottom:22px; }
    .card.for { background:rgba(143,199,166,0.12); border:1.5px solid rgba(143,199,166,0.35); }
    .card.against { background:rgba(255,255,255,0.05); border:1.5px solid rgba(255,255,255,0.16); }
    .card .lbl { font-weight:900; letter-spacing:2px; font-size:16px; margin-bottom:12px; }
    .card.for .lbl { color:${GOLD}; }
    .card.against .lbl { color:rgba(255,255,255,0.55); }
    .card p { color:#fff; font-weight:600; font-size:23px; line-height:1.42; }
  </style></head><body><div class="stage">
    ${brand()}
    ${pageTag(`0${num} / 0${total}`)}
    <div class="head">
      <div class="eyebrow">${tag}</div>
      <h1>${title}</h1>
    </div>
    <div class="cards">
      <div class="card for"><div class="lbl">${forLabel}</div><p>${forText}</p></div>
      <div class="card against"><div class="lbl">${againstLabel}</div><p>${againstText}</p></div>
    </div>
  </div></body></html>`;
}

// SLIDE 2 — HIPÓTESIS 1: EL FONDO DE INVERSIÓN
function slide2() {
  return hypothesisSlide({
    num: 2, total: 8,
    tag: 'HIPÓTESIS 1 · EL FONDO',
    title: 'Compró barato, ofreció comprarle su casa y subió la renta un 430&nbsp;%',
    forLabel: 'QUIENES LE CULPAN DICEN',
    forText: 'En 2018 pagó 247.000&nbsp;€ por el edificio. Al no aceptar ella la venta de su piso, le subió el alquiler de 500&nbsp;€ a 2.650&nbsp;€/mes — una cifra que sabía que no podía pagar.',
    againstLabel: 'QUIENES LO MATIZAN DICEN',
    againstText: 'Actuó dentro de la legalidad: la renta antigua permite actualizar el precio cuando la subrogación no cumple los requisitos legales. Es un fondo, no una ONG — su función es rentabilizar el activo.',
  });
}

// SLIDE 3 — HIPÓTESIS 2: LA POLÍTICA
function slide3() {
  return hypothesisSlide({
    num: 3, total: 8,
    tag: 'HIPÓTESIS 2 · EL CONGRESO',
    title: 'El decreto que la habría protegido cayó un mes antes',
    forLabel: 'QUIENES LE CULPAN DICEN',
    forText: 'En febrero de 2026, PP, Junts y Vox tumbaron el decreto que blindaba frente a desahucios a familias vulnerables sin alternativa habitacional. Sin ese decreto, el desalojo siguió su curso.',
    againstLabel: 'QUIENES LO MATIZAN DICEN',
    againstText: 'El decreto se cayó por un choque político entre Junts y el Gobierno, no por su contenido. Y aun sin él, el caso de Maricarmen no era por impago — su base legal era otra: la subrogación no válida.',
  });
}

// SLIDE 4 — HIPÓTESIS 3: EL TECNICISMO LEGAL
function slide4() {
  return hypothesisSlide({
    num: 4, total: 8,
    tag: 'HIPÓTESIS 3 · LA LEY, TAL CUAL ESTÁ ESCRITA',
    title: 'Un requisito del 65&nbsp;% de discapacidad que ella no alcanzaba',
    forLabel: 'QUIENES LE CULPAN DICEN',
    forText: 'La ley exige un 65&nbsp;% de discapacidad para heredar una renta antigua sin ser cónyuge. Ella tenía un 50&nbsp;%. Un umbral rígido, pensado hace décadas, decidió su caso.',
    againstLabel: 'QUIENES LO MATIZAN DICEN',
    againstText: 'La norma no es arbitraria: intenta limitar cuántas generaciones pueden heredar un alquiler congelado, para que existan viviendas disponibles en el mercado. El límite del 65&nbsp;% se aplica igual a todos los casos.',
  });
}

// SLIDE 5 — HIPÓTESIS 4: LA HERENCIA DE OTRA ÉPOCA (con el matiz histórico)
function slide5() {
  return hypothesisSlide({
    num: 5, total: 8,
    tag: 'HIPÓTESIS 4 · UN CONTRATO DE OTRA ESPAÑA',
    title: 'Un contrato de 1956 chocando con las reglas de 2026',
    forLabel: 'LO QUE MUCHOS ASUMEN',
    forText: 'Que el contrato original solo pudo estar a nombre de su padre porque en 1956 una mujer casada no podía firmar por sí sola actos con valor jurídico — la "licencia marital" no desapareció hasta 1975.',
    againstLabel: 'LO QUE DICE LA HISTORIA',
    againstText: 'Curiosamente, su madre SÍ heredó el contrato como viuda ya en 1961 — la ley de arrendamientos lo permitía. El problema no fue "una mujer no pudo firmar": fue una norma familiar de 1964 topándose con otra de 2023.',
  });
}

// SLIDE 6 — HIPÓTESIS 5: LA FALTA DE VIVIENDA PÚBLICA
function slide6() {
  return `<html><head><meta charset="utf-8"><style>${RESET}
    .stage { background:${CREAM}; }
    .head { position:absolute; top:140px; left:56px; right:56px; z-index:5; }
    .eyebrow { color:${NAVY}; font-weight:900; letter-spacing:3px; font-size:18px; opacity:0.65; }
    h1 { color:${NAVY}; font-weight:900; font-size:46px; line-height:1.12; letter-spacing:-1.5px; margin-top:16px; max-width:900px; }
    .statrow { position:absolute; left:56px; right:56px; top:480px; display:flex; gap:24px; z-index:5; }
    .stat { flex:1; background:${NAVY}; border-radius:20px; padding:34px 20px; text-align:center; }
    .stat .n { font-size:58px; font-weight:900; color:#fff; letter-spacing:-2px; }
    .stat.hl .n { color:${GOLD}; }
    .stat .l { font-size:15px; font-weight:700; color:rgba(255,255,255,0.65); letter-spacing:0.5px; margin-top:10px; }
    .body { position:absolute; left:56px; right:56px; top:700px; z-index:5; }
    .body p { color:${NAVY}; font-weight:600; font-size:26px; line-height:1.5; }
  </style></head><body><div class="stage">
    ${brand('dark')}
    ${pageTag('06 / 08', 'rgba(27,46,59,0.55)')}
    <div class="head">
      <div class="eyebrow">HIPÓTESIS 5 · EL MODELO ESPAÑOL</div>
      <h1>Sin colchón público, cualquier fallo termina en la calle</h1>
    </div>
    <div class="statrow">
      <div class="stat"><div class="n">1,6%</div><div class="l">VIVIENDA SOCIAL EN ESPAÑA</div></div>
      <div class="stat hl"><div class="n">30%</div><div class="l">VIVIENDA SOCIAL EN HOLANDA</div></div>
    </div>
    <div class="body"><p>Cuando no hay alternativa pública, un desahucio no tiene red debajo. En países con más vivienda social, el mismo conflicto legal casi nunca termina con alguien en la calle.</p></div>
  </div></body></html>`;
}

// SLIDE 7 — SÍNTESIS
function slide7() {
  return `<html><head><meta charset="utf-8"><style>${RESET}
    .stage { background:${INK2}; background-image: radial-gradient(rgba(143,199,166,0.09) 1.6px, transparent 1.6px);
      background-size: 30px 30px; }
    .center { position:absolute; left:56px; right:56px; top:200px; z-index:5; }
    .eyebrow { color:${GOLD}; font-weight:900; letter-spacing:3px; font-size:20px; text-transform:uppercase; margin-bottom:22px; }
    h1 { color:#fff; font-weight:900; font-size:54px; line-height:1.12; letter-spacing:-1.5px; }
    h1 .hl { color:${GOLD}; }
    .list { margin-top:36px; }
    .list div { display:flex; gap:14px; align-items:baseline; color:rgba(255,255,255,0.85); font-weight:600; font-size:23px;
      line-height:1.5; margin-bottom:12px; }
    .list b { color:${GOLD}; font-weight:900; }
    .body { color:rgba(255,255,255,0.8); font-size:25px; font-weight:600; line-height:1.5; margin-top:30px; max-width:900px; }
  </style></head><body><div class="stage">
    ${brand()}
    ${pageTag('07 / 08')}
    <div class="center">
      <div class="eyebrow">La síntesis</div>
      <h1>Puede que no haya <span class="hl">un solo culpable</span></h1>
      <div class="list">
        <div><b>01</b> Un fondo que actuó dentro de la ley, buscando rentabilidad.</div>
        <div><b>02</b> Una protección política que se cayó un mes antes.</div>
        <div><b>03</b> Un requisito legal rígido, pensado hace décadas.</div>
        <div><b>04</b> Un contrato heredado de otra generación.</div>
        <div><b>05</b> Un país con muy poca vivienda pública de respaldo.</div>
      </div>
      <div class="body">Cinco piezas distintas que, juntas, explican mejor el resultado que cualquiera de ellas por separado.</div>
    </div>
  </div></body></html>`;
}

// SLIDE 8 — CRÉDITO / DISCLAIMER (sin CTA comercial)
function slide8() {
  return `<html><head><meta charset="utf-8"><style>${RESET}
    .stage { background:radial-gradient(ellipse at 50% 78%, rgba(143,199,166,0.16) 0%, rgba(143,199,166,0) 55%), ${INK}; }
    .center { position:absolute; left:70px; right:70px; top:0; bottom:0; display:flex; flex-direction:column;
      align-items:center; justify-content:center; text-align:center; z-index:5; }
    h1 { color:#fff; font-weight:900; font-size:52px; line-height:1.12; letter-spacing:-1.5px; }
    h1 .hl { color:${GOLD}; }
    .sub { color:rgba(255,255,255,0.86); font-size:27px; font-weight:600; margin-top:24px; line-height:1.4; max-width:820px; }
    .credit { margin-top:46px; display:flex; align-items:center; gap:12px; }
    .credit span { color:rgba(255,255,255,0.6); font-weight:700; font-size:16px; letter-spacing:1.5px; }
    .foot { position:absolute; left:70px; right:70px; bottom:56px; z-index:5; text-align:center; }
    .foot p { color:rgba(255,255,255,0.45); font-size:16px; line-height:1.55; }
  </style></head><body><div class="stage">
    <div class="center">
      <h1>¿Y tú qué crees — <span class="hl">quién tiene más responsabilidad</span>?</h1>
      <div class="sub">Coméntalo. El objetivo de este análisis no es señalar, sino entender por qué un caso así es posible.</div>
      <div class="credit">${logoMark('light', 24)}<span>ANÁLISIS: NORTIK ABOGADOS</span></div>
    </div>
    <div class="foot"><p>Caso basado en información publicada por medios de comunicación. Análisis informativo y divulgativo, no constituye asesoría legal ni opinión política institucional.</p></div>
  </div></body></html>`;
}

const slides = [slide1(), slide2(), slide3(), slide4(), slide5(), slide6(), slide7(), slide8()];
renderSlides(slides, __dirname);
