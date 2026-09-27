const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

const W = 1080, H = 1350;

// Brand palette: navy sampled from the real Nortik logo + soft light green accent
// (Opción B, chosen by the client over the neon-green and gold test options).
const INK = '#0E1B24';
const INK2 = '#14232E';
const NAVY = '#1B2E3B';
const CREAM = '#F4F0E6';
const GOLD = '#8FC7A6';
const OK = '#4CAF7D';
const BAD = '#D9534F';

const FONT = `-apple-system, "Helvetica Neue", Arial, sans-serif`;
const A = path.join(__dirname, 'assets');
const PHOTO = path.join(A, 'martin_1.jpg');
const PHOTO2 = path.join(A, 'martin_2.jpg');

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

async function renderSlides(slides, outDir) {
  fs.mkdirSync(outDir, { recursive: true });
  const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome', args: ['--no-sandbox', '--allow-file-access-from-files'] });
  const page = await browser.newPage({ viewport: { width: W, height: H } });
  const tmpDir = path.join(outDir, '.tmp_html');
  fs.mkdirSync(tmpDir, { recursive: true });
  for (let i = 0; i < slides.length; i++) {
    const htmlPath = path.join(tmpDir, `slide_${i + 1}.html`);
    fs.writeFileSync(htmlPath, slides[i]);
    await page.goto('file://' + htmlPath, { waitUntil: 'load' });
    const out = path.join(outDir, `slide_${String(i + 1).padStart(2, '0')}.png`);
    await page.screenshot({ path: out });
    console.log('OK', out);
  }
  await browser.close();
  fs.rmSync(tmpDir, { recursive: true, force: true });
}

module.exports = { W, H, INK, INK2, NAVY, CREAM, GOLD, OK, BAD, FONT, A, PHOTO, PHOTO2, RESET, logoMark, brand, pageTag, renderSlides };
