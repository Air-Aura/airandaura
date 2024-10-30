const sharp = require('sharp');
const fs = require('fs').promises;
const path = require('path');

async function optimizeImages() {
  const inputDir = path.join(__dirname, '../public/imgs');
  const outputDir = path.join(__dirname, '../public/imgs/optimized');

  try {
    // Create output directory if it doesn't exist
    await fs.mkdir(outputDir, { recursive: true });

    // Read all files from input directory
    const files = await fs.readdir(inputDir);
    
    // Filter for jpg files
    const jpgFiles = files.filter(file => 
      file.match(/^\d{3}\.jpg$/)
    );

    console.log(`Found ${jpgFiles.length} images to optimize...`);

    // Process each file
    for (const file of jpgFiles) {
      const inputPath = path.join(inputDir, file);
      const outputPath = path.join(outputDir, file);

      await sharp(inputPath)
        .resize(1200, 1200, { 
          fit: 'inside',
          withoutEnlargement: true 
        })
        .jpeg({ 
          quality: 80,
          mozjpeg: true 
        })
        .toFile(outputPath);

      console.log(`Optimized: ${file}`);
    }

    console.log('All images optimized successfully!');
  } catch (error) {
    console.error('Error optimizing images:', error);
  }
}

optimizeImages();