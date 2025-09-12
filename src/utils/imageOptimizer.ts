import React, { ImgHTMLAttributes, FC } from 'react';

interface ImageOptimizationOptions extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'src' | 'alt'> {
  src: string;
  alt: string;
  width?: number | string;
  height?: number | string;
  lazy?: boolean;
  priority?: boolean;
  quality?: number;
  sizes?: string;
}

export const OptimizedImage: FC<ImageOptimizationOptions> = ({
  src,
  alt,
  width,
  height,
  className = '',
  lazy = true,
  priority = false,
  quality = 80,
  sizes = '100vw',
  style = {},
  onLoad,
  onError,
  ...rest
}) => {
  // Handle missing source
  if (!src) return null;

  const isExternal = src.startsWith('http') || src.startsWith('//');
  let imageSrc = src;
  let srcSet = '';
  
  // Process local images
  if (!isExternal) {
    try {
      // In Vite, we can use the ?url and ?w= query params for image optimization
      // This requires the vite-imagetools plugin to be configured
      const params = new URLSearchParams();
      
      if (width && typeof width === 'number') {
        // For responsive images, generate srcset with different widths
        const multipliers = [1, 1.5, 2, 3];
        srcSet = multipliers
          .map(multiplier => {
            const w = Math.round(Number(width) * multiplier);
            return `${src}?w=${w}&q=${quality} ${w}w`;
          })
          .join(', ');
        
        // Set the largest size as the default src
        params.set('w', width.toString());
      }
      
      // Add quality parameter if specified
      if (quality) {
        params.set('q', quality.toString());
      }
      
      // Only modify the URL if we have parameters
      if (params.toString()) {
        imageSrc = `${src}?${params.toString()}`;
      }
    } catch (error) {
      console.error('Error optimizing image:', error);
    }
  }

  // Build the props object
  const imgProps: ImgHTMLAttributes<HTMLImageElement> = {
    src: imageSrc,
    alt,
    width,
    height,
    loading: lazy ? 'lazy' : 'eager',
    decoding: lazy ? 'async' : 'sync',
    className: `${className} ${lazy ? 'lazyload' : ''}`.trim(),
    style: {
      maxWidth: '100%',
      height: 'auto',
      ...style,
    },
    onLoad,
    onError,
    ...rest,
  };
  
  // Only add srcset and sizes if srcSet is not empty
  if (srcSet) {
    imgProps.srcSet = srcSet;
    imgProps.sizes = sizes;
  }

  // Use React.createElement to avoid JSX parsing issues
  return React.createElement('img', imgProps);
};
