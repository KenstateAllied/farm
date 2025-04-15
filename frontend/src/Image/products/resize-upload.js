const cloudinary = require('cloudinary').v2;
const fs = require('fs');
const path = require('path');

// 🔐 Configure your Cloudinary account
cloudinary.config({
  cloud_name: 'dzc7j0duu',
  api_key: '547954346314942',
  api_secret: '1SscVssApvcrPxlT9GAoqHxgtQA',
});

// 📂 Local folder with images
const inputFolder = './images/products';


// 📐 Resize options
const resizeOptions = {
  width: 300,
  height: 300,
  crop: 'fit', // or 'fit', 'scale', 'fill', etc.
};

// 📁 Optional Cloudinary folder
const cloudinaryFolder = 'resized-images';

// 🖼️ Allowed image formats
const allowedExts = ['.jpg', '.jpeg', '.png', '.webp'];

// 🔁 Process all images in the folder
fs.readdirSync(inputFolder).forEach(file => {
  const ext = path.extname(file).toLowerCase();
  if (!allowedExts.includes(ext)) return;

  const filePath = path.join(inputFolder, file);
  const publicId = path.parse(file).name;

  cloudinary.uploader.upload(filePath, {
    folder: cloudinaryFolder,
    public_id: publicId,
    transformation: [
      {
        width: resizeOptions.width,
        height: resizeOptions.height,
        crop: resizeOptions.crop,
      },
    ],
  })
  .then(result => {
    console.log(`✅ Uploaded: ${file}`);
    console.log(`🔗 Resized URL: ${result.secure_url}\n`);
  })
  .catch(error => {
    console.error(`❌ Error uploading ${file}:`, error.message);
  });
});
