const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

const W = 1080, H = 1350;

// Brand palette: navy sampled from the real Nortik logo + soft light green accent
// (Opción B, chosen by the client). v2: "boutique law firm" visual language —
// serif headlines, hairline cards, no filled ribbons/pills, duotone photography.
const INK = '#0E1B24';
const INK2 = '#14232E';
const NAVY = '#1B2E3B';
const CREAM = '#F4F0E6';
const GOLD = '#8FC7A6';
const OK = '#4CAF7D';
const BAD = '#D9534F';

const FONT = `-apple-system, "Helvetica Neue", Arial, sans-serif`;
const SERIF = `Georgia, 'Times New Roman', serif`;
const A = path.join(__dirname, 'assets');
const PHOTO = path.join(A, 'martin_1.jpg');
const PHOTO2 = path.join(A, 'martin_2.jpg');

const RESET = `
  * { margin:0; padding:0; box-sizing:border-box; }
  html,body { width:${W}px; height:${H}px; overflow:hidden; font-family:${FONT}; }
  .stage { position:relative; width:${W}px; height:${H}px; }
  b, strong { font-weight:700; }
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
    ${logoMark(variant, 32)}
    <div style="font-weight:700; letter-spacing:3px; color:${textColor}; font-size:17px;">NORTIK ABOGADOS</div>
  </div>`;
}

function pageTag(label, color = 'rgba(255,255,255,0.42)') {
  return `<div style="position:absolute; top:62px; right:56px; font-weight:700; letter-spacing:2px; font-size:14px; color:${color}; z-index:9;">${label}</div>`;
}

// Small-caps label preceded by a thin rule — replaces the old colored "pill" eyebrow.
function eyebrow(text, color = GOLD) {
  return `<div style="display:flex; align-items:center; gap:14px; margin-bottom:28px;">
    <div style="width:30px; height:1px; background:${color};"></div>
    <div style="font-weight:700; letter-spacing:3px; font-size:14px; text-transform:uppercase; color:${color};">${text}</div>
  </div>`;
}

// Hairline-bordered card (replaces the old tinted rounded-pill cards).
function card({ label, text, tone = 'neutral' }) {
  const tones = {
    neutral: { border: 'rgba(255,255,255,0.16)', bg: 'rgba(255,255,255,0.03)', lbl: 'rgba(255,255,255,0.5)' },
    accent: { border: 'rgba(143,199,166,0.4)', bg: 'rgba(143,199,166,0.07)', lbl: GOLD },
    bad: { border: 'rgba(217,83,79,0.32)', bg: 'rgba(217,83,79,0.05)', lbl: '#e0a09d' },
    onLight: { border: 'rgba(27,46,59,0.18)', bg: 'rgba(27,46,59,0.04)', lbl: 'rgba(27,46,59,0.6)' },
  };
  const t = tones[tone];
  const textColor = tone === 'onLight' ? NAVY : '#fff';
  return `<div style="border:1px solid ${t.border}; background:${t.bg}; border-radius:10px; padding:28px 30px; margin-bottom:18px;">
    <div style="font-weight:700; letter-spacing:2px; font-size:13px; text-transform:uppercase; color:${t.lbl}; margin-bottom:12px;">${label}</div>
    <p style="color:${textColor}; font-weight:500; font-size:22px; line-height:1.5; margin:0;">${text}</p>
  </div>`;
}

function outlineBtn(text, color = GOLD) {
  return `<div style="display:inline-block; border:1.5px solid ${color}; color:${color}; font-weight:700; letter-spacing:2px; font-size:15px; text-transform:uppercase; padding:16px 30px; border-radius:3px;">${text}</div>`;
}

// Cool navy duotone treatment for photos (replaces the old warm heavy-blur look).
function photoDuotone(src, { top = -330, left = -40, width = 1160, blur = 2, tintOpacity = 0.82 } = {}) {
  return `
  <div style="position:absolute; inset:0; overflow:hidden;">
    <img src="file://${src}" style="position:absolute; top:${top}px; left:${left}px; width:${width}px;
      filter:grayscale(100%) contrast(1.12) brightness(0.98) blur(${blur}px);">
    <div style="position:absolute; inset:0; background:${NAVY}; mix-blend-mode:color; opacity:${tintOpacity};"></div>
    <div style="position:absolute; inset:0; background:linear-gradient(180deg, rgba(14,27,36,0.55) 0%, rgba(14,27,36,0.15) 30%, rgba(14,27,36,0.55) 62%, rgba(14,27,36,0.97) 94%);"></div>
  </div>`;
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

module.exports = { W, H, INK, INK2, NAVY, CREAM, GOLD, OK, BAD, FONT, SERIF, A, PHOTO, PHOTO2, RESET, logoMark, brand, pageTag, eyebrow, card, outlineBtn, photoDuotone, renderSlides };
