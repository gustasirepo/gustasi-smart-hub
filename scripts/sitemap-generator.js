import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { SitemapStream, streamToPromise, EnumChangefreq } from 'sitemap';
import { Readable } from 'stream';
import { glob } from 'glob';
import { createGzip } from 'zlib';
import { createWriteStream } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const SITE_URL = 'https://www.gustasi.com';
const LANGUAGES = [
  { code: 'en', name: 'English' },
  { code: 'fr', name: 'Français' },
  { code: 'hi', name: 'हिंदी' },
  { code: 'bn', name: 'বাংলা' },
  { code: 'ta', name: 'தமிழ்' },
];
const DEFAULT_LANG = 'en';
const OUTPUT_DIR = path.join(process.cwd(), 'public');

// Define static routes with their metadata
const STATIC_ROUTES = [
  { 
    url: '/', 
    changefreq: EnumChangefreq.DAILY, 
    priority: 1.0,
    lastmod: new Date().toISOString().split('T')[0],
    images: ['/images/hero.jpg']
  },
  { 
    url: '/features', 
    changefreq: EnumChangefreq.WEEKLY, 
    priority: 0.9,
    lastmod: new Date().toISOString().split('T')[0]
  },
  { 
    url: '/pricing', 
    changefreq: EnumChangefreq.MONTHLY, 
    priority: 0.8,
    lastmod: new Date().toISOString().split('T')[0]
  },
  { 
    url: '/about', 
    changefreq: EnumChangefreq.MONTHLY, 
    priority: 0.7,
    lastmod: new Date().toISOString().split('T')[0]
  },
  { 
    url: '/contact', 
    changefreq: EnumChangefreq.MONTHLY, 
    priority: 0.7,
    lastmod: new Date().toISOString().split('T')[0]
  },
  { 
    url: '/blog', 
    changefreq: EnumChangefreq.WEEKLY, 
    priority: 0.6,
    lastmod: new Date().toISOString().split('T')[0]
  },
];

// Helper function to get last modified date of a file
async function getLastModified(filePath) {
  try {
    const stats = await fs.stat(filePath);
    return stats.mtime;
  } catch (error) {
    return new Date();
  }
}

// Helper to generate image sitemap entries
function generateImageEntries(images = []) {
  return images.map(img => ({
    url: img.startsWith('http') ? img : `${SITE_URL}${img}`,
    title: 'Gustasi Restaurant POS',
    caption: 'Gustasi - All-in-One Restaurant POS System',
    geo_location: 'Global',
    license: 'https://www.gustasi.com/terms'
  }));
}

// Function to find all pages in the app
async function findPages() {
  const pages = [];
  const now = new Date().toISOString();
  
  // Add static routes for each language
  for (const lang of LANGUAGES) {
    const langCode = typeof lang === 'string' ? lang : lang.code;
    
    for (const route of STATIC_ROUTES) {
      const langPath = langCode === DEFAULT_LANG ? '' : `/${langCode}`;
      const fullUrl = `${langPath}${route.url === '/' ? '' : route.url}`;
      
      // Skip if we already have this URL (to avoid duplicates)
      if (pages.some(p => p.url === fullUrl)) continue;
      
      // Generate alternate language links
      const links = LANGUAGES.map(l => {
        const lCode = typeof l === 'string' ? l : l.code;
        const lPath = lCode === DEFAULT_LANG ? '' : `/${lCode}`;
        return {
          lang: lCode,
          url: `${SITE_URL}${lPath}${route.url === '/' ? '' : route.url}`
        };
      });
      
      pages.push({
        url: fullUrl,
        changefreq: route.changefreq || EnumChangefreq.WEEKLY,
        priority: route.priority || 0.5,
        lastmod: route.lastmod || now,
        links,
        img: route.images ? generateImageEntries(route.images) : []
      });
    }
  }
  
  return pages;
}

// Generate the sitemap
async function generateSitemap() {
  try {
    console.log('Generating sitemap...');
    const pages = await findPages();
    
    // Create sitemap stream
    const stream = new SitemapStream({ 
      hostname: SITE_URL,
      xmlns: {
        image: true,
        xhtml: true,
        news: false,
        mobile: true
      }
    });
    
    // Add all pages to sitemap
    for (const page of pages) {
      stream.write({
        url: page.url,
        changefreq: page.changefreq,
        priority: page.priority,
        lastmod: page.lastmod,
        links: page.links,
        img: page.img
      });
    }
    
    // End the stream
    stream.end();
    
    // Convert to string
    const sitemap = await streamToPromise(stream);
    
    // Ensure output directory exists
    await fs.mkdir(OUTPUT_DIR, { recursive: true });
    
    // Write to file
    const sitemapPath = path.join(OUTPUT_DIR, 'sitemap.xml');
    await fs.writeFile(sitemapPath, sitemap.toString());
    
    console.log(`Sitemap generated successfully at: ${sitemapPath}`);
    console.log(`Sitemap includes ${pages.length} URLs`);
    
    return sitemapPath;
  } catch (error) {
    console.error('Error generating sitemap:', error);
    throw error;
  }
}

// Run the generator if this file is executed directly
if (import.meta.url === `file://${process.argv[1]}`) {
  generateSitemap()
    .then(() => {
      console.log('Sitemap generation completed successfully');
      process.exit(0);
    })
    .catch(error => {
      console.error('Error during sitemap generation:', error);
      process.exit(1);
    });
}

export { generateSitemap };
