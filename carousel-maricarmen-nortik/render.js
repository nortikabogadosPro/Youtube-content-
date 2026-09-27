const path = require('path');
const { W, H, INK, INK2, NAVY, CREAM, GOLD, OK, BAD, FONT, SERIF, PHOTO, PHOTO2, RESET, logoMark, brand, pageTag, eyebrow, card, outlineBtn, photoDuotone, renderSlides } = require('./theme.js');

// ---------------------------------------------------------------
// SLIDE 1 — HOOK (duotone portrait + text-only press clipping)
// ---------------------------------------------------------------
function slide1() {
  return `<html><head><meta charset="utf-8"><style>${RESET}
    .badge { position:absolute; top:60px; left:56px; z-index:9; display:flex; align-items:center; gap:10px; }
    .badge .led { width:8px; height:8px; border-radius:50%; background:${GOLD}; }
    .badge span { color:rgba(255,255,255,0.85); font-weight:700; letter-spacing:2px; font-size:13px; text-transform:uppercase; }
    .content { position:absolute; left:56px; right:56px; bottom:150px; z-index:9; }
    .kicker { color:${GOLD}; font-weight:700; letter-spacing:3px; font-size:15px; text-transform:uppercase; margin-bottom:20px; }
    h1 { font-family:${SERIF}; color:#fff; font-weight:700; font-size:78px; line-height:1.08; letter-spacing:-1px; }
    h1 .hl { color:${GOLD}; font-style:italic; }
    .sub { color:rgba(255,255,255,0.85); font-size:26px; font-weight:500; line-height:1.5; margin-top:26px; max-width:880px; }
    .cta { position:absolute; bottom:52px; left:56px; right:56px; z-index:9; display:flex; align-items:center; justify-content:space-between; }
    .pill { background:${GOLD}; color:${INK}; font-weight:700; letter-spacing:2px; font-size:14px; text-transform:uppercase; padding:17px 28px; border-radius:3px; }
    .who { display:flex; align-items:center; gap:10px; }
    .who span { color:rgba(255,255,255,0.55); font-weight:700; font-size:13px; letter-spacing:1.5px; }
    .clip { position:absolute; top:112px; right:56px; width:360px; background:${CREAM}; color:${NAVY};
      padding:20px 24px 18px; box-shadow:0 24px 40px rgba(0,0,0,0.45); z-index:8; font-family:${SERIF}; }
    .clip .alert { display:inline-block; background:#7a1f1f; color:#fff; font-family:${FONT}; font-weight:700; font-size:10px;
      letter-spacing:1.5px; padding:3px 9px; margin-bottom:9px; }
    .clip .src { font-size:11px; font-weight:700; letter-spacing:2px; text-transform:uppercase; color:#7a1f1f;
      margin-bottom:8px; font-family:${FONT}; }
    .clip .headline { font-size:18px; font-weight:700; line-height:1.3; }
    .clip .foot { margin-top:10px; font-size:12px; color:#666; font-style:italic; font-family:${FONT}; }
  </style></head><body><div class="stage">
    ${photoDuotone(PHOTO)}
    <div class="badge"><div class="led"></div><span>Análisis jurídico · Caso verificado</span></div>
    ${pageTag('01 / 08')}
    <div class="clip">
      <div class="alert">ÚLTIMA HORA</div>
      <div class="src">Portada nacional</div>
      <div class="headline">"Conmoción social y política por el desahucio de Maricarmen"</div>
      <div class="foot">— El País</div>
    </div>
    <div class="content">
      <div class="kicker">Esto acaba de pasar en Madrid</div>
      <h1>A los 87 años, la sacaron<br>de su casa en <span class="hl">camilla</span>.</h1>
      <div class="sub">71 años viviendo en el mismo piso. Y aun así, <b>era legal echarla</b>. Te explico cómo — y el detalle que casi nadie contó.</div>
    </div>
    <div class="cta"><div class="pill">Desliza y entérate →</div><div class="who">${logoMark('light', 24)}<span>NORTIK ABOGADOS</span></div></div>
  </div></body></html>`;
}

