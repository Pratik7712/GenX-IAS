import React from 'react';
import { getResponsiveSizes } from '../utils/imageOptimizer';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  role?: 'hero' | 'gallery' | 'thumbnail' | 'profile';
  className?: string;
  imgClassName?: string;
  quality?: number;
  blurEffect?: boolean;
  priority?: boolean;
  loading?: 'lazy' | 'eager';
}

export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  role = 'gallery',
  className = '',
  imgClassName = '',
  quality = 80,
  blurEffect = false,
  priority = false,
  loading = 'lazy',
  ...rest
}: OptimizedImageProps) {
  // Get responsive sizes based on image role
  const sizes = getResponsiveSizes(role);
  
  // Get the optimized image path - check if image is in the optimized directory
  const optimizedSrc = src.startsWith('/') ? 
    (src.startsWith('/optimized/') ? src : `/optimized${src}`) : 
    src;
  
  // Get WebP version if it's a local image
  const webpSrc = optimizedSrc.startsWith('/') && !optimizedSrc.endsWith('.svg') ? 
    optimizedSrc.replace(/\.(jpg|jpeg|png)$/i, '.webp') : 
    optimizedSrc;
  
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <img
        src={webpSrc}
        alt={alt}
        width={width}
        height={height}
        className={`object-cover w-full h-full ${imgClassName}`}
        loading={priority ? 'eager' : 'lazy'}
        style={{
          opacity: blurEffect ? 0 : 1,
          transition: 'opacity 0.3s ease-in-out',
        }}
        onLoad={(e) => {
          if (blurEffect) {
            const target = e.target as HTMLImageElement;
            target.style.opacity = '1';
          }
        }}
        {...rest}
      />
    </div>
  );
} 