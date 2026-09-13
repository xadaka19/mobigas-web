import { readFileSync, mkdirSync, writeFileSync } from 'fs';
import { dirname, join } from 'path';
import { preview } from 'vite';
import puppeteer from 'puppeteer';

const country = process.env.VITE_COUNTRY || 'KE';
const outDir = country === 'KE' ? 'dist' : `dist-${country.toLowerCase()}`;

const sitemap = readFileSync('public/sitemap.xml', 'utf8');
// Domain-agnostic: match mobigas.co.ke / .co.tz / .co.ug so one script
// serves every country build without per-country regex edits.
const routes = [...sitemap.matchAll(/<loc>https:\/\/[^<]*?mobigas\.co\.[a-z]{2}(\/.*?)?<\/loc>/g)]
  .map(m => m[1] || '/');

const server = await preview({
  preview: { port: 4173, strictPort: true },
  build: { outDir },
});
const browser = await puppeteer.launch({
  args: ['--no-sandbox', '--disable-dev-shm-usage', '--disable-gpu'],
});
const page = await browser.newPage();
await page.setRequestInterception(true);
page.on('request', req => {
  if (req.url().startsWith('http://localhost:4173')) req.continue();
  else req.abort();
});

// Wait until document.title is non-empty, not the Vite default, and
// unchanged for 3 consecutive samples (750ms) — outlasts the lazy
// chunk load + Helmet update on route transitions.
async function waitForStableTitle(maxMs = 15000) {
  const start = Date.now();
  let last = '';
  let stable = 0;
  while (Date.now() - start < maxMs) {
    const t = await page.title();
    if (t && t !== 'mobigas-web' && t === last) {
      stable++;
      if (stable >= 3) return t;
    } else {
      stable = 0;
    }
    last = t;
    await new Promise(r => setTimeout(r, 250));
  }
  return last; // whatever we have at timeout
}

const failed = [];
const suspicious = [];
let homeTitle = '';

for (const route of routes) {
  let done = false;
  for (let attempt = 1; attempt <= 2 && !done; attempt++) {
    try {
      await page.goto(`http://localhost:4173${route}`, {
        waitUntil: 'domcontentloaded',
        timeout: 20000,
      });
      const title = await waitForStableTitle();
      const html = await page.content();
      const file = route === '/' ? join(outDir, 'index.html')
        : join(outDir, route.replace(/^\//, ''), 'index.html');
      mkdirSync(dirname(file), { recursive: true });
      writeFileSync(file, html);
      if (route === '/') homeTitle = title;
      else if (!title || (homeTitle && title === homeTitle)) suspicious.push(`${route} (${title ? 'DUPLICATE OF HOMEPAGE TITLE' : 'EMPTY TITLE'})`);
      console.log('✓', route, '—', title || '(empty)');
      done = true;
    } catch (err) {
      console.warn(`retry ${attempt} failed for ${route}: ${err.message}`);
      if (attempt === 2) failed.push(route);
    }
  }
}

console.log(`\nDone: ${routes.length} routes, ${failed.length} failed`);
if (failed.length) console.log('Failed routes:', failed.join(', '));
if (suspicious.length) {
  console.log(`\n${suspicious.length} routes with empty titles (need Helmet fixes):`);
  suspicious.forEach(s => console.log('  -', s));
}
await browser.close();
server.httpServer.close();
process.exit(0);
