const fs = require('fs');
const path = require('path');

const htmlPath = path.join(__dirname, 'Holy Rosary Vocations (offline).html');
const outDir = path.join(__dirname, 'public', 'images');

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

console.log('Reading HTML file...');
const html = fs.readFileSync(htmlPath, 'utf8');

const manifestStart = html.indexOf('<script type="__bundler/manifest">');
if (manifestStart === -1) {
  console.error('Manifest tag not found');
  process.exit(1);
}

const jsonStart = html.indexOf('{', manifestStart);
const manifestEnd = html.indexOf('</script>', jsonStart);
const manifestJsonStr = html.substring(jsonStart, manifestEnd).trim();

console.log('Parsing manifest...');
const manifest = JSON.parse(manifestJsonStr);

let count = 0;
for (const [id, item] of Object.entries(manifest)) {
  if (item.mime && item.mime.startsWith('image/')) {
    const ext = item.mime === 'image/png' ? '.png' : item.mime === 'image/jpeg' ? '.jpg' : item.mime === 'image/svg+xml' ? '.svg' : '.img';
    const filePath = path.join(outDir, id + ext);
    fs.writeFileSync(filePath, Buffer.from(item.data, 'base64'));
    count++;
    console.log(`Saved image: ${id}${ext} (${item.mime})`);
  }
}

console.log(`Total images saved: ${count}`);
