import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// ES Module equivalent of __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Promisify fs functions
const readdir = fs.promises.readdir;
const stat = fs.promises.stat;
const mkdir = fs.promises.mkdir;

// Directories
const publicDir = path.join(dirname(__dirname), 'public');
const outputDir = path.join(dirname(__dirname), 'public/optimized');

// Image formats to process
const IMAGE_FORMATS = ['.jpg', '.jpeg', '.png', '.webp'];

// Quality settings for different formats
const QUALITY_SETTINGS = {
  jpeg: 80,
  jpg: 80,
  png: 80,
  webp: 75,
};

// Create output directory if it doesn't exist
async function ensureOutputDirectory() {
  try {
    await stat(outputDir);
  } catch (e) {
    console.log('Creating optimized images directory...');
    await mkdir(outputDir, { recursive: true });
  }
}

// Get all image files in a directory recursively
async function getImageFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = await Promise.all(
    entries.map(async (entry) => {
      const fullPath = path.join(directory, entry.name);
      
      // Skip the optimized directory
      if (fullPath.includes('optimized')) {
        return [];
      }
      
      return entry.isDirectory()
        ? getImageFiles(fullPath)
        : (IMAGE_FORMATS.includes(path.extname(entry.name).toLowerCase()))
          ? fullPath
          : [];
    })
  );
  
  return files.flat();
}

// Optimize a single image
async function optimizeImage(filePath) {
  const relativePath = path.relative(publicDir, filePath);
  
  // Create optimized directory path preserving original directory structure
  const fileDir = path.dirname(relativePath);
  const fileName = path.basename(relativePath);
  const outputDirPath = path.join(outputDir, fileDir);
  const outputPath = path.join(outputDirPath, fileName);
  
  // Ensure the output directory exists
  await mkdir(outputDirPath, { recursive: true });
  
  // Get file extension
  const extension = path.extname(filePath).toLowerCase().replace('.', '');
  
  // Process image with sharp
  try {
    // Get image metadata
    const metadata = await sharp(filePath).metadata();
    
    // Create WebP version (for all images)
    await sharp(filePath)
      .webp({ quality: QUALITY_SETTINGS.webp })
      .toFile(outputPath.replace(path.extname(outputPath), '.webp'));
    
    // Create optimized version in original format
    if (extension === 'jpg' || extension === 'jpeg') {
      await sharp(filePath)
        .jpeg({ quality: QUALITY_SETTINGS.jpeg, mozjpeg: true })
        .toFile(outputPath);
    } else if (extension === 'png') {
      await sharp(filePath)
        .png({ quality: QUALITY_SETTINGS.png, compressionLevel: 9 })
        .toFile(outputPath);
    } else if (extension === 'webp') {
      await sharp(filePath)
        .webp({ quality: QUALITY_SETTINGS.webp })
        .toFile(outputPath);
    }
    
    console.log(`✅ Optimized: ${relativePath}`);
  } catch (error) {
    console.error(`❌ Error optimizing ${relativePath}: ${error.message}`);
  }
}

// Main function
async function optimizeImages() {
  try {
    console.log('Starting image optimization...');
    
    // Ensure output directory exists
    await ensureOutputDirectory();
    
    // Get all image files
    const imageFiles = await getImageFiles(publicDir);
    console.log(`Found ${imageFiles.length} images to optimize`);
    
    // Process all images
    await Promise.all(imageFiles.map(optimizeImage));
    
    console.log('✨ Image optimization complete!');
  } catch (error) {
    console.error('Error during image optimization:', error);
    process.exit(1);
  }
}

// Run the optimization
optimizeImages(); 