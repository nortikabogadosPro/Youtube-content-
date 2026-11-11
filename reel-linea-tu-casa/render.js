// Portada del Reel "Línea Tu Casa" — 1080x1920, sistema visual Nortik (boutique v2):
// fondo INK, foto en duotono navy, titular serif, acento verde clarito.
// Todo el texto importante va dentro de la zona central 1080x1440 (y 240–1680)
// para que no se corte en la cuadrícula del perfil de Instagram (3:4) ni en TikTok.
const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');
const T = require('../carousel-maricarmen-nortik/theme.js');
const { INK, NAVY, GOLD, BAD, FONT, SERIF, logoMark } = T;

const W = 1080, H = 1920;
const FRAME = path.join(__dirname, 'assets/frame_portada.png');

function stat(big, small) {
  return `<div class="stat"><div class="big">${big}</div><div class="small">${small}</div></div>`;
}

const html = `<html><head><meta charset="utf-8"><style>
  * { margin:0; padding:0; box-sizing:border-box; }
  html,body { width:${W}px; height:${H}px; overflow:hidden; font-family:${FONT}; }
  .stage { position:relative; width:${W}px; height:${H}px; background:${INK}; }
  .photoband { position:absolute; top:0; left:0; width:${W}px; height:1000px; overflow:hidden; }
  .photoband img { position:absolute; top:-40px; left:0; width:${W}px; display:block; filter:grayscale(100%) contrast(1.12) brightness(0.9); }
  .photoband .tint { position:absolute; inset:0; background:${NAVY}; mix-blend-mode:color; opacity:0.55; }
  .photoband .fade { position:absolute; left:0; right:0; bottom:0; height:340px; background:linear-gradient(180deg, rgba(14,27,36,0) 0%, ${INK} 100%); }
  .photoband .topfade { position:absolute; left:0; right:0; top:0; height:200px; background:linear-gradient(180deg, rgba(14,27,36,0.7) 0%, rgba(14,27,36,0) 100%); }
  .badge { position:absolute; top:260px; left:64px; z-index:9; display:flex; align-items:center; gap:12px; }
  .badge .led { width:11px; height:11px; border-radius:50%; background:${GOLD}; }
  .badge span { color:#fff; font-weight:700; letter-spacing:2.5px; font-size:19px; text-transform:uppercase; text-shadow:0 2px 10px rgba(0,0,0,0.7); }
  .content { position:absolute; left:64px; right:64px; top:880px; z-index:6; }
  .kicker { display:flex; align-items:center; gap:16px; margin-bottom:26px; }
  .kicker .rule { width:36px; height:1.5px; background:${GOLD}; }
  .kicker span { color:${GOLD}; font-weight:700; letter-spacing:3.5px; font-size:21px; text-transform:uppercase; }
  h1 { font-family:${SERIF}; color:#fff; font-weight:700; font-size:84px; line-height:1.1; letter-spacing:-1px; }
  h1 .num { color:${GOLD}; }
  h1 .hl { color:${GOLD}; font-style:italic; }
  .stats { display:flex; gap:0; margin-top:46px; border-top:1px solid rgba(255,255,255,0.16); border-bottom:1px solid rgba(255,255,255,0.16); }
  .stat { flex:1; padding:26px 0 24px; text-align:center; }
  .stat + .stat { border-left:1px solid rgba(255,255,255,0.16); }
  .stat .big { font-family:${SERIF}; color:#fff; font-weight:700; font-size:50px; line-height:1; }
  .stat .small { color:rgba(255,255,255,0.6); font-weight:700; letter-spacing:2px; font-size:15px; text-transform:uppercase; margin-top:12px; }
  .warn { margin-top:34px; display:flex; align-items:center; gap:14px; }
  .warn .dot { width:11px; height:11px; border-radius:50%; background:${BAD}; flex:none; }
  .warn span { color:#e0a09d; font-weight:700; letter-spacing:2.5px; font-size:19px; text-transform:uppercase; }
  .foot { position:absolute; bottom:250px; left:64px; right:64px; z-index:9; display:flex; align-items:center; justify-content:flex-end; gap:12px; }
  .foot span { color:rgba(255,255,255,0.55); font-weight:700; font-size:18px; letter-spacing:2px; }
</style></head><body><div class="stage">
  <div class="photoband">
    <img src="file://${FRAME}">
    <div class="tint"></div>
    <div class="topfade"></div>
    <div class="fade"></div>
  </div>
  <div class="badge"><div class="led"></div><span>Préstamo público · ICO</span></div>
  <div class="content">
    <div class="kicker"><div class="rule"></div><span>Línea Tu Casa</span></div>
    <h1>El Gobierno te presta <span class="num">50.000&nbsp;€</span> para la entrada — <span class="hl">pero hay letra pequeña</span>.</h1>
    <div class="stats">
      ${stat('0 %', 'Intereses')}
      ${stat('20 %', 'De la vivienda')}
      ${stat('10 años', 'Para devolver')}
    </div>
    <div class="warn"><div class="dot"></div><span>Todavía no se puede pedir</span></div>
  </div>
  <div class="foot">${logoMark('light', 30)}<span>NORTIK ABOGADOS</span></div>
</div></body></html>`;

(async () => {
  const browser = await chromium.launch({ args: ['--no-sandbox', '--allow-file-access-from-files'] });
  const page = await browser.newPage({ viewport: { width: W, height: H } });
  const tmp = path.join(__dirname, '.tmp_portada.html');
  fs.writeFileSync(tmp, html);
  await page.goto('file://' + tmp, { waitUntil: 'load' });
  const out = path.join(__dirname, 'portada_linea_tu_casa_1080x1920.png');
  await page.screenshot({ path: out });
  await browser.close();
  fs.rmSync(tmp);
  console.log('OK', out);
})();
