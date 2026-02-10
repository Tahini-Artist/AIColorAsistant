// 颜色块图片生成器
// 用于生成纯色块的 PNG 图片

const fs = require('fs');
const path = require('path');

// 创建简单的 PNG 图片（不依赖外部库）
function createSimplePNG(hexColor) {
  const width = 500;
  const height = 500;

  // PNG 文件头
  const PNG_SIGNATURE = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);

  // 解析十六进制颜色
  const r = parseInt(hexColor.substring(0, 2), 16);
  const g = parseInt(hexColor.substring(2, 4), 16);
  const b = parseInt(hexColor.substring(4, 6), 16);

  // 创建图像数据（RGBA，每个像素 4 字节）
  const imageData = Buffer.alloc(width * height * 4);
  for (let i = 0; i < width * height; i++) {
    imageData[i * 4] = r;
    imageData[i * 4 + 1] = g;
    imageData[i * 4 + 2] = b;
    imageData[i * 4 + 3] = 255; // Alpha
  }

  // 创建 IHDR chunk
  const IHDR = Buffer.alloc(13);
  IHDR.writeUInt32BE(width, 0);
  IHDR.writeUInt32BE(height, 4);
  IHDR.writeUInt8(8, 8); // bit depth
  IHDR.writeUInt8(2, 9); // color type (RGB)
  IHDR.writeUInt8(0, 10); // compression
  IHDR.writeUInt8(0, 11); // filter
  IHDR.writeUInt8(0, 12); // interlace

  // 创建 IDAT chunk（简化版，使用 deflate 压缩）
  const zlib = require('zlib');
  const compressed = zlib.deflateSync(imageData);

  // 创建 PNG chunks
  function createChunk(type, data) {
    const length = Buffer.alloc(4);
    length.writeUInt32BE(data.length, 0);
    const typeBuffer = Buffer.from(type, 'ascii');
    const crc = Buffer.alloc(4);
    
    const crcInput = Buffer.concat([typeBuffer, data]);
    const crcValue = require('zlib').crc32(crcInput);
    crc.writeUInt32BE(crcValue >>> 0, 0);
    
    return Buffer.concat([length, typeBuffer, data, crc]);
  }

  const IHDRChunk = createChunk('IHDR', IHDR);
  const IDATChunk = createChunk('IDAT', compressed);
  const IENDChunk = createChunk('IEND', Buffer.alloc(0));

  return Buffer.concat([PNG_SIGNATURE, IHDRChunk, IDATChunk, IENDChunk]);
}

// 创建颜色块图片目录
const colorBlockDir = path.join(__dirname, '..', 'public', 'color-block');

// 确保目录存在
if (!fs.existsSync(colorBlockDir)) {
  fs.mkdirSync(colorBlockDir, { recursive: true });
}

// 生成所有颜色块
const colors = [
  '000000', 'ffffff', 'ff0000', '00ff00', '0000ff',
  'ffff00', 'ff00ff', '00ffff', 'ff8800',
  'ff0088', '88ff00', '0088ff', '8800ff',
  'f97316', 'ac4026', 'f6deb8', 'e8e4e8',
  'd97706', '4a90a4', '6b7280', '00bcd4',
  'f0f9da', '7c3aed', '4158d0', 'e1452f'
];

colors.forEach(color => {
  try {
    const buffer = createSimplePNG(color);
    const filePath = path.join(colorBlockDir, `${color}.png`);
    fs.writeFileSync(filePath, buffer);
    console.log(`Generated: ${color}.png`);
  } catch (error) {
    console.error(`Error generating ${color}.png:`, error.message);
  }
});

console.log('Color block images generated successfully!');
