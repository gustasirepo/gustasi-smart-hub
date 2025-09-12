import { useState, useEffect } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  loading?: 'eager' | 'lazy';
  quality?: number;
  placeholder?: string;
}

export const OptimizedImage = ({
  src,
  alt,
  width,
  height,
  className = '',
  loading = 'lazy',
  quality = 75,
  placeholder = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxIiBoZWlnaHQ9IjEiPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiNmNWY1ZjUiLz48L3N2Zz4='
}: OptimizedImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [imageSrc, setImageSrc] = useState(placeholder);
  const [imgRef, setImgRef] = useState<HTMLImageElement | null>(null);

  useEffect(() => {
    let observer: IntersectionObserver;
    let didCancel = false;

    if (imgRef && imageSrc === placeholder) {
      if (IntersectionObserver) {
        observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (!didCancel && (entry.intersectionRatio > 0 || entry.isIntersecting)) {
                const img = new Image();
                img.src = src;
                img.onload = () => {
                  if (!didCancel) {
                    setImageSrc(src);
                    setIsLoaded(true);
                  }
                };
                img.onerror = () => {
                  if (!didCancel) {
                    setImageSrc(placeholder);
                  }
                };
                observer.unobserve(imgRef);
              }
            });
          },
          {
            threshold: 0.01,
            rootMargin: '75%',
          }
        );
        observer.observe(imgRef);
      } else {
        // Fallback for browsers that don't support IntersectionObserver
        const img = new Image();
        img.src = src;
        img.onload = () => {
          if (!didCancel) {
            setImageSrc(src);
            setIsLoaded(true);
          }
        };
      }
    }

    return () => {
      didCancel = true;
      if (observer && observer.unobserve && imgRef) {
        observer.unobserve(imgRef);
      }
    };
  }, [src, imgRef, placeholder]);

  return (
    <img
      ref={setImgRef}
      src={imageSrc}
      alt={alt}
      width={width}
      height={height}
      className={`${className} transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
      loading={loading}
      decoding="async"
      style={{
        backgroundColor: isLoaded ? 'transparent' : '#f5f5f5',
        transition: 'opacity 0.3s ease-in-out',
      }}
    />
  );
};

export default OptimizedImage;
