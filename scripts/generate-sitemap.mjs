import { readdirSync, readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import fm from 'front-matter';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const BASE_URL = 'https://samahair.co.uk';

function readCollection(folder) {
  const dir = join(root, 'content', folder);
  return readdirSync(dir)
    .filter(f => f.endsWith('.md'))
    .map(f => fm(readFileSync(join(dir, f), 'utf8')).attributes);
}

const staticUrls = [
  { loc: '/', changefreq: 'monthly', priority: '1.0' },
  { loc: '/about', changefreq: 'monthly', priority: '0.7' },
  { loc: '/gallery', changefreq: 'monthly', priority: '0.8' },
  { loc: '/services', changefreq: 'monthly', priority: '0.8' },
  { loc: '/hair-extensions-london', changefreq: 'monthly', priority: '0.9' },
  { loc: '/blog', changefreq: 'weekly', priority: '0.8' },
  { loc: '/contact', changefreq: 'yearly', priority: '0.6' },
];

const services = readCollection('services').map(s => ({
  loc: `/services/${s.slug}`,
  changefreq: 'monthly',
  priority: '0.7',
}));

const locations = readCollection('locations').map(l => ({
  loc: `/hair-extensions-london/${l.slug}`,
  changefreq: 'monthly',
  priority: '0.6',
}));

const blogPosts = readCollection('blog').map(p => ({
  loc: `/blog/${p.slug}`,
  changefreq: 'monthly',
  priority: '0.6',
}));

const urls = [...staticUrls, ...services, ...locations, ...blogPosts];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(u => `  <url>
    <loc>${BASE_URL}${u.loc}</loc>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`).join('\n')}
</urlset>
`;

writeFileSync(join(root, 'public', 'sitemap.xml'), xml);
console.log(`sitemap.xml generated with ${urls.length} URLs`);
