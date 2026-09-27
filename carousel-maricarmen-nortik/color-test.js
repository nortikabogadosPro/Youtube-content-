const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

const W = 1080, H = 760;
const INK = '#0E1B24';
const NAVY = '#1B2E3B';
const CREAM = '#F4F0E6';
const FONT = `-apple-system, "Helvetica Neue", Arial, sans-serif`;

const OPTIONS = [
  { label: 'OPCIÓN A · Dorado suave (menos naranja)', accent: '#C8B25A' },
  { label: 'OPCIÓN B · Verde clarito suave', accent: '#8FC7A6' },
  { label: 'ACTUAL · Dorado (el que no convence)', accent: '#C9A24B' },
];

function card(opt) {
  return `
  <div style="flex:1; background:${INK}; padding:40px 34px; display:flex; flex-direction:column; justify-content:space-between;">
    <div>
      <div style="color:${opt.accent}; font-weight:900; letter-spacing:2px; font-size:15px; text-transform:uppercase; margin-bottom:16px;">${opt.label}</div>
      <div style="color:#fff; font-weight:900; font-size:38px; line-height:1.08; letter-spacing:-1px;">A los 87 años,<br>la sacaron de su<br>casa en <span style="color:${opt.accent};">CAMILLA</span>.</div>
    </div>
    <div style="background:${NAVY}; border-radius:16px; padding:26px 22px; margin-top:24px;">
      <div style="display:flex; align-items:center; gap:12px;">
        <div style="color:#fff; font-weight:900; font-size:30px;">500&nbsp;€</div>
        <div style="color:${opt.accent}; font-weight:900; font-size:24px;">→</div>
        <div style="color:${opt.accent}; font-weight:900; font-size:36px;">2.650&nbsp;€</div>
      </div>
    </div>
    <div style="margin-top:24px; background:${opt.accent}; color:${INK}; font-weight:900; letter-spacing:1px; font-size:16px;
      padding:14px 22px; border-radius:40px; text-align:center;">DESLIZA Y ENTÉRATE →</div>
    <div style="margin-top:18px; display:flex; align-items:center; gap:10px;">
      <div style="width:26px; height:14px; border-radius:4px; background:${opt.accent};"></div>
      <div style="color:rgba(255,255,255,0.5); font-size:13px; font-weight:700; letter-spacing:1px;">${opt.accent}</div>
    </div>
  </div>`;
}

const html = `<html><head><meta charset="utf-8"><style>
  * { margin:0; padding:0; box-sizing:border-box; }
  html,body { width:${W}px; height:${H}px; font-family:${FONT}; background:${CREAM}; }
</style></head><body>
  <div style="display:flex; width:${W}px; height:${H}px; gap:3px; background:${CREAM};">
    ${OPTIONS.map(card).join('')}
  </div>
</body></html>`;

(async () => {
  const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome', args: ['--no-sandbox'] });
  const page = await browser.newPage({ viewport: { width: W, height: H } });
  const tmp = path.join(__dirname, '.tmp_color_test.html');
  fs.writeFileSync(tmp, html);
  await page.goto('file://' + tmp, { waitUntil: 'load' });
  await page.screenshot({ path: path.join(__dirname, 'color_test.png') });
  await browser.close();
  fs.rmSync(tmp);
  console.log('OK color_test.png');
})();
