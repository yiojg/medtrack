// Builds the offline Android web bundle (www/) from index.html
const fs = require('fs'), cp = require('child_process');
fs.rmSync('www', { recursive: true, force: true }); fs.mkdirSync('www');
cp.execSync('npx tailwindcss -c tailwind.config.js -i in.css -o www/tw.css --minify', { stdio: 'inherit' });
fs.copyFileSync('node_modules/html5-qrcode/html5-qrcode.min.js', 'www/html5-qrcode.min.js');
let h = fs.readFileSync('index.html', 'utf8');
h = h.replace(/<script src="https:\/\/cdn\.tailwindcss\.com[^>]*><\/script>/, '<link rel="stylesheet" href="tw.css">')
     .replace(/<script src="https:\/\/cdn\.jsdelivr\.net[^>]*html5-qrcode[^>]*><\/script>/, '<script src="html5-qrcode.min.js"></script>')
     .replace(/<link href="https:\/\/fonts\.googleapis[^>]*>/, '')
     .replace(/<link rel="manifest"[^>]*>/, '')
     .replace(/<script>if\('serviceWorker'[^\n]*<\/script>/, '');
fs.writeFileSync('www/index.html', h);
console.log('www/ ready');
