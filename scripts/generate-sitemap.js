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
const BUILD_DIR = path.join(process.cwd(), 'dist');
const PUBLIC_DIR = path.join(process.cwd(), 'public');
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

// Define dynamic routes patterns and their metadata
const DYNAMIC_ROUTES = {
  'features': { 
    priority: 0.8, 
    changefreq: EnumChangefreq.WEEKLY,
    lastmod: new Date().toISOString().split('T')[0]
  },
  'blog': { 
    priority: 0.7, 
    changefreq: EnumChangefreq.WEEKLY,
    lastmod: new Date().toISOString().split('T')[0]
  },
  'chefs': { 
    priority: 0.6, 
    changefreq: EnumChangefreq.WEEKLY,
    lastmod: new Date().toISOString().split('T')[0]
  },
};

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

// Helper to generate video sitemap entries
function generateVideoEntries(videos = []) {
  return videos.map(video => ({
    thumbnail_loc: video.thumbnail,
    title: video.title,
    description: video.description,
    content_loc: video.url,
    duration: video.duration || 180,
    publication_date: new Date().toISOString(),
    family_friendly: 'yes',
    requires_subscription: 'no',
    live: 'no',
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
        img: route.images ? generateImageEntries(route.images) : [],
        video: route.videos ? generateVideoEntries(route.videos || []) : []
      });
    }
  }
  
  // Add dynamic routes
  for (const [pattern, config] of Object.entries(DYNAMIC_ROUTES)) {
    try {
      const files = await glob(`src/pages/${pattern}/**/*.{js,jsx,ts,tsx}`, { 
        ignore: ['**/_*.{js,jsx,ts,tsx}', '**/api/**', '**/components/**'] 
      });
      
      for (const file of files) {
        const relativePath = path.relative('src/pages', file)
          .replace(/\.[jt]sx?$/, '')
          .replace(/\\/g, '/')
          .replace(/\/index$/, '');
        
        const url = `/${relativePath}`;
        
        // Skip if we already have this URL
        if (pages.some(p => p.url === url)) continue;
        
        // Generate alternate language links
        const links = LANGUAGES.map(lang => {
          const langCode = typeof lang === 'string' ? lang : lang.code;
          const langPath = langCode === DEFAULT_LANG ? '' : `/${langCode}`;
          return {
            lang: langCode,
            url: `${SITE_URL}${langPath}${url}`
          };
        });
        
        const lastmod = await getLastModified(file);
        
        pages.push({
          url,
          changefreq: config.changefreq || EnumChangefreq.WEEKLY,
          priority: config.priority || 0.5,
          lastmod: lastmod.toISOString(),
          links
        });
      }
    } catch (error) {
      console.error(`Error processing dynamic route ${pattern}:`, error);
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
    const sitemapStream = new SitemapStream({
      hostname: SITE_URL,
      xmlns: {
        // Enable image and video extensions
        image: true,
        video: true,
        // Add news and xhtml namespaces
        news: false,
        xhtml: true,
        // Add mobile support
        mobile: true
      }
    });
    
    // Create a writable stream to a file
    const writeStream = createWriteStream(path.join(OUTPUT_DIR, 'sitemap.xml'));
    const pipeline = sitemapStream.pipe(createGzip()).pipe(writeStream);
    
    // Add all pages to the sitemap
    for (const page of pages) {
      sitemapStream.write({
        url: page.url,
        changefreq: page.changefreq,
        priority: page.priority,
        lastmod: page.lastmod,
        links: page.links,
        img: page.img,
        video: page.video
      });
    }
    
    // End the stream
    sitemapStream.end();
    
    // Wait for the stream to finish
    await new Promise((resolve, reject) => {
      pipeline.on('finish', resolve);
      pipeline.on('error', reject);
    });
    
    console.log(`Sitemap generated at ${path.join(OUTPUT_DIR, 'sitemap.xml')}`);
    
    // Generate sitemap index if needed (for large sites with multiple sitemaps)
    if (pages.length > 50000) {
      console.log('Generating sitemap index...');
      await generateSitemapIndex(pages);
    }
    
    return true;
  } catch (error) {
    console.error('Error generating sitemap:', error);
    return false;
  }
}

// Generate sitemap index for large sites
async function generateSitemapIndex(pages) {
  try {
    const sitemapCount = Math.ceil(pages.length / 50000);
    const sitemapStream = new SitemapStream({
      hostname: SITE_URL,
      xmlns: { xhtml: true }
    });
    
    const writeStream = createWriteStream(path.join(OUTPUT_DIR, 'sitemap-index.xml'));
    const pipeline = sitemapStream.pipe(createGzip()).pipe(writeStream);
    
    // Add sitemap entries
    for (let i = 0; i < sitemapCount; i++) {
      const start = i * 50000;
      const end = start + 50000;
      const sitemapUrl = `${SITE_URL}/sitemap-${i + 1}.xml.gz`;
      
      sitemapStream.write({
        url: sitemapUrl,
        lastmod: new Date().toISOString(),
        changefreq: EnumChangefreq.DAILY,
        priority: 0.8
      });
    }
    
    sitemapStream.end();
    
    await new Promise((resolve, reject) => {
      pipeline.on('finish', resolve);
      pipeline.on('error', reject);
    });
    
    console.log(`Sitemap index generated at ${path.join(OUTPUT_DIR, 'sitemap-index.xml')}`);
    return true;
  } catch (error) {
    console.error('Error generating sitemap index:', error);
    return false;
  }
}

// Run the generator
if (import.meta.url === `file://${process.argv[1]}`) {
  generateSitemap()
    .then(success => {
      if (success) {
        console.log('Sitemap generation completed successfully');
        process.exit(0);
      } else {
        console.error('Sitemap generation failed');
        process.exit(1);
      }
    })
    .catch(error => {
      console.error('Error during sitemap generation:', error);
      process.exit(1);
    });
}

export { generateSitemap };
    }
  }

  return pages;
}

// Generate the sitemap
async function generateSitemap() {
  try {
    console.log('Starting sitemap generation...');
    
    // Find all pages
    const pages = await findPages();
    console.log(`Found ${pages.length} pages to include in sitemap`);
    
    // Create sitemap stream
    const stream = new SitemapStream({ 
      hostname: SITE_URL,
      xmlns: {
        // Enable these if needed:
        news: false,
        xhtml: true,
        image: false,
        video: false
      }
    });
    
    // Add all pages to sitemap
    for (const page of pages) {
      stream.write({
        url: page.url,
        changefreq: page.changefreq,
        priority: page.priority,
        lastmod: page.lastmod || new Date().toISOString(),
        links: page.links || []
      });
    }
    
    // End the stream
    stream.end();
    
    // Convert to string
    const sitemap = await streamToPromise(stream);
    
    // Write to file
    const sitemapPath = path.join(process.cwd(), 'public', 'sitemap.xml');
    fs.writeFileSync(sitemapPath, sitemap.toString());
    
    console.log(`Sitemap generated successfully at: ${sitemapPath}`);
    console.log(`Sitemap includes ${pages.length} URLs`);
    
    // Generate sitemap index if needed (for large sites)
    if (pages.length > 50000) {
      console.log('Large number of URLs detected. Consider splitting into multiple sitemaps.');
    }
    
    return sitemapPath;
  } catch (error) {
    console.error('Error generating sitemap:', error);
    throw error;
  }
}

// Run the generator
if (import.meta.url === `file://${process.argv[1]}`) {
  generateSitemap().catch(console.error);
}

export default generateSitemap;

generateSitemap().catch(console.error);
