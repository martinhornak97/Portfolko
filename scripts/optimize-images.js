const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = path.join(process.cwd(), 'public/images');
const outputDir = path.join(process.cwd(), 'public/images');

// Ensure output directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Get all image files
const imageFiles = fs.readdirSync(inputDir).filter(file => 
  /\.(jpg|jpeg|png)$/i.test(file)
);

// Process each image
imageFiles.forEach(async file => {
  const inputPath = path.join(inputDir, file);
  const outputPath = path.join(outputDir, file.replace(/\.(jpg|jpeg|png)$/i, '.webp'));
  
  try {
    // Get image metadata
    const metadata = await sharp(inputPath).metadata();
    
    // Calculate new dimensions (max 2x display size)
    const maxWidth = 2000; // 1000px display * 2 for retina
    const ratio = metadata.width > maxWidth ? maxWidth / metadata.width : 1;
    const newWidth = Math.round(metadata.width * ratio);
    const newHeight = Math.round(metadata.height * ratio);

    await sharp(inputPath)
      .resize(newWidth, newHeight)
      .webp({ quality: 80 })
      .toFile(outputPath);

    console.log(`Converted ${file} to WebP (${newWidth}x${newHeight})`);
  } catch (error) {
    console.error(`Error processing ${file}:`, error);
  }
}); 