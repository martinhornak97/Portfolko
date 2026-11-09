// Generates .webp siblings for PNG/JPG images used on the site.
// Usage: node scripts/optimize-images.js [--force]
// Originals are kept (used for Open Graph previews, which need PNG/JPG).
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const ROOT = path.join(process.cwd(), 'public');
const DIRS = ['images', 'chisme', 'bouracka', 'cv'];
const MAX_WIDTH = 2000; // ~1000px display width at 2x
const force = process.argv.includes('--force');

function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) return walk(full);
    return /\.(jpe?g|png)$/i.test(entry.name) ? [full] : [];
  });
}

async function main() {
  const files = DIRS.map((d) => path.join(ROOT, d))
    .filter((d) => fs.existsSync(d))
    .flatMap(walk);

  let before = 0;
  let after = 0;

  for (const input of files) {
    const output = input.replace(/\.(jpe?g|png)$/i, '.webp');
    if (!force && fs.existsSync(output)) continue;

    const { width } = await sharp(input).metadata();
    await sharp(input)
      .resize({ width: Math.min(width, MAX_WIDTH), withoutEnlargement: true })
      .webp({ quality: 80 })
      .toFile(output);

    const a = fs.statSync(input).size;
    const b = fs.statSync(output).size;
    before += a;
    after += b;
    console.log(
      `${path.relative(ROOT, input)}: ${(a / 1024).toFixed(0)}KB -> ${(b / 1024).toFixed(0)}KB`
    );
  }

  console.log(
    `\nDone. ${(before / 1048576).toFixed(1)}MB -> ${(after / 1048576).toFixed(1)}MB`
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
