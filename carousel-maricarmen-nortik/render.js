const path = require('path');
const { W, H, INK, INK2, NAVY, CREAM, GOLD, OK, BAD, FONT, PHOTO, PHOTO2, RESET, logoMark, brand, pageTag, renderSlides } = require('./theme.js');

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
    <div class="badge"><div class="led"></div><span>ANÁLISIS JURÍDICO · CASO VERIFICADO</span></div>
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
      <div class="sub">71 años viviendo en el mismo piso. Y aun así, <b>era legal echarla</b>. Te explico cómo — y el detalle que casi nadie contó.</div>
    </div>
    <div class="cta"><div class="pill">DESLIZA Y ENTÉRATE →</div><div class="who">${logoMark('light', 28)}<span>NORTIK ABOGADOS</span></div></div>
  </div></body></html>`;
}

// ---------------------------------------------------------------
// SLIDE 2 — EL CASO (diagonal ribbon + ghost numeral)
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
    .eyebrow { display:inline-block; background:rgba(143,199,166,0.18); color:${GOLD}; font-weight:900; letter-spacing:3px;
      font-size:20px; padding:9px 18px; border-radius:8px; margin-bottom:28px; }
    h1 { color:#fff; font-weight:900; font-size:76px; line-height:1.03; letter-spacing:-2px; text-shadow:0 4px 24px rgba(0,0,0,0.4); }
    h1 .hl { color:${GOLD}; }
    .body { color:rgba(255,255,255,0.92); font-size:33px; font-weight:600; line-height:1.5; margin-top:30px; max-width:880px; }
    .body b { color:#fff; }
  </style></head><body><div class="stage">
    <div class="bg"><img src="file://${PHOTO2}"></div>
    <div class="vign"></div>
    ${brand()}
    ${pageTag('02 / 08')}
    <div class="ribbon"></div>
    <div class="ghost">87</div>
    <div class="card">
      <div class="eyebrow">EL CASO</div>
      <h1>Mari Carmen,<br><span class="hl">71 años</span> en la<br>misma casa</h1>
      <div class="body">Vivía en el mismo piso de Madrid desde <b>1956</b>, cuando su padre firmó el contrato. Su madre lo heredó en 1961; ella, en 2005. Tres generaciones, un mismo contrato de <b>renta antigua</b>: 500&nbsp;€/mes.</div>
    </div>
  </div></body></html>`;
}

// ---------------------------------------------------------------
// SLIDE 3 — EL GIRO ECONÓMICO (cream block + rotated navy stat card)
// ---------------------------------------------------------------
function slide3() {
  return `<html><head><meta charset="utf-8"><style>${RESET}
    .stage { background:${CREAM}; }
    .top { position:absolute; top:150px; left:56px; right:56px; z-index:5; }
    .eyebrow { color:${NAVY}; font-weight:900; letter-spacing:3px; font-size:20px; opacity:0.65; }
    h1 { color:${NAVY}; font-weight:900; font-size:58px; line-height:1.06; letter-spacing:-2px; margin-top:18px; max-width:860px; }
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
    .foot p { color:${NAVY}; font-weight:800; font-size:30px; line-height:1.4; }
  </style></head><body><div class="stage">
    ${brand('dark')}
    ${pageTag('03 / 08', 'rgba(27,46,59,0.55)')}
    <div class="top">
      <div class="eyebrow">QUÉ CAMBIÓ</div>
      <h1>En 2018, un fondo de inversión compró el edificio por 247.000&nbsp;€. Años después le ofreció comprar su propio piso...</h1>
    </div>
    <div class="lower">
      <div class="card">
        <div class="stat"><div class="num">500&nbsp;€</div><div class="arrow">→</div><div class="num now">2.650&nbsp;€</div></div>
        <div class="cap">SU ALQUILER MENSUAL, TRAS RECHAZAR LA OFERTA DE COMPRA</div>
      </div>
      <div class="foot"><p>Su pensión: 1.450&nbsp;€/mes.</p></div>
    </div>
  </div></body></html>`;
}

