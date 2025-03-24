# Image Optimization for Vite

This project includes built-in image optimization using Sharp and a custom OptimizedImage component. This guide explains how to use the various tools and components for optimizing images.

## How It Works

The image optimization system works as follows:

1. Images are stored in the `public` directory
2. The optimization scripts process these images and store optimized versions in `public/optimized`
3. The `OptimizedImage` component automatically uses the optimized versions when rendering

## Features

- **Automatic WebP Conversion**: All images are converted to WebP format for better compression
- **Responsive Sizes**: Multiple sizes of each image are generated for different viewports
- **Lazy Loading**: Images are loaded only when they enter the viewport
- **Blur Effect**: Optional blur-up loading effect for a better user experience
- **Quality Control**: Configurable quality settings for different image types

## Using the OptimizedImage Component

Replace standard `<img>` tags with our `OptimizedImage` component:

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

### Component Props

- `src`: Path to the image (required)
- `alt`: Alternative text for the image (required)
- `width`: Width of the image in pixels
- `height`: Height of the image in pixels
- `quality`: Image quality setting (not used directly in the component but passed to the optimization scripts)
- `priority`: Whether to prioritize loading the image (`true` sets `loading="eager"`)
- `blurEffect`: Whether to show a blur placeholder while loading
- `className`: CSS class for the container element
- `imgClassName`: CSS class for the image element
- `role`: Image role (`hero`, `gallery`, `thumbnail`, `profile`) - affects responsive sizes

## Image Optimization Scripts

### Optimize All Images

To optimize all images in the `public` directory:

```bash
npm run optimize-images
```

This command:
1. Scans the `public` directory for images
2. Creates optimized versions in the `public/optimized` directory
3. Generates WebP and AVIF versions
4. Creates multiple sizes for responsive loading

### Optimize Specific Images

To optimize specific images:

```bash
npm run optimize-image images/photo1.jpg images/photo2.png
```

This is useful when you add new images and want to optimize only those.

## Development Workflow

1. Place your images in the `public` directory
2. Run the development server with `npm run dev` (this automatically optimizes images)
3. Use the `OptimizedImage` component in your code
4. The component will automatically use the optimized versions

## Build Process

The optimization process is automatically run during the build process:

```bash
npm run build
```

## Troubleshooting

If images aren't displaying correctly:

1. Check that the `public/optimized` directory exists and contains optimized images
2. Verify that image paths are correct (they should be relative to the `public` directory)
3. Make sure you're using the `OptimizedImage` component correctly
4. Try running `npm run optimize-images` manually

## Best Practices

1. **Image Sizes**: Use appropriately sized images. Don't use a 4000px wide image for a thumbnail.
2. **Formats**: Use JPG for photos, PNG for images with transparency, and SVG for icons and illustrations.
3. **Priority**: Set `priority={true}` only for above-the-fold images.
4. **Alt Text**: Always provide meaningful alt text for accessibility.
5. **Lazy Loading**: Most images should be lazy-loaded (the default behavior). 