# Image Optimization in Gustasi Smart Hub

This document outlines the image optimization setup in the Gustasi Smart Hub project.

## Overview

The project uses a combination of Vite's built-in asset handling and a custom `OptimizedImage` component to deliver optimized images with the following features:

- Automatic format conversion to WebP
- Lazy loading for better performance
- Responsive images with srcset
- Quality optimization
- Proper aspect ratio maintenance

## Usage

### Basic Usage

```tsx
import { OptimizedImage } from '@/utils/imageOptimizer';

// Basic usage
<OptimizedImage 
  src="/images/example.jpg"
  alt="Example image"
  width={800}
  height={600}
/>
```

### With Lazy Loading

Lazy loading is enabled by default. To disable it:

```tsx
<OptimizedImage 
  src="/images/example.jpg"
  alt="Example image"
  width={800}
  height={600}
  lazy={false}
/>
```

### Responsive Images

For responsive images, the component automatically generates a srcset:

```tsx
<OptimizedImage 
  src="/images/example.jpg"
  alt="Responsive image"
  width={800}
  height={600}
  sizes="(max-width: 768px) 100vw, 800px"
/>
```

### Quality Control

Adjust image quality (1-100):

```tsx
<OptimizedImage 
  src="/images/example.jpg"
  alt="High quality image"
  width={800}
  height={600}
  quality={90}
/>
```

## How It Works

1. **Build-Time Optimization**:
   - Images are processed during the build using Vite's asset pipeline
   - WebP conversion is applied by default
   - Multiple resolutions are generated for srcset

2. **Runtime Optimization**:
   - Lazy loading with native `loading="lazy"`
   - Automatic width/height attributes to prevent layout shifts
   - Proper decoding strategy for better performance

## Best Practices

1. Always provide width and height to prevent layout shifts
2. Use descriptive alt text for accessibility
3. Prefer WebP format for better compression
4. Use appropriate quality settings (default is 80)
5. Utilize srcset for responsive images

## Configuration

Image optimization settings can be configured in `vite.config.ts`:

```typescript
// In vite.config.ts
export default defineConfig({
  // ...
  plugins: [
    // ...
    imagetools({
      defaultDirectives: (url: URL) => {
        const params = new URLSearchParams(url.search);
        if (!params.has('format')) params.set('format', 'webp');
        if (!params.has('q')) params.set('q', '80');
        return new URLSearchParams(params);
      },
    }),
  ],
});
```

## Dependencies

- `vite-imagetools`: For build-time image optimization

## Troubleshooting

### Images Not Optimizing
- Ensure the image path is correct
- Check the file extension is supported (jpg, jpeg, png, webp)
- Verify the build process completes without errors

### Layout Shifts
- Always provide width and height attributes
- Use CSS `aspect-ratio` if needed

### Large Build Size
- Adjust the quality setting (lower = smaller files)
- Consider using a CDN for production
- Check for unused images in the project
