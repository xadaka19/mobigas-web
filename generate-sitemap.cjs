const fs = require('fs');
const path = require('path');

const counties = require('./sitemap-counties.json');

const baseUrl = 'https://mobigas.co.ke';

const staticUrls = [
  { loc: '/', priority: '1.0', changefreq: 'weekly' },
  { loc: '/terms', priority: '0.5', changefreq: 'monthly' },
  { loc: '/privacy', priority: '0.5', changefreq: 'monthly' },
  { loc: '/data-protection', priority: '0.5', changefreq: 'monthly' },
  { loc: '/odpc', priority: '0.5', changefreq: 'monthly' },
  { loc: '/faq', priority: '0.8', changefreq: 'monthly' },
  { loc: '/areas', priority: '0.8', changefreq: 'monthly' },
  { loc: '/vendors', priority: '0.8', changefreq: 'monthly' },
  { loc: '/buy-gas-on-credit', priority: '0.9', changefreq: 'monthly' },
  { loc: '/gas-vendor-loan', priority: '0.9', changefreq: 'monthly' },
];

const countyUrls = counties.map(c => ({
  loc: `/areas/${c.slug}`,
  priority: '0.7',
  changefreq: 'monthly',
}));

const vendorCountyUrls = counties.map(c => ({
  loc: `/vendors/${c.slug}`,
  priority: '0.7',
  changefreq: 'monthly',
}));

const allUrls = [...staticUrls, ...countyUrls, ...vendorCountyUrls];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allUrls.map(u => `  <url>
    <loc>${baseUrl}${u.loc}</loc>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`).join('\n')}
</urlset>
`;

fs.writeFileSync(path.join(__dirname, 'public', 'sitemap.xml'), xml);
console.log(`Sitemap generated with ${allUrls.length} URLs (${countyUrls.length} county pages)`);
