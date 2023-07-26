const fs = require('fs');
const path = require('path');
const sm = require('sitemap');

const baseUrl = 'https://www.datainfra.io'; // Change this to your website URL
const buildDir = 'build'; // Change this to the output build directory

const sitemap = sm.createSitemap({
    hostname: baseUrl,
    cacheTime: 600000,
});

// Add your URLs to the sitemap here
sitemap.add({ url: '/docs/druid-on-kubernetes', changefreq: 'monthly', priority: 0.7 });
// Add more URLs as needed

const sitemapXml = sitemap.toString();

fs.writeFileSync(path.join(buildDir, 'sitemap.xml'), sitemapXml);

console.log('Sitemap generated successfully.');
