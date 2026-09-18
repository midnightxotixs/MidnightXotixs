import fs from 'fs';
import path from 'path';

console.log('--- PREPARING PRODUCTION STOREFRONT DIST ---');

// Create clean dist folder
if (fs.existsSync('dist')) {
  fs.rmSync('dist', { recursive: true, force: true });
}
fs.mkdirSync('dist', { recursive: true });

// Copy root index.html to dist/index.html
fs.copyFileSync('index.html', path.join('dist', 'index.html'));
console.log('Copied index.html to dist/');

// Copy assets folder to dist/assets if it exists
if (fs.existsSync('assets')) {
  fs.cpSync('assets', path.join('dist', 'assets'), { recursive: true });
  console.log('Copied assets/ to dist/assets');
}

console.log('--- STOREFRONT BUILD COMPLETE ---');