// ---------------------------------------------------------------
// SLIDE 2 — EL CASO
// ---------------------------------------------------------------
function slide2() {
  return `<html><head><meta charset="utf-8"><style>${RESET}
    .card2 { position:absolute; left:56px; right:56px; bottom:150px; z-index:5; }
    h1 { font-family:${SERIF}; color:#fff; font-weight:700; font-size:56px; line-height:1.14; letter-spacing:-0.5px; }
    h1 .hl { color:${GOLD}; font-style:italic; }
    .body { color:rgba(255,255,255,0.85); font-size:26px; font-weight:500; line-height:1.55; margin-top:28px; max-width:860px; }
    .body b { color:#fff; font-weight:700; }
    .yline { position:absolute; top:150px; left:56px; right:56px; z-index:5; display:flex; gap:36px; }
    .yline .y { text-align:center; }
    .yline .y .n { font-family:${SERIF}; font-size:34px; font-weight:700; color:#fff; }
    .yline .y .l { font-size:12px; font-weight:700; letter-spacing:1.5px; color:rgba(255,255,255,0.5); margin-top:4px; text-transform:uppercase; }
    .yline .arrow { color:${GOLD}; font-size:24px; align-self:center; }
  </style></head><body><div class="stage">
    ${photoDuotone(PHOTO, { tintOpacity: 0.86 })}
    ${brand()}
    ${pageTag('02 / 08')}
    <div class="yline">
      <div class="y"><div class="n">1956</div><div class="l">Firma el padre</div></div>
      <div class="arrow">→</div>
      <div class="y"><div class="n">1961</div><div class="l">Hereda la madre</div></div>
      <div class="arrow">→</div>
      <div class="y"><div class="n">2005</div><div class="l">Hereda Maricarmen</div></div>
    </div>
    <div class="card2">
      ${eyebrow('El caso')}
      <h1>Mari Carmen,<br><span class="hl">71 años</span> en la misma casa</h1>
      <div class="body">Vivía en el mismo piso de Madrid desde 1956. Tres generaciones, un mismo contrato de <b>renta antigua</b>: 500&nbsp;€/mes.</div>
    </div>
  </div></body></html>`;
}

// ---------------------------------------------------------------
// SLIDE 3 — EL GIRO ECONÓMICO (cream, hairline card)
// ---------------------------------------------------------------
function slide3() {
  return `<html><head><meta charset="utf-8"><style>${RESET}
    .stage { background:${CREAM}; }
    .top { position:absolute; top:150px; left:56px; right:56px; z-index:5; }
    h1 { font-family:${SERIF}; color:${NAVY}; font-weight:700; font-size:46px; line-height:1.22; letter-spacing:-0.3px; max-width:900px; }
    .lower { position:absolute; left:56px; right:56px; top:490px; z-index:5; }
    .statcard { border:1px solid rgba(27,46,59,0.18); border-radius:10px; padding:44px 40px; text-align:center; }
    .stat { display:flex; align-items:baseline; justify-content:center; gap:22px; }
    .stat .n { font-family:${SERIF}; font-weight:700; color:${NAVY}; font-size:54px; }
    .stat .n.now { color:#3f8a5f; font-size:64px; }
    .stat .arrow { color:#3f8a5f; font-size:32px; }
    .cap { color:rgba(27,46,59,0.55); font-weight:700; font-size:14px; letter-spacing:1.5px; text-transform:uppercase; margin-top:16px; }
    .foot { text-align:center; margin-top:34px; }
    .foot p { color:${NAVY}; font-weight:500; font-size:24px; font-family:${SERIF}; font-style:italic; }
  </style></head><body><div class="stage">
    ${brand('dark')}
    ${pageTag('03 / 08', 'rgba(27,46,59,0.45)')}
    <div class="top">
      ${eyebrow('Qué cambió', NAVY)}
      <h1>En 2018, un fondo de inversión compró el edificio por 247.000&nbsp;€. Años después le ofreció comprar su propio piso...</h1>
    </div>
    <div class="lower">
      <div class="statcard">
        <div class="stat"><div class="n">500&nbsp;€</div><div class="arrow">→</div><div class="n now">2.650&nbsp;€</div></div>
        <div class="cap">Su alquiler mensual, tras rechazar la oferta de compra</div>
      </div>
      <div class="foot"><p>Su pensión: 1.450&nbsp;€/mes.</p></div>
    </div>
  </div></body></html>`;
}

