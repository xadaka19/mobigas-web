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
  { loc: '/cooking-gas-prices-kenya', priority: '0.8', changefreq: 'monthly' },
  { loc: '/gas-delivery-same-day', priority: '0.8', changefreq: 'monthly' },
  { loc: '/is-mobigas-safe', priority: '0.8', changefreq: 'monthly' },
  { loc: '/gas-delivery-for-business', priority: '0.8', changefreq: 'monthly' },
  { loc: '/gas-loan-apps-kenya', priority: '0.8', changefreq: 'monthly' },
  { loc: '/cooking-gas-brands-kenya', priority: '0.8', changefreq: 'monthly' },
  { loc: '/how-to-get-gas-on-credit', priority: '0.9', changefreq: 'monthly' },
  { loc: '/gas-vendor-registration-kenya', priority: '0.8', changefreq: 'monthly' },
  { loc: '/gas-delivery-nairobi', priority: '0.9', changefreq: 'weekly' },
  { loc: '/gas-delivery-mombasa', priority: '0.9', changefreq: 'weekly' },
  { loc: '/gas-delivery-kisumu', priority: '0.9', changefreq: 'weekly' },
  { loc: '/gas-delivery-nakuru', priority: '0.9', changefreq: 'weekly' },
  { loc: '/gas-delivery-eldoret', priority: '0.9', changefreq: 'weekly' },
  { loc: '/gas-delivery-kiambu', priority: '0.9', changefreq: 'weekly' },
  { loc: '/gas-delivery-thika', priority: '0.9', changefreq: 'weekly' },
  { loc: '/gas-delivery-app-kenya', priority: '0.8', changefreq: 'monthly' },
  { loc: '/lpg-gas-delivery-kenya', priority: '0.8', changefreq: 'monthly' },
  { loc: '/cooking-gas-emergency-kenya', priority: '0.8', changefreq: 'monthly' },
  { loc: '/mpesa-gas-payment-kenya', priority: '0.8', changefreq: 'monthly' },
  { loc: '/gas-on-credit-no-deposit', priority: '0.9', changefreq: 'monthly' },
  { loc: '/how-mobigas-works', priority: '0.9', changefreq: 'monthly' },
  { loc: '/cooking-gas-for-students-kenya', priority: '0.8', changefreq: 'monthly' },
  { loc: '/affordable-gas-kenya', priority: '0.8', changefreq: 'monthly' },
  { loc: '/gas-delivery-machakos', priority: '0.8', changefreq: 'weekly' },
  { loc: '/gas-delivery-meru', priority: '0.8', changefreq: 'weekly' },
  { loc: '/gas-delivery-nyeri', priority: '0.8', changefreq: 'weekly' },
  { loc: '/gas-delivery-kakamega', priority: '0.8', changefreq: 'weekly' },
  { loc: '/gas-delivery-kericho', priority: '0.8', changefreq: 'weekly' },
  { loc: '/gas-delivery-embu', priority: '0.8', changefreq: 'weekly' },
  { loc: '/gas-delivery-garissa', priority: '0.8', changefreq: 'weekly' },
  { loc: '/gas-delivery-malindi', priority: '0.8', changefreq: 'weekly' },
  { loc: '/gas-delivery-kisii', priority: '0.8', changefreq: 'weekly' },
  { loc: '/gas-delivery-bungoma', priority: '0.8', changefreq: 'weekly' },
  { loc: '/gas-delivery-naivasha', priority: '0.8', changefreq: 'weekly' },
  { loc: '/gas-delivery-kapsabet', priority: '0.7', changefreq: 'weekly' },
  { loc: '/gas-delivery-mumias', priority: '0.7', changefreq: 'weekly' },
  { loc: '/gas-delivery-voi', priority: '0.7', changefreq: 'weekly' },
  { loc: '/gas-delivery-migori', priority: '0.7', changefreq: 'weekly' },
  { loc: '/gas-delivery-hola', priority: '0.7', changefreq: 'weekly' },
  { loc: '/gas-delivery-kitui', priority: '0.7', changefreq: 'weekly' },
  { loc: '/gas-delivery-lodwar', priority: '0.7', changefreq: 'weekly' },
  { loc: '/gas-delivery-maralal', priority: '0.7', changefreq: 'weekly' },
  { loc: '/gas-delivery-kitale', priority: '0.7', changefreq: 'weekly' },
  { loc: '/gas-delivery-homa-bay', priority: '0.7', changefreq: 'weekly' },
  { loc: '/gas-delivery-kapenguria', priority: '0.7', changefreq: 'weekly' },
  { loc: '/gas-delivery-marsabit', priority: '0.7', changefreq: 'weekly' },
  { loc: '/gas-delivery-wajir', priority: '0.7', changefreq: 'weekly' },
  { loc: '/gas-delivery-mandera', priority: '0.7', changefreq: 'weekly' },
  { loc: '/gas-delivery-isiolo', priority: '0.7', changefreq: 'weekly' },
  { loc: '/gas-delivery-nanyuki', priority: '0.7', changefreq: 'weekly' },
  { loc: '/gas-delivery-narok', priority: '0.7', changefreq: 'weekly' },
  { loc: '/gas-delivery-kabarnet', priority: '0.7', changefreq: 'weekly' },
  { loc: '/gas-delivery-lamu', priority: '0.7', changefreq: 'weekly' },
  { loc: '/gas-delivery-chuka', priority: '0.7', changefreq: 'weekly' },
  { loc: '/gas-delivery-wote', priority: '0.7', changefreq: 'weekly' },
  { loc: '/gas-delivery-ol-kalou', priority: '0.7', changefreq: 'weekly' },
  { loc: '/gas-delivery-kerugoya', priority: '0.7', changefreq: 'weekly' },
  { loc: '/gas-delivery-bomet', priority: '0.7', changefreq: 'weekly' },
  { loc: '/gas-delivery-siaya', priority: '0.7', changefreq: 'weekly' },
  { loc: '/gas-delivery-nyamira', priority: '0.7', changefreq: 'weekly' },
  { loc: '/gas-delivery-iten', priority: '0.7', changefreq: 'weekly' },
  { loc: '/gas-delivery-rumuruti', priority: '0.7', changefreq: 'weekly' },
  { loc: '/gas-delivery-litein', priority: '0.7', changefreq: 'weekly' },
  { loc: '/gas-delivery-webuye', priority: '0.7', changefreq: 'weekly' },
  { loc: '/gas-delivery-kandara', priority: '0.7', changefreq: 'weekly' },
  { loc: '/gas-delivery-ruiru', priority: '0.8', changefreq: 'weekly' },
  { loc: '/gas-delivery-juja', priority: '0.8', changefreq: 'weekly' },
  { loc: '/gas-delivery-kikuyu', priority: '0.8', changefreq: 'weekly' },
  { loc: '/gas-delivery-athi-river', priority: '0.8', changefreq: 'weekly' },
  { loc: '/gas-delivery-limuru', priority: '0.7', changefreq: 'weekly' },
  { loc: '/gas-delivery-kahawa', priority: '0.8', changefreq: 'weekly' },
  { loc: '/gas-delivery-embakasi', priority: '0.8', changefreq: 'weekly' },
  { loc: '/gas-delivery-kabete', priority: '0.7', changefreq: 'weekly' },
  { loc: '/gas-delivery-dagoretti', priority: '0.8', changefreq: 'weekly' },
  { loc: '/gas-delivery-langata', priority: '0.8', changefreq: 'weekly' },
  { loc: '/gas-delivery-westlands', priority: '0.9', changefreq: 'weekly' },
  { loc: '/gas-delivery-kilimani', priority: '0.9', changefreq: 'weekly' },
  { loc: '/gas-delivery-kasarani', priority: '0.8', changefreq: 'weekly' },
  { loc: '/gas-delivery-eastleigh', priority: '0.8', changefreq: 'weekly' },
  { loc: '/gas-delivery-kibera', priority: '0.8', changefreq: 'weekly' },
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
