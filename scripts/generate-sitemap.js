import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { SitemapStream, streamToPromise } from 'sitemap';
import { Readable } from 'stream';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Define your site URL (update this with your production URL)
const siteUrl = 'https://yourdomain.com';

// Define your pages
const pages = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/schedule-demo', changefreq: 'weekly', priority: 0.8 },
  // Add more static routes here
];

// Add dynamic feature pages
const features = [
  'inventory-management',
  'order-management',
  'analytics',
  'staff-management',
  // Add all your feature routes
];

features.forEach(feature => {
  pages.push({
    url: `/features/${feature}`,
    changefreq: 'weekly',
    priority: 0.7
  });
});

async function generateSitemap() {
  const stream = new SitemapStream({ hostname: siteUrl });
  
  // Create a readable stream from the pages array
  const result = await streamToPromise(
    Readable.from(pages).pipe(stream)
  ).then(data => data.toString());

  // Write sitemap to public directory
  const publicPath = path.join(process.cwd(), 'public', 'sitemap.xml');
  fs.writeFileSync(publicPath, result);
  
  console.log(`Sitemap generated successfully at: ${publicPath}`);
}

generateSitemap().catch(console.error);