// ---------------------------------------------------------------
// SLIDE 4 — EL DETALLE LEGAL REAL
// ---------------------------------------------------------------
function slide4() {
  return `<html><head><meta charset="utf-8"><style>${RESET}
    .stage { background:${INK2}; }
    .center { position:absolute; left:56px; right:56px; top:150px; z-index:5; }
    h1 { font-family:${SERIF}; color:#fff; font-weight:700; font-size:48px; line-height:1.2; letter-spacing:-0.3px; }
    .body { color:rgba(255,255,255,0.82); font-size:24px; font-weight:500; line-height:1.55; margin-top:26px; max-width:900px; }
    .body b { color:#fff; font-weight:700; }
    .bignum { position:absolute; left:56px; right:56px; bottom:130px; z-index:5; display:flex; gap:1px; }
    .bn { flex:1; border:1px solid rgba(255,255,255,0.16); padding:34px 10px; text-align:center; }
    .bn .n { font-family:${SERIF}; font-size:52px; font-weight:700; color:#fff; }
    .bn.req .n { color:${GOLD}; }
    .bn .l { font-size:13px; font-weight:700; color:rgba(255,255,255,0.5); letter-spacing:1.5px; margin-top:8px; text-transform:uppercase; }
  </style></head><body><div class="stage">
    ${brand()}
    ${pageTag('04 / 08')}
    <div class="center">
      ${eyebrow('El detalle que casi nadie contó')}
      <h1>No fue (solo) por el precio del alquiler.</h1>
      <div class="body">Según los tribunales, su subrogación de 2005 <b>no cumplía un requisito legal</b>: para heredar un contrato de renta antigua sin ser cónyuge, la ley exige un grado de discapacidad reconocido igual o superior al 65&nbsp;%.</div>
    </div>
    <div class="bignum">
      <div class="bn"><div class="n">50%</div><div class="l">Su discapacidad reconocida</div></div>
      <div class="bn req"><div class="n">65%</div><div class="l">El mínimo que exige la ley</div></div>
    </div>
  </div></body></html>`;
}

