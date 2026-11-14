// Génère favicons + image Open Graph à partir de /public/logo.png.
// Usage : node scripts/generate-assets.mjs   (à relancer si le logo change)
import sharp from 'sharp';
import fs from 'node:fs/promises';

const LOGO = 'public/logo.png';
const OUT = 'public';
const PAPER = '#F4EFE6';

const meta = await sharp(LOGO).metadata();
const W = meta.width;
const H = meta.height;

// Le logo fait 1414×322 : « MT » occupe ~40 % à gauche, le point rouge est en bas à droite.
const mt = await sharp(LOGO)
  .extract({ left: 0, top: 0, width: Math.round(W * 0.41), height: H })
  .png()
  .toBuffer()
  .then((b) => sharp(b).trim())
  .then((s) => s
  .png()
  .toBuffer({ resolveWithObject: true }));
const dot = await sharp(LOGO)
  .extract({ left: Math.round(W * 0.935), top: Math.round(H * 0.6), width: W - Math.round(W * 0.935), height: H - Math.round(H * 0.6) })
  .png()
  .toBuffer()
  .then((b) => sharp(b).trim())
  .then((s) => s
  .png()
  .toBuffer({ resolveWithObject: true }));

// Monogramme « MT. » : MT bleu + point rouge aligné sur la ligne de base.
const gap = Math.round(dot.info.width * 0.35);
const markW = mt.info.width + gap + dot.info.width;
const markH = mt.info.height;
const mark = await sharp({
  create: { width: markW, height: markH, channels: 4, background: { r: 0, g: 0, b: 0, alpha: 0 } },
})
  .composite([
    { input: mt.data, left: 0, top: 0 },
    { input: dot.data, left: mt.info.width + gap, top: markH - dot.info.height },
  ])
  .png()
  .toBuffer();

async function square(size, { padding = 0.08, background = null } = {}) {
  const inner = Math.round(size * (1 - padding * 2));
  const resized = await sharp(mark).resize({ width: inner, height: inner, fit: 'inside' }).toBuffer();
  return sharp({
    create: {
      width: size,
      height: size,
      channels: 4,
      background: background ?? { r: 0, g: 0, b: 0, alpha: 0 },
    },
  })
    .composite([{ input: resized, gravity: 'center' }])
    .png()
    .toBuffer();
}

const fav32 = await square(32, { padding: 0.02 });
const fav48 = await square(48, { padding: 0.04 });
await fs.writeFile(`${OUT}/favicon-192.png`, await square(192));
await fs.writeFile(`${OUT}/favicon-512.png`, await square(512));
await fs.writeFile(`${OUT}/apple-touch-icon.png`, await square(180, { padding: 0.14, background: PAPER }));

// favicon.ico avec images PNG embarquées (format accepté par tous les navigateurs récents)
function ico(images) {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(images.length, 4);
  const entries = [];
  let offset = 6 + 16 * images.length;
  for (const { size, data } of images) {
    const e = Buffer.alloc(16);
    e.writeUInt8(size >= 256 ? 0 : size, 0);
    e.writeUInt8(size >= 256 ? 0 : size, 1);
    e.writeUInt8(0, 2);
    e.writeUInt8(0, 3);
    e.writeUInt16LE(1, 4);
    e.writeUInt16LE(32, 6);
    e.writeUInt32LE(data.length, 8);
    e.writeUInt32LE(offset, 12);
    offset += data.length;
    entries.push(e);
  }
  return Buffer.concat([header, ...entries, ...images.map((i) => i.data)]);
}
await fs.writeFile(
  `${OUT}/favicon.ico`,
  ico([
    { size: 32, data: fav32 },
    { size: 48, data: fav48 },
  ]),
);

// Image Open Graph 1200×630 : fond papier, repères de coupe, logo, accroche.
const OG_W = 1200;
const OG_H = 630;
const logoOg = await sharp(LOGO).resize({ width: 620 }).toBuffer();
const c = '#8a8378';
const m = 60; // marge des repères
const crop = (x, y, dx, dy) =>
  `<line x1="${x - dx * 30}" y1="${y}" x2="${x - dx * 8}" y2="${y}" stroke="${c}" stroke-width="2"/>` +
  `<line x1="${x}" y1="${y - dy * 30}" x2="${x}" y2="${y - dy * 8}" stroke="${c}" stroke-width="2"/>`;
const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="${OG_W}" height="${OG_H}">
  <rect width="100%" height="100%" fill="${PAPER}"/>
  <rect x="${m}" y="${m}" width="${OG_W - 2 * m}" height="${OG_H - 2 * m}" fill="#FBF8F3" stroke="#D9D1C3" stroke-width="2" rx="6"/>
  ${crop(m, m, 1, 1)}${crop(OG_W - m, m, -1, 1)}${crop(m, OG_H - m, 1, -1)}${crop(OG_W - m, OG_H - m, -1, -1)}
  <rect x="617" y="408" width="321" height="26" fill="#FFD400"/>
  <text x="600" y="425" text-anchor="middle" font-family="Georgia, 'Times New Roman', serif" font-size="46" font-weight="600" fill="#2C3137">Visible en ligne et dans la rue<tspan fill="#CC2D28">.</tspan></text>
  <text x="600" y="495" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-size="25" fill="#555B63">Sites web · Logos · Cartes de visite · Flyers · Panneaux</text>
</svg>`;
await sharp(Buffer.from(svg))
  .composite([{ input: logoOg, left: Math.round((OG_W - 620) / 2), top: 165 }])
  .png()
  .toFile(`${OUT}/og-image.png`);

console.log('OK : favicon.ico, favicon-192/512.png, apple-touch-icon.png, og-image.png');
