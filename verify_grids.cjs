const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');
const lines = html.split('\n');
console.log('Lines:', lines.length, 'Size:', fs.statSync('index.html').size, 'bytes');

const keywords = ['bakery-product-grid', 'flash-sale-grid', 'pan-dulce-grid', 'pasteles-grid', 'catalog-category-pills'];
lines.forEach(function(l, idx) {
  keywords.forEach(function(k) {
    if (l.indexOf(k) > -1) {
      console.log((idx+1) + ': ' + l.trim().slice(0, 150));
    }
  });
});
