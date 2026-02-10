import fs from 'fs';
import path from 'path';
import zlib from 'zlib';

function createSimplePNG(hexColor) {
  const width = 500;
  const height = 500;

  const PNG_SIGNATURE = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);

  const r = parseInt(hexColor.substring(0, 2), 16);
  const g = parseInt(hexColor.substring(2, 4), 16);
  const b = parseInt(hexColor.substring(4, 6), 16);

  const imageData = Buffer.alloc(width * height * 4);
  for (let i = 0; i < width * height; i++) {
    imageData[i * 4] = r;
    imageData[i * 4 + 1] = g;
    imageData[i * 4 + 2] = b;
    imageData[i * 4 + 3] = 255;
  }

  const IHDR = Buffer.alloc(13);
  IHDR.writeUInt32BE(width, 0);
  IHDR.writeUInt32BE(height, 4);
  IHDR.writeUInt8(8, 8);
  IHDR.writeUInt8(2, 9);
  IHDR.writeUInt8(0, 10);
  IHDR.writeUInt8(0, 11);
  IHDR.writeUInt8(0, 12);

  const compressed = zlib.deflateSync(imageData);

  function createChunk(type, data) {
    const length = Buffer.alloc(4);
    length.writeUInt32BE(data.length, 0);
    const typeBuffer = Buffer.from(type, 'ascii');
    const crc = Buffer.alloc(4);
    
    const crcInput = Buffer.concat([typeBuffer, data]);
    const crcValue = zlib.crc32(crcInput);
    crc.writeUInt32BE(crcValue >>> 0, 0);
    
    return Buffer.concat([length, typeBuffer, data, crc]);
  }

  const IHDRChunk = createChunk('IHDR', IHDR);
  const IDATChunk = createChunk('IDAT', compressed);
  const IENDChunk = createChunk('IEND', Buffer.alloc(0));

  return Buffer.concat([PNG_SIGNATURE, IHDRChunk, IDATChunk, IENDChunk]);
}

function rgbToHex(rgb) {
  return rgb.map(value => {
    const hex = value.toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  }).join('');
}

function sanitizeFileName(name) {
  return name
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '_')
    .replace(/-+/g, '_')
    .replace(/^_+|_+$/g, '');
}

const colorData = JSON.parse(fs.readFileSync('./src/utils/colornames-rgb.json', 'utf8'));
const colorBlockDir = './public/color-block';

console.log('检查并生成缺失的颜色块图片...\n');

let missingCount = 0;
let generatedCount = 0;
let errorCount = 0;

for (const [colorName, rgb] of Object.entries(colorData)) {
  const hexColor = rgbToHex(rgb);
  const safeName = sanitizeFileName(colorName);
  const fileName = `${safeName}.png`;
  const filePath = path.join(colorBlockDir, fileName);
  
  if (!fs.existsSync(filePath)) {
    console.log(`缺失: ${colorName} (${hexColor})`);
    try {
      const buffer = createSimplePNG(hexColor);
      fs.writeFileSync(filePath, buffer);
      generatedCount++;
      console.log(`  ✓ 已生成: ${fileName}`);
    } catch (error) {
      console.error(`  ✗ 生成失败: ${error.message}`);
      errorCount++;
    }
    missingCount++;
  }
}

console.log(`\n完成！`);
console.log(`总颜色数: ${Object.keys(colorData).length}`);
console.log(`缺失颜色数: ${missingCount}`);
console.log(`已生成: ${generatedCount}`);
console.log(`生成失败: ${errorCount}`);
