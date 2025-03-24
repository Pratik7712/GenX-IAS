/**
 * Image optimization utility functions for Vite
 */

export interface ImageOptions {
  width?: number;
  height?: number;
  quality?: number;
  priority?: boolean;
  placeholder?: 'blur' | 'empty';
  loading?: 'lazy' | 'eager';
}

/**
 * Get optimized image props for the Next.js Image component
 */
export function getOptimizedImageProps(src: string, alt: string, options: ImageOptions = {}) {
  const {
    width,
    height,
    quality = 80,
    priority = false,
    placeholder = 'empty',
    loading = 'lazy'
  } = options;

  return {
    src,
    alt,
    width,
    height,
    quality,
    priority,
    placeholder,
    loading,
    sizes: "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
  };
}

/**
 * Generates a low-quality placeholder URL for an image
 * This can be used with the blurDataURL prop
 */
export function getPlaceholderUrl(src: string) {
  // For local images, return a tiny version of the image
  if (src.startsWith('/')) {
    return `/_next/image?url=${encodeURIComponent(src)}&w=16&q=30`;
  }
  
  // For remote images, return a tiny quality version
  return src;
}

/**
 * Get responsive image sizes based on image role
 */
export function getResponsiveSizes(role: 'hero' | 'gallery' | 'thumbnail' | 'profile') {
  switch (role) {
    case 'hero':
      return "(max-width: 640px) 100vw, 100vw";
    case 'gallery':
      return "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw";
    case 'thumbnail':
      return "(max-width: 640px) 50vw, 25vw";
    case 'profile':
      return "(max-width: 640px) 33vw, 25vw";
    default:
      return "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw";
  }
}

/**
 * Get optimized src for an image
 * This function checks if an optimized version of the image exists and returns the appropriate path
 */
export function getOptimizedSrc(src: string, size?: number): string {
  // For remote images, return as is
  if (!src.startsWith('/') || src.startsWith('http')) {
    return src;
  }
  
  // Skip SVG files
  if (src.endsWith('.svg')) {
    return src;
  }
  
  // For local images, return the optimized version
  const basePath = src.startsWith('/optimized/') ? src : `/optimized${src}`;
  
  // If a specific size is requested, return that version
  if (size) {
    const extension = src.substring(src.lastIndexOf('.'));
    const baseName = basePath.substring(0, basePath.lastIndexOf('.'));
    return `${baseName}_${size}${extension}`;
  }
  
  return basePath;
}

/**
 * Get WebP version of an image
 */
export function getWebPSrc(src: string): string {
  // For remote images or SVGs, return as is
  if (!src.startsWith('/') || src.startsWith('http') || src.endsWith('.svg')) {
    return src;
  }
  
  // For local images, return the WebP version
  return src.replace(/\.(jpg|jpeg|png)$/i, '.webp');
} 