const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');
const lines = html.split('\n');
lines.forEach(function(line, idx) {
  const l = line.trim();
  if (l.indexOf('id="') > -1) {
    const match = l.match(/id="([^"]+)"/);
    if (match) {
      console.log((idx + 1) + ': id=' + match[1] + ' | ' + l.slice(0, 100));
    }
  }
});
