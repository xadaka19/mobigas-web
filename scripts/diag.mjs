import { preview } from 'vite';
import puppeteer from 'puppeteer';

const server = await preview({ preview: { port: 4173 } });
console.log('1. preview server up:', server.resolvedUrls);

const res = await fetch('http://localhost:4173/');
const body = await res.text();
console.log('2. fetch status:', res.status, '| bytes:', body.length);

const browser = await puppeteer.launch({
  args: ['--no-sandbox', '--disable-dev-shm-usage', '--disable-gpu'],
  dumpio: true,
});
console.log('3. chrome launched:', await browser.version());

const page = await browser.newPage();
await page.goto('http://localhost:4173/', { waitUntil: 'domcontentloaded', timeout: 15000 });
console.log('4. page loaded, title:', await page.title());

await browser.close();
server.httpServer.close();
process.exit(0);