// ---------------------------------------------------------------
// SLIDE 5 — EL PROCESO (timeline, refined)
// ---------------------------------------------------------------
function slide5() {
  const items = [
    ['Oct 2025', '1er intento de desahucio', 'La defensa lo frena durante 4 meses.'],
    ['Jun 2026', '2º intento', 'Aplazado por situación de vulnerabilidad.'],
    ['Sept 2026', 'Se ejecuta el desalojo', 'Con un fuerte despliegue policial y cientos de vecinos intentando impedirlo.'],
  ];
  const rows = items.map((it, i) => `
    <div style="display:flex; gap:28px; align-items:flex-start; ${i < items.length - 1 ? 'margin-bottom:46px;' : ''}">
      <div style="display:flex; flex-direction:column; align-items:center;">
        <div style="width:9px; height:9px; border-radius:50%; background:${GOLD}; flex:none; margin-top:8px;"></div>
        ${i < items.length - 1 ? `<div style="width:1px; flex:1; background:rgba(255,255,255,0.18); margin-top:10px; min-height:56px;"></div>` : ''}
      </div>
      <div>
        <div style="font-family:${SERIF}; color:${GOLD}; font-weight:700; font-size:20px; font-style:italic;">${it[0]}</div>
        <div style="color:#fff; font-weight:700; font-size:28px; margin-top:6px; letter-spacing:-0.3px;">${it[1]}</div>
        <div style="color:rgba(255,255,255,0.68); font-weight:500; font-size:21px; margin-top:8px; max-width:680px; line-height:1.4;">${it[2]}</div>
      </div>
    </div>`).join('');
  return `<html><head><meta charset="utf-8"><style>${RESET}
    .stage { background:${INK}; }
    .head { position:absolute; top:160px; left:56px; right:56px; z-index:5; }
    h1 { font-family:${SERIF}; color:#fff; font-weight:700; font-size:48px; line-height:1.12; letter-spacing:-0.3px; margin-top:14px; }
    .timeline { position:absolute; left:56px; right:56px; top:400px; z-index:5; }
    .closing { position:absolute; left:56px; right:56px; bottom:90px; z-index:5; border-top:1px solid rgba(255,255,255,0.16); padding-top:24px; }
    .closing p { color:rgba(255,255,255,0.78); font-weight:500; font-size:21px; line-height:1.5; font-style:italic; font-family:${SERIF}; }
    .closing p b { color:${GOLD}; font-style:normal; }
  </style></head><body><div class="stage">
    ${brand()}
    ${pageTag('05 / 08')}
    <div class="head">${eyebrow('El proceso judicial')}<h1>4 intentos de desahucio en un año</h1></div>
    <div class="timeline">${rows}</div>
    <div class="closing"><p><b>Casi un año</b> entre el primer intento y el desalojo final — el tiempo que un proceso judicial puede tardar en resolver algo tan básico como dónde vive una persona.</p></div>
  </div></body></html>`;
}

// ---------------------------------------------------------------
// SLIDE 6 — RENTA ANTIGUA (definition)
// ---------------------------------------------------------------
function slide6() {
  return `<html><head><meta charset="utf-8"><style>${RESET}
    .stage { background:${INK2}; }
    .center { position:absolute; left:56px; right:56px; top:50%; transform:translateY(-46%); z-index:5; }
    h1 { font-family:${SERIF}; color:#fff; font-weight:700; font-style:italic; font-size:52px; line-height:1.2; letter-spacing:-0.3px; }
    h1 .hl { color:${GOLD}; }
    .body { color:rgba(255,255,255,0.82); font-size:25px; font-weight:500; line-height:1.55; margin-top:30px; max-width:880px; }
    .body b { color:#fff; font-weight:700; }
  </style></head><body><div class="stage">
    ${brand()}
    ${pageTag('06 / 08')}
    <div class="center">
      ${eyebrow('Lo que debes saber')}
      <h1>"¿Qué es un contrato de <span class="hl">renta antigua</span>?"</h1>
      <div class="body">Alquileres firmados antes de 1995, con condiciones muy protegidas y renta casi congelada. Pueden <b>heredarse o subrogarse</b> entre familiares — pero las reglas para hacerlo llevan décadas cambiando, y lo que servía en 1961 puede no servir hoy.</div>
    </div>
  </div></body></html>`;
}

