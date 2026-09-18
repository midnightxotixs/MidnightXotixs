import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

console.log('--- STARTING MULTI-TARGET PRODUCTION BUILD ---');

// 1. Build Sanity Studio strictly into its dedicated subfolder dist/studio
console.log('Building Sanity Studio into dist/studio...');
execSync('npx sanity build dist/studio -y', { stdio: 'inherit' });

// 2. Ensure dist root has the main storefront index.html
console.log('Deploying main storefront index.html to dist root...');
fs.copyFileSync('index.html', path.join('dist', 'index.html'));

// 3. Copy assets folder (profile photos, branding) to dist/assets
if (fs.existsSync('assets')) {
  console.log('Deploying assets to dist/assets...');
  fs.cpSync('assets', path.join('dist', 'assets'), { recursive: true });
}

console.log('--- BUILD COMPLETE: STOREFRONT AT ROOT, STUDIO AT /studio ---');
