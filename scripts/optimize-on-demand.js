#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// ES Module equivalent of __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Promisify fs functions
const mkdir = fs.promises.mkdir;
const stat = fs.promises.stat;

// Directories
const publicDir = path.join(dirname(__dirname), 'public');
const outputDir = path.join(dirname(__dirname), 'public/optimized');

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

// Optimize a single image
async function optimizeImage(relativePath) {
  const filePath = path.join(publicDir, relativePath);
  
  // Check if file exists
  try {
    await stat(filePath);
  } catch (e) {
    console.error(`File not found: ${filePath}`);
    return;
  }
  
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
    console.log(`Optimizing: ${relativePath} (${metadata.width}x${metadata.height})`);
    
    // Create WebP version (for all images)
    await sharp(filePath)
      .webp({ quality: QUALITY_SETTINGS.webp })
      .toFile(outputPath.replace(path.extname(outputPath), '.webp'));
    
    // Also create AVIF version for maximum compatibility
    await sharp(filePath)
      .avif({ quality: QUALITY_SETTINGS.webp })
      .toFile(outputPath.replace(path.extname(outputPath), '.avif'));
    
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
    
    // Generate smaller versions
    const sizes = [1920, 1280, 960, 640, 480, 320];
    for (const size of sizes) {
      if (metadata.width > size) {
        const resizedOutputPath = outputPath.replace(path.extname(outputPath), `_${size}${path.extname(outputPath)}`);
        const resizedWebPPath = resizedOutputPath.replace(path.extname(resizedOutputPath), '.webp');
        
        await sharp(filePath)
          .resize(size)
          .webp({ quality: QUALITY_SETTINGS.webp })
          .toFile(resizedWebPPath);
        
        if (extension === 'jpg' || extension === 'jpeg') {
          await sharp(filePath)
            .resize(size)
            .jpeg({ quality: QUALITY_SETTINGS.jpeg, mozjpeg: true })
            .toFile(resizedOutputPath);
        } else if (extension === 'png') {
          await sharp(filePath)
            .resize(size)
            .png({ quality: QUALITY_SETTINGS.png, compressionLevel: 9 })
            .toFile(resizedOutputPath);
        }
      }
    }
    
    console.log(`✅ Generated responsive versions for: ${relativePath}`);
  } catch (error) {
    console.error(`❌ Error optimizing ${relativePath}: ${error.message}`);
  }
}

// Main function
async function optimizeImagesOnDemand() {
  try {
    console.log('Starting on-demand image optimization...');
    
    // Ensure output directory exists
    await ensureOutputDirectory();
    
    // Get image paths from command line arguments
    const imagePaths = process.argv.slice(2);
    
    if (imagePaths.length === 0) {
      console.log('No image paths provided. Please specify paths relative to the public directory.');
      console.log('Example: node scripts/optimize-on-demand.js images/photo1.jpg images/photo2.png');
      process.exit(1);
    }
    
    console.log(`Optimizing ${imagePaths.length} images...`);
    
    // Process all images
    for (const imagePath of imagePaths) {
      await optimizeImage(imagePath);
    }
    
    console.log('✨ Image optimization complete!');
  } catch (error) {
    console.error('Error during image optimization:', error);
    process.exit(1);
  }
}

// Run the optimization
optimizeImagesOnDemand(); 