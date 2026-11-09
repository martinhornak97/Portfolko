// Generates 1200x630 Open Graph images into public/og/.
// Usage: node scripts/generate-og-images.js
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const PUBLIC = path.join(process.cwd(), 'public');
const OUT = path.join(PUBLIC, 'og');
const W = 1200;
const H = 630;

// Case study covers, cropped to 1200x630 (position = which part to keep).
const covers = [
  { out: 'chismeapp.png', src: 'images/chisme-preview.png' },
  { out: 'neuron.png', src: 'images/neuron.png' },
  { out: 'enterprise-design-system.png', src: 'images/enterprise-design-system-cover.png' },
  { out: 'bouracka.png', src: 'bouracka/bouracka-cover.png', position: 'top' },
  { out: 'datemapper.png', src: 'images/datemapper-cover.jpg' },
  { out: 'banking-app.png', src: 'images/vub-preview.png' },
];

const escape = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;');

// Text-only brand card for home / about / contact.
function brandCard({ eyebrow, title, footer }) {
  const lines = title.map(
    (line, i) =>
      `<text x="80" y="${300 + i * 84}" font-size="72" font-weight="600" fill="#333333" letter-spacing="-1.5">${escape(line)}</text>`
  );
  return Buffer.from(`
<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="#ffffff"/>
  <g font-family="Inter, 'Helvetica Neue', Helvetica, Arial, sans-serif">
    <text x="80" y="110" font-size="30" font-weight="500" fill="#333333">Martin Horňak</text>
    <text x="80" y="210" font-size="24" font-weight="500" fill="#6b7280" letter-spacing="2">${escape(eyebrow.toUpperCase())}</text>
    ${lines.join('\n    ')}
    <line x1="80" y1="520" x2="${W - 80}" y2="520" stroke="#e5e7eb" stroke-width="2"/>
    <text x="80" y="570" font-size="26" fill="#6b7280">${escape(footer)}</text>
  </g>
</svg>`);
}

const cards = [
  {
    out: 'home.png',
    eyebrow: 'Portfolio',
    title: ['Senior product designer', 'for complex products'],
    footer: 'martinhornak.com',
  },
  {
    out: 'about.png',
    eyebrow: 'About',
    title: ['I design clarity for', 'complex products.'],
    footer: 'Enterprise platforms · Design systems · Consumer apps',
  },
  {
    out: 'contact.png',
    eyebrow: 'Contact',
    title: ["Let's talk"],
    footer: 'Design system audits · Design reviews · MVP design',
  },
  {
    out: 'work.png',
    eyebrow: 'Selected work',
    title: ['Case studies'],
    footer: 'Enterprise · Fintech · Insurance · Consumer apps',
  },
];

async function main() {
  fs.mkdirSync(OUT, { recursive: true });

  for (const c of covers) {
    await sharp(path.join(PUBLIC, c.src))
      .resize(W, H, { fit: 'cover', position: c.position ?? 'centre' })
      .png({ compressionLevel: 9, palette: true, quality: 90 })
      .toFile(path.join(OUT, c.out));
    console.log(`og/${c.out}`);
  }

  for (const c of cards) {
    await sharp(brandCard(c)).png({ compressionLevel: 9 }).toFile(path.join(OUT, c.out));
    console.log(`og/${c.out}`);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
