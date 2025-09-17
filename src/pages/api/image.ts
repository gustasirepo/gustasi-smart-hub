import { NextApiRequest, NextApiResponse } from 'next';
import { createReadStream } from 'fs';
import { join } from 'path';
import sharp from 'sharp';
import { promisify } from 'util';
import { stat } from 'fs/promises';

const CACHE_CONTROL = 'public, max-age=31536000, immutable';
const IMAGE_CACHE = new Map();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { src, w, q = '80', fm = 'webp' } = req.query;
    
    if (!src || Array.isArray(src)) {
      return res.status(400).json({ error: 'Missing or invalid src parameter' });
    }

    // Validate input
    const width = w ? Math.min(Number(w), 3840) : undefined;
    const quality = Math.min(Math.max(Number(q), 1), 100);
    const format = ['webp', 'jpg', 'png', 'avif'].includes(fm as string) 
      ? fm as 'webp' | 'jpg' | 'png' | 'avif'
      : 'webp';

    // Generate cache key
    const cacheKey = `${src}-${width}-${quality}-${format}`;
    
    // Check cache
    if (IMAGE_CACHE.has(cacheKey)) {
      const { buffer, info } = IMAGE_CACHE.get(cacheKey);
      res.setHeader('Content-Type', `image/${format}`);
      res.setHeader('Content-Length', info.size);
      res.setHeader('Cache-Control', CACHE_CONTROL);
      return res.send(buffer);
    }

    // Resolve file path
    const filePath = join(process.cwd(), 'public', src);
    
    // Check if file exists
    try {
      await stat(filePath);
    } catch {
      return res.status(404).json({ error: 'Image not found' });
    }

    // Process image
    const transformer = sharp(filePath)
      .rotate()
      .resize(width, undefined, {
        fit: 'inside',
        withoutEnlargement: true,
      });

    // Set output format and quality
    switch (format) {
      case 'webp':
        transformer.webp({ quality });
        break;
      case 'jpg':
        transformer.jpeg({ quality, mozjpeg: true });
        break;
      case 'png':
        transformer.png({ quality });
        break;
      case 'avif':
        transformer.avif({ quality });
        break;
    }

    // Convert to buffer
    const buffer = await transformer.toBuffer();
    const info = await sharp(buffer).metadata();
    
    // Cache the result
    IMAGE_CACHE.set(cacheKey, { buffer, info });
    
    // Set headers
    res.setHeader('Content-Type', `image/${format}`);
    res.setHeader('Content-Length', buffer.length);
    res.setHeader('Cache-Control', CACHE_CONTROL);
    
    // Send the image
    res.send(buffer);
    
  } catch (error) {
    console.error('Image processing error:', error);
    res.status(500).json({ error: 'Error processing image' });
  }
}

// Clean up cache periodically
setInterval(() => {
  IMAGE_CACHE.clear();
}, 1000 * 60 * 60); // Clear cache every hour