// ---------------------------------------------------------------
// SLIDE 7 — TUS DERECHOS (hairline cards)
// ---------------------------------------------------------------
function slide7() {
  const items = [
    [true, 'Se puede alegar vulnerabilidad social ante el juzgado.'],
    [true, 'Desde 2025, todo propietario debe intentar una conciliación previa (no solo los grandes tenedores).'],
    [false, 'Las protecciones reforzadas para "grandes tenedores" se recortaron en 2025.'],
    [false, 'Hoy no existe un "escudo antidesahucios" permanente tras su derogación en 2026.'],
  ];
  const rows = items.map(([ok, text]) => `
    <div style="display:flex; gap:20px; align-items:flex-start; border:1px solid ${ok ? 'rgba(143,199,166,0.35)' : 'rgba(217,83,79,0.3)'};
      border-radius:8px; padding:22px 24px; margin-bottom:14px;">
      <div style="flex:none; width:22px; height:22px; border:1.5px solid ${ok ? GOLD : BAD}; border-radius:50%;
        display:flex; align-items:center; justify-content:center; font-weight:700; font-size:13px; color:${ok ? GOLD : BAD};">${ok ? '✓' : '✕'}</div>
      <div style="color:#fff; font-weight:500; font-size:20px; line-height:1.4; padding-top:1px;">${text}</div>
    </div>`).join('');
  return `<html><head><meta charset="utf-8"><style>${RESET}
    .stage { background:${INK}; }
    .head { position:absolute; top:150px; left:56px; right:56px; z-index:5; }
    h1 { font-family:${SERIF}; color:#fff; font-weight:700; font-size:42px; line-height:1.16; letter-spacing:-0.3px; margin-top:14px; }
    .grid { position:absolute; left:56px; right:56px; top:440px; z-index:5; }
    .takeaway { position:absolute; left:56px; right:56px; bottom:90px; z-index:5; border-top:1px solid rgba(143,199,166,0.35); padding-top:22px; }
    .takeaway p { color:${GOLD}; font-weight:500; font-style:italic; font-family:${SERIF}; font-size:23px; line-height:1.4; }
  </style></head><body><div class="stage">
    ${brand()}
    ${pageTag('07 / 08')}
    <div class="head">${eyebrow('Tus derechos')}<h1>¿Qué protege — y qué NO — a un inquilino vulnerable?</h1></div>
    <div class="grid">${rows}</div>
    <div class="takeaway"><p>En resumen: la protección existe, pero es parcial, cambia cada año y depende de cómo se aplique a tiempo.</p></div>
  </div></body></html>`;
}

// ---------------------------------------------------------------
// SLIDE 8 — CIERRE REFLEXIVO (sin CTA comercial)
// ---------------------------------------------------------------
function slide8() {
  return `<html><head><meta charset="utf-8"><style>${RESET}
    .stage { background:${INK}; }
    .center { position:absolute; left:70px; right:70px; top:0; bottom:0; display:flex; flex-direction:column;
      align-items:center; justify-content:center; text-align:center; z-index:5; }
    h1 { font-family:${SERIF}; color:#fff; font-weight:700; font-style:italic; font-size:50px; line-height:1.2; letter-spacing:-0.3px; }
    h1 .hl { color:${GOLD}; }
    .statrow { display:flex; gap:1px; margin-top:44px; }
    .stat { border:1px solid rgba(255,255,255,0.16); padding:30px 34px; text-align:center; }
    .stat .n { font-family:${SERIF}; font-size:46px; font-weight:700; color:${GOLD}; }
    .stat .l { font-size:13px; font-weight:700; color:rgba(255,255,255,0.55); letter-spacing:1px; margin-top:8px; max-width:220px; text-transform:uppercase; }
    .credit { margin-top:48px; display:flex; align-items:center; gap:12px; }
    .credit span { color:rgba(255,255,255,0.55); font-weight:700; font-size:14px; letter-spacing:1.5px; }
    .foot { position:absolute; left:70px; right:70px; bottom:56px; z-index:5; text-align:center; }
    .foot p { color:rgba(255,255,255,0.4); font-size:15px; line-height:1.55; }
  </style></head><body><div class="stage">
    <div class="center">
      ${eyebrow('Para terminar')}
      <h1>Esto no es un caso <span class="hl">aislado</span>.</h1>
      <div class="statrow">
        <div class="stat"><div class="n">1,6%</div><div class="l">del parque de vivienda en España es alquiler social</div></div>
        <div class="stat"><div class="n">8%</div><div class="l">es la media de la Unión Europea</div></div>
      </div>
      <div class="credit">${logoMark('light', 22)}<span>ANÁLISIS: NORTIK ABOGADOS</span></div>
    </div>
    <div class="foot"><p>Caso basado en información publicada por medios de comunicación. Contenido informativo y divulgativo, no constituye asesoría legal personalizada.</p></div>
  </div></body></html>`;
}

const slides = [slide1(), slide2(), slide3(), slide4(), slide5(), slide6(), slide7(), slide8()];
renderSlides(slides, __dirname);
