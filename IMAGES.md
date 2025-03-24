# Image Optimization Guide

This project includes built-in image optimization using Next.js Image components and Sharp. This guide explains how to use the various tools and components for optimizing images.

## Automatic Image Optimization

All images used with the built-in `OptimizedImage` component will be automatically optimized at build time. The optimization includes:

- Conversion to modern formats (WebP, AVIF)
- Resizing for responsive design
- Quality optimization
- Lazy loading
- Blur placeholders

## Components

### OptimizedImage Component

Use the `OptimizedImage` component for all images in your application:

```tsx
import OptimizedImage from '../components/OptimizedImage';

// Basic usage
<OptimizedImage
  src="/path/to/image.jpg"
  alt="Description of image"
  width={800}
  height={600}
/>

// Advanced usage with all options
<OptimizedImage
  src="/path/to/image.jpg"
  alt="Description of image"
  width={800}
  height={600}
  quality={85}
  priority={false}
  blurEffect={true}
  className="container-class"
  imgClassName="image-class"
  role="hero"
/>
```

#### Props

- `src`: Path to the image (required)
- `alt`: Alternative text for the image (required)
- `width`: Width of the image in pixels (required for remote images)
- `height`: Height of the image in pixels (required for remote images)
- `quality`: Image quality (1-100, default: 80)
- `priority`: Whether to prioritize loading the image (default: false)
- `blurEffect`: Whether to show a blur placeholder while loading (default: false)
- `className`: CSS class for the container element
- `imgClassName`: CSS class for the image element
- `role`: Image role (`hero`, `gallery`, `thumbnail`, `profile`) - affects responsive sizes

## Scripts

### Optimize All Images

To optimize all images in the `public` directory:

```bash
npm run optimize-images
```

This will:
1. Scan the `public` directory for images
2. Create optimized versions in the `public/optimized` directory
3. Generate responsive sizes and modern formats (WebP, AVIF)

### Optimize Specific Images

To optimize specific images:

```bash
npm run optimize-image images/photo1.jpg images/photo2.png
```

Replace `images/photo1.jpg images/photo2.png` with the paths to the images you want to optimize, relative to the `public` directory.

## Build Process

The optimization process is automatically run during the build process:

```bash
npm run build
```

## Best Practices

1. **Image Sizes**: Use appropriately sized images. Don't use a 4000px wide image for a thumbnail.
2. **Formats**: Use JPG for photos, PNG for images with transparency, and SVG for icons and illustrations.
3. **Priority**: Set `priority={true}` only for above-the-fold images.
4. **Alt Text**: Always provide meaningful alt text for accessibility.
5. **Lazy Loading**: Most images should be lazy-loaded (the default behavior).

## Troubleshooting

If you encounter issues with image optimization:

1. Check that Sharp is installed correctly: `npm install sharp`
2. Ensure the image paths are correct (relative to the `public` directory)
3. For large images, try reducing the dimensions before optimization 