import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

console.log('--- STARTING BUILD ---');
if (fs.existsSync('dist')) {
  fs.rmSync('dist', { recursive: true, force: true });
}
fs.mkdirSync('dist', { recursive: true });

console.log('Building Sanity Studio into dist/studio...');
execSync('npx sanity build dist/studio -y', { stdio: 'inherit' });

console.log('Deploying storefront index.html to dist root...');
fs.copyFileSync('index.html', path.join('dist', 'index.html'));

if (fs.existsSync('assets')) {
  console.log('Copying assets...');
  fs.cpSync('assets', path.join('dist', 'assets'), { recursive: true });
}
console.log('--- BUILD COMPLETE ---');