// ---------------------------------------------------------------
// SLIDE 4 — EL DETALLE LEGAL REAL (el motivo que casi nadie contó)
// ---------------------------------------------------------------
function slide4() {
  return `<html><head><meta charset="utf-8"><style>${RESET}
    .stage { background:${INK2}; background-image: radial-gradient(rgba(143,199,166,0.09) 1.6px, transparent 1.6px);
      background-size: 30px 30px; }
    .tag { position:absolute; top:150px; left:56px; display:inline-block; background:rgba(143,199,166,0.16); color:${GOLD};
      font-weight:900; letter-spacing:3px; font-size:18px; padding:10px 20px; border-radius:8px; z-index:5; }
    .center { position:absolute; left:56px; right:56px; top:236px; z-index:5; }
    h1 { color:#fff; font-weight:900; font-size:54px; line-height:1.1; letter-spacing:-1.5px; }
    h1 .hl { color:${GOLD}; }
    .body { color:rgba(255,255,255,0.88); font-size:29px; font-weight:600; line-height:1.5; margin-top:26px; max-width:900px; }
    .body b { color:#fff; }
    .bignum { position:absolute; left:56px; right:56px; bottom:120px; z-index:5; display:flex; gap:24px; align-items:center; }
    .bn { flex:1; background:rgba(255,255,255,0.05); border:1.5px solid rgba(255,255,255,0.14); border-radius:20px;
      padding:30px 10px; text-align:center; }
    .bn .n { font-size:56px; font-weight:900; color:#fff; letter-spacing:-2px; }
    .bn.req .n { color:${GOLD}; }
    .bn .l { font-size:15px; font-weight:700; color:rgba(255,255,255,0.55); letter-spacing:1px; margin-top:6px; }
  </style></head><body><div class="stage">
    ${brand()}
    ${pageTag('04 / 08')}
    <div class="tag">EL DETALLE QUE CASI NADIE CONTÓ</div>
    <div class="center">
      <h1>No fue (solo) por el precio del alquiler.</h1>
      <div class="body">Según los tribunales, su subrogación de 2005 <b>no cumplía un requisito legal</b>: para heredar un contrato de renta antigua sin ser cónyuge, la ley exige un grado de discapacidad reconocido igual o superior al 65&nbsp;%.</div>
    </div>
    <div class="bignum">
      <div class="bn"><div class="n">50%</div><div class="l">SU DISCAPACIDAD RECONOCIDA</div></div>
      <div class="bn req"><div class="n">65%</div><div class="l">EL MÍNIMO QUE EXIGE LA LEY</div></div>
    </div>
  </div></body></html>`;
}

// ---------------------------------------------------------------
// SLIDE 5 — EL PROCESO (vertical timeline)
// ---------------------------------------------------------------
function slide5() {
  const items = [
    ['OCT 2025', '1er intento de desahucio', 'La defensa lo frena durante 4 meses.'],
    ['JUN 2026', '2º intento', 'Aplazado por situación de vulnerabilidad.'],
    ['SEPT 2026', 'Se ejecuta el desalojo', 'Con un fuerte despliegue policial y cientos de vecinos intentando impedirlo.'],
  ];
  const rows = items.map((it, i) => `
    <div style="display:flex; gap:28px; align-items:flex-start; ${i < items.length - 1 ? 'margin-bottom:64px;' : ''}">
      <div style="display:flex; flex-direction:column; align-items:center;">
        <div style="width:22px; height:22px; border-radius:50%; background:${GOLD}; box-shadow:0 0 0 6px rgba(143,199,166,0.2); flex:none;"></div>
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
    .ghost-ico { position:absolute; top:-60px; right:-50px; font-size:420px; color:rgba(143,199,166,0.05); z-index:1;
      font-weight:900; transform:rotate(12deg); }
    .head { position:absolute; top:170px; left:56px; right:56px; z-index:5; }
    .eyebrow { color:${GOLD}; font-weight:900; letter-spacing:3px; font-size:20px; text-transform:uppercase; }
    h1 { color:#fff; font-weight:900; font-size:58px; line-height:1.05; letter-spacing:-2px; margin-top:16px; }
    .timeline { position:absolute; left:56px; right:56px; top:430px; z-index:5; }
    .closing { position:absolute; left:56px; right:56px; bottom:86px; z-index:5; background:rgba(143,199,166,0.1);
      border:1.5px solid rgba(143,199,166,0.3); border-radius:18px; padding:28px 30px; }
    .closing p { color:rgba(255,255,255,0.85); font-weight:700; font-size:22px; line-height:1.45; }
    .closing p b { color:${GOLD}; }
  </style></head><body><div class="stage">
    <div class="ghost-ico">⚖</div>
    ${brand()}
    ${pageTag('05 / 08')}
    <div class="head"><div class="eyebrow">EL PROCESO JUDICIAL</div><h1>4 intentos de<br>desahucio en un año</h1></div>
    <div class="timeline">${rows}</div>
    <div class="closing"><p><b>Casi un año</b> entre el primer intento y el desalojo final — el tiempo que un proceso judicial puede tardar en resolver algo tan básico como dónde vive una persona.</p></div>
  </div></body></html>`;
}

// ---------------------------------------------------------------
// SLIDE 6 — RENTA ANTIGUA (definition / pull-quote, dot-grid bg)
// ---------------------------------------------------------------
function slide6() {
  return `<html><head><meta charset="utf-8"><style>${RESET}
    .stage { background:${INK2}; background-image: radial-gradient(rgba(143,199,166,0.09) 1.6px, transparent 1.6px);
      background-size: 30px 30px; }
    .quote { position:absolute; top:220px; left:56px; font-size:220px; color:${GOLD}; opacity:0.28; font-weight:900; line-height:0.5; }
    .quote2 { position:absolute; bottom:170px; right:56px; font-size:220px; color:${GOLD}; opacity:0.18; font-weight:900;
      line-height:0.5; transform:rotate(180deg); }
    .center { position:absolute; left:56px; right:56px; top:50%; transform:translateY(-46%); z-index:5; }
    .eyebrow { color:${GOLD}; font-weight:900; letter-spacing:3px; font-size:20px; text-transform:uppercase; margin-bottom:22px; }
    h1 { color:#fff; font-weight:900; font-size:62px; line-height:1.08; letter-spacing:-2px; }
    h1 .hl { color:${GOLD}; }
    .body { color:rgba(255,255,255,0.85); font-size:30px; font-weight:600; line-height:1.5; margin-top:30px; max-width:900px; }
    .body b { color:#fff; }
  </style></head><body><div class="stage">
    ${brand()}
    ${pageTag('06 / 08')}
    <div class="quote">&ldquo;</div>
    <div class="quote2">&ldquo;</div>
    <div class="center">
      <div class="eyebrow">LO QUE DEBES SABER</div>
      <h1>¿Qué es un contrato<br>de <span class="hl">"renta antigua"</span>?</h1>
      <div class="body">Alquileres firmados antes de 1995, con condiciones muy protegidas y renta casi congelada. Pueden <b>heredarse o subrogarse</b> entre familiares — pero las reglas para hacerlo llevan décadas cambiando, y lo que servía en 1961 puede no servir hoy.</div>
    </div>
  </div></body></html>`;
}

// ---------------------------------------------------------------
// SLIDE 7 — TUS DERECHOS (checklist cards grid)
// ---------------------------------------------------------------
function slide7() {
  const items = [
    [true, 'Se puede alegar vulnerabilidad social ante el juzgado.'],
    [true, 'Desde 2025, todo propietario debe intentar una conciliación previa (no solo los grandes tenedores).'],
    [false, 'Las protecciones reforzadas para "grandes tenedores" se recortaron en 2025.'],
    [false, 'Hoy no existe un "escudo antidesahucios" permanente tras su derogación en 2026.'],
  ];
  const cards = items.map(([ok, text]) => `
    <div style="display:flex; gap:20px; align-items:flex-start; background:${ok ? 'rgba(76,175,125,0.10)' : 'rgba(217,83,79,0.08)'};
      border:1.5px solid ${ok ? 'rgba(76,175,125,0.35)' : 'rgba(217,83,79,0.30)'}; border-radius:18px; padding:24px 26px; margin-bottom:18px;">
      <div style="flex:none; width:36px; height:36px; border-radius:50%; background:${ok ? OK : BAD};
        display:flex; align-items:center; justify-content:center; font-weight:900; font-size:20px; color:#fff;">${ok ? '✓' : '✕'}</div>
      <div style="color:#fff; font-weight:700; font-size:23px; line-height:1.35; padding-top:5px;">${text}</div>
    </div>`).join('');
  return `<html><head><meta charset="utf-8"><style>${RESET}
    .stage { background:${INK}; }
    .head { position:absolute; top:150px; left:56px; right:56px; z-index:5; }
    .eyebrow { color:${GOLD}; font-weight:900; letter-spacing:3px; font-size:20px; text-transform:uppercase; }
    h1 { color:#fff; font-weight:900; font-size:48px; line-height:1.08; letter-spacing:-1.5px; margin-top:16px; }
    .grid { position:absolute; left:56px; right:56px; top:450px; z-index:5; }
    .takeaway { position:absolute; left:56px; right:56px; bottom:86px; z-index:5; background:${GOLD};
      border-radius:18px; padding:28px 30px; }
    .takeaway p { color:${INK}; font-weight:800; font-size:24px; line-height:1.4; }
  </style></head><body><div class="stage">
    ${brand()}
    ${pageTag('07 / 08')}
    <div class="head"><div class="eyebrow">TUS DERECHOS</div><h1>¿Qué protege — y qué NO —<br>a un inquilino vulnerable?</h1></div>
    <div class="grid">${cards}</div>
    <div class="takeaway"><p>💡 En resumen: la protección existe, pero es parcial, cambia cada año y depende de cómo se aplique a tiempo.</p></div>
  </div></body></html>`;
}

// ---------------------------------------------------------------
// SLIDE 8 — CIERRE REFLEXIVO (sin CTA comercial, dato de contexto + crédito)
// ---------------------------------------------------------------
function slide8() {
  return `<html><head><meta charset="utf-8"><style>${RESET}
    .stage { background:radial-gradient(ellipse at 50% 78%, rgba(143,199,166,0.16) 0%, rgba(143,199,166,0) 55%), ${INK}; }
    .center { position:absolute; left:70px; right:70px; top:0; bottom:0; display:flex; flex-direction:column;
      align-items:center; justify-content:center; text-align:center; z-index:5; }
    .eyebrow { color:${GOLD}; font-weight:900; letter-spacing:3px; font-size:20px; text-transform:uppercase; margin-bottom:22px; }
    h1 { color:#fff; font-weight:900; font-size:56px; line-height:1.12; letter-spacing:-2px; }
    h1 .hl { color:${GOLD}; }
    .statrow { display:flex; gap:28px; margin-top:44px; }
    .stat { background:rgba(255,255,255,0.06); border:1.5px solid rgba(255,255,255,0.14); border-radius:20px; padding:28px 30px; text-align:center; }
    .stat .n { font-size:52px; font-weight:900; color:${GOLD}; letter-spacing:-2px; }
    .stat .l { font-size:15px; font-weight:700; color:rgba(255,255,255,0.6); letter-spacing:1px; margin-top:8px; max-width:220px; }
    .credit { margin-top:48px; display:flex; align-items:center; gap:12px; }
    .credit span { color:rgba(255,255,255,0.6); font-weight:700; font-size:16px; letter-spacing:1.5px; }
    .foot { position:absolute; left:70px; right:70px; bottom:56px; z-index:5; text-align:center; }
    .foot p { color:rgba(255,255,255,0.45); font-size:16px; line-height:1.55; }
  </style></head><body><div class="stage">
    <div class="center">
      <div class="eyebrow">Para terminar</div>
      <h1>Esto no es<br>un caso <span class="hl">aislado</span>.</h1>
      <div class="statrow">
        <div class="stat"><div class="n">1,6%</div><div class="l">del parque de vivienda en España es alquiler social</div></div>
        <div class="stat"><div class="n">8%</div><div class="l">es la media de la Unión Europea</div></div>
      </div>
      <div class="credit">${logoMark('light', 24)}<span>ANÁLISIS: NORTIK ABOGADOS</span></div>
    </div>
    <div class="foot"><p>Caso basado en información publicada por medios de comunicación. Contenido informativo y divulgativo, no constituye asesoría legal personalizada.</p></div>
  </div></body></html>`;
}

const slides = [slide1(), slide2(), slide3(), slide4(), slide5(), slide6(), slide7(), slide8()];
renderSlides(slides, __dirname);
